exports.ids = [24];
exports.modules = {

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

/***/ }),

/***/ "i05m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("VzA1");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tI3Q");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vsU0");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("a5Fm");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("BWRB");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("z6+L");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _API_Paths_userAPI__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("I7kk");
/* harmony import */ var _store_userEventListeners_action__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("ss5K");
/* harmony import */ var _store_global_APIS_action__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("jn+7");
/* harmony import */ var _hooks_useGlobalAPI__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("aOr8");
/* harmony import */ var _utils_validationSchemas__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("8gJd");
/* harmony import */ var _constants_footerConstants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("WmTK");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import Form from 'antd/lib/form';
// import Button from 'antd/lib/button';
// import Input from 'antd/lib/input';














const InfoIcon = '/images/icons/info.png';
const {
  Footer
} = antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a;

function SiteFooter({
  toggleVisibilityAction,
  APISendAction
}) {
  const {
    messages
  } = Object(react_intl__WEBPACK_IMPORTED_MODULE_9__["useIntl"])();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const validationSchema = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(_utils_validationSchemas__WEBPACK_IMPORTED_MODULE_15__[/* getEmailSchema */ "b"])(messages), [messages]);
  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_10__["useFormik"])({
    initialValues: {
      email: ''
    },
    onSubmit: values => {
      setLoading(true);
      APISendAction({
        method: 'post',
        url: _API_Paths_userAPI__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].subscribe,
        data: values,
        successText: messages['locale.thanks_follow'],
        errorText: messages['local.errorText']
      });
    },
    validationSchema
  });
  const onSuccess = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    formik.resetForm();
    setLoading(false);
  }, [formik.resetForm, setLoading]);
  const setLoadingFalse = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setLoading(false);
  }, [setLoading]);
  const {
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    errors
  } = formik;
  Object(_hooks_useGlobalAPI__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])({
    onCancel: setLoadingFalse,
    onSuccess
  });

  const setSuggestionVisible = () => {
    toggleVisibilityAction({
      name: 'suggestionVisible'
    });
  };

  const setCallbackVisible = () => {
    toggleVisibilityAction({
      name: 'callbackVisible'
    });
  };

  const footerMenu = Object(_constants_footerConstants__WEBPACK_IMPORTED_MODULE_16__[/* getFooterContent */ "a"])(messages, {
    openFidBackModal: setCallbackVisible,
    openSuggestionsModal: setSuggestionVisible
  });
  const paymentMethods = Object(_constants_footerConstants__WEBPACK_IMPORTED_MODULE_16__[/* getPaymentMethods */ "b"])(messages);
  return __jsx(Footer, null, __jsx("div", {
    className: "footer_mobile"
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a, null, footerMenu.map(({
    link,
    text,
    handleClick,
    icon
  }, index) => __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    onClick: handleClick,
    key: `menuMobile${index}`
  }, link ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: link
  }, __jsx("a", null, __jsx("img", {
    src: icon,
    alt: "",
    className: "menu_icon"
  }), text, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    type: "right"
  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
    src: icon,
    alt: "",
    className: "menu_icon"
  }), text, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    type: "right"
  })))))), __jsx("div", {
    className: "footer_top"
  }, __jsx("div", {
    className: "container"
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    gutter: 30
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 5,
    xl: 5
  }, __jsx("div", {
    className: "footer_info branches"
  }, __jsx("h3", null, messages['local.our_addresses']), __jsx("ul", {
    className: "address_list footer_menu"
  }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/shops"
  }, __jsx("a", null, `${messages['local.ulnetsi']} `))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/shops"
  }, __jsx("a", null, `${messages['local.mashtots']} `))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/shops"
  }, __jsx("a", null, `${messages['local.abovyans']} `))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/shops"
  }, __jsx("a", null, `${messages['local.dalma']} `)))))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 5,
    xl: 5
  }, __jsx("div", {
    className: "footer_info information"
  }, __jsx("h3", null, messages['local.information']), __jsx("ul", {
    className: "footer_menu"
  }, footerMenu.map(({
    link,
    text,
    handleClick
  }, index) => __jsx("li", {
    key: `footerMenu${index}`
  }, link ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: link
  }, __jsx("a", null, text)) : __jsx("span", {
    onClick: handleClick
  }, text, ' ')))))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 5,
    xl: 5
  }, __jsx("div", {
    className: "footer_info information"
  }, __jsx("h3", null, messages['local.payment-methods']), __jsx("ul", {
    className: "footer_menu"
  }, paymentMethods.map((text, index) => __jsx("li", {
    key: `paymentMethods${index}`
  }, index + 1 === paymentMethods.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/bonus-promo-code"
  }, __jsx("a", null, text))), __jsx("div", {
    className: "bonus_quantity"
  }, __jsx(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    placement: "bottom",
    title: messages['local.can_use_bonus_if'],
    className: "info_tooltip"
  }, __jsx("span", null, __jsx("img", {
    src: InfoIcon,
    alt: ""
  }))))) : __jsx("span", null, text)))))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 9,
    xl: 9
  }, __jsx("div", {
    className: "footer_info subscribe"
  }, __jsx("div", {
    className: "contact_phone"
  }, __jsx("a", {
    href: "tel:+37499530311"
  }, "+374 99 530 311")), __jsx("div", {
    className: "working_days"
  }, messages['local.mon_fri'], ' ', "10\u058900-18\u058900"), __jsx("div", {
    className: "social_networks"
  }, __jsx("ul", {
    className: "social_link_list"
  }, __jsx("li", null, __jsx("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.facebook.com/mankantoys/"
  }, __jsx("i", {
    className: "fa fa-facebook",
    "aria-hidden": "true"
  }))), __jsx("li", null, __jsx("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.instagram.com/mankantoys/"
  }, __jsx("i", {
    className: "fa fa-instagram",
    "aria-hidden": "true"
  })))))))))), __jsx("div", {
    className: "footer_bottom"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "copyright"
  }, "\xA9 Mankan LLC All rights reserved 1992-2020"), __jsx("div", {
    className: "created_by"
  }, __jsx("a", {
    target: "blank",
    href: "https://twelve.company"
  }, "Twelve development company")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(null, {
  toggleVisibilityAction: _store_userEventListeners_action__WEBPACK_IMPORTED_MODULE_12__[/* toggleVisibility */ "d"],
  APISendAction: _store_global_APIS_action__WEBPACK_IMPORTED_MODULE_13__[/* APISend */ "d"]
})(SiteFooter));

/***/ })

};;