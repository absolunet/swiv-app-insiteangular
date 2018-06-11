module.exports = (ngModule) => {

    const GeeFactory = () => {
        return swiv.gee.getService();
    }

    GeeFactory.$inject = [];


    class GeeProvider {
        constructor() {
        }

        get $get() {
            return GeeFactory
        }
    }

    GeeProvider.$inject = [];

    ngModule.provider(require('./name'), GeeProvider);
}