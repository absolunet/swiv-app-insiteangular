module.exports = {
	endpoint: '/websites/current/crosssells',
	event: 'productImpression',
	preprocess: (response) => {
		return {
			products: response.products,
			list: 'Web Cross Sale'
		};
	}
};
