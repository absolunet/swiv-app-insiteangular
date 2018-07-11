const directiveName = require('./name');
const scope = require('./scope');
const controllerFactory = require('./controller');

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
