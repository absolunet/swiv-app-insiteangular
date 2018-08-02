module.exports = {
	endpoint: '/websites/current/crosssells',
	event: 'productImpression',
	preprocess: (response) => {
		if (!response.products || response.products.length === 0) {
			return false;
		}

		return {
			main: response.products,
			misc: {},
			common: {
				list: 'Web Cross Sale'
			}
		};
	}
};
