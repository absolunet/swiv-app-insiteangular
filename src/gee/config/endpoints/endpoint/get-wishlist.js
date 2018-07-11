const { regex:regexHelper } = require('./../../../../helpers');

module.exports = {
	endpoint: `/wishlists/${regexHelper.guidRegExp}`,
	event: 'productImpression',
	preprocess: (response) => {
		return {
			products: response.wishListLineCollection
		};
	}
};
