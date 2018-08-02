const { string:stringHelper } = require('./../../../helpers');
const positionDirective = stringHelper.kebabCase(require('./../position/name'));
const getProductInControllers = require('./../common/get-product-in-controllers');

module.exports = (geeService) => {
	return ($scope, $element, $attrs, $ctrls) => {
		$element.on('click', ($event) => {
			if (!$event.isDefaultPrevented()) {
				const product = angular.copy($scope.product || getProductInControllers($ctrls));
				if (product) {
					const position = $element.attr(positionDirective) || $element.closest(`[${positionDirective}]`).attr(positionDirective);
					geeService.triggerProductClick({
						main: product,
						misc: {},
						common: {
							position: position
						}
					});
				}
			}
		});
	};
};
