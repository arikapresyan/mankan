exports.ids = [23];
exports.modules = {

/***/ "39JR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/checkbox"
var checkbox_ = __webpack_require__("JCEF");
var checkbox_default = /*#__PURE__*/__webpack_require__.n(checkbox_);

// EXTERNAL MODULE: external "antd/lib/tooltip"
var tooltip_ = __webpack_require__("z6+L");
var tooltip_default = /*#__PURE__*/__webpack_require__.n(tooltip_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__("tI3Q");
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__("vsU0");
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: ./assets/images/icons/info.png
var info = __webpack_require__("jEQ5");

// EXTERNAL MODULE: ./components/common/ProductQuantity.js
var ProductQuantity = __webpack_require__("hBX+");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./store/cart/useCartActions.js
var useCartActions = __webpack_require__("QCp2");

// EXTERNAL MODULE: ./constants/utils.js
var utils = __webpack_require__("O6kt");

// EXTERNAL MODULE: ./constants/keys.js
var keys = __webpack_require__("fuBQ");

// EXTERNAL MODULE: ./hooks/useGetProductPrice.js
var useGetProductPrice = __webpack_require__("XIGL");

// CONCATENATED MODULE: ./components/modals/buy-product-modal/useBuyProductModal.js
var __jsx = external_react_default.a.createElement;







const {
  IMAGE_POSTFIX
} = keys["a" /* default */];

function useBuyProductModal({
  product,
  localChanges,
  handleHideModal,
  bonus
}) {
  const {
    cartAddProductAction
  } = Object(useCartActions["a" /* default */])();
  const {
    messages
  } = Object(external_react_intl_["useIntl"])();

  const text = __jsx("span", null, messages['local.modal_battery']);

  const {
    size,
    brand,
    id,
    percent,
    price,
    accessories,
    photos,
    xmlCount,
    xmlBarCode
  } = product;
  const {
    0: hasBattery,
    1: setHasBattery
  } = Object(external_react_["useState"])(false);
  const {
    0: count,
    1: setCount
  } = Object(external_react_["useState"])(localChanges[product.id] && localChanges[product.id].count || product.count || 1);
  const battery = Object(external_react_["useMemo"])(() => Object(utils["f" /* getProductBattery */])(accessories), [accessories]);
  Object(external_react_["useEffect"])(() => {
    if (battery && localChanges[id] && (localChanges[id].hasBattery || localChanges[id].batteryId) && battery.xmlCount) {
      setHasBattery(true);
    }
  }, [battery, localChanges]);
  const batteryText = Object(external_react_["useMemo"])(() => battery && `${battery.ProductAccessoriesMap.count}  ${messages['local.item(s)']} ${battery.name}`, [battery, messages]);
  const brandName = Object(external_react_["useMemo"])(() => Object(utils["h" /* getProductBrand */])(brand), [brand]);
  const sizeText = Object(external_react_["useMemo"])(() => Object(utils["i" /* getProductSizeFromObj */])(size), [size]);
  const productAga = Object(external_react_["useMemo"])(() => Object(utils["e" /* getProductAge */])(product.minAge, product.maxAge), [product.minAge, product.maxAge]);
  const photo = Object(external_react_["useMemo"])(() => {
    const firstPhoto = photos ? photos.sort((a, b) => a.order - b.order)[0] : null;
    if (!firstPhoto) return {};
    return {
      url: `${IMAGE_POSTFIX}${id}/${firstPhoto.url}`,
      alt: firstPhoto.alt,
      title: firstPhoto.title
    };
  }, [photos]);
  const {
    newPrice,
    oldPrice
  } = Object(useGetProductPrice["a" /* default */])(product);
  const bonusText = Object(external_react_["useMemo"])(() => Object(utils["c" /* getBonus */])(newPrice, bonus || 2, count), [newPrice, bonus, count]);
  const priceBayCount = Object(external_react_["useMemo"])(() => newPrice * count, [newPrice, count]);

  const addToCart = redirect => {
    cartAddProductAction(Object(utils["b" /* addToCartObj */])({
      hasBattery,
      battery,
      count,
      product
    }), router_default.a.router.route === '/cart' || redirect);
    handleHideModal();
  };

  const addToCartAndRedirect = () => {
    addToCart(true);
  };

  const text2 = Object(external_react_["useCallback"])(() => __jsx("span", null, messages['local.can_use_bonus_if']), [messages]);
  return {
    addToCartAndRedirect,
    addToCart,
    bonusText,
    batteryText,
    brandName,
    sizeText,
    photo,
    text,
    setCount,
    messages,
    xmlPrice: oldPrice,
    percent,
    battery,
    productAga,
    text2,
    id,
    count,
    hasBattery,
    setHasBattery,
    price,
    xmlCount,
    xmlBarCode,
    priceBayCount
  };
}

/* harmony default export */ var buy_product_modal_useBuyProductModal = (useBuyProductModal);
// CONCATENATED MODULE: ./components/modals/buy-product-modal/ModalContent.jsx
var ModalContent_jsx = external_react_default.a.createElement;











function ModalContent({
  wishlistChangeItemAction,
  handleHideModal,
  localChanges,
  inWishlist,
  product,
  isInCart,
  bonus
}) {
  const {
    addToCartAndRedirect,
    addToCart,
    bonusText,
    batteryText,
    brandName,
    sizeText,
    photo,
    battery,
    text,
    text2,
    setCount,
    xmlPrice,
    percent,
    productAga,
    messages,
    count,
    hasBattery,
    setHasBattery,
    xmlCount,
    xmlBarCode,
    priceBayCount
  } = buy_product_modal_useBuyProductModal({
    product,
    localChanges,
    handleHideModal,
    bonus
  });
  const boxSizeText = Object(external_react_["useMemo"])(() => Object(utils["g" /* getProductBoxSize */])(product.boxSize), [product.boxSize, utils["g" /* getProductBoxSize */]]);
  const characteristics = [{
    visible: boxSizeText,
    name: messages['local.box_size'],
    text: boxSizeText + messages['local.sm']
  }, {
    visible: sizeText === null || sizeText === void 0 ? void 0 : sizeText.trim(),
    name: messages['local.size'],
    text: `${sizeText} ${messages['local.sm']}`
  }, {
    visible: true,
    name: messages['local.age'],
    text: `${productAga} ${messages['local.shortYear']}․`
  }, {
    visible: brandName,
    name: messages['local.brand'],
    text: brandName
  }, {
    visible: battery,
    name: messages['local.battery'],
    text: batteryText
  }, {
    visible: true,
    name: messages['local.barcode'],
    text: xmlBarCode
  }];
  return ModalContent_jsx(row_default.a, {
    gutter: 30,
    className: "modal_content"
  }, ModalContent_jsx(col_default.a, {
    sm: 24,
    md: 12,
    lg: 6
  }, ModalContent_jsx("div", {
    className: "prod_image"
  }, ModalContent_jsx("img", {
    src: photo.url,
    alt: photo.alt,
    title: photo.title
  }))), ModalContent_jsx(col_default.a, {
    sm: 24,
    md: 12,
    lg: 9,
    className: "characteristics_list_web"
  }, ModalContent_jsx("div", {
    className: "characteristics_list"
  }, characteristics.map(({
    visible,
    name,
    text: content
  }, index) => {
    if (!visible) return null;
    return ModalContent_jsx("div", {
      className: "characteristics_list_item",
      key: index
    }, ModalContent_jsx("div", {
      className: "characteristic_name"
    }, name), ModalContent_jsx("div", {
      className: "characteristic_description"
    }, content));
  }))), ModalContent_jsx(col_default.a, {
    sm: 24,
    md: 12,
    lg: 9
  }, ModalContent_jsx("div", {
    className: "product_info"
  }, ModalContent_jsx("div", {
    className: "product_price_box product_info_item clearfix"
  }, ModalContent_jsx("span", {
    className: "product_price"
  }, priceBayCount, ' ', messages['local.dr'], "\u2024", percent > 0 && ModalContent_jsx("span", {
    className: "old_price"
  }, xmlPrice * count, messages['local.dr'], "\u2024"))), ModalContent_jsx("div", {
    className: "product_quantity_box product_info_item clearfix"
  }, ModalContent_jsx("div", {
    className: "product_quantity_title"
  }, messages['local.quantity']), ModalContent_jsx(ProductQuantity["a" /* default */], {
    value: count,
    onChange: setCount,
    xmlCount: xmlCount
  })), battery ? ModalContent_jsx("div", {
    className: "bonus_box product_info_item clearfix"
  }, ModalContent_jsx("div", {
    className: "add_prod"
  }, ModalContent_jsx(checkbox_default.a, {
    checked: hasBattery,
    onChange: ({
      target: {
        checked
      }
    }) => setHasBattery(checked)
  }, messages['local.add_batteries'])), battery && ModalContent_jsx("div", {
    className: "bonus_quantity"
  }, battery.price * battery.ProductAccessoriesMap.count * count, ' ', messages['local.dr'], ".", ModalContent_jsx(tooltip_default.a, {
    placement: "bottom",
    title: text,
    className: "info_tooltip"
  }, ModalContent_jsx("span", null, ModalContent_jsx("img", {
    src: info["a" /* default */],
    alt: ""
  }))))) : null, ModalContent_jsx("div", {
    className: "bonus_box product_info_item clearfix"
  }, ModalContent_jsx("p", null, messages['local.bonus']), ModalContent_jsx("div", {
    className: "bonus_quantity"
  }, bonusText, ' ', bonusText && messages['local.dr'], "\u2024", ModalContent_jsx(tooltip_default.a, {
    placement: "bottom",
    title: text2,
    className: "info_tooltip"
  }, ModalContent_jsx("span", null, ModalContent_jsx("img", {
    src: info["a" /* default */],
    alt: ""
  }))))), ModalContent_jsx("div", {
    className: "characteristics_list characteristics_list_mobile"
  }, characteristics.map(({
    visible,
    name,
    text: content
  }, index) => {
    if (!visible) return null;
    return ModalContent_jsx("div", {
      className: "characteristics_list_item",
      key: index
    }, ModalContent_jsx("div", {
      className: "characteristic_name"
    }, name), ModalContent_jsx("div", {
      className: "characteristic_description"
    }, content));
  })), ModalContent_jsx("div", {
    className: "btn_group clearfix"
  }, ModalContent_jsx(button_default.a, {
    className: "buy_now_btn",
    disabled: !xmlCount || isInCart,
    onClick: addToCart
  }, isInCart ? messages['local.already_in_cart'] : messages['local.add_to_cart']), ModalContent_jsx("button", {
    type: "button",
    className: `ant-btn add_to_wishlist ${inWishlist ? 'is_selected' : 'is_active'}`,
    onClick: () => wishlistChangeItemAction({
      productId: product.id
    })
  }), ModalContent_jsx(button_default.a, {
    className: "add_to_cart_btn",
    onClick: addToCartAndRedirect,
    disabled: !xmlCount
  }, messages['local.buy_now'])))));
}

/* harmony default export */ var buy_product_modal_ModalContent = __webpack_exports__["default"] = (ModalContent);

/***/ }),

