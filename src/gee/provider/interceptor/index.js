module.exports = (ngModule) => {

	let _endpointPrefix = '';

	let self;

	const _endpointActionCollection = {};

	const _endpointAliasCollection = {};

	class Interceptor {

		constructor(actions, geeService) {
			self = this;
			this.actions = actions;
			this.geeService = geeService;
		}

		response(res) {
			if (res.config.gee !== false) {
				let url = res.config.url.replace(window.location.hostname, '');
				[url] = url.split('?');
				url = `${url.charAt(0) === '/' || (/http(s)?:/).test(url) ? '' : '/'}${url}`.replace(/\.json$/, '');

				const triggerFn = (action) => {
					self.geeService.trigger(action, res.data);
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
		const _processedEndpointActionCollection = {};

		for (const endpoint in _endpointAliasCollection) {
			if (_endpointAliasCollection[endpoint]) {
				let actions = [];
				const aliases = _endpointAliasCollection[endpoint] || [];
				aliases.push(endpoint);

				aliases.forEach((alias) => {
					actions = actions.concat(_endpointActionCollection[alias] || []);
				});

				_processedEndpointActionCollection[endpoint] = actions.filter((value, index, obj) => {
					return obj.indexOf(value) === index;
				});
			}
		}

		return new Interceptor(_processedEndpointActionCollection, geeService);
	};

	InterceptorFactory.$inject = [require('./../gee/name')];


	class InterceptorProvider {

		addAction(endpoint, action) {
			return this.safePush(_endpointActionCollection, endpoint, action);
		}

		set endpointPrefix(value) {
			_endpointPrefix = value;
		}

		get endpointPrefix() {
			return _endpointPrefix;
		}

		addEndpointAlias(endpoint, alias) {
			return this.safePush(_endpointAliasCollection, endpoint, alias);
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
