# Directives
[_Swiv App modules - Insite w/ AngularJS_](../../../readme.md) > [_Wiki_](../../) > [Google Enhanced Ecommerce](../)

- [Google Enhanced Ecommerce](../)
    - [Providers & configuration](../providers)
    - [Pipes](../pipes)
    - Directives
    - [Events](../events)


## swivGeeProduct

Allow Swiv to do appropriate bindings to the ProductDto, CartLineDto and the attached $element.

```HTML
<div class="product" swiv-gee-product="vm.product">(...)</div>
<product-item ng-repeat="vm.products" product="product" swiv-gee-product="product" />
<li ng-repeat="cartLine in cart.cartLine" swiv-gee-product="cartLine">
```

## swivGeePosition

Allow Swiv to track the position of a product in an arbitrary list that may use pagination or be customized.
Alone, this directive does nothing.

```HTML
<div class="product" ng-repeat="product in vm.products" swiv-gee-position="{{ $index + 1 }}">(...)</div>
```

## swivGeeProductClick

Allow Swiv to handle a product click event within the user interaction with the DOM.
You can pass the ProductDto to the directive. However, it is not mandatory if it was defined within a parent with the swivGeeProduct directive, which will be used to get the reference.

```HTML
<div class="product" ng-repeat="product in vm.products">
    (...)
    <a ng-href="{{ product.productDetailUrl }}" swiv-gee-product-click="product">See more</a>
    (...)
</div>

<div class="product" ng-repeat="product in vm.products" swiv-gee-product="product">
    (...)
    <a ng-href="{{ product.productDetailurl }}" swiv-gee-product-click>See more</a>
    (...)
</div>
```

## swivGeeRemoveFromCart

Allow Swiv to handle a remove from cart event within the user insteraction with the DOM.
You can pass the ProductDto to the directive. However, it is not mandatory if it was defined within a parent with the swivGeeProduct directive, which will be used to get the reference.

```HTML
    <li ng-repeat="cartLine in cart.cartLines">
        (...)
        <a ng-click="vm.removeLine(cartLine)" swiv-gee-product-remove-from-cart="cartLine">X</a>
        (...)
    </li>

    <li ng-repeat="cartLine in cart.cartLines" swiv-gee-product="cartLine">
        (...)
        <a ng-click="vm.removeLine(cartLine)" swiv-gee-product-remove-from-cart>X</a>
        (...)
    </li>
```

## swivGeeCheckoutStep

Allow Swiv to track the current checkout step.
To make it work property, it must be bind to the main widget controller's element.
Te directive will watch the widget controller's $scope properties to do proper actions (checkout, checkout-option).

```HTML
<div ng-controller="CheckoutAddressController as vm" ng-cloak swiv-gee-checkout-step="1">(...)</div>
<div ng-controller="ReviewAndPayController as vm" ng-cloak cart-url="[% urlForPage 'CartPage' %]" swiv-gee-checkout-step="2">(...)</div>
```
