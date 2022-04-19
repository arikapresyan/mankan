module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"0":"57a1a0dc928b24781988","19":"79a1d93754bacb85999c","22":"90f76d4043bae8c717b5","23":"b5b5553d7568cb282c87","24":"9f0821b3d563f2dba7bc","27":"3c4f8f89a4d05190a472","28":"e34185c563525b094ec9","30":"0cc6930b907acc3f3958","33":"51403c47252eab086a72"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0wdU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return changeCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return changeCartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return changeCartError; });
/* unused harmony export changeCartReset */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cartSetAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cartChangeProduct; });
/* unused harmony export cartRemoveProduct */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return resetCartReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return populateCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return sendOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return sendOrderSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return sendOrderError; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);

const {
  changeCart,
  changeCartSuccess,
  changeCartError,
  changeCartReset,
  cartSetAll,
  cartChangeProduct,
  cartRemoveProduct,
  resetCartReducer,
  populateCart,
  sendOrder,
  sendOrderSuccess,
  sendOrderError
} = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createActions"])('CHANGE_CART', 'CHANGE_CART_SUCCESS', 'CHANGE_CART_ERROR', 'CHANGE_CART_RESET', 'CART_SET_ALL', 'CART_CHANGE_PRODUCT', 'CART_REMOVE_PRODUCT', 'RESET_CART_REDUCER', 'POPULATE_CART', 'SEND_ORDER', 'SEND_ORDER_SUCCESS', 'SEND_ORDER_ERROR');

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "store", function() { return /* binding */ _app_store; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "next-redux-saga"
var external_next_redux_saga_ = __webpack_require__("pEZS");
var external_next_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_saga_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "@redux-saga/core/effects"
var effects_ = __webpack_require__("Z0di");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__("3PsY");
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: ./store/services/Axios.js
var Axios = __webpack_require__("rg8P");

// EXTERNAL MODULE: ./store/user/action.js
var user_action = __webpack_require__("QnuM");

// EXTERNAL MODULE: ./store/userEventListeners/action.js
var userEventListeners_action = __webpack_require__("ss5K");

// EXTERNAL MODULE: ./store/wishlist/action.js
var wishlist_action = __webpack_require__("T/WE");

// EXTERNAL MODULE: ./constants/utils.js
var utils = __webpack_require__("O6kt");

// EXTERNAL MODULE: ./store/cart/action.js
var cart_action = __webpack_require__("0wdU");

// EXTERNAL MODULE: ./store/user/reducer.js
var reducer = __webpack_require__("XztR");

// EXTERNAL MODULE: ./store/pages-data/action.js
var pages_data_action = __webpack_require__("I4XR");

// EXTERNAL MODULE: ./utils/cookies.js
var cookies = __webpack_require__("32ec");

// CONCATENATED MODULE: ./store/user/saga.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function loginRequest(params) {
  return Axios["a" /* default */].request({
    method: 'post',
    url: '/api/user/signIn',
    data: params
  });
}

