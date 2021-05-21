(function() {
var exports = {};
exports.id = 59;
exports.ids = [59,701,887];
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [297,383,806], function() { return __webpack_exec__(301); });
module.exports = __webpack_exports__;

})();