const productContextRepository = require('./../../../repository/productContext');

module.exports = {
	endpoint: '/websites/current/crosssells',
	event: 'productImpression',
	preprocess: (response) => {
		if (!response.products || response.products.length === 0) {
			return false;
		}

		const incompleteProducts = response.products.filter((product) => {
			return product.pricing && product.pricing.requiresRealTimePrice;
		});

		const context = {
			list: 'Web Cross Sale'
		};

		if (incompleteProducts.length) {
			productContextRepository.set('productImpression', context, incompleteProducts);

			return false;
		}

		const completedProducts = response.products.filter((product) => {
			return !incompleteProducts.filter((incompleteProduct) => {
				return incompleteProduct === product;
			});
		});

		if (completedProducts.length === 0) {
			return false;
		}

		return {
			main: completedProducts,
			misc: {},
			common: context
		};
	}
};