function* workLogin({
  payload: {
    emailOrPhone,
    password,
    rememberMe
  }
}) {
  try {
    const lang = yield Object(effects_["select"])(reducer["c" /* selectLang */]);
    yield Object(effects_["put"])(Object(user_action["b" /* authorizationLoading */])());
    const {
      data: {
        token,
        result
      }
    } = yield Object(effects_["call"])(loginRequest, {
      userName: emailOrPhone,
      password,
      rememberMe,
      lang
    });

    if (rememberMe) {
      Object(cookies["c" /* setCookie */])(utils["a" /* C_TOKEN */], token, {
        'max-age': 100 * 24 * 60 * 60
      });
    } else {
      Object(cookies["c" /* setCookie */])(utils["a" /* C_TOKEN */], token);
    }

    yield Object(effects_["put"])(Object(user_action["h" /* loginSuccess */])(_objectSpread({}, result)));
    Object(utils["l" /* removeLocalStorageObj */])('cart');
    Object(utils["l" /* removeLocalStorageObj */])('products');
    yield Object(effects_["put"])(Object(pages_data_action["a" /* getPageData */])({}));
    yield Object(effects_["put"])(Object(wishlist_action["g" /* wishlistPopulate */])());
    yield Object(effects_["put"])(Object(cart_action["f" /* populateCart */])());
  } catch (error) {
    var _error$response, _error$response$data;

    const errorMessage = (error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || 'Something went wrong';
    yield Object(effects_["all"])([Object(effects_["put"])(Object(user_action["a" /* authorizationError */])({
      errorText: errorMessage
    })), Object(effects_["put"])(Object(user_action["l" /* resetUserReducer */])())]);
  }
}

function* watchLogin() {
  yield Object(effects_["takeEvery"])(user_action["g" /* login */], workLogin);
}

function registrationRequest(params) {
  return Axios["a" /* default */].request({
    method: 'post',
    url: '/api/user/signUp',
    data: params
  });
}

function* workRegistration({
  payload: {
    email,
    password,
    phone,
    agreeTerms,
    name,
    surname,
    successText = 'Please, confirm email'
  }
}) {
  yield Object(effects_["put"])(Object(user_action["b" /* authorizationLoading */])());

  try {
    yield Object(effects_["call"])(registrationRequest, {
      email,
      password,
      retryPassword: password,
      phone,
      agreeTerms,
      firstName: name,
      lastName: surname,
      isAcceptedRules: agreeTerms
    });
    message_default.a.success({
      content: successText,
      duration: 5
    });
    yield Object(effects_["all"])([Object(effects_["put"])(Object(userEventListeners_action["b" /* hideAll */])()), Object(effects_["put"])(Object(user_action["l" /* resetUserReducer */])())]);
  } catch (error) {
    var _error$response2, _error$response2$data;

    yield Object(effects_["all"])([Object(effects_["put"])(Object(user_action["a" /* authorizationError */])({
      errorText: (error === null || error === void 0 ? void 0 : (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.message) || 'No server response'
    })), Object(effects_["put"])(Object(user_action["l" /* resetUserReducer */])())]);
  }
}

function* watchRegistration() {
  yield Object(effects_["takeEvery"])(user_action["k" /* registration */], workRegistration);
}

function getUserDataRequest(token) {
  return Axios["a" /* default */].request({
    method: 'get',
    url: `/api/user/info/${token}`
  });
}

function* workGetUserData() {
  const token = Object(cookies["b" /* getCookie */])(utils["a" /* C_TOKEN */]);

  try {
    if (!token) throw new Error();
    const {
      data: {
        result
      }
    } = yield Object(effects_["call"])(getUserDataRequest, token);
    yield Object(effects_["put"])(Object(user_action["f" /* getUserDataSuccess */])());
    yield Object(effects_["put"])(Object(user_action["h" /* loginSuccess */])(_objectSpread({}, result)));
    localStorage.setItem('lang', result.lang);
  } catch (error) {
    if (error.response) {
      localStorage.removeItem('cart');
      sessionStorage.removeItem('cart');
      localStorage.removeItem('products');
      sessionStorage.removeItem('products');
    }

    Object(cookies["a" /* deleteCookie */])(utils["a" /* C_TOKEN */]);
    yield Object(effects_["put"])(Object(user_action["d" /* getUserDataError */])());
  }

  try {
    yield Object(effects_["all"])([Object(effects_["put"])(Object(wishlist_action["g" /* wishlistPopulate */])()), Object(effects_["put"])(Object(cart_action["f" /* populateCart */])())]);
  } catch (error) {}
}

function* watchGetUserData() {
  yield Object(effects_["takeEvery"])(user_action["c" /* getUserData */], workGetUserData);
}

function* workLogout() {
  try {
    const user = yield Object(effects_["select"])(reducer["d" /* selectUser */]);
    if (!user.id) return;
    Object(cookies["a" /* deleteCookie */])(utils["a" /* C_TOKEN */]);
    localStorage.removeItem('products');
    localStorage.removeItem('cart');
    router_default.a.push('/');
    yield Object(effects_["put"])(Object(user_action["j" /* logoutSuccess */])());
    yield Object(effects_["put"])(Object(wishlist_action["g" /* wishlistPopulate */])());
    yield Object(effects_["put"])(Object(cart_action["f" /* populateCart */])());
  } catch (error) {
    yield Object(effects_["put"])(Object(user_action["a" /* authorizationError */])({
      errorText: 'logout error'
    }));
  }
}

function changeLangRequest(data) {
  return Axios["a" /* default */].request({
    url: '/api/user/changeLang',
    method: 'put',
    data
  });
}

function* workSetLang({
  payload
}) {
  try {
    const isAuth = yield Object(effects_["select"])(reducer["b" /* selectAuthorized */]);

    if (isAuth) {
      yield Object(effects_["call"])(changeLangRequest, payload);
    }

    localStorage.setItem('lang', payload.lang);
  } catch (e) {}
}

function* watchSetLang() {
  yield Object(effects_["takeEvery"])(user_action["m" /* setLang */], workSetLang);
}

function* watchLogout() {
  yield Object(effects_["takeEvery"])(user_action["i" /* logout */], workLogout);
}


// EXTERNAL MODULE: ./store/global-APIS/action.js
var global_APIS_action = __webpack_require__("jn+7");

// CONCATENATED MODULE: ./store/global-APIS/saga.js
function saga_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function saga_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { saga_ownKeys(Object(source), true).forEach(function (key) { saga_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { saga_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function saga_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const LOADER_KEY = 'loaderKey';

function sendAPIRequest(data) {
  return Axios["a" /* default */].request(saga_objectSpread({}, data));
}

function* workAPISend(action) {
  const {
    method,
    url,
    data,
    headers,
    successText = 'Success',
    errorText = 'Something went wrong',
    loadingText = 'Loading...'
  } = action.payload;
  yield Object(effects_["put"])(Object(global_APIS_action["c" /* APILoading */])());

  try {
    message_default.a.loading({
      content: loadingText,
      key: LOADER_KEY,
      duration: 0
    });
    const res = yield Object(effects_["call"])(sendAPIRequest, {
      method,
      url,
      headers: headers || {},
      data: data || null
    });
    const {
      status
    } = res;
    message_default.a.success({
      content: successText,
      key: LOADER_KEY,
      duration: 5
    });
    yield Object(effects_["put"])(Object(global_APIS_action["e" /* APISuccess */])({
      responseText: successText,
      status
    }));
  } catch (error) {
    message_default.a.error({
      content: errorText,
      key: LOADER_KEY,
      duration: 5
    });
    yield Object(effects_["put"])(Object(global_APIS_action["b" /* APIError */])({
      responseText: errorText
    }));
  } finally {
    yield Object(effects_["put"])(Object(global_APIS_action["a" /* APIClear */])());
  }
}
function* watchAPISend() {
  yield Object(effects_["takeEvery"])(global_APIS_action["d" /* APISend */], workAPISend);
}
// EXTERNAL MODULE: ./store/catalog-filter/action.js
var catalog_filter_action = __webpack_require__("AVz8");

// EXTERNAL MODULE: ./store/catalog/action.js
var catalog_action = __webpack_require__("xGlN");

// EXTERNAL MODULE: ./store/catalog-filter/reducer.js
var catalog_filter_reducer = __webpack_require__("jeSm");

// CONCATENATED MODULE: ./store/catalog-filter/saga.js






function* workCatalogFilterChange({
  payload: {
    name,
    value
  }
}) {
  try {
    if (name === 'classification' && (value === null || value === void 0 ? void 0 : value[0]) === 'all') {
      yield Object(effects_["put"])(Object(catalog_filter_action["h" /* resetFilterView */])());
    } else {
      const classificationAll = yield Object(effects_["select"])(Object(catalog_filter_reducer["c" /* getCatalogFilterByName */])('classification'));

      if (classificationAll[0] === 'all') {
        yield Object(effects_["put"])(Object(catalog_filter_action["c" /* catalogFilterChangeSuccess */])({
          name: 'classification',
          value: []
        }));
      }
    }

    yield Object(effects_["put"])(Object(catalog_filter_action["c" /* catalogFilterChangeSuccess */])({
      name,
      value
    }));
    yield Object(effects_["put"])(Object(catalog_action["a" /* catalogGet */])({
      name,
      value
    }));
  } catch (error) {}
}

function* watchCatalogFilterChange() {
  yield Object(effects_["takeLatest"])(catalog_filter_action["a" /* catalogFilterChange */], workCatalogFilterChange);
}

function* workCatalogFilterSetValues({
  payload
}) {
  try {
    var _payload$classificati;

    const all = payload === null || payload === void 0 ? void 0 : (_payload$classificati = payload.classification) === null || _payload$classificati === void 0 ? void 0 : _payload$classificati[0];

    if (all) {
      yield Object(effects_["put"])(Object(catalog_filter_action["h" /* resetFilterView */])({
        exception: 'classification'
      }));
    } else {
      const classificationAll = yield Object(effects_["select"])(Object(catalog_filter_reducer["c" /* getCatalogFilterByName */])('classification'));

      if (classificationAll[0] === 'all') {
        yield Object(effects_["put"])(Object(catalog_filter_action["c" /* catalogFilterChangeSuccess */])({
          name: 'classification',
          value: []
        }));
      }
    }
  } catch (e) {// todo handle
  }
}

function* watchCatalogFilterSetValues() {
  yield Object(effects_["takeEvery"])(catalog_filter_action["d" /* catalogFilterSetValues */], workCatalogFilterSetValues);
}

function* watchCatalogMainSearch() {
  yield Object(effects_["takeLatest"])(catalog_filter_action["e" /* catalogMainSearch */], function* workCatalogMainSearch({
    payload: {
      searchWord
    }
  }) {
    try {
      router_default.a.push(`/catalog?searchWord=${searchWord}`);
    } catch (e) {
      if (false) {}
    }
  });
}


// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./store/catalog/constants.js
// eslint-disable-next-line import/prefer-default-export
const CATALOG_PRODUCTS_LIMIT = 36;
// CONCATENATED MODULE: ./store/catalog/saga.js
function catalog_saga_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function catalog_saga_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { catalog_saga_ownKeys(Object(source), true).forEach(function (key) { catalog_saga_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { catalog_saga_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function catalog_saga_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// eslint-disable-next-line import/no-extraneous-dependencies








let cancel; // eslint-disable-next-line require-yield

function getFilteredDataRequest(data) {
  return Axios["a" /* default */].request({
    url: '/api/product/fast',
    method: 'post',
    data,
    cancelToken: new external_axios_["CancelToken"](c => {
      cancel = c;
    })
  });
}

function getKey(name) {
  // brand productSex extraFilter productAge productType productUsage
  switch (name) {
    case 'age':
      return 'productAge';

    case 'gender':
      return 'productSex';

    case 'type':
      return 'productType';

    case 'brand':
      return 'brand';

    case 'meaning':
      return 'productUsage';

    case 'classification':
      return 'extraFilter';

    default:
      return null;
  }
}

function getBackKey(name) {
  switch (name) {
    case 'productAge':
      return 'age';

    case 'productSex':
      return 'gender';

    case 'productType':
      return 'type';

    case 'brand':
      return 'brand';

    case 'productUsage':
      return 'meaning';

    case 'extraFilter':
      return 'classification';

    default:
      return null;
  }
}

function* workCatalogGet({
  payload
}) {
  try {
    var _filterClone$gender, _filterClone$gender2, _filterClone$price, _filterClone$price2, _filterClone$classifi, _filterClone$classifi2, _filterClone$classifi3, _filterClone$classifi4, _filterClone$gender3;

    const {
      page,
      name,
      changedNames
    } = payload || {}; // TODO: remove is triggered

    const selectedPage = page || 1;
    const filters = yield Object(effects_["select"])(catalog_filter_reducer["a" /* clearFilters */]);
    const catalogFilters = yield Object(effects_["select"])(catalog_filter_reducer["e" /* selectCatalogFilters */]);
    let lastFilters = {};
    const filterName = getKey(name);

    if (filterName) {
      if (filterName && catalogFilters[filterName]) {
        lastFilters = {
          [filterName]: catalogFilters[filterName]
        };
      }
    }

    if (changedNames) {
      changedNames.forEach(n => {
        const fName = getKey(n);

        if (fName) {
          if (fName && catalogFilters[fName]) {
            lastFilters[fName] = catalogFilters[fName];
          }
        }
      });
    } // brand productSex extraFilter productAge productType productUsage


    filters.classification = filters.classification || []; // eslint-disable-next-line no-restricted-globals

    const extraFilterIds = !isNaN(+filters.classification[0]) && filters.classification[0];
    const filterClone = JSON.parse(JSON.stringify(filters));
    const lastFilterKeys = [];
    Object.keys(filterClone).forEach(key => {
      const indexOfAll = filterClone[key].indexOf('all');
      lastFilterKeys.push(getKey(key));

      if (indexOfAll !== -1 || !filterClone[key].length) {
        delete filterClone[key];
        delete lastFilters[getKey(key)];
      }
    });
    Object.keys(lastFilters).forEach(key => {
      if (!filterClone[getBackKey(key)]) {
        delete lastFilters[key];
      }
    });
    const filterToSend = {
      lang: yield Object(effects_["select"])(reducer["c" /* selectLang */]),
      limit: CATALOG_PRODUCTS_LIMIT,
      offset: (selectedPage - 1) * CATALOG_PRODUCTS_LIMIT,
      extraFilterIds,
      typeIds: filterClone.type,
      usageIds: filterClone.meaning,
      ageIds: filterClone.age,
      brandIds: filterClone.brand,
      sex: ((_filterClone$gender = filterClone.gender) === null || _filterClone$gender === void 0 ? void 0 : _filterClone$gender[0]) !== 'ALL' ? filterClone === null || filterClone === void 0 ? void 0 : (_filterClone$gender2 = filterClone.gender) === null || _filterClone$gender2 === void 0 ? void 0 : _filterClone$gender2[0] : undefined,
      minPrice: (filterClone === null || filterClone === void 0 ? void 0 : (_filterClone$price = filterClone.price) === null || _filterClone$price === void 0 ? void 0 : _filterClone$price[0]) || undefined,
      maxPrice: (filterClone === null || filterClone === void 0 ? void 0 : (_filterClone$price2 = filterClone.price) === null || _filterClone$price2 === void 0 ? void 0 : _filterClone$price2[1]) || undefined,
      percent: (filterClone === null || filterClone === void 0 ? void 0 : (_filterClone$classifi = filterClone.classification) === null || _filterClone$classifi === void 0 ? void 0 : _filterClone$classifi[0]) === 'percent',
      bestSeller: (filterClone === null || filterClone === void 0 ? void 0 : (_filterClone$classifi2 = filterClone.classification) === null || _filterClone$classifi2 === void 0 ? void 0 : _filterClone$classifi2[0]) === 'bestSeller',
      isNew: (filterClone === null || filterClone === void 0 ? void 0 : (_filterClone$classifi3 = filterClone.classification) === null || _filterClone$classifi3 === void 0 ? void 0 : _filterClone$classifi3[0]) === 'isNew',
      priceByAsc: (filterClone === null || filterClone === void 0 ? void 0 : (_filterClone$classifi4 = filterClone.classification) === null || _filterClone$classifi4 === void 0 ? void 0 : _filterClone$classifi4[0]) === 'priceByAsc',
      searchWord: catalogFilters.searchWord
    };

    if (Array.isArray((_filterClone$gender3 = filterClone.gender) === null || _filterClone$gender3 === void 0 ? void 0 : _filterClone$gender3[0])) {
      delete filterToSend.sex;
    }

    if (cancel !== undefined) {
      cancel();
    }

    const {
      data: {
        filters: newFilters
      }
    } = yield Object(effects_["call"])(getFilteredDataRequest, filterToSend),
          restData = _objectWithoutProperties((yield Object(effects_["call"])(getFilteredDataRequest, filterToSend)).data, ["filters"]);

    yield Object(effects_["all"])([Object(effects_["put"])(Object(catalog_action["c" /* catalogGetSuccess */])({
      products: restData.result.rows,
      pagesCount: restData.pages,
      page: selectedPage
    }))]);

    if (restData.result.rows.length > 0) {
      yield Object(effects_["put"])(Object(catalog_filter_action["f" /* catalogSetFilters */])({
        filters: catalog_saga_objectSpread({
          productAge: newFilters.age,
          productType: newFilters.type,
          productSex: newFilters.productSex,
          extraFilter: newFilters.extraFilter,
          productUsage: newFilters.usage,
          brand: newFilters.brand,
          searchWord: catalogFilters.searchWord
        }, lastFilters)
      }));
    }
  } catch (error) {
    yield Object(effects_["put"])(Object(catalog_action["b" /* catalogGetError */])());
  }
}

function* watchCatalogGet() {
  yield Object(effects_["takeLatest"])(catalog_action["a" /* catalogGet */], workCatalogGet);
}


// EXTERNAL MODULE: ./store/data-by-pagination/action.js
var data_by_pagination_action = __webpack_require__("HHh0");

// CONCATENATED MODULE: ./store/data-by-pagination/saga.js
function data_by_pagination_saga_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function data_by_pagination_saga_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { data_by_pagination_saga_ownKeys(Object(source), true).forEach(function (key) { data_by_pagination_saga_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { data_by_pagination_saga_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function data_by_pagination_saga_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-unused-vars */




const dataByName = {
  buyProductList: {
    url: '/api/user/orders/all',
    method: 'post'
  }
};

async function getDataListByPaginationRequest({
  name,
  page,
  lang
}) {
  const {
    data: {
      pages,
      result: {
        rows
      }
    }
  } = await Axios["a" /* default */].request(data_by_pagination_saga_objectSpread(data_by_pagination_saga_objectSpread({}, dataByName[name]), {}, {
    data: {
      page,
      offset: 12 * (page - 1),
      limit: 12,
      lang
    }
  }));
  return {
    pages,
    data: rows
  };
}

function* workGetDataListByPagination({
  payload: {
    name,
    page
  }
}) {
  try {
    const lang = yield Object(effects_["select"])(reducer["c" /* selectLang */]);
    const res = yield Object(effects_["call"])(getDataListByPaginationRequest, {
      name,
      page: page || 1,
      lang
    });
    yield Object(effects_["put"])(Object(data_by_pagination_action["d" /* getDataListByPaginationSuccess */])(data_by_pagination_saga_objectSpread(data_by_pagination_saga_objectSpread({}, res), {}, {
      name,
      page
    })));
  } catch (error) {
    yield Object(effects_["put"])(Object(data_by_pagination_action["b" /* getDataListByPaginationError */])({
      name
    }));
  }
}

function* watchGetDataListByPagination() {
  yield Object(effects_["takeEvery"])(data_by_pagination_action["a" /* getDataListByPagination */], workGetDataListByPagination);
}

/* harmony default export */ var saga = (function* () {
  yield Object(effects_["all"])([watchGetDataListByPagination()]);
});
// EXTERNAL MODULE: ./store/menu-list/action.js
var menu_list_action = __webpack_require__("ynhf");

// CONCATENATED MODULE: ./store/menu-list/saga.js
function menu_list_saga_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function menu_list_saga_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { menu_list_saga_ownKeys(Object(source), true).forEach(function (key) { menu_list_saga_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { menu_list_saga_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function menu_list_saga_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // eslint-disable-next-line import/no-cycle





function getRequestBody(name) {
  switch (name) {
    case 'own':
      return {
        ownBrand: true,
        urlPostfix: 'mankan'
      };

    case 'infant':
    case 'infants':
      return {
        infant: true,
        urlPostfix: 'infant'
      };

    case 'boy':
    case 'boys':
      return {
        sex: 'BOY',
        urlPostfix: 'boy'
      };

    case 'girl':
    case 'girls':
      return {
        sex: 'GIRL',
        urlPostfix: 'girl'
      };

    default:
      return {
        urlPostfix: 'all'
      };
  }
}

function getMenuListRequest({
  urlPostfix,
  lang
}) {
  return Axios["a" /* default */].request({
    url: `/api/product/hoverFilters/${urlPostfix}/?lang=${lang}`,
    method: 'get'
  });
}

function getBestSellerRequest(data) {
  return Axios["a" /* default */].request({
    url: '/api/product/navFiltersBestSeller',
    method: 'post',
    data
  });
}

function getNavFilteredDataToView({
  brand,
  usage: meaning,
  age,
  type,
  messages
}) {
  const ageToSend = (age || []).map(({
    id,
    minAge,
    maxAge
  }) => ({
    id,
    name: Object(utils["e" /* getProductAge */])(minAge, maxAge, messages),
    text: Object(utils["e" /* getProductAge */])(minAge, maxAge, messages)
  }));
  return {
    type,
    age: ageToSend,
    brand,
    meaning
  };
}

function* workMenuList({
  payload: {
    name,
    messages
  }
}) {
  const lang = yield Object(effects_["select"])(reducer["c" /* selectLang */]);

  try {
    const filterData = menu_list_saga_objectSpread(menu_list_saga_objectSpread({}, getRequestBody(name)), {}, {
      lang
    });

    const res = yield Object(effects_["call"])(getMenuListRequest, filterData);
    const {
      data: {
        result: {
          rows
        }
      }
    } = yield Object(effects_["call"])(getBestSellerRequest, filterData);
    yield Object(effects_["put"])(Object(menu_list_action["d" /* getMenuListSuccess */])({
      data: getNavFilteredDataToView(menu_list_saga_objectSpread(menu_list_saga_objectSpread({}, res.data), {}, {
        messages
      })),
      name,
      bestseller: rows[0]
    }));
  } catch (error) {
    console.log(error);
  }
}

function* watchMenuList() {
  yield Object(effects_["takeLatest"])(menu_list_action["a" /* getMenuList */], workMenuList);
}


// EXTERNAL MODULE: ./store/accompanying-product/action.js
var accompanying_product_action = __webpack_require__("yHyA");

// EXTERNAL MODULE: ./store/cart/reducer.js + 1 modules
var cart_reducer = __webpack_require__("KBGK");

// CONCATENATED MODULE: ./store/accompanying-product/saga.js






function getAccompanyingProductRequest({
  ids,
  lang
}) {
  return Axios["a" /* default */].request({
    method: 'post',
    url: '/api/product/escorting',
    data: {
      ids,
      lang
    }
  });
}

function* workAccompanying() {
  const ids = Object.keys(yield Object(effects_["select"])(cart_reducer["c" /* selectCart */]));
  const lang = yield Object(effects_["select"])(reducer["c" /* selectLang */]);

  try {
    if (!ids.length) throw new Error();
    const {
      data: {
        escortingProducts
      }
    } = yield Object(effects_["call"])(getAccompanyingProductRequest, {
      ids,
      lang
    });
    yield Object(effects_["put"])(Object(accompanying_product_action["c" /* getAccompanyingProductSuccess */])({
      data: escortingProducts
    }));
  } catch (error) {
    yield Object(effects_["put"])(Object(accompanying_product_action["b" /* getAccompanyingProductError */])());
  }
}

function* watchAccompanying() {
  yield Object(effects_["takeLatest"])(accompanying_product_action["a" /* getAccompanyingProduct */], workAccompanying);
}

/* harmony default export */ var accompanying_product_saga = (function* () {
  yield Object(effects_["all"])([watchAccompanying()]);
});
// EXTERNAL MODULE: ./store/wishlist/reducer.js
var wishlist_reducer = __webpack_require__("kvtS");

// CONCATENATED MODULE: ./store/wishlist/saga.js
function wishlist_saga_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function wishlist_saga_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { wishlist_saga_ownKeys(Object(source), true).forEach(function (key) { wishlist_saga_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { wishlist_saga_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function wishlist_saga_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function getProductsByIdsRequest({
  ids,
  lang
}) {
  return Axios["a" /* default */].request({
    url: '/api/product/byIds',
    data: {
      ids,
      lang
    },
    method: 'post'
  });
}

function* changeWishlistRequest(productIds) {
  yield Object(effects_["call"])(Axios["a" /* default */].request, {
    method: 'post',
    url: '/api/user/addWish/byIds',
    data: {
      type: 'wish',
      productIds
    }
  });
}

function* workWishlistGet() {
  // get products by ids
  try {
    const lang = yield Object(effects_["select"])(reducer["c" /* selectLang */]); // get from local storage

    let productIds = Object(utils["d" /* getLocalStorageObj */])('products').wishlistIds;
    const ids = Object.keys(productIds);

    if (!ids.length) {
      yield Object(effects_["put"])(Object(wishlist_action["l" /* wishlistSet */])({
        products: [],
        productIds: {}
      }));
      return;
    }

    const {
      data: {
        result
      }
    } = yield Object(effects_["call"])(getProductsByIdsRequest, {
      ids,
      lang
    });

    if (result.length !== ids.length) {
      const isAuth = yield Object(effects_["select"])(reducer["b" /* selectAuthorized */]);
      productIds = {};
      result.forEach(({
        id
      }) => {
        productIds[id] = true;
      });
      Object(utils["m" /* setLocalStorageObj */])('products', {
        wishlistIds: productIds
      });

      if (isAuth) {
        yield Object(effects_["call"])(changeWishlistRequest, Object.keys(productIds));
      }
    }

    yield Object(effects_["put"])(Object(wishlist_action["l" /* wishlistSet */])({
      products: result,
      productIds
    }));
  } catch (error) {
    yield Object(effects_["put"])(Object(wishlist_action["c" /* wishlistError */])());
  }
}

function* workWishlistPopulate() {
  try {
    yield Object(effects_["put"])(Object(wishlist_action["i" /* wishlistPopulateLoading */])());
    const userWishListArray = (wishlist_saga_objectSpread({}, yield Object(effects_["select"])(reducer["d" /* selectUser */])).wishList || []).map(({
      productId
    }) => productId);
    const userWishlistObj = {};
    userWishListArray.forEach(i => {
      userWishlistObj[i] = true;
    });
    const wishlistIds = userWishListArray.length && userWishlistObj || Object(utils["d" /* getLocalStorageObj */])('products') && Object(utils["d" /* getLocalStorageObj */])('products').wishlistIds || {};
    yield Object(effects_["put"])(Object(wishlist_action["j" /* wishlistPopulateSuccess */])({
      wishlistIds
    }));
    Object(utils["m" /* setLocalStorageObj */])('products', {
      wishlistIds
    });
  } catch (error) {
    yield Object(effects_["put"])(Object(wishlist_action["h" /* wishlistPopulateError */])());
  }
}

function* watchWishlistPopulate() {
  yield Object(effects_["takeEvery"])(wishlist_action["g" /* wishlistPopulate */], workWishlistPopulate);
}

function setToWishlistRequest(productId) {
  return Axios["a" /* default */].request({
    method: 'post',
    url: '/api/user/addWish',
    data: {
      productId,
      type: 'wish'
    }
  });
}

function removeFromWishlistRequest(productId) {
  return Axios["a" /* default */].request({
    method: 'delete',
    url: '/api/user/removeWish',
    data: {
      productId,
      type: 'wish'
    }
  });
}

function* workWishlistChangeItem({
  payload: {
    productId
  }
}) {
  const authorizedUser = yield Object(effects_["select"])(reducer["b" /* selectAuthorized */]);
  yield Object(effects_["put"])(Object(wishlist_action["f" /* wishlistItemLoading */])({
    id: productId
  }));

  try {
    const wishlistIds = yield Object(effects_["select"])(wishlist_reducer["c" /* selectWishlistIds */]);
    const inWishlist = !!wishlistIds[productId];

    if (authorizedUser) {
      // axios add to send to server to add user wishlistIds
      if (inWishlist) {
        yield Object(effects_["call"])(removeFromWishlistRequest, productId);
      } else {
        // add to wishlistIds
        yield Object(effects_["call"])(setToWishlistRequest, productId); // remove from wishlistIds
      }
    }

    wishlistIds[productId] = inWishlist ? null : productId;

    if (inWishlist) {
      delete wishlistIds[productId];
    } else wishlistIds[productId] = true;

    yield Object(effects_["put"])(Object(wishlist_action["b" /* wishlistChangeItemSuccess */])({
      wishlistIds: wishlist_saga_objectSpread({}, wishlistIds),
      id: productId
    }));
    Object(utils["m" /* setLocalStorageObj */])('products', {
      wishlistIds
    });
  } catch (error) {}
}

function* watchWishlistChangeItem() {
  yield Object(effects_["takeEvery"])(wishlist_action["a" /* wishlistChangeItem */], workWishlistChangeItem);
}

function* watchWishlistGet() {
  yield Object(effects_["takeEvery"])(wishlist_action["d" /* wishlistGet */], workWishlistGet);
}

/* harmony default export */ var wishlist_saga = (function* () {
  yield Object(effects_["all"])([watchWishlistGet(), watchWishlistChangeItem(), watchWishlistPopulate()]);
});
// EXTERNAL MODULE: external "redux-saga/effects"
var external_redux_saga_effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: ./store/pages-data/reducer.js
var pages_data_reducer = __webpack_require__("8MCz");

// CONCATENATED MODULE: ./store/pages-data/saga.js
function pages_data_saga_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function pages_data_saga_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pages_data_saga_ownKeys(Object(source), true).forEach(function (key) { pages_data_saga_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { pages_data_saga_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function pages_data_saga_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // eslint-disable-next-line import/no-cycle






const getHomePageData = async lang => {
  try {
    const {
      data: {
        result: {
          rows: orders
        }
      }
    } = await Axios["a" /* default */].request({
      url: '/api/product/sliders',
      method: 'get'
    });
    const {
      data: {
        result
      }
    } = await Axios["a" /* default */].request({
      url: '/api/product/homePage',
      method: 'post',
      data: {
        lang
      }
    });
    const homePageData = [];
    const newHomePageData = [];
    const {
      ExtraProducts
    } = result;
    delete result.ExtraProducts;
    const resultKeys = Object.keys(result);
    orders.forEach((currentOrder, index) => {
      let data = {};
      resultKeys.forEach(key => {
        if (result[key].sliderId === currentOrder.id) {
          data = result[key];
        }
      });
      ExtraProducts.forEach(extra => {
        if (extra.sliderId === currentOrder.id) {
          data = extra;
        }
      });
      homePageData[currentOrder.order || 100 * index] = pages_data_saga_objectSpread(pages_data_saga_objectSpread({}, currentOrder), data);
    });
    homePageData.forEach(dataItem => {
      if (dataItem) newHomePageData.push(dataItem);
    });
    return newHomePageData;
  } catch (error) {
    return [];
  }
};

const getProfilePageData = async () => ({
  myOrders: [],
  viewedProducts: [],
  untilNextBonusPercent: 50000,
  nextBonusPercent: 3
});

const getOneProductData = async (lang, id) => {
  const {
    data: {
      result
    }
  } = await Axios["a" /* default */].request({
    method: 'post',
    url: `/api/product/${id}`,
    data: {
      id,
      lang
    }
  });
  return {
    result
  };
};

function* changeUserCart(products) {
  yield Object(external_redux_saga_effects_["call"])(Axios["a" /* default */].request, {
    method: 'post',
    url: '/api/user/addWish/byIds',
    data: {
      type: 'cart',
      products
    }
  });
}

function* getCartPageData({
  lang,
  cart
}) {
  const ids = Object.keys(cart);
  const {
    data: {
      result: cartData
    }
  } = yield Object(external_redux_saga_effects_["call"])(Axios["a" /* default */].request, {
    url: '/api/product/byIds',
    data: {
      lang,
      ids
    },
    method: 'post'
  });

  if (ids.length !== cartData.length) {
    const isAuth = yield Object(external_redux_saga_effects_["select"])(reducer["b" /* selectAuthorized */]);
    const newCart = {};
    cartData.forEach(({
      id
    }) => {
      newCart[id] = pages_data_saga_objectSpread({}, cart[id]);
    });
    yield Object(external_redux_saga_effects_["put"])(Object(cart_action["b" /* cartSetAll */])({
      cart: newCart
    }));
    Object(utils["m" /* setLocalStorageObj */])('cart', newCart);

    if (isAuth) {
      yield Object(external_redux_saga_effects_["call"])(changeUserCart, Object.keys(newCart).map(key => newCart[key]));
    }
  }

  const {
    data: {
      result: bugsData
    }
  } = yield Object(external_redux_saga_effects_["call"])(Axios["a" /* default */].request, {
    url: '/api/product/bugs',
    data: {
      lang
    },
    method: 'post'
  });
  return {
    cartData,
    bugsData
  };
}

const getVacancyPageData = async ({
  lang
}) => {
  const res = await Axios["a" /* default */].request({
    url: '/api/vocation/',
    data: {
      lang
    },
    method: 'post'
  });
  return res;
};

function* getDataByPage({
  page,
  lang,
  id,
  data
}) {
  if (page === 'home') {
    const res = yield Object(external_redux_saga_effects_["call"])(getHomePageData, lang);
    return res;
  }

  if (page === 'profile') {
    const res = yield Object(external_redux_saga_effects_["call"])(getProfilePageData, lang);
    return res;
  }

  if (page === 'oneProduct') {
    const res = yield Object(external_redux_saga_effects_["call"])(getOneProductData, lang, id);
    return res;
  }

  if (page === 'cart') {
    const res = yield Object(external_redux_saga_effects_["call"])(getCartPageData, {
      lang,
      cart: data.cart
    });
    return res;
  }

  if (page === 'vacancy') {
    const {
      data: {
        result
      }
    } = yield Object(external_redux_saga_effects_["call"])(getVacancyPageData, {
      lang
    });
    return result;
  }

  return null;
}

function* workGetPageData(action) {
  try {
    const {
      payload: {
        page,
        id,
        data
      }
    } = action;
    const lang = yield Object(external_redux_saga_effects_["select"])(reducer["c" /* selectLang */]);
    const currentId = id || (yield Object(external_redux_saga_effects_["select"])(pages_data_reducer["f" /* selectPageId */]));
    const currentPage = page || (yield Object(external_redux_saga_effects_["select"])(pages_data_reducer["b" /* selectCurrentPage */]));
    const helperData = data || (yield Object(external_redux_saga_effects_["select"])(pages_data_reducer["d" /* selectHelperData */])) || null;
    const res = yield Object(external_redux_saga_effects_["call"])(getDataByPage, {
      page: currentPage,
      lang,
      id: currentId,
      data: helperData
    });
    yield Object(external_redux_saga_effects_["put"])(Object(pages_data_action["c" /* getPageDataSuccess */])({
      data: res,
      page: currentPage,
      id: currentId,
      helperData
    }));
  } catch (error) {
    yield Object(external_redux_saga_effects_["put"])(Object(pages_data_action["b" /* getPageDataError */])());
  }
}

function* watchGetPageData() {
  yield Object(external_redux_saga_effects_["takeEvery"])(pages_data_action["a" /* getPageData */], workGetPageData);
}

/* harmony default export */ var pages_data_saga = (function* () {
  yield Object(external_redux_saga_effects_["all"])([watchGetPageData()]);
});
// EXTERNAL MODULE: ./store/buy-product/action.js
var buy_product_action = __webpack_require__("nfH0");

// CONCATENATED MODULE: ./store/buy-product/saga.js






function getBuyProductById({
  id,
  lang
}) {
  return Axios["a" /* default */].request({
    method: 'post',
    url: `/api/product/${id}`,
    body: {
      lang
    },
    data: {
      lang
    }
  });
}

function* workGetProductToBuy({
  payload: {
    id,
    notShowModal,
    errorMessage
  }
}) {
  const lang = yield Object(external_redux_saga_effects_["select"])(reducer["c" /* selectLang */]);

  try {
    if (notShowModal) {
      yield Object(external_redux_saga_effects_["put"])(Object(buy_product_action["c" /* getProductToBuyReset */])());
    }

    const {
      data
    } = yield Object(external_redux_saga_effects_["call"])(getBuyProductById, {
      id,
      lang
    });
    yield Object(external_redux_saga_effects_["put"])(Object(buy_product_action["d" /* getProductToBuySuccess */])({
      data: data.result
    }));
  } catch (error) {
    message_default.a.error(errorMessage || 'oops!!!');
    yield Object(external_redux_saga_effects_["put"])(Object(buy_product_action["b" /* getProductToBuyError */])());
  }
}

function* watchGetProductToBuy() {
  yield Object(external_redux_saga_effects_["takeEvery"])(buy_product_action["a" /* getProductToBuy */], workGetProductToBuy);
}

/* harmony default export */ var buy_product_saga = (function* () {
  yield Object(external_redux_saga_effects_["all"])([watchGetProductToBuy()]);
});
// EXTERNAL MODULE: ./store/search/action.js
var search_action = __webpack_require__("RHPr");

// CONCATENATED MODULE: ./store/search/saga.js





function getSearchedProductsRequest({
  searchWord,
  lang
}) {
  return Axios["a" /* default */].request({
    method: 'post',
    url: '/api/product/homePage/search',
    data: {
      searchWord,
      lang
    }
  });
}

function* workSearchProduct({
  payload: {
    searchWord
  }
}) {
  yield Object(external_redux_saga_effects_["delay"])(200);
  const lang = yield Object(external_redux_saga_effects_["select"])(reducer["c" /* selectLang */]);

  try {
    const {
      data: {
        result
      }
    } = yield Object(external_redux_saga_effects_["call"])(getSearchedProductsRequest, {
      searchWord,
      lang
    });
    yield Object(external_redux_saga_effects_["put"])(Object(search_action["d" /* searchProductSuccess */])({
      data: result
    }));
  } catch (error) {
    yield Object(external_redux_saga_effects_["put"])(Object(search_action["b" /* searchProductError */])());
  }
}

function* watchSearchProduct() {
  yield Object(external_redux_saga_effects_["takeLatest"])(search_action["a" /* searchProduct */], workSearchProduct);
}

/* harmony default export */ var search_saga = (function* () {
  yield Object(external_redux_saga_effects_["all"])([watchSearchProduct()]);
});
// EXTERNAL MODULE: ./store/change-page/action.js
var change_page_action = __webpack_require__("t4EC");

// EXTERNAL MODULE: ./components/modals/confirm-order-modal/components/constants.js
var constants = __webpack_require__("81+r");

// CONCATENATED MODULE: ./store/cart/saga.js
function cart_saga_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function cart_saga_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cart_saga_ownKeys(Object(source), true).forEach(function (key) { cart_saga_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cart_saga_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function cart_saga_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function* workPopulateCart() {
  try {
    const userCart = (cart_saga_objectSpread({}, yield Object(external_redux_saga_effects_["select"])(reducer["d" /* selectUser */])).cartList || []).map(({
      productId,
      count,
      battery
    }) => ({
      id: productId,
      count,
      battery
    }));
    const userCartObj = {};
    userCart.forEach(cart => {
      userCartObj[cart.id] = {
        count: cart.count || 1,
        id: cart.id,
        status: true,
        battery: cart.battery
      };
    });
    const cartData = Object.keys(userCartObj).length && userCartObj || Object(utils["d" /* getLocalStorageObj */])('cart') || {};
    Object(utils["m" /* setLocalStorageObj */])('cart', cartData);
    yield Object(external_redux_saga_effects_["put"])(Object(cart_action["b" /* cartSetAll */])({
      cart: cartData
    }));
  } catch (error) {}
}

function* watchPopulateCart() {
  yield Object(external_redux_saga_effects_["takeEvery"])(cart_action["f" /* populateCart */], workPopulateCart);
}

function saga_setToWishlistRequest(products) {
  return Axios["a" /* default */].request({
    method: 'post',
    url: '/api/user/addWish',
    data: {
      products,
      type: 'cart'
    }
  });
}

function saga_removeFromWishlistRequest({
  toRemove: products,
  clearBatteryOwners
}) {
  const data = cart_saga_objectSpread({
    productId: products[0],
    type: 'cart'
  }, clearBatteryOwners ? {
    removeBatteryId: products[0]
  } : {});

  return Axios["a" /* default */].request({
    method: 'delete',
    url: '/api/user/removeWish',
    data
  });
}

function* workChangeCart({
  payload: {
    ids,
    status,
    redirect
  }
}) {
  const authorized = yield Object(external_redux_saga_effects_["select"])(reducer["b" /* selectAuthorized */]);

  try {
    const cart = cart_saga_objectSpread({}, yield Object(external_redux_saga_effects_["select"])(cart_reducer["c" /* selectCart */]) || {});

    const idsKeys = Object.keys(ids);
    const toRemove = [];
    const toAdd = [];
    let clearBatteryOwners = null;
    idsKeys.forEach(key => {
      if (ids[key].status && status) {
        if (cart[key] && !ids[key].batteryId) {
          delete cart[key].batteryId;
        }

        const count = cart[key] && cart[key].count;
        cart[key] = cart_saga_objectSpread(cart_saga_objectSpread({}, cart[key] || {}), ids[key]);

        if (cart[key] && cart[key].type === 'battery' && count) {
          cart[key].count += count;
        }

        toAdd.push(cart[key]);
      } else {
        const cartKeys = Object.keys(cart);
        const batteryOwners = [];
        cartKeys.forEach(cartKey => {
          if (cart[cartKey].batteryId === ids[key]) {
            batteryOwners.push(cart[cartKey].batteryId);
            delete cart[cartKey].batteryId;
          }
        });

        if (batteryOwners.length) {
          clearBatteryOwners = {
            ids: batteryOwners,
            id: ids[key]
          };
        }

        delete cart[ids[key]];
        toRemove.push(ids[key]);
      }
    });

    if (authorized) {
      if (toRemove.length) {
        yield Object(external_redux_saga_effects_["call"])(saga_removeFromWishlistRequest, {
          toRemove,
          clearBatteryOwners
        });
      } else {
        yield Object(external_redux_saga_effects_["call"])(saga_setToWishlistRequest, toAdd);
      }
    }

    Object(utils["m" /* setLocalStorageObj */])('cart', cart);
    yield Object(external_redux_saga_effects_["put"])(Object(cart_action["e" /* changeCartSuccess */])({
      data: cart,
      ids
    }));

    if (redirect === true) {
      yield Object(external_redux_saga_effects_["put"])(Object(change_page_action["a" /* changePage */])({
        route: '/cart'
      }));
      yield Object(external_redux_saga_effects_["delay"])(200);
      yield Object(external_redux_saga_effects_["put"])(Object(change_page_action["b" /* resetChangePage */])());
    }
  } catch (error) {
    yield Object(external_redux_saga_effects_["put"])(Object(cart_action["d" /* changeCartError */])({
      ids
    }));
  }
}

function* watchChangeCart() {
  yield Object(external_redux_saga_effects_["takeEvery"])(cart_action["c" /* changeCart */], workChangeCart);
}

function* sendOrderRequest(data, auth) {
  return yield Object(external_redux_saga_effects_["call"])(Axios["a" /* default */].request, {
    method: 'post',
    url: auth ? '/api/user/orders' : '/api/product/createOrder',
    data
  });
}

const isoLangs = {
  ARM: 'hy',
  RU: 'ru',
  ENG: 'en'
};

function* workSendOrder({
  payload: {
    values,
    messageTexts,
    promo
  }
}) {
  const {
    errorText,
    successText
  } = messageTexts;
  const cart = yield Object(external_redux_saga_effects_["select"])(cart_reducer["c" /* selectCart */]);
  const auth = yield Object(external_redux_saga_effects_["select"])(reducer["b" /* selectAuthorized */]);
  const lang = yield Object(external_redux_saga_effects_["select"])(reducer["c" /* selectLang */]);
  const data = {
    productIds: Object.keys(cart).map(item => cart[item]),
    deliveryAddress: {
      street: values.street,
      building: values.house,
      entry: values.entry
    },
    firstName: values.firstName,
    lastName: values.lastName,
    paymentType: constants["b" /* paymentTypes */][values.method],
    deliveryTime: values.deliveryPeriodString,
    phone: values.phone,
    email: values.email,
    promoCode: promo,
    isoLang: isoLangs[lang]
  };

  try {
    const res = yield Object(external_redux_saga_effects_["call"])(sendOrderRequest, data, auth);

    if (constants["b" /* paymentTypes */][values.method] === constants["b" /* paymentTypes */][2] || constants["b" /* paymentTypes */][values.method] === constants["b" /* paymentTypes */][3]) {
      Object(utils["l" /* removeLocalStorageObj */])('cart');
      yield Object(external_redux_saga_effects_["put"])(Object(cart_action["j" /* sendOrderSuccess */])());
      message_default.a.success(successText);
      yield Object(external_redux_saga_effects_["put"])(Object(change_page_action["a" /* changePage */])({
        route: '/'
      }));
      yield Object(external_redux_saga_effects_["delay"])(200);
      yield Object(external_redux_saga_effects_["put"])(Object(change_page_action["b" /* resetChangePage */])());
    } else {
      const {
        data: {
          response: {
            formUrl
          }
        }
      } = res;
      window.location.href = formUrl;
    }
  } catch (e) {
    message_default.a.error(errorText);
    yield Object(external_redux_saga_effects_["put"])(Object(cart_action["i" /* sendOrderError */])());
  }
}

function* watchSendOrder() {
  yield Object(external_redux_saga_effects_["takeEvery"])(cart_action["h" /* sendOrder */], workSendOrder);
}

/* harmony default export */ var cart_saga = (function* () {
  yield Object(external_redux_saga_effects_["all"])([watchChangeCart(), watchPopulateCart(), watchSendOrder()]);
});
// EXTERNAL MODULE: ./store/single-data/action.js
var single_data_action = __webpack_require__("JW+k");

// CONCATENATED MODULE: ./store/single-data/saga.js
function single_data_saga_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function single_data_saga_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { single_data_saga_ownKeys(Object(source), true).forEach(function (key) { single_data_saga_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { single_data_saga_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function single_data_saga_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






async function getPaymentDeliveryRequest() {
  try {
    const {
      data: {
        result
      }
    } = await Axios["a" /* default */].request({
      method: 'get',
      url: '/api/user/deliveryWeekTimeNew'
    }); // const { data: { result: { week: days, time } } } = await Axios.request({ method: 'get', url: '/api/user/deliveryWeekTime' });
    //
    //
    //   const res = {
    //     time: time.filter((day) => day).map((tameStr) => {
    //       const [hour, min] = tameStr.split(':');
    //       const start = new Date(new Date().setHours(hour, min));
    //       const end = new Date(new Date().setHours(+hour === 24 ? 1 : +hour + 1, min));
    //       return {
    //         start,
    //         end,
    //       };
    //     }),
    //     days,
    //   };

    return result;
  } catch (e) {
    return null;
  }
}

async function getPromoCode(promoCode) {
  const {
    data: {
      result
    }
  } = await Object(Axios["a" /* default */])({
    method: 'get',
    url: `/api/user/promoCode/${promoCode}`
  });
  return result;
}

async function getUsages(data) {
  const response = await Object(Axios["a" /* default */])({
    method: 'post',
    url: '/api/product/usage',
    data: {
      lang: data.lang
    }
  });
  return response.data.result;
}

async function getRequest(data) {
  let res;

  switch (data.name) {
    case 'paymentDelivery':
      res = await getPaymentDeliveryRequest();
      return res;

    case 'promoCode':
      res = await getPromoCode(data.promoCode);
      return res;

    case 'usage':
      res = await getUsages(data);
      return res;

    default:
      return null;
  }
}

function* workGetSingleData({
  payload: {
    data
  }
}) {
  try {
    const lang = yield Object(external_redux_saga_effects_["select"])(reducer["c" /* selectLang */]);
    const result = yield Object(external_redux_saga_effects_["call"])(getRequest, single_data_saga_objectSpread(single_data_saga_objectSpread({}, data), {}, {
      lang
    }));
    yield Object(external_redux_saga_effects_["put"])(Object(single_data_action["c" /* getSingleDataSuccess */])({
      data: result,
      name: data.name
    }));
  } catch (error) {
    yield Object(external_redux_saga_effects_["put"])(Object(single_data_action["b" /* getSingleDataError */])({
      name: data.name
    }));
  } finally {
    yield Object(external_redux_saga_effects_["put"])(Object(single_data_action["d" /* resetSingleData */])({
      name: data.name
    }));
  }
}

function* watchGetSingleData() {
  yield Object(external_redux_saga_effects_["takeEvery"])(single_data_action["a" /* getSingleData */], workGetSingleData);
}

/* harmony default export */ var single_data_saga = (function* () {
  yield Object(external_redux_saga_effects_["all"])([watchGetSingleData()]);
});
// EXTERNAL MODULE: ./store/viewed-products/action.js
var viewed_products_action = __webpack_require__("7EUu");

// CONCATENATED MODULE: ./store/viewed-products/saga.js






const getProductsByIds = async ({
  lang,
  ids
}) => {
  const {
    data: {
      result
    }
  } = await Axios["a" /* default */].request({
    url: '/api/product/byIds',
    data: {
      lang,
      ids
    },
    method: 'post'
  });
  const newIds = ids.filter(id => result.find(({
    id: prodId
  }) => prodId === id));
  const r = [];
  result.forEach(a => {
    r[newIds.indexOf(a.id)] = a;
  });
  return r.reverse();
};

function* workGetViewedProducts(action) {
  const {
    payload: {
      limit
    }
  } = action;

  try {
    let viewedProductIds = Object(utils["d" /* getLocalStorageObj */])('viewed') || [];

    if (!limit && viewedProductIds.length > 6) {
      viewedProductIds = viewedProductIds.splice(viewedProductIds.length - 6, 6);
    } else if (limit && viewedProductIds.length > limit) {
      viewedProductIds = viewedProductIds.splice(viewedProductIds.length - limit, limit);
    }

    const lang = yield Object(external_redux_saga_effects_["select"])(reducer["c" /* selectLang */]);
    const res = yield Object(external_redux_saga_effects_["call"])(getProductsByIds, {
      ids: viewedProductIds,
      lang
    });
    yield Object(external_redux_saga_effects_["put"])(Object(viewed_products_action["c" /* getViewedProductsSuccess */])({
      data: res
    }));
  } catch (error) {
    yield Object(external_redux_saga_effects_["put"])(Object(viewed_products_action["b" /* getViewedProductsError */])());
  }
}

function* watchGetViewedProducts() {
  yield Object(external_redux_saga_effects_["takeEvery"])(viewed_products_action["a" /* getViewedProducts */], workGetViewedProducts);
}

function* workSetViewedProducts({
  payload: {
    id
  }
}) {
  const authorizedUser = yield Object(external_redux_saga_effects_["select"])(reducer["b" /* selectAuthorized */]);

  try {
    if (authorizedUser) {// send api to watched products
    }

    const lastViewed = Object(utils["d" /* getLocalStorageObj */])('viewed') || [];

    if (lastViewed.indexOf(id) === -1) {
      lastViewed.push(id);
      Object(utils["m" /* setLocalStorageObj */])('viewed', lastViewed);
    }
  } catch (error) {
    console.log('error', error);
  }
}

function* watchSetViewedProducts() {
  yield Object(external_redux_saga_effects_["takeEvery"])(viewed_products_action["d" /* setViewedProducts */], workSetViewedProducts);
}

/* harmony default export */ var viewed_products_saga = (function* () {
  yield Object(external_redux_saga_effects_["all"])([watchGetViewedProducts(), watchSetViewedProducts()]);
});
// EXTERNAL MODULE: ./store/main-slides/actions.js
var actions = __webpack_require__("Gwua");

// CONCATENATED MODULE: ./store/main-slides/saga.js




const getSlidesRequest = () => Axios["a" /* default */].get('/api/product/mainSlider');

function* workGetSlides() {
  try {
    const {
      data: {
        result: {
          rows
        }
      }
    } = yield Object(external_redux_saga_effects_["call"])(getSlidesRequest);
    const data = rows.sort(() => Math.random() - 0.5);
    yield Object(external_redux_saga_effects_["put"])(Object(actions["c" /* getSlidesSuccess */])({
      data
    }));
  } catch (e) {
    yield Object(external_redux_saga_effects_["put"])(Object(actions["b" /* getSlidesError */])());
  }
}

function* watchGetSlides() {
  yield Object(external_redux_saga_effects_["takeEvery"])(actions["a" /* getSlides */], workGetSlides);
}

/* harmony default export */ var main_slides_saga = (function* () {
  yield Object(external_redux_saga_effects_["all"])([watchGetSlides()]);
});
// EXTERNAL MODULE: external "redux-actions"
var external_redux_actions_ = __webpack_require__("wfgH");

// CONCATENATED MODULE: ./store/currant-time/action.js

const {
  getCurrantTime,
  setCurrantTime
} = Object(external_redux_actions_["createActions"])('GET_CURRANT_TIME', 'SET_CURRANT_TIME');
// CONCATENATED MODULE: ./store/currant-time/saga.js




function* workGetCurrantTime() {
  for (let i = 0; i < 3; i++) {
    try {
      const {
        data: {
          datetime
        }
      } = yield Object(external_redux_saga_effects_["call"])(external_axios_default.a.request, {
        url: 'https://worldtimeapi.org/api/timezone/Asia/Yerevan',
        method: 'get'
      });
      const newTime = datetime.split('.')[0];
      yield Object(external_redux_saga_effects_["put"])(setCurrantTime({
        currantTime: new Date(newTime)
      }));
      return true;
    } catch (e) {
      console.log(e);
    }
  }

  return true;
}

function* watchGetCurrantTime() {
  yield Object(external_redux_saga_effects_["takeEvery"])(getCurrantTime, workGetCurrantTime);
}

/* harmony default export */ var currant_time_saga = (function* () {
  yield Object(external_redux_saga_effects_["all"])([watchGetCurrantTime()]);
});
// CONCATENATED MODULE: ./store/mainSaga.js
 // eslint-disable-next-line import/no-cycle

















function* rootSaga() {
  yield Object(effects_["all"])([main_slides_saga(), viewed_products_saga(), watchLogin(), watchRegistration(), watchAPISend(), watchLogout(), watchCatalogFilterChange(), watchCatalogFilterSetValues(), watchCatalogGet(), saga(), watchMenuList(), watchGetUserData(), accompanying_product_saga(), pages_data_saga(), buy_product_saga(), single_data_saga(), wishlist_saga(), search_saga(), cart_saga(), watchSetLang(), currant_time_saga(), watchCatalogMainSearch()]);
}
// CONCATENATED MODULE: ./store/userEventListeners/isVisible/reducer.js
function reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducer_ownKeys(Object(source), true).forEach(function (key) { reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const reducer_initialState = {
  isFilterListOpen: false,
  isCategoryMenuOpen: false,
  isCategorySubMenuOpen: false,
  suggestionVisible: false,
  callbackVisible: false,
  closeAllSideBars: false,
  registrationVisible: false,
  loginVisible: false,
  forgotVisible: false,
  fixedSearchVisible: false,
  filterModalVisible: false
};
/* harmony default export */ var isVisible_reducer = (Object(external_redux_actions_["handleActions"])({
  [userEventListeners_action["c" /* show */]]: (state, {
    payload: {
      name
    }
  }) => reducer_objectSpread(reducer_objectSpread({}, state), {}, {
    [name]: true
  }),
  [userEventListeners_action["a" /* hide */]]: (state, {
    payload: {
      name
    }
  }) => reducer_objectSpread(reducer_objectSpread({}, state), {}, {
    [name]: false
  }),
  [userEventListeners_action["d" /* toggleVisibility */]]: (state, {
    payload: {
      name
    }
  }) => reducer_objectSpread(reducer_objectSpread({}, state), {}, {
    [name]: !state[name]
  }),
  [userEventListeners_action["b" /* hideAll */]]: () => reducer_initialState
}, reducer_initialState));
// CONCATENATED MODULE: ./store/userEventListeners/index.js


/* harmony default export */ var userEventListeners = (Object(external_redux_["combineReducers"])({
  isVisible: isVisible_reducer
}));
// CONCATENATED MODULE: ./store/global-APIS/reducer.js
function global_APIS_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function global_APIS_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { global_APIS_reducer_ownKeys(Object(source), true).forEach(function (key) { global_APIS_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { global_APIS_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function global_APIS_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const global_APIS_reducer_initialState = {
  status: null,
  data: null,
  isVisible: false,
  loading: false,
  responseText: '',
  hasError: false,
  success: null
};
/* harmony default export */ var global_APIS_reducer = (Object(external_redux_actions_["handleActions"])({
  [global_APIS_action["c" /* APILoading */]]: state => global_APIS_reducer_objectSpread(global_APIS_reducer_objectSpread({}, state), {}, {
    loading: true
  }),
  [global_APIS_action["b" /* APIError */]]: (state, {
    payload: {
      responseText,
      status
    }
  }) => global_APIS_reducer_objectSpread(global_APIS_reducer_objectSpread({}, state), {}, {
    status,
    isVisible: true,
    loading: false,
    responseText,
    hasError: true
  }),
  [global_APIS_action["e" /* APISuccess */]]: (state, {
    payload: {
      responseText,
      status
    }
  }) => global_APIS_reducer_objectSpread(global_APIS_reducer_objectSpread({}, state), {}, {
    loading: false,
    responseText,
    status,
    isVisible: true,
    hasError: false,
    success: true
  }),
  [global_APIS_action["a" /* APIClear */]]: () => global_APIS_reducer_initialState
}, global_APIS_reducer_initialState));
// CONCATENATED MODULE: ./store/catalog/reducer.js
function catalog_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function catalog_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { catalog_reducer_ownKeys(Object(source), true).forEach(function (key) { catalog_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { catalog_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function catalog_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const catalog_reducer_initialState = {
  products: [],
  page: 1,
  pagesCount: 0,
  loading: false,
  error: false
};
/* harmony default export */ var catalog_reducer = (Object(external_redux_actions_["handleActions"])({
  [catalog_action["a" /* catalogGet */]]: state => catalog_reducer_objectSpread(catalog_reducer_objectSpread({}, state), {}, {
    loading: true,
    error: false
  }),
  [catalog_action["c" /* catalogGetSuccess */]]: (state, {
    payload: {
      products,
      pagesCount,
      page
    }
  }) => catalog_reducer_objectSpread(catalog_reducer_objectSpread({}, state), {}, {
    products,
    pagesCount,
    page: page || 1,
    loading: false,
    error: false
  }),
  [catalog_action["b" /* catalogGetError */]]: state => catalog_reducer_objectSpread(catalog_reducer_objectSpread({}, state), {}, {
    loading: false,
    error: true
  }),
  [catalog_action["d" /* catalogSetPage */]]: (state, {
    payload: {
      page
    }
  }) => catalog_reducer_objectSpread(catalog_reducer_objectSpread({}, state), {}, {
    page
  })
}, catalog_reducer_initialState));
// EXTERNAL MODULE: ./store/menu-list/reducer.js
var menu_list_reducer = __webpack_require__("88jE");

// CONCATENATED MODULE: ./store/data-by-pagination/reducer.js
function data_by_pagination_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function data_by_pagination_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { data_by_pagination_reducer_ownKeys(Object(source), true).forEach(function (key) { data_by_pagination_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { data_by_pagination_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function data_by_pagination_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const data_by_pagination_reducer_initialState = {
  buyProductList: {
    loading: false,
    error: false,
    data: [],
    page: 1,
    pages: 1
  }
};
/* harmony default export */ var data_by_pagination_reducer = (Object(external_redux_actions_["handleActions"])({
  [data_by_pagination_action["a" /* getDataListByPagination */]]: (state, {
    payload: {
      name
    }
  }) => data_by_pagination_reducer_objectSpread(data_by_pagination_reducer_objectSpread({}, state), {}, {
    [name]: data_by_pagination_reducer_objectSpread(data_by_pagination_reducer_objectSpread({}, state[name]), {}, {
      error: false,
      loading: true
    })
  }),
  [data_by_pagination_action["d" /* getDataListByPaginationSuccess */]]: (state, {
    payload: {
      name,
      data,
      page,
      pages
    }
  }) => data_by_pagination_reducer_objectSpread(data_by_pagination_reducer_objectSpread({}, state), {}, {
    [name]: data_by_pagination_reducer_objectSpread(data_by_pagination_reducer_objectSpread({}, state[name]), {}, {
      error: false,
      loading: false,
      data,
      page,
      pages: pages || 0
    })
  }),
  [data_by_pagination_action["b" /* getDataListByPaginationError */]]: (state, {
    payload: {
      name
    }
  }) => data_by_pagination_reducer_objectSpread(data_by_pagination_reducer_objectSpread({}, state), {}, {
    [name]: data_by_pagination_reducer_objectSpread(data_by_pagination_reducer_objectSpread({}, state[name]), {}, {
      error: true,
      loading: false
    })
  }),
  [data_by_pagination_action["c" /* getDataListByPaginationReset */]]: (state, {
    payload: {
      name
    }
  }) => data_by_pagination_reducer_objectSpread(data_by_pagination_reducer_objectSpread({}, state), {}, {
    [name]: data_by_pagination_reducer_objectSpread({}, data_by_pagination_reducer_initialState[name])
  })
}, data_by_pagination_reducer_initialState));
// EXTERNAL MODULE: ./store/global-Information-Router/action.js
var global_Information_Router_action = __webpack_require__("oWHS");

// CONCATENATED MODULE: ./store/global-Information-Router/reducer.js
function global_Information_Router_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function global_Information_Router_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { global_Information_Router_reducer_ownKeys(Object(source), true).forEach(function (key) { global_Information_Router_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { global_Information_Router_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function global_Information_Router_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const global_Information_Router_reducer_initialState = {};
/* harmony default export */ var global_Information_Router_reducer = (Object(external_redux_actions_["handleActions"])({
  [global_Information_Router_action["a" /* changeGlobalInformationRouter */]]: (state, {
    payload
  }) => global_Information_Router_reducer_objectSpread(global_Information_Router_reducer_objectSpread({}, state), payload),
  [global_Information_Router_action["b" /* resetGlobalInformationRouter */]]: () => global_Information_Router_reducer_initialState
}, global_Information_Router_reducer_initialState));
// EXTERNAL MODULE: ./store/accompanying-product/reducer.js
var accompanying_product_reducer = __webpack_require__("1i0R");

// CONCATENATED MODULE: ./store/buy-product/reducer.js
function buy_product_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function buy_product_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { buy_product_reducer_ownKeys(Object(source), true).forEach(function (key) { buy_product_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { buy_product_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function buy_product_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const buy_product_reducer_initialState = {
  loading: false,
  data: null,
  error: false
};
/* harmony default export */ var buy_product_reducer = (Object(external_redux_actions_["handleActions"])({
  [buy_product_action["a" /* getProductToBuy */]]: state => buy_product_reducer_objectSpread(buy_product_reducer_objectSpread({}, state), {}, {
    loading: true,
    error: false
  }),
  [buy_product_action["d" /* getProductToBuySuccess */]]: (state, {
    payload: {
      data
    }
  }) => buy_product_reducer_objectSpread(buy_product_reducer_objectSpread({}, state), {}, {
    loading: false,
    data
  }),
  [buy_product_action["b" /* getProductToBuyError */]]: state => buy_product_reducer_objectSpread(buy_product_reducer_objectSpread({}, state), {}, {
    loading: false,
    error: true
  }),
  [buy_product_action["c" /* getProductToBuyReset */]]: () => buy_product_reducer_objectSpread({}, buy_product_reducer_initialState)
}, buy_product_reducer_initialState));
// EXTERNAL MODULE: ./store/search/reducer.js
var search_reducer = __webpack_require__("rTwP");

// EXTERNAL MODULE: ./store/single-data/reducer.js
var single_data_reducer = __webpack_require__("ZhIC");

// EXTERNAL MODULE: ./store/viewed-products/reducer.js
var viewed_products_reducer = __webpack_require__("wmiC");

// CONCATENATED MODULE: ./store/main-slides/reducer.js
function main_slides_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function main_slides_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { main_slides_reducer_ownKeys(Object(source), true).forEach(function (key) { main_slides_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { main_slides_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function main_slides_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const main_slides_reducer_initialState = {
  data: [],
  error: false,
  loading: true
};
/* harmony default export */ var main_slides_reducer = (Object(external_redux_actions_["handleActions"])({
  [actions["a" /* getSlides */]]: state => main_slides_reducer_objectSpread(main_slides_reducer_objectSpread({}, state), {}, {
    loading: true,
    error: false
  }),
  [actions["c" /* getSlidesSuccess */]]: (state, {
    payload: {
      data
    }
  }) => ({
    data,
    loading: false,
    error: false
  }),
  [actions["b" /* getSlidesError */]]: state => main_slides_reducer_objectSpread(main_slides_reducer_objectSpread({}, state), {}, {
    loading: false,
    error: true
  })
}, main_slides_reducer_initialState));
// CONCATENATED MODULE: ./store/currant-time/reducer.js
function currant_time_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function currant_time_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { currant_time_reducer_ownKeys(Object(source), true).forEach(function (key) { currant_time_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { currant_time_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function currant_time_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const currant_time_reducer_initialState = {
  currantTime: null
};
/* harmony default export */ var currant_time_reducer = (Object(external_redux_actions_["handleActions"])({
  [setCurrantTime]: (state, {
    payload: {
      currantTime
    }
  }) => currant_time_reducer_objectSpread(currant_time_reducer_objectSpread({}, state), {}, {
    currantTime
  })
}, currant_time_reducer_initialState));
const selectCurrantDate = ({
  currantTime: {
    currantTime
  }
}) => currantTime;
// EXTERNAL MODULE: ./store/change-page/reducer.js
var change_page_reducer = __webpack_require__("HNRd");

// CONCATENATED MODULE: ./store/mainReducer.js




















/* harmony default export */ var mainReducer = (Object(external_redux_["combineReducers"])({
  user: reducer["a" /* default */],
  viewedProducts: viewed_products_reducer["a" /* default */],
  userEventListeners: userEventListeners,
  globalAPIS: global_APIS_reducer,
  pageData: pages_data_reducer["a" /* default */],
  catalogFilter: catalog_filter_reducer["b" /* default */],
  catalog: catalog_reducer,
  cart: cart_reducer["a" /* default */],
  dataByPagination: data_by_pagination_reducer,
  menuList: menu_list_reducer["a" /* default */],
  globalInformationRouter: global_Information_Router_reducer,
  accompanying: accompanying_product_reducer["a" /* default */],
  wishlist: wishlist_reducer["a" /* default */],
  buyProduct: buy_product_reducer,
  search: search_reducer["a" /* default */],
  singleData: single_data_reducer["a" /* default */],
  mainSlides: main_slides_reducer,
  currantTime: currant_time_reducer,
  redirectRoute: change_page_reducer["a" /* default */]
}));
// CONCATENATED MODULE: ./store/configuredStore.js
/* eslint-disable no-mixed-operators */




const window_ = false ? undefined : {};
let composeEnhancers = external_redux_["compose"];

if (window_ !== undefined && window_.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window_.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

/* harmony default export */ var configuredStore = (initialState => {
  const sagaMiddleware = external_redux_saga_default()();
  const store = Object(external_redux_["createStore"])(mainReducer, initialState, composeEnhancers(Object(external_redux_["applyMiddleware"])(sagaMiddleware)));
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
});
// EXTERNAL MODULE: ./node_modules/font-awesome/css/font-awesome.min.css
var font_awesome_min = __webpack_require__("H1Ta");

// EXTERNAL MODULE: ./node_modules/swiper/css/swiper.css
var swiper = __webpack_require__("p6Nx");

// EXTERNAL MODULE: ./index.less
var index = __webpack_require__("afj4");

// CONCATENATED MODULE: ./pages/_app.js
var __jsx = external_react_default.a.createElement;

/* eslint-disable react/style-prop-object */

/* eslint-disable jsx-a11y/iframe-has-title */












const AppLayout = dynamic_default()(() => __webpack_require__.e(/* import() */ 19).then(__webpack_require__.bind(null, "SE09")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("SE09")],
    modules: ['../App']
  }
});

class _app_MyApp extends app_default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {
      pageProps
    };
  }

  componentDidMount() {
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s);
      const dl = l != 'dataLayer' ? `&l=${l}` : '';
      j.async = true;
      j.src = `https://www.googletagmanager.com/gtm.js?id=${i}${dl}`;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-N6GSQL3');

    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v10.0'
      });
    };

    (function (d, s, id) {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');

    let lang = localStorage.getItem('lang');

    if (lang !== 'ARM' && lang !== 'RU' && lang !== 'ENG') {
      lang = 'ARM';
      localStorage.setItem('lang', lang);
    }

    this.props.store.dispatch(Object(user_action["m" /* setLang */])({
      lang
    }));
    this.props.store.dispatch(Object(user_action["c" /* getUserData */])());
  }

  render() {
    const {
      Component,
      pageProps,
      store,
      router: {
        pathname
      }
    } = this.props;
    return __jsx(external_react_default.a.Fragment, null, __jsx(head_default.a, null, __jsx("meta", {
      name: "yandex-verification",
      content: "2da434c5e87e666a"
    }), __jsx("link", {
      rel: "shortcut icon",
      href: "/Favicon.png"
    })), pathname === '/_error' ? __jsx(Component, null) : __jsx(external_react_redux_["Provider"], {
      store: store,
      key: "provider"
    }, __jsx(AppLayout, {
      pageProps: pageProps,
      Component: Component,
      key: "appLayout"
    })), __jsx("noscript", null, __jsx("iframe", {
      src: "https://www.googletagmanager.com/ns.html?id=GTM-N6GSQL3",
      height: "0",
      width: "0",
      style: {
        display: 'none',
        visibility: 'hidden'
      }
    })), __jsx("div", {
      id: "fb-root"
    }), __jsx("div", {
      className: "fb-customerchat",
      attribution: "page_inbox",
      page_id: "291517670961152"
    }));
  }

} // eslint-disable-next-line import/no-mutable-exports


let _app_store;
/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()((initialState, props) => {
  _app_store = configuredStore(initialState, props);
  return _app_store;
})(external_next_redux_saga_default()(_app_MyApp)));


/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "1i0R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectAccompanyingProducts; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("yHyA");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  loading: false,
  error: false,
  data: []
};
/* harmony default export */ __webpack_exports__["a"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["handleActions"])({
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* getAccompanyingProduct */ "a"]]: () => _objectSpread(_objectSpread({}, initialState), {}, {
    loading: true,
    error: false,
    data: []
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* getAccompanyingProductSuccess */ "c"]]: (state, {
    payload: {
      data
    }
  }) => _objectSpread(_objectSpread({}, state), {}, {
    error: false,
    loading: false,
    data
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* getAccompanyingProductError */ "b"]]: () => _objectSpread(_objectSpread({}, initialState), {}, {
    error: true
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* resetAccompanyingProductReducer */ "d"]]: () => initialState
}, initialState));
const selectAccompanyingProducts = ({
  accompanying
}) => accompanying.data;

/***/ }),

/***/ "32ec":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteCookie; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function setCookie(name, value, options = {}) {
  options = _objectSpread({
    path: '/'
  }, options);

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  for (const optionKey in options) {
    updatedCookie += `; ${optionKey}`;
    const optionValue = options[optionKey];

    if (optionValue !== true) {
      updatedCookie += `=${optionValue}`;
    }
  }

  document.cookie = updatedCookie;
}
function getCookie(name) {
  const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
function deleteCookie(name) {
  setCookie(name, '', {
    'max-age': -1
  });
}

/***/ }),

/***/ "3PsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "7EUu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setViewedProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getViewedProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getViewedProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getViewedProductsError; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);

const {
  setViewedProducts,
  getViewedProducts,
  getViewedProductsSuccess,
  getViewedProductsError
} = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createActions"])('SET_VIEWED_PRODUCTS', 'GET_VIEWED_PRODUCTS', 'GET_VIEWED_PRODUCTS_SUCCESS', 'GET_VIEWED_PRODUCTS_ERROR');

/***/ }),

/***/ "7YAK":
/***/ (function(module, exports) {

module.exports = require("antd/lib/slider");

/***/ }),

/***/ "81+r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getInitialValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return paymentTypes; });
/* unused harmony export MIN_TOTAL */
const getInitialValues = user => {
  var _user$deliveryAddress, _user$deliveryAddress2, _user$deliveryAddress3;

  return {
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    email: user.email,
    street: user === null || user === void 0 ? void 0 : (_user$deliveryAddress = user.deliveryAddress) === null || _user$deliveryAddress === void 0 ? void 0 : _user$deliveryAddress.street,
    house: user === null || user === void 0 ? void 0 : (_user$deliveryAddress2 = user.deliveryAddress) === null || _user$deliveryAddress2 === void 0 ? void 0 : _user$deliveryAddress2.building,
    entry: user === null || user === void 0 ? void 0 : (_user$deliveryAddress3 = user.deliveryAddress) === null || _user$deliveryAddress3 === void 0 ? void 0 : _user$deliveryAddress3.entry,
    deliveryPeriod: '',
    deliveryPeriodString: '',
    method: 1
  };
};
const paymentTypes = {
  1: 'non-cash',
  2: 'cash',
  3: 'bonus'
};
const MIN_TOTAL = 4000;

/***/ }),

/***/ "88jE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export selectMenuListName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectMenuList; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ynhf");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  data: {
    type: [],
    age: [],
    brand: [],
    meaning: []
  },
  loading: false,
  success: false,
  error: false,
  name: '',
  bestseller: null
};
/* harmony default export */ __webpack_exports__["a"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["handleActions"])({
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* getMenuList */ "a"]]: () => _objectSpread(_objectSpread({}, initialState), {}, {
    loading: true
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* getMenuListSuccess */ "d"]]: (state, {
    payload: {
      data,
      name,
      bestseller
    }
  }) => _objectSpread(_objectSpread({}, initialState), {}, {
    loading: false,
    success: true,
    data,
    name,
    bestseller
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* getMenuListError */ "b"]]: () => _objectSpread(_objectSpread({}, initialState), {}, {
    loading: false,
    success: true
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* getMenuListReset */ "c"]]: () => _objectSpread({}, initialState)
}, initialState));
const selectMenuListName = ({
  menuList
}) => menuList.name;
const selectMenuList = ({
  menuList
}) => menuList;

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "8MCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectCurrentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return selectPageId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return selectHelperData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return selectPageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return selectFullPageData; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("I4XR");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  loading: false,
  error: false,
  success: false,
  data: null,
  page: null,
  id: null,
  helperData: null
};
/* harmony default export */ __webpack_exports__["a"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["handleActions"])({
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* getPageData */ "a"]]: state => ({
    helperData: state.helperData,
    id: state.id,
    page: state.page,
    loading: true,
    error: false,
    success: false,
    data: null
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* getPageDataSuccess */ "c"]]: (state, {
    payload: {
      data,
      page,
      id,
      helperData
    }
  }) => ({
    loading: false,
    error: false,
    success: true,
    data,
    page,
    id: id || null,
    helperData
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* getPageDataError */ "b"]]: () => _objectSpread(_objectSpread({}, initialState), {}, {
    error: true
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* resetPageData */ "d"]]: () => _objectSpread({}, initialState)
}, initialState));
const selectCurrentPage = ({
  pageData
}) => pageData.page;
const selectPageId = ({
  pageData
}) => pageData.id;
const selectHelperData = ({
  pageData
}) => pageData.helperData;
const selectPageData = ({
  pageData
}) => pageData.data;
const selectFullPageData = ({
  pageData
}) => pageData;

/***/ }),

/***/ "AVz8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return catalogFilterChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return catalogFilterChangeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return catalogFilterChangeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return resetCatalogFilterReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return catalogFilterSetValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return catalogSetFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return resetFilterView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return catalogMainSearch; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);

const {
  catalogFilterChange,
  catalogFilterChangeSuccess,
  catalogFilterChangeError,
  resetCatalogFilterReducer,
  catalogFilterSetValues,
  catalogSetFilters,
  resetFilterView,
  catalogMainSearch
} = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createActions"])('CATALOG_FILTER_CHANGE', 'CATALOG_FILTER_CHANGE_SUCCESS', 'CATALOG_FILTER_CHANGE_ERROR', 'RESET_CATALOG_FILTER_REDUCER', 'CATALOG_FILTER_SET_VALUES', 'CATALOG_SET_FILTERS', 'RESET_FILTER_VIEW', 'CATALOG_MAIN_SEARCH');

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "BWRB":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "GqX/":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input-number");

/***/ }),

/***/ "Gwua":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSlides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSlidesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSlidesError; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);

const {
  getSlides,
  getSlidesSuccess,
  getSlidesError
} = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createActions"])('GET_SLIDES', 'GET_SLIDES_SUCCESS', 'GET_SLIDES_ERROR');

/***/ }),

/***/ "H1Ta":
/***/ (function(module, exports) {



/***/ }),

/***/ "HHh0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDataListByPagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getDataListByPaginationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDataListByPaginationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getDataListByPaginationReset; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);

const {
  getDataListByPagination,
  getDataListByPaginationSuccess,
  getDataListByPaginationError,
  getDataListByPaginationReset
} = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createActions"])('GET_DATA_LIST_BY_PAGINATION', 'GET_DATA_LIST_BY_PAGINATION_SUCCESS', 'GET_DATA_LIST_BY_PAGINATION_ERROR', 'GET_DATA_LIST_BY_PAGINATION_RESET');

/***/ }),

/***/ "HNRd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectRedirectRoute; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("t4EC");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  route: ''
};
/* harmony default export */ __webpack_exports__["a"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["handleActions"])({
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* changePage */ "a"]]: (state, {
    payload: {
      route
    }
  }) => _objectSpread(_objectSpread({}, state), {}, {
    route
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* resetChangePage */ "b"]]: state => _objectSpread(_objectSpread({}, state), {}, {
    route: ''
  })
}, initialState));
const selectRedirectRoute = ({
  redirectRoute
}) => {
  return redirectRoute;
};

/***/ }),

/***/ "HgHO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ "I4XR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPageDataSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPageDataError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resetPageData; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);

const {
  getPageData,
  getPageDataSuccess,
  getPageDataError,
  resetPageData
} = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createActions"])('GET_PAGE_DATA', 'GET_PAGE_DATA_SUCCESS', 'GET_PAGE_DATA_ERROR', 'RESET_PAGE_DATA');

/***/ }),

/***/ "JCEF":
/***/ (function(module, exports) {

module.exports = require("antd/lib/checkbox");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "JW+k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSingleData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSingleDataError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSingleDataSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resetSingleData; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);

const {
  getSingleData,
  getSingleDataError,
  getSingleDataSuccess,
  resetSingleData
} = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createActions"])('GET_SINGLE_DATA', 'GET_SINGLE_DATA_ERROR', 'GET_SINGLE_DATA_SUCCESS', 'RESET_SINGLE_DATA');

/***/ }),

/***/ "KBGK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ getTotalCount; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ selectCart; });

// UNUSED EXPORTS: getTotalPrice

// EXTERNAL MODULE: external "redux-actions"
var external_redux_actions_ = __webpack_require__("wfgH");

// EXTERNAL MODULE: ./store/cart/action.js
var action = __webpack_require__("0wdU");

// CONCATENATED MODULE: ./store/cart/handleFunctions.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// eslint-disable-next-line import/prefer-default-export
const addLoadingItems = (state, ids, loadingStatus = true) => {
  const {
    loading
  } = state;

  const cloneLoading = _objectSpread({}, loading);

  const idsKeys = Object.keys(ids);
  idsKeys.forEach(key => {
    cloneLoading[key] = loadingStatus;
  });
  return cloneLoading;
};
// CONCATENATED MODULE: ./store/cart/reducer.js
function reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducer_ownKeys(Object(source), true).forEach(function (key) { reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  loading: {},
  error: false,
  data: {},
  order: {
    loading: false,
    error: false
  },
  cartSetCounter: 0
};
/* harmony default export */ var reducer = __webpack_exports__["a"] = (Object(external_redux_actions_["handleActions"])({
  [action["c" /* changeCart */]]: (state, {
    payload: {
      ids
    }
  }) => reducer_objectSpread(reducer_objectSpread({}, state), {}, {
    loading: addLoadingItems(state, ids),
    error: false
  }),
  [action["e" /* changeCartSuccess */]]: (state, {
    payload: {
      id,
      data
    }
  }) => reducer_objectSpread(reducer_objectSpread({}, state), {}, {
    loading: reducer_objectSpread(reducer_objectSpread({}, state.loading), {}, {
      [id]: false
    }),
    error: false,
    data
  }),
  [action["d" /* changeCartError */]]: (state, {
    payload: {
      ids
    }
  }) => reducer_objectSpread(reducer_objectSpread({}, state), {}, {
    loading: reducer_objectSpread(reducer_objectSpread({}, state.loading), {}, {
      loading: addLoadingItems(state, ids, true)
    }),
    error: true
  }),
  [action["a" /* cartChangeProduct */]]: (state, {
    payload: {
      id,
      changes
    }
  }) => reducer_objectSpread(reducer_objectSpread({}, state), {}, {
    data: reducer_objectSpread(reducer_objectSpread({}, state.data), {}, {
      [id]: reducer_objectSpread(reducer_objectSpread({}, state[id]), changes)
    })
  }),
  [action["b" /* cartSetAll */]]: (state, {
    payload: {
      cart
    }
  }) => reducer_objectSpread(reducer_objectSpread({}, state), {}, {
    data: cart,
    cartSetCounter: state.cartSetCounter + 1
  }),
  [action["g" /* resetCartReducer */]]: state => reducer_objectSpread(reducer_objectSpread({}, initialState), {}, {
    cartSetCounter: state.cartSetCounter
  }),
  [action["h" /* sendOrder */]]: state => reducer_objectSpread(reducer_objectSpread({}, state), {}, {
    order: {
      error: false,
      loading: true
    }
  }),
  [action["j" /* sendOrderSuccess */]]: state => reducer_objectSpread(reducer_objectSpread({}, state), {}, {
    data: {},
    order: {
      error: false,
      loading: false
    }
  }),
  [action["i" /* sendOrderError */]]: state => reducer_objectSpread(reducer_objectSpread({}, state), {}, {
    order: {
      error: true,
      loading: false
    }
  })
}, initialState));
function getTotalPrice(store) {
  const {
    cart: {
      data
    }
  } = store;
  const keys = Object.keys(data);
  let total = 0;
  keys.forEach(key => {
    total += (data[key] && data[key].price || 200) * (data[key] && data[key].count || 1);
  });
  return total;
}
function getTotalCount(store) {
  const {
    cart
  } = store;
  return Object.keys(cart.data).length;
}
const selectCart = ({
  cart
}) => cart.data;

/***/ }),

/***/ "NNXn":
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ "O6kt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return regex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return setLocalStorageObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getLocalStorageObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return removeLocalStorageObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getProductSizeFromObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getBonus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getProductBrand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getProductAge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getProductBattery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addToCartObj; });
/* unused harmony export createObjectArrayFromObject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return C_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getTooltipTexts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getProductBoxSize; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const regex = {
  name: /^\p{L}+$/u,
  string: /\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\"|\"|\;|\:|[0-9]/g,
  // phone: /^[\+]?[0-9\s]*$/im,
  phone: /^[\+]?[(]?[0-9]+$/i,
  email: /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/
};

function setLocalStorageObj(name, obj) {
  localStorage.setItem(name, JSON.stringify(obj));
}

function getLocalStorageObj(name) {
  return JSON.parse(localStorage.getItem(name));
}

function removeLocalStorageObj(name) {
  return localStorage.removeItem(name);
}

const getProductSizeFromObj = size => size && `${size.height ? `${size.height} x` : ''}
 ${size.length ? `${size.length} x` : ''}
 ${size.width ? `${size.width}` : ''}`;

const getProductBoxSize = boxSize => {
  if (!boxSize) return null;
  const {
    width,
    height,
    length
  } = boxSize;
  if (!width && !height && !length) return null;
  return `${height ? `${height} x` : ''} ${length ? `${length} x` : ''} ${width || '-'}`;
};

const getProductBrand = brand => brand && brand[0] && brand[0].name;

const getBonus = (price, percent, count) => Math.ceil(count * (+price * (+percent / 100)));

const getProductAge = (minAge, maxAge, messages) => {
  if (maxAge > 8) maxAge = '8+';
  if (minAge === 8) return `8+ ${messages ? messages['local.years'] : ''}`;
  return `${minAge} - ${maxAge} ${messages ? messages['local.years'] : ''}`;
};

const getProductBattery = accessories => {
  if (accessories && accessories.length) {
    return accessories.find(({
      ProductAccessoriesMap: {
        type: accessoryType
      }
    }) => accessoryType === 'battery');
  }

  return null;
};

const addToCartObj = ({
  product,
  count,
  battery,
  hasBattery
}) => {
  var _battery$ProductAcces, _battery$ProductAcces2, _basket$battery$id;

  let newCount = (battery === null || battery === void 0 ? void 0 : (_battery$ProductAcces = battery.ProductAccessoriesMap) === null || _battery$ProductAcces === void 0 ? void 0 : _battery$ProductAcces.count) * count;
  const maxCount = battery === null || battery === void 0 ? void 0 : battery.xmlCount;
  const batteryNeededCunt = (battery === null || battery === void 0 ? void 0 : (_battery$ProductAcces2 = battery.ProductAccessoriesMap) === null || _battery$ProductAcces2 === void 0 ? void 0 : _battery$ProductAcces2.count) * count;
  const basket = getLocalStorageObj('cart'); // const productIn = basket?.[product.id];

  const batteryInBasketCount = (basket === null || basket === void 0 ? void 0 : (_basket$battery$id = basket[battery === null || battery === void 0 ? void 0 : battery.id]) === null || _basket$battery$id === void 0 ? void 0 : _basket$battery$id.count) || 0;

  if (hasBattery) {
    const plusCount = batteryInBasketCount + batteryNeededCunt;

    if (maxCount < plusCount && plusCount < 10) {
      newCount = maxCount - batteryInBasketCount;
    } else if (plusCount > 10) {
      newCount = 10 - batteryInBasketCount;
    }
  }

  return _objectSpread({
    [product.id]: _objectSpread({
      id: product.id,
      count,
      status: true
    }, hasBattery ? {
      batteryId: battery.id
    } : {})
  }, hasBattery ? {
    [battery.id]: {
      id: battery.id,
      count: newCount,
      status: true,
      type: 'battery'
    }
  } : {});
};

const getTooltipTexts = msg => ({
  bonusText: msg['local.sign_up_for_bonus'],
  promoText: msg['local.follow_us_for_promo']
});

const createObjectArrayFromObject = (object, callback, limit) => {
  const keys = Object.keys(object);
  const {
    length
  } = keys;
  const arr = [];
  const maxItems = length > limit ? limit : length;
  keys.forEach((key, index) => {
    if (index < maxItems) {
      arr.push(callback(object[key]));
    }
  });
  return arr;
};

const C_TOKEN = 'mnktkn';


/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QNhp":
/***/ (function(module, exports) {

module.exports = require("antd/lib/collapse");

/***/ }),

/***/ "QnuM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authorizationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return logoutSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return registration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return resetUserReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return setLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return authorizationLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getUserDataLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getUserDataSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getUserDataError; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);

const {
  login,
  loginSuccess,
  authorizationError,
  logout,
  logoutSuccess,
  registration,
  resetUserReducer,
  setLang,
  authorizationLoading,
  getUserData,
  getUserDataLoading,
  getUserDataSuccess,
  getUserDataError
} = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createActions"])('LOGIN', 'LOGIN_SUCCESS', 'AUTHORIZATION_ERROR', 'RESET_USER_REDUCER', 'LOGOUT', 'LOGOUT_SUCCESS', 'REGISTRATION', 'SET_LANG', 'AUTHORIZATION_LOADING', 'GET_USER_DATA', 'GET_USER_DATA_LOADING', 'GET_USER_DATA_SUCCESS', 'GET_USER_DATA_ERROR');

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "RHPr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return searchProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return searchProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return searchProductError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return searchProductReset; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);

const {
  searchProduct,
  searchProductSuccess,
  searchProductError,
  searchProductReset
} = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createActions"])('SEARCH_PRODUCT', 'SEARCH_PRODUCT_SUCCESS', 'SEARCH_PRODUCT_ERROR', 'SEARCH_PRODUCT_RESET');

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "T/WE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return wishlistGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return wishlistSet; });
/* unused harmony export wishlistSetItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return wishlistItemLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return wishlistItemError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return wishlistChangeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return wishlistChangeItemSuccess; });
/* unused harmony export wishlistChangeItemError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return wishlistPopulate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return wishlistPopulateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return wishlistPopulateError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return wishlistPopulateLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return wishlistProductsReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return wishlistError; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);

const {
  wishlistGet,
  wishlistSet,
  wishlistSetItem,
  wishlistItemLoading,
  wishlistItemError,
  wishlistChangeItem,
  wishlistChangeItemSuccess,
  wishlistChangeItemError,
  wishlistPopulate,
  wishlistPopulateSuccess,
  wishlistPopulateError,
  wishlistPopulateLoading,
  wishlistProductsReset,
  wishlistError
} = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createActions"])('WISHLIST_GET', 'WISHLIST_SET', 'WISHLIST_ERROR', 'WISHLIST_ITEM_LOADING', 'WISHLIST_ITEM_ERROR', 'WISHLIST_CHANGE_ITEM', 'WISHLIST_CHANGE_ITEM_SUCCESS', 'WISHLIST_POPULATE', 'WISHLIST_POPULATE_SUCCESS', 'WISHLIST_POPULATE_ERROR', 'WISHLIST_POPULATE_LOADING', 'WISHLIST_PRODUCTS_RESET');

/***/ }),

/***/ "Uqqx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "VzA1":
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "XztR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectAuthorized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return selectUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return selectLang; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QnuM");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  id: '',
  email: '',
  firstName: '',
  lastName: '',
  phone: '',
  errorText: null,
  lang: 'ARM',
  loading: false,
  authSuccess: false,
  fetchingInitialUserData: true
};
/* harmony default export */ __webpack_exports__["a"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["handleActions"])({
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* loginSuccess */ "h"]]: (state, {
    payload
  }) => _objectSpread(_objectSpread(_objectSpread({}, state), payload), {}, {
    loading: false,
    authSuccess: true
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* authorizationError */ "a"]]: (state, {
    payload: {
      errorText
    }
  }) => _objectSpread(_objectSpread({}, state), {}, {
    errorText,
    loading: false,
    authSuccess: false
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* setLang */ "m"]]: (state, {
    payload: {
      lang
    }
  }) => _objectSpread(_objectSpread({}, state), {}, {
    lang
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* authorizationLoading */ "b"]]: store => _objectSpread(_objectSpread({}, store), {}, {
    loading: true
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* getUserDataLoading */ "e"]]: store => _objectSpread(_objectSpread({}, store), {}, {
    fetchingInitialUserData: true
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* getUserDataSuccess */ "f"]]: (store, {
    payload
  }) => _objectSpread(_objectSpread({}, store), {}, {
    authSuccess: true,
    fetchingInitialUserData: false
  }, payload),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* getUserDataError */ "d"]]: state => _objectSpread(_objectSpread({}, initialState), {}, {
    fetchingInitialUserData: false,
    lang: state.lang
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* resetUserReducer */ "l"]]: () => _objectSpread(_objectSpread({}, initialState), {}, {
    fetchingInitialUserData: false
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* logoutSuccess */ "j"]]: () => _objectSpread(_objectSpread({}, initialState), {}, {
    fetchingInitialUserData: false
  })
}, initialState));
const selectAuthorized = ({
  user
}) => user.authSuccess;
const selectUser = ({
  user
}) => user;
const selectLang = ({
  user: {
    lang
  }
}) => lang;

/***/ }),

/***/ "Yj90":
/***/ (function(module, exports) {

module.exports = require("antd/lib/badge");

/***/ }),

/***/ "Z0di":
/***/ (function(module, exports) {

module.exports = require("@redux-saga/core/effects");

/***/ }),

/***/ "ZhIC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectSingleData; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JW+k");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  paymentDelivery: {
    loading: false,
    error: false,
    data: null
  },
  promoCode: {
    loading: false,
    error: false,
    data: null
  },
  usage: {
    loading: false,
    error: false,
    data: null
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["handleActions"])({
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* getSingleData */ "a"]]: (state, {
    payload: {
      data: {
        name
      }
    }
  }) => _objectSpread(_objectSpread({}, state), {}, {
    [name]: {
      loading: true
    }
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* getSingleDataSuccess */ "c"]]: (state, {
    payload: {
      data,
      name
    }
  }) => _objectSpread(_objectSpread({}, state), {}, {
    [name]: {
      loading: false,
      data
    }
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* getSingleDataError */ "b"]]: (state, {
    payload: {
      name
    }
  }) => _objectSpread(_objectSpread({}, state), {}, {
    [name]: {
      loading: false,
      error: true
    }
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* resetSingleData */ "d"]]: (state, {
    payload: {
      name
    }
  }) => name ? _objectSpread(_objectSpread({}, state), {}, {
    [name]: {
      loading: false,
      error: false,
      data: null
    }
  }) : _objectSpread({}, initialState)
}, initialState));
const selectSingleData = ({
  singleData
}) => singleData;

