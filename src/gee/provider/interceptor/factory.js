const InterceptorService = require('./service');

const InterceptorFactory = (...args) => {
	return new InterceptorService(...args);
};

InterceptorFactory.$inject = [
	require('./../gee/name'),
	require('./../property-history/name')
];

module.exports = InterceptorFactory;
