const directiveName = require('./name');

module.exports = (ngModule) => {

	ngModule.directive(directiveName, [
		require('./../../provider/gee/name'),
		(geeService) => {
			return {
				restrict: 'A',
				scope: {
					products: `=${directiveName}`
				},
				link: ($scope, $element) => {
					$element.on('click', () => {
						const products = angular.copy($scope.products);
						geeService.triggerRemoveFromCart({
							products: products instanceof Array ? products : [products],
							list: 'Cart'
						});
					});
				}
			};
		}
	]);
};
