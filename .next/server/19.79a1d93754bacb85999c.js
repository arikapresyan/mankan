exports.ids = [19];
exports.modules = {

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0iQ5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_main_search_MainSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dI4Y");
/* harmony import */ var _store_search_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("RHPr");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function MobileSearch() {
  const {
    messages
  } = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["useIntl"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  const searchProductAction = params => {
    dispatch(Object(_store_search_action__WEBPACK_IMPORTED_MODULE_4__[/* searchProduct */ "a"])(params));
  };

  return __jsx("div", {
    className: "mobile_search"
  }, __jsx(_common_main_search_MainSearch__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    enterButton: false,
    className: "header_search",
    placeholder: messages['local.search'],
    onSearch: searchProductAction
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (MobileSearch);

/***/ }),

/***/ "2Mik":
/***/ (function(module, exports) {



/***/ }),

/***/ "5cB8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vEvA");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pagesLoader_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2Mik");
/* harmony import */ var _pagesLoader_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pagesLoader_less__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PagesLoader = () => __jsx("div", {
  className: "page_load_container"
}, __jsx("div", null, __jsx(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, null)));

/* harmony default export */ __webpack_exports__["a"] = (PagesLoader);

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7rla":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mobile_search_MobileSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0iQ5");
/* harmony import */ var _catalog_index_filter_list_IndexFilterList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ekL+");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import Context from '../../../Context';

function FilterListWrapper({
  isFilterListOpen
}) {
  return __jsx("div", {
    className: `filter_wrapper_mobile ${isFilterListOpen ? 'is_open' : ''}`
  }, __jsx(_mobile_search_MobileSearch__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), __jsx(_catalog_index_filter_list_IndexFilterList__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    mode: "mobile"
  }));
}

function mapStateToProps({
  userEventListeners: {
    isVisible: {
      isFilterListOpen
    }
  }
}) {
  return {
    isFilterListOpen
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(FilterListWrapper));

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "CosU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tI3Q");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JCEF");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ShowMoreItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("NNEB");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function BrandFilter({
  brand,
  onChange,
  brands
}) {
  const {
    messages
  } = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["useIntl"])();
  const itemsCount = Object.keys(brands).length;
  const {
    0: limit,
    1: setLimit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(10);

  const showMore = () => {
    setLimit(limit + 10);
  };

  return __jsx("div", {
    className: "sidebar_info_box"
  }, __jsx("h2", {
    className: "sidebar_info_title"
  }, messages['local.brand']), __jsx("div", {
    className: "option_list"
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a.Group, {
    value: brand,
    onChange: onChange,
    className: "brands"
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, null, brands.map(({
    id,
    name
  }, index) => index < limit ? __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: `${id} brands`,
    value: `${id}`
  }, name) : null), __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a, {
    value: "all"
  }, messages['local.all']))), __jsx(_ShowMoreItems__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    handleClick: showMore,
    moreItems: itemsCount - limit
  })));
}

function pamStateToProps({
  catalogFilter: {
    brand
  }
}) {
  return {
    brand
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(pamStateToProps)(BrandFilter));

/***/ }),

/***/ "JqoG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tI3Q");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JCEF");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ShowMoreItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("NNEB");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function MeaningFilter({
  meaning,
  onChange,
  meanings
}) {
  const {
    messages
  } = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["useIntl"])();
  const itemsCount = Object.keys(meanings).length;
  const {
    0: limit,
    1: setLimit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(10);

  const showMore = () => {
    setLimit(limit + 10);
  };

  return __jsx("div", {
    className: "sidebar_info_box"
  }, __jsx("h2", {
    className: "sidebar_info_title"
  }, messages['local.meaning']), __jsx("div", {
    className: "option_list"
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a.Group, {
    value: meaning.map(a => `${a}`),
    onChange: onChange,
    className: "toy_meaning"
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, null, meanings.map(({
    id,
    name
  }, index) => index < limit ? __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: `${id} meaning`,
    value: `${id}`
  }, name) : null), __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a, {
    value: "all"
  }, messages['local.all'])))), __jsx(_ShowMoreItems__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    handleClick: showMore,
    moreItems: itemsCount - limit
  }));
}

function pamStateToProps({
  catalogFilter: {
    meaning
  }
}) {
  return {
    meaning
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(pamStateToProps)(MeaningFilter));

/***/ }),

/***/ "L/e8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__("BWRB");
var icon_default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./components/mobile/mobile-search/MobileSearch.js
var MobileSearch = __webpack_require__("0iQ5");

// EXTERNAL MODULE: ./store/userEventListeners/action.js
var action = __webpack_require__("ss5K");

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__("a5Fm");
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: ./store/global-Information-Router/action.js
var global_Information_Router_action = __webpack_require__("oWHS");

// EXTERNAL MODULE: ./store/menu-list/action.js
var menu_list_action = __webpack_require__("ynhf");

// CONCATENATED MODULE: ./components/mobile/constants.js
// import MenuIcon5 from '../../assets/images/category/mobile/icon5.png';
// import MenuIcon1 from '../../assets/images/category/mobile/icon1.png';
// import MenuIcon2 from '../../assets/images/category/mobile/icon2.png';
// import MenuIcon3 from '../../assets/images/category/mobile/icon3.png';
// import MenuIcon4 from '../../assets/images/category/mobile/icon4.png';
const getMobileMenuLinks = () => [{
  title: 'local.general_assortment',
  icon: '/images/category/mobile/icon5.png',
  name: '',
  href: ''
}, {
  title: 'local.to_boys',
  icon: '/images/category/mobile/icon1.png',
  name: 'boys',
  href: '?gender=BOY'
}, {
  title: 'local.to_girls',
  icon: '/images/category/mobile/icon2.png',
  name: 'girls',
  href: '?gender=GIRL'
}, {
  title: 'local.to_infants',
  icon: '/images/category/mobile/icon3.png',
  name: 'infants',
  href: '?age=1'
}, {
  title: 'local.own_products',
  icon: '/images/category/mobile/icon4.png',
  name: 'ownProduct',
  href: '?brand=1'
}];
// EXTERNAL MODULE: ./constants/footerConstants.js
var footerConstants = __webpack_require__("WmTK");

// CONCATENATED MODULE: ./components/mobile/category-menu-mobile/CategoryMenuMobile.js
var __jsx = external_react_default.a.createElement;

/* eslint-disable react/no-array-index-key */











const {
  SubMenu
} = menu_default.a;

function CategoryMenuMobileContent({
  showAction,
  changeGlobalInformationRouterAction,
  toggleVisibilityAction,
  getMenuListAction
}) {
  const {
    messages
  } = Object(external_react_intl_["useIntl"])();
  const router = Object(router_["useRouter"])();

  const setCategorySubMenuVisibility = ({
    name,
    subType,
    href
  }) => {
    showAction({
      name: 'isCategorySubMenuOpen'
    });
    changeGlobalInformationRouterAction({
      mobyle_submenu_info: {
        name,
        subType,
        href
      }
    });
    getMenuListAction({
      name
    });
  };

  const subMenusArray = Object(external_react_["useMemo"])(() => getMobileMenuLinks(), []);
  const subTypesArray = Object(external_react_["useMemo"])(() => ['type', 'age', 'brand', 'meaning'], []);
  const translationNames = {
    type: 'local.type',
    age: 'local.select_by_age',
    brand: 'local.select_by_brand',
    meaning: 'local.meaning'
  };
  const menuFooter = Object(external_react_["useMemo"])(() => Object(footerConstants["a" /* getFooterContent */])(messages, {
    openSuggestionsModal: () => toggleVisibilityAction({
      name: 'suggestionVisible'
    }),
    openFidBackModal: () => toggleVisibilityAction({
      name: 'callbackVisible'
    })
  }));
  return __jsx("div", {
    className: "category_menu_mobile"
  }, __jsx(menu_default.a, {
    mode: "inline",
    selectedKeys: []
  }, subMenusArray.map((subMenu, index) => __jsx(SubMenu, {
    key: `__sub1${index}` // onTitleClick={
    //   () => {
    //     router.push(`/catalog/${subMenu.href}`);
    //   }
    // }
    ,
    title: __jsx("span", null, __jsx("span", {
      className: "menu_icon"
    }, __jsx("img", {
      src: subMenu.icon,
      alt: ""
    })), __jsx("span", {
      className: "cat_name"
    }, messages[subMenu.title]), __jsx(icon_default.a, {
      className: "arrow_icon",
      type: "right"
    }))
  }, subTypesArray.map((subType, childeIndex) => __jsx(menu_default.a.Item, {
    key: `1.${childeIndex}`,
    onClick: () => {
      setCategorySubMenuVisibility({
        name: subMenu.name,
        subType,
        href: subMenusArray[index].href
      });
    }
  }, messages[`${translationNames[subType]}`])))), __jsx(SubMenu, {
    key: "__sub6",
    onTitleClick: () => {
      router.push('/catalog?classification=isNew');
    },
    title: __jsx("span", null, __jsx("span", {
      className: "menu_icon"
    }, __jsx("img", {
      src: "/images/category/mobile/icon7.png",
      alt: ""
    })), messages['local.news'], __jsx(icon_default.a, {
      className: "arrow_icon",
      type: "right"
    }))
  }), __jsx(SubMenu, {
    key: "__sub7",
    onTitleClick: () => {
      router.push('/catalog?classification=percent');
    },
    title: __jsx("span", null, __jsx("span", {
      className: "menu_icon"
    }, __jsx("img", {
      src: "/images/category/mobile/icon6.png",
      alt: ""
    })), messages['local.discounts'], __jsx(icon_default.a, {
      className: "arrow_icon",
      type: "right"
    }))
  }), __jsx(SubMenu, {
    key: "__sub8",
    onTitleClick: () => {
      router.push('/catalog?classification=bestSeller');
    },
    title: __jsx("span", null, __jsx("span", {
      className: "menu_icon"
    }, __jsx("img", {
      src: "/images/category/mobile/icon9.png",
      alt: ""
    })), messages['local.best_selling'], __jsx(icon_default.a, {
      className: "arrow_icon",
      type: "right"
    }))
  })), __jsx(menu_default.a, {
    mode: "inline",
    selectedKeys: []
  }, menuFooter.map(({
    text,
    handleClick,
    link,
    icon
  }, index) => __jsx(SubMenu, {
    className: index === 0 && 'menu_divider',
    key: `__sub10${index}`,
    onTitleClick: handleClick || (() => {
      router.push(link);
    }),
    title: __jsx("span", null, __jsx("span", {
      className: "menu_icon"
    }, __jsx("img", {
      src: icon,
      alt: ""
    })), __jsx("a", {
      className: "cat_name"
    }, text), __jsx(icon_default.a, {
      className: "arrow_icon",
      type: "right"
    }))
  }))));
}

/* harmony default export */ var CategoryMenuMobile = (Object(external_react_redux_["connect"])(null, {
  showAction: action["c" /* show */],
  changeGlobalInformationRouterAction: global_Information_Router_action["a" /* changeGlobalInformationRouter */],
  toggleVisibilityAction: action["d" /* toggleVisibility */],
  getMenuListAction: menu_list_action["a" /* getMenuList */]
})(CategoryMenuMobileContent));
// CONCATENATED MODULE: ./components/mobile/category-menu-mobile/CategoryMenuContent.js
var CategoryMenuContent_jsx = external_react_default.a.createElement;









function CategoryMenuContent({
  isCategoryMenuOpen,
  authSuccess,
  showAction
}) {
  const {
    messages
  } = Object(external_react_intl_["useIntl"])();
  const isOpen = Object(external_react_["useMemo"])(() => isCategoryMenuOpen ? 'is_open' : '', [isCategoryMenuOpen]);
  const handleClick = Object(external_react_["useCallback"])(() => authSuccess ? router_default.a.push('/profile') : showAction({
    name: 'loginVisible'
  }), [authSuccess]);
  return CategoryMenuContent_jsx("div", {
    className: `category_menu_content ${isOpen}`
  }, CategoryMenuContent_jsx(MobileSearch["a" /* default */], null), CategoryMenuContent_jsx("div", {
    className: "go_to_profile",
    onClick: handleClick
  }, CategoryMenuContent_jsx("span", null, messages['local.my_page']), CategoryMenuContent_jsx(icon_default.a, {
    type: "right"
  })), CategoryMenuContent_jsx(CategoryMenuMobile, null));
}

function mapStateToProps({
  userEventListeners: {
    isVisible: {
      isCategoryMenuOpen
    }
  },
  user: {
    authSuccess
  }
}) {
  return {
    isCategoryMenuOpen,
    authSuccess
  };
}

/* harmony default export */ var category_menu_mobile_CategoryMenuContent = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(mapStateToProps, {
  showAction: action["c" /* show */]
})(CategoryMenuContent));

/***/ }),

/***/ "NNEB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("BWRB");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ShowMoreItems({
  moreItems,
  handleClick
}) {
  const {
    messages
  } = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["useIntl"])();
  return moreItems >= 1 && __jsx("div", {
    className: "open_more",
    onClick: handleClick
  }, __jsx("span", null, messages['local.see_more'], ' ', `(${moreItems})`, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "down"
  })));
}

/* harmony default export */ __webpack_exports__["a"] = (ShowMoreItems);

/***/ }),

/***/ "QsFI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tI3Q");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JCEF");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function GenderFilter({
  gender,
  onChange,
  genderFilter
}) {
  const {
    messages
  } = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["useIntl"])();
  return __jsx("div", {
    className: "sidebar_info_box"
  }, __jsx("h2", {
    className: "sidebar_info_title"
  }, messages['local.gender']), __jsx("div", {
    className: "option_list"
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a.Group, {
    value: gender,
    onChange: onChange,
    className: "gender"
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, null, genderFilter.find(({
    sex
  }) => sex === 'BOY' || sex === 'ALL') && __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a, {
    value: "BOY"
  }, messages['local.boy']), genderFilter.find(({
    sex
  }) => sex === 'GIRL' || sex === 'ALL') && __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a, {
    value: "GIRL"
  }, messages['local.girl']), __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a, {
    value: "ALL"
  }, messages['local.all'])))));
}

function pamStateToProps({
  catalogFilter: {
    gender
  }
}) {
  return {
    gender
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(pamStateToProps)(GenderFilter));

/***/ }),

/***/ "SE09":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./components/mobile/category-menu-mobile/CategoryMenuContent.js + 2 modules
var CategoryMenuContent = __webpack_require__("L/e8");

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__("BWRB");
var icon_default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: ./components/mobile/mobile-search/MobileSearch.js
var MobileSearch = __webpack_require__("0iQ5");

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__("a5Fm");
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./store/userEventListeners/action.js
var action = __webpack_require__("ss5K");

// CONCATENATED MODULE: ./components/mobile/category-menu-mobile/CategorySubmenuMobile.js
var __jsx = external_react_default.a.createElement;







const {
  SubMenu
} = menu_default.a;

function CategorySubmenu({
  hideAllAction,
  globalInformationRouter: {
    mobyle_submenu_info: mobyleSubmenuInfo
  },
  menuList
}) {
  const {
    subType,
    href
  } = mobyleSubmenuInfo || {};
  const {
    0: openKeys,
    1: setOpenKeys
  } = Object(external_react_["useState"])([]);
  const subKey = `mobile_sub_filters${subType}`;
  Object(external_react_["useEffect"])(() => {
    setOpenKeys([subKey]);
  }, [subType]);
  const {
    messages
  } = Object(external_react_intl_["useIntl"])();
  const productsObject = menuList.data; // type age brand meaning

  const subMenuArray = Object(external_react_["useMemo"])(() => productsObject ? [{
    headingName: messages['local.type'],
    products: productsObject.type,
    linkPart: 'type'
  }, {
    headingName: messages['local.select_by_age'],
    products: productsObject.age.map(({
      name,
      text,
      id
    }) => ({
      id,
      name: `${name} ${messages['local.years']}`,
      text: `${text} ${messages['local.years']}`
    })),
    linkPart: 'age'
  }, {
    headingName: messages['local.select_by_brand'],
    products: productsObject.brand,
    linkPart: 'brand'
  }, {
    headingName: messages['local.meaning'],
    products: productsObject.meaning,
    linkPart: 'meaning'
  }] : [], [productsObject, messages]);

  const closeAllSideBars = () => {
    hideAllAction();
  };

  return __jsx("div", {
    className: "subcategory_menu"
  }, menuList.loading ? 'loading' : __jsx(menu_default.a, {
    onOpenChange: setOpenKeys,
    mode: "inline",
    openKeys: openKeys
  }, __jsx(menu_default.a.Item, {
    key: "1",
    onClick: closeAllSideBars
  }, __jsx(link_default.a, {
    href: `/catalog${href || ''}`
  }, __jsx("a", null, messages['local.all_of']))), subMenuArray.map(({
    products,
    headingName,
    linkPart
  }, parentIndex) => __jsx(SubMenu, {
    key: `mobile_sub_filters${linkPart}`,
    title: __jsx("span", null, __jsx("span", {
      className: "cat_name"
    }, headingName), __jsx(icon_default.a, {
      className: "arrow_icon",
      type: "right"
    }))
  }, subType && products.map((product, index) => __jsx(menu_default.a.Item, {
    key: `mobile_sub_filters${linkPart}${parentIndex}.${index}`
  }, __jsx(link_default.a, {
    href: `catalog${href ? `${href}&` : '?'}${linkPart}=${product.id}`
  }, __jsx("a", {
    onClick: hideAllAction
  }, product.name))))))));
}

function mapStateToProps({
  globalInformationRouter,
  menuList
}) {
  return {
    globalInformationRouter,
    menuList
  };
}

/* harmony default export */ var CategorySubmenuMobile = (Object(external_react_redux_["connect"])(mapStateToProps, {
  hideAllAction: action["b" /* hideAll */]
})(CategorySubmenu));
// CONCATENATED MODULE: ./components/mobile/category-menu-mobile/CategorySubmenuContent.js
var CategorySubmenuContent_jsx = external_react_default.a.createElement;





 // import Context from '../../../Context';



function CategorysubmenuContent({
  isCategorySubMenuOpen,
  hideAction
}) {
  const {
    messages
  } = Object(external_react_intl_["useIntl"])();
  return CategorySubmenuContent_jsx("div", {
    className: `category_submenu_content ${isCategorySubMenuOpen ? 'is_open' : ''}`
  }, CategorySubmenuContent_jsx(MobileSearch["a" /* default */], null), CategorySubmenuContent_jsx("div", {
    className: "go_back",
    onClick: () => hideAction({
      name: 'isCategorySubMenuOpen'
    })
  }, CategorySubmenuContent_jsx(icon_default.a, {
    type: "left"
  }), CategorySubmenuContent_jsx("span", null, messages['local.back'])), CategorySubmenuContent_jsx(CategorySubmenuMobile, null));
}

function CategorySubmenuContent_mapStateToProps({
  userEventListeners: {
    isVisible: {
      isCategorySubMenuOpen
    }
  }
}) {
  return {
    isCategorySubMenuOpen
  };
}

/* harmony default export */ var CategorySubmenuContent = (Object(external_react_redux_["connect"])(CategorySubmenuContent_mapStateToProps, {
  hideAction: action["a" /* hide */]
})(CategorysubmenuContent));
// EXTERNAL MODULE: ./components/mobile/filter-list-sidebar/FilterListWrapper.js
var FilterListWrapper = __webpack_require__("7rla");

