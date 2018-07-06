const { url:urlHelper } = require('./../../../../helpers');

module.exports = {
	endpoint: '/carts/current/cartlines(/batch)?',
	event: 'addToCart',
	method: urlHelper.methods.post,
	preprocess: (response, request) => {
		response.products = response.cartLines || [angular.copy(response)];
		response.list = '';
		response.products.forEach((product) => {
			product.qtyAdded = request.qtyOrdered || product.qtyOrdered;
		});
	}
};
