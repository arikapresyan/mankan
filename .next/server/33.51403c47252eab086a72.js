exports.ids = [33];
exports.modules = {

/***/ "M+wl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xKsY");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_buy_product_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nfH0");
/* harmony import */ var _store_wishlist_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("T/WE");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable jsx-a11y/control-has-associated-label */






const ModalContent = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(null, "39JR")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("39JR")],
    modules: ['./ModalContent']
  }
});

function BuyProductModal({
  wishlistChangeItemAction,
  wishlistProductIds,
  handleHideModal,
  product,
  cart,
  user
}) {
  const data = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => product.data && product.data.productById || {}, [product.data]);
  const name = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    var _data$langs, _data$langs$;

    return (data === null || data === void 0 ? void 0 : (_data$langs = data.langs) === null || _data$langs === void 0 ? void 0 : (_data$langs$ = _data$langs[0]) === null || _data$langs$ === void 0 ? void 0 : _data$langs$.name) || 'loading';
  }, [data.name]);
  const isInCart = !!Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    var _cart$data;

    return cart === null || cart === void 0 ? void 0 : (_cart$data = cart.data) === null || _cart$data === void 0 ? void 0 : _cart$data[data.id];
  }, [cart, data]);
  const visible = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => !!((product.loading || product.data) && !product.error), [product.loading, product.data, product.error]);
  return __jsx(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    destroyOnClose: true,
    title: name,
    centered: true,
    visible: visible,
    onCancel: () => handleHideModal(),
    footer: null,
    className: "buy_product_modal"
  }, (data === null || data === void 0 ? void 0 : data.name) ? __jsx(ModalContent, {
    product: data,
    inWishlist: !!wishlistProductIds[data.id],
    localChanges: cart.data || {},
    handleHideModal: handleHideModal,
    wishlistChangeItemAction: wishlistChangeItemAction,
    bonus: user.bonusPercent,
    isInCart: isInCart
  }) : '');
}

const mapStateToProps = ({
  buyProduct,
  wishlist,
  cart,
  user
}) => ({
  product: buyProduct,
  wishlistProductIds: wishlist.productIds,
  cart,
  user
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  handleHideModal: _store_buy_product_action__WEBPACK_IMPORTED_MODULE_4__[/* getProductToBuyReset */ "c"],
  wishlistChangeItemAction: _store_wishlist_action__WEBPACK_IMPORTED_MODULE_5__[/* wishlistChangeItem */ "a"]
})(BuyProductModal));

/***/ })

};;