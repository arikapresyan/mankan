exports.ids = [29];
exports.modules = {

/***/ "1nKs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-id-swiper"
var external_react_id_swiper_ = __webpack_require__("+/Rj");
var external_react_id_swiper_default = /*#__PURE__*/__webpack_require__.n(external_react_id_swiper_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./store/main-slides/actions.js
var actions = __webpack_require__("Gwua");

// CONCATENATED MODULE: ./store/main-slides/selectors.js
const selectMainSlides = state => state.mainSlides.data;
const selectMainSlidesLoading = state => state.mainSlides.loading;
// CONCATENATED MODULE: ./components/home/main-slider/useMainSlider.js




/* harmony default export */ var useMainSlider = (function () {
  const items = Object(external_react_redux_["useSelector"])(selectMainSlides);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  Object(external_react_["useEffect"])(() => {
    dispatch(Object(actions["a" /* getSlides */])());
  }, []);
  return {
    items
  };
});
// EXTERNAL MODULE: ./constants/keys.js
var keys = __webpack_require__("fuBQ");

// CONCATENATED MODULE: ./components/home/main-slider/components/ImageSlide.jsx
var __jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function ImageSlide(_ref) {
  let {
    item
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["item"]);

  const {
    image,
    link
  } = item;
  const imgSrc = `${keys["a" /* default */].HOST}/mainSlider/${image}`;
  return __jsx("div", rest, __jsx("a", {
    href: link,
    rel: "noopener noreferrer"
  }, __jsx("img", {
    src: imgSrc,
    alt: "main Slide"
  })));
}

/* harmony default export */ var components_ImageSlide = (ImageSlide);
// EXTERNAL MODULE: ./components/home/main-slider/components/VideoSlide.less
var VideoSlide = __webpack_require__("Z/9m");

// CONCATENATED MODULE: ./components/home/main-slider/components/VideoSlide.jsx
var VideoSlide_jsx = external_react_default.a.createElement;




function VideoSlide_VideoSlide({
  item
}) {
  const {
    url,
    link
  } = item;
  const videoSrc = `${keys["a" /* default */].HOST}/mainSlider/${url}`;
  return VideoSlide_jsx("a", {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer"
  }, VideoSlide_jsx("video", {
    className: "myVideo",
    autoPlay: true,
    controls: false,
    name: "media",
    muted: true,
    loop: true
  }, VideoSlide_jsx("source", {
    src: videoSrc,
    type: "video/mp4"
  })));
}

/* harmony default export */ var components_VideoSlide = (Object(external_react_["memo"])(VideoSlide_VideoSlide));
// CONCATENATED MODULE: ./components/home/main-slider/MainSlider.js
var MainSlider_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const params = {
  speed: 700,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: true
  },
  pagination: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
};
let key = 1;

function MainSlider() {
  const {
    items
  } = useMainSlider();
  const {
    0: localItems,
    1: setLocalItems
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    if (items.length) {
      setLocalItems([...items]);
      key++;
    }

    return () => {
      setLocalItems(null);
    };
  }, [items]);
  return MainSlider_jsx("div", {
    className: "mainSlider"
  }, MainSlider_jsx(external_react_id_swiper_default.a, _extends({}, params, {
    key: `${key} swiper`
  }), (localItems || []).map((item, index) => {
    if (item.image) {
      return MainSlider_jsx(components_ImageSlide, {
        item: item,
        key: index
      });
    }

    return MainSlider_jsx("div", {
      key: index
    }, MainSlider_jsx(components_VideoSlide, {
      item: item
    }));
  })));
}

/* harmony default export */ var main_slider_MainSlider = __webpack_exports__["default"] = (MainSlider);

/***/ }),

/***/ "Z/9m":
/***/ (function(module, exports) {



/***/ })

};;