/***/ }),

/***/ "a5Fm":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "afj4":
/***/ (function(module, exports) {



/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "foLw":
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ "fuBQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const keys = {
  isDevelopment: false,
  HOST: "https://admin.mankan.am",
  LOCAL_STORAGE_HEADER: 'authorization',
  LOCAL_STORAGE_USER_INFO: 'user_info',
  IMAGE_POSTFIX: `${"https://admin.mankan.am"}/products/`,
  DEFAULT_PRICE: [1, 300000]
};
/* harmony default export */ __webpack_exports__["a"] = (keys);

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "jeSm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clearFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getIsUserFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return selectCatalogFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCatalogFilterByName; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fuBQ");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("AVz8");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  classification: [],
  price: [_constants_keys__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].DEFAULT_PRICE[0], _constants_keys__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].DEFAULT_PRICE[1]],
  gender: [],
  age: [],
  type: [],
  meaning: [],
  brand: [],
  isUserFilter: false,
  loading: false,
  filters: {
    brand: [],
    productSex: [],
    extraFilter: [],
    productAge: [],
    productType: [],
    productUsage: [],
    searchWord: ''
  }
};
/* harmony default export */ __webpack_exports__["b"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["handleActions"])({
  [_action__WEBPACK_IMPORTED_MODULE_2__[/* catalogFilterChangeSuccess */ "c"]]: (state, {
    payload: {
      name,
      value
    }
  }) => _objectSpread(_objectSpread({}, state), {}, {
    [name]: value,
    loading: false
  }),
  [_action__WEBPACK_IMPORTED_MODULE_2__[/* catalogFilterSetValues */ "d"]]: (state, {
    payload
  }) => _objectSpread(_objectSpread(_objectSpread({}, state), payload), {}, {
    loading: false
  }),
  [_action__WEBPACK_IMPORTED_MODULE_2__[/* resetFilterView */ "h"]]: (state, {
    payload: {
      exception
    }
  }) => _objectSpread(_objectSpread({}, state), {}, {
    classification: [],
    price: [_constants_keys__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].DEFAULT_PRICE[0], _constants_keys__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].DEFAULT_PRICE[1]],
    gender: [],
    age: [],
    type: [],
    meaning: [],
    brand: [],
    [exception]: state[exception]
  }),
  [_action__WEBPACK_IMPORTED_MODULE_2__[/* catalogFilterChange */ "a"]]: state => _objectSpread(_objectSpread({}, state), {}, {
    loading: true
  }),
  [_action__WEBPACK_IMPORTED_MODULE_2__[/* catalogSetFilters */ "f"]]: (state, {
    payload: {
      filters
    }
  }) => _objectSpread(_objectSpread({}, state), {}, {
    filters
  }),
  [_action__WEBPACK_IMPORTED_MODULE_2__[/* resetCatalogFilterReducer */ "g"]]: (state, {
    payload: {
      resetSearchWord
    } = {}
  }) => _objectSpread(_objectSpread({}, initialState), {}, {
    filters: _objectSpread(_objectSpread({}, initialState.filters), {}, {
      searchWord: resetSearchWord ? '' : state.filters.searchWord
    })
  }),
  [_action__WEBPACK_IMPORTED_MODULE_2__[/* catalogFilterChangeError */ "b"]]: state => _objectSpread(_objectSpread({}, initialState), {}, {
    filters: _objectSpread(_objectSpread({}, initialState.filters), {}, {
      searchWord: state.filters.searchWord
    })
  })
}, initialState));
const clearFilters = store => {
  const filters = _objectSpread({}, store.catalogFilter);

  const keysArray = Object.keys(filters);
  keysArray.forEach(key => {
    if (!filters[key].length && key !== 'searchWord') {
      delete filters[key];
    }
  });
  return filters;
};
const getIsUserFilter = store => !!store.catalogFilter.isUserFilter;
const selectCatalogFilters = ({
  catalogFilter
}) => catalogFilter.filters;
const getCatalogFilterByName = name => ({
  catalogFilter
}) => catalogFilter[name];

