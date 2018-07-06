const { Injectable } = require('./../../../helpers/class');
const PropertyHistoryFactory = require('./factory');

module.exports = class PropertyHistoryProvider extends Injectable {

	get $get() {
		return PropertyHistoryFactory;
	}

};
