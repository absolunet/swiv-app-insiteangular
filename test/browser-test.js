(() => {
    angular.module('insite', ['insite.swiv'])
        .controller('testCtrl', [
            '$http',
            function ($http) {
                $http.get('api/v1/products.json?expand=foo,bar')
                    .then((result) => {
                        this.products = result.data.products;
                    });

                this.impressProduct = (product) => {
                    $http.get(`api/v1/products/${product.id}.json?expand=foo,bar,baz`)
                }
            }
        ]);
})();