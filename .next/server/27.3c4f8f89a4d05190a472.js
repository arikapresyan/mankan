exports.ids = [27];
exports.modules = {

/***/ "BLDt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BWRB");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CartWishlistConteiner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("1OMB");
/* harmony import */ var _handleFunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("itaB");
/* harmony import */ var _store_menu_list_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("88jE");
/* harmony import */ var _common_main_search_MainSearch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("dI4Y");
/* harmony import */ var _useHoverHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("bW+H");
/* harmony import */ var _store_user_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("XztR");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const ProductCategoryInfo = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "zFtb")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("zFtb")],
    modules: ['../product-category-list/ProductCategoryInfo']
  }
});

function HeaderFixed({
  isVisible,
  fixedSearchVisible,
  handleToggleSearchVisibility,
  setLoginVisible,
  searchProductAction
}) {
  const {
    messages
  } = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["useIntl"])();
  const menuList = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_store_menu_list_reducer__WEBPACK_IMPORTED_MODULE_9__[/* selectMenuList */ "b"]);
  const isAuth = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_store_user_reducer__WEBPACK_IMPORTED_MODULE_12__[/* selectAuthorized */ "b"]);
  const userIconClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (isAuth) {
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/profile');
    } else {
      setLoginVisible();
    }
  }, [isAuth, setLoginVisible, next_router__WEBPACK_IMPORTED_MODULE_5___default.a]);
  const {
    mainHref,
    onMouseEnter,
    showMenu,
    onMouseLeave
  } = Object(_useHoverHeader__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])();
  const onlyClickable = Object(_handleFunctions__WEBPACK_IMPORTED_MODULE_8__[/* onlyClickable */ "b"])({
    messages
  });
  const menuItemWithSubmenu = Object(_handleFunctions__WEBPACK_IMPORTED_MODULE_8__[/* menuItemWithSubmenu */ "a"])({
    messages
  });
  return __jsx("div", {
    className: `header_fixed ${isVisible ? 'is_scroll' : ''}`
  }, __jsx("div", {
    className: "container",
    onMouseLeave: onMouseLeave
  }, __jsx("div", null, __jsx("div", {
    className: "category_list"
  }, menuItemWithSubmenu.map((menuItem, index) => __jsx("div", {
    className: "category_list_item" // eslint-disable-next-line react/no-array-index-key
    ,
    key: `bigSizeMenuItem${index}`,
    onMouseEnter: () => {
      onMouseEnter(menuList, menuItem);
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: menuItem.href
  }, __jsx("a", null, ' ', menuItem.text)))), showMenu && __jsx(ProductCategoryInfo, {
    className: showMenu ? 'show' : '',
    mainHref: mainHref,
    style: {
      top: '50px'
    }
  }), onlyClickable.map((menuItem, index) => __jsx("div", {
    className: "category_list_item",
    key: `bigSizeMenuItem${index + 5}`
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: menuItem.href,
    as: menuItem.as
  }, __jsx("a", null, menuItem.text))))), __jsx("div", {
    className: "d-felx"
  }, __jsx("div", {
    className: "login_container"
  }, __jsx("span", {
    className: "login",
    onClick: userIconClick
  }, __jsx("img", {
    className: "profile_icon",
    src: "images/icons/profile_icon.png",
    alt: ""
  }))), __jsx(_CartWishlistConteiner__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null), __jsx("div", {
    className: `search_container ${fixedSearchVisible ? 'open' : ''}`
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "search",
    onClick: handleToggleSearchVisibility
  }), __jsx("div", {
    className: `fixed_search ${fixedSearchVisible ? 'is_open' : ''}`
  }, __jsx(_common_main_search_MainSearch__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    placeholder: "input search text",
    onSearch: searchProductAction,
    className: "",
    style: {
      width: 300
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (HeaderFixed);

/***/ }),

/***/ "bW+H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_menu_list_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ynhf");





/* harmony default export */ __webpack_exports__["a"] = (() => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
  const {
    0: showMenu,
    1: setShowMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: mainHref,
    1: setMainHref
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: timerId,
    1: setTimerId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const handleLinkClick = () => {
      setShowMenu(false);
    };

    router.events.on('routeChangeStart', handleLinkClick);
    return () => {
      router.events.off('routeChangeStart', handleLinkClick);
    };
  }, []);
  const {
    messages
  } = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["useIntl"])();
  const onMouseEnter = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((menuList, menuItem) => {
    clearTimeout(timerId);

    if (menuList.name !== menuItem.name) {
      setShowMenu(false);
      dispatch(Object(_store_menu_list_action__WEBPACK_IMPORTED_MODULE_4__[/* getMenuListReset */ "c"])());
    }

    const tId = setTimeout(() => {
      if (menuList.name !== menuItem.name) {
        dispatch(Object(_store_menu_list_action__WEBPACK_IMPORTED_MODULE_4__[/* getMenuList */ "a"])({
          name: menuItem.name,
          messages
        }));
      }

      setMainHref(menuItem.href);
      setShowMenu(true);
    }, 500);
    setTimerId(tId);
  }, [timerId, messages]);
  const onMouseLeave = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    clearTimeout(timerId);

    if (showMenu) {
      setShowMenu(false);
      dispatch(Object(_store_menu_list_action__WEBPACK_IMPORTED_MODULE_4__[/* getMenuListReset */ "c"])());
    }
  }, [showMenu, timerId]);
  return {
    showMenu,
    mainHref,
    onMouseEnter,
    onMouseLeave
  };
});

/***/ }),

/***/ "itaB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return menuItemWithSubmenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return onlyClickable; });
const menuItemWithSubmenu = ({
  messages
}) => [{
  href: '/catalog?a=1',
  text: messages['local.all'],
  name: 'all',
  icon: '/images/category/all_hover.png',
  hoverIcon: '/images/category/all.png'
}, {
  href: '/catalog?gender=BOY',
  text: messages['local.to_boys'],
  name: 'boys',
  icon: '/images/category/boy.png',
  hoverIcon: '/images/category/boy_hover.png'
}, {
  href: '/catalog?gender=GIRL',
  text: messages['local.to_girls'],
  name: 'girls',
  icon: '/images/category/girl.png',
  hoverIcon: '/images/category/girl_hover.png'
}, {
  href: '/catalog?age=1',
  text: messages['local.to_infants'],
  icon: '/images/category/baby.png',
  name: 'infants',
  hoverIcon: '/images/category/baby_hover.png'
}, {
  href: '/catalog?brand=1',
  text: messages['local.own_products'],
  name: 'own',
  icon: '/images/category/own_product.png',
  hoverIcon: '/images/category/own_product_hover.png'
}];
const onlyClickable = ({
  messages
}) => [{
  href: '/catalog?classification=isNew',
  text: messages['local.news'],
  icon: '/images/category/new.png',
  hoverIcon: '/images/category/new_hover.png'
}, {
  href: '/catalog?classification=percent',
  text: messages['local.discounts'],
  icon: '/images/category/discount.png',
  hoverIcon: '/images/category/discount_hover.png'
}, {
  href: '/catalog?classification=bestSeller',
  text: messages['local.best_selling'],
  icon: '/images/category/bestsaller.png',
  hoverIcon: '/images/category/bestsaller_hover.png'
}];

/***/ })

};;