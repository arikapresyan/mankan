exports.ids = [26];
exports.modules = {

/***/ "koNj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vsU0");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("GqX/");
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("7YAK");
/* harmony import */ var antd_lib_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_slider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("fuBQ");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function sortNumber(a, b) {
  return a - b;
}

function closerTimer() {
  let timerId = null;
  return (callback, time) => {
    clearTimeout(timerId);
    timerId = setTimeout(callback, time);
  };
}

function PriceSlider({
  handleChange,
  price,
  mod
}) {
  const {
    messages
  } = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["useIntl"])();
  const {
    0: inputsValue,
    1: setInputsValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(price);
  const timerFunction = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => closerTimer(), []); // useEffect(() => {
  //   if (price[0] === inputsValue[0] && price[1] === inputsValue[1]) return;
  //   setInputsValue([...inputsValue].sort(sortNumber));
  // }, [price]);

  const timerChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(values => {
    const undefinedIndex = values.findIndex(val => val === '');
    if (undefinedIndex !== -1) values[undefinedIndex] = undefined;
    setInputsValue(values);
    timerFunction(() => {
      handleChange(values);
    }, 500);
  }, []);

  const handleChangeSlider = values => {
    const cloneValues = [...values];

    if (!cloneValues[0] || !cloneValues[1]) {
      // eslint-disable-next-line prefer-destructuring
      cloneValues[0] ? cloneValues[1] = cloneValues[0] : cloneValues[0] = cloneValues[1];
    }

    timerChange(values);
  };

  const sortValues = () => {
    if (inputsValue[0] && inputsValue[1]) {
      setInputsValue([...inputsValue].sort(sortNumber));
    }
  };

  const numberInputs = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_2___default.a, {
    min: 1,
    max: _constants_keys__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].DEFAULT_PRICE[1],
    value: inputsValue[0],
    onChange: value => {
      timerChange([value, inputsValue[1]]);
    },
    onBlur: sortValues,
    placeholder: messages['local.min-price']
  }), __jsx("span", {
    className: "line"
  }), __jsx(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_2___default.a, {
    min: 1,
    max: _constants_keys__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].DEFAULT_PRICE[1],
    value: inputsValue[1],
    onChange: value => {
      timerChange([inputsValue[0], value]);
    },
    onBlur: sortValues,
    placeholder: messages['local.max-price']
  }));

  const slider = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd_lib_slider__WEBPACK_IMPORTED_MODULE_3___default.a, {
    range: true,
    onChange: values => {
      if (!values[0]) {
        values[0] = inputsValue[0] || inputsValue[1] || values[1];
      } else if (!values[1]) {
        values[1] = inputsValue[1] || inputsValue[0] || values[0];
      }

      handleChangeSlider(values);
    },
    value: [...(inputsValue[0] || inputsValue[1] ? [Number.isInteger(inputsValue[0]) ? inputsValue[0] : inputsValue[1], inputsValue[1] || inputsValue[0]] : [])].sort(sortNumber),
    max: _constants_keys__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].DEFAULT_PRICE[1],
    min: 1
  }));

  switch (mod) {
    case 'Home':
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 6,
        xxl: 5,
        className: "choose_price clearfix"
      }, __jsx("h3", null, messages['local.specify_price']), __jsx("div", {
        className: "price_slider"
      }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, null, numberInputs()), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, null, slider()))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        xs: 24,
        className: "choose_price_mobile"
      }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, null, numberInputs()), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, null, slider())));

    default:
      return __jsx("div", {
        className: "price_slider"
      }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, null, numberInputs()), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, null, slider()));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (PriceSlider);

/***/ }),

/***/ "lNCG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__("tI3Q");
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__("vsU0");
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./components/common/PriceSlider.js
var PriceSlider = __webpack_require__("koNj");

// EXTERNAL MODULE: ./components/home/ChooseAge.js
var ChooseAge = __webpack_require__("rZnC");

// EXTERNAL MODULE: external "antd/lib/select"
var select_ = __webpack_require__("A4pX");
var select_default = /*#__PURE__*/__webpack_require__.n(select_);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__("BWRB");
var icon_default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: ./store/single-data/action.js
var action = __webpack_require__("JW+k");

// EXTERNAL MODULE: ./store/user/reducer.js
var reducer = __webpack_require__("XztR");

// CONCATENATED MODULE: ./components/home/ChooseMeaning.js
var __jsx = external_react_default.a.createElement;







const {
  Option
} = select_default.a;

const selectUsages = ({
  singleData: {
    usage: {
      loading,
      error,
      data
    }
  }
}) => ({
  loading,
  error,
  data
});

function ChooseMeaning({
  handleChange
}) {
  const {
    messages
  } = Object(external_react_intl_["useIntl"])();
  const {
    0: localeData,
    1: setLocaleData
  } = Object(external_react_["useState"])([]);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const lng = Object(external_react_redux_["useSelector"])(reducer["c" /* selectLang */]); // usage

  const {
    data
  } = Object(external_react_redux_["useSelector"])(selectUsages);
  Object(external_react_["useEffect"])(() => {
    dispatch(Object(action["a" /* getSingleData */])({
      data: {
        name: 'usage'
      }
    }));
  }, [action["a" /* getSingleData */], dispatch, lng]);
  Object(external_react_["useEffect"])(() => {
    if (data) {
      setLocaleData(data.rows);
    }
  }, [data]);
  return __jsx(select_default.a, {
    defaultValue: messages['local.not_specifiedе'],
    suffixIcon: __jsx(icon_default.a, {
      type: "caret-down"
    }),
    onChange: handleChange
  }, localeData.map(({
    id,
    langs
  }) => __jsx(Option, {
    key: id,
    value: id
  }, langs[0].name)));
}

