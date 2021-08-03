exports.id = 200;
exports.ids = [200];
exports.modules = {

/***/ 200:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(675);
/* harmony import */ var _HeaderItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(682);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49);



/** @format */




function Header() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
    className: "flex flex-col sm:flex-row m-5 justify-between items-center h-auto",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex flex-grow justify-evenly max-w-2xl",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderItem__WEBPACK_IMPORTED_MODULE_2__.default, {
        title: "HOME",
        Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__/* .HomeIcon */ .tvw
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderItem__WEBPACK_IMPORTED_MODULE_2__.default, {
        title: "TRENDING",
        Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__/* .LightningBoltIcon */ .YGl
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderItem__WEBPACK_IMPORTED_MODULE_2__.default, {
        title: "VERIFIED",
        Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__/* .BadgeCheckIcon */ .js$
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderItem__WEBPACK_IMPORTED_MODULE_2__.default, {
        title: "COLLECTIONS",
        Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__/* .CollectionIcon */ .wZP
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderItem__WEBPACK_IMPORTED_MODULE_2__.default, {
        title: "SEARCH",
        Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__/* .SearchIcon */ .W1M
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderItem__WEBPACK_IMPORTED_MODULE_2__.default, {
        title: "ACCOUNT",
        Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__/* .UserIcon */ .tBG
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
      className: "object-contain",
      src: "http://links.papareact.com/ua6",
      width: 200,
      height: 100
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ 682:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



/** @format */
function HeaderItem({
  Icon,
  title
}) {
  if (!Icon) {
    Icon = {};
  }

  if (!title) {
    title = [];
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
      className: "h-8 mb-1 group-hover:animate-bounce"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
      className: "opacity-0 group-hover:opacity-100 tracking-widest",
      children: title
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (HeaderItem);

/***/ })

};
;