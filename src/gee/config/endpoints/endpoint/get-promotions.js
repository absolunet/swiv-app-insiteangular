const { regex:regexHelper, url:urlHelper } = require('./../../../../helpers');
const cartRepository = require('./../../../repository/cart');

module.exports = {
	endpoint: `/carts/${regexHelper.guidRegExp}/promotions`,
	event: 'promoClick',
	method: urlHelper.methods.get,
	preprocess: (response) => {

		if (!response.promotions || response.promotions.length <= 0) {
			return false;
		}

		const [, currentCartId] = (new RegExp(`/carts/(${regexHelper.guidRegExp})/promotions/${regexHelper.guidRegExp}$`)).exec(response.promotions[0].uri);
		const cart = cartRepository.getCart();

		if (!cart || cart.id !== currentCartId) {
			return false;
		}

		cartRepository.unsetCart();

		return {
			main: response.promotions,
			misc: {},
			common: {}
		};
	}
};
