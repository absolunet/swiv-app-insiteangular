const { url:urlHelper } = require('./../../../../helpers');

module.exports = {
	endpoint: '/carts/current',
	event: 'removeFromCart',
	method: urlHelper.methods.patch,
	preprocess: (response, request) => {
		if (response.status !== 'Saved' || !request.cartLines || request.cartLines.length === 0) {
			return false;
		}

		return {
			main: request.cartLines,
			misc: {},
			common: {}
		};
	}
};
