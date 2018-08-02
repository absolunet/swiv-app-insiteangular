module.exports = {
	endpoint: '/products',
	event: 'productImpression',
	preprocess: (response, request, interceptor, config) => {
		if (!response.products || response.products.length === 0 || (/(frequently|recently)purchase/).test((config.params || {}).expand || '')) {
			return false;
		}

		return {
			main: response.products,
			misc: {},
			common: {
				pagination: response.pagination,
				list: response.originalQuery ? 'Search Results' : 'List Page'
			}
		};
	}
};
