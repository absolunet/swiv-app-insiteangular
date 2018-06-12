const configs = {
	prefix: 'swivInsite',
	getName: (name) => {
		const _name = name.replace(new RegExp(`^${configs.prefix}`), '');

		return `${configs.prefix}${_name.charAt(0).toUpperCase()}${_name.slice(1)}`;
	},
	guidRegExp: '[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}'
};

module.exports = configs;
