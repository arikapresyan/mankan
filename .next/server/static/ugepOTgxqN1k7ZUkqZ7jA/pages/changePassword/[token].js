module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("pKwr");


/***/ }),

/***/ "8gJd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getEmailSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getLoginSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getRecoverySchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getRegistrationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getFeedbackSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getSuggestionSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getOrderSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getNewPasswordSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getChangeInfoSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("C8TP");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O6kt");


const getEmailSchema = msg => yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.enter_your_email']).test('str', msg['local.invalid_email'], value => _constants_utils__WEBPACK_IMPORTED_MODULE_1__[/* regex */ "k"].email.test(value))
});
const getLoginSchema = msg => yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  emailOrPhone: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.enter_your_email']),
  password: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.enter_your_password'])
});
const getRecoverySchema = msg => yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.enter_your_email']).test('str', msg['local.invalid_email'], value => _constants_utils__WEBPACK_IMPORTED_MODULE_1__[/* regex */ "k"].email.test(value))
});
const getRegistrationSchema = msg => yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.enter_your_name']).min(3, msg['local.invalid_field']).test('str', msg['local.invalid_field'], value => _constants_utils__WEBPACK_IMPORTED_MODULE_1__[/* regex */ "k"].name.test(value)),
  surname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.enter_your_surname']).min(3, msg['local.invalid_field']).test('str', msg['local.invalid_field'], value => _constants_utils__WEBPACK_IMPORTED_MODULE_1__[/* regex */ "k"].name.test(value)),
  phone: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.enter_your_number']).test('phone', msg['local.invalid_field'], value => _constants_utils__WEBPACK_IMPORTED_MODULE_1__[/* regex */ "k"].phone.test(value)).min(9, msg['local.invalid_field']).max(12, msg['local.invalid_field']),
  email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.enter_your_email']).test('str', msg['local.invalid_email'], value => _constants_utils__WEBPACK_IMPORTED_MODULE_1__[/* regex */ "k"].email.test(value)),
  password: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.enter_your_password']).min(6, msg['local.password_min_length']),
  repeatPassword: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.repeat_password']).oneOf([yup__WEBPACK_IMPORTED_MODULE_0__["ref"]('password'), null], msg['local.passwords_must_match']),
  agreeTerms: yup__WEBPACK_IMPORTED_MODULE_0__["boolean"]().oneOf([true], msg['local.must_accept_terms_and_conditions'])
});
const getFeedbackSchema = msg => yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  phone: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.enter_your_number']).test('phone', msg['local.invalid_field'], value => _constants_utils__WEBPACK_IMPORTED_MODULE_1__[/* regex */ "k"].phone.test(value)).min(9, msg['local.invalid_field']).max(12, msg['local.invalid_field']),
  email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.enter_your_email']).test('str', msg['local.invalid_email'], value => _constants_utils__WEBPACK_IMPORTED_MODULE_1__[/* regex */ "k"].email.test(value)),
  fullName: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.enter_your_fullname']).trim().test('str', msg['local.invalid_field'], value => !_constants_utils__WEBPACK_IMPORTED_MODULE_1__[/* regex */ "k"].string.test(value)),
  message: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.required']).trim()
});
const getSuggestionSchema = (msg, type) => // type: 'Offer' || 'Complaint'
yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.enter_your_email']).test('str', msg['local.invalid_email'], value => _constants_utils__WEBPACK_IMPORTED_MODULE_1__[/* regex */ "k"].email.test(value)),
  [type]: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.required']).trim()
});
const getOrderSchema = msg => yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  firstName: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.enter_your_name']).min(3, msg['local.invalid_field']).test('str', msg['local.invalid_field'], value => _constants_utils__WEBPACK_IMPORTED_MODULE_1__[/* regex */ "k"].name.test(value)),
  lastName: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.enter_your_surname']).min(3, msg['local.invalid_field']).test('str', msg['local.invalid_field'], value => _constants_utils__WEBPACK_IMPORTED_MODULE_1__[/* regex */ "k"].name.test(value)),
  phone: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.enter_your_number']).test('phone', msg['local.invalid_field'], value => _constants_utils__WEBPACK_IMPORTED_MODULE_1__[/* regex */ "k"].phone.test(value)).min(9, msg['local.invalid_field']).max(12, msg['local.invalid_field']),
  email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.enter_your_email']).test('str', msg['local.invalid_email'], value => _constants_utils__WEBPACK_IMPORTED_MODULE_1__[/* regex */ "k"].email.test(value)),
  street: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.required']).min(3, msg['local.invalid_field']).trim(),
  house: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.required']).trim(),
  entry: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().trim(),
  deliveryPeriodString: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.required']).trim()
});
const getNewPasswordSchema = msg => yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  password: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.enter_your_password']).min(6, msg['local.password_min_length']),
  retryPassword: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.repeat_password']).oneOf([yup__WEBPACK_IMPORTED_MODULE_0__["ref"]('password'), null], msg['local.passwords_must_match'])
});
const getChangeInfoSchema = msg => yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  firstName: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.enter_your_name']).min(3, msg['local.invalid_field']).test('str', msg['local.invalid_field'], value => _constants_utils__WEBPACK_IMPORTED_MODULE_1__[/* regex */ "k"].name.test(value)),
  lastName: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.enter_your_surname']).min(3, msg['local.invalid_field']).test('str', msg['local.invalid_field'], value => _constants_utils__WEBPACK_IMPORTED_MODULE_1__[/* regex */ "k"].name.test(value)),
  phone: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.enter_your_number']).test('phone', msg['local.invalid_field'], value => _constants_utils__WEBPACK_IMPORTED_MODULE_1__[/* regex */ "k"].phone.test(value)).min(9, msg['local.invalid_field']).max(12, msg['local.invalid_field']),
  email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(msg['local.enter_your_email']).test('str', msg['local.invalid_email'], value => _constants_utils__WEBPACK_IMPORTED_MODULE_1__[/* regex */ "k"].email.test(value)),
  changePassMode: yup__WEBPACK_IMPORTED_MODULE_0__["bool"](),
  password: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(6, msg['local.password_min_length']).test('changePassMode', msg['local.enter_your_password'], function (value) {
    if (this.parent.changePassMode) {
      if (!value || !value.trim()) {
        return false;
      }
    }

    return true;
  }),
  retryPassword: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_0__["ref"]('password'), null], msg['local.passwords_must_match']).test('changePassMode', msg['local.repeat_password'], function (value) {
    if (this.parent.changePassMode) {
      if (!value || !value.trim()) {
        return false;
      }
    }

    return true;
  })
});

