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

/***/ "./components/Lobby/Lobby.js":
/*!***********************************!*\
  !*** ./components/Lobby/Lobby.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Lobby\": function() { return /* binding */ Lobby; }\n/* harmony export */ });\n/* harmony import */ var _home_orlovboros_Desktop_brainstation_projects_quanderdome_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_orlovboros_Desktop_brainstation_projects_quanderdome_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_orlovboros_Desktop_brainstation_projects_quanderdome_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Lobby_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Lobby.module.scss */ \"./components/Lobby/Lobby.module.scss\");\n/* harmony import */ var _Lobby_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Lobby_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _services_socketService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/socketService */ \"./services/socketService/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _GameConfig_GameConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../GameConfig/GameConfig */ \"./components/GameConfig/GameConfig.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Lobby = function(param) {\n    var roomId = param.roomId, leaveLobby = param.leaveLobby;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), chat = ref[0], setChat = ref[1];\n    function messageSubmit(e) {\n        return _messageSubmit.apply(this, arguments);\n    }\n    function _messageSubmit() {\n        _messageSubmit = _asyncToGenerator(_home_orlovboros_Desktop_brainstation_projects_quanderdome_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            return _home_orlovboros_Desktop_brainstation_projects_quanderdome_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        return _ctx.abrupt(\"return\", new Promise(function(rs, rj) {\n                            _services_socketService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].socket.emit(\"room_message\", roomId, {\n                                body: e.target.message.value,\n                                id: _services_socketService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].socket.id\n                            });\n                            rs();\n                        }).then(function() {\n                            e.target.message.value = \"\";\n                        }));\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _messageSubmit.apply(this, arguments);\n    }\n    _services_socketService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].socket.on(\"room_message_received\", function(msg) {\n        var updatedChat = _toConsumableArray(chat);\n        updatedChat.unshift(msg);\n        setChat(updatedChat);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n            className: (_Lobby_module_scss__WEBPACK_IMPORTED_MODULE_5___default().chat),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                    className: (_Lobby_module_scss__WEBPACK_IMPORTED_MODULE_5___default().chat__form),\n                    onSubmit: function(e) {\n                        messageSubmit(e);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            className: (_Lobby_module_scss__WEBPACK_IMPORTED_MODULE_5___default().chat__label),\n                            children: \" send a message\"\n                        }, void 0, false, {\n                            fileName: \"/home/orlovboros/Desktop/brainstation/projects/quanderdome/app/components/Lobby/Lobby.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_Lobby_module_scss__WEBPACK_IMPORTED_MODULE_5___default().chat__input),\n                            type: \"text\",\n                            name: \"message\",\n                            autoComplete: \"off\"\n                        }, void 0, false, {\n                            fileName: \"/home/orlovboros/Desktop/brainstation/projects/quanderdome/app/components/Lobby/Lobby.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            className: (_Lobby_module_scss__WEBPACK_IMPORTED_MODULE_5___default().chat__submit),\n                            type: \"submit\",\n                            children: \"send\"\n                        }, void 0, false, {\n                            fileName: \"/home/orlovboros/Desktop/brainstation/projects/quanderdome/app/components/Lobby/Lobby.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                _services_socketService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].socket.emit(\"leave_room\", roomId);\n                                setChat([]);\n                                leaveLobby();\n                            },\n                            children: \"Leave lobby\"\n                        }, void 0, false, {\n                            fileName: \"/home/orlovboros/Desktop/brainstation/projects/quanderdome/app/components/Lobby/Lobby.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/orlovboros/Desktop/brainstation/projects/quanderdome/app/components/Lobby/Lobby.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                    className: (_Lobby_module_scss__WEBPACK_IMPORTED_MODULE_5___default().chat__box_label),\n                    htmlFor: \"chat\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"/home/orlovboros/Desktop/brainstation/projects/quanderdome/app/components/Lobby/Lobby.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                    className: (_Lobby_module_scss__WEBPACK_IMPORTED_MODULE_5___default().chat__box),\n                    name: \"chat\",\n                    children: chat.map(function(msg) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                            children: msg.id + \" says: \" + msg.body\n                        }, (0,uuid__WEBPACK_IMPORTED_MODULE_6__.v4)(), false, {\n                            fileName: \"/home/orlovboros/Desktop/brainstation/projects/quanderdome/app/components/Lobby/Lobby.js\",\n                            lineNumber: 62,\n                            columnNumber: 20\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/orlovboros/Desktop/brainstation/projects/quanderdome/app/components/Lobby/Lobby.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_GameConfig_GameConfig__WEBPACK_IMPORTED_MODULE_4__.GameConfig, {}, void 0, false, {\n                    fileName: \"/home/orlovboros/Desktop/brainstation/projects/quanderdome/app/components/Lobby/Lobby.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/orlovboros/Desktop/brainstation/projects/quanderdome/app/components/Lobby/Lobby.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Lobby, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n_c = Lobby;\nvar _c;\n$RefreshReg$(_c, \"Lobby\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvYmJ5L0xvYmJ5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDZ0I7QUFDeEI7QUFDRztBQUNrQjs7QUFDL0MsSUFBTU0sS0FBSyxHQUFHLGdCQUE0QjtRQUF6QkMsTUFBTSxTQUFOQSxNQUFNLEVBQUVDLFVBQVUsU0FBVkEsVUFBVTs7O0lBQ3hDLElBQXdCTixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBTnRDLElBTWEsR0FBYUEsR0FBWSxHQUF6QixFQU5iLE9BTXNCLEdBQUlBLEdBQVksR0FBaEI7YUFFTFMsYUFBYSxDQUFDQyxDQUFDO2VBQWZELGNBQWE7O2FBQWJBLGNBQWE7UUFBYkEsY0FBYSxHQUE1Qiw2TUFBNkJDLENBQUMsRUFBRTs7Ozt3QkFDOUJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7cURBRVosSUFBSUMsT0FBTyxDQUFDLFNBQUNDLEVBQUUsRUFBRUMsRUFBRSxFQUFLOzRCQUM3QmYsMkVBQXlCLENBQUMsY0FBYyxFQUFFTSxNQUFNLEVBQUU7Z0NBQ2hEWSxJQUFJLEVBQUVQLENBQUMsQ0FBQ1EsTUFBTSxDQUFDQyxPQUFPLENBQUNDLEtBQUs7Z0NBQzVCQyxFQUFFLEVBQUV0Qix5RUFBdUI7NkJBQzVCLENBQUMsQ0FBQzs0QkFDSGMsRUFBRSxFQUFFLENBQUM7eUJBQ04sQ0FBQyxDQUFDUyxJQUFJLENBQUMsV0FBTTs0QkFDWlosQ0FBQyxDQUFDUSxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSyxHQUFHLEVBQUUsQ0FBQzt5QkFDN0IsQ0FBQzs7Ozs7O1NBQ0g7ZUFaY1gsY0FBYTs7SUFhNUJWLHlFQUF1QixDQUFDLHVCQUF1QixFQUFFLFNBQUN5QixHQUFHLEVBQUs7UUFDeEQsSUFBSUMsV0FBVyxHQUFJLG1CQUFHbEIsSUFBSSxDQUFKQTtRQUN0QmtCLFdBQVcsQ0FBQ0MsT0FBTyxDQUFDRixHQUFHLENBQUMsQ0FBQztRQUN6QmhCLE9BQU8sQ0FBQ2lCLFdBQVcsQ0FBQyxDQUFDO0tBQ3RCLENBQUMsQ0FBQztJQUNILHFCQUNFO2tCQUNFLDRFQUFDRSxTQUFPO1lBQUNDLFNBQVMsRUFBRTlCLGdFQUFXOzs4QkFDN0IsOERBQUMrQixNQUFJO29CQUNIRCxTQUFTLEVBQUU5QixzRUFBaUI7b0JBQzVCaUMsUUFBUSxFQUFFLFNBQUNyQixDQUFDLEVBQUs7d0JBQ2ZELGFBQWEsQ0FBQ0MsQ0FBQyxDQUFDLENBQUM7cUJBQ2xCOztzQ0FFRCw4REFBQ3NCLE1BQUk7NEJBQUNKLFNBQVMsRUFBRTlCLHVFQUFrQjtzQ0FBRSxpQkFBZTs7Ozs7aUNBQU87c0NBQzNELDhEQUFDb0MsT0FBSzs0QkFDSk4sU0FBUyxFQUFFOUIsdUVBQWtCOzRCQUM3QnNDLElBQUksRUFBQyxNQUFNOzRCQUNYQyxJQUFJLEVBQUMsU0FBUzs0QkFDZEMsWUFBWSxFQUFDLEtBQUs7Ozs7O2lDQUNYO3NDQUNULDhEQUFDQyxRQUFNOzRCQUFDWCxTQUFTLEVBQUU5Qix3RUFBbUI7NEJBQUVzQyxJQUFJLEVBQUMsUUFBUTtzQ0FBQyxNQUV0RDs7Ozs7aUNBQVM7c0NBRVQsOERBQUNHLFFBQU07NEJBQ0xFLE9BQU8sRUFBRSxXQUFNO2dDQUNiMUMsMkVBQXlCLENBQUMsWUFBWSxFQUFFTSxNQUFNLENBQUMsQ0FBQztnQ0FDaERHLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQ0FDWkYsVUFBVSxFQUFFLENBQUM7NkJBQ2Q7c0NBQ0YsYUFFRDs7Ozs7aUNBQVM7Ozs7Ozt5QkFDSjs4QkFDUCw4REFBQ29DLE9BQUs7b0JBQUNkLFNBQVMsRUFBRTlCLDJFQUFzQjtvQkFBRThDLE9BQU8sRUFBQyxNQUFNOzhCQUFDLE1BRXpEOzs7Ozt5QkFBUTs4QkFDUiw4REFBQ0MsSUFBRTtvQkFBQ2pCLFNBQVMsRUFBRTlCLHFFQUFnQjtvQkFBRXVDLElBQUksRUFBQyxNQUFNOzhCQUN6QzlCLElBQUksQ0FBQ3dDLEdBQUcsQ0FBQyxTQUFDdkIsR0FBRyxFQUFLO3dCQUNqQixxQkFBTyw4REFBQ3dCLElBQUU7c0NBQWlCeEIsR0FBRyxDQUFDSCxFQUFFLEdBQUcsU0FBUyxHQUFHRyxHQUFHLENBQUNQLElBQUk7MkJBQXhDZix3Q0FBTSxFQUFFOzs7O2tDQUFzQyxDQUFDO3FCQUNoRSxDQUFDOzs7Ozt5QkFDQzs4QkFDTCw4REFBQ0MsOERBQVU7Ozs7eUJBQUc7Ozs7OztpQkFDTjtxQkFDVCxDQUNIO0NBQ0gsQ0FBQztHQS9EV0MsS0FBSztBQUFMQSxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTG9iYnkvTG9iYnkuanM/YzY5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xvYmJ5Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgc29ja2V0U2VydmljZSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc29ja2V0U2VydmljZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBHYW1lQ29uZmlnIH0gZnJvbSBcIi4uL0dhbWVDb25maWcvR2FtZUNvbmZpZ1wiO1xuZXhwb3J0IGNvbnN0IExvYmJ5ID0gKHsgcm9vbUlkLCBsZWF2ZUxvYmJ5IH0pID0+IHtcbiAgY29uc3QgW2NoYXQsIHNldENoYXRdID0gdXNlU3RhdGUoW10pO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIG1lc3NhZ2VTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocnMsIHJqKSA9PiB7XG4gICAgICBzb2NrZXRTZXJ2aWNlLnNvY2tldC5lbWl0KFwicm9vbV9tZXNzYWdlXCIsIHJvb21JZCwge1xuICAgICAgICBib2R5OiBlLnRhcmdldC5tZXNzYWdlLnZhbHVlLFxuICAgICAgICBpZDogc29ja2V0U2VydmljZS5zb2NrZXQuaWQsXG4gICAgICB9KTtcbiAgICAgIHJzKCk7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBlLnRhcmdldC5tZXNzYWdlLnZhbHVlID0gXCJcIjtcbiAgICB9KTtcbiAgfVxuICBzb2NrZXRTZXJ2aWNlLnNvY2tldC5vbihcInJvb21fbWVzc2FnZV9yZWNlaXZlZFwiLCAobXNnKSA9PiB7XG4gICAgbGV0IHVwZGF0ZWRDaGF0ID0gWy4uLmNoYXRdO1xuICAgIHVwZGF0ZWRDaGF0LnVuc2hpZnQobXNnKTtcbiAgICBzZXRDaGF0KHVwZGF0ZWRDaGF0KTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNoYXR9PlxuICAgICAgICA8Zm9ybVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoYXRfX2Zvcm19XG4gICAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgICAgICAgICBtZXNzYWdlU3VibWl0KGUpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0X19sYWJlbH0+IHNlbmQgYSBtZXNzYWdlPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdF9faW5wdXR9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2hhdF9fc3VibWl0fSB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICBzZW5kXG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNvY2tldFNlcnZpY2Uuc29ja2V0LmVtaXQoXCJsZWF2ZV9yb29tXCIsIHJvb21JZCk7XG4gICAgICAgICAgICAgIHNldENoYXQoW10pO1xuICAgICAgICAgICAgICBsZWF2ZUxvYmJ5KCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIExlYXZlIGxvYmJ5XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmNoYXRfX2JveF9sYWJlbH0gaHRtbEZvcj1cImNoYXRcIj5cbiAgICAgICAgICBDaGF0XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5jaGF0X19ib3h9IG5hbWU9XCJjaGF0XCI+XG4gICAgICAgICAge2NoYXQubWFwKChtc2cpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXt1dWlkdjQoKX0+e21zZy5pZCArIFwiIHNheXM6IFwiICsgbXNnLmJvZHl9PC9saT47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxHYW1lQ29uZmlnIC8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsInNvY2tldFNlcnZpY2UiLCJ1c2VTdGF0ZSIsInY0IiwidXVpZHY0IiwiR2FtZUNvbmZpZyIsIkxvYmJ5Iiwicm9vbUlkIiwibGVhdmVMb2JieSIsImNoYXQiLCJzZXRDaGF0IiwibWVzc2FnZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIlByb21pc2UiLCJycyIsInJqIiwic29ja2V0IiwiZW1pdCIsImJvZHkiLCJ0YXJnZXQiLCJtZXNzYWdlIiwidmFsdWUiLCJpZCIsInRoZW4iLCJvbiIsIm1zZyIsInVwZGF0ZWRDaGF0IiwidW5zaGlmdCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJmb3JtIiwiY2hhdF9fZm9ybSIsIm9uU3VibWl0Iiwic3BhbiIsImNoYXRfX2xhYmVsIiwiaW5wdXQiLCJjaGF0X19pbnB1dCIsInR5cGUiLCJuYW1lIiwiYXV0b0NvbXBsZXRlIiwiYnV0dG9uIiwiY2hhdF9fc3VibWl0Iiwib25DbGljayIsImxhYmVsIiwiY2hhdF9fYm94X2xhYmVsIiwiaHRtbEZvciIsInVsIiwiY2hhdF9fYm94IiwibWFwIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Lobby/Lobby.js\n");

/***/ })

});