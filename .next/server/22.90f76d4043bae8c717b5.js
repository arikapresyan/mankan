exports.ids = [22];
exports.modules = {

/***/ "1OMB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BWRB");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Yj90");
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_badge__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_cart_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("KBGK");
/* harmony import */ var _store_wishlist_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("kvtS");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function CartWishlistConteiner({
  mode,
  isPageActive
}) {
  const counts = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(store => ({
    cart: Object(_store_cart_reducer__WEBPACK_IMPORTED_MODULE_5__[/* getTotalCount */ "b"])(store),
    wishlist: Object(_store_wishlist_reducer__WEBPACK_IMPORTED_MODULE_6__[/* getWishlistLength */ "b"])(store)
  }));

  switch (mode) {
    case 'mobil':
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
        className: `menu_bar_item ${isPageActive('/wishlist') ? 'is_active' : ''}`
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/wishlist"
      }, __jsx("a", null, __jsx(antd_lib_badge__WEBPACK_IMPORTED_MODULE_4___default.a, {
        count: counts.wishlist
      }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "heart"
      }))))), __jsx("div", {
        className: `menu_bar_item ${isPageActive('/cart') ? 'is_active' : ''}`
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/cart"
      }, __jsx("a", null, __jsx(antd_lib_badge__WEBPACK_IMPORTED_MODULE_4___default.a, {
        count: counts.cart
      }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "shopping"
      }))))));

    default:
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
        className: "cart_container"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/cart"
      }, __jsx("a", {
        className: "cart"
      }, __jsx("span", {
        className: "count"
      }, counts.cart))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/wishlist"
      }, __jsx("a", {
        className: "wishlist"
      }, __jsx("span", {
        className: "count"
      }, counts.wishlist)))));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (CartWishlistConteiner);

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

/***/ "T94z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd/lib/layout"
var layout_ = __webpack_require__("VzA1");
var layout_default = /*#__PURE__*/__webpack_require__.n(layout_);

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__("a5Fm");
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__("BWRB");
var icon_default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__("NNXn");

// EXTERNAL MODULE: external "antd/lib/dropdown"
var dropdown_ = __webpack_require__("HgHO");
var dropdown_default = /*#__PURE__*/__webpack_require__.n(dropdown_);

// EXTERNAL MODULE: ./store/user/action.js
var action = __webpack_require__("QnuM");

// EXTERNAL MODULE: ./store/pages-data/action.js
var pages_data_action = __webpack_require__("I4XR");

// CONCATENATED MODULE: ./components/header/language.js
var __jsx = external_react_default.a.createElement;

/* eslint-disable no-mixed-operators */








function LangSwitcher({
  getPageDataAction,
  setLangAction,
  lang
}) {
  return __jsx("div", {
    className: "lang_list"
  }, __jsx(dropdown_default.a, {
    overlay: __jsx(menu_default.a, {
      className: "lang_dropdown",
      onClick: e => {
        setLangAction({
          lang: e.key
        });
        getPageDataAction({});
      }
    }, __jsx(menu_default.a.Item, {
      value: "ARM",
      key: "ARM"
    }, "Arm"), __jsx(menu_default.a.Item, {
      value: "ENG",
      key: "ENG"
    }, "Eng")),
    trigger: ['click']
  }, __jsx("a", {
    className: "ant-dropdown-link",
    href: "/"
  }, lang === 'ARM' && 'Arm' || lang === 'RU' && 'Ru' || lang === 'ENG' && 'Eng', __jsx(icon_default.a, {
    type: "caret-down"
  }))));
}

const mapStateToProps = ({
  user: {
    lang
  }
}) => ({
  lang
});

/* harmony default export */ var language = (Object(external_react_redux_["connect"])(mapStateToProps, {
  setLangAction: action["m" /* setLang */],
  getPageDataAction: pages_data_action["a" /* getPageData */]
})(LangSwitcher));
// EXTERNAL MODULE: ./store/userEventListeners/action.js
var userEventListeners_action = __webpack_require__("ss5K");

// EXTERNAL MODULE: ./components/header/CartWishlistConteiner.js
var CartWishlistConteiner = __webpack_require__("1OMB");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./store/change-page/reducer.js
var reducer = __webpack_require__("HNRd");

// CONCATENATED MODULE: ./layout/header/useHeader.js





