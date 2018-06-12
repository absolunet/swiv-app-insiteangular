module.exports = (ngModule) => {

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

	ngModule.provider(require('./name'), GeeProvider);
};