/***/ "QCp2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3PsY");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0wdU");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-shadow */
// eslint-disable-next-line no-unused-vars




const timersId = {};

function useCartActions() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
  const {
    messages
  } = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["useIntl"])();

  function cartAddProductAction(ids, redirect) {
    dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_3__[/* changeCart */ "c"])({
      ids,
      status: true,
      redirect
    }));

    if (redirect !== true) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.success(messages['local.cart_added_success']);
    }
  }

  function cartRemoveProductAction(ids) {
    dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_3__[/* changeCart */ "c"])({
      ids,
      status: false
    }));
  }

  function cartChangeProductAction(payload) {
    dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_3__[/* cartChangeProduct */ "a"])(_objectSpread({}, payload)));
    clearTimeout(timersId[payload.id]);
    timersId[payload.id] = setTimeout(() => {
      const {
        id,
        changes: {
          count
        }
      } = payload;
      dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_3__[/* changeCart */ "c"])({
        ids: {
          [id]: {
            id,
            count,
            status: true
          }
        },
        status: true
      }));
    }, 400);
  }

  function resetCartReducerAction() {
    dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_3__[/* resetCartReducer */ "g"])());
  }

  return {
    cartAddProductAction,
    cartChangeProductAction,
    cartRemoveProductAction,
    resetCartReducerAction
  };
}

