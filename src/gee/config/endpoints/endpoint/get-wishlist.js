const { regex:regexHelper } = require('./../../../../helpers');

module.exports = {
	endpoint: `/wishlists/${regexHelper.guidRegExp}`,
	event: 'productImpression',
	preprocess: (response) => {
		response.products = response.wishListLineCollection;
	}
};
