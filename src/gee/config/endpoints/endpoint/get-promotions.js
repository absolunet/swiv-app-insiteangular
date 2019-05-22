const { regex:regexHelper, url:urlHelper } = require('./../../../../helpers');
const cartRepository = require('./../../../repository/cart');

module.exports = {
	endpoint: `/carts/${regexHelper.guidRegExp}/promotions`,
	event: 'purchase',
	method: urlHelper.methods.get,
	preprocess: (response) => {

		const cart = cartRepository.getCart();

		if (!cart) {
			return false;
		}

		const misc = {
			purchase: {
				actionField: {
					id: cart ? cart.erpOrderNumber || cart.orderNumber || cart.id : null,
					affiliation: 'Online Store',
					revenue: cart.orderSubTotal.toFixed(2),
					tax: cart.totalTax.toFixed(2),
					shipping: cart.shippingAndHandling.toFixed(2)
				}
			}
		};

		if (response.promotions && response.promotions.length > 0) {
			const promoCodes = response.promotions ? response.promotions.filter((promotion) => { return promotion.promotionCode; })
				.map((promotion) => { return promotion.promotionCode; }).join('|') : null;

			misc.purchase.actionField.coupon = promoCodes;
		}

		cartRepository.unsetCart();

		return {
			main: cart.cartLines,
			misc: misc,
			common: {
				list: 'Cart'
			}
		};
	}
};
