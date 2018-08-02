const { url:urlHelper } = require('./../../../../helpers');

module.exports = {
	endpoint: '/carts/current/cartlines(/batch)?',
	event: 'addToCart',
	method: urlHelper.methods.post,
	preprocess: (response, request) => {
		return {
			main: (response.cartLines || [angular.copy(response)]).map((product) => {
				product.qtyAdded = request.qtyOrdered || product.qtyOrdered;

				return product;
			}),
			misc: {},
			common: {}
		};
	}
};