/* harmony default export */ var home_ChooseMeaning = (ChooseMeaning);
// EXTERNAL MODULE: ./store/catalog-filter/action.js
var catalog_filter_action = __webpack_require__("AVz8");

// EXTERNAL MODULE: external "antd/lib/radio"
var radio_ = __webpack_require__("XQdj");
var radio_default = /*#__PURE__*/__webpack_require__.n(radio_);

// CONCATENATED MODULE: ./components/home/ChooseGender.js
var ChooseGender_jsx = external_react_default.a.createElement;




function ChooseGender({
  handelChange,
  selected
}) {
  const {
    messages
  } = Object(external_react_intl_["useIntl"])();
  return ChooseGender_jsx(radio_default.a.Group, {
    name: "radiogroup",
    value: selected
  }, ChooseGender_jsx(radio_default.a, {
    value: "BOY",
    onClick: handelChange
  }, messages['local.boy1']), ChooseGender_jsx(radio_default.a, {
    value: "GIRL",
    onClick: handelChange
  }, messages['local.girl1']));
}

/* harmony default export */ var home_ChooseGender = (ChooseGender);
// CONCATENATED MODULE: ./components/home/ChooseGift.js
var ChooseGift_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-param-reassign */

/* eslint-disable react/prop-types */













function ChooseGift({
  catalogFilterSetValuesAction,
  price,
  getEvent
}) {
  const {
    messages
  } = Object(external_react_intl_["useIntl"])();
  const {
    0: values,
    1: setValues
  } = Object(external_react_["useState"])({
    price: [...price],
    gender: [],
    age: [],
    meaning: [],
    isUserFilter: true
  });
  const router = Object(router_["useRouter"])();

  function goToCatalogWithFilterdValues() {
    catalogFilterSetValuesAction(values);
    router.push('/catalog');
  }

  Object(external_react_["useEffect"])(() => {
    if (getEvent) {
      getEvent.onClick = goToCatalogWithFilterdValues;
    }
  }, [values]);

  function choseAge({
    target
  }) {
    const {
      value
    } = target.closest('button');
    const newValue = [];
    if (value !== values.age[0]) newValue.push(value);
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      age: newValue
    }));
  }

  function choseGender({
    target: {
      value
    }
  }) {
    const newValue = [];
    if (value !== values.gender[0]) newValue.push(value);
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      gender: newValue
    }));
  }

  function choseMeaning(value) {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      meaning: [value]
    }));
  }

  function changePrice(value) {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      price: value
    }));
  }

  return ChooseGift_jsx("div", {
    id: "choose_gift_section"
  }, ChooseGift_jsx("div", {
    className: "heading"
  }, ChooseGift_jsx("div", {
    className: "container"
  }, ChooseGift_jsx("h2", {
    className: "section_title"
  }, messages['local.choose_gift']))), ChooseGift_jsx("div", {
    className: "choose_gift_wrapper"
  }, ChooseGift_jsx("div", {
    className: "container"
  }, ChooseGift_jsx(row_default.a, {
    gutter: 15
  }, ChooseGift_jsx(col_default.a, {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 8,
    xxl: 9,
    className: "choose_age clearfix"
  }, ChooseGift_jsx("h3", null, messages['local.select_age']), ChooseGift_jsx(ChooseAge["a" /* default */], {
    onClick: choseAge,
    selected: values.age[0]
  })), ChooseGift_jsx(col_default.a, {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 4,
    xxl: 5,
    className: "choose_gender clearfix"
  }, ChooseGift_jsx("h3", null, messages['local.select_gender']), ChooseGift_jsx(home_ChooseGender, {
    handelChange: choseGender,
    selected: values.gender[0]
  })), ChooseGift_jsx(PriceSlider["a" /* default */], {
    price: price,
    handleChange: changePrice,
    messages: messages,
    mod: "Home"
  }), ChooseGift_jsx(col_default.a, {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 6,
    xxl: 5,
    className: "meaning clearfix"
  }, ChooseGift_jsx("h3", null, messages['local.meaning']), ChooseGift_jsx(home_ChooseMeaning, {
    handleChange: choseMeaning
  }), ChooseGift_jsx("a", {
    onClick: goToCatalogWithFilterdValues
  }, ChooseGift_jsx(button_default.a, {
    type: "primary"
  }, messages['local.search'])))))));
}

function pamStateToProps({
  catalogFilter: {
    price,
    gender
  }
}) {
  return {
    price,
    gender
  };
}

/* harmony default export */ var home_ChooseGift = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(pamStateToProps, {
  catalogFilterChangeAction: catalog_filter_action["a" /* catalogFilterChange */],
  catalogFilterSetValuesAction: catalog_filter_action["d" /* catalogFilterSetValues */]
})(ChooseGift));

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