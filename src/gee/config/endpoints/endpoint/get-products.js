module.exports = {
	endpoint: '/products',
	event: 'productImpression',
	preprocess: (response) => {
		return {
			products: response.products,
			list: response.originalQuery ? 'Search Results' : 'List Page'
		};
	}
};
