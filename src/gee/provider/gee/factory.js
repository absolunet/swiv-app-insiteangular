const GeeFactory = () => {
	return window.swiv.gee.getService();
};

GeeFactory.$inject = [];

module.exports = GeeFactory;
