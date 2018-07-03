const InterceptorService = require('./service');

const InterceptorFactory = (geeService) => {
	return new InterceptorService(geeService);
};

InterceptorFactory.$inject = [require('./../gee/name')];

module.exports = InterceptorFactory;
