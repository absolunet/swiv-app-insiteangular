const directiveName = require('./name');

module.exports = (ngModule) => {

	ngModule.directive(directiveName, require('./inject')(() => {
		return {
			restrict: 'A'
		};
	}));
};
