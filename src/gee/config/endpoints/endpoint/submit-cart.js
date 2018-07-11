const { url:urlHelper } = require('./../../../../helpers');

module.exports = {
	endpoint: '/carts/current',
	event: 'purchase',
	method: urlHelper.methods.patch,
	preprocess: (response, request) => {
		if (response.status !== 'Processing') {
			return false;
		}

		return {
			products: request.cartLines,
			list: 'Cart',
			purchase: {
				actionField: {
					id: response.erpOrderNumber,
					affiliation: 'Online Store',
					revenue: response.orderGrandTotal.toFixed(2),
					tax: response.totalTax.toFixed(2),
					shipping: response.shippingAndHandling.toFixed(2)
				}
			}
		};
	}
};
