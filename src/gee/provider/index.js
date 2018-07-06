module.exports = (ngModule) => {
	require('./gee')(ngModule);
	require('./interceptor')(ngModule);
	require('./property-history')(ngModule);
};
