const { guidRegExp } = require('./../../../../helpers');

module.exports = {
	endpoint: `/products/${guidRegExp}`,
	event: 'productDetail'
};
