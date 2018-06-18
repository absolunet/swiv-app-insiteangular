const { guidRegExp } = require('./../../../../helpers');

module.exports = {
	endpoint: `/wishlists/${guidRegExp}`,
	event: 'productImpression',
	preprocess: (response) => {
		response.products = response.wishListLineCollection;
	}
};
