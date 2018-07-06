class Injectable {

	static get $inject() {
		return [];
	}

	static get aliases() {
		return {};
	}

	constructor(...args) {
		const { aliases } = this.constructor;
		this.constructor.$inject.forEach((dependency, index) => {
			this[aliases[dependency] || dependency] = args[index];
		});

		this.init();
	}

	init() {
		// eslint-disable-line empty-function
	}

}

module.exports = {
	Injectable
};
