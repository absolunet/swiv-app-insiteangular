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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
	name: __webpack_require__(26),
	url: __webpack_require__(27),
	regex: __webpack_require__(28),
	string: __webpack_require__(29)
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

var prefix = __webpack_require__(3);

module.exports = prefix + 'Product';

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = 'swivGee';

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Injectable = function () {
	_createClass(Injectable, null, [{
		key: "$inject",
		get: function get() {
			return [];
		}
	}, {
		key: "aliases",
		get: function get() {
			return {};
		}
	}]);

	function Injectable() {
		var _this = this;

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		_classCallCheck(this, Injectable);

		var aliases = this.constructor.aliases;

		this.constructor.$inject.forEach(function (dependency, index) {
			_this[aliases[dependency] || dependency] = args[index];
		});

		this.init();
	}

	_createClass(Injectable, [{
		key: "init",
		value: function init() {
			// eslint-disable-line empty-function
		}
	}]);

	return Injectable;
}();

module.exports = {
	Injectable: Injectable
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    nameHelper = _require.name;

module.exports = nameHelper.getName('propertyHistory');

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    nameHelper = _require.name;

module.exports = nameHelper.getName('interceptor');

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = 'insite.swiv';

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {
	endpointCollection: {},
	prefix: ''
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var prefix = __webpack_require__(3);

module.exports = prefix + 'Position';

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var prefix = __webpack_require__(3);

module.exports = prefix + 'ProductClick';

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function ($ctrls) {
	return $ctrls.filter(function ($ctrl) {
		return $ctrl.$scope && $ctrl.$scope.product;
	}).map(function ($ctrl) {
		return $ctrl.$scope.product;
	})[0] || null;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var prefix = __webpack_require__(3);

module.exports = prefix + 'RemoveFromCart';

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var prefix = __webpack_require__(3);

module.exports = prefix + 'CheckoutStep';

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = window.angular ? window.angular.module(__webpack_require__(7), __webpack_require__(17)) : null;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = [__webpack_require__(18).name];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var ngModule = __webpack_require__(19);

__webpack_require__(22)(ngModule);
__webpack_require__(38)(ngModule);
__webpack_require__(58)(ngModule);

module.exports = ngModule;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = window.angular ? window.angular.module(__webpack_require__(20), __webpack_require__(21)) : null;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7) + '.core';

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = [];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (ngModule) {
	__webpack_require__(23)(ngModule);
	__webpack_require__(30)(ngModule);
	__webpack_require__(34)(ngModule);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var GeeProvider = __webpack_require__(24);

module.exports = function (ngModule) {
	ngModule.provider(__webpack_require__(1), GeeProvider);
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GeeFactory = __webpack_require__(25);

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

module.exports = GeeProvider;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

var GeeFactory = function GeeFactory() {
	return window.swiv.gee.getService();
};

GeeFactory.$inject = [];

module.exports = GeeFactory;

/***/ }),
/* 26 */
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
/* 27 */
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
				'put': 'PUT',
				'options': 'OPTIONS',
				'delete': 'DELETE'
			};
		}
	}]);

	return UrlHelper;
}();

module.exports = new UrlHelper();

