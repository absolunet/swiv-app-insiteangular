module.exports = {
	endpoint: '/sessions/current',
	process: (data, geeService) => {
		if (data && data.currency && data.currency.currencyCode) {
			geeService.configs.set('currencyCode', data.currency.currencyCode);
		}
	}
};
