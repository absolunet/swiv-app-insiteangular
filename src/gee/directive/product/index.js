const directiveName = require('./name');
const positionDirective = require('./../position/name').replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

module.exports = (ngModule) => {

	ngModule.directive(directiveName, [
		require('./../../provider/gee/name'),
		(geeService) => {
			return {
				restrict: 'A',
				scope: {
					product: `=${directiveName}`
				},
				link: ($scope, $element) => {
					$element.on('click', () => {
						const position = $element.attr(positionDirective) || $element.closest(`[${positionDirective}]`).attr(positionDirective);
						const product = window.angular.copy($scope.product);
						product.properties = product.properties || {};
						product.properties.position = position;
						geeService.triggerProductClick(product);
					});
				}
			};
		}
	]);
};
