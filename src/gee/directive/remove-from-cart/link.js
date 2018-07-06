module.exports = (geeService) => {
	return ($scope, $element, $attrs, $ctrls) => {
		$element.on('click', () => {
			const products = $scope.products || $ctrls[0] ? $ctrls[0].$scope.product : null;
			if (products) {
				const productsCopy = angular.copy(products instanceof Array ? products : [products]);
				geeService.triggerRemoveFromCart({
					products: productsCopy,
					list: 'Cart'
				});
			}
		});
	};
};