/* harmony default export */ __webpack_exports__["a"] = (useCartActions);

/***/ }),

/***/ "XIGL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (product => {
  const {
    percent
  } = product;
  const oldPrice = product.xmlPrice;
  const newPrice = percent ? product.price : product.xmlPrice;
  return {
    oldPrice,
    newPrice
  };
});

/***/ }),

/***/ "hBX+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("GqX/");
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function ProductQuantity({
  value,
  onChange,
  xmlCount
}) {
  const {
    messages
  } = Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["useIntl"])();
  const maxCount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => xmlCount > 10 ? 10 : xmlCount, [xmlCount]);
  return !xmlCount ? __jsx("div", {
    className: "product_quantity"
  }, messages['local.out_of_stock']) : __jsx("div", {
    className: "product_quantity"
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "primary",
    className: "decrement",
    onClick: () => {
      if (value !== 1) {
        onChange(value - 1);
      }
    }
  }, "-"), __jsx(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_2___default.a, {
    value: value,
    type: "number",
    onChange: newValue => {
      if (newValue <= maxCount && newValue > 0) {
        onChange(newValue);
      } else if (newValue > maxCount) {
        onChange(maxCount);
      } else onChange(1);
    }
  }), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "primary",
    className: "increment",
    onClick: () => {
      if (value < maxCount) {
        onChange(value + 1);
      }
    }
  }, "+"));
}