function useHeader({
  toggleVisibilityAction,
  hideAction,
  fixedSearchVisible
}) {
  const headerRef = Object(external_react_["useRef"])(null);
  const {
    0: fixedNavVisible,
    1: setFixedNavVisible
  } = Object(external_react_["useState"])(false);
  const {
    messages
  } = Object(external_react_intl_["useIntl"])();
  const redirectRoute = Object(external_react_redux_["useSelector"])(reducer["b" /* selectRedirectRoute */]);
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    isMenuOpen: false
  });
  Object(external_react_["useEffect"])(() => {
    if (redirectRoute.route) {
      router_default.a.push(redirectRoute.route);
    }
  }, [redirectRoute]);
  Object(external_react_["useEffect"])(() => {
    if (!fixedNavVisible && fixedSearchVisible) {
      hideAction({
        name: 'fixedSearchVisible'
      });
    }
  }, [fixedNavVisible]);
  Object(external_react_["useEffect"])(() => {
    const header = headerRef.current;

    const detectMenuVisibility = () => {
      const {
        bottom
      } = header.getBoundingClientRect();

      if (bottom < 30) {
        setFixedNavVisible(true);
      } else {
        setFixedNavVisible(false);
      }
    };

    detectMenuVisibility();

    const scrollEventHandler = e => {
      e.preventDefault();
      detectMenuVisibility();
    };

    const clickEventHandler = e => {
      if (!e.target.closest('.search_container.open') && fixedSearchVisible) {
        hideAction({
          name: 'fixedSearchVisible'
        });
      }
    };

    window.addEventListener('scroll', scrollEventHandler);
    window.addEventListener('click', clickEventHandler);
    return () => {
      window.removeEventListener('scroll', scrollEventHandler);
      window.removeEventListener('click', clickEventHandler);
    };
  }, []);

  const setRegistrationVisible = () => {
    toggleVisibilityAction({
      name: 'registrationVisible'
    });
  };

  const hideLogin = () => {
    toggleVisibilityAction({
      name: 'loginVisible'
    });
  };

  const handleOnHideModal = name => {
    hideAction({
      name
    });
  };

  const handleOnOpenModals = name => {
    toggleVisibilityAction({
      name
    });
  };

  const handleOnForgotPassword = () => {
    hideAction({
      name: 'loginVisible'
    });
    toggleVisibilityAction({
      name: 'forgotVisible'
    });
  };

  const handleOnLoginOpen = () => {
    toggleVisibilityAction({
      name: 'loginVisible'
    });
  };

  const handleMoveToRegistration = callBack => {
    hideAction({
      name: 'loginVisible'
    });
    callBack();
  };

  const handleMenuToggle = () => {
    setState({
      isMenuOpen: !state.isMenuOpen
    });
  };

  const handleToggleSearchVisibility = () => {
    toggleVisibilityAction({
      name: 'fixedSearchVisible'
    });
  };

  return {
    headerRef,
    handleMenuToggle,
    handleToggleSearchVisibility,
    handleMoveToRegistration,
    handleOnLoginOpen,
    fixedNavVisible,
    messages,
    setRegistrationVisible,
    hideLogin,
    handleOnHideModal,
    handleOnOpenModals,
    handleOnForgotPassword,
    state
  };
}
// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/form"
var form_ = __webpack_require__("foLw");
var form_default = /*#__PURE__*/__webpack_require__.n(form_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__("xKsY");
var modal_default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: ./API_Paths/userAPI.js
var userAPI = __webpack_require__("I7kk");

// EXTERNAL MODULE: ./store/global-APIS/action.js
var global_APIS_action = __webpack_require__("jn+7");

// EXTERNAL MODULE: ./utils/validationSchemas.js
var validationSchemas = __webpack_require__("8gJd");

// CONCATENATED MODULE: ./components/modals/forgot-password-modal/ForgotPasswordModal.js
var ForgotPasswordModal_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function ForgotPasswordModal(props) {
  const {
    messages
  } = Object(external_react_intl_["useIntl"])();
  const {
    visible,
    handleHideModal,
    APISendAction,
    globalAPIS,
    hideAllAction
  } = props;
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    if (globalAPIS.hasError) {
      setLoading(false);
    } else if (globalAPIS.success) {
      hideAllAction();
    }
  }, [globalAPIS]);
  const validationSchema = Object(external_react_["useMemo"])(() => Object(validationSchemas["g" /* getRecoverySchema */])(messages), [messages]);
  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit
  } = Object(external_formik_["useFormik"])({
    initialValues: {
      email: ''
    },
    onSubmit: values => {
      setLoading(true);
      APISendAction({
        method: 'post',
        url: userAPI["a" /* default */].recoveringPassword,
        data: _objectSpread({}, values)
      });
    },
    validationSchema
  });
  return ForgotPasswordModal_jsx(modal_default.a, {
    destroyOnClose: true,
    centered: true,
    visible: visible,
    onCancel: handleHideModal,
    footer: null,
    className: "password_recover_modal"
  }, ForgotPasswordModal_jsx("h2", null, messages['local.password_recovery']), ForgotPasswordModal_jsx(form_default.a, {
    onSubmit: handleSubmit
  }, errors.global ? ForgotPasswordModal_jsx("p", null, errors.global) : null, ForgotPasswordModal_jsx(form_default.a.Item, {
    validateStatus: errors.email && touched.email && 'error',
    help: touched.email && errors.email
  }, ForgotPasswordModal_jsx(input_default.a, {
    placeholder: `${messages['local.email']}*`,
    name: "email",
    value: values.email,
    onChange: handleChange
  })), ForgotPasswordModal_jsx("p", null, messages['local.will_send_new_password']), ForgotPasswordModal_jsx(form_default.a.Item, null, ForgotPasswordModal_jsx("div", {
    className: "password_recover_btn"
  }, ForgotPasswordModal_jsx(button_default.a, {
    disabled: loading,
    type: "primary",
    htmlType: "submit"
  }, messages['local.send'])))));
}