// CONCATENATED MODULE: ./staticText/messages.js
/* harmony default export */ var staticText_messages = ({
  ARM: {
    'local.job_responsibilities': 'Job Responsibilities',
    'local.necessary_skills': 'Necessary Skills',
    'local.filter': 'ֆիլտր',
    'local.endpoint': 'Ավարտ ',
    'local.about_us': 'Մեր մասին',
    'local.sm': 'սմ',
    'local.shortYear': 'տ',
    'local.payment_delivery_return': 'Վճարում / Առաքում / Վերդադարձ ',
    'local.feedback': 'Հետադարձ կապ',
    'local.complain_suggestion': 'Առաջարկ / Բողոք',
    'local.our_addresses': 'Մասնաճյուղեր',
    'local.login': 'Մուտք',
    'local.login1': 'Մուտք',
    'local.registration': 'Գրանցում',
    'local.registration1': 'Մուտք',
    'local.name': 'Անուն',
    'local.last_name': 'Ազգանուն',
    'local.email': 'Էլ.հասցե',
    'local.tel': 'Հեռ.',
    'local.password': 'Գաղտնաբառ',
    'local.repeat_password': 'Կրկնել գաղտնաբառը',
    'local.send': 'Ուղարկել',
    'local.remember': 'Հիշել',
    'local.forgot_password': 'Մոռացել եք գաղտնաբառը՞',
    'local.password_recovery': 'Գաղտնաբառի վերականգնում ',
    'local.will_send_new_password': 'Հաշված րոպեների ընթացքում Ձեր էլ․ հասցեին կուղարկենք գաղտնաբառի վերականգնման պատուհան։ ',
    'local.search': 'Փնտրել',
    'local.suggestion': 'Առաջարկ',
    'local.complaint': 'Բողոք ',
    'local.write_offer': 'Գրել առաջարկ',
    'local.write_complaint': 'Գրել Բողոք',
    'local.news': 'Նորույթներ',
    'local.select_by_age': 'Ընտրել ըստ տարիքի ',
    'local.select_by_brand': 'Ընտրել ըստ Բրենդի ',
    'local.discounted_assortment': 'Զեղչված տեսականի',
    'local.own_products': 'Սեփական արտադրանք',
    'local.choose_gift': 'Ընտրել նվեր',
    'local.view_more': 'Տեսնել ավելին',
    'local.select_age': 'Տարիք',
    'local.select_gender': 'Սեռ',
    'local.specify_price': 'Գին',
    'local.meaning': 'Ընտրել ըստ օգտակարության',
    'local.not_specifiedе': 'Օգտակարություն',
    'local.best_selling': 'Լավագույն վաճառք',
    'local.best_selling1': 'Լավագույն վաճառք',
    'local.extra': 'Հավելյալ',
    'local.buy': 'Գնել',
    'local.buy_now': 'Գնել հիմա',
    'local.add_to_cart': 'Ավելացնել զամբյուղ',
    'local.price': 'Գին',
    'local.quantity': 'Քանակ',
    'local.bonus': 'Բոնուս',
    'local.size': 'Չափս',
    'local.age': 'Տարիք',
    'local.brand': 'Բրենդ',
    'local.shops': 'Խանութներ',
    'local.information': 'Տեղեկատվություն',
    'local.sign_up_get_updates': 'Գրանցվել նորույթներին ծանոթանալու համար',
    'local.register': 'Գրանցվել',
    'local.for_boys': 'Տղաների համար',
    'local.boy': 'Տղա',
    'local.boy1': 'Տղաներին',
    'local.for_girls': 'Աղջիկների համար',
    'local.girl': 'Աղջիկ',
    'local.girl1': 'Աղջիկներին',
    'local.all': 'Բոլորը',
    'local.type': 'Ընտրել ըստ տեսակի',
    'local.to_boys': 'Տղաներին',
    'local.to_girls': 'Աղջիկներին',
    'local.to_infants': 'Նորածիններին',
    'local.discounts': 'Զեղչեր',
    'local.months': 'ամսեկան',
    'local.years': 'տարեկան',
    'local.year_short': 'տ.',
    'local.name_surname': 'Անուն Ազգանուն',
    'local.message': 'Հաղորդագրություն',
    'local.payment': 'Վճարում',
    'local.delivery': 'Կառաքվի',
    'local.delivery_price': 'Առաքում',
    'local.return': 'Վերդադարձ',
    'local.mon_fri': 'Երկուշաբթիից - շաբաթ',
    'local.kiosk': 'տաղավար',
    'local.abovyans': 'Ք․ Երևան Աբովյան 36 փող',
    'local.mashtots': 'Ք․ Երևան Մաշտոցի 24 պող․',
    'local.ulnetsi': 'Ք․ Երևան Ուլնեցի 70 փող․',
    'local.dalma': 'Ք․ Երևան Դալմա Գարդեն Մոլ',
    'local.see_more': 'Տեսնել ավելին',
    'local.my_basket': 'Իմ զամբյուղը',
    'local.branded_paper_bags': 'Բրենդային թղթե տոպրակներ',
    'local.specification': 'Դասակարգում',
    'local.new_products': 'Նորույթներ',
    'local.price_by_increase': 'Գինը ըստ աճման',
    'local.all_of': 'Ամբողջը',
    'local.gender': 'Սեռ',
    'local.viewed_products': 'Դիտված ապրանքներ',
    'local.add_batteries': 'Ավելացնել մարտկոցներ',
    'local.technical_specifications': 'Տեխնիկական նկարագիր',
    'local.description': 'Նկարագրություն',
    'local.battery': 'Մարտկոց',
    'local.item(s)': 'հատ',
    'local.usefulness': 'Օգտակարություն',
    'local.accompanying_products': 'Ուղեկցող ապրանքներ',
    'local.similar_products': 'Նմանատիպ ապրանքներ',
    'local.discount_size': 'Հասանելի բոնուսի չափը',
    'local.my_orders': 'Իմ պատվերները ',
    'local.my_profile': 'Իմ պրոֆիլը',
    'local.personal_info': 'Անձնական տվյալներ',
    'local.exit': 'Ելք',
    'local.change_password': 'Փոխել գաղտնաբառը',
    'local.repeat_new_password': 'Կրկնել նոր գաղտնաբառը',
    'local.confirm_changes': 'Հաստատել փոփոխությունները',
    'local.money_accumulated': 'Կուտակված միավորներ',
    'local.order_again': 'Պատվիրել նորից',
    'local.job_announcements': 'Աշխատանք մեզ մոտ',
    'local.product_available': 'Ապրանքը հասանելի է',
    'local.date_of_purchase': 'Գնման ամսաթիվ',
    'local.total': 'Ընդամենը',
    'local.products': 'ապրանք',
    'local.promo_code': 'Պրոմո կոդ',
    'local.today': 'Այսօր',
    'local.tomorrow': 'Վաղը',
    'local.confirm_order': 'Հաստատել',
    'local.final_settlement': 'Վերջնահաշվարկ',
    'local.fill_in_the_data': 'Առաքման տվյալներ',
    'local.km': 'կմ',
    'local.dr': 'դր',
    'local.mobile_phone': 'Բջջային հեռախոս',
    'local.city_street': 'Փողոց / Շենք',
    'local.apartment_house': 'Բնակարան / Տուն ',
    'local.enter': 'Մուտք',
    'local.delivery_period': 'Առաքման ժամանակահատված ',
    'local.payment_method': 'Վճարման եղանակ',
    'local.cash': 'Կանխիկ',
    'local.credit_card': 'Բանկային քարտ ',
    'local.bonus_Wey': 'Բոնուսով',
    'local.add': 'Ավելացնել',
    'local.download_picture': 'Կցել լուսանկար',
    'local.online_application': 'Առցանց դիմում',
    'local.knowledge_of_languages': 'Լեզուների իմացություն',
    'local.Armenian': 'Հայերեն',
    'local.Choose_from_a_5_point': 'Տիրապետման աստիճան',
    'local.add_another_language': 'Ավելացնել',
    'local.education': 'Կրթություն',
    'local.still_learning': 'Դեռ սովորում եմ ',
    'local.add_another_educational_complex': 'Ավելացնել',
    'local.professional_experience': 'Աշխատանքային փորձ ',
    'local.company': 'Ընկերություն',
    'local.ex.Mankan': 'Օր․ Մանկան ',
    'local.position': 'Պաշտոն',
    'local.ex.cashier': 'Օր․ Գանձապահ',
    'local.startpoint': 'Սկիզբ',
    'local.still_working': 'Դեռ աշխատում եմ ',
    'local.add_other_business_exp': 'Ավելացնել',
    'local.software_skills': 'Ծրագրային հմտություններ',
    'local.project_name': 'Ծրագրի անուն',
    'local.day': 'Օր',
    'local.preferences': 'Նախասիրություններ',
    'local.add_another_favorite': 'Ավելացնել',
    'local.social_networks': 'Սոցիալական ցանցեր',
    'local.ex.facebook': 'Օր․ facebook',
    'local.add_another_social': 'Ավելացնել',
    'local.expect_from_our_team': 'Ինչ՞ ակնկալիքներ ունեք մեր թիմում աշխատելուց:',
    'local.write_a_review': 'Գրել պատասխան',
    'local.confirm': 'Հաստատել',
    'local.degree_of_education': 'Կրթության աստիճան ',
    'local.ex.bachelor': 'Օր․ բակալավր ',
    'local.educational_complex': 'Կրթական համալիր',
    'local.ex.YSU': 'Օր․ԵՊՀ',
    'local.faculty': 'Ֆակուլտետ',
    'local.ex.economics': 'Օր․ Տնտեսագիտական',
    'local.ex.word': 'Օր․ Word',
    'local.future_position': 'Որ՞ պաշտոնում եք ձեզ տեսնում ապագայում',
    'local.attach': 'Կցել',
    'local.apply_online': 'Դիմել օնլայն',
    'local.download_CV_using_formats': 'Ներբեռնել CV֊ին PDF, MS Word կամ JPG ֆորմատով',
    'local.ex.reading': 'Օր․ ընթերցանություն',
    'local.free_shipping_message': '{price}  և ավել գնումների դեպքում առաքումը իրականացվում է անվճար',
    'local.more_percents_message': 'Կատարեք ևս {price} դրամի գնումներ և {last_percent} % -ի փոխարեն կուտակեք {new_percent} % բոնուս:',
    'local.can_use_bonus_if': 'Գրանցվեք, կուտակեք բոնուսներ և կատարեք գնումներ կուտկված միավորներով։',
    'local.back': 'Հետ',
    'local.general_assortment': 'Ընդհանուր տեսականի',
    'local.my_page': 'Իմ էջը',
    'local.out_of_stock': 'Առկա չէ',
    'local.vacancies': 'Աշխատատեղեր',
    'local.confirmEmail': 'Խնդրում ենք հաստատել էլ-հասցեն',
    'local.enter_your_email': 'Մուտքագրեք Էլ-հասցեն',
    'local.enter_your_password': 'Մուտքագրեք գաղտնաբառը',
    'local.required': 'Պարտադիր դաշտ',
    'local.wrong_email_or_password': 'Սխալ Էլ-հասցե կամ գաղտնաբառ, խնդրում ենք փորձել կրկին։',
    'local.invalid_email': 'Խնդրում ենք մուտքագրել ճիշտ էլ-հասցե',
    'local.enter_your_name': 'Մուտքագրեք ձեր անունը',
    'local.enter_your_surname': 'Մուտքագրեք ձեր ազգանունը',
    'local.enter_your_number': 'Մուտքագրեք ձեր հեռախոսահամարը',
    'local.invalid_field': 'Սխալ մուտքագրված դաշտ',
    'local.passwords_must_match': 'Գաղտնաբառերը չեն համընկնում',
    'local.password_min_length': 'Խնդրում ենք մուտքագրել առնվազն 6 նիշ',
    'local.must_accept_terms_and_conditions': 'Խնդրում ենք ընդունել Ծառայության պայմանները և Գաղտնիության քաղաքականությունը:',
    'local.i_have_read_and_agree': 'Կարդացել եմ և ընդունում եմ {termsOfService}',
    'local.terms_of_service': 'Ծառայության պայմանները',
    'local.privacy_policy': 'Գաղտնիության քաղաքականությունը:',
    'local.discount_price': 'Զեղչված գին',
    'local.enter_your_fullname': 'Մուտքագրեք ձեր անուն, ազգանունը',
    'local.min_3_symbols': 'Խնդրում ենք մուտքագրել առնվազն 3 նիշ',
    'local.upload_img': 'Խնդրում ենք ներբեռնել նկար',
    'local.successText': 'Հաջողությամբ կատարված է!',
    'local.errorText': 'Ինչ որ բան այն չէ',
    'local.loadingText': 'Բեռնում է...',
    'local.email_already_exist': 'Նշված էլ-հասցեն արդեն գրանցված է',
    'local.sign_up_for_bonus': 'Գրանցվեք, կուտակեք բոնուսներ և կատարեք գնումներ կուտակված միավորներով:',
    'local.follow_us_for_promo': 'Հետևեք մեր նորություններին, ստացեք պրոմո կոդեր և կատարեք գնումներ զեղչված գնով:',
    'local.not_enough_bonus': 'Միավորների քանակը  բավարար չէ:',
    'local.about-us': {
      title1: 'title arm',
      title2: 'title arm',
      text1: {
        p1: '«Մանկան»-ի պատմությունը սկսվում է 1992 թվականից, երբ Վարուժան Գյուրջյանը աշխատում էր Երևանի «Առևտրի կենտրոն» հանրախանութում: Կենտրոնը չուներ խաղալիքների խանութ, և հանրախանութի տնօրենը առաջարկում է պարոն Վարուժանին  բացել խաղալիքների բաժին և ղեկավարել այն: Պրն. Գյուրջյանը ունենալով միայն պլաստիկ խաղալիքների արտադրության  գործարանում աշխատանքի փորձ՝ ուսանողական տարիներին, բացում է խաղալիքների բաժինը: Առևտուրը կազմակերպելու համար բավականին մեծ դժվարությամբ խաղալիքներ էին հայթայթում Հայաստանում և Ռուսաստանում:',
        p2: '1993 թ. հնարավոր դարձավ ապրանքներ ներմուծել արտերկրից: Որոշ ժամանակ անց պարոն Վարուժանը սպառումը ընդլայնելու նպատակով որոշում է հիմնել իր սեփական ընկերությունը: ',
        p3: '1998թ-ի հունիսին հիմնվում է «Մանկան» ՍՊԸ-ն և Մաշտոցի 24 հասցեում բացվում է համանուն խաղալիքների մասնագիտացված խանութ, որը ընձեռնում է անմիջականորեն ընդլայնել սպառումը արտադրող-գործընկերների հետ: «Մանկան» անունը ընտրվեց շատ արագ: Պարոն Վարուժանը ցանկանում էր, որ այդ անունը դյուրին ընդունելի և հասկանալի լինի սպառողների համար:'
      },
      text2: {
        p1: 'Հայաստանում փափուկ խաղալիքների պահանջարկը գնալով աճում էր: Տարիների աշխատանքային փորձը, անընդհատ ինքնազարգացման ձգտումը, ինչպես նաև նոր աշխատատեղեր ստեղծելու ցանկությունը պարոն Գյուրջյանին  գաղափար տվեցին բացել փափուկ խաղալիքներ արտադրելու սեփական գործարանը: Հաջողությունը նրա հետ էր, և 2000թ-ին իր տան հարևանությամբ ՝ Զավարյան 57/19 հասցեում ձեռք բերեց արտադրական տարածք, գաղափարը իրականացնելու համար: Արտադրությունը սկսեցին մեկ կարի մեքենայով և մեկ աշխատողով:',
        p2: 'Վարուժան Գյուրջյանը սկսեց ճանապարհորդել աշխարհով մեկ ՝ փնտրելով և այցելելով խաղալիքներ արտադրող գործարաններ, ընթացքում դառնալով ավելի ինֆորմացված և ավելի զարգացնելով գիտելիքները: Զբաղված խանութով և գործարանով, 2002-ին Աբովյան 36 հասցեում բացվում է երկրորդ համանուն խանութը: Այդ ընթացքում մարդիկ ավելի շատ էին սկսում ճանաչել «Մանկան» - ը, և ապրանքանիշի խաղալիքներն օր օրի ավելի էին սիրվում: 2012 թվականին Երևանում բացվում է առաջին առևտրի կենտրոնը ` «Դալմա Գարդեն Մոլլ» անվանվամբ: «Մանկան» մասնագիտացված խաղալիքների խանութը դառնում է «Դալմա Գարդեն Մոլլ»-ի առաջին բնակիչներից մեկը:',
        p3: 'Մինչդեռ, ունենալով արդեն  3 մասնագիտացված խաղալիքների խանութներ, արտադրամասը այլևս չէր համապատասխանում իր տարածքով։ Հետևաբար, պարոն Գյուրջյանը որոշում է զրոյից կառուցել նոր արտադրամաս:',
        p4: '2016թ-ին արտադրամասը տեղափոխվում է նոր հասցե ՝ Կ.Ուլնեցի 70: Նոր արտադրամասը ավելի ընդարձակ է և կոկիկ։ Այն հագեցած է վերջին տեխնոլոգիաներով, որը հնարավորություն է տալիս կազմակերպել արտադրական պրոցեսը և ավելի արդյունավետորեն ընդլայնվել ծավալներով: Նույն հասցեի առաջին հարկում բացվում է համանուն չորրորդ խանութը:',
        p5: 'Այժմ «Մանկան»-ը առաջին և միակ ընկերությունն է Հայաստանի Հանրապետությունում, որն արտադրում է փափուկ խաղալիքներ։ Այն առաջարկում է երեխաների համար  փափուկ խաղալիքների, ինտերակտիվ խաղալիքների և կրթական պաստառների լայն տեսականի:',
        p6: '“Մանկան”-ը սիրում և գնահատում է իր յուրաքանչյուր հաճախորդին:',
        p7: 'Գոհ հաճախորդը մեր հիմնական նպատակն է: Պարոն Վարուժանը միշտ գործընթացի մեջ է, նա երբեք չի դադարում հասնել նոր նպատակների և երեխաներին ավելի երջանիկ դարձնել իր ամենափափուկ և  ընկերասեր խաղալիքներով:',
        p8: 'Արտադրությունը հագեցած է նորագույն տեխնոլոգիաներով: Խաղալիք ստեղծելու համար օգտագործվում են միայն լավագույն նյութերը, որոնք բացառապես մաքուր են և հատուկ ստեղծված են խաղալիքների արտադրության համար, խաղալիքների՝ ում երեխաները կանվանեն  «ԸՆԿԵՐ»: Մեր խաղալիքների որակի անվտանգությունը  համապատասխանում է միջազգային ստանդարտներին:',
        p9: 'Իր գործունեության ընթացքում «Մանկան»-ը մասնակցել է բազմաթիվ ցուցահանդեսների և բարեգործական տարբեր միջոցառումների:',
        p10: 'Այսօր ընկերությունը սահմանափակված չէ իր նվաճումներով: «Մանկան»-ը շարունակում է առաջադիմել և ընդլայնվել:'
      }
    },
    'local.payment-delivery-return': {
      payment: {
        paragraphs: ["is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"],
        listItems: ['is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ']
      },
      delivery: {
        paragraphs: ["is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"],
        listItems: ['is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ']
      },
      Return: {
        paragraphs: ["is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"],
        listItems: ['is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ']
      }
    },
    'local.already_in_cart': 'Զամբյուղում է',
    'local.in_cart': 'Գնել հիմա',
    'local.go_to_cart': 'Ավելացնել զամբյուղ',
    'local.modal_battery': 'Ակտիվացման դեպքւմ անհրաժեշտ մարտկոցները ավտոմատ կերպով կավելացվեն զամբյուղ',
    'local.yerevan_cty': 'Ք․Երևան',
    'local.delivery_only_in_yerevan': 'Առաքումը դեռևս իրականացվում է միայն ք․Երևանի տարածքում',
    'local.i_know': 'Ծանոթացել եմ',
    'local.rules_of_using': 'օգտագործման կանոններին',
    'local.using-rules': 'Օգտագործման կանոններ ',
    'local.bonus-and-promo-code': 'Բոնուս և պրոմո կոդ',
    'local.using-bonus': 'Կուտակված միավորներով',
    'local.payment-methods': 'Վճարման եղանակներ',
    'local.min-price': 'Մինիմալ գին',
    'local.max-price': 'Մաքսիմալ գին',
    'local.min_price_of_order': 'Պատվերի նվազագույն գումարը պետք է կազմի {price} դր․',
    'local.not_listed': 'Նշված չէ',
    'local.no_vacancy_text': 'Այս պահին չկան թափուր աշխատատեղեր',
    'locale.confirm_email': 'Խնդրում ենք, հաստատել Էլ․հասցեով',
    'locale.thanks_follow': 'Շնորհակալություն բաժանորդագրվելու համար',
    'locale.no_items_in_wish-list': 'Նախընտրած ապրանքների ցուցակը դատարկ է',
    'locale.no_items_in_the_cart': 'Զամբյուղը դատարկ է',
    'local.home-page': 'Գլխավոր էջ',
    'local.catalog': 'Կատալոգ',
    'local.wishlist': 'Նախընտրած ապրանքներ',
    'local.cart_added_success': 'Ավելացվեց զամբյուղում',
    'local.box_size': 'Տուփի չափսը',
    'local.Phone': 'Հեռախոս',
    'local.Business_hours': 'Աշխատանքային ժամեր',
    'local.Wish_list': 'Նախընտրածներ',
    'local.new_password': 'Նոր գաղտնաբառ',
    'local.bonus_and_promo_code1': 'Բոնուս և պրոմո կոդ',
    'local.bonus_and_promo_code': [{
      title: 'ԲՈՆՈՒՍ',
      description: [{
        desc: ['Բոնուսները իրենցից ներկայացնում են cashback համակարգ՝ համաձայն որի կատարված գնումներից, օգտատիրոջը հասանելի տոկոսի չափով գումար է կուտակվում կայքում առկա օգտատիրոջ անձնական հաշվեկշռին։']
      }, {
        desc: ['Յուրաքանչյուր օգտատեր, կախված գրանցումից ի վեր կայքից կատարված ընդհանուր գնումների ծավալից կարող է ունենալ 2%, 3% կամ 4% բոնուսի հնարավորություն։ ']
      }, {
        desc: ['Յուրաքանչյուր օգտատիրոջ գրանցման պահից ի վեր հասանելի է 2% cahsback-ի հնարավորություն։']
      }, {
        desc: ['Եթե օգտատերը գրանցումից ի վեր կայքից կատարել է 200.000 ՀՀ դրամից ավել գնում, ապա օգտատիրոջը հասանելի է դառնում 3% բոնուսի հնարավորություն։ ']
      }, {
        desc: ['Եթե օգտատերը գրանցումից ի վեր կայքից կատարել է 500.000 ՀՀ դրամից ավել գնում, ապա օգտատիրոջը հասանելի է դառնում 4% բոնուսի հնարավորություն։ ']
      }, {
        desc: ['Բոնուսները հաշվարկվում են զամբյուղում գտնվող ապրանքների վերջնական զեղչված գնից (առանց առաքման գումարի): Բոնուսային միավորները չեն կարող կանխիկացվել կամ փոխանցվել այլ հաշիվների և կարող են օգտագործվել միայն կայքից գնումներ կատարելու նպատակով։ ']
      }, {
        desc: ['Բոնուսները կարող են օգտագործվել միայն ամբողջական վճարումների համար և չեն կարող կիրառվել կանխիկ կամ օնլայն վճարման հետ միասին։ ']
      }, {
        desc: ['Գրանցումը չեղյալ հայտարարելու դեպքում կուտակված բոնուսային միավորները չեղարկվում են։ ']
      }]
    }, {
      title: 'ՊՐՈՄՈ ԿՈԴ',
      description: [{
        desc: ['Յուրաքանչյուր պրոմո կոդին կցված է որոշակի զեղչի տոկոս, որի միջոցով կայքից կարելի է կատարել զեղչված գնումներ։ ']
      }, {
        desc: ['Պրոմո կոդի միջոցով զեղչվում է գնման պահին զամբյուղում առկա ապրանքների ընդհանուր գումարը (բացի առաքման գումարից): ']
      }, {
        desc: ['Պրոմո կոդերը նախատեսված են մեկանգամյա օգտագործման համար և չեն կարող կիրառվել երկրորդ անգամ:']
      }]
    }],
    'local.updated': 'Թարմացվել է՝ 01.06.2020',
    'local.using_rules': [{
      title: 'ԸՆԴՀԱՆՈՒՐ ԴՐՈՒՅԹՆԵՐ ԵՎ ՊԱՅՄԱՆՆԵՐ',
      description: [{
        desc: ['Սույն ընդհանուր դրույթները և պայմանները սահմանում և կարգավորում են Մանկան սահմանափակ պատասխանատվությամբ ընկերությանը (այսուհետ նաև՝ Ընկերություն) պատկանող կայքով (այսուհետ նաև՝ Կայք) Ընկերության կողմից վաճառվող խաղալիքների և մանկան համար նախատեսված պարագաների վաճառքի (այսուհետ նաև՝ Վաճառք) հետ կապված իրավահարաբերությունները: ']
      }, {
        desc: ['Մուտք գործելով Կայք, օգտագործելով Կայքի ցանկացած ծառայություն կամ ներբեռնելով ցանկացած բովանդակություն՝ ամբողջությամբ կամ դրա մի մասը Դուք, որպես օգտագործող (այսուհետ նաև՝ Օգտագործող, Դուք, Ձեզ, Ձեր, Հաճախորդ, Գնորդ, Պատվիրատու) հաստատում եք, որ ամբողջությամբ կարդացել և հասկացել եք սույն օգտագործման պայմանները, ինչպես նաև Կայքում հրապարակված Ընկերության կողմից Վաճառքի այլ պայմանները, հրապարակային մատակարարման պայմանագրի դրույթները (այսուհետ նաև՝ Պայմանագիր) և անվերապահորեն ընդունում եք դրանք, անկախ նրանից՝ Դուք Ընկերության կողմից իրականացվող Վաճառքի հաճախորդ եք, Կայքի գրանցված օգտագործող, թե՝ ուղղակի այցելու:']
      }, {
        desc: ['Ընկերությունն իրավունք ունի առանց նախապես ծանուցման, միակողմանի, ցանկացած պահի փոփոխել սույն Պայմանները: Դրանց փոփոխության դեպքում Ընկերությունը կհրապարակի նորացված Պայմանները ինտերնետային Կայքում՝ նշելով վերջին փոփոխության ամսաթիվը: Օգտագործողի պարտականությունն է ժամանակ առ ժամանակ այցելել Կայք և ստուգել Պայմանների փոփոխությունները: Ընդ որում՝ նոր Պայմանները իրավական ուժ կունենան և կտարածվեն, դրանք Կայքում տեղադրելուց հետո ծագած պարտավորությունների վրա:']
      }, {
        desc: ['Եթե Դուք համաձայն չեք սույն Պայմաններին, խնդրում ենք դադարեցնել Կայքի օգտագործումը: Կայքում գտնվելը, հաշիվ բացելը, Օգտագործող դառնալը և Ծառայություններից օգտվելը փաստում են Ձեր կողմից սույն Պայմանների անվերապահ ընդունումը:']
      }]
    }, {
      title: 'ՊԱՅՄԱՆԱԳԻՐ ԿՆՔԵԼՈՒ ԻՐԱՎԱՍՈՒԹՅՈՒՆԸ',
      description: [{
        desc: ['Կայքում գրանցվել կամ գնում կատարել կարող են քաղաքացիաիրավական գործունակություն ունեցող 18 տարեկանը լրացած անձիք։ 18 տարեկանը չլրացած կամ անգործունակ (դատարանի կողմից այդպիսին ճանաչված) անձանց կողմից կատարված գործողությունների հետևանքների համար Ընկերությունը պատասխանատվություն չի կրում։ ']
      }, {
        desc: ['Կայքում գրանցվել կամ գնում կատարել կարող են քաղաքացիաիրավական գործունակություն ունեցող 18 տարեկանը լրացած անձիք։ 18 տարեկանը չլրացած կամ անգործունակ (դատարանի կողմից այդպիսին ճանաչված) անձանց կողմից կատարված գործողությունների հետևանքների համար Ընկերությունը պատասխանատվություն չի կրում։ ']
      }, {
        desc: ['Անձնական տվյալների լրացումը կարելի է իրականացնել միայն գրանցվող կամ գնում կատարող օգտատիրոջը փաստացի պատկանող տվյալներով։ Համաձայնվելով սույն պայմաններին, Դուք ընդունում եք, որ   Ընկերությունը չի կարող ստուգել Ձեր տված տեղեկությունները և տվյալները, այս կետում տրված Ձեր հավաստումների իսկությունը, ուստի սույն կետի յուրաքանչյուր խախտման ամբողջական պատասխանատվությունը ընկնում է Ձեզ վրա:']
      }, {
        desc: ['Ընկերությունն իրավունք ունի սխալ կամ ոչ հավաստի տվյալներ ներկայացված լինելու փաստ հայտնաբերելու դեպքում հեռացնել օգտվողին համակարգից՝ զրոյացնելով կուտակած միավորները և կատարած գնումների պատմությունը։ ']
      }]
    }, {
      title: 'ԸՆԿԵՐՈՒԹՅԱՆ ԿՈՂՄԻՑ ԻՐԱԿԱՆԱՑՎՈՂ ԱՌԱՔՈՒՄԸ ԵՎ ԴՐԱ ԻՐԱԿԱՆՑՄԱՆ ԿԱՐԳԸ',
      description: [{
        desc: ['Ընկերությունը իր հաճախորդներին վաճառում է իր խանութներից ապրանքներ (այսուհետ նաև՝ Ապրանք) և փոխանցում առաքող կազմակերպությանը՝ Հաճախորդի նշած հասցեով առաքման համար:']
      }, {
        desc: ['Ընկերությունից առաքմամբ գնում կատարելու հնարավորությունից ողջ ծավալով օգտվելու համար Դուք պարտավոր եք գրանցվել Կայքում և բացել Օգտագործողի հաշիվ (այսուհետ նաև՝ Օգտագործողի հաշիվ կամ Հաշիվ): Յուրաքանչյուր Օգտագործող կարող է ունենալ միայն մեկ Հաշիվ: Օգտագործողներն իրավունք չունեն օգտագործել այլ Օգտագարծողի հաշիվը: Հաշիվը բացելիս Օգտագործողը պարտավոր է ճիշտ և հավաստի ներկայացնել պահանջվող ողջ տեղեկատվությունը: Օգտագործողներն իրենք են պատասխանատու իրենց Հաշվի մուտքի տվյալների պահպանման համար և իրենք են կրում իրենց Հաշվով կատարվող գործառնությունների/գործողությունների համար պատասխանատվությունը:']
      }, {
        desc: ['Օգտագործողը պարտավոր է անհապաղ տեղեկացնել Ընկերությանը, եթե վստահ է, որ իր Հաշվով կատարվել է չթույլատրված մուտք: Նման դեպքում Ընկերությունը իրավունք ունի անմիջապես արգելափակել Հաշիվը՝ մինչև հանգամանքների ամբողջական պարզումը: Ամեն դեպքում Ընկերությունը չի կրում ոչ մի պատասխանատվություն այլ անձանց կողմից Օգտագործողի Հաշվով կատարված գործողությունների համար: Այդ գործողություններով Ընկերությանը կամ երրորդ անձանց պատճառված վնասի համար պատասխանատվություն է կրում Օգտագործողը:']
      }, {
        desc: ['Պատվերը կատարելիս Հաճախորդը պարտավոր է հաշվին կամ կանխիկ եղանակով ունենալ բավարար միջոցներ նշված Պատվերը կատարելու համար։']
      }, {
        desc: ['Ընկերությունն կարող է այն ժամանակահատվածում, երբ պատվերների ընդհանուր ծավալը մեծանում է (տոնական օրեր, զեղչային ծրագրեր կամ միջոցառումներ և այլն) կամ առաջանում են տեխնիկական (խցանում, ավտովթար և այլն) կամ բնածին խոչնդոտներ հետաձգել պատվերների առաքման ժամկետները:']
      }]
    }, {
      title: 'ՊԱՏՎԵՐՆԵՐԻ ԸՆԴՈՒՆՄԱՆ ԵՎ ՀԱՍՑԵԱՎՈՐՄԱՆ ԿԱՐԳԸ',
      description: [{
        desc: ['Ապրանքի գնման հայտը ստանալուց հետո Ընկերության սպասարկման բաժինը հավելյալ ստուգում է տվյալ ապրանքի վաճառքային տեսքը և ֆիզիկական կամ մեխանիկական վնասվածքների բացակայությունը։ Եթե գնված ապրանքը չի համապատասխանում վաճառքային տեսքին, առկա են ֆիզիկական կամ մեխանիկական վնասվածքներ, ապա ապրանքի փոխարինման կամ պատվերի չեղարկման համար Ձեզ հետ կապ է հաստատում Ընկերության սպասարկման կենտրոնի աշխատակիցը։']
      }, {
        desc: ['Եթե գնված Ապրանքը համապատասխանում է ներկայացվող չափանիշներին, բացակայում են ֆիզիկական կամ մեխանիկական վնասվածքներ, ապա Ապրանքը նախապատրաստվում է առաքման, որից հետո Ընկերության սպասարկման կենտրոնի աշխատակիցը կարող է լրացուցիչ հեռախոսակապ հաստատել Ձեզ հետ պատվերին վերաբերվող մանրամասների (առաքման հասցեի ճշգրտում, պատվիրված ապրանքներ, առաքման ժամանակ) հաստատման համար։ ']
      }, {
        desc: ['Եթե Գնորդը գնման հայտում նշել է, որ կատարելու է կանխիկ վճարում, և նշված հեռախոսահամարով չի պատասխանում սպասարկման կենտրոնից ստացված հեռախոսազանգին, ապա Ընկերությունը իրավասու է Ապրանքը չփոխանցել առաքման և չեղարկել գործարքը։ ']
      }, {
        desc: ['Եթե Գնորդը կատարել է օնլայն վճարում և նշված հեռախոսահամարով չի պատասխանում սպասարկման կենտրոնից ստացված զանգին, ապա Ընկերությունը իրավասու է Ապրանքը չփոխանցել առաքման, իսկ հաջորդող մեկ աշխատանքային օրվա ընթացքում սպասարկման կենտրոնի հետ կապ չհաստատելու դեպքում չեղարկել գործարքը՝ հետ վերադարձնելով ամբողջ գումարը։ ']
      }, {
        desc: ['Եթե Գնորդը կատարել է վճարում կուտակված բոնուսային միավորներով և նշված հեռախոսահամարով չի պատասխանում սպասարկման կենտրոնից ստացված զանգին, ապա Ընկերությունը իրավասու է Ապրանքը չփոխանցել առաքման, իսկ հաջորդող մեկ աշխատանքային օրվա ընթացքում սպասարկման կենտրոնի հետ կապ չհաստատելու դեպքում չեղարկել գործարքը՝ հետ վերադարձնելով միավորները։ ']
      }, {
        desc: ['Գնորդի կողմից պատվերի հաստատման դեպքում առաքանին փոխանցվում է առաքիչին։ ']
      }, {
        desc: ['Առաքիչ է հանդիասնում Ընկերության հետ համագործակցող, սակայն առանձին հարկատու հանդիսացող ֆիզիակական կամ իրավաբանական անձը:']
      }, {
        desc: ['Եթե գնորդը գնման հայտում նշել է, որ կատարելու է կանխիկ վճարում, և առաքանին առաքիչին հանձնելուց հետո փոխվում է առաքման հասցեն, ապա Ընկերությունը իրավասու է առաքանին Գնորդին հանձնելու ժամանակ գանձել հավելյալ առաքման գումար՝ մեկ ամբողջական առաքման գումարի չափով, իսկ հավելյալ գանձված գումարի կտրոնը Գնորդը կարող է ստանալ ք. Երևան, Կ. Ուլնեցի 70 հասցեում գտնվող սպասարկման կենտրոնից կամ էլ. փոստի միջոցով։ ']
      }, {
        desc: ['Եթե Գնորդը կատարել է օնլայն վճարում և առաքանին առաքիչին հանձնելուց հետո փոխվում է առաքման հասցեն, ապա Ընկերությունը իրավասու է առաքանին Գնորդին հանձնելու ժամանակ կանխիկ եղանակով գանձել հավելյալ առաքման գումար՝ մեկ ամբողջական առաքման գումարի չափով, իսկ հավելյալ գանձված գումարի կտրոնը Գնորդը կարող է ստանալ ք. Երևան, Կ. Ուլնեցի 70 հասցեում գտնվող սպասարկման կենտրոնից  կամ էլ. փոստի միջոցով։ ']
      }, {
        desc: ['Եթե Գնորդը կատարել է վճարում կուտակված բոնուսային միավորներով և առաքանին առաքիչին հանձնելուց հետո փոխվում է առաքման հասցեն, ապա Ընկերությունը իրավասու է առաքանին Գնորդին հանձնելու ժամանակ կանխիկ եղանակով գանձել հավելյալ առաքման գումար՝ մեկ ամբողջական առաքման գումարի չափով, իսկ հավելյալ գանձված գումարի կտրոնը Գնորդը կարող է ստանալ ք. Երևան, Կ. Ուլնեցի 70 հասցեում գտնվող սպասարկման կենտրոնից  կամ էլ. փոստի միջոցով։ ']
      }, {
        desc: ['Առաքիչը կարող է հեռախոսազանգի միջոցով լրացուցիչ կապ հաստատել Գնորդի հետ հասցեի կամ այլ մանրամասների ճշգրտման նպատակով։ Եթե գնորդը նշված հեռախոսահամարով չի պատասխանում առաքիչի հեռախոսազանգին կամ առկա են նմանատիպ այլ առաքման իրականացման խոչնդոտներ, ապա առաքիչը իրավասու է պատվերը հետ վերադարձնել սպասարկման կենտրոն։']
      }, {
        desc: ['Եթե Գնորդը գնման հայտում նշել է, որ կատարելու է կանխիկ վճարում, և նշված հեռախոսահամարով չի պատասխանում առաքիչի հեռախոսազանգին կամ առկա են նմանատիպ այլ առաքման իրականացման խոչնդոտներ, ապա առաքանին սպասարկման կենտրոն վերադարձվելուց հետո մեկ աշխատանքային օրվա ընթացքում Գնորդի կողմից սպասարկման կենտրոնի հետ կապ չհաստատելու դեպքում Ընկերությունը իրավասու է պատվերը համարվել չեղարկված։ ']
      }, {
        desc: ['Եթե Գնորդը կատարել է օնլայն վճարում և նշված հեռախոսահամարով չի պատասխանում առաքիչի զանգին կամ առկա են նմանատիպ այլ առաքման իրականացման խոչնդոտներ, ապա առաքանին սպասարկման կենտրոն վերադարձվելուց հետո մեկ աշխատանքային օրվա ընթացքում գնորդի կողմից սպասարկման կենտրոնի հետ կապ չհաստատելու դեպքում Ընկերությունը իրավասու է պատվերը համարվել չեղարկված և հետ փոխանցել ամբողջ գումարը բացի առաքման գումարից։ ']
      }, {
        desc: ['Եթե Գնորդը կատարել է վճարում կուտակված բոնուսային միավորներով և նշված հեռախոսահամարով չի պատասխանում առաքիչի զանգին կամ առկա են նմանատիպ այլ առաքման իրականացման խոչնդոտներ, ապա առաքանին սպասարկման կենտրոն վերադարձվելուց հետո մեկ աշխատանքային օրվա ընթացքում գնորդի կողմից սպասարկման կենտրոնի հետ կապ չհաստատելու դեպքում Ընկերությունը իրավասու է պատվերը համարել չեղարկված և հետ փոխանցել միավորները բացի առաքման համար գանձված միավորներից։ ']
      }, {
        desc: ['Գնորդի կողմից նշած հեռախոսահամարով առաքիչի հեռախոսազանգին չպատասխանելու կամ Գնորդի պատճառով առաջացած նմանատիպ այլ առաքման իրականացման խոչնդոտների առկայության պատճառով, առաքանին սպասարկման կենտրոն հետ վերադարձնելուց հետո կրկին առաքման իրականացումը համարվում է կրկնակի, և Ընկերությունն իրավասու է գանձել կրկնակի առաքման գումար։ ']
      }, {
        desc: ['Գնորդի կողմից նշած հեռախոսահամարով սպասարկման կենտրոնի կամ առաքիչի հեռախոսազանգին չպատասխանելու կամ Գնորդի պատճառով առաջացած նմանատիպ այլ առաքման իրականացման խոչնդոտների հաճախակի կրկնվելու դեպքում տվյալ Գնորդի պատվերները այլևս կարող են չսպասարկվել, իսկ Գնորդը կարող է հեռացվել համակարգից՝ կորցնելով կուտակած միավորները և կատարած գնումների պատմությունը։ ']
      }, {
        desc: ['Գնորդը պարտավոր է առաքանին ընդունելու պահին, առաքիչի ներկայությամբ ստուգել առաքված ապրանքների պատշաճ որակի համապատասխանությունը, հնարավոր ֆիզիկական և մեխանիկական վնասվածքները և սարքինությունը։ Եթե առաքված ապրանքներից որևէ մեկը չի համապատասխանում պատշաճ որակի, առկա են ֆիզիկական կամ մեխանիկական վնասվածքներ կամ գտնվում է ոչ սարքին վիճակում, ապա գնորդը կարող է հրաժարվել ինչպես միայն տվյալ ապրանքից, այնպես էլ ամբողջ առաքանուց և առաքման ծառայությունից կամ պահանջել նոր կամ փոխարինող ապրանք։ ']
      }, {
        desc: ['Եթե առաքված ապրանքներից որևէ մեկը պատշաճ որակի չէ, առկա են ֆիզիկական կամ մեխանիկական վնասվածքներ կամ գտնվում է ոչ սարքին վիճակում, ապա փոխարինում պահանջելու դեպքում գանձվում է միայն մեկանգամյա առաքման վճար։ ']
      }, {
        desc: ['Եթե Գնորդը կատարել է կանխիկ վճարում և առաքված ապրանքները պատշաճ որակի են, չունեն ֆիզիկական և մեխանիկական թերություններ և գտնվում են սարքին վիճակում, սակայն գնորդը հրաժարվում է պատվիրված ապրանքներից, ապա Ընկերությունն իրավասու է Գնորդից գանձել առաքման ծառայության վճար։ ']
      }, {
        desc: ['Եթե գնորդը կատարել է օնլայն վճարում և առաքված ապրանքները պատշաճ որակի են, չունեն ֆիզիկական և մեխանիկական թերություններ և գտնվում են սարքին վիճակում, սակայն Գնորդը հրաժարվում է պատվիրված ապրանքներից, ապա հետ է վերադարձվում ամբողջ գումարը բացի առաքման վճարից։ ']
      }, {
        desc: ['Եթե գնորդը կատարել է վճարում կուտակված բոնուսային միավորներով և առաքված ապրանքները պատշաճ որակի են, չունեն ֆիզիկական և մեխանիկական թերություններ և գտնվում են սարքին վիճակում, սակայն Գնորդը հրաժարվում է պատվիրված ապրանքներից, ապա հետ է փոխանցվում միավորները բացի առաքման համար գանձված միավորներից։']
      }, {
        desc: ['Եթե գնորդը հաճախակի է հրաժարվում պատշաճ որակի, ֆիզիկական և մեխանիկական թերություններ չունեցող և սարքին վիճակում գտնվող առաքված ապրանքներից, ապա տվյալ Գնորդի պատվերները այլևս կարող են չսպասարկվել, իսկ Գնորդը կարող է հեռացվել համակարգից՝ կորցնելով կուտակած միավորները և կատարած գնումների պատմությունը։ ']
      }]
    }, {
      title: 'ՎՃԱՐՄԱՆ ԿԱՐԳԸ ԵՎ ՀԵՏ ՎԵՐԱԴԱՐՁԸ',
      description: [{
        desc: ['Ընկերության կողմից վաճառվող Ապրանքների գնման դիմաց կանխիկ վճարում կարելի է իրականացնել միայն ՀՀ դրամով։']
      }, {
        desc: ['Ապրանքների վաճառքը իրականացվում է տվյալ պահին Կայքում նշված սակագներով։ ']
      }, {
        desc: ['ՀՀ օրենսդրությամբ սահմանված կարգով Գնորդն իրավունք ունի առաքանին ստանալուց հետո 14 օրվա ընթացքում գնման կտրոնի առկայության, Ապրանքի վրա փակցված պիտակները պահպանված լինելու, ֆիզիկական և մեխանիկական թերությունների բացակայության և սարքին վիճակում գտնվելու դեպքում հետ վերադարձնել՝ հետ ստանալով վճարված ամբողջ գումարը բացի առաքման ծառայության վճարից։']
      }, {
        desc: ['Օնլայն վճարմամբ Ապրանք գնելուց հետո սույն գլխի 3-րդ կետով սահմանված կարգով Ապրանքը հետ վերադարձնելու դեպքում գումարի հետ փոխանցումը կարող է տևել 10 աշխատանքային օր՝ կախված ծառայությունները սպասարկող բանկերի գործընթացների արագությունից։']
      }, {
        desc: ['Կուտակված բոնուսային միավորներով վճարմամբ Ապրանք գնելուց հետո սույն գլխի 3-րդ կետով սահմանված կարգով Ապրանքը հետ վերադարձնելու դեպքում գումարի հետ փոխանցումը կարող է տևել 5 աշխատանքային օր։']
      }, {
        desc: ['Անկախ վճարման եղանակից Առաքանին առաքիչից ստանալուց հետո վերադարձ կարելի է իրականացնել սեփական ուժերով՝ գնված ապրանքը մոտեցնելով ք. Երևան, Կ. Ուլնեցի 70 հասցեում գտնվող սպասարկման կենտրոն։ ']
      }, {
        desc: ['Սույն գլխով կարգավորվող հետ վերադարձի կանոնները չեն տարածվում ՀՀ օրենսդրությամբ սահամանված այն ապրանքատեսակների վրա, որոնց համար օրենսդրությամբ հետ վերադարձ նախատեսված չէ:']
      }]
    }, {
      title: 'ԳԱՂՏՆԻՈՒԹՅՈՒՆ',
      description: [{
        desc: ['Դուք կարող եք այցելել Կայք առանց գրանցվելու, սակայն Կայքի և Ընկերության ամբողջական ծառայություններից օգտվելու համար Դուք պարտավոր եք գրանցվել Կայքում: Անձնական տեղեկությունները հավաքագրվում են (ստացվում են) միայն այն ժամանակ, երբ Դուք դրանք տրամադրում եք գրանցման կամ գնում կատարելու ժամանակ: Գրանցվելիս կամ գնում կատարելիս Դուք պետք է տրամադրեք Ձեր անունը, հասցեն, էլ. փոստի հասցեն և կոնտակտային տվյալները: ']
      }, {
        desc: ['Օգտատերերի վարքագիծը և կայքի օգտագործման հարմարավետությունը վերլուծելու և առավել հարմարավետ ծառայություններ մատուցելու նպատակով, կայքից օգտվելու դեպքում մեզ մոտ կիրառվող մոնիթորինգային և վերլուծական համակարգերին ավտոմատ կերպով կարող են փոխանցվել Ձեր IP հասցեն, բրաուզերի անվանումը, համակարգչի տեսակը, տեխնիկական տվյալներ օգտատերերի վերաբերյալ և մեր կայքի հետ կապ հաստատելու միջոցները, ինչպիսիք են օպերացիոն համակարգի տեսակը, ինտերնետային ծառայություն տրամադրող կազմակերպության անունը և այլ համանման տեղեկություններ: ']
      }, {
        desc: ['Կայքի օգտագործումը արագ և հարմարավետ դարձնելու նպատակով կայքը կարող է օգտագործել տեղեկանիշներ (cookies): Տեղեկանիշները տառաթվային տողեր են, որոնք ստեղծվում են կայքում: Կայք այցելելիս դրանք կրկնօրինակվում են Ձեր համակարգչի մեջ: Տեղեկանիշները անվտանգ են համակարգչի համար և անձնական տեղեկատվություն չեն հավաքագրում: Անվտանգության նկատառումներից ելնելով դրամային շարժերը և վերջիններիս վերաբերվող տվյալները կարող են վերահսկվել նաև դրամային փոխանցումները սպասարկող բանկերի և համակարգերի կողմից։']
      }, {
        desc: ['Ընկերությունը ձեռնարկում է պատշաճ էլեկտրոնային, ֆիզիկական և այլ անվտանգության միջոցներ անօրինական մուտքից, փոփոխումից կամ հրապարակումից Ձեր անձնական տեղեկությունների անվտանգությունն ապահովելու համար: Ձեր տրամադրած բոլոր տվյալները պահվում են ապահով սերվերների տվյալների բազայում: Մենք գաղտնաբառերով պաշտպանում ենք Ձեր տրամադրած անձնական տեղեկություններ պարունակող Ընկերության ցանկացած էջ: Ընկերությունը երբեք չի խնդրի նշել Ձեր գաղտանաբառը հեռախոսազանգի կամ էլ. հասցեի միջոցով: Ձեր անձնական տվյալները չենք տրամադրի երրորդ անձանց, առանց Ձեր համաձայնության, բացառությամբ Օրենսդրությամբ նախատեսված դեպքերի (իրավապահ և պետական մարմինների իրենց իրավասության սահմաններում կատարված հարցումներ, դատական հարցումներ և այլն): Մեր կողմից Ձեր տվյալները կարող են հասանելի դարձվել միայն մեզ հետ փոխկապակցված անձանց, այն դեպքերում, երբ այդ տվյալները անհրաժեշտ են Ձեզ մատուցվող ծառայությունները իրականացնելու և դրանց որակը բարելավելու համար: Մենք համագործակցում ենք այլ կազմակերպությունների և/կամ անհատների հետ Ձեր Ծառայությունները պատշաճ մատուցելու նպատակով, ինչպես օրինակ. պատվերների ընդունում, տվյալների բազայի վերլուծություն, մարքեթինգային աջակցության մատուցում, բանկային քարտերով վճարումների իրականացման կատարում և քլիրինգ: Վերոնշյալ անձինք ստանում են անհրաժեշտ տվյալներին հասանելիություն իրենց կողմից նշված գործառնությունների իրականացման նպատակով և իրավունք չունեն օգտագործել նույն տեղեկատվությունը այլ նպատակներով:']
      }]
    }, {
      title: 'ՊԱՅՄԱՆԱԳՐԻ ԴԱԴԱՐՈՒՄ ԿԱՄ ԼՈՒԾՈՒՄ',
      description: [{
        desc: ['Դուք իրավունք ունեք ցանկացած պահի լուծել Ընկերության հետ կնքված Պայմանագիրը՝ մինչև լուծումը կատարելով Ընկերության հանդեպ ունեցած Ձեր բոլոր վճարային պարտականությունները: Ձեր կողմից ժամկետանց պարտավորության առկայության դեպքում Պայմանագիրը լուծված համարվել չի կարող:']
      }, {
        desc: ['Պայմանագրի լուծման և mankan.am էջում գործող հաշիվը փակելու նպատակով անհրաժեշտ է անձնական հաշվին կցված էլեկտրոնային հասցեից {email} էլեկտրոնային հասցեին ներկայացնել դիմում Պայմանագրի լուծման և հաշվի փակման համար՝ նշելով հաշվի գրանցման ժամանակ տրամադրած էլեկտրոնային հասցեն, անուն/ազգանունը և հեռախոսահամարը։']
      }, {
        desc: ['Պայմանագրի լուծման դիմում ներկայացնելը հաստատում է, որ Հաճախորդը հրաժարվում է հաշվին առկա բոնուս միավորներից։']
      }]
    }],
    'local.infoAboutYou': 'Ցանկացած պարագայում մենք սիրով աջակցում ենք մեր հաճախորդներին և մեր մոտից գնված ապրանքներում առաջացած անսարքությունների դեպքում մեր մասնագետները հնարավորության դեպքում կվերանորոգեն և կհանձնեն Ձեզ։',
    'local.barcode': 'ID ',
    'local.wrong_promo_code': 'Սխալ պրոմո կոդ',
    'local.not_available_product': 'Արտադրանքը հասանելի չէ',
    'local.product_not_found': 'Տվյալ համադրությամբ ապրանքներ առկա չեն',
    'local.example': 'օր․ 910425',
    'local.shop_adresses': [{
      address: 'Ք. Երևան, Կարապետ Ուլնեցի 70 փող',
      phone: '(+374) 99 530311',
      businessHours: 'Ամեն օր՝ ժամը 10։00-ից 20։00'
    }, {
      address: 'Ք. Երևան, Մեսրոպ Մաշտոց 24 պող',
      phone: '(+374) 99 540311',
      businessHours: 'Ամեն օր՝ ժամը 10։00-ից 20։00'
    }, {
      address: 'Ք. Երևան, Աբովյան 36 փող',
      phone: '(+374) 99 520311',
      businessHours: 'Ամեն օր՝ ժամը 10։00-ից 20։00'
    }, {
      address: 'Ք. Երևան, Դալմա Գարդեն Մոլ',
      phone: '(+374) 96 414029',
      businessHours: 'Ամեն օր՝ ժամը 10։00-ից 22։00'
    }]
  },
  RU: {
    'local.necessary_skills': 'Necessary Skills',
    'local.job_responsibilities': 'Job Responsibilities',
    'local.filter': 'Фильтр',
    'local.endpoint': 'Конец ',
    'local.sm': 'см',
    'local.shortYear': 'г',
    'local.my_page': 'Моя страница',
    'local.general_assortment': 'Общий ассортимент',
    'local.back': 'Назад',
    'local.can_use_bonus_if': 'Регистрируйтесь, копите бонусы и делайте покупки с набранными очками.',
    'local.more_percents_message': 'Сделайте покупки еще {price} др. и вместо {last_percent}% копите {new_percent}% бонус.',
    'local.free_shipping_message': 'Бесплатная доставка при покупке от {price} и более',
    'local.ex.reading': 'Нп.чтение',
    'local.download_CV_using_formats': 'Скачать резюме в формате PDF, MS Word или JPG',
    'local.apply_online': 'Подать заявку онлайн',
    'local.attach': 'Прикрепить',
    'local.future_position': 'Какую позицию вы видите в будущем?',
    'local.ex.word': 'Нп.Word',
    'local.ex.economics': 'Нп.Экономика',
    'local.faculty': 'Факультет',
    'local.ex.YSU': 'Нп.ЕГУ',
    'local.educational_complex': 'Образовательный комплекс',
    'local.ex.bachelor': ' Пр.Бакалавр',
    'local.degree_of_education': 'Степень образования',
    'local.confirm': 'Подтвердить',
    'local.write_a_review': 'Написать ответ',
    'local.expect_from_our_team': 'Что вы ожидаете от нашей команды?',
    'local.add_another_social': 'Добавить ещё',
    'local.ex.facebook': 'Пр․ facebook',
    'local.social_networks': 'Аккаунты в социальных сетях',
    'local.add_another_favorite': 'Добавить ещё',
    'local.preferences': 'Хобби',
    'local.day': 'День',
    'local.project_name': 'Название програмы',
    'local.software_skills': 'Программные навыки',
    'local.add_other_business_exp': 'Добавить ещё',
    'local.still_working': ' Ещё работаю ',
    'local.ex.cashier': 'Пр.кассир',
    'local.startpoint': 'Начало',
    'local.position': 'Должность',
    'local.ex.Mankan': 'Пр.Манкан',
    'local.professional_experience': 'Опыт работы',
    'local.company': 'Компания',
    'local.add_another_educational_complex': 'Добавить ещё',
    'local.still_learning': 'Я все еще учусь',
    'local.education': 'Образование',
    'local.add_another_language': 'Добавить ещё',
    'local.Choose_from_a_5_point': 'Степень владения',
    'local.Armenian': 'Армянский',
    'local.knowledge_of_languages': 'Знание языков',
    'local.online_application': 'Онлайн заявка',
    'local.download_picture': 'Прикрепить фото',
    'local.add': 'Добавить ',
    'local.bonus_Wey': 'Бонус ',
    'local.credit_card': 'Банковсая  карта',
    'local.cash': 'Наличные ',
    'local.payment_method': 'Способ оплаты',
    'local.delivery_period': 'Время доставки',
    'local.enter': 'Подъезд',
    'local.apartment_house': 'Квартира / дом',
    'local.city_street': 'Улица / Здание',
    'local.mobile_phone': 'Мобильный телефон',
    'local.dr': 'AMD',
    'local.km': 'км',
    'local.fill_in_the_data': 'Данные доставки',
    'local.final_settlement': 'Окончательный расчет',
    'local.confirm_order': 'Подтвердить заказ',
    'local.today': 'Сегодня',
    'local.tomorrow': 'Завтра',
    'local.promo_code': 'Промо-код',
    'local.products': 'товар(ы)',
    'local.total': 'Всего',
    'local.date_of_purchase': 'Дата покупки',
    'local.product_available': 'Продукт доступен ',
    'local.job_announcements': 'Работа у нас',
    'local.order_again': 'Заказать снова',
    'local.money_accumulated': 'Накопленные баллы',
    'local.confirm_changes': 'Подтвердите изменения',
    'local.repeat_new_password': 'Повторите новый пароль',
    'local.change_password': 'Сменить пароль',
    'local.exit': 'Выход',
    'local.personal_info': 'Личные данные',
    'local.my_profile': 'Мой профиль',
    'local.my_orders': 'Мои заказы',
    'local.discount_size': 'Доступный размер бонуса',
    'local.similar_products': 'аналогичные продукты',
    'local.accompanying_products': 'Сопутствующие товары',
    'local.usefulness': 'Полезность',
    'local.battery': 'Батарея',
    'local.description': 'Описание',
    'local.technical_specifications': 'Характеристики',
    'local.add_batteries': 'Добавить батареи',
    'local.viewed_products': 'Просмотренные товары',
    'local.gender': 'Пол',
    'local.all_of': 'Все',
    'local.price_by_increase': 'Цена на увеличение',
    'local.new_products': 'Новые продукты',
    'local.specification': 'спецификация',
    'local.branded_paper_bags': 'Фирменные бумажные пакеты',
    'local.my_basket': 'Моя корзина',
    'local.see_more': 'Увидеть больше',
    'local.ulnetsi': 'Г. Ереван, ул. Улнеци 70',
    'local.abovyans': 'Г. Ереван, ул. Абовяна 36',
    'local.dalma': 'Г. Ереван, Далма Гарден Мол',
    'local.kiosk': 'киоск',
    'local.mashtots': 'Г. Ереван, проспект Маштоцa 24',
    'local.mon_fri': 'Пн. - Сб․',
    'local.return': 'Возврат',
    'local.delivery': 'Будет доставлен',
    'local.delivery_price': 'Доставка',
    'local.payment': 'Оплата',
    'local.name_surname': 'Имя Фамилия',
    'local.message': 'сообщение',
    'local.years': 'лет',
    'local.year_short': 'л.',
    'local.months': 'месяцев',
    'local.to_infants': 'Для новорожденных',
    'local.discounts': 'Скидки',
    'local.to_girls': 'Для девочек',
    'local.to_boys': 'Для мальчиков',
    'local.type': 'Категория',
    'local.for_boys': 'Для мальчик',
    'local.boy': 'Мальчик',
    'local.boy1': 'Для мальчиков',
    'local.girl': 'Девочка',
    'local.girl1': 'Для девочек',
    'local.all': 'Все',
    'local.for_girls': 'Для девочек',
    'local.register': 'Регистрация',
    'local.sign_up_get_updates': 'Подпишитесь, чтобы получать обновления',
    'local.information': 'Информация',
    'local.shops': 'Магазины',
    'local.age': 'Возраст',
    'local.brand': 'Бренд',
    'local.size': 'Размер',
    'local.bonus': 'Бонус',
    'local.quantity': 'количество',
    'local.price': 'Цена',
    'local.add_to_cart': 'Добавить в корзину',
    'local.buy_now': 'Купить сейчас',
    'local.buy': 'Купить',
    'local.extra': 'Экстра',
    'local.best_selling': 'Бестселлеры',
    'local.best_selling1': 'Бестселлер',
    'local.search': 'Поиск',
    'local.not_specifiedе': 'Полезность',
    'local.meaning': 'Полезность',
    'local.specify_price': 'Цена',
    'local.select_gender': 'Пол',
    'local.select_age': 'Возраст',
    'local.choose_gift': 'Выбрать подарок',
    'local.own_products': 'Собственная продукция',
    'local.discounted_assortment': 'Уцененный ассортимент',
    'local.select_by_age': 'Выбрать по возрасту',
    'local.news': 'Новинки',
    'local.write_complaint': 'Написать жалобу ',
    'local.write_offer': 'Написать предложение ',
    'local.complaint': 'Жалоба',
    'local.suggestion': 'Предложение',
    'local.will_send_new_password': 'В течение нескольких минут на вашу эл. почту будет отправлена форма восстановления пароля.',
    'local.password_recovery': 'Восстановление пароля ',
    'local.forgot_password': 'Забыли пароль?',
    'local.remember': 'Запомнить',
    'local.send': 'Отправить',
    'local.repeat_password': 'Повторите пароль',
    'local.about_us': 'О нас',
    'local.feedback': 'Обратная связь',
    'local.payment_delivery_return': 'Оплата / Доставка / Возврат',
    'local.complain_suggestion': 'Предложение / Жалоба',
    'local.our_addresses': 'Филиалы',
    'local.login': 'Вход',
    'local.login1': 'Войти',
    'local.registration': 'Регистрация',
    'local.registration1': 'Зарегистрироваться',
    'local.name': 'Имя',
    'local.last_name': 'Фамилия',
    'local.email': 'Эл. Почта',
    'local.tel': 'Тел.',
    'local.item(s)': 'штук(а)',
    'local.password': 'Пароль',
    'local.view_more': 'Смотреть больше',
    'local.out_of_stock': 'Распродано',
    'local.vacancies': 'Вакансии',
    'local.confirmEmail': 'Пожалуйста, подтвердите адрес электронной почты',
    'local.enter_your_email': 'Введите адрес электронной почты',
    'local.enter_your_password': 'Введите пароль',
    'local.required': 'Обязательное поле',
    'local.wrong_email_or_password': 'Неверное имя пользователя или пароль. Пожалуйста, попробуйте ещё раз!',
    'local.invalid_email': 'Неверно указан адрес эл. почты',
    'local.enter_your_name': 'Введите ваше имя',
    'local.enter_your_surname': 'Введите вашу фамилию',
    'local.enter_your_number': 'Введите ваш номер телефона',
    'local.invalid_field': 'Неверно заполнено поле',
    'local.passwords_must_match': 'Пароли не совпадают',
    'local.password_min_length': 'Пожалуйста, введите минимум 6 символов',
    'local.must_accept_terms_and_conditions': 'Принять Условия обслуживания и Политику конфиденциальности.',
    'local.i_have_read_and_agree': 'Ознакомлен(а) с {termsOfService}.',
    'local.terms_of_service': 'правилами пользования',
    'local.privacy_policy': 'Политику конфиденциальности',
    'local.discount_price': 'Цена со скидкой',
    'local.enter_your_fullname': 'Введите свое полное имя',
    'local.min_3_symbols': 'Пожалуйста, введите минимум 3 символов',
    'local.upload_img': 'Пожалуйста, загрузите изображение',
    'local.successText': 'Успешно выполнено!',
    'local.errorText': 'Что-то пошло не так',
    'local.loadingText': 'Загрузка...',
    'local.about-us': {
      title1: 'title ru',
      title2: 'title ru',
      text1: {
        p1: 'История “Манкан” начинается с 1992 года, когда Варужан Гюрджян работал в ереванском универмаге “Торговый центр”. В центре не было игрушечного отдела, поэтому директор торгового центра предложил господину Гюрджяну открыть игрушечный отдел и руководить им. Господин Гюрджян, который в студенческие годы имел опыт работы только в фабрике производства пластиковых игрушек, открывает отдел. Для того, чтобы хоть как-то организовать продажу, с большим трудом добывают игрушки из России и Армении.',
        p2: 'С 1993 года стал возможным ввоз товаров из-за рубежа. С целью расширения продажи, некоторое время спустя, г-н Гюрджян принимает решение основать собственную фирму.',
        p3: 'В июне 1998 г. основывается ОOO “Манкан”, и по адресу Маштоц 24 открыватеся одноименный специализированный магазин ирушек, что дает возможность непосредственно расширить продажу с сотрудниками-производителями. Имя “Манкан” было выбрано довольно быстро.  Г-н Гюрджян хотел, чтобы имя было простым для восприятия и понимания пользователей.'
      },
      text2: {
        p1: 'В июне 1998 г. основывается ОOO “Манкан”, и по адресу Маштоц 24 открыватеся одноименный специализированный магазин ирушек, что дает возможность непосредственно расширить продажу с сотрудниками-производителями. Имя “Манкан” было выбрано довольно быстро.  Г-н Гюрджян хотел, чтобы имя было простым для восприятия и понимания пользователей.',
        p2: 'Варужан Гюрджян начал путешествовать по всему миру, искал и посещал фабрики, занимающиеся производством игрушек, становясь более информированным и развивая свои знания. В 2002г.  по адресу Абовян 36 открывается второй одноименный магазин. В это время люди стали больше узнавать “Манкан”, и с каждым днем игрушки становились более известными и востребованными.',
        p3: 'В 2012 г. в Ереване открывается первый торговый центр по имени “Далма Гарден Молл”. Специализированный магазин игрушек “Манкан”  становится одним из первых  “жителей”  “Далма Гарден Молл”. Между тем, имея уже три специализированных игрушечных магазина, а также многожество магазин-сотрудников, фабрика своей производственностью и территорией больше не соответствовала требованиям. Следовательно, г-н Гюрджян принимает решение построить новую фабрику с нуля.',
        p4: 'С 2016 г.  фабрика переехала на новый адрес К. Улнеци 70. Новая фабрика более просторная и аккуратная. Она оснащена новейшей технологией, что позволяет организовать производственный процесс и более эффективно расширятся. По этому же адресу на первом этаже открывается четвертый одноименный  магазин. На данный момент  “Манкан” является первой  и единственной компанией, производящей мягконабивные игрушки. Она предлагает широкий ассортимент мягких игрушек, интерактивных игрушек, а также образовательных плакатов.',
        p5: '“Манкан” любит и уважает своего каждого клиента.',
        p6: 'Наша основная цель-довольный клиент.  Г-н Гюрджян всегда в процессе, он никогда не перестает достигать новых целей, чтобы дети были счастливее вместе со своими самыми мягкими и дружелюбными игрушками.',
        p7: 'Как уже отмечалось выше, фабрика оснащена новейшей технологией. Для производства игрушек используются только самые лучшие материалы, которые исключительно чисты и предназначены для производства игрушек, которых дети будут называть “ДРУГОМ”. Безопасность нашего игрушечного качества соответствует международным стандартам.',
        p8: 'За время своей деятельности “Манкан” принял участие  во многих выставках и различных благотворительных мероприятиях.',
        p9: 'Сегодня компания не ограничивается своими достижениями.  “Манкан” продолжает прогрессировать и расширяться.'
      }
    },
    'local.payment-delivery-return': {
      payment: {
        paragraphs: ["is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"],
        listItems: ['is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ']
      },
      delivery: {
        paragraphs: ["is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"],
        listItems: ['is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ']
      },
      Return: {
        paragraphs: ["is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"],
        listItems: ['is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ']
      }
    },
    'local.in_cart': 'Купить сейчас',
    'local.go_to_cart': 'Добавить корзину',
    'local.modal_battery': 'В случае активации необходимые батареи будут автоматически добавлены в корзину',
    'local.email_already_exist': 'Почта уже зарегистрирована',
    'local.sign_up_for_bonus': 'Регистрируйтесь, копите бонусы и делайте покупки с набранными очками.',
    'local.follow_us_for_promo': 'Следите за новостями, получайте промо-коды и делайте покупки со скидками.',
    'local.not_enough_bonus': 'Недостаточно очков.',
    'local.yerevan_cty': 'Г. Ереван',
    'local.delivery_only_in_yerevan': 'Служба доставки пока действует только в городе Ереван',
    'local.i_know': 'Ознакомлен(а) с',
    'local.rules_of_using': ' правилами пользования',
    'local.using-rules': 'Правила пользования ',
    'local.bonus-and-promo-code': 'Бонус и промокод',
    'local.using-bonus': 'Используя бонус',
    'local.payment-methods': 'Способы оплаты',
    'local.min-price': 'Минимальная цена',
    'local.max-price': 'Максимальная цена',
    'local.min_price_of_order': 'минимальная общая стоимость должна быть {price} др.',
    'local.not_listed': 'Не указано',
    'local.no_vacancy_text': 'В данный момент вакансий нет',
    'locale.confirm_email': 'Пожалуйста, подтвердите email',
    'locale.thanks_follow': 'Спасибо за подписку',
    'locale.no_items_in_wish-list': 'Нет предметов в списке желаний',
    'locale.no_items_in_the_cart': 'Пустая корзина',
    'local.home-page': 'Главная',
    'local.catalog': 'Каталог',
    'local.wishlist': 'Список Желаний',
    'local.already_in_cart': 'В корзине',
    'local.cart_added_success': 'Добавлено',
    'local.box_size': 'Размер коробки',
    'local.bonus_and_promo_code1': 'Бонус и промо-код',
    'local.bonus_and_promo_code': [{
      title: 'БОНУС',
      description: [{
        desc: ['Бонусы представляют собой систему кэшбэка, согласно которой, на баланс Пользователя накапливаются средства от совершенных покупок, по проценту, причитающему данному Пользователю.']
      }, {
        desc: ['Каждый Пользователь, в зависимости от общего объема покупок, совершенных с Вебсайта с момента регистрации, может получить бонус в размере 2%, 3% или 4%.']
      }, {
        desc: ['С момента регистрации каждый Пользователь получает кэшбэк в размере 2%.']
      }, {
        desc: ['Если с момента регистрации Пользователь совершил покупку с Вебсайта на сумму более 200 000 драмов, он/она получает бонус в размере 3%.']
      }, {
        desc: ['Если с момента регистрации Пользователь совершил покупку с Вебсайта на сумму более 500 000 драмов, он/она получает бонус в размере 4%.']
      }, {
        desc: ['Бонусы рассчитываются исходя из окончательной цены Товара в корзине (без учета суммы доставки). Бонусные баллы не могут быть обналичены или переведены на другие Учетные записи и могут быть использованы только для совершения покупок с Вебсайта.']
      }, {
        desc: ['Бонусы могут быть использованы только для полной оплаты и не могут быть использованы в сочетании с наличными или онлайн-платежами.']
      }, {
        desc: ['В случае отмены регистрации, накопленные бонусные баллы аннулируются.']
      }]
    }, {
      title: 'ПРОМО КОД',
      description: [{
        desc: ['К каждому промо-коду прикреплён определенный процент скидки, через который на Вебсайте Вы можете совершать покупки со скидкой. С помощью Промо-кода дисконтируется общая сумма Товаров в корзине на момент покупки (кроме суммы доставки).']
      }, {
        desc: ['Промо-коды предназначены для одноразового использования и не могут быть использованы вторично.']
      }]
    }],
    'local.updated': 'Обновлён 01.06.2020',
    'local.using_rules': [{
      title: 'ОБЩИЕ СВОЙСТВА И ПОЛОЖЕНИЯ',
      description: [{
        desc: ['Данные Общие свойства и положения определяют и регулируют правовые отношения, связанные с продажей игрушек и аксессуаров для детей (далее - Продажа), продаваемых на вебсайте (далее - Вебсайт), принадлежащей  компании с ограниченной ответственностью Манкан  (далее - Компания).']
      }, {
        desc: ['Заходя на Вебсайт, используя любой сервис на Вебсайте или загружая любой контент полностью или частично, Вы, как пользователь (далее - Пользователь, Вы, Ваш, Клиент, Покупатель) подтверждаете, что Вы полностью прочитали и поняли данные Условия использования, а также другие Условия Компании о продажах, опубликованных на Вебсайте и положения Договора о публичных поставках (далее - Договор), вы принимаете их безоговорочно, независимо от того, являетесь ли вы Покупателем, зарегистрированным Пользователем Вебсайта или  же просто посетителем.']
      }, {
        desc: ['Компания имеет право в одностороннем порядке изменить данные Положения в любое время без предварительного уведомления. В случае их изменения Компания опубликует обновленные Положения на Вебсайте, указав дату последнего изменения. Пользователь обязан время от времени посещать Вебсайт и проверять изменения Положения использования. Кроме того, новые Положения имеют юридическую силу и применяются к обязательствам, возникающим после их размещения на Вебсайте.']
      }, {
        desc: ['Если Вы не согласны с данными Положениями, прекратите использование Вебсайтом. Находясь на Вебсайте, открывая Учетную запись, становясь Пользователем и пользуясь Услугами, Вы подтверждаете свое безоговорочное согласие с этими Положениями.']
      }]
    }, {
      title: 'ПРАВО НА ПОДПИСАНИЕ КОНТРАКТА',
      description: [{
        desc: ['Зарегистрироваться или совершить покупку на Вебсайте могут правоспособные  и дееспособные лица старше 18 лет. Компания не несет ответственности за какие-либо действия, предпринятые лицами моложе 18 лет или являющимися недееспособными (по признанию суда).']
      }, {
        desc: ['В личные данные могут быть внесены только данные, которые фактически принадлежат зарегистрированному Пользователю или Пользователю, делающему покупки. Соглашаясь с данным Положением, Вы признаете, что Компания не может проверять подлинность Ваших заявлений на данном этапе, которые Вы предоставляете, поэтому Вы несете единоличную ответственность за любые нарушения данного пункта.']
      }, {
        desc: ['В случае обнаружения ошибочных или ненадежных данных, Компания имеет право удалить Пользователя из системы,  обнулив накопленные баллы и историю покупок.']
      }]
    }, {
      title: 'УСЛОВИЯ ПРОВИДЕНИЯ ДОСТАВКИ',
      description: [{
        desc: ['Компания продает свою продукцию своим Клиентам (далее - Товар) и передает их курьерской службе для доставки по адресу, указанному Заказчиком.']
      }, {
        desc: ['Чтобы полнее использовать возможности совершения покупок на Вебсайте, Вы должны зарегистрироваться на Вебсайте и открыть Учетную запись Пользователя (далее - Учетная запись Пользователя или Учетная запись). Каждый Пользователь может иметь только одну Учетную запись. Пользователи не имеют права использовать Учетную запись другого Пользователя. При открытии Учетной записи Пользователь должен правильно и точно представить всю необходимую информацию. Пользователи несут ответственность за ведение информации для входа в свою Учетную запись и отвечают за операции через свою Учетную запись.']
      }, {
        desc: ['Пользователь обязан немедленно уведомить Компанию, если он уверен, что к его Учетной записи был сделан несанкционированный доступ. В таком случае Компания имеет право немедленно заблокировать Учетную запись до полного выяснения обстоятельств.  В любом случае, Компания не несет ответственности за любые действия, предпринятые другими Пользователями через счет Пользователя. Пользователь несет ответственность за ущерб, причиненный Компании или третьим лицам этими действиями.']
      }, {
        desc: ['При совершении заказа Клиент обязан иметь на счете или наличными достаточные средства для выполнения указанного Заказа.']
      }, {
        desc: ['Компания может в тот момент, когда общий объем заказов увеличивается (праздничные дни, дисконтные программы или мероприятия и т. д.), или в случае технических (пробки, автомобильные аварии и т. д.) или природных барьеров, задерживать доставку заказов.']
      }]
    }, {
      title: 'УСЛОВИЯ ПРИНЯТИЯ И АДРЕССОВАНИЯ ЗАКАЗОВ',
      description: [{
        desc: ['После получения заявки на покупку Товара, Сервисный отдел Компании дополнительно проверяет внешний вид данного товара и отсутствие физических или механических дефектов. Если приобретенный Товар не соответствует характеристике, предписанной для продажи, есть физические или механические дефекты, то сотрудник Сервисного центра Компании связывается с Вами, чтобы заменить Товар или отменить заказ.']
      }, {
        desc: ['Если приобретенный Товар соответствует представленным стандартам, отсутствуют физические или механические дефекты, то Товар подготавливается к доставке, после чего Сотрудник сервисного центра Компании может дополнительно созвониться с Вами, чтобы подтвердить детали Вашего заказа (подтверждение адреса доставки, заказанные товары, времени доставки).']
      }, {
        desc: ['Если Покупатель в заявке на покупку указал, что произведет оплату наличными и не отвечает на телефонный звонок, полученный из сервисного центра на указанный номер телефона, то Компания имеет право не передавать Товар на поставку и отменить сделку.']
      }, {
        desc: ['Если Покупатель совершил онлайн-платеж и не отвечает на телефонный звонок, полученный из Сервисного центра на указанный номер телефона, то Компания имеет право не передавать Товар на доставку, а в случае, если Клиент не связываться с Сервисным Центром в течение следующего рабочего дня, отменить транзакцию и вернуть всю сумму.']
      }, {
        desc: ['Если Покупатель произвел оплату накопленными бонусными баллами и не отвечает на телефонный звонок, полученный из Сервисного центра на указанный номер телефона, то Компания имеет право не передавать Товар на доставку, а в случае, если Клиент не связываться с Сервисным Центром в течение следующего рабочего дня, отменить транзакцию и вернуть все накопленные баллы.']
      }, {
        desc: ['В случае подтверждения заказа Покупателем, доставка передается курьеру.']
      }, {
        desc: ['Курьер - это физическое или юридическое лицо, которое сотрудничает с Компанией, но является отдельным налогоплательщиком.']
      }, {
        desc: ['Если Покупатель в заявке на покупку указал, что произведет оплату наличными, и после передачи Товара курьеру меняется адрес доставки, то Компания имеет право взимать дополнительную плату за доставку товара во время доставки Покупателю в размере стоимости одной полной доставки, а купон за дополнительно начисленную сумму Покупатель может получить  из Сервисного центра по адресу г. Ереван, К. Улнеци 70 или по электронной почте.']
      }, {
        desc: ['Если Покупатель совершил онлайн-платеж, и после передачи Товара курьеру меняется адрес доставки, то Компания имеет право взимать дополнительную плату наличными за доставку товара во время доставки Покупателю в размере  суммы одной полной доставки, а купон за дополнительно начисленную сумму Покупатель может получить  из Сервисного центра по адресу г. Ереван, К. Улнеци 70 или по электронной почте.']
      }, {
        desc: ['Если Покупатель произвел оплату накопленными бонусными баллами, и после передачи Товара курьеру меняется адрес доставки, то Компания имеет право взимать дополнительную плату наличными за доставку товара во время доставки Покупателю в размере суммы одной полной доставки, а купон за дополнительно начисленную сумму Покупатель может получить  из Сервисного центра по адресу г. Ереван, К. Улнеци 70 или по электронной почте.']
      }, {
        desc: ['Курьер может связаться с Покупателем по телефону, чтобы уточнить адрес или другие детали. Если Покупатель не отвечает на звонок курьера на указанный номер телефона, или существуют и другие препятствия для доставки, то курьер имеет право вернуть заказ в Сервисный центр.']
      }, {
        desc: ['Если Покупатель в заявке на покупку указал, что произведет оплату наличными и не отвечает на звонок курьера на указанный номер телефона, или существуют и другие препятствия для доставки, то, если Покупатель не связывается с Сервисным центром в течение одного рабочего дня после возврата товара в Сервисный центр, Компания имеет право считать заказ отмененным.']
      }, {
        desc: ['Если Покупатель совершил онлайн-платеж и не отвечает на звонок курьера на указанный номер телефона, или существуют и другие препятствия для доставки, то, если Покупатель не связывается с Сервисным центром в течение одного рабочего дня после возврата товара в Сервисный центр, Компания имеет право считать заказ отмененным, вернув всю сумму целиком, кроме платы за доставку. ']
      }, {
        desc: ['Если Покупатель произвел оплату накопленными бонусными баллами и не отвечает на звонок курьера на указанный номер телефона, или существуют и другие препятствия для доставки, то если Покупатель не связывается с Сервисным центром в течение одного рабочего дня после возврата товара в Сервисный центр, Компания имеет право считать заказ отмененным, вернув все бонусные баллы, кроме баллов, заплаченных за доставку. ']
      }, {
        desc: ['Если Покупатель не отвечает на звонки Сервис центра или как-то иначе препятствует осуществлению доставки, после возврата доставки  в Сервисный центр, если доставка снова производится, то такая доставка считается двойной, и Компания имеет право взимать двойную сумму доставки.']
      }, {
        desc: ['Если случаи, когда Покупатель не отвечает на звонки Сервис центра или как-то иначе препятствует осуществлению доставки, случаются часто, то заказы данного Покупателя могут больше не обслуживаться, Покупатель может быть удален из системы, потеряв накопленные баллы и историю совершенных покупок. ']
      }, {
        desc: ['В момент получения заказа, в присутствии курьера, Покупатель обязан проверить соответствие качества доставленного товара, возможные физические и механические дефекты и исправность. Если какой-либо из доставленных товаров не соответствует требуемому качеству, имеются физические или механические дефекты или же Товар находится в неисправном состоянии, Покупатель может отказаться  как только от данного конкретного Товара, так и от всей  доставки целиком или потребовать новый Товар или заменить его.']
      }, {
        desc: ['Если какой-либо из доставленных товаров не соответствует требуемому качеству, имеются физические или механические дефекты или же Товар находится в неисправном состоянии, то в случае  замены Товара взымается единовременная плата за доставку.']
      }, {
        desc: ['Если Покупатель произвел оплату наличными, доставленные товары хорошего качества, не имеют физических или механических дефектов, находятся в хорошем состоянии, но Покупатель отказывается от заказанных Товаров, то Компания имеет право взимать с Покупателя плату за услугу доставки.']
      }, {
        desc: ['Если Покупатель совершил онлайн-платеж, доставленные товары хорошего качества, не имеют физических или механических дефектов, находятся в хорошем состоянии, но Покупатель отказывается от заказанных Товаров, тогда вся сумма возвращается, кроме платы за доставку.']
      }, {
        desc: ['Если Покупатель произвел оплату накопленными бонусными баллами, доставленные товары хорошего качества, не имеют физических или механических дефектов, находятся в хорошем состоянии, но Покупатель отказывается от заказанных Товаров, тогда все бонусные баллы возвращается, кроме баллов, зачисленных за плату за доставку.']
      }, {
        desc: ['Если покупатель часто отказывается от товаров хорошего качества, без физических и механических дефектов, заказы данного Покупателя  могут быть не приняты, Покупатель может быть удален из системы, потеряв накопленные баллы и историю покупок.']
      }]
    }, {
      title: 'УСЛОВИЯ ОПЛАТЫ И ВОЗВРАТА',
      description: [{
        desc: ['Наличную оплату за продаваемые Компанией товары может осуществляться только в армянских драмах.  ']
      }, {
        desc: ['Продажа товаров  осуществляется по тарифам, в данный момент указанных на Вебсайте.']
      }, {
        desc: ['В соответствии с законодательством РА, Покупатель имеет право в течении 14 дней вернуть доставку при наличии купона на покупку, маркировки, прикрепленной к товару, отсутствии физических и механических дефектов, а также в исправном состоянии, получив назад все уплаченные деньги, кроме платы за доставку.']
      }, {
        desc: ['В случае онлайн-платежа, при возврате товара  в соответствии с процедурой, определенной в пункте 3 настоящей главы, перевод  суммы может занять 10 рабочих дней, в зависимости от скорости банковских услуг.']
      }, {
        desc: ['В случае платежа за товар бонусными баллами, при возврате товара  в соответствии с процедурой, определенной в пункте 3 настоящей главы, перевод  суммы может занять 5 рабочих дней.']
      }, {
        desc: ['Независимо от способа оплаты, после получения доставки от курьера, возврат может быть произведен самостоятельно, принеся Товар в Сервисный центр, по адресу г. Ереван, К. Улнеци 70. ']
      }, {
        desc: ['Правила возврата, регулируемые настоящей главой, не распространяются на товары, определенные законодательством Республики Армения, для которых законодательством не предусмотрено возмещение.']
      }]
    }, {
      title: 'КОНФИДЕНЦИАЛЬНОСТЬ',
      description: [{
        desc: ['Вы можете посещать Вебсайт без регистрации, но Вы должны зарегистрироваться на Вебсайте, чтобы использовать полный спектр услуг компании. Личные данные собирается (получается) только тогда, когда Вы предоставляете их во время регистрации или покупки. При регистрации или совершении покупки Вы должны указать свое имя, адрес, адрес электронной почты и контактную информацию.']
      }, {
        desc: ['Для анализа поведения Пользователей, для анализа удобства пользования Вебсайтом, для предоставления более удобных услуг, при использовании сайта, используемые нами системы мониторинга и анализа могут автоматически перенять Ваш IP-адрес, имя браузера, тип компьютера, техническую информацию о Пользователях, средства связи с нашим сайтом, такие как тип операционной системы, название организации, предоставляющей  Интернет услуги и другая подобная информация.']
      }, {
        desc: ['Сайт может использовать Куки, чтобы сделать сайт быстрым и удобным в использовании. Куки - это линии шрифта, созданные на Вебсайте. При посещении сайта они дублируются на вашем компьютере. Куки безопасны для компьютера и не собирают личные данные. По соображениям безопасности движение денежных средств и связанные с ним данные могут контролироваться банками и системами, обслуживающими денежные переводы.']
      }, {
        desc: ['Компания принимает соответствующие электронные, физические и другие меры безопасности, чтобы обеспечить защиту ваших личных данных от незаконного доступа, изменения или публикации. Все предоставленные вами данные хранятся в защищенной базе данных сервера. С помощью паролей мы защищаем любую страницу Компании, которая содержит ваши личные данные. Компания никогда не попросит Вас назвать пароль в телефонном звонке или по электронной почте. Мы не будем предоставлять ваши персональные данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законодательством (запросы в рамках юрисдикции правоохранительных и государственных органов, судебные расследования и т. д.). Мы можем предоставлять Ваши данные только лицам, связанным с нами, в тех случаях, когда эта информация требуется для предоставления вам услуг,  и для улучшения их качества. Мы сотрудничаем с другими организациями и/или частными лицами для надлежащего предоставления вам Услуг, таких как прием заказов, анализ базы данных, маркетинговая поддержка, оплата банковскими картами и клиринг. Указанные лица имеют доступ к необходимым данным для осуществления указанных ими операций и не вправе использовать эту информацию для других целей.']
      }]
    }, {
      title: 'ПРЕКРОЩЕНИЕ И РАСТОРЖЕНИЕ КОНТРАКТА',
      description: [{
        desc: ['Вы имеете право в любое время расторгнуть Соглашение с Компанией до расторжения выполнив все Ваши платежные обязательства перед Компанией. При наличии просроченных обязательств, Соглашение не может считаться расторгнутым.']
      }, {
        desc: ['Чтобы расторгнуть Договор и закрыть Учетную запись на  Вебсайте mankan.am, необходимо подать заявление о расторжении Договора и закрытия счета по адресу {email} с адреса электронной почты, прилепленного к Учетной записи, с указанием адреса электронной почты, имени/фамилии и номера телефона, указанных при регистрации Учетной записи.']
      }, {
        desc: ['Подача заявки на расторжение Договора означает, что Клиент отказывается от бонусных баллов на Учетной записи.']
      }]
    }],
    'local.infoAboutYou': 'В любом случае мы с радостью окажем содействие нашим клиентам, и при неисправности приобретенной у нас продукции наши специалисты по возможности отремонтируют и доставят ее Вам.',
    'local.Phone': 'Телефон',
    'local.Business_hours': 'Рабочий график',
    'local.Wish_list': 'Список предпочтений',
    'local.new_password': 'Новый пароль',
    'local.barcode': 'ID ',
    'local.wrong_promo_code': 'Неправильный пором код',
    'local.not_available_product': 'Товара нет в наличии ',
    'local.product_not_found': 'Нет продуктов с этой комбинацией',
    'local.example': 'например 910425',
    'local.shop_adresses': [{
      address: 'Г. Ереван, ул. Карапета Улнеци 70',
      phone: '(+374) 99 530311',
      businessHours: 'Каждый день с 10։00 до 20։00'
    }, {
      address: 'Г. Ереван, проспект Месропа Маштвца 24',
      phone: '(+374) 99 540311',
      businessHours: 'Каждый день с 10։00 до 20։00'
    }, {
      address: 'Г. Ереван, ул. Абовяна 36',
      phone: '(+374) 99 520311',
      businessHours: 'Каждый день с 10։00 до 20։00'
    }, {
      address: 'Г. Ереван, Далма Гарден Мол',
      phone: '(+374) 99 414029',
      businessHours: 'Каждый день с 10։00 до 22։00'
    }]
  },
  ENG: {
    'local.barcode': 'ID ',
    'local.filter': 'Filter',
    'local.necessary_skills': 'Necessary Skills',
    'local.job_responsibilities': 'Job Responsibilities',
    'local.back': 'Back',
    'local.general_assortment': 'General assortment',
    'local.my_page': 'My Page',
    'local.shortYear': 'y',
    'local.ex.economics': 'Ex.Economics',
    'local.more_percents_message': 'Make additional {price} AMD purchase to earn {new_percent}% cash back bonus reward instead of {last_percent}%.',
    'local.free_shipping_message': 'Free delivery on purchases {price}  or more',
    'local.ex.word': 'Ex.Word',
    'local.future_position': 'In what position do you see yourself in the future?',
    'local.apply_online': 'Apply online',
    'local.download_CV_using_formats': 'Download CV in PDF, MS Word or JPG format',
    'local.ex.reading': 'Ex.reading',
    'local.day': 'Day',
    'local.not_specifiedе': 'Usefulness',
    'local.confirm_changes': 'Confirm Changes',
    'local.select_age': 'Age',
    'local.mobile_phone': 'Mobile phone',
    'local.apartment_house': 'Apartment / House',
    'local.software_skills': 'Software skills',
    'local.meaning': 'Usefulness',
    'local.still_learning': 'Still learning',
    'local.choose_gift': 'Choose a Gift',
    'local.position': 'Position ',
    'local.preferences': 'Preferences',
    'local.startpoint': 'Start ',
    'local.endpoint': 'End ',
    'local.add_another_favorite': 'Add another',
    'local.add_other_business_exp': 'Add another',
    'local.still_working': "I'm still working",
    'local.ex.facebook': 'Ex․ facebook',
    'local.online_application': 'Online application',
    'local.professional_experience': 'Work experience',
    'local.cash': 'Cash',
    'local.ex.cashier': 'Ex․Cashier',
    'local.bonus_Wey': 'Bonus',
    'local.add': 'Add',
    'local.can_use_bonus_if': 'Sign in and earn bonuses shup with your points',
    'local.attach': 'Attach',
    'local.add_another_social': 'Add another',
    'local.ex.Mankan': 'Ex․Mankan',
    'local.add_another_language': 'Add another',
    'local.education': 'Education',
    'local.knowledge_of_languages': 'Language proficiency',
    'local.buy_now': 'Buy Now',
    'local.Choose_from_a_5_point': 'Level',
    'local.degree_of_education': 'Degree of education',
    'local.ex.bachelor': 'Ex.Bachelor',
    'local.educational_complex': 'Educational Complex',
    'local.ex.YSU': 'Ex.YSU',
    'local.company': 'company',
    'local.confirm': 'Confirm',
    'local.Armenian': 'Armenian',
    'local.payment_method': 'Payment Method ',
    'local.add_another_educational_complex': 'Add another',
    'local.download_picture': 'Upload photo',
    'local.credit_card': 'Bank card',
    'local.my_orders': 'My orders',
    'local.city_street': 'Street / building',
    'local.delivery_period': ' Delivery time',
    'local.expect_from_our_team': 'What do you expect from our team?',
    'local.fill_in_the_data': 'Delivery Data',
    'local.project_name': 'Program Name',
    'local.products': 'product(s)',
    'local.enter': 'Entrance',
    'local.dr': 'AMD',
    'local.write_a_review': 'Write a Review',
    'local.final_settlement': 'Final Settlement',
    'local.km': 'km',
    'local.date_of_purchase': 'Date of purchase ',
    'local.today': 'Today',
    'local.tomorrow': 'Tomorrow',
    'local.confirm_order': 'Confirm',
    'local.quantity': 'Quantity',
    'local.promo_code': 'Promo Code',
    'local.repeat_new_password': 'Repeat new password',
    'local.total': 'Total',
    'local.job_announcements': 'Job Announcements',
    'local.order_again': 'Order again',
    'local.product_available': 'Product available',
    'local.social_networks': 'Social networks',
    'local.money_accumulated': 'Points earned',
    'local.personal_info': 'Personal Data',
    'local.information': 'Information',
    'local.my_profile': 'My profile',
    'local.change_password': 'Change password',
    'local.faculty': 'Faculty',
    'local.similar_products': 'Similar Products',
    'local.search': 'Search',
    'local.exit': 'Exit',
    'local.technical_specifications': 'Specifications',
    'local.accompanying_products': 'You may also like',
    'local.discount_size': 'Available bonus size',
    'local.battery': 'Battery',
    'local.delivery': 'Will be delivered',
    'local.delivery_price': 'Delivery',
    'local.usefulness': 'Usefulness',
    'local.add_batteries': 'Add batteries',
    'local.write_complaint': ' Write a Complaint',
    'local.my_basket': 'My cart',
    'local.gender': 'Gender',
    'local.description': 'Description',
    'local.item(s)': 'item(s)',
    'local.all_of': 'All',
    'local.viewed_products': 'Viewed products',
    'local.price_by_increase': 'Price (low first)',
    'local.see_more': 'See more',
    'local.branded_paper_bags': 'Branded Paper Bags',
    'local.abovyans': '36 Abovyan str., Yerevan',
    'local.mashtots': '24 Mashtots ave., Yerevan',
    'local.dalma': 'Dalma Garden Mall, Yerevan',
    'local.specification': 'Sort By',
    'local.new_products': 'New Items',
    'local.kiosk': 'kiosk',
    'local.return': 'Return',
    'local.ulnetsi': '70 Ulnetsi str., Yerevan',
    'local.type': 'Selection',
    'local.name_surname': 'First name, Last name',
    'local.years': 'years',
    'local.year_short': 'y.',
    'local.to_infants': 'Infants',
    'local.payment': 'Payment',
    'local.to_girls': 'Girls',
    'local.mon_fri': 'Mon. - Set.',
    'local.to_boys': 'Boys',
    'local.message': 'Message',
    'local.write_offer': ' Write an offer',
    'local.months': 'Months',
    'local.for_girls': 'For girls',
    'local.discounts': 'Sale',
    'local.sign_up_get_updates': 'Sign up to get updates',
    'local.shops': 'Shops',
    'local.for_boys': 'For boys',
    'local.girl': 'Girls',
    'local.girl1': 'Girls',
    'local.boy': 'Boys',
    'local.boy1': 'Boys',
    'local.size': 'Size',
    'local.bonus': 'Bonus',
    'local.all': 'All',
    'local.price': 'Price',
    'local.register': 'Register',
    'local.complaint': ' Complaint',
    'local.age': 'Age',
    'local.brand': 'Brand',
    'local.add_to_cart': 'Add to Cart',
    'local.best_selling': 'Best Sellers',
    'local.best_selling1': 'Best Seller',
    'local.buy': 'Buy',
    'local.suggestion': ' Suggestion',
    'local.extra': 'Extra',
    'local.discounted_assortment': 'Sale',
    'local.select_by_age': 'Select by Age',
    'local.own_products': 'Own production',
    'local.news': 'New Items',
    'local.specify_price': 'Price',
    'local.will_send_new_password': 'You will receive a password recovery E-mail in a couple of minutes',
    'local.select_gender': 'Gender',
    'local.password_recovery': ' Password Recovery',
    'local.forgot_password': ' Forgot your password?',
    'local.remember': 'Remember',
    'local.send': 'Send',
    'local.repeat_password': 'Repeat password',
    'local.about_us': 'About us',
    'local.payment_delivery_return': 'Payment / Delivery / Return',
    'local.feedback': 'Feedback',
    'local.complain_suggestion': 'Suggestion / Complaint',
    'local.our_addresses': 'Branches',
    'local.login': 'Login',
    'local.login1': 'Login',
    'local.registration': 'Registration',
    'local.registration1': 'Login',
    'local.name': 'First name',
    'local.last_name': 'Last name',
    'local.email': 'Email',
    'local.tel': 'Tel.',
    'local.password': 'Password',
    'local.view_more': 'View more',
    'local.sm': 'cm',
    'local.out_of_stock': 'Out of stock',
    'local.vacancies': 'Vacancies',
    'local.confirmEmail': 'Please, confirm your email',
    'local.enter_your_email': 'Enter your email',
    'local.enter_your_password': 'Enter your password',
    'local.required': 'Required field',
    'local.wrong_email_or_password': 'Invalid username or password, please try again',
    'local.invalid_email': 'Please, enter valid email address',
    'local.enter_your_name': 'Enter your name',
    'local.enter_your_surname': 'Enter your surname',
    'local.enter_your_number': 'Enter your phone number',
    'local.invalid_field': 'Invalid field',
    'local.passwords_must_match': 'Passwords must match',
    'local.password_min_length': 'Please enter at least 6 characters',
    'local.must_accept_terms_and_conditions': 'Please accept Terms of Service and Privacy Policy.',
    'local.i_have_read_and_agree': 'I have read and agreed to the {termsOfService}',
    'local.terms_of_service': 'Terms and conditions',
    'local.privacy_policy': 'Privacy Policy',
    'local.discount_price': 'Discounted price',
    'local.enter_your_fullname': 'Enter your full name',
    'local.min_3_symbols': 'Please enter at least 3 characters',
    'local.upload_img': 'Please upload an image',
    'local.successText': 'Successfully done!',
    'local.errorText': 'Something went wrong',
    'local.loadingText': 'Loading...',
    'local.email_already_exist': 'This e-mail is already registered',
    'local.sign_up_for_bonus': 'Sign up and earn bonuses shup with your points',
    'local.follow_us_for_promo': 'Stay tuned for more news, receive promo codes and shop with the best deals',
    'local.not_enough_bonus': 'Not enough points.',
    'local.about-us': {
      title1: 'title eng',
      title2: 'title eng',
      text1: {
        p1: '“Mankan”s history goes back to 1992 when Varuzhan Gyurjyan was working at a shopping center in Yerevan, Armenia. Since the center did not have a toy store, the center’s director offered Mr. Varuzhan to open a toy store and become a head of it. Mr. Gyurjyan having only an experience of working at a factory of producing plastic toys during his student years, opens the store. He was searching for toys all over Armenia and Russia.',
        p2: 'In 1993 it was possible to import products from overseas. Some times later, to expand the consumption Mr. Varuzhan decides to establish a company of his own.',
        p3: 'In June 1998, Mankan LLC was established and a Toy store under the same name opened at 24 Mashtots Ave., which provided an opportunity to expand the field of cooperation with the producer-partners directly. The name “Mankan” was chosen very quickly. He wanted the name to be easy acceptable and understandable for the consumers.'
      },
      text2: {
        p1: 'By that time the demand for plush toys was rising in Armenia. Years of work experience, constant self-improvement aspiration, as well as the desire of creating new jobs gave Mr. Gyurjyan an idea to open his own factory of producing plush toys. The luck was on his side and in 2000 he managed to find a property for the factory right in his neighborhood, Zavaryan 57/19. The production began from one worker with a sewing  machine.',
        p2: 'Varuzhan Gyurjyan started travelling all over the world, finding factories of producing toys, getting more educated in the process, he was always progressing.',
        p3: 'Busy with the store and the factory in 2002 the second “Mankan” store opened on 36 Abovyan str..',
        p4: 'People were getting more familiar with “Mankan” and the brand’s toys were being more loved day by day. In 2012, the first mall opened in Armenia, Yerevan named “Dalma Garden Mall”.',
        p5: '“Mankan” specialized toy store was one of his first residents. Meanwhile, having already 3 specialized toy stores, the factory was getting too small.',
        p6: 'Therefore, Mr. Gyurjyan decides to build a new factory from the scratch.',
        p7: 'In 2016, the production moved to a new address, Ulnetsi 70.  The new factory is, more spacious, clean and is equiped with the latest technologies.',
        p8: 'The fourth “Mankan” store opened in the same building’s first floor. Nowadays, “Mankan” is the first and the only company that produces plush toys in Armenia, which offers a variety of plush toys, interactive toys and educational posters for children. We love and appreciate our every single customer. A satisfied customer is our main goal.',
        p9: 'Mr. Varuzhan is always on the run, he never stops achieving newer goals and making kids happier with his super cuddly and friendly toys. The production is equipped with the latest technologies. Only the best materials that are exclusively pure and are specially created for the production of toys are being used for creating a toy that children can call a “FRIEND”. The safety of our toys meets the quality of the international standards.',
        p10: 'Throughout his career, “Mankan” has participated in many exhibitions and various charitable events. Today, the company is not limited to its achievements. “Mankan” continues advancing and expanding. '
      }
    },
    'local.payment-delivery-return': {
      payment: {
        paragraphs: ["is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"],
        listItems: ['is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ']
      },
      delivery: {
        paragraphs: ["is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"],
        listItems: ['is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ']
      },
      Return: {
        paragraphs: ["is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"],
        listItems: ['is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ', 'is simply dummy text of the printing and typesetting industry. ']
      }
    },
    'local.in_cart': 'Buy now',
    'local.go_to_cart': 'Add a basket',
    'local.modal_battery': 'By selecting this the batteries will autometically add to your cart',
    'local.yerevan_cty': 'City-Yerevan',
    'local.delivery_only_in_yerevan': 'Rignht now we deliver in Yerevan city only',
    'local.i_know': 'I know',
    'local.rules_of_using': 'rules of using',
    'local.using-rules': 'Terms and conditions',
    'local.bonus-and-promo-code': 'Bonus and promo code',
    'local.using-bonus': 'Using bonus',
    'local.payment-methods': 'Payment methods',
    'local.min-price': 'Minimum price',
    'local.max-price': 'Maximum price',
    'local.min_price_of_order': 'min total price should be {price} AMD',
    'local.not_listed': 'Not listed',
    'local.no_vacancy_text': 'There are currently no vacancies',
    'locale.confirm_email': 'Please, confirm your email',
    'locale.thanks_follow': 'Thank you for subscribing',
    'locale.no_items_in_wish-list': 'No items in wish list',
    'locale.no_items_in_the_cart': 'No items in the cart',
    'local.home-page': 'Home',
    'local.catalog': 'Catalog',
    'local.wishlist': 'Wishlist',
    'local.already_in_cart': 'In cart',
    'local.cart_added_success': 'Added to card',
    'local.box_size': 'Box size',
    'local.Phone': 'Phone',
    'local.Business_hours': 'Business hours',
    'local.Wish_list': 'Wish list',
    'local.new_password': 'New password',
    'local.bonus_and_promo_code1': 'Bonus and promo-code',
    'local.bonus_and_promo_code': [{
      title: 'BONUS',
      description: [{
        desc: ['Bonuses are a form of cashback, when, from the purchases made, amounts are accumulated in the Balance of the User, by the relevant percentage applied to the User. ']
      }, {
        desc: ['Each User, depending on the volume of total purchases made from the Website since registration, may have a 2%, 3% or 4% bonus.']
      }, {
        desc: ['Upon registration, each User has a 2% cashback.']
      }, {
        desc: ['If the User has made more than 200,000 AMD purchases from the Website since the registration, the User has the opportunity to get a 3% bonus.']
      }, {
        desc: ['If the User has made more than 500,000 AMD purchases from the Website since the registration, the User has the opportunity to get a 4% bonus.']
      }, {
        desc: ['The bonuses are calculated from the final discounted price of the products in the cart (not taking into account the delivery fee). The bonus points cannot be cashed or transferred to other Accounts and can only be used to make purchases from the Website.']
      }, {
        desc: ['The bonuses can only be used for full payments and cannot be used in conjunction with cash or online payments.']
      }, {
        desc: ['Upon termination of the registration, the accumulated bonus points are canceled.']
      }]
    }, {
      title: 'PROMO CODE',
      description: [{
        desc: ['Each promo code is aligned with a certain discount percentage, through which discounted purchases can be made from the Website.']
      }, {
        desc: ['By the promo code the total amount of goods in the cart is discounted at the time of purchase (except for the delivery fee).']
      }, {
        desc: ['Promo codes are for single use and cannot be applied twice.']
      }]
    }],
    'local.updated': 'Updated on 01.06.2020',
    'local.using_rules': [{
      title: 'GENERAL PROVISIONS AND TERMS',
      description: [{
        desc: ['The following General Provisions and Terms set and regulate the legal provisions associated with the sale of toys and accessories for children (hereinafter referred to as the Sale) through the website (hereafter referred to as the Website) belonging to the Mankan Limited Liability Company (hereinafter referred to as the Company).']
      }, {
        desc: ['By accessing the Website, using any Service on the Website or downloading any content in whole or in part, you, as a User, (hereinafter referred to as the User, you, your, Customer, Buyer, Client) confirm that you have fully read and understood the following Terms of Use, as well as the Company’s other Terms of Sale published on the Website, the provisions of the Public Supply Contract (hereinafter referred to as the Contract), as well as you accept them unconditionally, regardless of whether you are a Customer, Website Registered User or just a visitor.']
      }, {
        desc: ['The Company has the right to unilaterally change these Terms at any time without prior notice. In the case of the changes, the Company will publish the updated Terms in the Website, mentioning the date of the last change. It is the duty of the User to visit the Website from time to time and check the changes of Terms. Moreover, the new Terms will have legal force and will apply to the obligations arising after publishing them on the Website.']
      }, {
        desc: ['If you do not agree to the following Terms, please stop using the Website. By staying on the Website, opening an Account, becoming a User and by using any service, you confirm your unconditional acceptance of the Terms. ']
      }]
    }, {
      title: 'THE RIGHT TO SIGH THE AGREEMENT',
      description: [{
        desc: ['Persons over the age of 18 with legal capacity can register or make purchases by the Website. The Company is not responsible for any actions taken by persons under the age of 18 or incapacitated (recognized by the court as such).']
      }, {
        desc: ['Personal data may be supplemented only with data that actually belongs to the registered User or to the User making a purchase. By accepting the following Terms, you accept that the Company cannot verify the information and data you provide, the authenticity of your credentials, so the full responsibility for any breach of this clause falls on you.']
      }, {
        desc: ['The Company has the right to remove the User from the system in case of discovering the fact of misrepresentation or unreliable data, resetting the accumulated points and the purchase history.']
      }]
    }, {
      title: 'DELIVERY IMPLEMENTATION TERMS',
      description: [{
        desc: ['The Company sells its products to its customers (hereinafter referred to as the Product) and transfers them to the shipping company to be delivered to the address specified by the Customer.']
      }, {
        desc: ["In order to fully benefit from the opportunity to make a purchase from the Company, you must register on the Website and open a User Account (hereinafter referred to as a User Account or Account). Each User can have only one Account. Users do not have the right to use another User's account. When opening an Account, the User must provide all the required information in a correct and accurate manner. Users are responsible for maintaining their Account access data and for the actions/operations performed through their Accounts. "]
      }, {
        desc: ['If the User is sure there has been an unauthorized access of his/her Account, he/she is obliged to immediately inform the Company. In such circumstances the Company has the right to block the Account until all the details are found out. In any case, the Company is not responsible for actions undertaken by other persons through the User Account. The User is responsible for the damage caused to the Company or third parties caused by such actions.']
      }, {
        desc: ['When making an order, the Customer is obliged to have sufficient funds in his/her Account or in cash to fulfill the Order.']
      }, {
        desc: ['The Company may postpone the delivery dates of orders when the overall volume of order increases (holidays, discount programs, events, etc.) or when there are technical (traffic jams, car accidents, etc.) or innate issues.']
      }]
    }, {
      title: 'ORDER ACCEPTANCE AND ADDRESSING TERMS',
      description: [{
        desc: ["After receiving the request for the purchase of the Product, the Service Department of the Company additionally checks the appearance of the given product and the absence of physical or mechanical damage. If the purchased product does not correspond to the sales standards, there are physical or mechanical defects, then the employee of the Company's service center contacts You to replace the Product or to cancel the order."]
      }, {
        desc: ["If the purchased product corresponds to the required standards, there are no physical or mechanical defects, then the product is being made ready for the delivery, after which the employee of the Company's service center can make additional phone calls to confirm the details of the order (adjustment of delivery address, ordered goods, delivery time)."]
      }, {
        desc: ['If the Buyer states in the purchase request that he/she will make a cash payment and does not answer the phone call received from the Service center to the mentioned phone number, then the Company has the right not to transfer the Product to the delivery and cancel the transaction.']
      }, {
        desc: ['If the Buyer has made an online payment and does not answer the call received from the Service center, the Company has the right not to transfer the goods for delivery and cancel the transaction in case of not contacting the service center within one business day, by returning the full amount paid.']
      }, {
        desc: ['If the Buyer has made a payment with accumulated bonus points and does not answer the call received from the service center, the Company has the right not to transfer the Product to delivery, and in case of not contacting the Service Center within one business day, cancel the transaction by returning the points.']
      }, {
        desc: ['In case of confirmation of the order by the buyer, the delivery is transferred to the courier.']
      }, {
        desc: ['The courier is a separate physical and legal entity that cooperating with the Company.  ']
      }, {
        desc: ['If the Buyer has specified in the order request that he/she will perform a cash payment and the shipping address changes after the shipment is transferred to the courier, the Company has the right to extra charge the Buyer by up to one full delivery fee when delivering the product to the Buyer, and the Buyer can get the coupon of that additional charge in the Service center by the following address: Yerevan, K. Ulnetsi 70, or by an email.']
      }, {
        desc: ['If the Buyer has made an online payment and the shipping address changes after the shipment is transferred to the courier,  the Company has the right to make an additional cash charge to Buyer by up to one full delivery fee when delivering the product to the Buyer, and the Buyer can get the coupon of that additional charge in the service center by the following address: Yerevan, K. Ulnetsi 70, or by an email.']
      }, {
        desc: ['If the Buyer has made a payment with accumulated bonus points and the shipping address changes after the shipment is transferred to the courier,  the Company has the right to make an additional cash charge to Buyer by up to one full delivery fee when delivering the product to the Buyer, and the Buyer can get the coupon of that additional charge in the service center by the following address: Yerevan, K. Ulnetsi 70, or by an email.']
      }, {
        desc: ['The courier has the right to make additional calls to the Buyer to specify the address or other details. If the Buyer does not respond to the calls made to the provided number or there are similar issues that hinder the delivery, the courier has the right to return the order to the Service center. ']
      }, {
        desc: ['If the Buyer has specified in the order request that he/she will perform a cash payment and does not respond to the calls made to the provided number or there are similar issues that hinder the delivery, then if the Buyer does not contact the Service center within one business day after the purchased item was transferred back to the Service Center, than the Company has the right to classify the order as cancelled. ']
      }, {
        desc: ['If the Buyer has made an online payment and does not respond to the calls made to the provided number or there are similar issues that hinder the delivery, then if the Buyer does not contact the Service center within one business day after the purchased item was transferred back to the Service Center, than the Company has the right to classify the order as cancelled, as well as to transfer back the whole order amount except the delivery fee. ']
      }, {
        desc: ['If the Buyer has made a payment with accumulated bonus points and does not respond to the calls made to the provided number or there are similar issues that hinder the delivery, then if the Buyer does not contact the Service center within one business day after the purchased item was transferred back to the Service Center, than the Company has the right to classify the order as cancelled, as well as to transfer back the bonus points except the bonus fees taken as the delivery fee. ']
      }, {
        desc: ['In case of not responding to the courier’s calls or in case of existence of similar shipping barriers due to the Buyer, after returning the shipment to the service center, the re-delivery is considered to be double, and the Company is entitled to charge for double delivery.']
      }, {
        desc: ["If the cases of not responding to the courier’s calls or th cases of existence of similar shipping barriers due to the Buyer are multi-time, then the Buyer's orders may not be fulfilled any more, the Buyer may be removed from the system, losing the accumulated points and the purchase history."]
      }, {
        desc: ['Upon the acceptance of the shipment, in the presence of the courier the Buyer is obliged to check the suitability of the quality of the delivered products, any possible physical and mechanical defects and conditions. If any of the delivered products does not meet the required quality, there are physical or mechanical defects or it is not in proper condition, the Buyer may refuse either that product solely, or the entire shipment and the delivery service, or request a new or substitute Product.']
      }, {
        desc: ['If any of the delivered Products is not of a proper quality, there are physical or mechanical defects or it is not in proper condition, then only a one-time delivery fee is charged if a replacement is required.']
      }, {
        desc: ['If the Buyer has made a cash payment, and the delivered goods are of proper quality, have no physical or mechanical defects, are in proper condition, but the Buyer refuses the ordered goods, then the Company is entitled to charge the Buyer the delivery fee.']
      }, {
        desc: ['If the Buyer has made an online payment and the delivered goods are of proper quality, have no physical or mechanical defects, are in proper condition, but the Buyer refuses the ordered goods, then all the amount is returned except for the delivery fee.']
      }, {
        desc: ['If the Buyer has made a payment with accumulated bonus points and delivered goods are of proper quality, have no physical or mechanical defects, are in proper condition, but the Buyer refuses the ordered goods, then the points are transferred back except for the points charged for delivery.']
      }, {
        desc: ["If the Buyer frequently refuses the delivery of products of proper quality, with no physical and mechanical defects and in proper condition, then the Buyer's orders may not be fulfilled anymore, the Buyer may be removed from the system, losing the accumulated points and the purchase history."]
      }]
    }, {
      title: 'PAYMENT AND RETURN TERMS',
      description: [{
        desc: ['Cash payment for the purchase of goods sold by the Company can be made only in Armenian drams.']
      }, {
        desc: ['The sale of goods is carried out by the tariffs currently mentioned on the Website.']
      }, {
        desc: ['In accordance with the RA legislation, the Buyer has the right to return the item within 14 days of receipt of the shipment, receiving back all the amount paid except for the delivery fee, if there is a purchase receipt, the labels posted on the Product are preserved, there are no physical and mechanical defects, and if the Product is in proper condition.']
      }, {
        desc: ['For online payments, in the case of returning the Product in accordance with the procedure defined in Paragraph 3 of this Chapter, the money transfer may take 10 business days, depending on the speed of the service processes of the banks.']
      }, {
        desc: ['For orders made with the bonus points, in the case of returning the Product in accordance with the procedure defined in Paragraph 3 of this Chapter, the money transfer may take 5 business days.']
      }, {
        desc: ['Regardless of the method of payment, after receiving the item from the courier, the return can be made independently, by bringing the purchased Product to the service center by the following address: Yerevan, K. Ulnetsi 70']
      }, {
        desc: ['The return terms regulated by this Chapter do not apply to the goods that are not subject to return according to RA legislation.  ']
      }]
    }, {
      title: 'PRIVICY',
      description: [{
        desc: ['You can visit the Website without registration, but you must register on the Website to be able to fully use the Company Website and its services. Personal data is collected (received) only when you provide it at registration or while making purchase. When registering or making a purchase, you must provide your name, your address, your e-mail and contact details. ']
      }, {
        desc: ['In order to analyse the User behavior and ease of use of the Website and to provide more convenient services, when using the Website, your IP address, browser name, computer type, technical information about the User and means of contacting our Website, such as the type of the operating system, the name of the company providing the Internet service and other similar data can be automatically transferred to our monitoring and analytical systems.']
      }, {
        desc: ['The Website may use cookies to make the Website quicker and more convenient to use. Cookies are alphanumeric lines, created on the Website. When visiting the Website, they are copied in your computer. Cookies are safe for the computer and do not collect personal data. For security reasons, money movements and data related to the latter can be monitored by banks and systems providing money transfer services as well.']
      }, {
        desc: ['The Company implies appropriate electronic, physical and other security measures to ensure the security of your personal data from unauthorized access, alteration or publication. All the data you provide is securely stored on a server database. With the help of passwords, we protect any page of the Company that contains your personal data. The Company will never ask you to provide your password by making a call or through an email. We will not provide your personal data to third parties without your consent, except for the cases provided by the legislation (inquiries within the jurisdiction of law enforcement and state bodies, court inquiries, etc.). We may make your personal data available to parties affiliated with us, if the data are necessary to provide the services to you and to improve their quality. We cooperate with other organizations and/or individuals in order to provide services properly, such as accepting orders, database analysis, marketing support, bank card payments and clearing. The above-mentioned persons shall have access to the necessary data for the purpose of carrying out the operations specified for them and shall not have the right to use the data for any other purpose.']
      }]
    }, {
      title: 'CONTRACT TERMINATION AND DISSOLUTION ',
      description: [{
        desc: ['You have the right to terminate the Contract with the Company at any time after fulfilling all your payment obligations to the Company. If you have an overdue obligation, the Contract cannot be considered terminated.']
      }, {
        desc: ['In order to terminate the Contract and to close the account on page mankan.am, it is necessary to submit a Contract termination and Account closure request to {email} from the e-mail address attached to the personal Account, indicating the e-mail address, name/surname and telephone number provided during registration.']
      }, {
        desc: ['Upon submission of Contract termination request, the User rejects all the bonus points available in the Account. ']
      }]
    }],
    'local.infoAboutYou': 'In any case, we kindly support our customers, and if there are malfunctions in the products purchased from us, our specialists will repair and deliver them back to you, if possible.',
    'local.wrong_promo_code': 'Wrong promo code',
    'local.not_available_product': 'Not available product',
    'local.product_not_found': 'There are no products with this combination',
    'local.example': 'Ex. 910425',
    'local.shop_adresses': [{
      address: '70 Karapet Ulnetsi str., Yerevan',
      phone: '(+374) 99 530311',
      businessHours: 'Every day from 10:00 to 20:00'
    }, {
      address: '24 Mesrop Mashtots ave., Yerevan',
      phone: '(+374) 99 540311',
      businessHours: 'Every day from 10:00 to 20:00'
    }, {
      address: '36 Abovyan str., Yerevan',
      phone: '(+374) 99 520311',
      businessHours: 'Every day from 10:00 to 20:00'
    }, {
      address: 'Dalma Garden Mall, Yerevan',
      phone: '(+374) 99 414029',
      businessHours: 'Every day from 10:00 to 22:00'
    }]
  }
});
// EXTERNAL MODULE: ./components/pages-loader/PagesLoader.jsx
var PagesLoader = __webpack_require__("5cB8");

