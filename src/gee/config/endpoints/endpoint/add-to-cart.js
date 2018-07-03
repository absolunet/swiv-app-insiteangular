const { url:urlHelper } = require('./../../../../helpers');

module.exports = {
	endpoint: '/carts/current/cartlines(/batch)?',
	event: 'addToCart',
	method: urlHelper.methods.post,
	preprocess: (response) => {
		response.products = response.cartLines || [angular.copy(response)];
	}
};