/***/ }),

/***/ "Bsb8":
/***/ (function(module, exports) {



/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "I7kk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _constants_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fuBQ");

const paths = {
  recoveringPassword: '/api/user/recoverPassword',
  feedback: '/api/user/feedback',
  offer_complaint: '/api/user/complain',
  get_catalog: `${_constants_keys__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].HOST}/get_catalog`,
  get_filter_id_by_name: `${_constants_keys__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].HOST}/get_filter_id_by_name`,
  get_slider_products: `${_constants_keys__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].HOST}/get_home_slider_products`,
  get_menu_list: `${_constants_keys__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].HOST}/get_menu_list`,
  change_password: '/api/user/changePassword',
  subscribe: '/api/user/subscribers',
  change_userInfo: '/api/user/info',
  vacancy: '/api/vocation/createPdf',
  vacancyFile: '/api/vocation/sendAppliersMail',
  removeUserPageOrder: '/api/user/order/remove',
  getPromoCode: '/api/user/promoCode/'
};
/* harmony default export */ __webpack_exports__["a"] = (paths);

/***/ }),

/***/ "JCEF":
/***/ (function(module, exports) {

module.exports = require("antd/lib/checkbox");

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

/***/ "Uqqx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "VzA1":
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

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

/***/ "pKwr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("VzA1");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Uqqx");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("foLw");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("JCEF");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store_global_APIS_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("jn+7");
/* harmony import */ var _API_Paths_userAPI__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("I7kk");
/* harmony import */ var _utils_validationSchemas__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("8gJd");
/* harmony import */ var _ChangePassowrd_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("Bsb8");
/* harmony import */ var _ChangePassowrd_less__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_ChangePassowrd_less__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_cookies__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("32ec");
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("O6kt");
/* harmony import */ var _store_user_action__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("QnuM");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const {
  Content
} = antd_lib_layout__WEBPACK_IMPORTED_MODULE_2___default.a;

function PaymentDeliveryReturn({
  APISendAction,
  token,
  globalAPIS
}) {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    messages
  } = Object(react_intl__WEBPACK_IMPORTED_MODULE_9__["useIntl"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  const validationSchema = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(_utils_validationSchemas__WEBPACK_IMPORTED_MODULE_12__[/* getNewPasswordSchema */ "e"])(messages), [messages]);
  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_7__["useFormik"])({
    initialValues: {
      password: '',
      retryPassword: '',
      token
    },
    validationSchema,
    onSubmit: values => {
      setLoading(true);
      APISendAction({
        method: 'put',
        url: `${_API_Paths_userAPI__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].change_password}/${values.token}`,
        data: _objectSpread({}, values)
      });
    }
  });
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    touched,
    errors
  } = formik;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (globalAPIS.hasError) {
      setLoading(false);
    } else if (globalAPIS.success) {
      if (values.rememberMe) {
        Object(_utils_cookies__WEBPACK_IMPORTED_MODULE_14__[/* setCookie */ "c"])(_constants_utils__WEBPACK_IMPORTED_MODULE_15__[/* C_TOKEN */ "a"], token, {
          'max-age': 100 * 24 * 60 * 60
        });
      } else {
        Object(_utils_cookies__WEBPACK_IMPORTED_MODULE_14__[/* setCookie */ "c"])(_constants_utils__WEBPACK_IMPORTED_MODULE_15__[/* C_TOKEN */ "a"], token);
      }

      dispatch(Object(_store_user_action__WEBPACK_IMPORTED_MODULE_16__[/* getUserData */ "c"])());
      router.push('/');
    }
  }, [globalAPIS]);
  return __jsx(Content, null, __jsx("div", {
    className: "changePasswordContainer"
  }, __jsx("form", {
    onSubmit: handleSubmit,
    className: "changePasswordForm"
  }, __jsx("h1", null, messages['local.password_recovery']), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    validateStatus: errors.password && touched.password && 'error',
    help: touched.password && errors.password,
    label: messages['local.password']
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "password",
    name: "password",
    placeholder: messages['local.new_password'],
    onBlur: handleBlur,
    onChange: handleChange,
    value: values.password
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    validateStatus: errors.retryPassword && touched.retryPassword && 'error',
    help: touched.retryPassword && errors.retryPassword,
    label: messages['local.repeat_password']
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "password",
    name: "retryPassword",
    placeholder: messages['local.repeat_new_password'],
    onBlur: handleBlur,
    onChange: handleChange,
    value: values.retryPassword
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, null, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_5___default.a, {
    name: "rememberMe",
    checked: values.rememberMe,
    onChange: handleChange
  }, messages['local.remember'])), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, null, __jsx("div", {
    className: "login_btn"
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    type: "primary",
    htmlType: "submit",
    loading: loading
  }, ' ', messages['local.login']))))));
}

PaymentDeliveryReturn.getInitialProps = ({
  query
}) => {
  const {
    token
  } = query;
  return {
    token
  };
};

const mapStateToProps = ({
  globalAPIS
}) => ({
  globalAPIS
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, {
  APISendAction: _store_global_APIS_action__WEBPACK_IMPORTED_MODULE_10__[/* APISend */ "d"]
})(PaymentDeliveryReturn));

/***/ }),

/***/ "wfgH":
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ })

/******/ });