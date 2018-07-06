const config = require('./config');
const { url:urlHelper } = require('./../../../helpers');
const { Injectable } = require('./../../../helpers/class');
const InterceptorFactory = require('./factory');

module.exports = class InterceptorProvider extends Injectable {

	addAction(endpoint, action) {
		const defaultAction = {
			endpoint: null,
			event: '',
			method: urlHelper.methods.get,
			preprocess: null,
			process: null,
			postprocess: null
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

};
