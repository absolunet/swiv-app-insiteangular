const { regex:regexHelper } = require('./../../../../helpers');

module.exports = {
	endpoint: `/products/${regexHelper.guidRegExp}`,
	event: 'productDetail'
};
