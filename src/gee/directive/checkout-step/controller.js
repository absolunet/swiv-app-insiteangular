const { Injectable } = require('./../../../helpers/class');
const geeService = require('./../../provider/gee/name');
const propertyHistoryService = require('./../../provider/property-history/name');
const { string:stringHelper } = require('./../../../helpers');
const resolve = require('swiv/src/utils/resolve');
const directiveName = require('./name');

module.exports = (ngModule) => {

	const name = `${directiveName}Ctrl`;

	class CheckoutStepCtrl extends Injectable {

		static get $inject() {
			return [geeService, propertyHistoryService, '$scope', '$element'];
		}

		static get aliases() {
			return {
				[geeService]: 'geeService',
				[propertyHistoryService]: 'propertyHistoryService'
			};
		}

		get watchedProperties() {
			return {
				shipTo: () => {
					return 'Change shipping information';
				},
				notes: (n, o) => {
					return (!n || !o) && n !== o ? `${n ? 'Add' : 'Remove'} notes` : null;
				},
				carrier: (n) => {
					return n && n.description ? `Use carrier "${n.description}"` : null;
				},
				shipVia: (n) => {
					return n && n.description ? `Order via "${n.description}"` : null;
				},
				paymentMethod: (n) => {
					return n && n.description ? `Use payment method "${n.description}"` : null;
				},
				poNumber: (n, o) => {
					return (!n || !o) && n !== o ? `${n ? 'Add' : 'Remove'} PO number` : null;
				},
				promotionCode: (n, o) => {
					return (!n || !o) && n !== o ? `${n ? 'Add' : 'Remove'} promotion code` : null;
				},
				requestedDeliveryDate: (n, o) => {
					return (!n || !o) && n !== o ? `${n ? 'Add' : 'Remove'} requested delivery date` : null;
				}
			};
		}

		get step() {
			return this.$element.attr(stringHelper.kebabCase(directiveName));
		}

		init() {
			this.$scope.$watch(() => {
				return this.$element.controller ? this.$element.controller().cart : null;
			}, (cart, oldCart) => {
				if (cart) {
					if (oldCart) {
						this.cartUpdated(cart, oldCart);
					} else {
						this.pageResolved(cart);
					}
				}
			}, true);
		}

		pageResolved(cart) {
			this.geeService.triggerCheckout({
				products: cart.cartLines,
				actionField: {
					step: this.step
				}
			});
		}

		cartUpdated(cart, oldCart) {
			const diff = this.getDiff(cart, oldCart);
			const options = [];
			const { watchedProperties } = this;
			Object.keys(watchedProperties).forEach((property) => {
				const resolvedDiff = resolve(property, diff);
				if (typeof resolvedDiff !== 'undefined') {
					const oldValue = resolve(property, oldCart);
					const option = typeof watchedProperties[property] === 'function' ? watchedProperties[property](resolvedDiff, oldValue) : property;
					options.push(option);
				}
			});

			const { step } = this;
			options
				.filter((option) => {
					return Boolean(option);
				})
				.forEach((option) => {
					this.geeService.triggerCheckoutOption({ step, option });
				});
		}

		getDiff(newObj, oldObj) {
			return Object.keys(newObj).reduce((diff, key) => {
				if (oldObj[key] === newObj[key] || key === '$$hashKey') {
					return diff;
				}

				const diffValue = typeof newObj[key] === 'object' && typeof oldObj[key] === 'object' ? this.getDiff(newObj[key], oldObj[key]) : newObj[key];
				const returnedObj = {};
				Object.keys(diff).forEach((k) => {
					returnedObj[k] = diff[k];
				});

				returnedObj[key] = diffValue;

				if (typeof returnedObj[key] === 'object' && returnedObj[key] && Object.keys(returnedObj[key]).length === 0) {
					delete returnedObj[key];
				}

				return returnedObj;
			}, {});
		}

	}

	ngModule.controller(name, CheckoutStepCtrl);

	return name;
};
