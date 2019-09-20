const { url:urlHelper } = require('./../../../../helpers');
const productContextRepository = require('./../../../repository/productContext');

module.exports = {
	endpoint: '/realtimepricing',
	method: urlHelper.methods.post,
	process: (response, request, { geeService }) => {
		if (!response || !response.realTimePricingResults) {
			return false;
		}

		productContextRepository.all().reverse().forEach((productContext, key) => {
			const filteredProducts = productContext.products.filter((product) => {
				return response.realTimePricingResults.some((pricing) => {
					return pricing.productId === product.id;
				});
			});

			if (filteredProducts.length === 0) {
				return;
			}

			filteredProducts.forEach((product) => {
				const pricingResults = response.realTimePricingResults.filter((pricing) => {
					return pricing.productId === product.id;
				});

				if (pricingResults.length) {
					const indexOf = productContext.products.indexOf(product);
					let pricingIndex = productContext.products.filter((p, i) => {
						return p.id === product.id && i < indexOf;
					}).length;
					if (pricingIndex >= pricingResults.length) {
						pricingIndex = pricingResults.length - 1;
					}

					product.pricing = pricingResults[pricingIndex];
				}
			});

			const data = {
				main: filteredProducts,
				misc: {},
				common: productContext.context
			};

			geeService.trigger(productContext.event, data);
			productContextRepository.remove(key);
		});

		return true;
	}
};