// EXTERNAL MODULE: ./store/catalog-filter/action.js
var catalog_filter_action = __webpack_require__("AVz8");

// EXTERNAL MODULE: ./store/pages-data/action.js
var pages_data_action = __webpack_require__("I4XR");

// EXTERNAL MODULE: ./components/common/constants.js
var constants = __webpack_require__("h0A1");

// CONCATENATED MODULE: ./App.js
var App_jsx = external_react_default.a.createElement;















const BuyProductModal = dynamic_default()(() => __webpack_require__.e(/* import() */ 33).then(__webpack_require__.bind(null, "M+wl")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("M+wl")],
    modules: ['./components/modals/buy-product-modal/BuyProductModal']
  }
});
const SiteHeader = dynamic_default()(() => __webpack_require__.e(/* import() */ 22).then(__webpack_require__.bind(null, "T94z")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("T94z")],
    modules: ['./layout/header/SiteHeader']
  }
});
const MobileMenuBar = dynamic_default()(() => __webpack_require__.e(/* import() */ 30).then(__webpack_require__.bind(null, "AsUN")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("AsUN")],
    modules: ['./layout/mobile-menu/MobileMenuBar']
  }
});
const SiteFooter = dynamic_default()(() => __webpack_require__.e(/* import() */ 24).then(__webpack_require__.bind(null, "i05m")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("i05m")],
    modules: ['./layout/footer/SiteFooter']
  }
});

