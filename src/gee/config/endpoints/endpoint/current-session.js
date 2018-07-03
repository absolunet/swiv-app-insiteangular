module.exports = {
	endpoint: '/sessions/current',
	process: (response, request, geeService) => {
		if (response && response.currency && response.currency.currencyCode) {
			geeService.configs.set('currencyCode', response.currency.currencyCode);
		}
	}
};
