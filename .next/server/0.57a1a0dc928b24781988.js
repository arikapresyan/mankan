exports.ids = [0];
exports.modules = {

/***/ "ESk+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function BuyProductComponent({
  type,
  handleBuy,
  innerText
}) {
  return __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: type,
    className: "buy_btn",
    onClick: handleBuy
  }, innerText);
}

/* harmony default export */ __webpack_exports__["a"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(BuyProductComponent));

/***/ }),

/***/ "fXME":
/***/ (function(module, exports) {



/***/ }),

/***/ "zFtb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./store/menu-list/reducer.js
var reducer = __webpack_require__("88jE");

// CONCATENATED MODULE: ./store/menu-list/uesGetFromMenuList.js
// eslint-disable-next-line no-unused-vars




function uesGetMenuList() {
  const list = Object(external_react_redux_["useSelector"])(reducer["b" /* selectMenuList */]);
  return {
    list
  };
}

/* harmony default export */ var uesGetFromMenuList = (uesGetMenuList);
// EXTERNAL MODULE: ./constants/utils.js
var utils = __webpack_require__("O6kt");

// EXTERNAL MODULE: ./constants/keys.js
var keys = __webpack_require__("fuBQ");

// EXTERNAL MODULE: external "antd/lib/spin"
var spin_ = __webpack_require__("vEvA");
var spin_default = /*#__PURE__*/__webpack_require__.n(spin_);

// EXTERNAL MODULE: ./components/header/loading/loader.less
var loader = __webpack_require__("fXME");

// CONCATENATED MODULE: ./components/header/loading/Loading.jsx
var __jsx = external_react_default.a.createElement;




const Loader = () => __jsx("div", {
  className: "nav_loader_container"
}, __jsx(spin_default.a, null));

/* harmony default export */ var Loading = (Loader);
// EXTERNAL MODULE: ./components/common/index-product-item/components/BuyProductComponent.jsx
var BuyProductComponent = __webpack_require__("ESk+");

// EXTERNAL MODULE: ./store/buy-product/action.js
var action = __webpack_require__("nfH0");

// CONCATENATED MODULE: ./components/header/product-category-list/ProductCategoryInfo.js
var ProductCategoryInfo_jsx = external_react_default.a.createElement;










const {
  IMAGE_POSTFIX
} = keys["a" /* default */];