/***/ }),

/***/ "jn+7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return APISend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return APILoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return APIError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return APISuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIClear; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);

const {
  globalApiSend: APISend,
  globalApiLoading: APILoading,
  globalApiError: APIError,
  globalApiSuccess: APISuccess,
  globalApiClear: APIClear
} = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createActions"])('GLOBAL_API_SEND', 'GLOBAL_API_LOADING', 'GLOBAL_API_ERROR', 'GLOBAL_API_SUCCESS', 'GLOBAL_API_CLEAR');

/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "kvtS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return selectWishlistIds; });
/* unused harmony export getWishlist */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getWishlistLength; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("T/WE");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  productIds: {},
  products: [],
  loading: {},
  populateLoading: false,
  loadWishlist: false,
  wishlistError: false
};
/* harmony default export */ __webpack_exports__["a"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["handleActions"])({
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* wishlistSet */ "l"]]: (state, {
    payload: {
      products,
      productIds
    }
  }) => _objectSpread(_objectSpread({}, state), {}, {
    products,
    productIds: _objectSpread({}, productIds || {}),
    loadWishlist: false,
    wishlistError: false
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* wishlistGet */ "d"]]: state => _objectSpread(_objectSpread({}, state), {}, {
    loadWishlist: true,
    wishlistError: false
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* wishlistError */ "c"]]: state => _objectSpread(_objectSpread({}, state), {}, {
    loadWishlist: false,
    wishlistError: true
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* wishlistItemLoading */ "f"]]: (state, {
    payload: {
      id
    }
  }) => _objectSpread(_objectSpread({}, state), {}, {
    loading: _objectSpread(_objectSpread({}, state.loading), {}, {
      [id]: true
    })
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* wishlistChangeItemSuccess */ "b"]]: (state, {
    payload: {
      wishlistIds,
      wishlist,
      id
    }
  }) => _objectSpread(_objectSpread({}, state), {}, {
    productIds: wishlistIds,
    wishlist: wishlist || state.wishlist,
    loading: _objectSpread(_objectSpread({}, state.loading), {}, {
      [id]: false
    })
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* wishlistItemError */ "e"]]: (state, {
    payload: {
      product: {
        id
      }
    }
  }) => _objectSpread(_objectSpread({}, state), {}, {
    loading: _objectSpread(_objectSpread({}, state.loading), {}, {
      [id]: false
    })
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* wishlistPopulateLoading */ "i"]]: state => _objectSpread(_objectSpread({}, state), {}, {
    populateLoading: true
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* wishlistPopulateSuccess */ "j"]]: (state, {
    payload: {
      wishlistIds
    }
  }) => _objectSpread(_objectSpread({}, state), {}, {
    populateLoading: false,
    productIds: wishlistIds
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* wishlistPopulateError */ "h"]]: state => _objectSpread(_objectSpread({}, state), {}, {
    populateLoading: false
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* wishlistProductsReset */ "k"]]: state => _objectSpread(_objectSpread({}, state), {}, {
    products: []
  })
}, initialState));
const selectWishlistIds = ({
  wishlist: {
    productIds
  }
}) => productIds;
function getWishlist({
  wishlist: {
    products
  }
}) {
  return products;
}
function getWishlistLength({
  wishlist: {
    productIds
  }
}) {
  return Object.keys(productIds).length;
}

