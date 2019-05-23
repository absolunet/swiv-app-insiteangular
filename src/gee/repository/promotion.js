class PromotionRepository {

	setPromoCode(promoCode) {
		localStorage.setItem(this.localStorageKey, JSON.stringify(promoCode));

		return this;
	}

	unsetPromoCode() {
		localStorage.removeItem(this.localStorageKey);

		return this;
	}

	getPromoCode() {
		return JSON.parse(localStorage.getItem(this.localStorageKey));
	}

	get localStorageKey() {
		return 'SWIV-GEE-CurrentPromoCode';
	}

}

module.exports = new PromotionRepository();
