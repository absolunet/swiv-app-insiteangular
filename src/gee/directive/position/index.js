const directiveName = require('./name');

module.exports = (ngModule) => {

	ngModule.directive(directiveName, [
		() => {
			return {
				restrict: 'A'
			};
		}
	]);
};
