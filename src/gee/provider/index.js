module.exports = (ngModule) => {
	require('./gee').boot(ngModule);
	require('./interceptor').boot(ngModule);
};