function App({
  Component,
  pageProps,
  lang,
  hideAllAction,
  resetPageDataAction
}) {
  const router = Object(router_["useRouter"])();
  const {
    pathname
  } = router;
  const title = Object(external_react_["useMemo"])(() => Object(constants["a" /* getTextFromPath */])(pathname, staticText_messages[lang]) || 'Mankan', [lang, pathname]);
  const {
    0: isPageLoading,
    1: setIsPageLoading
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    router.events.on('routeChangeStart', route => {
      if (route !== '/cart') resetPageDataAction();
      window.scrollTo(0, 0);
      setIsPageLoading(true);
      hideAllAction();
    });
    router.events.on('routeChangeComplete', () => {
      setIsPageLoading(false);
    });
  }, []);
  return App_jsx(external_react_intl_["IntlProvider"], {
    locale: "en",
    defaultLocale: "ARM",
    messages: staticText_messages[lang]
  }, App_jsx(head_default.a, null, App_jsx("title", null, title)), App_jsx("div", {
    className: "App"
  }, App_jsx(BuyProductModal, null), App_jsx(SiteHeader, null), App_jsx(MobileMenuBar, null), App_jsx(FilterListWrapper["a" /* default */], null), App_jsx(CategorySubmenuContent, null), App_jsx(CategoryMenuContent["a" /* default */], null), isPageLoading ? App_jsx(PagesLoader["a" /* default */], null) : null, App_jsx("div", {
    style: isPageLoading ? {
      display: 'none'
    } : {}
  }, App_jsx(Component, pageProps)), App_jsx(SiteFooter, null)));
}

