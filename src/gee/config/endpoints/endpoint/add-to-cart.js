const { url:urlHelper } = require('./../../../../helpers');

module.exports = {
	endpoint: '/carts/current/cartlines(/batch)?',
	event: 'addToCart',
	method: urlHelper.methods.post,
	preprocess: (response, request) => {
		return {
			products: (response.cartLines || [angular.copy(response)]).map((product) => {
				product.qtyAdded = request.qtyOrdered || product.qtyOrdered;

				return product;
			})
		};
	}
};
