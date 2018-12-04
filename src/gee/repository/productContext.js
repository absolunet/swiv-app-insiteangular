const __ = new WeakMap();

class ProductContextRepository {

	constructor() {
		this.set({}, {}, []);
	}

	set(event, context, products) {
		this.unset();

		__.set(this, {
			event: event,
			context: context,
			products: products
		});
	}

	unset() {
		if (__.has(this)) {
			__.delete(this);
		}
	}

	get() {
		if (__.has(this)) {
			return __.get(this);
		}

		return null;
	}

}

module.exports = new ProductContextRepository();