function App_mapStateToProps({
  user: {
    lang
  }
}) {
  return {
    lang
  };
}

/* harmony default export */ var App_0 = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(App_mapStateToProps, {
  resetCatalogFilterReducerAction: catalog_filter_action["g" /* resetCatalogFilterReducer */],
  hideAllAction: action["b" /* hideAll */],
  resetPageDataAction: pages_data_action["d" /* resetPageData */]
})(App));

/***/ }),

/***/ "TIBT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JCEF");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tI3Q");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function ClassificationFilter({
  classification,
  onChange,
  extraFilters
}) {
  const {
    messages
  } = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["useIntl"])();

  const changeValues = values => {
    onChange([values[values.length - 1]]);
  };

  return __jsx("div", {
    className: "sidebar_info_box"
  }, __jsx("h2", {
    className: "sidebar_info_title"
  }, messages['local.specification']), __jsx("div", {
    className: "option_list"
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
    value: classification,
    onChange: changeValues,
    className: "classification"
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
    value: "isNew"
  }, messages['local.new_products']), __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
    value: "percent"
  }, messages['local.discounted_assortment']), __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
    value: "bestSeller"
  }, messages['local.best_selling']), __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
    value: "priceByAsc"
  }, messages['local.price_by_increase']), extraFilters.map(({
    id,
    name
  }) => __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
    value: `${id}`,
    key: `${id}extra `
  }, name, ' ')), __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
    value: "All"
  }, messages['local.all_of'])))));
}

