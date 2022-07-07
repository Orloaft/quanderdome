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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_auth_sequelize_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-auth/sequelize-adapter */ \"@next-auth/sequelize-adapter\");\n/* harmony import */ var _next_auth_sequelize_adapter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_auth_sequelize_adapter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/email */ \"next-auth/providers/email\");\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_email__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_2__]);\nsequelize__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_2__.Sequelize({\n    dialect: \"sqlite\"\n});\n// Calling sync() is not recommended in production\nsequelize.sync();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // session: {\n    //   strategy: \"database\",\n    // },\n    providers: [\n        next_auth_providers_email__WEBPACK_IMPORTED_MODULE_3___default()({\n            server: process.env.EMAIL_SERVER,\n            from: process.env.EMAIL_FROM\n        }), \n    ],\n    adapter: _next_auth_sequelize_adapter__WEBPACK_IMPORTED_MODULE_1___default()(sequelize),\n    theme: {\n        colorScheme: \"light\"\n    },\n    callbacks: {\n        async jwt ({ token  }) {\n            token.userRole = \"admin\";\n            return token;\n        }\n    }\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ2lCO0FBQ3RCO0FBQ2dCO0FBQ3RELE1BQU1LLFNBQVMsR0FBRyxJQUFJRixnREFBUyxDQUFDO0lBQzlCRyxPQUFPLEVBQUUsUUFBUTtDQUNsQixDQUFDO0FBQ0Ysa0RBQWtEO0FBRWxERCxTQUFTLENBQUNFLElBQUksRUFBRSxDQUFDO0FBQ2pCLGlFQUFlUCxnREFBUSxDQUFDO0lBQ3RCLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsS0FBSztJQUNMUSxTQUFTLEVBQUU7UUFDVEosZ0VBQWEsQ0FBQztZQUNaSyxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxZQUFZO1lBQ2hDQyxJQUFJLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxVQUFVO1NBQzdCLENBQUM7S0FDSDtJQUNEQyxPQUFPLEVBQUViLG1FQUFnQixDQUFDRyxTQUFTLENBQUM7SUFDcENXLEtBQUssRUFBRTtRQUNMQyxXQUFXLEVBQUUsT0FBTztLQUNyQjtJQUNEQyxTQUFTLEVBQUU7UUFDVCxNQUFNQyxHQUFHLEVBQUMsRUFBRUMsS0FBSyxHQUFFLEVBQUU7WUFDbkJBLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLE9BQU8sQ0FBQztZQUN6QixPQUFPRCxLQUFLLENBQUM7U0FDZDtLQUVGO0NBQ0YsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVhbmRlcmRvbWUvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoLCB7IFVzZXIgfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgU2VxdWVsaXplQWRhcHRlciBmcm9tIFwiQG5leHQtYXV0aC9zZXF1ZWxpemUtYWRhcHRlclwiO1xuaW1wb3J0IHsgU2VxdWVsaXplIH0gZnJvbSBcInNlcXVlbGl6ZVwiO1xuaW1wb3J0IEVtYWlsUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZW1haWxcIjtcbmNvbnN0IHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoe1xuICBkaWFsZWN0OiBcInNxbGl0ZVwiLFxufSk7XG4vLyBDYWxsaW5nIHN5bmMoKSBpcyBub3QgcmVjb21tZW5kZWQgaW4gcHJvZHVjdGlvblxuXG5zZXF1ZWxpemUuc3luYygpO1xuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICAvLyBzZXNzaW9uOiB7XG4gIC8vICAgc3RyYXRlZ3k6IFwiZGF0YWJhc2VcIixcbiAgLy8gfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRW1haWxQcm92aWRlcih7XG4gICAgICBzZXJ2ZXI6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUixcbiAgICAgIGZyb206IHByb2Nlc3MuZW52LkVNQUlMX0ZST00sXG4gICAgfSksXG4gIF0sXG4gIGFkYXB0ZXI6IFNlcXVlbGl6ZUFkYXB0ZXIoc2VxdWVsaXplKSxcbiAgdGhlbWU6IHtcbiAgICBjb2xvclNjaGVtZTogXCJsaWdodFwiLFxuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiB9KSB7XG4gICAgICB0b2tlbi51c2VyUm9sZSA9IFwiYWRtaW5cIjtcbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIC8vIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxuICB9LFxufSk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJVc2VyIiwiU2VxdWVsaXplQWRhcHRlciIsIlNlcXVlbGl6ZSIsIkVtYWlsUHJvdmlkZXIiLCJzZXF1ZWxpemUiLCJkaWFsZWN0Iiwic3luYyIsInByb3ZpZGVycyIsInNlcnZlciIsInByb2Nlc3MiLCJlbnYiLCJFTUFJTF9TRVJWRVIiLCJmcm9tIiwiRU1BSUxfRlJPTSIsImFkYXB0ZXIiLCJ0aGVtZSIsImNvbG9yU2NoZW1lIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJ1c2VyUm9sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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