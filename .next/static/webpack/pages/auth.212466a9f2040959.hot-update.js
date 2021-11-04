"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth",{

/***/ "./components/auth/auth-form.js":
/*!**************************************!*\
  !*** ./components/auth/auth-form.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-form.module.css */ \"./components/auth/auth-form.module.css\");\n/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_auth_form_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar createUser = _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(email, password) {\n    var response, data;\n    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return fetch(\"/api/auth/signup\", {\n                    method: \"POST\",\n                    body: JSON.stringify({\n                        email: email,\n                        password: password\n                    }),\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    }\n                });\n            case 2:\n                response = _ctx.sent;\n                _ctx.next = 5;\n                return response.json();\n            case 5:\n                data = _ctx.sent;\n                if (response.ok) {\n                    _ctx.next = 8;\n                    break;\n                }\n                throw new Error(data.message || \"Something went wrong\");\n            case 8:\n                return _ctx.abrupt(\"return\", data);\n            case 9:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\nfunction AuthForm() {\n    var switchAuthModeHandler = function switchAuthModeHandler() {\n        setIsLogin(function(prevState) {\n            return !prevState;\n        });\n    };\n    _s();\n    var emailInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var passwordInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLogin = ref[0], setIsLogin = ref[1];\n    var submitHandler = _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n        var enteredEmail, enteredPassword, result, result1;\n        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    e.preventDefault();\n                    enteredEmail = emailInputRef.current.value;\n                    enteredPassword = passwordInputRef.current.value;\n                    if (!isLogin) {\n                        _ctx.next = 10;\n                        break;\n                    }\n                    _ctx.next = 6;\n                    return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.signIn)(\"credentials\", {\n                        redirect: false,\n                        email: enteredEmail,\n                        password: enteredPassword\n                    });\n                case 6:\n                    result = _ctx.sent;\n                    if (!result.error) {\n                    //set \n                    }\n                    _ctx.next = 20;\n                    break;\n                case 10:\n                    _ctx.prev = 10;\n                    _ctx.next = 13;\n                    return createUser(enteredEmail, enteredPassword);\n                case 13:\n                    result1 = _ctx.sent;\n                    console.log(result1);\n                    _ctx.next = 20;\n                    break;\n                case 17:\n                    _ctx.prev = 17;\n                    _ctx.t0 = _ctx[\"catch\"](10);\n                    console.log(_ctx.t0);\n                case 20:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                10,\n                17\n            ]\n        ]);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"section\", {\n        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().auth),\n        __source: {\n            fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/auth/auth-form.js\",\n            lineNumber: 59,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/auth/auth-form.js\",\n                    lineNumber: 60,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: isLogin ? \"Login\" : \"Sign Up\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"form\", {\n                onSubmit: submitHandler,\n                __source: {\n                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/auth/auth-form.js\",\n                    lineNumber: 61,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().control),\n                        __source: {\n                            fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/auth/auth-form.js\",\n                            lineNumber: 62,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n                                htmlFor: \"email\",\n                                __source: {\n                                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/auth/auth-form.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"Your Email\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                                type: \"email\",\n                                id: \"email\",\n                                required: true,\n                                ref: emailInputRef,\n                                __source: {\n                                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/auth/auth-form.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 11\n                                },\n                                __self: this\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().control),\n                        __source: {\n                            fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/auth/auth-form.js\",\n                            lineNumber: 66,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n                                htmlFor: \"password\",\n                                __source: {\n                                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/auth/auth-form.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"Your Password\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                required: true,\n                                ref: passwordInputRef,\n                                __source: {\n                                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/auth/auth-form.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 11\n                                },\n                                __self: this\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().actions),\n                        __source: {\n                            fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/auth/auth-form.js\",\n                            lineNumber: 70,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                                __source: {\n                                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/auth/auth-form.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: isLogin ? \"Login\" : \"Create Account\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                                type: \"button\",\n                                className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().toggle),\n                                onClick: switchAuthModeHandler,\n                                __source: {\n                                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/auth/auth-form.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: isLogin ? \"Create new account\" : \"Login with existing account\"\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_s(AuthForm, \"fB8g6e1mdfqrfI96q1vSsmZO/OE=\");\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F1dGgvYXV0aC1mb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSTtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLEdBQUssQ0FBQ0ksVUFBVSxxRkFBRyxRQUFRLFNBQURDLEtBQUssRUFBRUMsUUFBUSxFQUFLLENBQUM7UUFDdkNDLFFBQVEsRUFNUkMsSUFBSTs7Ozs7dUJBTmFDLEtBQUssQ0FBQyxDQUFrQixtQkFBRSxDQUFDO29CQUNoREMsTUFBTSxFQUFFLENBQU07b0JBQ2RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQzt3QkFBQ1IsS0FBSyxFQUFMQSxLQUFLO3dCQUFFQyxRQUFRLEVBQVJBLFFBQVE7b0JBQUMsQ0FBQztvQkFDeENRLE9BQU8sRUFBRSxDQUFDO3dCQUFDLENBQWMsZUFBRSxDQUFrQjtvQkFBQyxDQUFDO2dCQUNqRCxDQUFDOztnQkFKS1AsUUFBUTs7dUJBTUtBLFFBQVEsQ0FBQ1EsSUFBSTs7Z0JBQTFCUCxJQUFJO29CQUVMRCxRQUFRLENBQUNTLEVBQUU7Ozs7Z0JBQ2QsS0FBSyxDQUFDLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDVCxJQUFJLENBQUNVLE9BQU8sSUFBSyxDQUFvQjs7NkNBR2hEVixJQUFJOzs7Ozs7QUFDYixDQUFDO1NBRVFXLFFBQVEsR0FBRyxDQUFDO1FBTVZDLHFCQUFxQixHQUE5QixRQUFRLENBQUNBLHFCQUFxQixHQUFHLENBQUM7UUFDaENDLFVBQVUsQ0FBQyxRQUFRLENBQVBDLFNBQVM7WUFBSyxNQUFNLEVBQUxBLFNBQVM7O0lBQ3RDLENBQUM7O0lBUEQsR0FBSyxDQUFDQyxhQUFhLEdBQUd0Qiw2Q0FBTTtJQUM1QixHQUFLLENBQUN1QixnQkFBZ0IsR0FBR3ZCLDZDQUFNO0lBRS9CLEdBQUssQ0FBeUJELEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXBDeUIsT0FBTyxHQUFnQnpCLEdBQWMsS0FBNUJxQixVQUFVLEdBQUlyQixHQUFjO0lBTTVDLEdBQUssQ0FBQzBCLGFBQWEscUZBQUcsUUFBUSxTQUFEQyxDQUFDLEVBQUssQ0FBQztZQUc1QkMsWUFBWSxFQUNaQyxlQUFlLEVBR2JDLE1BQU0sRUFZSkEsT0FBTTs7OztvQkFsQmhCSCxDQUFDLENBQUNJLGNBQWM7b0JBRVZILFlBQVksR0FBR0wsYUFBYSxDQUFDUyxPQUFPLENBQUNDLEtBQUs7b0JBQzFDSixlQUFlLEdBQUdMLGdCQUFnQixDQUFDUSxPQUFPLENBQUNDLEtBQUs7eUJBRWxEUixPQUFPOzs7OzsyQkFDWXRCLHdEQUFNLENBQUMsQ0FBYSxjQUFFLENBQUM7d0JBQzFDK0IsUUFBUSxFQUFFLEtBQUs7d0JBQ2Y3QixLQUFLLEVBQUV1QixZQUFZO3dCQUNuQnRCLFFBQVEsRUFBRXVCLGVBQWU7b0JBQzNCLENBQUM7O29CQUpLQyxNQUFNO29CQU1aLEVBQUUsR0FBRUEsTUFBTSxDQUFDSyxLQUFLLEVBQUMsQ0FBQztvQkFDaEIsRUFBTTtvQkFDUixDQUFDOzs7Ozs7MkJBSXNCL0IsVUFBVSxDQUFDd0IsWUFBWSxFQUFFQyxlQUFlOztvQkFBdkRDLE9BQU07b0JBQ1pNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxPQUFNOzs7Ozs7b0JBRWxCTSxPQUFPLENBQUNDLEdBQUc7Ozs7Ozs7Ozs7O0lBR2pCLENBQUM7SUFFRCxNQUFNLHVFQUNIQyxDQUFPO1FBQUNDLFNBQVMsRUFBRXJDLG1FQUFZOzs7Ozs7OztpRkFDN0J1QyxDQUFFOzs7Ozs7OzBCQUFFaEIsT0FBTyxHQUFHLENBQU8sU0FBRyxDQUFTOztrRkFDakNpQixDQUFJO2dCQUFDQyxRQUFRLEVBQUVqQixhQUFhOzs7Ozs7OzswRkFDMUJrQixDQUFHO3dCQUFDTCxTQUFTLEVBQUVyQyxzRUFBZTs7Ozs7Ozs7aUdBQzVCNEMsQ0FBSztnQ0FBQ0MsT0FBTyxFQUFDLENBQU87Ozs7Ozs7MENBQUMsQ0FBVTs7aUdBQ2hDQyxDQUFLO2dDQUFDQyxJQUFJLEVBQUMsQ0FBTztnQ0FBQ0MsRUFBRSxFQUFDLENBQU87Z0NBQUNDLFFBQVE7Z0NBQUNDLEdBQUcsRUFBRTdCLGFBQWE7Ozs7Ozs7Ozs7MEZBRTNEcUIsQ0FBRzt3QkFBQ0wsU0FBUyxFQUFFckMsc0VBQWU7Ozs7Ozs7O2lHQUM1QjRDLENBQUs7Z0NBQUNDLE9BQU8sRUFBQyxDQUFVOzs7Ozs7OzBDQUFDLENBQWE7O2lHQUN0Q0MsQ0FBSztnQ0FBQ0MsSUFBSSxFQUFDLENBQVU7Z0NBQUNDLEVBQUUsRUFBQyxDQUFVO2dDQUFDQyxRQUFRO2dDQUFDQyxHQUFHLEVBQUU1QixnQkFBZ0I7Ozs7Ozs7Ozs7MEZBRXBFb0IsQ0FBRzt3QkFBQ0wsU0FBUyxFQUFFckMsc0VBQWU7Ozs7Ozs7O2lHQUM1Qm9ELENBQU07Ozs7Ozs7MENBQUU3QixPQUFPLEdBQUcsQ0FBTyxTQUFHLENBQWdCOztpR0FDNUM2QixDQUFNO2dDQUFDTCxJQUFJLEVBQUMsQ0FBUTtnQ0FBQ1YsU0FBUyxFQUFFckMscUVBQWM7Z0NBQUVzRCxPQUFPLEVBQUVwQyxxQkFBcUI7Ozs7Ozs7MENBQzVFSyxPQUFPLEdBQUcsQ0FBb0Isc0JBQUcsQ0FBNkI7Ozs7Ozs7O0FBTTNFLENBQUM7R0ExRFFOLFFBQVE7S0FBUkEsUUFBUTtBQTREakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2F1dGgvYXV0aC1mb3JtLmpzPzYxZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vYXV0aC1mb3JtLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5cbmNvbnN0IGNyZWF0ZVVzZXIgPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2F1dGgvc2lnbnVwXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pLFxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgfSk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGRhdGEubWVzc2FnZSB8fCBgU29tZXRoaW5nIHdlbnQgd3JvbmdgKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufTtcblxuZnVuY3Rpb24gQXV0aEZvcm0oKSB7XG4gIGNvbnN0IGVtYWlsSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgcGFzc3dvcmRJbnB1dFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGZ1bmN0aW9uIHN3aXRjaEF1dGhNb2RlSGFuZGxlcigpIHtcbiAgICBzZXRJc0xvZ2luKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICB9XG5cbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZW50ZXJlZEVtYWlsID0gZW1haWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IHBhc3N3b3JkSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblxuICAgIGlmIChpc0xvZ2luKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7XG4gICAgICAgIHJlZGlyZWN0OiBmYWxzZSxcbiAgICAgICAgZW1haWw6IGVudGVyZWRFbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IGVudGVyZWRQYXNzd29yZCxcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBpZighcmVzdWx0LmVycm9yKXtcbiAgICAgICAgLy9zZXQgXG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3JlYXRlVXNlcihlbnRlcmVkRW1haWwsIGVudGVyZWRQYXNzd29yZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmF1dGh9PlxuICAgICAgPGgxPntpc0xvZ2luID8gXCJMb2dpblwiIDogXCJTaWduIFVwXCJ9PC9oMT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2VtYWlsJz5Zb3VyIEVtYWlsPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0nZW1haWwnIGlkPSdlbWFpbCcgcmVxdWlyZWQgcmVmPXtlbWFpbElucHV0UmVmfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3Bhc3N3b3JkJz5Zb3VyIFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIGlkPSdwYXNzd29yZCcgcmVxdWlyZWQgcmVmPXtwYXNzd29yZElucHV0UmVmfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XG4gICAgICAgICAgPGJ1dHRvbj57aXNMb2dpbiA/IFwiTG9naW5cIiA6IFwiQ3JlYXRlIEFjY291bnRcIn08L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPXtjbGFzc2VzLnRvZ2dsZX0gb25DbGljaz17c3dpdGNoQXV0aE1vZGVIYW5kbGVyfT5cbiAgICAgICAgICAgIHtpc0xvZ2luID8gXCJDcmVhdGUgbmV3IGFjY291bnRcIiA6IFwiTG9naW4gd2l0aCBleGlzdGluZyBhY2NvdW50XCJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJjbGFzc2VzIiwic2lnbkluIiwiY3JlYXRlVXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImpzb24iLCJvayIsIkVycm9yIiwibWVzc2FnZSIsIkF1dGhGb3JtIiwic3dpdGNoQXV0aE1vZGVIYW5kbGVyIiwic2V0SXNMb2dpbiIsInByZXZTdGF0ZSIsImVtYWlsSW5wdXRSZWYiLCJwYXNzd29yZElucHV0UmVmIiwiaXNMb2dpbiIsInN1Ym1pdEhhbmRsZXIiLCJlIiwiZW50ZXJlZEVtYWlsIiwiZW50ZXJlZFBhc3N3b3JkIiwicmVzdWx0IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwidmFsdWUiLCJyZWRpcmVjdCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJhdXRoIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJjb250cm9sIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJyZXF1aXJlZCIsInJlZiIsImFjdGlvbnMiLCJidXR0b24iLCJ0b2dnbGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/auth/auth-form.js\n");

/***/ })

});