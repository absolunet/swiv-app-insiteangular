const interceptor = require('./../provider/interceptor/name');
const ProductDataMapper = require('swiv-map-insite');
const { guidRegExp } = require('./../../helpers');

const _endpointAlias = {
    ['/products'] : 'impression',
    [`/products/${guidRegExp}`]: 'impression',
};

module.exports = (ngModule) => {
    ngModule.config([
        `${interceptor}Provider`,
        ($interceptorProvider) => {
            $interceptorProvider.endpointPrefix = '/api/v1';

            for(const endpoint in _endpointAlias) {
                if (_endpointAlias[endpoint]) {
                    $interceptorProvider.addEndpointAlias(endpoint, _endpointAlias[endpoint]);
                    $interceptorProvider.addAction(_endpointAlias[endpoint], _endpointAlias[endpoint])
                }
            }
        }
    ]);
}