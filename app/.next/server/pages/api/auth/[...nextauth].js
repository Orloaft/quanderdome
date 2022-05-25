"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/sequelize-adapter":
/*!***********************************************!*\
  !*** external "@next-auth/sequelize-adapter" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/sequelize-adapter");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/email":
/*!********************************************!*\
  !*** external "next-auth/providers/email" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/email");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("sequelize");;

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_auth_sequelize_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-auth/sequelize-adapter */ \"@next-auth/sequelize-adapter\");\n/* harmony import */ var _next_auth_sequelize_adapter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_auth_sequelize_adapter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/email */ \"next-auth/providers/email\");\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_email__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_2__]);\nsequelize__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_2__.Sequelize({\n    dialect: \"sqlite\"\n});\n// Calling sync() is not recommended in production\nsequelize.sync();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    session: {\n        strategy: \"database\"\n    },\n    providers: [\n        next_auth_providers_email__WEBPACK_IMPORTED_MODULE_3___default()({\n            server: process.env.EMAIL_SERVER,\n            from: process.env.EMAIL_FROM\n        }), \n    ],\n    adapter: _next_auth_sequelize_adapter__WEBPACK_IMPORTED_MODULE_1___default()(sequelize),\n    theme: {\n        colorScheme: \"light\"\n    },\n    callbacks: {\n        async jwt ({ token  }) {\n            token.userRole = \"admin\";\n            return token;\n        }\n    }\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ2lCO0FBQ3RCO0FBQ2dCO0FBQ3RELE1BQU1LLFNBQVMsR0FBRyxJQUFJRixnREFBUyxDQUFDO0lBQzlCRyxPQUFPLEVBQUUsUUFBUTtDQUNsQixDQUFDO0FBQ0Ysa0RBQWtEO0FBRWxERCxTQUFTLENBQUNFLElBQUksRUFBRSxDQUFDO0FBQ2pCLGlFQUFlUCxnREFBUSxDQUFDO0lBQ3RCUSxPQUFPLEVBQUU7UUFDUEMsUUFBUSxFQUFFLFVBQVU7S0FDckI7SUFDREMsU0FBUyxFQUFFO1FBQ1ROLGdFQUFhLENBQUM7WUFDWk8sTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsWUFBWTtZQUNoQ0MsSUFBSSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csVUFBVTtTQUM3QixDQUFDO0tBQ0g7SUFDREMsT0FBTyxFQUFFZixtRUFBZ0IsQ0FBQ0csU0FBUyxDQUFDO0lBQ3BDYSxLQUFLLEVBQUU7UUFDTEMsV0FBVyxFQUFFLE9BQU87S0FDckI7SUFDREMsU0FBUyxFQUFFO1FBQ1QsTUFBTUMsR0FBRyxFQUFDLEVBQUVDLEtBQUssR0FBRSxFQUFFO1lBQ25CQSxLQUFLLENBQUNDLFFBQVEsR0FBRyxPQUFPLENBQUM7WUFDekIsT0FBT0QsS0FBSyxDQUFDO1NBQ2Q7S0FFRjtDQUNGLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3F1YW5kZXJkb21lLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwgeyBVc2VyIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgU2VxdWVsaXplQWRhcHRlciBmcm9tIFwiQG5leHQtYXV0aC9zZXF1ZWxpemUtYWRhcHRlclwiO1xyXG5pbXBvcnQgeyBTZXF1ZWxpemUgfSBmcm9tIFwic2VxdWVsaXplXCI7XHJcbmltcG9ydCBFbWFpbFByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2VtYWlsXCI7XHJcbmNvbnN0IHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoe1xyXG4gIGRpYWxlY3Q6IFwic3FsaXRlXCIsXHJcbn0pO1xyXG4vLyBDYWxsaW5nIHN5bmMoKSBpcyBub3QgcmVjb21tZW5kZWQgaW4gcHJvZHVjdGlvblxyXG5cclxuc2VxdWVsaXplLnN5bmMoKTtcclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG4gIHNlc3Npb246IHtcclxuICAgIHN0cmF0ZWd5OiBcImRhdGFiYXNlXCIsXHJcbiAgfSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEVtYWlsUHJvdmlkZXIoe1xyXG4gICAgICBzZXJ2ZXI6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUixcclxuICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuRU1BSUxfRlJPTSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgYWRhcHRlcjogU2VxdWVsaXplQWRhcHRlcihzZXF1ZWxpemUpLFxyXG4gIHRoZW1lOiB7XHJcbiAgICBjb2xvclNjaGVtZTogXCJsaWdodFwiLFxyXG4gIH0sXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhc3luYyBqd3QoeyB0b2tlbiB9KSB7XHJcbiAgICAgIHRva2VuLnVzZXJSb2xlID0gXCJhZG1pblwiO1xyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9LFxyXG4gICAgLy8gc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXHJcbiAgfSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIlVzZXIiLCJTZXF1ZWxpemVBZGFwdGVyIiwiU2VxdWVsaXplIiwiRW1haWxQcm92aWRlciIsInNlcXVlbGl6ZSIsImRpYWxlY3QiLCJzeW5jIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwicHJvdmlkZXJzIiwic2VydmVyIiwicHJvY2VzcyIsImVudiIsIkVNQUlMX1NFUlZFUiIsImZyb20iLCJFTUFJTF9GUk9NIiwiYWRhcHRlciIsInRoZW1lIiwiY29sb3JTY2hlbWUiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInVzZXJSb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();