/***/ }),

/***/ "nfH0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getProductToBuy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getProductToBuySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProductToBuyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getProductToBuyReset; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);

const {
  getProductToBuy,
  getProductToBuySuccess,
  getProductToBuyError,
  getProductToBuyReset
} = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createActions"])('GET_PRODUCT_TO_BUY', 'GET_PRODUCT_TO_BUY_SUCCESS', 'GET_PRODUCT_TO_BUY_ERROR', 'GET_PRODUCT_TO_BUY_RESET');

/***/ }),

/***/ "oWHS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return changeGlobalInformationRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return resetGlobalInformationRouter; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);

const {
  changeGlobalInformationRouter,
  resetGlobalInformationRouter
} = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createActions"])('CHANGE_GLOBAL_INFORMATION_ROUTER', 'RESET_GLOBAL_INFORMATION_ROUTER_SET');

/***/ }),

/***/ "p6Nx":
/***/ (function(module, exports) {



/***/ }),

/***/ "pEZS":
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rTwP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectSearchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return selectSearchDataLoading; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("RHPr");


const initialState = {
  loading: false,
  error: false,
  data: null
};
/* harmony default export */ __webpack_exports__["a"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["handleActions"])({
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* searchProduct */ "a"]]: () => ({
    loading: true,
    error: false,
    data: null
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* searchProductSuccess */ "d"]]: (state, {
    payload: {
      data
    }
  }) => ({
    loading: false,
    error: false,
    data
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* searchProductError */ "b"]]: () => ({
    loading: true,
    error: true,
    data: null
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* searchProductReset */ "c"]]: () => ({
    loading: false,
    error: false,
    data: null
  })
}, initialState));
const selectSearchData = ({
  search: {
    data
  }
}) => data;
const selectSearchDataLoading = ({
  search: {
    loading
  }
}) => loading;

