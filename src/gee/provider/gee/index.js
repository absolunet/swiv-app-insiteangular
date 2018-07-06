const GeeProvider = require('./provider');

module.exports = (ngModule) => {
	ngModule.provider(require('./name'), GeeProvider);
};