function ProductCategoryInfo({
  className,
  mainHref,
  style
}) {
  var _list$bestseller2;

  const {
    list
  } = uesGetFromMenuList();
  const {
    messages
  } = Object(external_react_intl_["useIntl"])();
  const dispatch = Object(external_react_redux_["useDispatch"])();

  const getProductToBuyAction = payload => dispatch(Object(action["a" /* getProductToBuy */])(payload));

  const handleBuy = Object(external_react_["useCallback"])(() => {
    var _list$bestseller;

    return getProductToBuyAction({
      id: list === null || list === void 0 ? void 0 : (_list$bestseller = list.bestseller) === null || _list$bestseller === void 0 ? void 0 : _list$bestseller.id
    });
  }, [list === null || list === void 0 ? void 0 : (_list$bestseller2 = list.bestseller) === null || _list$bestseller2 === void 0 ? void 0 : _list$bestseller2.id]);

  const CheckProductIs = () => {
    var _list$bestseller3, _list$bestseller5;

    if (list === null || list === void 0 ? void 0 : (_list$bestseller3 = list.bestseller) === null || _list$bestseller3 === void 0 ? void 0 : _list$bestseller3.percent) {
      var _list$bestseller4;

      return ProductCategoryInfo_jsx("span", {
        className: "icon"
      }, ProductCategoryInfo_jsx("span", null, `${list === null || list === void 0 ? void 0 : (_list$bestseller4 = list.bestseller) === null || _list$bestseller4 === void 0 ? void 0 : _list$bestseller4.percent}%`));
    }

    if (list === null || list === void 0 ? void 0 : (_list$bestseller5 = list.bestseller) === null || _list$bestseller5 === void 0 ? void 0 : _list$bestseller5.isNew) {
      return ProductCategoryInfo_jsx("span", {
        className: "icon"
      }, ProductCategoryInfo_jsx("img", {
        src: "/images/icons/new.png",
        alt: "status icon",
        title: "status icon"
      }));
    }

    return null;
  };

  const translationNames = {
    type: 'local.type',
    age: 'local.select_by_age',
    brand: 'local.select_by_brand',
    meaning: 'local.meaning'
  };
  const withoutBestSeller = !list.bestseller ? 'without-b-seller' : 'with-b-seller';
  return ProductCategoryInfo_jsx("div", {
    className: "parentMenuBlock"
  }, ProductCategoryInfo_jsx("div", {
    className: "toTop",
    style: {
      position: 'absolute',
      height: '0',
      left: '0',
      width: '100%',
      zIndex: '999'
    }
  }, ProductCategoryInfo_jsx("div", {
    style: {
      marginLeft: '20%',
      width: '1px',
      height: '465px',
      background: '#d4d4d4',
      position: 'absolute'
    }
  }), ProductCategoryInfo_jsx("div", {
    style: {
      marginLeft: '38%',
      width: '1px',
      height: '465px',
      background: '#d4d4d4',
      position: 'absolute'
    }
  }), ProductCategoryInfo_jsx("div", {
    style: {
      marginLeft: '53%',
      width: '1px',
      height: '465px',
      background: '#d4d4d4',
      position: 'absolute'
    }
  }), ProductCategoryInfo_jsx("div", {
    style: {
      marginLeft: '73%',
      width: '1px',
      height: '465px',
      background: '#d4d4d4',
      position: 'absolute'
    }
  })), ProductCategoryInfo_jsx("div", {
    className: `category_info_container ${className} ${withoutBestSeller}` // style={{ ...(style || {}), minHeight: '514px' }}

  }, ProductCategoryInfo_jsx("div", {
    className: "d-flex"
  }, list.loading ? ProductCategoryInfo_jsx(Loading, null) : ProductCategoryInfo_jsx(external_react_default.a.Fragment, null, Object.keys(list.data).map((key, index) => ProductCategoryInfo_jsx("div", {
    className: "category_info_box",
    key: `bigSizeNanTypesContainer${index}`
  }, ProductCategoryInfo_jsx("h2", {
    className: "category_info_caption"
  }, messages[translationNames[key]], ' '))), ProductCategoryInfo_jsx("div", {
    className: "category_info_box"
  }, ProductCategoryInfo_jsx("h2", {
    className: "category_info_caption"
  }, messages['local.best_selling1'])))), list.loading ? ProductCategoryInfo_jsx(Loading, null) : ProductCategoryInfo_jsx("div", {
    className: "menuContainer"
  }, Object.keys(list.data).map((key, index) => ProductCategoryInfo_jsx("div", {
    className: "category_info_box",
    key: `bigSizeNanTypesContainer${index}`
  }, ProductCategoryInfo_jsx("ul", {
    className: "details"
  }, list.data[key].map(({
    name,
    text,
    id
  }, childeIndex) => ProductCategoryInfo_jsx("li", {
    key: name + childeIndex + id
  }, ProductCategoryInfo_jsx(link_default.a, {
    href: `${mainHref}&${key}=${id}`
  }, ProductCategoryInfo_jsx("a", null, text || name))))))), ProductCategoryInfo_jsx("div", {
    className: "category_info_box"
  }, list.bestseller ? ProductCategoryInfo_jsx("div", {
    className: "prod_item"
  }, ProductCategoryInfo_jsx(CheckProductIs, null), ProductCategoryInfo_jsx(link_default.a, {
    href: "/product/[id]",
    as: `/product/${list.bestseller.id}`
  }, ProductCategoryInfo_jsx("a", {
    className: "prod_name"
  }, ProductCategoryInfo_jsx("span", {
    className: "prod_img"
  }, ProductCategoryInfo_jsx("img", {
    src: `${IMAGE_POSTFIX}${list.bestseller.id}/${list.bestseller.photos[0].url}`,
    alt: list.bestseller.photos[0].alt,
    title: list.bestseller.photos[0].title
  })))), ProductCategoryInfo_jsx(link_default.a, {
    href: "/product/[id]",
    as: `/product/${list.bestseller.id}`
  }, ProductCategoryInfo_jsx("a", {
    className: "prod_name"
  }, list.bestseller.name)), ProductCategoryInfo_jsx("div", {
    className: "price"
  }, list.bestseller.price !== list.bestseller.xmlPrice && ProductCategoryInfo_jsx("span", {
    className: "old_price"
  }, list.bestseller.xmlPrice, ' ', messages['local.dr'], "\u2024"), list.bestseller.price, ' ', messages['local.dr'], "\u2024"), ProductCategoryInfo_jsx("div", {
    className: "prod_size"
  }, Object(utils["i" /* getProductSizeFromObj */])(list.bestseller.size)), ProductCategoryInfo_jsx("div", {
    className: "productItemFooter"
  }, ProductCategoryInfo_jsx(BuyProductComponent["a" /* default */], {
    type: "primary",
    innerText: messages['local.buy'],
    handleBuy: handleBuy
  }))) : null))));
}

/* harmony default export */ var product_category_list_ProductCategoryInfo = __webpack_exports__["default"] = (ProductCategoryInfo);

/***/ })

};;