ProductQuantity.defaultProps = {
  onChange: () => {}
};
/* harmony default export */ __webpack_exports__["a"] = (ProductQuantity);

/***/ }),

/***/ "jEQ5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAAXNSR0IB2cksfwAAAftQTFRFAAAAqaioq6mpqqioqaioqqenqqioqqenqKentLOzraysrKysrKurqqioqqioqqioqqioqaenqaamqaenqaiop6enoKCgqqqqqqmpqqmpqqioq6mpwL+/ubi4qqenqqiopaOjo6KixMTEq6qqqqioqaenpaOjv7298/Ly3t7esK2tpqSkpKKiqqmpurm5q6ioqqiooZ+fzMrK9fX13dzcsK6uqKamraurraurqqmpqqenpKKis7GxwcDAsbCwqKamqaioqqqqqqiop6Wlqaamx8bG393dz87Orq2tqqioqqqqqqio0dDQ8vLy/Pz85eTktLGxqaioqKWlrayszczM29ra5OPj////3d3drKurqaenqqen5ubmyMfHqqioqaen/v7+t7W1qqioqaioxMPD8O/vqqenqqen09PT2tnZqaenqqioqqiorqys4eDgpKGhqqioqKioqqqqqaenuLa26urq+/v7vr29vLq6uri4qqioqqioq6mpw8HB8PDw7+/vysnJr62tqqioqqior62tq6ioqaamube34eHh0M7OraurqqioqqioqqiosbGxqaenqKamqqenrKqqu7m5qqenqqioqaioqqqqpKSkp6Wlqqenqqioqqioqqenqqenqqmpqampqqioqqenqqioqqenqaenqaioqaioqqmpot0cSAAAAKl0Uk5TAA8+oNLr6syTNAkFImfT+P//9MdZFwIFLI7n/////9t3HQInkvH////////ldxl37////////99dFuT/////ywhQ/v////////YsqP//////df//////////pOr//8bo///JzP//q53//3pB+f////MoDdX////////AA2f//////9ZRIInw/////+RvFAQpjef//9t3HAEFImjVxVkYAhA3fL68n3EsB92L0o0AAAFESURBVHicY2AAAUYmZhZWNnYOTi4GKODm4eXjFxAQEBQUFBIWERUDiYlLSEoJgIC0jKyAnLyCohJQUFlFFSympq6hqaUtoKOrBxTUNwCLCRgaGZuYaguYmVswMFhaQcTMrG1s7QRBRts7MDg6gcWcXVzd3D3MQExPLwZviDobH18//wCwoEAgAx+ICgoOCQ0Lj4gUBAtGMUSDKMFIae2Y8FhniPFxDPFgWlDNNCE8URsimMSQDGE4p4SnSkNVpjGkQ1SaZYRnqkHsEchiyM4BC+bmJaTkR4LFCgoZiorBuktKy8orKgVA1ldVMzDUSMkJCFjX1vnVNzSCxJqagX5vaW0TENBu7yjt7AoCinX39AIF+/onTBQQmNQ+GWz5lKnTpoMCdMbMWbP5gSEMtLtgztx582GBv2DhoqjFS5YuW74CzAUAvcVLLnd0+GgAAAAASUVORK5CYII=");

/***/ })

};;