class CartRepository {

	setSubmittedCart(cart) {
		localStorage.setItem(this.localStorageKey, JSON.stringify(cart));

		return this;
	}

	unsetCart() {
		localStorage.removeItem(this.localStorageKey);

		return this;
	}

	getSubmmittedCart() {
		return JSON.parse(localStorage.getItem(this.localStorageKey));
	}

	get localStorageKey() {
		return 'SWIV-GEE-CurrentCart';
	}

}

module.exports = new CartRepository();