/***/ }),

/***/ "rg8P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3PsY");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("1TCz");
/* harmony import */ var _user_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("QnuM");
/* harmony import */ var _utils_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("32ec");
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("O6kt");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const appAxios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "https://admin.mankan.am"
});
appAxios.interceptors.request.use(config => {
  const newConfig = _objectSpread({}, config);

  newConfig.url = newConfig.baseURL + newConfig.url;

  if (false) {}

  return newConfig;
}, error => Promise.reject(error));
appAxios.interceptors.response.use(response => response, error => {
  const {
    status,
    config: {
      url
    }
  } = error.response;

  if (status === 401 && !url.includes('/api/user/signIn')) {
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    _pages_app__WEBPACK_IMPORTED_MODULE_3__["store"].dispatch(Object(_user_action__WEBPACK_IMPORTED_MODULE_4__[/* logout */ "i"])());
    antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error({
      content: 'Unauthorized',
      duration: 2
    });
  }

  return Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["a"] = (appAxios);

/***/ }),

/***/ "ss5K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hideAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return toggleVisibility; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);

const {
  show,
  hide,
  hideAll,
  toggleVisibility
} = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createActions"])('SHOW', 'HIDE', 'HIDE_ALL', 'TOGGLE_VISIBILITY');

/***/ }),

