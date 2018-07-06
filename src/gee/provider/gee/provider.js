const GeeFactory = require('./factory');

class GeeProvider {

	get $get() {
		return GeeFactory;
	}

}

GeeProvider.$inject = [];

module.exports = GeeProvider;
