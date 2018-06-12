module.exports = (ngModule) => {
	require('./gee')(ngModule);
	require('./interceptor')(ngModule);
};
