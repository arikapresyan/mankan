exports.ids = [31];
exports.modules = {

/***/ "mnsg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChooseAge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rZnC");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function SelectByAge() {
  const {
    messages
  } = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["useIntl"])();
  return __jsx("div", {
    id: "select_by_age_section"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "section_title"
  }, messages['local.select_by_age'])), __jsx("div", {
    className: "filter_by_age"
  }, __jsx("div", {
    className: "container"
  }, __jsx(_ChooseAge__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null))));
}

/* harmony default export */ __webpack_exports__["default"] = (SelectByAge);

/***/ }),

/***/ "rZnC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ButtonGroup = antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a.Group;
const buttons = [{
  number: '0-1',
  value: '1'
}, {
  number: '1-2',
  value: '2'
}, {
  number: '2-4',
  value: '3'
}, {
  number: '4-6',
  value: '4'
}, {
  number: '6-8',
  value: '5'
}, {
  number: '8+',
  value: '6'
}];

function ChooseAge({
  onClick,
  selected
}) {
  const {
    messages
  } = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["useIntl"])();

  function setSelectedItem(event) {
    const button = event.target.closest('button');
    if (!button) return;
    const {
      value
    } = button;

    if (onClick) {
      onClick(event);
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(`/catalog?age=${value}`, 'catalog');
    }
  }

  return __jsx(ButtonGroup, {
    onClick: setSelectedItem
  }, buttons.map(({
    value,
    number
  }) => __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    value: value,
    key: value,
    className: value === selected ? 'selected' : ''
  }, number, __jsx("p", null, messages['local.years']))));
}

/* harmony default export */ __webpack_exports__["a"] = (ChooseAge);

/***/ })

};;