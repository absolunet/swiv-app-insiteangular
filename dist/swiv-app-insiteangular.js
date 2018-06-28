/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
	name: __webpack_require__(16),
	url: __webpack_require__(17),
	regex: __webpack_require__(18)
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    nameHelper = _require.name;

module.exports = nameHelper.getName('gee');

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    nameHelper = _require.name;

module.exports = nameHelper.getName('interceptor');

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = 'swivGee';

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = 'insite.swiv';

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var prefix = __webpack_require__(3);

module.exports = prefix + 'Position';

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = window.angular ? window.angular.module(__webpack_require__(4), __webpack_require__(9)) : null;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = [__webpack_require__(10).name];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var ngModule = __webpack_require__(11);

__webpack_require__(14)(ngModule);
__webpack_require__(20)(ngModule);
__webpack_require__(26)(ngModule);

module.exports = ngModule;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = window.angular ? window.angular.module(__webpack_require__(12), __webpack_require__(13)) : null;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4) + '.core';

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = [];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (ngModule) {
	__webpack_require__(15).boot(ngModule);
	__webpack_require__(19).boot(ngModule);
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GeeFactory = function GeeFactory() {
	return window.swiv.gee.getService();
};

GeeFactory.$inject = [];

var GeeProvider = function () {
	function GeeProvider() {
		_classCallCheck(this, GeeProvider);
	}

	_createClass(GeeProvider, [{
		key: '$get',
		get: function get() {
			return GeeFactory;
		}
	}]);

	return GeeProvider;
}();

GeeProvider.$inject = [];

var boot = function boot(ngModule) {
	ngModule.provider(__webpack_require__(1), GeeProvider);
};

var provided = {
	GeeProvider: GeeProvider,
	GeeFactory: GeeFactory
};

module.exports = {
	boot: boot,
	provided: provided
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NameHelper = function () {
	function NameHelper() {
		_classCallCheck(this, NameHelper);
	}

	_createClass(NameHelper, [{
		key: 'getName',
		value: function getName(name) {
			var _ref = [this.prefix.charAt(0), this.prefix.slice(1)],
			    start = _ref[0],
			    end = _ref[1];

			var _name = name.replace(new RegExp('^[' + start.toLowerCase() + start.toUpperCase() + ']' + end), '');

			return '' + this.prefix + _name.charAt(0).toUpperCase() + _name.slice(1);
		}
	}, {
		key: 'prefix',
		get: function get() {
			return 'swivInsite';
		}
	}]);

	return NameHelper;
}();

module.exports = new NameHelper();

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UrlHelper = function () {
	function UrlHelper() {
		_classCallCheck(this, UrlHelper);
	}

	_createClass(UrlHelper, [{
		key: 'getUri',
		value: function getUri(url) {
			return url.replace(/^http(s)?:\/\//, '').replace(/^[^/]+(\/)?/, '/').replace(/\?(.*)/, '').replace(/\.json$/, '');
		}
	}, {
		key: 'isMethod',
		value: function isMethod(method) {
			var expected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.methods.get;

			return (expected instanceof Array ? expected : [expected]).indexOf(method) !== -1;
		}
	}, {
		key: 'methods',
		get: function get() {
			return {
				'get': 'GET',
				'post': 'POST',
				'patch': 'PATCH',
				'delete': 'DELETE'
			};
		}
	}]);

	return UrlHelper;
}();

module.exports = new UrlHelper();

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RegexHelper = function () {
	function RegexHelper() {
		_classCallCheck(this, RegexHelper);
	}

	_createClass(RegexHelper, [{
		key: 'guidRegExp',
		get: function get() {
			return '[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}';
		}
	}]);

	return RegexHelper;
}();

module.exports = new RegexHelper();

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(0),
    urlHelper = _require.url;

var _endpointPrefix = '';
var _self = void 0; // eslint-disable-line consistent-this
var _endpointActionCollection = {};

var Interceptor = function () {
	function Interceptor(actions, geeService) {
		_classCallCheck(this, Interceptor);

		_self = this;
		this.actions = actions;
		this.geeService = geeService;
	}

	_createClass(Interceptor, [{
		key: 'response',
		value: function response(res) {
			if (res.config.gee !== false) {
				(function () {
					var url = urlHelper.getUri(res.config.url);

					var triggerFn = function triggerFn(_ref) {
						var event = _ref.event,
						    preprocess = _ref.preprocess,
						    process = _ref.process;

						if (typeof preprocess === 'function') {
							preprocess(res.data);
						}

						if (typeof process === 'function') {
							process(res.data, _self.geeService);
						} else {
							_self.geeService.trigger(event, res.data);
						}
					};

					for (var endpoint in _self.actions) {
						if (_self.actions[endpoint] && _self.actions[endpoint].length) {
							if (new RegExp('^' + _endpointPrefix + endpoint + '(/)?$').test(url)) {
								_self.actions[endpoint].forEach(function (action) {
									if (urlHelper.isMethod(res.config.method, action.methods || action.method)) {
										triggerFn(action);
									}
								});
							}
						}
					}
				})();
			}

			return res;
		}
	}]);

	return Interceptor;
}();

var InterceptorFactory = function InterceptorFactory(geeService) {
	return new Interceptor(_endpointActionCollection, geeService);
};

InterceptorFactory.$inject = [__webpack_require__(1)];

var InterceptorProvider = function () {
	function InterceptorProvider() {
		_classCallCheck(this, InterceptorProvider);
	}

	_createClass(InterceptorProvider, [{
		key: 'addAction',
		value: function addAction(endpoint, action) {
			var defaultAction = {
				event: '',
				mainDataName: null,
				getMainData: function getMainData(data) {
					return data;
				}
			};

			Object.keys(defaultAction).forEach(function (key) {
				action[key] = action[key] || defaultAction[key];
			});

			return this.safePush(_endpointActionCollection, endpoint, action);
		}
	}, {
		key: 'safePush',
		value: function safePush(arr, key, value) {
			arr[key] = arr[key] || [];
			arr[key].push(value);

			return this;
		}
	}, {
		key: 'endpointPrefix',
		set: function set(value) {
			_endpointPrefix = value;
		},
		get: function get() {
			return _endpointPrefix;
		}
	}, {
		key: '$get',
		get: function get() {
			return InterceptorFactory;
		}
	}]);

	return InterceptorProvider;
}();

InterceptorProvider.$inject = [];

var boot = function boot(ngModule) {
	ngModule.provider(__webpack_require__(2), InterceptorProvider);
};

var provided = {
	InterceptorProvider: InterceptorProvider,
	InterceptorFactory: InterceptorFactory,
	Interceptor: Interceptor
};

module.exports = {
	boot: boot,
	provided: provided
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (ngModule) {
	__webpack_require__(21)(ngModule);
	__webpack_require__(23)(ngModule);
	__webpack_require__(24)(ngModule);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var directiveName = __webpack_require__(22);
var positionDirective = __webpack_require__(5).replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

module.exports = function (ngModule) {

	ngModule.directive(directiveName, [__webpack_require__(1), function (geeService) {
		return {
			restrict: 'A',
			scope: {
				product: '=' + directiveName
			},
			link: function link($scope, $element) {
				$element.on('click', function () {
					var position = $element.attr(positionDirective) || $element.closest('[' + positionDirective + ']').attr(positionDirective);
					var product = window.angular.copy($scope.product);
					product.properties = product.properties || {};
					product.properties.position = position;
					geeService.triggerProductClick(product);
				});
			}
		};
	}]);
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var prefix = __webpack_require__(3);

module.exports = prefix + 'Product';

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var directiveName = __webpack_require__(5);

module.exports = function (ngModule) {

	ngModule.directive(directiveName, [function () {
		return {
			restrict: 'A'
		};
	}]);
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var directiveName = __webpack_require__(25);

module.exports = function (ngModule) {

	ngModule.directive(directiveName, [__webpack_require__(1), function (geeService) {
		return {
			restrict: 'A',
			scope: {
				product: '=' + directiveName
			},
			link: function link($scope, $element) {
				$element.on('click', function () {
					geeService.triggerRemoveFromCart({
						product: window.angular.copy($scope.product),
						list: 'Cart'
					});
				});
			}
		};
	}]);
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var prefix = __webpack_require__(3);

module.exports = prefix + 'RemoveFromCart';

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (ngModule) {
	__webpack_require__(27)(ngModule);
	__webpack_require__(28)(ngModule);
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var interceptor = __webpack_require__(2);

module.exports = function (ngModule) {

	ngModule.config(['$httpProvider', function ($httpProvider) {
		$httpProvider.interceptors.push(interceptor);
	}]);
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var interceptor = __webpack_require__(2);

var _actions = [__webpack_require__(29), __webpack_require__(30), __webpack_require__(31), __webpack_require__(32), __webpack_require__(33), __webpack_require__(34), __webpack_require__(35)];

module.exports = function (ngModule) {
	ngModule.config([interceptor + 'Provider', function ($interceptorProvider) {
		$interceptorProvider.endpointPrefix = '/api/v1';
		_actions.forEach(function (action) {
			$interceptorProvider.addAction(action.endpoint, action);
		});
	}]);
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {
	endpoint: '/products',
	event: 'productImpression'
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    regexHelper = _require.regex;

module.exports = {
	endpoint: '/products/' + regexHelper.guidRegExp,
	event: 'productDetail'
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = {
	endpoint: '/websites/current/crosssells',
	event: 'productImpression'
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {
	endpoint: '/wishlists',
	event: 'productImpression',
	preprocess: function preprocess(response) {
		var products = [];

		(response.wishListCollection || []).forEach(function (wishList) {
			(wishList.wishListLineCollection || []).forEach(function (wishListLine) {
				products.push(wishListLine);
			});
		});

		response.products = products;
	}
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    guidRegExp = _require.guidRegExp;

module.exports = {
	endpoint: '/wishlists/' + guidRegExp,
	event: 'productImpression',
	preprocess: function preprocess(response) {
		response.products = response.wishListLineCollection;
	}
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {
	endpoint: '/sessions/current',
	process: function process(data, geeService) {
		if (data && data.currency && data.currency.currencyCode) {
			geeService.configs.set('currencyCode', data.currency.currencyCode);
		}
	}
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    urlHelper = _require.url;

module.exports = {
	endpoint: '/carts/current/cartlines',
	event: 'addToCart',
	method: urlHelper.methods.post
};

/***/ })
/******/ ]);