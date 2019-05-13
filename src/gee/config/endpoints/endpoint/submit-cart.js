const { url:urlHelper } = require('./../../../../helpers');
const cartRepository = require('./../../../repository/cart');

module.exports = {
	endpoint: '/carts/current',
	method: urlHelper.methods.patch,
	preprocess: (response, request) => {
		if (['Processing', 'Submitted'].indexOf(response.status) === -1 || !request.cartLines || request.cartLines.length === 0) {
			return false;
		}

		cartRepository.setCart(response);

		return false;
	}
};
