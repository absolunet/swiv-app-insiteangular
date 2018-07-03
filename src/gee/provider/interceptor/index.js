const { url:urlHelper } = require('./../../../helpers');
let _endpointPrefix = '';
let _self; // eslint-disable-line consistent-this
const _endpointActionCollection = {};

class Interceptor {

	constructor(actions, geeService) {
		_self = this;
		this.actions = actions;
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
					if ((new RegExp(`^${_endpointPrefix}${endpoint}(/)?$`)).test(url)) {
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

}

const InterceptorFactory = (geeService) => {
	return new Interceptor(_endpointActionCollection, geeService);
};

InterceptorFactory.$inject = [require('./../gee/name')];


class InterceptorProvider {

	addAction(endpoint, action) {
		const defaultAction = {
			event: '',
			mainDataName: null,
			getMainData: (data) => {
				return data;
			}
		};

		Object.keys(defaultAction).forEach((key) => {
			action[key] = action[key] || defaultAction[key];
		});

		return this.safePush(_endpointActionCollection, endpoint, action);
	}

	set endpointPrefix(value) {
		_endpointPrefix = value;
	}

	get endpointPrefix() {
		return _endpointPrefix;
	}

	safePush(arr, key, value) {
		arr[key] = arr[key] || [];
		arr[key].push(value);

		return this;
	}

	get $get() {
		return InterceptorFactory;
	}

}

InterceptorProvider.$inject = [];


const boot = (ngModule) => {
	ngModule.provider(require('./name'), InterceptorProvider);
};

const provided = {
	InterceptorProvider,
	InterceptorFactory,
	Interceptor
};

module.exports = {
	boot,
	provided
};
