const { Injectable } = require('./../../../helpers/class');
const propertyHistoryService = require('./../../provider/property-history/name');

module.exports = (ngModule) => {

	const name = `${require('./name')}Ctrl`;

	class ProductCtrl extends Injectable {

		static get $inject() {
			return ['$scope', propertyHistoryService];
		}

		init() {
			this.$scope.$watch('product.qtyOrdered', (...args) => {
				this.onQuantityChange(...args);
			});
		}

		onQuantityChange(newQuantity, oldQuantity) {
			if (newQuantity !== oldQuantity || this.propertyHistoryService.getPropertyHistory(this.$scope.product, 'qtyOrdered').length === 0) {
				this.propertyHistoryService.updateProperty(this.$scope.product, 'qtyOrdered', newQuantity);
			}
		}

	}

	ngModule.controller(name, ProductCtrl);

	return name;
};
