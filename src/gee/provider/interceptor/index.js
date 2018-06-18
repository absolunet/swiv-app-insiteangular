module.exports = (ngModule) => {

	let _endpointPrefix = '';

	let self;

	const _endpointActionCollection = {};

	class Interceptor {

		constructor(actions, geeService) {
			self = this;
			this.actions = actions;
			this.geeService = geeService;
		}

		response(res) {
			let url = res.config.url.replace(window.location.hostname, '');
			[url] = url.split('?');
			url = `${url.charAt(0) === '/' || (/http(s)?:/).test(url) ? '' : '/'}${url}`.replace(/\.json$/, '');

			if (res.config.gee !== false) {
				const triggerFn = ({ event, preprocess, process }) => {
					if (typeof preprocess === 'function') {
						preprocess(res.data);
					}

					if (typeof process === 'function') {
						process(res.data, self.geeService);
					} else {
						self.geeService.trigger(event, res.data);
					}
				};

				for (const endpoint in self.actions) {
					if (self.actions[endpoint] && self.actions[endpoint].length) {
						if ((new RegExp(`^${_endpointPrefix}${endpoint}(/)?$`)).test(url)) {
							self.actions[endpoint].forEach(triggerFn);
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

	ngModule.provider(require('./name'), InterceptorProvider);
};
