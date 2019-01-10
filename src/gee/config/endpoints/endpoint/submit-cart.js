const { url:urlHelper } = require('./../../../../helpers');
const cartRepository = require('./../../../repository/cart');

module.exports = {
	endpoint: '/carts/current',
	event: 'purchase',
	method: urlHelper.methods.patch,
	preprocess: (response, request) => {
		if (['Processing', 'Submitted'].indexOf(response.status) === -1 || !request.cartLines || request.cartLines.length === 0) {
			return false;
		}

		cartRepository.setCart(response);

		return {
			main: request.cartLines,
			misc: {
				purchase: {
					actionField: {
						id: response ? response.erpOrderNumber || response.orderNumber || response.id : null,
						affiliation: 'Online Store',
						revenue: response.orderSubTotal.toFixed(2),
						tax: response.totalTax.toFixed(2),
						shipping: response.shippingAndHandling.toFixed(2)
					}
				}
			},
			common: {
				list: 'Cart'
			}
		};
	}
};
