const { url:urlHelper } = require('./../../../../helpers');
const cartRepository = require('./../../../repository/cart');

module.exports = {
	endpoint: '/carts/current',
	method: urlHelper.methods.get,
	process: (response) => {
		if (response.cartLines.length > 0) {
			cartRepository.setCart(response);
		}
	}
};
