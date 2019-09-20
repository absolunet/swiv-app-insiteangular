const __ = new WeakMap();

class ProductContextRepository {

	constructor() {
		__.set(this, []);
	}

	all() {
		return __.get(this).concat([]);
	}

	get(key) {
		return __.get(this)[key];
	}

	add(event, context, products) {
		__.get(this).push({ event, context, products });

		return this;
	}

	remove(key) {
		__.get(this).splice(key, 1);

		return this;
	}

}

module.exports = new ProductContextRepository();
