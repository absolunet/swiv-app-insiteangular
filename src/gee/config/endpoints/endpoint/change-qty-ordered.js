const { url:urlHelper, regex:regexHelper } = require('./../../../../helpers');
const qtyOrderedProp = 'qtyOrdered';

module.exports = {
	endpoint: `/carts/current/cartlines/${regexHelper.guidRegExp}?`,
	method: urlHelper.methods.patch,
	process: (response, request, { propertyHistoryService, geeService }) => {
		const originalQty = propertyHistoryService.getInitialValue(response, qtyOrderedProp);
		const actualQty = response.qtyOrdered;
		const added = originalQty < actualQty;
		const qtyProp = `qty${added ? 'Added' : 'Removed'}`;

		geeService.trigger(added ? 'addToCart' : 'removeFromCart', {
			product: angular.copy(response),
			list: '',
			[qtyProp]: Math.abs(originalQty - actualQty)
		});

		propertyHistoryService.resetPropertyHistory(response, qtyOrderedProp);
		propertyHistoryService.updateProperty(response, qtyOrderedProp, actualQty);
	}
};
