const __ = new WeakMap();

class ProductContextRepository {

	constructor() {
		__.set(this, { contexts:[], index:0 });
	}

	all() {
		return __.get(this).contexts.concat([]);
	}

	get(key) {
		return __.get(this).contexts.find(({ key:itemKey }) => {
			return itemKey === key;
		});
	}

	add(event, context, products) {
		const { contexts, index:key } = __.get(this);
		contexts.push({ event, context, products, key });
		__.get(this).index++;

		return this;
	}

	remove(key) {
		const { contexts } = __.get(this);
		const index = contexts.findIndex(({ key:itemKey }) => {
			return itemKey === key;
		});

		if (index > -1) {
			contexts.splice(index, 1);
		}

		return this;
	}

}

module.exports = new ProductContextRepository();