/***/ }),
/* 28 */
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
/* 29 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringHelper = function () {
	function StringHelper() {
		_classCallCheck(this, StringHelper);
	}

	_createClass(StringHelper, [{
		key: 'snakeCase',
		value: function snakeCase(str) {
			var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_';

			return str.replace(/([a-z0-9])([A-Z])/g, '$1' + separator + '$2').toLowerCase();
		}
	}, {
		key: 'kebabCase',
		value: function kebabCase(str) {
			return this.snakeCase(str, '-');
		}
	}, {
		key: 'camelCase',
		value: function camelCase(str) {
			var pascal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var camel = str.replace(/([-_]\w)/g, function (matches) {
				return matches[1].toUpperCase();
			});

			return '' + camel.charAt(0)['to' + (pascal ? 'Upper' : 'Lower') + 'Case']() + camel.slice(1);
		}
	}, {
		key: 'pascalCase',
		value: function pascalCase(str) {
			return this.camelCase(str, true);
		}
	}]);

	return StringHelper;
}();

module.exports = new StringHelper();

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (ngModule) {
	ngModule.provider(__webpack_require__(6), __webpack_require__(31));
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var config = __webpack_require__(8);

var _require = __webpack_require__(0),
    urlHelper = _require.url;

var _require2 = __webpack_require__(4),
    Injectable = _require2.Injectable;

var InterceptorFactory = __webpack_require__(32);

module.exports = function (_Injectable) {
	_inherits(InterceptorProvider, _Injectable);

	function InterceptorProvider() {
		_classCallCheck(this, InterceptorProvider);

		return _possibleConstructorReturn(this, (InterceptorProvider.__proto__ || Object.getPrototypeOf(InterceptorProvider)).apply(this, arguments));
	}

	_createClass(InterceptorProvider, [{
		key: 'addAction',
		value: function addAction(endpoint, action) {
			var defaultAction = {
				endpoint: null,
				event: '',
				method: urlHelper.methods.get,
				preprocess: null,
				process: null,
				postprocess: null
			};

			Object.keys(defaultAction).forEach(function (key) {
				action[key] = action[key] || defaultAction[key];
			});

			return this.safePush(config.endpointCollection, endpoint, action);
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
			config.prefix = value;
		},
		get: function get() {
			return config.prefix;
		}
	}, {
		key: '$get',
		get: function get() {
			return InterceptorFactory;
		}
	}]);

	return InterceptorProvider;
}(Injectable);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var InterceptorService = __webpack_require__(33);

var InterceptorFactory = function InterceptorFactory() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return new (Function.prototype.bind.apply(InterceptorService, [null].concat(args)))();
};

InterceptorFactory.$inject = [__webpack_require__(1), __webpack_require__(5)];

module.exports = InterceptorFactory;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(0),
    urlHelper = _require.url;

var config = __webpack_require__(8);
var _self = void 0; // eslint-disable-line consistent-this

module.exports = function () {
	function InterceptorService(geeService, propertyHistoryService) {
		_classCallCheck(this, InterceptorService);

		_self = this;
		this.actions = config.endpointCollection;
		this.geeService = geeService;
		this.propertyHistoryService = propertyHistoryService;
	}

	_createClass(InterceptorService, [{
		key: 'response',
		value: function response(res) {
			_self.handleResponse(angular.copy(res));

			return res;
		}
	}, {
		key: 'handleResponse',
		value: function handleResponse(res) {
			var _this = this;

			if (res.config.gee !== false) {
				var url = urlHelper.getUri(res.config.url);

				for (var endpoint in this.actions) {
					if (this.actions[endpoint] && this.actions[endpoint].length) {
						if (new RegExp('^' + config.prefix + endpoint + '(/)?$').test(url)) {
							this.actions[endpoint].forEach(function (action) {
								if (urlHelper.isMethod(res.config.method, action.methods || action.method)) {
									_this.triggerAction(res, action);
								}
							});
						}
					}
				}
			}
		}
	}, {
		key: 'triggerAction',
		value: function triggerAction(res, _ref) {
			var event = _ref.event,
			    preprocess = _ref.preprocess,
			    process = _ref.process,
			    postprocess = _ref.postprocess;

			if (typeof preprocess === 'function') {
				var preprocessedValue = preprocess(res.data, res.config.data, this);
				if (preprocessedValue === false) {
					return;
				}

				res.data = (typeof preprocessedValue === 'undefined' ? 'undefined' : _typeof(preprocessedValue)) === 'object' && preprocessedValue ? preprocessedValue : res.data;
			}

			if (typeof process === 'function') {
				process(res.data, res.config.data, this);
			} else {
				this.geeService.trigger(event, res.data);
			}

			if (typeof postprocess === 'function') {
				postprocess(res.data, res.config.data, this);
			}
		}
	}]);

	return InterceptorService;
}();

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (ngModule) {
	ngModule.provider(__webpack_require__(5), __webpack_require__(35));
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(4),
    Injectable = _require.Injectable;

var PropertyHistoryFactory = __webpack_require__(36);

module.exports = function (_Injectable) {
	_inherits(PropertyHistoryProvider, _Injectable);

	function PropertyHistoryProvider() {
		_classCallCheck(this, PropertyHistoryProvider);

		return _possibleConstructorReturn(this, (PropertyHistoryProvider.__proto__ || Object.getPrototypeOf(PropertyHistoryProvider)).apply(this, arguments));
	}

	_createClass(PropertyHistoryProvider, [{
		key: '$get',
		get: function get() {
			return PropertyHistoryFactory;
		}
	}]);

	return PropertyHistoryProvider;
}(Injectable);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var PropertyHistoryService = __webpack_require__(37);

var PropertyHistoryFactory = function PropertyHistoryFactory() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return new (Function.prototype.bind.apply(PropertyHistoryService, [null].concat(args)))();
};

PropertyHistoryFactory.$inject = [];

module.exports = PropertyHistoryFactory;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instanceHistories = new WeakMap();
var guidHistories = {};

module.exports = function () {
	function PropertyHistoryService() {
		_classCallCheck(this, PropertyHistoryService);
	}

	_createClass(PropertyHistoryService, [{
		key: "updateProperty",
		value: function updateProperty(instance, property, value) {
			this.getPropertyHistory(instance, property).push(value);
		}
	}, {
		key: "resetPropertyHistory",
		value: function resetPropertyHistory(instance, property) {
			this.getInstanceHistory(instance)[property] = [];
		}
	}, {
		key: "resetInstanceHistory",
		value: function resetInstanceHistory(instance) {
			var _this = this;

			var history = this.getInstanceHistory(instance);
			Object.keys(history).forEach(function (property) {
				_this.resetPropertyHistory(instance, property);
			});
		}
	}, {
		key: "getInitialValue",
		value: function getInitialValue(instance, property) {
			return this.getPropertyHistory(instance, property)[0];
		}
	}, {
		key: "getLatestValue",
		value: function getLatestValue(instance, property) {
			var history = this.getPropertyHistory(instance, property);

			if (history.length === 0) {
				return null;
			}

			return history[history.length - 1];
		}
	}, {
		key: "getPropertyHistory",
		value: function getPropertyHistory(instance, property) {
			var instanceHistory = this.getInstanceHistory(instance);
			if (!instanceHistory[property]) {
				instanceHistory[property] = [];
			}

			return instanceHistory[property];
		}
	}, {
		key: "getInstanceHistory",
		value: function getInstanceHistory(instance) {
			if (!instanceHistories.has(instance)) {
				var id = instance.id;

				if (!guidHistories[id]) {
					guidHistories[id] = {};
				}
				instanceHistories.set(instance, guidHistories[instance.id]);
			}

			return instanceHistories.get(instance);
		}
	}]);

	return PropertyHistoryService;
}();

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (ngModule) {
	__webpack_require__(39)(ngModule);
	__webpack_require__(43)(ngModule);
	__webpack_require__(45)(ngModule);
	__webpack_require__(49)(ngModule);
	__webpack_require__(53)(ngModule);
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var directiveName = __webpack_require__(2);
var controllerFactory = __webpack_require__(40);
var scope = __webpack_require__(41);

module.exports = function (ngModule) {
	var controller = controllerFactory(ngModule);
	var restrict = 'A';

	ngModule.directive(directiveName, __webpack_require__(42)(function () {
		return {
			restrict: restrict,
			scope: scope,
			controller: controller
		};
	}));
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(4),
    Injectable = _require.Injectable;

var propertyHistoryService = __webpack_require__(5);

module.exports = function (ngModule) {

	var name = __webpack_require__(2) + 'Ctrl';

	var ProductCtrl = function (_Injectable) {
		_inherits(ProductCtrl, _Injectable);

		function ProductCtrl() {
			_classCallCheck(this, ProductCtrl);

			return _possibleConstructorReturn(this, (ProductCtrl.__proto__ || Object.getPrototypeOf(ProductCtrl)).apply(this, arguments));
		}

		_createClass(ProductCtrl, [{
			key: 'init',
			value: function init() {
				var _this2 = this;

				this.$scope.$watch('product.qtyOrdered', function () {
					_this2.onQuantityChange.apply(_this2, arguments);
				});
			}
		}, {
			key: 'onQuantityChange',
			value: function onQuantityChange(newQuantity, oldQuantity) {
				if (newQuantity !== oldQuantity || this[propertyHistoryService].getPropertyHistory(this.$scope.product, 'qtyOrdered').length === 0) {
					this[propertyHistoryService].updateProperty(this.$scope.product, 'qtyOrdered', newQuantity);
				}
			}
		}], [{
			key: '$inject',
			get: function get() {
				return ['$scope', propertyHistoryService];
			}
		}]);

		return ProductCtrl;
	}(Injectable);

	ngModule.controller(name, ProductCtrl);

	return name;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var directiveName = __webpack_require__(2);

module.exports = {
	product: '=' + directiveName
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function (directiveDefinition) {
	var dependencies = [];

	return dependencies.concat(directiveDefinition);
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var directiveName = __webpack_require__(9);

module.exports = function (ngModule) {

	ngModule.directive(directiveName, __webpack_require__(44)(function () {
		return {
			restrict: 'A'
		};
	}));
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = function (directiveDefinition) {
	var dependencies = [];

	return dependencies.concat(directiveDefinition);
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var directiveName = __webpack_require__(10);
var productDirective = __webpack_require__(2);
var scope = __webpack_require__(46);
var linkFactory = __webpack_require__(47);

module.exports = function (ngModule) {
	ngModule.directive(directiveName, __webpack_require__(48)(function () {
		return {
			restrict: 'A',
			require: ['^?' + productDirective],
			scope: scope,
			link: linkFactory.apply(undefined, arguments)
		};
	}));
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var directiveName = __webpack_require__(10);

module.exports = {
	products: '=?' + directiveName
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var positionDirective = __webpack_require__(9).replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
var getProductInControllers = __webpack_require__(11);

module.exports = function (geeService) {
	return function ($scope, $element, $attrs, $ctrls) {
		$element.on('click', function () {
			var product = angular.copy($scope.product || getProductInControllers($ctrls));
			if (product) {
				var position = $element.attr(positionDirective) || $element.closest('[' + positionDirective + ']').attr(positionDirective);
				product.properties = product.properties || {};
				product.properties.position = position;
				geeService.triggerProductClick(product);
			}
		});
	};
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (directiveDefinition) {
	var dependencies = [__webpack_require__(1)];

	return dependencies.concat(directiveDefinition);
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var directiveName = __webpack_require__(12);
var productDirective = __webpack_require__(2);
var scope = __webpack_require__(50);
var linkFactory = __webpack_require__(51);

module.exports = function (ngModule) {
	ngModule.directive(directiveName, __webpack_require__(52)(function () {
		return {
			restrict: 'A',
			require: ['^?' + productDirective],
			scope: scope,
			link: linkFactory.apply(undefined, arguments)
		};
	}));
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var directiveName = __webpack_require__(12);

module.exports = {
	products: '=?' + directiveName
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var getProductInControllers = __webpack_require__(11);

module.exports = function (geeService) {
	return function ($scope, $element, $attrs, $ctrls) {
		$element.on('click', function () {
			var products = $scope.products || getProductInControllers($ctrls);
			if (products) {
				var productsCopy = angular.copy(products instanceof Array ? products : [products]);
				geeService.triggerRemoveFromCart({
					products: productsCopy,
					list: 'Cart'
				});
			}
		});
	};
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (directiveDefinition) {
	var dependencies = [__webpack_require__(1)];

	return dependencies.concat(directiveDefinition);
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var directiveName = __webpack_require__(13);
var scope = __webpack_require__(54);
var controllerFactory = __webpack_require__(55);

module.exports = function (ngModule) {
	var controller = controllerFactory(ngModule);
	var restrict = 'A';

	ngModule.directive(directiveName, __webpack_require__(57)(function () {
		return {
			restrict: restrict,
			scope: scope,
			controller: controller
		};
	}));
};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(4),
    Injectable = _require.Injectable;

var geeService = __webpack_require__(1);
var propertyHistoryService = __webpack_require__(5);

var _require2 = __webpack_require__(0),
    stringHelper = _require2.string;

var resolve = __webpack_require__(56);
var directiveName = __webpack_require__(13);

module.exports = function (ngModule) {

	var name = directiveName + 'Ctrl';

	var CheckoutStepCtrl = function (_Injectable) {
		_inherits(CheckoutStepCtrl, _Injectable);

		function CheckoutStepCtrl() {
			_classCallCheck(this, CheckoutStepCtrl);

			return _possibleConstructorReturn(this, (CheckoutStepCtrl.__proto__ || Object.getPrototypeOf(CheckoutStepCtrl)).apply(this, arguments));
		}

		_createClass(CheckoutStepCtrl, [{
			key: 'init',
			value: function init() {
				var _this2 = this;

				this.$scope.$watch(function () {
					return _this2.$element.controller ? _this2.$element.controller().cart : null;
				}, function (cart, oldCart) {
					if (cart) {
						if (oldCart) {
							_this2.cartUpdated(cart, oldCart);
						} else {
							_this2.pageResolved(cart);
						}
					}
				}, true);
			}
		}, {
			key: 'pageResolved',
			value: function pageResolved(cart) {
				this.geeService.triggerCheckout({
					products: cart.cartLines,
					actionField: {
						step: this.step
					}
				});
			}
		}, {
			key: 'cartUpdated',
			value: function cartUpdated(cart, oldCart) {
				var _this3 = this;

				var diff = this.getDiff(cart, oldCart);
				var options = [];
				var watchedProperties = this.watchedProperties;

				Object.keys(watchedProperties).forEach(function (property) {
					var resolvedDiff = resolve(property, diff);
					if (resolvedDiff) {
						var oldValue = resolve(property, oldCart);
						var option = typeof watchedProperties[property] === 'function' ? watchedProperties[property](resolvedDiff, oldValue) : property;
						options.push(option);
					}
				});

				var step = this.step;

				options.filter(function (option) {
					return Boolean(option);
				}).forEach(function (option) {
					_this3.geeService.triggerCheckoutOption({ step: step, option: option });
				});
			}
		}, {
			key: 'getDiff',
			value: function getDiff(newObj, oldObj) {
				var _this4 = this;

				return Object.keys(newObj).reduce(function (diff, key) {
					if (oldObj[key] === newObj[key] || key === '$$hashKey') {
						return diff;
					}

					var diffValue = _typeof(newObj[key]) === 'object' && _typeof(oldObj[key]) === 'object' ? _this4.getDiff(newObj[key], oldObj[key]) : newObj[key];
					var returnedObj = _extends({}, diff, _defineProperty({}, key, diffValue));

					if (_typeof(returnedObj[key]) === 'object' && returnedObj[key] && Object.keys(returnedObj[key]).length === 0) {
						delete returnedObj[key];
					}

					return returnedObj;
				}, {});
			}
		}, {
			key: 'watchedProperties',
			get: function get() {
				return {
					notes: function notes(n, o) {
						return (!n || !o) && n !== o ? (n ? 'Add' : 'Remove') + ' notes' : null;
					},
					carrier: function carrier(n) {
						return n && n.description ? 'Using carrier "' + n.description + '"' : null;
					},
					shipVia: function shipVia(n) {
						return n && n.description ? 'Order via "' + n.description + '"' : null;
					},
					paymentMethod: function paymentMethod(n) {
						return n && n.description ? 'Using payment method "' + n.description + '"' : null;
					},
					poNumber: function poNumber(n, o) {
						return (!n || !o) && n !== o ? (n ? 'Add' : 'Remove') + ' PO number' : null;
					},
					promotionCode: function promotionCode(n, o) {
						return (!n || !o) && n !== o ? (n ? 'Add' : 'Remove') + ' promotion code' : null;
					},
					requestedDeliveryDate: function requestedDeliveryDate(n, o) {
						return (!n || !o) && n !== o ? (n ? 'Add' : 'Remove') + ' requested delivery date' : null;
					}
				};
			}
		}, {
			key: 'step',
			get: function get() {
				return this.$element.attr(stringHelper.kebabCase(directiveName));
			}
		}], [{
			key: '$inject',
			get: function get() {
				return [geeService, propertyHistoryService, '$scope', '$element'];
			}
		}, {
			key: 'aliases',
			get: function get() {
				var _ref;

				return _ref = {}, _defineProperty(_ref, geeService, 'geeService'), _defineProperty(_ref, propertyHistoryService, 'propertyHistoryService'), _ref;
			}
		}]);

		return CheckoutStepCtrl;
	}(Injectable);

	ngModule.controller(name, CheckoutStepCtrl);

	return name;
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (path, obj = {}) => {
	return path.split('.').reduce((prev, curr) => {
		return prev ? prev[curr] : undefined;
	}, obj);
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function (directiveDefinition) {
	var dependencies = [];

	return dependencies.concat(directiveDefinition);
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (ngModule) {
	__webpack_require__(59)(ngModule);
	__webpack_require__(60)(ngModule);
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var interceptor = __webpack_require__(6);

module.exports = function (ngModule) {

	ngModule.config(['$httpProvider', function ($httpProvider) {
		$httpProvider.interceptors.push(interceptor);
	}]);
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var interceptor = __webpack_require__(6);
var _actions = __webpack_require__(61);

module.exports = function (ngModule) {
	ngModule.config([interceptor + 'Provider', function ($interceptorProvider) {
		$interceptorProvider.endpointPrefix = '/api/v1';
		_actions.forEach(function (action) {
			$interceptorProvider.addAction(action.endpoint, action);
		});
	}]);
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = [__webpack_require__(62), __webpack_require__(63), __webpack_require__(64), __webpack_require__(65), __webpack_require__(66), __webpack_require__(67), __webpack_require__(68), __webpack_require__(69), __webpack_require__(70), __webpack_require__(71)];

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = {
	endpoint: '/products',
	event: 'productImpression',
	preprocess: function preprocess(response) {
		return {
			products: response.products,
			list: response.originalQuery ? 'Search Results' : 'List Page'
		};
	}
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    regexHelper = _require.regex;

module.exports = {
	endpoint: '/products/' + regexHelper.guidRegExp,
	event: 'productDetail',
	preprocess: function preprocess(response) {
		return {
			product: response,
			list: 'Detail Page'
		};
	}
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = {
	endpoint: '/websites/current/crosssells',
	event: 'productImpression',
	preprocess: function preprocess(response) {
		return {
			products: response.products,
			list: 'Web Cross Sale'
		};
	}
};

/***/ }),
/* 65 */
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

		return { products: products };
	}
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    regexHelper = _require.regex;

