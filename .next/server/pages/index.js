(function() {
var exports = {};
exports.id = 405;
exports.ids = [405,701,696,59,887];
exports.modules = {

/***/ 301:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Results_Results; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: ./pages/components/Results/Thumnail.js
var Thumnail = __webpack_require__(806);
;// CONCATENATED MODULE: external "react-flip-move"
var external_react_flip_move_namespaceObject = require("react-flip-move");;
var external_react_flip_move_default = /*#__PURE__*/__webpack_require__.n(external_react_flip_move_namespaceObject);
;// CONCATENATED MODULE: ./pages/components/Results/Results.js


/** @format */



function Results({
  results
}) {
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_flip_move_default()), {
    className: "px-5 py-10 sm:grid md:grid-cols-2 xl:grid-cols-4 3xl:flex flex-wrap justify-center",
    children: results.map(result => /*#__PURE__*/jsx_runtime_.jsx(Thumnail.default, {
      result: result
    }, result.id))
  });
}

/* harmony default export */ var Results_Results = (Results);

/***/ }),

/***/ 333:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: ./pages/components/Header/Header.js
var Header = __webpack_require__(200);
// EXTERNAL MODULE: ./pages/components/Nav/Nav.js
var Nav = __webpack_require__(238);
// EXTERNAL MODULE: ./pages/components/Results/Results.js + 1 modules
var Results = __webpack_require__(301);
// EXTERNAL MODULE: ./utils/requests.js
var requests = __webpack_require__(404);
;// CONCATENATED MODULE: ./pages/index.js



/** @format */






function Home({
  results
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("head", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Hulu 2.0"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Header.default, {}), /*#__PURE__*/jsx_runtime_.jsx(Nav.default, {}), /*#__PURE__*/jsx_runtime_.jsx(Results.default, {
      results: results
    })]
  });
} // page only this page its based on per page this page is going to server side render

async function getServerSideProps(context) {
  var _requests$genre;

  // pull url
  const genre = context.query.genre; //get request tmdb server

  const request = await fetch(`https://api.themoviedb.org/3${((_requests$genre = requests/* default */.Z[genre]) === null || _requests$genre === void 0 ? void 0 : _requests$genre.url) || requests/* default.fetchTrending.url */.Z.fetchTrending.url}`).then(res => res.json());
  return {
    props: {
      results: request.results
    }
  };
}

/***/ }),

/***/ 273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [297,383,806,238,200], function() { return __webpack_exec__(333); });
module.exports = __webpack_exports__;

})();