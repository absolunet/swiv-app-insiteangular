module.exports = {
	endpoint: '/sessions/current',
	process: (data, geeService) => {
		geeService.configs.set('currencyCode', data.currency.currencyCode);
	}
};
