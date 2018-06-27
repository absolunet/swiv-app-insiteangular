const { methods } = require('./../../../../helpers');

module.exports = {
	endpoint: '/carts/current/cartlines',
	event: 'addToCart',
	method: methods.post
};
