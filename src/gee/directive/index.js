module.exports = (ngModule) => {
	require('./product')(ngModule);
	require('./position')(ngModule);
	require('./product-click')(ngModule);
	require('./remove-from-cart')(ngModule);
};
