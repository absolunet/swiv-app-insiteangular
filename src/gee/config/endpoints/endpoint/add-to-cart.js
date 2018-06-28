const { url:urlHelper } = require('./../../../../helpers');

module.exports = {
	endpoint: '/carts/current/cartlines',
	event: 'addToCart',
	method: urlHelper.methods.post
};
