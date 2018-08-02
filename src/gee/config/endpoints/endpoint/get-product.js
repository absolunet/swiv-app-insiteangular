const { regex:regexHelper } = require('./../../../../helpers');

module.exports = {
	endpoint: `/products/${regexHelper.guidRegExp}`,
	event: 'productDetail',
	preprocess: (response) => {
		return {
			main: response.product,
			misc: {},
			common: {
				list: 'Detail Page'
			}
		};
	}
};
