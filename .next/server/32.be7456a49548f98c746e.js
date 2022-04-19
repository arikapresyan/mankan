exports.ids = [32];
exports.modules = {

/***/ "xq4V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CatalogEmpty = () => {
  const {
    messages
  } = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["useIntl"])();
  return __jsx("div", {
    style: {
      marginTop: '20px',
      marginBottom: '20px',
      color: '#333',
      fontSize: '16px'
    }
  }, messages['local.product_not_found']);
};

/* harmony default export */ __webpack_exports__["default"] = (CatalogEmpty);

/***/ })

};;