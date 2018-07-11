const { regex:regexHelper } = require('./../../../../helpers');

module.exports = {
	endpoint: `/products/${regexHelper.guidRegExp}`,
	event: 'productDetail',
	preprocess: (response) => {
		return {
			product: response,
			list: 'Detail Page'
		};
	}
};
