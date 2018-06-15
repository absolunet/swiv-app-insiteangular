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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(1),
    getName = _require.getName;

module.exports = getName('gee');

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var configs = {
	prefix: 'swivInsite',
	getName: function getName(name) {
		var _name = name.replace(new RegExp('^' + configs.prefix), '');

		return '' + configs.prefix + _name.charAt(0).toUpperCase() + _name.slice(1);
	},
	guidRegExp: '[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}'
};

module.exports = configs;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(1),
    getName = _require.getName;

module.exports = getName('interceptor');

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = 'insite.swiv';

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = window.angular ? window.angular.module(__webpack_require__(3), __webpack_require__(7)) : null;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = [__webpack_require__(8).name];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var ngModule = __webpack_require__(9);

__webpack_require__(12)(ngModule);
__webpack_require__(15)(ngModule);
__webpack_require__(18)(ngModule);

module.exports = ngModule;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = window.angular ? window.angular.module(__webpack_require__(10), __webpack_require__(11)) : null;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3) + '.core';

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = [];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (ngModule) {
	__webpack_require__(13)(ngModule);
	__webpack_require__(14)(ngModule);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function (ngModule) {

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

	ngModule.provider(__webpack_require__(0), GeeProvider);
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function (ngModule) {

	var _endpointPrefix = '';

	var self = void 0;

	var _endpointActionCollection = {};

	var _endpointAliasCollection = {};

	var Interceptor = function () {
		function Interceptor(actions, geeService) {
			_classCallCheck(this, Interceptor);

			self = this;
			this.actions = actions;
			this.geeService = geeService;
		}

		_createClass(Interceptor, [{
			key: 'response',
			value: function response(res) {
				var url = res.config.url.replace(window.location.hostname, '');

				var _url$split = url.split('?');

				var _url$split2 = _slicedToArray(_url$split, 1);

				url = _url$split2[0];

				url = ('' + (url.charAt(0) === '/' || /http(s)?:/.test(url) ? '' : '/') + url).replace(/\.json$/, '');

				if (res.config.gee !== false) {
					var triggerFn = function triggerFn(action) {
						self.geeService.trigger(action, res.data);
					};

					for (var endpoint in self.actions) {
						if (self.actions[endpoint] && self.actions[endpoint].length) {
							if (new RegExp('^' + _endpointPrefix + endpoint + '(/)?$').test(url)) {
								self.actions[endpoint].forEach(triggerFn);
							}
						}
					}
				}

				if (new RegExp('^' + _endpointPrefix + '/sessions/current(/)?$').test(url)) {
					self.setCurrencyCode(res.data.currency.currencyCode);
				}

				return res;
			}
		}, {
			key: 'setCurrencyCode',
			value: function setCurrencyCode(currencyCode) {
				this.geeService.configs.set('currencyCode', currencyCode);
			}
		}]);

		return Interceptor;
	}();

	var InterceptorFactory = function InterceptorFactory(geeService) {
		var _processedEndpointActionCollection = {};

		for (var endpoint in _endpointAliasCollection) {
			if (_endpointAliasCollection[endpoint]) {
				(function () {
					var actions = [];
					var aliases = _endpointAliasCollection[endpoint] || [];
					aliases.push(endpoint);

					aliases.forEach(function (alias) {
						actions = actions.concat(_endpointActionCollection[alias] || []);
					});

					_processedEndpointActionCollection[endpoint] = actions.filter(function (value, index, obj) {
						return obj.indexOf(value) === index;
					});
				})();
			}
		}

		return new Interceptor(_processedEndpointActionCollection, geeService);
	};

	InterceptorFactory.$inject = [__webpack_require__(0)];

	var InterceptorProvider = function () {
		function InterceptorProvider() {
			_classCallCheck(this, InterceptorProvider);
		}

		_createClass(InterceptorProvider, [{
			key: 'addAction',
			value: function addAction(endpoint, action) {
				return this.safePush(_endpointActionCollection, endpoint, action);
			}
		}, {
			key: 'addEndpointAlias',
			value: function addEndpointAlias(endpoint, alias) {
				return this.safePush(_endpointAliasCollection, endpoint, alias);
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

	ngModule.provider(__webpack_require__(2), InterceptorProvider);
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (ngModule) {
	__webpack_require__(16)(ngModule);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var prefix = __webpack_require__(17);

module.exports = function (ngModule) {

	var name = prefix + 'Product';

	ngModule.directive(name, [__webpack_require__(0), function (geeService) {
		return {
			restrict: 'AC',
			replace: false,
			scope: {
				product: '=' + name
			},
			link: function link($scope, $element) {
				$element.on('click', function () {
					geeService.triggerProductClick($scope.product);
				});
			}
		};
	}]);
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = 'swivGee';

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (ngModule) {
	__webpack_require__(19)(ngModule);
	__webpack_require__(20)(ngModule);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var interceptor = __webpack_require__(2);

module.exports = function (ngModule) {

	ngModule.config(['$httpProvider', function ($httpProvider) {
		$httpProvider.interceptors.push(interceptor);
	}]);
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var interceptor = __webpack_require__(2);

var _require = __webpack_require__(1),
    guidRegExp = _require.guidRegExp;

var _endpointAlias = _defineProperty({
	'/products': 'productImpression'
}, '/products/' + guidRegExp, 'productDetail');

module.exports = function (ngModule) {
	ngModule.config([interceptor + 'Provider', function ($interceptorProvider) {
		$interceptorProvider.endpointPrefix = '/api/v1';

		for (var endpoint in _endpointAlias) {
			if (_endpointAlias[endpoint]) {
				$interceptorProvider.addEndpointAlias(endpoint, _endpointAlias[endpoint]);
				$interceptorProvider.addAction(_endpointAlias[endpoint], _endpointAlias[endpoint]);
			}
		}
	}]);
};

/***/ })
/******/ ]);