function pamStateToProps({
  catalogFilter: {
    classification
  }
}) {
  return {
    classification
  };
}

ClassificationFilter.defaultProps = {
  extraFilters: {}
};
/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(pamStateToProps)(ClassificationFilter));

/***/ }),

/***/ "WmTK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFooterContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPaymentMethods; });
const IconLocation = '/images/icons/footer_icons/place-localizer.png';
const IconAbout = '/images/icons/footer_icons/leaflet.png';
const IconPhone = '/images/icons/footer_icons/call.png';
const IconSuggestion = '/images/icons/footer_icons/help.png';
const IconBonus = '/images/icons/footer_icons/bonus.png';
const IconWork = '/images/icons/footer_icons/work.png';
const IconSecurity = '/images/icons/footer_icons/security.png'; // “​Վճարման եղանակներ​”
// “​VISA​”,
// “​MasterCard​”,
// “​ARCA​”,
// “​Կանխիկ​”,
// “​Կուտակվածմիավորներով​”

const getFooterContent = (messages, {
  openSuggestionsModal,
  openFidBackModal
}) => [{
  link: '/about-us',
  text: messages['local.about_us'],
  icon: IconAbout
}, {
  link: '/shops',
  text: messages['local.our_addresses'],
  icon: IconLocation
}, {
  link: '/using-rules',
  text: messages['local.using-rules'],
  icon: IconSecurity
}, {
  link: '/bonus-promo-code',
  text: messages['local.bonus-and-promo-code'],
  icon: IconBonus
}, {
  link: '/vacancy',
  text: messages['local.vacancies'],
  icon: IconWork
}, {
  handleClick: openSuggestionsModal,
  text: `${messages['local.suggestion']} / ${messages['local.complaint']}`,
  icon: IconSuggestion
}, {
  handleClick: openFidBackModal,
  text: messages['local.feedback'],
  icon: IconPhone
}];
const getPaymentMethods = messages => ['VISA', 'MasterCard', 'ARCA', messages['local.cash'], messages['local.using-bonus']];

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dI4Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "antd/lib/spin"
var spin_ = __webpack_require__("vEvA");
var spin_default = /*#__PURE__*/__webpack_require__.n(spin_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./store/search/action.js
var action = __webpack_require__("RHPr");

// EXTERNAL MODULE: ./store/search/reducer.js
var reducer = __webpack_require__("rTwP");

// CONCATENATED MODULE: ./hooks/useOnOutClick.jsx


const useOnClickOutside = (ref, handler) => {
  Object(external_react_["useEffect"])(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, // Add ref and handler to effect dependencies
  // It's worth noting that because passed in handler is a new ...
  // ... function on every render that will cause this effect ...
  // ... callback/cleanup to run every render. It's not a big deal ...
  // ... but to optimize you can wrap handler in useCallback before ...
  // ... passing it into this hook.
  [ref, handler]);
};

/* harmony default export */ var useOnOutClick = (useOnClickOutside);
// EXTERNAL MODULE: ./store/catalog-filter/action.js
var catalog_filter_action = __webpack_require__("AVz8");

// EXTERNAL MODULE: ./store/catalog-filter/reducer.js
var catalog_filter_reducer = __webpack_require__("jeSm");

// CONCATENATED MODULE: ./components/common/main-search/useMainSearch.js






 // eslint-disable-next-line import/prefer-default-export

const useMainSearch = ({
  onSearch
}) => {
  const {
    0: searchValue,
    1: setValue
  } = Object(external_react_["useState"])();
  const {
    searchWord
  } = Object(external_react_redux_["useSelector"])(catalog_filter_reducer["e" /* selectCatalogFilters */]);
  const dispatch = Object(external_react_redux_["useDispatch"])();

  const resetSearch = () => dispatch(Object(action["c" /* searchProductReset */])());

  const data = Object(external_react_redux_["useSelector"])(reducer["b" /* selectSearchData */]);
  const loading = Object(external_react_redux_["useSelector"])(reducer["c" /* selectSearchDataLoading */]);
  const {
    0: focused,
    1: setFocused
  } = Object(external_react_["useState"])(false);
  const ref = Object(external_react_["useRef"])(null);

  const handleSearch = value => {
    if (value === null || value === void 0 ? void 0 : value.trim()) dispatch(Object(catalog_filter_action["e" /* catalogMainSearch */])({
      searchWord: value
    }));
    resetSearch();
    setFocused(false);
  };

  const handleSearchSuggested = value => {
    onSearch({
      searchWord: value
    });
  };

  const handleFocus = ({
    target: {
      value
    }
  }) => {
    resetSearch();

    if (value && value !== searchValue) {
      handleSearchSuggested(value);
    }

    if (value !== searchValue) setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleChange = ({
    target: {
      value: eventValue
    }
  }) => {
    setValue(eventValue);
    handleSearchSuggested(eventValue);
    setFocused(true);
  };

  useOnOutClick(ref, () => {
    setFocused(false);
  });
  Object(external_react_["useEffect"])(() => {
    setValue(searchWord);
  }, [searchWord]);
  return {
    searchValue,
    data,
    loading,
    focused,
    handleFocus,
    handleBlur,
    ref,
    setValue,
    handleChange,
    handleSearch
  };
};
// CONCATENATED MODULE: ./components/common/main-search/MainSearch.jsx
var __jsx = external_react_default.a.createElement;





const {
  Search: MainSearch
} = input_default.a;

function SearchComponent({
  placeholder,
  className,
  onSearch,
  style,
  enterButton
}) {
  var _searchValue$trim;

  const {
    data,
    loading,
    focused,
    handleBlur,
    handleFocus,
    searchValue,
    ref,
    handleSearch,
    handleChange
  } = useMainSearch({
    onSearch
  });
  return __jsx("div", {
    className: "myHeaderSearch",
    style: {
      display: 'inline-block',
      position: 'relative',
      zIndex: '99'
    },
    ref: ref
  }, __jsx(input_default.a.Group, null, __jsx(MainSearch, {
    value: searchValue,
    onChange: handleChange,
    enterButton: enterButton,
    className: className,
    placeholder: placeholder,
    onSearch: handleSearch,
    onFocus: handleFocus,
    style: style
  })), __jsx("div", {
    style: {
      maxHeight: '300px',
      overflow: 'auto',
      background: '#fff',
      padding: '5px 10px',
      width: '100%'
    }
  }, loading && (searchValue === null || searchValue === void 0 ? void 0 : (_searchValue$trim = searchValue.trim) === null || _searchValue$trim === void 0 ? void 0 : _searchValue$trim.call(searchValue)) && __jsx(spin_default.a, null), focused && (data || []).map(item => __jsx("div", {
    key: `search${item.id}`
  }, __jsx(link_default.a, {
    href: "/product/[id]",
    as: `/product/${item.id}`
  }, __jsx("a", {
    onClick: handleBlur
  }, item.name))))));
}

SearchComponent.defaultProps = {
  enterButton: undefined,
  style: {}
};
/* harmony default export */ var main_search_MainSearch = __webpack_exports__["a"] = (SearchComponent);

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "ekL+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("QNhp");
/* harmony import */ var antd_lib_collapse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_collapse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("BWRB");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _filter_items_ClassificationFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("TIBT");
/* harmony import */ var _filter_items_PriceFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("jck6");
/* harmony import */ var _filter_items_GenderFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("QsFI");
/* harmony import */ var _filter_items_AgeFilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("rnDs");
/* harmony import */ var _filter_items_TypeFilter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("lexv");
/* harmony import */ var _filter_items_MeaningFilter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("JqoG");
/* harmony import */ var _filter_items_BrandFilter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("CosU");
/* harmony import */ var _store_catalog_filter_action__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("AVz8");
/* harmony import */ var _store_userEventListeners_action__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("ss5K");
/* harmony import */ var _store_catalog_action__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("xGlN");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















const {
  Panel
} = antd_lib_collapse__WEBPACK_IMPORTED_MODULE_3___default.a;

const WrapperSimple = ({
  children
}) => children;

const gatData = (name, value, mode) => {
  if (mode === 'mobile') return {
    [name]: value
  };
  return {
    name,
    value
  };
};

function IndexFilterList({
  catalogFilterSetValuesAction,
  catalogFilterChangeAction,
  catalogGetAction,
  hideAction,
  filters,
  mode
}) {
  const {
    messages
  } = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["useIntl"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  function hideFilter() {
    hideAction({
      name: 'isFilterListOpen'
    });
  }

  const {
    0: changedNames,
    1: setChangedNames
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // const { toggleFilterMobile } = useContext(Context);

  function onSaveFilter() {
    hideFilter();
    catalogGetAction({
      loading: 1,
      changedNames
    });

    if (!router.asPath.includes('catalog')) {
      catalogFilterSetValuesAction({
        isUserFilter: true
      });
      router.push('/catalog');
    }

    setChangedNames([]);
  }

  const isMobile = mode === 'mobile';
  const actionByMode = isMobile ? catalogFilterSetValuesAction : catalogFilterChangeAction;
  const Wrapper = isMobile ? antd_lib_collapse__WEBPACK_IMPORTED_MODULE_3___default.a : WrapperSimple;
  const PanelIf = isMobile ? Panel : WrapperSimple;

  const setChangedNamesAction = name => {
    if (changedNames.indexOf(name) === -1 && isMobile) {
      setChangedNames([...changedNames, name]);
    }
  };

  const changeValue = name => value => {
    if (value[value.length - 1] === 'all') {
      value = ['all'];
    } else {
      const indexOfAll = value.indexOf('all');
      if (indexOfAll !== -1) value.splice(indexOfAll, 1);
    }

    actionByMode(gatData(name, value, mode));
    setChangedNamesAction(name);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    id: "filter_list",
    className: isMobile ? 'filter_list_mobile' : ''
  }, __jsx(Wrapper, {
    mode: mode
  }, __jsx(PanelIf, {
    mode: mode,
    header: messages['local.specification'],
    key: "1",
    showArrow: false,
    extra: __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
      type: "right"
    })
  }, __jsx(_filter_items_ClassificationFilter__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    onChange: changeValue('classification'),
    extraFilters: filters.extraFilter
  })), __jsx(PanelIf, {
    mode: mode,
    header: messages['local.price'],
    key: "2",
    showArrow: false,
    extra: __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
      type: "right"
    })
  }, __jsx(_filter_items_PriceFilter__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    onChange: changeValue('price')
  })), __jsx(PanelIf, {
    mode: mode,
    header: messages['local.gender'],
    key: "3",
    showArrow: false,
    extra: __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
      type: "right"
    })
  }, __jsx(_filter_items_GenderFilter__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    onChange: value => {
      actionByMode(gatData('gender', [value[value.length - 1] || []], mode));
      setChangedNamesAction('gender');
    },
    genderFilter: filters.productSex
  })), __jsx(PanelIf, {
    mode: mode,
    header: messages['local.age'],
    key: "4",
    showArrow: false,
    extra: __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
      type: "right"
    })
  }, __jsx(_filter_items_AgeFilter__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    onChange: changeValue('age'),
    ages: filters.productAge || {}
  })), __jsx(PanelIf, {
    mode: mode,
    header: messages['local.type'],
    key: "5",
    showArrow: false,
    extra: __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
      type: "right"
    })
  }, __jsx(_filter_items_TypeFilter__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    onChange: changeValue('type'),
    types: filters.productType || {}
  })), __jsx(PanelIf, {
    mode: mode,
    header: messages['local.meaning'],
    key: "6",
    showArrow: false,
    extra: __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
      type: "right"
    })
  }, __jsx(_filter_items_MeaningFilter__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
    onChange: changeValue('meaning'),
    meanings: filters.productUsage
  })), __jsx(PanelIf, {
    mode: mode,
    header: messages['local.brand'],
    key: "7",
    showArrow: false,
    extra: __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
      type: "right"
    })
  }, __jsx(_filter_items_BrandFilter__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
    onChange: changeValue('brand'),
    brands: filters.brand
  })))), mode === 'mobile' ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    type: "primary",
    className: "save_btn",
    onClick: onSaveFilter
  }, "\u054A\u0561\u0570\u057A\u0561\u0576\u0565\u056C"), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    type: "default",
    shape: "circle",
    icon: "close",
    className: "close_btn",
    onClick: () => {
      hideFilter();
    }
  })) : null);
}

