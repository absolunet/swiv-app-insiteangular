const directiveName = require('./name');

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
						geeService.triggerRemoveFromCart({
							product: window.angular.copy($scope.product),
							list: 'Cart'
						});
					});
				}
			};
		}
	]);
};
