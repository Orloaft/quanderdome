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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_auth_sequelize_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-auth/sequelize-adapter */ \"@next-auth/sequelize-adapter\");\n/* harmony import */ var _next_auth_sequelize_adapter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_auth_sequelize_adapter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/email */ \"next-auth/providers/email\");\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_email__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_2__]);\nsequelize__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_2__.Sequelize({\n    dialect: \"sqlite\"\n});\n// Calling sync() is not recommended in production\nsequelize.sync();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    session: {\n        strategy: \"database\"\n    },\n    providers: [\n        next_auth_providers_email__WEBPACK_IMPORTED_MODULE_3___default()({\n            server: process.env.EMAIL_SERVER,\n            from: process.env.EMAIL_FROM\n        }), \n    ],\n    adapter: _next_auth_sequelize_adapter__WEBPACK_IMPORTED_MODULE_1___default()(sequelize),\n    theme: {\n        colorScheme: \"light\"\n    },\n    callbacks: {\n        async jwt ({ token  }) {\n            token.userRole = \"admin\";\n            return token;\n        }\n    }\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ2lCO0FBQ3RCO0FBQ2dCO0FBQ3RELE1BQU1LLFNBQVMsR0FBRyxJQUFJRixnREFBUyxDQUFDO0lBQzlCRyxPQUFPLEVBQUUsUUFBUTtDQUNsQixDQUFDO0FBQ0Ysa0RBQWtEO0FBRWxERCxTQUFTLENBQUNFLElBQUksRUFBRSxDQUFDO0FBQ2pCLGlFQUFlUCxnREFBUSxDQUFDO0lBQ3RCUSxPQUFPLEVBQUU7UUFDUEMsUUFBUSxFQUFFLFVBQVU7S0FDckI7SUFDREMsU0FBUyxFQUFFO1FBQ1ROLGdFQUFhLENBQUM7WUFDWk8sTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsWUFBWTtZQUNoQ0MsSUFBSSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csVUFBVTtTQUM3QixDQUFDO0tBQ0g7SUFDREMsT0FBTyxFQUFFZixtRUFBZ0IsQ0FBQ0csU0FBUyxDQUFDO0lBQ3BDYSxLQUFLLEVBQUU7UUFDTEMsV0FBVyxFQUFFLE9BQU87S0FDckI7SUFDREMsU0FBUyxFQUFFO1FBQ1QsTUFBTUMsR0FBRyxFQUFDLEVBQUVDLEtBQUssR0FBRSxFQUFFO1lBQ25CQSxLQUFLLENBQUNDLFFBQVEsR0FBRyxPQUFPLENBQUM7WUFDekIsT0FBT0QsS0FBSyxDQUFDO1NBQ2Q7S0FDRjtDQUNGLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3F1YW5kZXJkb21lLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwgeyBVc2VyIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IFNlcXVlbGl6ZUFkYXB0ZXIgZnJvbSBcIkBuZXh0LWF1dGgvc2VxdWVsaXplLWFkYXB0ZXJcIjtcbmltcG9ydCB7IFNlcXVlbGl6ZSB9IGZyb20gXCJzZXF1ZWxpemVcIjtcbmltcG9ydCBFbWFpbFByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2VtYWlsXCI7XG5jb25zdCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHtcbiAgZGlhbGVjdDogXCJzcWxpdGVcIixcbn0pO1xuLy8gQ2FsbGluZyBzeW5jKCkgaXMgbm90IHJlY29tbWVuZGVkIGluIHByb2R1Y3Rpb25cblxuc2VxdWVsaXplLnN5bmMoKTtcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImRhdGFiYXNlXCIsXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIEVtYWlsUHJvdmlkZXIoe1xuICAgICAgc2VydmVyOiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVIsXG4gICAgICBmcm9tOiBwcm9jZXNzLmVudi5FTUFJTF9GUk9NLFxuICAgIH0pLFxuICBdLFxuICBhZGFwdGVyOiBTZXF1ZWxpemVBZGFwdGVyKHNlcXVlbGl6ZSksXG4gIHRoZW1lOiB7XG4gICAgY29sb3JTY2hlbWU6IFwibGlnaHRcIixcbiAgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4gfSkge1xuICAgICAgdG9rZW4udXNlclJvbGUgPSBcImFkbWluXCI7XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiVXNlciIsIlNlcXVlbGl6ZUFkYXB0ZXIiLCJTZXF1ZWxpemUiLCJFbWFpbFByb3ZpZGVyIiwic2VxdWVsaXplIiwiZGlhbGVjdCIsInN5bmMiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJwcm92aWRlcnMiLCJzZXJ2ZXIiLCJwcm9jZXNzIiwiZW52IiwiRU1BSUxfU0VSVkVSIiwiZnJvbSIsIkVNQUlMX0ZST00iLCJhZGFwdGVyIiwidGhlbWUiLCJjb2xvclNjaGVtZSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidXNlclJvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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