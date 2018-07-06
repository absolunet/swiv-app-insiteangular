const interceptor = require('./../../provider/interceptor/name');
const _actions = require('./list');

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
