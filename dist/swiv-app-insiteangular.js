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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
	name: __webpack_require__(24),
	url: __webpack_require__(25),
	regex: __webpack_require__(26)
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var prefix = __webpack_require__(3);

module.exports = prefix + 'Product';

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    nameHelper = _require.name;

module.exports = nameHelper.getName('gee');

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = 'swivGee';

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    nameHelper = _require.name;

module.exports = nameHelper.getName('interceptor');

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    nameHelper = _require.name;

module.exports = nameHelper.getName('propertyHistory');

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
/***/ (function(module, exports, __webpack_require__) {

var prefix = __webpack_require__(3);

module.exports = prefix + 'RemoveFromCart';

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = window.angular ? window.angular.module(__webpack_require__(7), __webpack_require__(15)) : null;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = [__webpack_require__(16).name];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var ngModule = __webpack_require__(17);

__webpack_require__(20)(ngModule);
__webpack_require__(35)(ngModule);
__webpack_require__(50)(ngModule);

module.exports = ngModule;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = window.angular ? window.angular.module(__webpack_require__(18), __webpack_require__(19)) : null;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7) + '.core';

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = [];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (ngModule) {
	__webpack_require__(21)(ngModule);
	__webpack_require__(27)(ngModule);
	__webpack_require__(31)(ngModule);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var GeeProvider = __webpack_require__(22);

module.exports = function (ngModule) {
	ngModule.provider(__webpack_require__(2), GeeProvider);
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GeeFactory = __webpack_require__(23);

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
/* 23 */
/***/ (function(module, exports) {

var GeeFactory = function GeeFactory() {
	return window.swiv.gee.getService();
};

GeeFactory.$inject = [];

module.exports = GeeFactory;

/***/ }),
/* 24 */
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
/* 25 */
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
/* 26 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (ngModule) {
	ngModule.provider(__webpack_require__(4), __webpack_require__(28));
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var config = __webpack_require__(8);

var _require = __webpack_require__(0),
    urlHelper = _require.url;

var _require2 = __webpack_require__(5),
    Injectable = _require2.Injectable;

var InterceptorFactory = __webpack_require__(29);

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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var InterceptorService = __webpack_require__(30);

var InterceptorFactory = function InterceptorFactory() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return new (Function.prototype.bind.apply(InterceptorService, [null].concat(args)))();
};

InterceptorFactory.$inject = [__webpack_require__(2), __webpack_require__(6)];

module.exports = InterceptorFactory;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

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
				if (preprocess(res.data, res.config.data, this) === false) {
					return;
				}
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (ngModule) {
	ngModule.provider(__webpack_require__(6), __webpack_require__(32));
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(5),
    Injectable = _require.Injectable;

var PropertyHistoryFactory = __webpack_require__(33);

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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var PropertyHistoryService = __webpack_require__(34);

var PropertyHistoryFactory = function PropertyHistoryFactory() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return new (Function.prototype.bind.apply(PropertyHistoryService, [null].concat(args)))();
};

PropertyHistoryFactory.$inject = [];

module.exports = PropertyHistoryFactory;

/***/ }),
/* 34 */
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (ngModule) {
	__webpack_require__(36)(ngModule);
	__webpack_require__(40)(ngModule);
	__webpack_require__(42)(ngModule);
	__webpack_require__(46)(ngModule);
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var directiveName = __webpack_require__(1);
var controllerFactory = __webpack_require__(37);
var scope = __webpack_require__(38);

module.exports = function (ngModule) {
	var controller = controllerFactory(ngModule);
	var restrict = 'A';

	ngModule.directive(directiveName, __webpack_require__(39)(function () {
		return {
			restrict: restrict,
			scope: scope,
			controller: controller
		};
	}));
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(5),
    Injectable = _require.Injectable;

var propertyHistoryService = __webpack_require__(6);

module.exports = function (ngModule) {

	var name = __webpack_require__(1) + 'Ctrl';

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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var directiveName = __webpack_require__(1);

module.exports = {
	product: '=' + directiveName
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function (directiveDefinition) {
	var dependencies = [];

	return dependencies.concat(directiveDefinition);
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var directiveName = __webpack_require__(9);

module.exports = function (ngModule) {

	ngModule.directive(directiveName, __webpack_require__(41)(function () {
		return {
			restrict: 'A'
		};
	}));
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = function (directiveDefinition) {
	var dependencies = [];

	return dependencies.concat(directiveDefinition);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var directiveName = __webpack_require__(10);
var productDirective = __webpack_require__(1);
var scope = __webpack_require__(43);
var linkFactory = __webpack_require__(44);

module.exports = function (ngModule) {
	ngModule.directive(directiveName, __webpack_require__(45)(function () {
		return {
			restrict: 'A',
			require: ['^?' + productDirective],
			scope: scope,
			link: linkFactory.apply(undefined, arguments)
		};
	}));
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var directiveName = __webpack_require__(10);

module.exports = {
	products: '=?' + directiveName
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var positionDirective = __webpack_require__(9).replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

module.exports = function (geeService) {
	return function ($scope, $element, $attrs, $ctrls) {
		$element.on('click', function () {
			var product = angular.copy($scope.product || $ctrls[0] ? $ctrls[0].$scope.product : null);
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (directiveDefinition) {
	var dependencies = [__webpack_require__(2)];

	return dependencies.concat(directiveDefinition);
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var directiveName = __webpack_require__(11);
var productDirective = __webpack_require__(1);
var scope = __webpack_require__(47);
var linkFactory = __webpack_require__(48);

module.exports = function (ngModule) {
	ngModule.directive(directiveName, __webpack_require__(49)(function () {
		return {
			restrict: 'A',
			require: ['^?' + productDirective],
			scope: scope,
			link: linkFactory.apply(undefined, arguments)
		};
	}));
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var directiveName = __webpack_require__(11);

module.exports = {
	products: '=?' + directiveName
};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function (geeService) {
	return function ($scope, $element, $attrs, $ctrls) {
		$element.on('click', function () {
			var products = $scope.products || $ctrls[0] ? $ctrls[0].$scope.product : null;
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (directiveDefinition) {
	var dependencies = [__webpack_require__(2)];

	return dependencies.concat(directiveDefinition);
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (ngModule) {
	__webpack_require__(51)(ngModule);
	__webpack_require__(52)(ngModule);
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var interceptor = __webpack_require__(4);

module.exports = function (ngModule) {

	ngModule.config(['$httpProvider', function ($httpProvider) {
		$httpProvider.interceptors.push(interceptor);
	}]);
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var interceptor = __webpack_require__(4);
var _actions = __webpack_require__(53);

module.exports = function (ngModule) {
	ngModule.config([interceptor + 'Provider', function ($interceptorProvider) {
		$interceptorProvider.endpointPrefix = '/api/v1';
		_actions.forEach(function (action) {
			$interceptorProvider.addAction(action.endpoint, action);
		});
	}]);
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = [__webpack_require__(54), __webpack_require__(55), __webpack_require__(56), __webpack_require__(57), __webpack_require__(58), __webpack_require__(59), __webpack_require__(60), __webpack_require__(61), __webpack_require__(62), __webpack_require__(63)];

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = {
	endpoint: '/products',
	event: 'productImpression'
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    regexHelper = _require.regex;

module.exports = {
	endpoint: '/products/' + regexHelper.guidRegExp,
	event: 'productDetail'
};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = {
	endpoint: '/websites/current/crosssells',
	event: 'productImpression',
	preprocess: function preprocess(response) {
		response.list = 'Web cross sale';
	}
};

/***/ }),
/* 57 */
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    regexHelper = _require.regex;

module.exports = {
	endpoint: '/wishlists/' + regexHelper.guidRegExp,
	event: 'productImpression',
	preprocess: function preprocess(response) {
		response.products = response.wishListLineCollection;
	}
};

/***/ }),
/* 59 */
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(0),
    urlHelper = _require.url;

module.exports = {
	endpoint: '/carts/current/cartlines(/batch)?',
	event: 'addToCart',
	method: urlHelper.methods.post,
	preprocess: function preprocess(response, request) {
		response.products = response.cartLines || [angular.copy(response)];
		response.list = '';
		response.products.forEach(function (product) {
			product.qtyAdded = request.qtyOrdered || product.qtyOrdered;
		});
	}
};

/***/ }),
/* 61 */
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

		response.products = request.cartLines;

		return true;
	}
};

/***/ }),
/* 62 */
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

		response.products = request.cartLines;

		return true;
	}
};

/***/ }),
/* 63 */
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