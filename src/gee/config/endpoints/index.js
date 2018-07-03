const interceptor = require('./../../provider/interceptor/name');

const _actions = [
	require('./endpoint/get-products'),
	require('./endpoint/get-product'),
	require('./endpoint/cross-sells'),
	require('./endpoint/get-wishlists'),
	require('./endpoint/get-wishlist'),
	require('./endpoint/current-session'),
	require('./endpoint/add-to-cart'),
	require('./endpoint/save-cart')
];

module.exports = (ngModule) => {
	ngModule.config([
		`${interceptor}Provider`,
		($interceptorProvider) => {
			$interceptorProvider.endpointPrefix = '/api/v1';
			_actions.forEach((action) => {
				$interceptorProvider.addAction(action.endpoint, action);
			});
		}
	]);
};
