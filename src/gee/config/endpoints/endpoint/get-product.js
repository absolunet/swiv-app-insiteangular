const { regex:regexHelper } = require('./../../../../helpers');
const productContextRepository = require('./../../../repository/productContext');

module.exports = {
	endpoint: `/products/${regexHelper.guidRegExp}`,
	event: 'productDetail',
	preprocess: (response) => {
		if (!response.product) {
			return false;
		}

		const context = {
			list: 'Detail Page'
		};

		if (response.product.pricing && response.product.pricing.requiresRealTimePrice) {
			productContextRepository.add('productDetail', context, [response.product]);

			return false;
		}

		return {
			main: response.product,
			misc: {},
			common: {
				list: context
			}
		};
	}
};
