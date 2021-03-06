# Google Enhanced Ecommerce
[_Swiv App modules - Insite w/ AngularJS_](../../readme.md) > [_Wiki_](../)

**This module handles all the Google Enhanced Ecommerce event trigger within the Insite default Responsive theme, built in AngularJS.**

- Google Enhanced Ecommerce
    - [Providers & configuration](providers)
    - [Pipes](pipes)
    - [Directives](directives)
    - [Events](events)

The main behaviour of the module is that it acts as an API pipe that catches all calls and do all the necessary work depending on the endpoint, the HTTP method, the request query, the payload, the headers and the response.

```javascript
angular.module("insite")
    .controller("fooCtrl", [
        "$http",
        function($http) {

            // Will trigger "productImpression" event with a product collection as default data
            $http.get("/api/v1/products");

            // Will trigger "productImpression" event with a single product as default data
            $http.get("/api/v1/products/7554706d-9600-4c9e-b851-ae14276fd600");

            // Will not trigger Google Enhanced Ecommerce pipeline
            $http.get("/api/v1/products", {gee: false});
        }
    ]);
```
