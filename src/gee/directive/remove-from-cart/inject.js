module.exports = (directiveDefinition) => {
	const dependencies = [
		require('./../../provider/gee/name')
	];

	return dependencies.concat(directiveDefinition);
};