module.exports = {
	endpoint: '/wishlists/' + regexHelper.guidRegExp,
	event: 'productImpression',
	preprocess: function preprocess(response) {
		return {
			products: response.wishListLineCollection
		};
	}
};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = {
	endpoint: '/sessions/current',
	process: function process(response, request, _ref) {
		var geeService = _ref.geeService;

		if (response && response.currency && response.currency.currencyCode) {
			geeService.configs.set('currencyCode', response.currency.currencyCode);
		}
	}
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    urlHelper = _require.url;

module.exports = {
	endpoint: '/carts/current/cartlines(/batch)?',
	event: 'addToCart',
	method: urlHelper.methods.post,
	preprocess: function preprocess(response, request) {
		return {
			products: (response.cartLines || [angular.copy(response)]).map(function (product) {
				product.qtyAdded = request.qtyOrdered || product.qtyOrdered;

				return product;
			})
		};
	}
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    urlHelper = _require.url;

module.exports = {
	endpoint: '/carts/current',
	event: 'removeFromCart',
	method: urlHelper.methods.patch,
	preprocess: function preprocess(response, request) {
		if (response.status !== 'Saved') {
			return false;
		}

		return {
			products: request.cartLines
		};
	}
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    urlHelper = _require.url;

module.exports = {
	endpoint: '/carts/current',
	event: 'purchase',
	method: urlHelper.methods.patch,
	preprocess: function preprocess(response, request) {
		if (response.status !== 'Processing') {
			return false;
		}

		return {
			products: request.cartLines,
			list: 'Cart',
			purchase: {
				actionField: {
					id: response.erpOrderNumber,
					affiliation: 'Online Store',
					revenue: response.orderGrandTotal.toFixed(2),
					tax: response.totalTax.toFixed(2),
					shipping: response.shippingAndHandling.toFixed(2)
				}
			}
		};
	}
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = __webpack_require__(0),
    urlHelper = _require.url,
    regexHelper = _require.regex;

var qtyOrderedProp = 'qtyOrdered';

module.exports = {
	endpoint: '/carts/current/cartlines/' + regexHelper.guidRegExp + '?',
	method: urlHelper.methods.patch,
	process: function process(response, request, _ref) {
		var propertyHistoryService = _ref.propertyHistoryService,
		    geeService = _ref.geeService;

		var originalQty = propertyHistoryService.getInitialValue(response, qtyOrderedProp);
		var actualQty = response.qtyOrdered;
		var added = originalQty < actualQty;
		var qtyProp = 'qty' + (added ? 'Added' : 'Removed');

		geeService.trigger(added ? 'addToCart' : 'removeFromCart', _defineProperty({
			product: angular.copy(response),
			list: ''
		}, qtyProp, Math.abs(originalQty - actualQty)));

		propertyHistoryService.resetPropertyHistory(response, qtyOrderedProp);
		propertyHistoryService.updateProperty(response, qtyOrderedProp, actualQty);
	}
};

/***/ })
/******/ ]);