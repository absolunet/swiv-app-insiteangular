const config = require('./config');
const InterceptorFactory = require('./factory');

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

		return this.safePush(config.endpointCollection, endpoint, action);
	}

	set endpointPrefix(value) {
		config.prefix = value;
	}

	get endpointPrefix() {
		return config.prefix;
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

module.exports = InterceptorProvider;
