const { regex:regexHelper } = require('./../../../../helpers');

module.exports = {
	endpoint: `/wishlists/${regexHelper.guidRegExp}`,
	event: 'productImpression',
	preprocess: (response) => {
		if (!response.wishListLineCollection || response.wishListLineCollection.length === 0) {
			return false;
		}

		return {
			main: response.wishListLineCollection,
			misc: {},
			common: {}
		};
	}
};
