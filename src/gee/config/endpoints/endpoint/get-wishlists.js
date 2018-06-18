module.exports = {
	endpoint: `/wishlists`,
	event: 'productImpression',
	preprocess: (response) => {
		const products = [];

		response.wishListCollection.forEach((wishList) => {
			(wishList.wishListLineCollection || []).forEach((wishListLine) => {
				products.push(wishListLine);
			});
		});

		response.products = products;
	}
};
