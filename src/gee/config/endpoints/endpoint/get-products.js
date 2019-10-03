const productContextRepository = require('./../../../repository/productContext');

module.exports = {
	endpoint: '/products',
	event: 'productImpression',
	preprocess: (response, request, interceptor, config) => {
		if (!response.products || response.products.length === 0 || (/(frequently|recently)purchase/).test((config.params || {}).expand || '')) {
			return false;
		}

		const detailController = '[data-ng-controller="ProductDetailController as vm"]';
		const currentCtrl = angular.element(detailController).controller();
		let filteredResponse;

		if (currentCtrl !== undefined) {
			const { product } = currentCtrl;
			filteredResponse = response.products.filter((responseProduct) => {

				return responseProduct.id !== product.id;
			});
		} else {
			filteredResponse = response.products;
		}

		const incompleteProducts = filteredResponse.filter((product) => {
			return product.pricing && product.pricing.requiresRealTimePrice;
		});

		const context = {
			pagination: response.pagination,
			list: response.originalQuery ? 'Search Results' : 'List Page'
		};

		if (incompleteProducts.length) {
			productContextRepository.add('productImpression', context, incompleteProducts);

			return false;
		}

		const completedProducts = filteredResponse.filter((product) => {
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
