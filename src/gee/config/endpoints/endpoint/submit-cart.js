const { url:urlHelper } = require('./../../../../helpers');

module.exports = {
	endpoint: '/carts/current',
	event: 'purchase',
	method: urlHelper.methods.patch,
	preprocess: (response, request) => {
		if (response.status !== 'Processing') {
			return false;
		}

		response.products = request.cartLines;
		response.list = 'Cart';

		return true;
	}
};
