const { regex:regexHelper, url:urlHelper } = require('./../../../../helpers');
const promotionRepository = require('./../../../repository/promotion');
const cartRepository = require('./../../../repository/cart');

module.exports = {
	endpoint: `/carts/${regexHelper.guidRegExp}`,
	event: 'purchase',
	method: urlHelper.methods.get,
	preprocess: (response) => {
		const isInSubmission = cartRepository.getSubmmittedCart() || false;

		const cart = response;

		if (!isInSubmission || ['Processing', 'Submitted'].indexOf(response.status) === -1) {
			return false;
		}

		const misc = {
			purchase: {
				actionField: {
					id: response ? response.erpOrderNumber || response.orderNumber || response.id : null,
					affiliation: response.billTo ? response.billTo.customerName : 'Online Store',
					revenue: response.orderSubTotal.toFixed(2),
					tax: response.totalTax.toFixed(2),
					shipping: response.shippingAndHandling.toFixed(2)
				}
			}
		};

		const promotion = promotionRepository.getPromoCode() || undefined;

		if (promotion) {
			misc.purchase.actionField.coupon = promotion;
		}

		cartRepository.unsetCart();
		promotionRepository.unsetPromoCode();

		return {
			main: cart.cartLines,
			misc: misc,
			common: {
				list: 'Cart'
			}
		};
	}
};
