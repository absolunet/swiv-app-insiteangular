const { regex:regexHelper, url:urlHelper } = require('./../../../../helpers');
const cartRepository = require('./../../../repository/cart');

module.exports = {
	endpoint: `/carts/${regexHelper.guidRegExp}/promotions`,
	event: 'purchase',
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

		const promoCodes = response.promotions ? response.promotions.filter((promotion) => { return promotion.promotionCode; })
			.map((promotion) => { return promotion.promotionCode; }).join('|') : null;

		return {
			main: cart.cartLines,
			misc: {
				purchase: {
					actionField: {
						id: cart ? cart.erpOrderNumber || cart.orderNumber || cart.id : null,
						affiliation: 'Online Store',
						revenue: cart.orderSubTotal.toFixed(2),
						tax: cart.totalTax.toFixed(2),
						shipping: cart.shippingAndHandling.toFixed(2),
						coupon: promoCodes
					}
				}
			},
			common: {
				list: 'Cart'
			}
		};
	}
};