IndexFilterList.defaultProps = {
  mode: '',
  filters: {}
};

const mapStateToProps = ({
  catalogFilter: {
    filters
  }
}) => ({
  filters
});

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  catalogFilterSetValuesAction: _store_catalog_filter_action__WEBPACK_IMPORTED_MODULE_14__[/* catalogFilterSetValues */ "d"],
  catalogFilterChangeAction: _store_catalog_filter_action__WEBPACK_IMPORTED_MODULE_14__[/* catalogFilterChange */ "a"],
  catalogGetAction: _store_catalog_action__WEBPACK_IMPORTED_MODULE_16__[/* catalogGet */ "a"],
  hideAction: _store_userEventListeners_action__WEBPACK_IMPORTED_MODULE_15__[/* hide */ "a"]
})(IndexFilterList));

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__("bzos");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__("bzos");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (false) {}

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h0A1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTextFromPath; });
const localNamesFromPaths = {
  '/about-us': 'local.about_us',
  '/shops': 'local.our_addresses',
  '/wishlist': 'local.wishlist',
  '/payment-delivery-return': 'local.payment_delivery_return',
  '/using-rules': 'local.using-rules',
  '/bonus-promo-code': 'local.bonus-and-promo-code',
  '/vacancy': 'local.vacancies',
  '/cart': 'local.my_basket',
  '/catalog': 'local.catalog',
  '/': 'local.home-page'
};
const getTextFromPath = (pathname, msg) => {
  const local = localNamesFromPaths[pathname];
  return msg[local];
};

