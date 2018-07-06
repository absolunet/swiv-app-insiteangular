const positionDirective = require('./../position/name').replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

module.exports = (geeService) => {
	return ($scope, $element, $attrs, $ctrls) => {
		$element.on('click', () => {
			const product = angular.copy($scope.product || $ctrls[0] ? $ctrls[0].$scope.product : null);
			if (product) {
				const position = $element.attr(positionDirective) || $element.closest(`[${positionDirective}]`).attr(positionDirective);
				product.properties = product.properties || {};
				product.properties.position = position;
				geeService.triggerProductClick(product);
			}
		});
	};
};
