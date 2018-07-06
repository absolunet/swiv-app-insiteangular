const directiveName = require('./name');
const controllerFactory = require('./controller');
const scope = require('./scope');

module.exports = (ngModule) => {
	const controller = controllerFactory(ngModule);
	const restrict = 'A';

	ngModule.directive(directiveName, require('./inject')(() => {
		return {
			restrict,
			scope,
			controller
		};
	}));
};