function ForgotPasswordModal_mapStateToProps({
  globalAPIS
}) {
  return {
    globalAPIS
  };
}

/* harmony default export */ var forgot_password_modal_ForgotPasswordModal = (Object(external_react_redux_["connect"])(ForgotPasswordModal_mapStateToProps, {
  APISendAction: global_APIS_action["d" /* APISend */],
  hideAllAction: userEventListeners_action["b" /* hideAll */]
})(ForgotPasswordModal));
// EXTERNAL MODULE: external "antd/lib/tabs"
var tabs_ = __webpack_require__("zkM6");
var tabs_default = /*#__PURE__*/__webpack_require__.n(tabs_);

// EXTERNAL MODULE: ./hooks/useGlobalAPI.js
var useGlobalAPI = __webpack_require__("aOr8");

// CONCATENATED MODULE: ./components/modals/suggestion-modal/SuggestionModal.js
var SuggestionModal_jsx = external_react_default.a.createElement;














const {
  TextArea
} = input_default.a;
const {
  TabPane
} = tabs_default.a;

function SuggestionModal(props) {
  const {
    messages
  } = Object(external_react_intl_["useIntl"])();
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: type,
    1: setType
  } = Object(external_react_["useState"])('suggestion');
  const {
    0: success,
    1: setSuccess
  } = Object(external_react_["useState"])('');
  const validationSchema = Object(external_react_["useMemo"])(() => Object(validationSchemas["i" /* getSuggestionSchema */])(messages, type), [messages, type]);
  const {
    visible,
    handleHideModal,
    APISendAction,
    hideAllAction
  } = props;
  Object(useGlobalAPI["a" /* default */])({
    onCancel: () => {
      setLoading(false);
    },
    onSuccess: hideAllAction
  });
  const formik = Object(external_formik_["useFormik"])({
    initialValues: {
      email: '',
      suggestion: '',
      Complaint: ''
    },
    onSubmit: values => {
      setLoading(true);
      APISendAction({
        method: 'post',
        url: userAPI["a" /* default */].offer_complaint,
        data: {
          userEmail: values.email,
          type: 'complain',
          description: values[type],
          title: type === 'suggestion' ? 'suggestion' : 'complain'
        },
        successText: messages['local.successText'],
        errorText: messages['local.errorText'],
        loadingText: messages['local.loadingText']
      });
      return true;
    },
    validationSchema
  });
  const {
    errors,
    values,
    touched,
    handleSubmit,
    handleChange,
    handleBlur
  } = formik;

  const decoratedHandelBlur = e => {
    success && setSuccess('');
    return handleBlur(e);
  };

  return SuggestionModal_jsx(modal_default.a, {
    destroyOnClose: true,
    title: messages['local.complain_suggestion'],
    visible: visible,
    onCancel: handleHideModal,
    footer: null,
    className: "complain_suggestion_modal"
  }, SuggestionModal_jsx(form_default.a, {
    onSubmit: handleSubmit
  }, errors && errors.global, SuggestionModal_jsx(tabs_default.a, {
    defaultActiveKey: "suggestion",
    onChange: type => setType(type)
  }, SuggestionModal_jsx(TabPane, {
    tab: messages['local.suggestion'],
    key: "suggestion"
  }, SuggestionModal_jsx(form_default.a.Item, {
    validateStatus: errors.suggestion && touched.suggestion && 'error',
    help: touched.suggestion && errors.suggestion
  }, SuggestionModal_jsx(TextArea, {
    name: "suggestion",
    value: values.suggestion,
    onChange: handleChange,
    onBlur: decoratedHandelBlur,
    placeholder: messages['local.write_offer'],
    autoSize: {
      minRows: 3,
      maxRows: 12
    }
  }))), SuggestionModal_jsx(TabPane, {
    tab: messages['local.complaint'],
    key: "Complaint"
  }, SuggestionModal_jsx(form_default.a.Item, {
    validateStatus: errors.Complaint && touched.Complaint && 'error',
    help: touched.Complaint && errors.Complaint
  }, SuggestionModal_jsx(TextArea, {
    name: "Complaint",
    value: values.Complaint,
    onChange: handleChange,
    onBlur: decoratedHandelBlur,
    placeholder: messages['local.write_complaint'],
    autoSize: {
      minRows: 3,
      maxRows: 12
    }
  })))), SuggestionModal_jsx(form_default.a.Item, {
    validateStatus: errors.email && touched.email && 'error',
    help: touched.email && errors.email
  }, SuggestionModal_jsx(input_default.a, {
    placeholder: messages['local.email'],
    name: "email",
    value: values.email,
    onChange: handleChange,
    onBlur: decoratedHandelBlur,
    className: "email"
  }), SuggestionModal_jsx(button_default.a, {
    disabled: loading,
    type: "primary",
    className: "send_suggestion_btn",
    htmlType: "submit"
  }, messages['local.send']))));
}

