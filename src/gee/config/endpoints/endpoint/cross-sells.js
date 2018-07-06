module.exports = {
	endpoint: '/websites/current/crosssells',
	event: 'productImpression',
	preprocess: (response) => {
		response.list = 'Web cross sale';
	}
};
