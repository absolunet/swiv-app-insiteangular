const interceptor = require('./../provider/interceptor/name');
const { guidRegExp } = require('./../../helpers');

const _endpointAlias = {
	'/products': 'productImpression',
	[`/products/${guidRegExp}`]: 'productDetail'
};

module.exports = (ngModule) => {
	ngModule.config([
		`${interceptor}Provider`,
		($interceptorProvider) => {
			$interceptorProvider.endpointPrefix = '/api/v1';

			for (const endpoint in _endpointAlias) {
				if (_endpointAlias[endpoint]) {
					$interceptorProvider.addEndpointAlias(endpoint, _endpointAlias[endpoint]);
					$interceptorProvider.addAction(_endpointAlias[endpoint], _endpointAlias[endpoint]);
				}
			}
		}
	]);
};
