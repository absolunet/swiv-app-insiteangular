const directiveName = require('./name');
const productDirective = require('./../product/name');
const scope = require('./scope');
const linkFactory = require('./link');

module.exports = (ngModule) => {
	ngModule.directive(directiveName, require('./inject')((...args) => {
		return {
			restrict: 'A',
			require: [`^?${productDirective}`],
			scope: scope,
			link: linkFactory(...args)
		};
	}));
};
