const { url:urlHelper } = require('./../../../helpers');
const config = require('./config');
let _self; // eslint-disable-line consistent-this

module.exports = class InterceptorService {

	constructor(geeService) {
		_self = this;
		this.actions = config.endpointCollection;
		this.geeService = geeService;
	}

	response(res) {
		if (res.config.gee !== false) {
			const url = urlHelper.getUri(res.config.url);

			const triggerFn = ({ event, preprocess, process, postprocess }) => {
				if (typeof preprocess === 'function') {
					if (preprocess(res.data, res.config.data) === false) {
						return;
					}
				}

				if (typeof process === 'function') {
					process(res.data, res.config.data, _self.geeService);
				} else {
					_self.geeService.trigger(event, res.data);
				}

				if (typeof postprocess === 'function') {
					postprocess(res.data, res.config.data);
				}
			};

			for (const endpoint in _self.actions) {
				if (_self.actions[endpoint] && _self.actions[endpoint].length) {
					if ((new RegExp(`^${config.prefix}${endpoint}(/)?$`)).test(url)) {
						_self.actions[endpoint].forEach((action) => {
							if (urlHelper.isMethod(res.config.method, action.methods || action.method)) {
								triggerFn(action);
							}
						});
					}
				}
			}
		}

		return res;
	}

};
