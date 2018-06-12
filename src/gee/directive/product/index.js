const prefix = require('./../name');

module.exports = (ngModule) => {

    const name = `${prefix}Product`;

    ngModule.directive(name, [
        require('./../../provider/gee/name'),
        (geeService) => {
            return {
                restrict: 'AC',
                replace: false,
                scope: {
                    product: `=${name}`
                },
                link: ($scope, $element) => {
                    $element.on('click', () => {
                        geeService.triggerProductClick($scope.product);
                    });
                }
            };
        }
    ]);
}
