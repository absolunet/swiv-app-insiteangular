const positionDirective = require('./../position/name').replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
const getProductInControllers = require('./../common/get-product-in-controllers');

module.exports = (geeService) => {
	return ($scope, $element, $attrs, $ctrls) => {
		$element.on('click', () => {
			const product = angular.copy($scope.product || getProductInControllers($ctrls));
			if (product) {
				const position = $element.attr(positionDirective) || $element.closest(`[${positionDirective}]`).attr(positionDirective);
				product.properties = product.properties || {};
				product.properties.position = position;
				geeService.triggerProductClick(product);
			}
		});
	};
};
