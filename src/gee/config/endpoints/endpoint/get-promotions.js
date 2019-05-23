const { url:urlHelper } = require('./../../../../helpers');
const promotionRepository = require('./../../../repository/promotion');

module.exports = {
	endpoint: `/carts/current/promotions`,
	method: urlHelper.methods.get,
	preprocess: (response) => {

		if (response.promotions && response.promotions.length > 0) {
			const promoCodes = response.promotions ? response.promotions.filter((promotion) => { return promotion.promotionCode; })
				.map((promotion) => { return promotion.promotionCode; }).join('|') : null;
			promotionRepository.setPromoCode(promoCodes);
		}

		return false;
	}
};
