const { url:urlHelper } = require('./../../../../helpers');
const productContextRepository = require('./../../../repository/productContext');

module.exports = {
	endpoint: '/realtimepricing',
	method: urlHelper.methods.post,
	process: (response, request, { geeService }) => {
		const productContext = productContextRepository.get();

		if (productContext && productContext.event && productContext.context && productContext.products && productContext.products.length) {

			if (response && response.realTimePricingResults) {
				productContext.products.forEach((product) => {
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
			}

			const data = {
				main: productContext.products,
				misc: {},
				common: productContext.context
			};

			geeService.trigger(productContext.event, data);
		}
	}
};
