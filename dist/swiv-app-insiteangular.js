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

var _require = __webpack_require__(3),
    getName = _require.getName;

module.exports = getName('interceptor');

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
    function AbstractInsiteMapper() {
        _classCallCheck(this, AbstractInsiteMapper);
    }

    _createClass(AbstractInsiteMapper, [{
        key: "map",
        value: function map(data) {
            return data;
        }
    }]);

    return AbstractInsiteMapper;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = 'insite.swiv';

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = angular.module(__webpack_require__(2), __webpack_require__(7));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = [__webpack_require__(8).name];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var ngModule = __webpack_require__(9);

__webpack_require__(12)(ngModule);
__webpack_require__(14)(ngModule);

module.exports = ngModule;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = angular.module(__webpack_require__(10), __webpack_require__(11));

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2) + '.core';

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = [];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (ngModule) {
    __webpack_require__(13)(ngModule);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function (ngModule) {

    var _endpointPrefix = '';

    var _interceptor = void 0;

    var _endpointActionCollection = {};

    var _endpointAliasCollection = {};

    var Interceptor = function () {
        function Interceptor(actions) {
            _classCallCheck(this, Interceptor);

            _interceptor = this;
            this.actions = actions;
        }

        _createClass(Interceptor, [{
            key: 'response',
            value: function response(res) {
                var url = res.config.url.replace(window.location.hostname, '');
                url = url.split('?')[0];
                url = ('' + (url.charAt(0) === '/' || /http(s)?:/.test(url) ? '' : '/') + url).replace(/\.json$/, '');

                for (var endpoint in _interceptor.actions) {
                    if (_interceptor.actions[endpoint] && _interceptor.actions[endpoint].length) {
                        if (new RegExp('^' + _endpointPrefix + endpoint + '(/)?$').test(url)) {
                            _interceptor.actions[endpoint].forEach(function (action) {
                                window.swiv.gee.getService().trigger(action, res.data);
                            });
                        }
                    }
                }

                return res;
            }
        }]);

        return Interceptor;
    }();

    var InterceptorFactory = function InterceptorFactory() {
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

                    _processedEndpointActionCollection[endpoint] = actions.filter(function (value, index, self) {
                        return self.indexOf(value) === index;
                    });
                })();
            }
        }

        return new Interceptor(_processedEndpointActionCollection);
    };

    InterceptorFactory.$inject = [];

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

    ngModule.provider(__webpack_require__(0), InterceptorProvider);
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (ngModule) {
    __webpack_require__(15)(ngModule);
    __webpack_require__(16)(ngModule);
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var interceptor = __webpack_require__(0);

module.exports = function (ngModule) {

    ngModule.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push(interceptor);
    }]);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var _endpointAlias2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var interceptor = __webpack_require__(0);
var ProductDataMapper = __webpack_require__(17);

var _require = __webpack_require__(3),
    guidRegExp = _require.guidRegExp;

var _endpointAlias = (_endpointAlias2 = {}, _defineProperty(_endpointAlias2, '/products', 'impression'), _defineProperty(_endpointAlias2, '/products/' + guidRegExp, 'impression'), _endpointAlias2);

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

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(18);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

if (window.swiv && window.swiv.gee) {
    var InsiteMapperService = __webpack_require__(19);
    window.swiv.gee.setMapperService(new InsiteMapperService());
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ActionFieldDataModel = __webpack_require__(20);
var PromotionDataModelMapper = __webpack_require__(21);
var ProductDataModelMapper = __webpack_require__(22);

module.exports = function () {
    function InsiteMapperService() {
        _classCallCheck(this, InsiteMapperService);

        this.mappers = {
            'ProductDataModel': new ProductDataModelMapper(),
            'PromotionDataModel': new PromotionDataModelMapper(),
            'ActionFieldDataModel': new ActionFieldDataModel()
        };
    }

    _createClass(InsiteMapperService, [{
        key: 'map',
        value: function map(data, event) {
            var mapper = this.getDedicatedMapper(event.getMainDataType().name);

            if (mapper) {
                event.setMainData(mapper.map(data));
            }

            return event.getData();
        }
    }, {
        key: 'getDedicatedMapper',
        value: function getDedicatedMapper(event) {
            return this.mappers[event] || null;
        }
    }]);

    return InsiteMapperService;
}();

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractInsiteMapper = __webpack_require__(1);

module.exports = function (_AbstractInsiteMapper) {
    _inherits(InsiteActionFieldDataModelMapper, _AbstractInsiteMapper);

    function InsiteActionFieldDataModelMapper() {
        _classCallCheck(this, InsiteActionFieldDataModelMapper);

        return _possibleConstructorReturn(this, (InsiteActionFieldDataModelMapper.__proto__ || Object.getPrototypeOf(InsiteActionFieldDataModelMapper)).apply(this, arguments));
    }

    _createClass(InsiteActionFieldDataModelMapper, [{
        key: 'map',
        value: function map(data) {
            return data;
        }
    }]);

    return InsiteActionFieldDataModelMapper;
}(AbstractInsiteMapper);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractInsiteMapper = __webpack_require__(1);

module.exports = function (_AbstractInsiteMapper) {
    _inherits(InsitePromotionDataModelMapper, _AbstractInsiteMapper);

    function InsitePromotionDataModelMapper() {
        _classCallCheck(this, InsitePromotionDataModelMapper);

        return _possibleConstructorReturn(this, (InsitePromotionDataModelMapper.__proto__ || Object.getPrototypeOf(InsitePromotionDataModelMapper)).apply(this, arguments));
    }

    _createClass(InsitePromotionDataModelMapper, [{
        key: 'map',
        value: function map(data) {
            return data;
        }
    }]);

    return InsitePromotionDataModelMapper;
}(AbstractInsiteMapper);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractInsiteMapper = __webpack_require__(1);

module.exports = function (_AbstractInsiteMapper) {
    _inherits(InsiteProductDataModelMapper, _AbstractInsiteMapper);

    function InsiteProductDataModelMapper() {
        _classCallCheck(this, InsiteProductDataModelMapper);

        return _possibleConstructorReturn(this, (InsiteProductDataModelMapper.__proto__ || Object.getPrototypeOf(InsiteProductDataModelMapper)).apply(this, arguments));
    }

    _createClass(InsiteProductDataModelMapper, [{
        key: 'map',
        value: function map(data) {
            var _this2 = this;

            return (data.products || [data.product]).map(function (productDto) {
                return _this2.mapOne(productDto);
            });
        }
    }, {
        key: 'mapOne',
        value: function mapOne(productDto) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var product = {
                id: productDto.id,
                name: productDto.name,
                list: 'Detail Page',
                brand: productDto.properties.brand || '',
                category: productDto.properties.category || '',
                variant: '',
                position: 1,
                price: productDto.pricing.unitListPrice
            };

            Object.keys(data).forEach(function (k) {
                product[k] = data[k];
            });

            return product;
        }
    }]);

    return InsiteProductDataModelMapper;
}(AbstractInsiteMapper);

/***/ })
/******/ ]);