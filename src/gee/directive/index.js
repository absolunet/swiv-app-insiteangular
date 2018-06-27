module.exports = (ngModule) => {
	require('./product')(ngModule);
	require('./position')(ngModule);
	require('./remove-from-cart')(ngModule);
};