/***/ }),

/***/ "jck6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_PriceSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("koNj");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function PriceFilter({
  price,
  onChange
}) {
  const {
    messages
  } = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["useIntl"])();
  return __jsx("div", {
    className: "sidebar_info_box"
  }, __jsx("h2", {
    className: "sidebar_info_title"
  }, messages['local.price']), __jsx("div", {
    className: "option_list"
  }, __jsx(_common_PriceSlider__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    handleChange: onChange,
    price: price
  })));
}

function pamStateToProps({
  catalogFilter: {
    price
  }
}) {
  return {
    price
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(pamStateToProps)(PriceFilter));

/***/ }),

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

/***/ "lexv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tI3Q");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JCEF");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("O6kt");
/* harmony import */ var _ShowMoreItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("NNEB");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function TypeFilter({
  type,
  onChange,
  types
}) {
  const {
    messages
  } = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["useIntl"])();
  const itemsCount = Object.keys(types).length;
  const {
    0: limit,
    1: setLimit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(10);

  const showMore = () => {
    setLimit(limit + 10);
  };

  return __jsx("div", {
    className: "sidebar_info_box"
  }, __jsx("h2", {
    className: "sidebar_info_title"
  }, messages['local.type']), __jsx("div", {
    className: "option_list"
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a.Group, {
    value: type,
    onChange: onChange,
    className: "toy_type"
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, null, types.map(({
    id,
    name
  }, index) => index > limit ? null : __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: `${id} types`,
    value: `${id}`
  }, name)), __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a, {
    value: "all"
  }, messages['local.all'])))), __jsx(_ShowMoreItems__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    handleClick: showMore,
    moreItems: itemsCount - limit
  }));
}

function pamStateToProps({
  catalogFilter: {
    type
  }
}) {
  return {
    type
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(pamStateToProps)(TypeFilter));

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "rnDs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tI3Q");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JCEF");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function AgeFilter({
  age,
  onChange,
  ages
}) {
  const {
    messages
  } = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["useIntl"])();
  const agesArray = ages.map(({
    id,
    minAge,
    maxAge
  }) => ({
    id,
    text: `${minAge}${maxAge < 11 ? ` - ${maxAge}` : '+'}`
  }));
  return __jsx("div", {
    className: "sidebar_info_box"
  }, __jsx("h2", {
    className: "sidebar_info_title"
  }, messages['local.age']), __jsx("div", {
    className: "option_list"
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a.Group, {
    value: Array.isArray(age) ? age : [age],
    onChange: onChange,
    className: "age"
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, null, agesArray.map(({
    id,
    text
  }) => __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a, {
    value: `${id}`,
    key: `${id}ageFilter`
  }, text, ' ', messages['local.years'])), __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a, {
    value: "all"
  }, messages['local.all'])))));
}

function pamStateToProps({
  catalogFilter: {
    age
  }
}) {
  return {
    age
  };
}

AgeFilter.defaultProps = {
  ages: {}
};
/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(pamStateToProps)(AgeFilter));

/***/ })

};;