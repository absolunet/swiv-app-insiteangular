module.exports = ($ctrls) => {
	return $ctrls
		.filter(($ctrl) => {
			return $ctrl.$scope && $ctrl.$scope.product;
		})
		.map(($ctrl) => {
			return $ctrl.$scope.product;
		})[0] || null;
};
