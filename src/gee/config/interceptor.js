const interceptor = require('./../provider/interceptor/name');

module.exports = (ngModule) => {

	ngModule.config([
		'$httpProvider',
		($httpProvider) => {
			$httpProvider.interceptors.push(interceptor);
		}
	]);
};