function SuggestionModal_mapStateToProps({
  globalAPIS
}) {
  return {
    globalAPIS
  };
}

/* harmony default export */ var suggestion_modal_SuggestionModal = (Object(external_react_redux_["connect"])(SuggestionModal_mapStateToProps, {
  APISendAction: global_APIS_action["d" /* APISend */],
  hideAllAction: userEventListeners_action["b" /* hideAll */]
})(SuggestionModal));
// EXTERNAL MODULE: external "antd/lib/checkbox"
var checkbox_ = __webpack_require__("JCEF");
var checkbox_default = /*#__PURE__*/__webpack_require__.n(checkbox_);

// CONCATENATED MODULE: ./components/modals/login-modal/LoginModal.js
var LoginModal_jsx = external_react_default.a.createElement;

function LoginModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function LoginModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { LoginModal_ownKeys(Object(source), true).forEach(function (key) { LoginModal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { LoginModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function LoginModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function LoginModal(props) {
  const {
    messages
  } = Object(external_react_intl_["useIntl"])();
  const {
    visible,
    handleHideModal,
    onForgotPassword,
    onMoveToRegistration,
    loginAction,
    hideAllAction,
    userAuthorisationLoading,
    authSuccess,
    errorText
  } = props;
  const validationSchema = Object(external_react_["useMemo"])(() => Object(validationSchemas["d" /* getLoginSchema */])(messages), [messages]);
  const formik = Object(external_formik_["useFormik"])({
    initialValues: {
      emailOrPhone: '',
      password: '',
      rememberMe: false
    },
    onSubmit: values => {
      loginAction(LoginModal_objectSpread({}, values));
    },
    validationSchema
  });
  Object(external_react_["useEffect"])(() => {
    if (authSuccess) {
      hideAllAction();
    }
  }, [authSuccess]);
  Object(external_react_["useEffect"])(() => {
    if (errorText) {
      if (errorText.includes('Wrong email')) {
        formik.setErrors({
          globalError: messages['local.wrong_email_or_password']
        });
      } else {
        formik.setErrors({
          globalError: errorText
        });
      }
    }
  }, [errorText]);
  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit
  } = formik;
  return LoginModal_jsx(modal_default.a, {
    destroyOnClose: true,
    title: "",
    centered: true,
    visible: visible,
    onCancel: handleHideModal,
    footer: null,
    className: "login_modal"
  }, LoginModal_jsx("h2", null, messages['local.login']), LoginModal_jsx(form_default.a, {
    className: "login-form",
    onSubmit: handleSubmit
  }, errors.globalError && LoginModal_jsx("p", null, errors.globalError), LoginModal_jsx(form_default.a.Item, {
    validateStatus: errors.emailOrPhone && touched.emailOrPhone && 'error',
    help: touched.emailOrPhone && errors.emailOrPhone
  }, LoginModal_jsx(input_default.a, {
    name: "emailOrPhone",
    placeholder: messages['local.email'],
    value: values.emailOrPhone,
    onChange: handleChange
  })), LoginModal_jsx(form_default.a.Item, {
    validateStatus: errors.password && touched.password && 'error',
    help: touched.password && errors.password
  }, LoginModal_jsx(input_default.a, {
    name: "password",
    type: "password",
    placeholder: messages['local.password'],
    value: values.password,
    onChange: handleChange
  })), LoginModal_jsx(form_default.a.Item, null, LoginModal_jsx(checkbox_default.a, {
    name: "rememberMe",
    checked: +values.rememberMe,
    onChange: handleChange
  }, messages['local.remember']), LoginModal_jsx("span", {
    className: "forgot_password",
    onClick: onForgotPassword
  }, messages['local.forgot_password'])), LoginModal_jsx(form_default.a.Item, null, LoginModal_jsx("div", {
    className: "login_btn"
  }, userAuthorisationLoading && LoginModal_jsx("p", null, "loading ..."), LoginModal_jsx(button_default.a, {
    disabled: userAuthorisationLoading,
    type: "primary",
    htmlType: "submit",
    className: "login-form-button"
  }, messages['local.login1'])), LoginModal_jsx("div", {
    className: "move_to_registration"
  }, LoginModal_jsx("span", {
    onClick: onMoveToRegistration
  }, messages['local.registration'])))));
}

function LoginModal_mapStateToProps({
  user: {
    loading,
    authSuccess,
    errorText
  }
}) {
  return {
    userAuthorisationLoading: loading,
    authSuccess,
    errorText
  };
}

/* harmony default export */ var login_modal_LoginModal = (Object(external_react_redux_["connect"])(LoginModal_mapStateToProps, {
  loginAction: action["g" /* login */],
  hideAllAction: userEventListeners_action["b" /* hideAll */]
})(LoginModal));
// CONCATENATED MODULE: ./components/modals/callback-modal/CallbackModal.js
var CallbackModal_jsx = external_react_default.a.createElement;

function CallbackModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CallbackModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CallbackModal_ownKeys(Object(source), true).forEach(function (key) { CallbackModal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CallbackModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CallbackModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const {
  TextArea: CallbackModal_TextArea
} = input_default.a;

function CallbackModal_ForgotPasswordModal(props) {
  const {
    messages
  } = Object(external_react_intl_["useIntl"])();
  const {
    visible,
    handleHideModal,
    APISendAction,
    globalAPIS,
    hideAllAction
  } = props;
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const validationSchema = Object(external_react_["useMemo"])(() => Object(validationSchemas["c" /* getFeedbackSchema */])(messages), [messages]);
  Object(external_react_["useEffect"])(() => {
    if (globalAPIS.hasError) {
      setLoading(false);
    } else if (globalAPIS.success) {
      hideAllAction();
    }
  }, [globalAPIS]);
  const resTextsForGlobal = Object(external_react_["useMemo"])(() => ({
    errorText: messages['local.errorText'],
    successText: messages['local.successText'],
    loadingText: messages['local.loadingText']
  }), [messages]);
  const formik = Object(external_formik_["useFormik"])({
    initialValues: {
      phone: '',
      email: '',
      fullName: '',
      message: ''
    },
    validationSchema,
    onSubmit: values => {
      setLoading(true);
      APISendAction(CallbackModal_objectSpread({
        method: 'post',
        url: userAPI["a" /* default */].feedback,
        data: {
          userEmail: values.email,
          firstLastNames: values.fullName,
          phone: values.phone,
          description: values.message
        }
      }, resTextsForGlobal));
    }
  });
  const {
    errors,
    values,
    touched,
    handleSubmit,
    handleChange,
    handleBlur
  } = formik;
  return CallbackModal_jsx(modal_default.a, {
    destroyOnClose: true,
    title: messages['local.feedback'],
    visible: visible,
    onCancel: handleHideModal,
    footer: null,
    className: "callback_modal"
  }, CallbackModal_jsx("div", {
    className: "phone"
  }, CallbackModal_jsx("a", {
    href: "tel:+37499530311"
  }, CallbackModal_jsx("span", null, `${messages['local.tel']}:`), "(+374) 99 530 311")), CallbackModal_jsx("div", {
    className: "email"
  }, CallbackModal_jsx("a", {
    href: "mailto:contact@mankan.am"
  }, CallbackModal_jsx("span", null, `${messages['local.email']}:`), "contact@mankan.am")), CallbackModal_jsx(form_default.a, {
    onSubmit: handleSubmit
  }, CallbackModal_jsx(form_default.a.Item, {
    validateStatus: errors.fullName && touched.fullName && 'error',
    help: touched.fullName && errors.fullName
  }, CallbackModal_jsx(input_default.a, {
    placeholder: messages['local.name_surname'],
    name: "fullName",
    value: values.fullName,
    onChange: handleChange,
    onBlur: handleBlur
  })), CallbackModal_jsx(form_default.a.Item, {
    validateStatus: errors.email && touched.email && 'error',
    help: touched.email && errors.email
  }, CallbackModal_jsx(input_default.a, {
    placeholder: messages['local.email'],
    name: "email",
    value: values.email,
    onChange: handleChange,
    onBlur: handleBlur
  })), CallbackModal_jsx(form_default.a.Item, {
    validateStatus: errors.phone && touched.phone && 'error',
    help: touched.phone && errors.phone
  }, CallbackModal_jsx(input_default.a, {
    placeholder: messages['local.tel'],
    name: "phone",
    value: values.phone,
    onChange: handleChange,
    onBlur: handleBlur
  })), CallbackModal_jsx(form_default.a.Item, {
    validateStatus: errors.message && touched.message && 'error',
    help: touched.message && errors.message
  }, CallbackModal_jsx(CallbackModal_TextArea, {
    placeholder: messages['local.message'],
    name: "message",
    value: values.message,
    onChange: handleChange,
    onBlur: handleBlur,
    autoSize: {
      minRows: 5,
      maxRows: 10
    }
  })), CallbackModal_jsx(form_default.a.Item, null, CallbackModal_jsx("div", {
    className: "send_btn"
  }, CallbackModal_jsx(button_default.a, {
    disabled: loading,
    type: "primary",
    htmlType: "submit"
  }, messages['local.send'])))));
}

function CallbackModal_mapStateToProps({
  globalAPIS
}) {
  return {
    globalAPIS
  };
}

/* harmony default export */ var CallbackModal = (Object(external_react_redux_["connect"])(CallbackModal_mapStateToProps, {
  APISendAction: global_APIS_action["d" /* APISend */],
  hideAllAction: userEventListeners_action["b" /* hideAll */]
})(CallbackModal_ForgotPasswordModal));
// CONCATENATED MODULE: ./components/modals/registration-modal/useRegistration.js
function useRegistration_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function useRegistration_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { useRegistration_ownKeys(Object(source), true).forEach(function (key) { useRegistration_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { useRegistration_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useRegistration_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function useRegistration({
  registrationAction,
  hideAllAction,
  authSuccess,
  errorText
}) {
  const {
    messages,
    formatMessage
  } = Object(external_react_intl_["useIntl"])();
  const validationSchema = Object(external_react_["useMemo"])(() => Object(validationSchemas["h" /* getRegistrationSchema */])(messages), [messages]);
  const formik = Object(external_formik_["useFormik"])({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      phone: '',
      password: '',
      repeatPassword: '',
      agreeTerms: false
    },
    onSubmit: values => {
      registrationAction(useRegistration_objectSpread(useRegistration_objectSpread({}, values), {}, {
        successText: messages['locale.confirm_email']
      }));
    },
    validationSchema
  });
  Object(external_react_["useEffect"])(() => {
    if (authSuccess) {
      hideAllAction();
    }
  }, [authSuccess]);
  Object(external_react_["useEffect"])(() => {
    if (errorText) {
      if (errorText.includes('email')) {
        formik.setErrors({
          email: messages['local.email_already_exist']
        });
      } else formik.setErrors({
        globalError: errorText
      });
    }
  }, [errorText]);
  return {
    formik,
    messages,
    formatMessage
  };
}
// CONCATENATED MODULE: ./components/modals/registration-modal/RegistrationModal.jsx
var RegistrationModal_jsx = external_react_default.a.createElement;











function RegistrationModal({
  visible,
  handleHideModal,
  registrationAction,
  hideAllAction,
  userAuthorisationLoading,
  authSuccess,
  errorText
}) {
  const {
    formik,
    messages,
    formatMessage
  } = useRegistration({
    registrationAction,
    hideAllAction,
    authSuccess,
    errorText
  });
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = formik;
  return RegistrationModal_jsx(modal_default.a, {
    visible: visible,
    destroyOnClose: true,
    centered: true,
    onCancel: handleHideModal,
    footer: null,
    className: "registration_modal"
  }, RegistrationModal_jsx("h2", null, messages['local.registration']), RegistrationModal_jsx(form_default.a, {
    onSubmit: handleSubmit
  }, errors.globalError && RegistrationModal_jsx("p", {
    style: {
      color: '#C40A04'
    }
  }, errors.globalError), RegistrationModal_jsx(form_default.a.Item, {
    validateStatus: errors.name && touched.name && 'error',
    help: touched.name && errors.name
  }, RegistrationModal_jsx(input_default.a, {
    placeholder: `${messages['local.name']} *`,
    name: "name",
    value: values.name,
    onChange: handleChange,
    onBlur: handleBlur
  })), RegistrationModal_jsx(form_default.a.Item, {
    validateStatus: errors.surname && touched.surname && 'error',
    help: touched.surname && errors.surname
  }, RegistrationModal_jsx(input_default.a, {
    placeholder: `${messages['local.last_name']} *`,
    value: values.surname,
    name: "surname",
    onChange: handleChange,
    onBlur: handleBlur
  })), RegistrationModal_jsx(form_default.a.Item, {
    validateStatus: errors.email && touched.email && 'error',
    help: touched.email && errors.email
  }, RegistrationModal_jsx(input_default.a, {
    placeholder: `${messages['local.email']} *`,
    value: values.email,
    name: "email",
    onChange: handleChange,
    onBlur: handleBlur
  })), RegistrationModal_jsx(form_default.a.Item, {
    validateStatus: errors.phone && touched.phone && 'error',
    help: touched.phone && errors.phone
  }, RegistrationModal_jsx(input_default.a, {
    placeholder: `${messages['local.tel']} *`,
    name: "phone",
    value: values.phone,
    onChange: handleChange,
    onBlur: handleBlur
  })), RegistrationModal_jsx(form_default.a.Item, {
    validateStatus: errors.password && touched.password && 'error',
    help: touched.password && errors.password
  }, RegistrationModal_jsx(input_default.a, {
    type: "password",
    placeholder: `${messages['local.password']} *`,
    name: "password",
    value: values.password,
    onChange: handleChange,
    onBlur: handleBlur
  })), RegistrationModal_jsx(form_default.a.Item, {
    validateStatus: errors.repeatPassword && touched.repeatPassword && 'error',
    help: touched.repeatPassword && errors.repeatPassword
  }, RegistrationModal_jsx(input_default.a, {
    type: "password",
    placeholder: messages['local.repeat_password'],
    name: "repeatPassword",
    value: values.repeatPassword,
    onChange: handleChange,
    onBlur: handleBlur
  })), RegistrationModal_jsx(form_default.a.Item, {
    validateStatus: errors.agreeTerms && touched.agreeTerms && 'error',
    help: touched.agreeTerms && errors.agreeTerms
  }, RegistrationModal_jsx(checkbox_default.a, {
    className: "terms",
    checked: +values.agreeTerms,
    onChange: handleChange,
    name: "agreeTerms"
  }, ` ${messages['local.i_know']} `, RegistrationModal_jsx("a", {
    href: "/using-rules",
    target: "_blank"
  }, messages['local.rules_of_using']))), RegistrationModal_jsx(form_default.a.Item, null, RegistrationModal_jsx("div", {
    className: "registration_btn"
  }, RegistrationModal_jsx(button_default.a // disabled={userAuthorisationLoading}
  , {
    type: "primary",
    htmlType: "submit",
    loading: userAuthorisationLoading
  }, messages['local.registration1'])))));
}

function RegistrationModal_mapStateToProps({
  user: {
    loading: userAuthorisationLoading,
    authSuccess,
    errorText
  }
}) {
  return {
    userAuthorisationLoading,
    authSuccess,
    errorText
  };
}

/* harmony default export */ var registration_modal_RegistrationModal = (Object(external_react_redux_["connect"])(RegistrationModal_mapStateToProps, {
  registrationAction: action["k" /* registration */],
  hideAllAction: userEventListeners_action["b" /* hideAll */]
})(RegistrationModal));
// CONCATENATED MODULE: ./layout/header/components/modals/HeaderModals.jsx
var HeaderModals_jsx = external_react_default.a.createElement;







function HeaderModals({
  handleMoveToRegistration,
  handleOnHideModal,
  forgotVisible,
  suggestionVisible,
  loginVisible,
  handleOnOpenModals,
  handleOnForgotPassword,
  hideLogin,
  setRegistrationVisible,
  callbackVisible,
  registrationVisible
}) {
  return HeaderModals_jsx(external_react_default.a.Fragment, null, forgotVisible && HeaderModals_jsx(forgot_password_modal_ForgotPasswordModal, {
    visible: forgotVisible,
    handleHideModal: () => handleOnHideModal('forgotVisible')
  }), suggestionVisible && HeaderModals_jsx(suggestion_modal_SuggestionModal, {
    visible: suggestionVisible,
    handleHideModal: () => handleOnOpenModals('suggestionVisible')
  }), loginVisible && HeaderModals_jsx(login_modal_LoginModal, {
    visible: loginVisible,
    handleHideModal: hideLogin,
    onForgotPassword: handleOnForgotPassword,
    onMoveToRegistration: () => handleMoveToRegistration(setRegistrationVisible)
  }), callbackVisible && HeaderModals_jsx(CallbackModal, {
    visible: callbackVisible,
    handleHideModal: () => handleOnOpenModals('callbackVisible')
  }), registrationVisible && HeaderModals_jsx(registration_modal_RegistrationModal, {
    visible: registrationVisible,
    handleHideModal: () => handleOnOpenModals('registrationVisible')
  }));
}

/* harmony default export */ var modals_HeaderModals = (HeaderModals);
// EXTERNAL MODULE: ./store/search/action.js
var search_action = __webpack_require__("RHPr");

// EXTERNAL MODULE: ./components/common/main-search/MainSearch.jsx + 2 modules
var MainSearch = __webpack_require__("dI4Y");

// CONCATENATED MODULE: ./layout/header/SiteHeader.js
var SiteHeader_jsx = external_react_default.a.createElement;















const {
  Header
} = layout_default.a;
const HeaderFixed = dynamic_default()(() => __webpack_require__.e(/* import() */ 27).then(__webpack_require__.bind(null, "BLDt")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("BLDt")],
    modules: ['../../components/header/fixed-header/HeaderFixed']
  }
});
const ProductCategoryList = dynamic_default()(() => __webpack_require__.e(/* import() */ 28).then(__webpack_require__.bind(null, "CJ80")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("CJ80")],
    modules: ['../../components/header/product-category-list/ProductCategoryList']
  }
});

function SiteHeader({
  toggleVisibilityAction,
  hideAction,
  suggestionVisible,
  callbackVisible,
  registrationVisible,
  loginVisible,
  forgotVisible,
  user,
  fixedSearchVisible,
  searchProductAction
}) {
  const idDesktop = Object(external_react_responsive_["useMediaQuery"])({
    minWidth: 992
  });
  const {
    headerRef,
    handleMenuToggle,
    handleToggleSearchVisibility,
    handleMoveToRegistration,
    handleOnLoginOpen,
    fixedNavVisible,
    messages,
    setRegistrationVisible,
    hideLogin,
    handleOnHideModal,
    handleOnOpenModals,
    handleOnForgotPassword,
    state
  } = useHeader({
    toggleVisibilityAction,
    hideAction,
    fixedSearchVisible
  });
  return SiteHeader_jsx("div", {
    ref: headerRef
  }, SiteHeader_jsx(Header, null, SiteHeader_jsx(modals_HeaderModals, {
    handleMoveToRegistration: handleMoveToRegistration,
    handleOnHideModal: handleOnHideModal,
    forgotVisible: forgotVisible,
    suggestionVisible: suggestionVisible,
    loginVisible: loginVisible,
    handleOnOpenModals: handleOnOpenModals,
    handleOnForgotPassword: handleOnForgotPassword,
    hideLogin: hideLogin,
    setRegistrationVisible: setRegistrationVisible,
    callbackVisible: callbackVisible,
    registrationVisible: registrationVisible
  }), SiteHeader_jsx("div", {
    className: "header_top clearfix"
  }, SiteHeader_jsx("div", {
    className: "container"
  }, SiteHeader_jsx("div", {
    className: "header_logo_container"
  }, SiteHeader_jsx(link_default.a, {
    href: "/"
  }, SiteHeader_jsx("a", {
    id: "logo"
  }, SiteHeader_jsx("img", {
    src: "/images/logo.png",
    alt: ""
  })))), SiteHeader_jsx("div", {
    className: `menu ${state.isMenuOpen ? 'is_open' : ''}`
  }, SiteHeader_jsx("span", {
    className: "close_menu",
    onClick: () => handleMenuToggle()
  }, SiteHeader_jsx(icon_default.a, {
    type: "close"
  })), SiteHeader_jsx(menu_default.a, {
    mode: "vertical"
  }, SiteHeader_jsx(menu_default.a.Item, {
    key: "1"
  }, SiteHeader_jsx(link_default.a, {
    href: "/about-us"
  }, SiteHeader_jsx("a", null, messages['local.about_us']))), SiteHeader_jsx(menu_default.a.Item, {
    key: "2"
  }, SiteHeader_jsx(link_default.a, {
    href: "/using-rules"
  }, SiteHeader_jsx("a", null, ' ', messages['local.using-rules']))), SiteHeader_jsx(menu_default.a.Item, {
    key: "21"
  }, SiteHeader_jsx(link_default.a, {
    href: "/bonus-promo-code"
  }, SiteHeader_jsx("a", null, ' ', messages['local.bonus-and-promo-code']))), SiteHeader_jsx(menu_default.a.Item, {
    key: "suggestion",
    onClick: () => handleOnOpenModals('suggestionVisible')
  }, messages['local.complain_suggestion']), SiteHeader_jsx(menu_default.a.Item, {
    key: "callback",
    onClick: () => handleOnOpenModals('callbackVisible')
  }, messages['local.feedback']))), SiteHeader_jsx(language, null), SiteHeader_jsx("span", {
    className: "open_menu",
    onClick: () => handleMenuToggle()
  }, SiteHeader_jsx(icon_default.a, {
    type: "menu"
  })))), SiteHeader_jsx("div", {
    className: "header_bottom clearfix"
  }, SiteHeader_jsx("div", {
    className: "container"
  }, SiteHeader_jsx("div", {
    className: "header_container"
  }, SiteHeader_jsx(link_default.a, {
    href: "/shops"
  }, SiteHeader_jsx("a", {
    className: "our_addresses"
  }, SiteHeader_jsx(icon_default.a, {
    type: "environment"
  }), messages['local.our_addresses'])), SiteHeader_jsx(MainSearch["a" /* default */], {
    className: "header_search",
    placeholder: messages['local.search'],
    onSearch: searchProductAction
  }), SiteHeader_jsx(CartWishlistConteiner["a" /* default */], null), SiteHeader_jsx("div", {
    className: "login_container"
  }, !user.fetchingInitialUserData ? SiteHeader_jsx(external_react_default.a.Fragment, null, user.id ? SiteHeader_jsx(link_default.a, {
    href: "/profile"
  }, SiteHeader_jsx("a", null, `${user.firstName} ${user.lastName}`)) : SiteHeader_jsx(external_react_default.a.Fragment, null, SiteHeader_jsx("span", {
    className: "login",
    onClick: () => handleOnOpenModals('loginVisible')
  }, messages['local.login'], ' ', "/"), SiteHeader_jsx("span", {
    className: "registration",
    onClick: () => handleOnOpenModals('registrationVisible')
  }, ' ', messages['local.registration']))) : null)))), idDesktop && SiteHeader_jsx(external_react_default.a.Fragment, null, SiteHeader_jsx(ProductCategoryList, null), SiteHeader_jsx(HeaderFixed, {
    isVisible: fixedNavVisible,
    setLoginVisible: handleOnLoginOpen,
    fixedSearchVisible: fixedSearchVisible,
    handleToggleSearchVisibility: handleToggleSearchVisibility,
    searchProductAction: searchProductAction
  }))));
}

function SiteHeader_mapStateToProps({
  userEventListeners: {
    isVisible: {
      suggestionVisible,
      callbackVisible,
      registrationVisible,
      loginVisible,
      forgotVisible,
      fixedSearchVisible
    }
  },
  globalAPIS,
  user
}) {
  return {
    suggestionVisible,
    callbackVisible,
    registrationVisible,
    fixedSearchVisible,
    globalAPIS,
    loginVisible,
    forgotVisible,
    user
  };
}

/* harmony default export */ var header_SiteHeader = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(SiteHeader_mapStateToProps, {
  toggleVisibilityAction: userEventListeners_action["d" /* toggleVisibility */],
  hideAction: userEventListeners_action["a" /* hide */],
  searchProductAction: search_action["a" /* searchProduct */]
})(SiteHeader));

/***/ }),

/***/ "aOr8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useGlobalAPI; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);


function useGlobalAPI({
  onCancel,
  onSuccess
}) {
  const gAPIS = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    globalAPIS
  }) => globalAPIS);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (gAPIS.hasError) {
      onCancel();
    } else if (gAPIS.success) {
      onSuccess();
    }
  }, [gAPIS]);
}

/***/ })

};;