const InterceptorProvider = require('./provider');
const InterceptorFactory = require('./factory');
const InterceptorService = require('./service');

const boot = (ngModule) => {
	ngModule.provider(require('./name'), InterceptorProvider);
};

const provided = {
	InterceptorProvider,
	InterceptorFactory,
	InterceptorService
};

module.exports = {
	boot,
	provided
};
