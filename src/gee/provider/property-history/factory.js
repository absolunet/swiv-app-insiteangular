const PropertyHistoryService = require('./service');

const PropertyHistoryFactory = (...args) => {
	return new PropertyHistoryService(...args);
};

PropertyHistoryFactory.$inject = [];

module.exports = PropertyHistoryFactory;