/***/ "t4EC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return changePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return resetChangePage; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);

const {
  changePage,
  resetChangePage
} = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createActions"])('CHANGE_PAGE', 'RESET_CHANGE_PAGE');

/***/ }),

/***/ "tI3Q":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "vEvA":
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),

/***/ "vsU0":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "wfgH":
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),

/***/ "wmiC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectViewedProducts; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7EUu");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  loading: false,
  data: [],
  error: false
};
/* harmony default export */ __webpack_exports__["a"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["handleActions"])({
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* getViewedProducts */ "a"]]: state => _objectSpread(_objectSpread({}, state), {}, {
    loading: true,
    error: false
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* getViewedProductsSuccess */ "c"]]: (state, {
    payload: {
      data
    }
  }) => _objectSpread(_objectSpread({}, state), {}, {
    loading: false,
    data
  }),
  [_action__WEBPACK_IMPORTED_MODULE_1__[/* getViewedProductsError */ "b"]]: state => _objectSpread(_objectSpread({}, state), {}, {
    loading: false,
    error: true
  })
}, initialState));
const selectViewedProducts = ({
  viewedProducts
}) => ({
  loading: viewedProducts.loading,
  error: viewedProducts.error,
  data: viewedProducts.data
});

/***/ }),

/***/ "xGlN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return catalogGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return catalogGetSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return catalogGetError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return catalogSetPage; });
/* unused harmony export catalogLoading */
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);

