"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/GameConfig/GameConfig.js":
/*!*********************************************!*\
  !*** ./components/GameConfig/GameConfig.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameConfig\": function() { return /* binding */ GameConfig; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _GameConfig_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameConfig.module.scss */ \"./components/GameConfig/GameConfig.module.scss\");\n/* harmony import */ var _GameConfig_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_GameConfig_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _CategorySelect_CategorySelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CategorySelect/CategorySelect */ \"./components/CategorySelect/CategorySelect.js\");\n/* harmony import */ var _DifficultySelect_DifficultySelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DifficultySelect/DifficultySelect */ \"./components/DifficultySelect/DifficultySelect.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar GameConfig = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1), questionRange = ref[0], setQuestionRange = ref[1];\n    var handleRangeChange = function(e) {\n        e.preventDefault();\n        setQuestionRange(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_GameConfig_module_scss__WEBPACK_IMPORTED_MODULE_4___default().config),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Game settings\"\n                }, void 0, false, {\n                    fileName: \"/home/orlovboros/Desktop/brainstation/projects/quanderdome/app/components/GameConfig/GameConfig.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: (_GameConfig_module_scss__WEBPACK_IMPORTED_MODULE_4___default().config__form),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            onChange: function(e) {\n                                handleRangeChange(e);\n                            },\n                            for: \"range\",\n                            children: [\n                                questionRange,\n                                \" Questions\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/orlovboros/Desktop/brainstation/projects/quanderdome/app/components/GameConfig/GameConfig.js\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            name: \"range\",\n                            type: \"range\",\n                            min: \"1\",\n                            max: \"30\"\n                        }, void 0, false, {\n                            fileName: \"/home/orlovboros/Desktop/brainstation/projects/quanderdome/app/components/GameConfig/GameConfig.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CategorySelect_CategorySelect__WEBPACK_IMPORTED_MODULE_1__.CategorySelect, {}, void 0, false, {\n                            fileName: \"/home/orlovboros/Desktop/brainstation/projects/quanderdome/app/components/GameConfig/GameConfig.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DifficultySelect_DifficultySelect__WEBPACK_IMPORTED_MODULE_2__.DifficultySelect, {}, void 0, false, {\n                            fileName: \"/home/orlovboros/Desktop/brainstation/projects/quanderdome/app/components/GameConfig/GameConfig.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            disabled: true,\n                            children: \"Start game\"\n                        }, void 0, false, {\n                            fileName: \"/home/orlovboros/Desktop/brainstation/projects/quanderdome/app/components/GameConfig/GameConfig.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/orlovboros/Desktop/brainstation/projects/quanderdome/app/components/GameConfig/GameConfig.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/orlovboros/Desktop/brainstation/projects/quanderdome/app/components/GameConfig/GameConfig.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(GameConfig, \"vpR6s6c+pWN9iYRRE4XhvQBqRwA=\");\n_c = GameConfig;\nvar _c;\n$RefreshReg$(_c, \"GameConfig\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWVDb25maWcvR2FtZUNvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBOEM7QUFDb0I7QUFDTTtBQUN2Qzs7QUFDMUIsSUFBTUksVUFBVSxHQUFHLFdBQU07O0lBQzlCLElBQTBDRCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBTHZELGFBS3NCLEdBQXNCQSxHQUFXLEdBQWpDLEVBTHRCLGdCQUt3QyxHQUFJQSxHQUFXLEdBQWY7SUFDdEMsSUFBTUksaUJBQWlCLEdBQUcsU0FBQ0MsQ0FBQyxFQUFLO1FBQy9CQSxDQUFDLENBQUNDLGNBQWMsRUFBRSxDQUFDO1FBQ25CSCxnQkFBZ0IsQ0FBQ0UsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDO0tBQ2xDO0lBQ0QscUJBQ0U7a0JBQ0UsNEVBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFFYix1RUFBYTs7OEJBQzNCLDhEQUFDZSxJQUFFOzhCQUFDLGVBQWE7Ozs7O3lCQUFLOzhCQUN0Qiw4REFBQ0MsTUFBSTtvQkFBQ0gsU0FBUyxFQUFFYiw2RUFBbUI7O3NDQUNsQyw4REFBQ2tCLE9BQUs7NEJBQ0pDLFFBQVEsRUFBRSxTQUFDWCxDQUFDLEVBQUs7Z0NBQ2ZELGlCQUFpQixDQUFDQyxDQUFDLENBQUMsQ0FBQzs2QkFDdEI7NEJBQ0RZLEdBQUcsRUFBQyxPQUFPOztnQ0FFVmYsYUFBYTtnQ0FBQyxZQUNqQjs7Ozs7O2lDQUFRO3NDQUNSLDhEQUFDZ0IsT0FBSzs0QkFBQ0MsSUFBSSxFQUFDLE9BQU87NEJBQUNDLElBQUksRUFBQyxPQUFPOzRCQUFDQyxHQUFHLEVBQUMsR0FBRzs0QkFBQ0MsR0FBRyxFQUFDLElBQUk7Ozs7O2lDQUFTO3NDQUMxRCw4REFBQ3hCLDBFQUFjOzs7O2lDQUFHO3NDQUNsQiw4REFBQ0MsZ0ZBQWdCOzs7O2lDQUFHO3NDQUNwQiw4REFBQ3dCLFFBQU07NEJBQUNILElBQUksRUFBQyxRQUFROzRCQUFDSSxRQUFRLEVBQUUsSUFBSTtzQ0FBRSxZQUV0Qzs7Ozs7aUNBQVM7Ozs7Ozt5QkFDSjs7Ozs7O2lCQUNIO3FCQUNMLENBQ0g7Q0FDSCxDQUFDO0dBN0JXdkIsVUFBVTtBQUFWQSxLQUFBQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2FtZUNvbmZpZy9HYW1lQ29uZmlnLmpzP2I4MzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9HYW1lQ29uZmlnLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBDYXRlZ29yeVNlbGVjdCB9IGZyb20gXCIuLi9DYXRlZ29yeVNlbGVjdC9DYXRlZ29yeVNlbGVjdFwiO1xuaW1wb3J0IHsgRGlmZmljdWx0eVNlbGVjdCB9IGZyb20gXCIuLi9EaWZmaWN1bHR5U2VsZWN0L0RpZmZpY3VsdHlTZWxlY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgR2FtZUNvbmZpZyA9ICgpID0+IHtcbiAgY29uc3QgW3F1ZXN0aW9uUmFuZ2UsIHNldFF1ZXN0aW9uUmFuZ2VdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IGhhbmRsZVJhbmdlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0UXVlc3Rpb25SYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29uZmlnfT5cbiAgICAgICAgPGgyPkdhbWUgc2V0dGluZ3M8L2gyPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5jb25maWdfX2Zvcm19PlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIGhhbmRsZVJhbmdlQ2hhbmdlKGUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGZvcj1cInJhbmdlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cXVlc3Rpb25SYW5nZX0gUXVlc3Rpb25zXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgbmFtZT1cInJhbmdlXCIgdHlwZT1cInJhbmdlXCIgbWluPVwiMVwiIG1heD1cIjMwXCI+PC9pbnB1dD5cbiAgICAgICAgICA8Q2F0ZWdvcnlTZWxlY3QgLz5cbiAgICAgICAgICA8RGlmZmljdWx0eVNlbGVjdCAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXt0cnVlfT5cbiAgICAgICAgICAgIFN0YXJ0IGdhbWVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkNhdGVnb3J5U2VsZWN0IiwiRGlmZmljdWx0eVNlbGVjdCIsInVzZVN0YXRlIiwiR2FtZUNvbmZpZyIsInF1ZXN0aW9uUmFuZ2UiLCJzZXRRdWVzdGlvblJhbmdlIiwiaGFuZGxlUmFuZ2VDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbmZpZyIsImgyIiwiZm9ybSIsImNvbmZpZ19fZm9ybSIsImxhYmVsIiwib25DaGFuZ2UiLCJmb3IiLCJpbnB1dCIsIm5hbWUiLCJ0eXBlIiwibWluIiwibWF4IiwiYnV0dG9uIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/GameConfig/GameConfig.js\n");

/***/ })

});