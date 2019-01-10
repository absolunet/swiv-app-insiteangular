class CartRepository {

	setCart(cart) {
		localStorage.setItem(this.localStorageKey, JSON.stringify(cart));

		return this;
	}

	unsetCart() {
		localStorage.removeItem(this.localStorageKey);

		return this;
	}

	getCart() {
		return JSON.parse(localStorage.getItem(this.localStorageKey));
	}

	get localStorageKey() {
		return 'SWIV-GEE-CurrentCart';
	}

}

module.exports = new CartRepository();
