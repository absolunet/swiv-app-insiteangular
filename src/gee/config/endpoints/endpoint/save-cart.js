const { url:urlHelper } = require('./../../../../helpers');

module.exports = {
	endpoint: '/carts/current',
	event: 'removeFromCart',
	method: urlHelper.methods.patch,
	preprocess: (response, request) => {
		if (response.status !== 'Saved') {
			return false;
		}

		return {
			products: request.cartLines
		};
	}
};
