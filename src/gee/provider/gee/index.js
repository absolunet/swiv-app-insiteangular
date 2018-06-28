const GeeFactory = () => {
	return window.swiv.gee.getService();
};

GeeFactory.$inject = [];


class GeeProvider {

	get $get() {
		return GeeFactory;
	}

}

GeeProvider.$inject = [];


const boot = (ngModule) => {
	ngModule.provider(require('./name'), GeeProvider);
};

const provided = {
	GeeProvider,
	GeeFactory
};

module.exports = {
	boot,
	provided
};