const {
  catalogGet,
  catalogGetSuccess,
  catalogGetError,
  catalogSetPage,
  catalogLoading
} = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createActions"])('CATALOG_GET', 'CATALOG_GET_SUCCESS', 'CATALOG_GET_ERROR', 'CATALOG_SET_PAGE', 'CATALOG_LOADING');

/***/ }),

/***/ "xKsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yHyA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAccompanyingProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAccompanyingProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAccompanyingProductError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resetAccompanyingProductReducer; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);

const {
  getAccompanyingProduct,
  getAccompanyingProductSuccess,
  getAccompanyingProductError,
  resetAccompanyingProductReducer
} = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createActions"])('GET_ACCOMPANYING_PRODUCT', 'GET_ACCOMPANYING_PRODUCT_SUCCESS', 'GET_ACCOMPANYING_PRODUCT_ERROR', 'RESET_ACCOMPANYING_PRODUCT_REDUCER');

/***/ }),

/***/ "ynhf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getMenuList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getMenuListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMenuListError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getMenuListReset; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);

const {
  getMenuList,
  getMenuListSuccess,
  getMenuListError,
  getMenuListReset
} = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createActions"])('GET_MENU_LIST', 'GET_MENU_LIST_SUCCESS', 'GET_MENU_LIST_ERROR', 'GET_MENU_LIST_RESET');

/***/ }),

/***/ "z6+L":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

/***/ }),

/***/ "zkM6":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });