const { url:urlHelper } = require('./../../../helpers');
const config = require('./config');
let _self; // eslint-disable-line consistent-this

module.exports = class InterceptorService {

	constructor(geeService, propertyHistoryService) {
		_self = this;
		this.actions = config.endpointCollection;
		this.geeService = geeService;
		this.propertyHistoryService = propertyHistoryService;
	}

	response(res) {
		_self.handleResponse(angular.copy(res));

		return res;
	}

	handleResponse(res) {
		if (res.config.gee !== false) {
			const url = urlHelper.getUri(res.config.url);

			for (const endpoint in this.actions) {
				if (this.actions[endpoint] && this.actions[endpoint].length) {
					if ((new RegExp(`^${config.prefix}${endpoint}(/)?$`)).test(url)) {
						this.actions[endpoint].forEach((action) => {
							if (urlHelper.isMethod(res.config.method, action.methods || action.method)) {
								this.triggerAction(res, action);
							}
						});
					}
				}
			}
		}
	}

	triggerAction(res, { event, preprocess, process, postprocess }) {
		if (typeof preprocess === 'function') {
			const preprocessedValue = preprocess(res.data, res.config.data, this);
			if (preprocessedValue === false) {
				return;
			}

			res.data = typeof preprocessedValue === 'object' && preprocessedValue ? preprocessedValue : res.data;
		}

		if (typeof process === 'function') {
			process(res.data, res.config.data, this);
		} else {
			this.geeService.trigger(event, res.data);
		}

		if (typeof postprocess === 'function') {
			postprocess(res.data, res.config.data, this);
		}
	}

};
