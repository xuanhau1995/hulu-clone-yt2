exports.id = 806;
exports.ids = [806];
exports.modules = {

/***/ 806:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(675);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



/** @format */



const Thumnail = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(({
  result
}, ref) => {
  const BASED_URL = "https://image.tmdb.org/t/p/original/";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    ref: ref,
    className: "cursor-pointer group p-2 trasition duration-200 ease-in transform sm:hover:scale-105 hover;z-50",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
      layout: "responsive",
      width: 1920,
      height: 1080,
      src: `${BASED_URL}${result.backdrop_path || result.poster_path}` || `${BASED_URL}${result.poster_path}`
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "p-4",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "truncate max-w-md",
        children: result.overview
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: "mt-1 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold",
        children: result.title || result.original_name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        className: "flex items-center opacity-0 group-hover:opacity-100",
        children: [result.release_date || result.first_air_date, " \u2022 ", "", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__/* .ThumbUpIcon */ .Z7j, {
          className: "h-5"
        }), result.vote_count]
      })]
    })]
  });
});
/* harmony default export */ __webpack_exports__["default"] = (Thumnail);

/***/ })

};
;