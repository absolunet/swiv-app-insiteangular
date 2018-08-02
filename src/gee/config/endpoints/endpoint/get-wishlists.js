module.exports = {
	endpoint: '/wishlists',
	event: 'productImpression',
	preprocess: (response) => {
		const products = [];

		(response.wishListCollection || []).forEach((wishList) => {
			(wishList.wishListLineCollection || []).forEach((wishListLine) => {
				products.push(wishListLine);
			});
		});

		if (products.length === 0) {
			return false;
		}

		return {
			main: products,
			misc: {},
			common: {}
		};
	}
};
