"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/main-navigation.js":
/*!**********************************************!*\
  !*** ./components/layout/main-navigation.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* harmony import */ var _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-navigation.module.css */ \"./components/layout/main-navigation.module.css\");\n/* harmony import */ var _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_main_navigation_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nfunction MainNavigation() {\n    _s1();\n    var ref = _slicedToArray((0,next_auth_client__WEBPACK_IMPORTED_MODULE_2__.useSession)(), 2), session = ref[0], loading = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"header\", {\n        className: (_main_navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n        __source: {\n            fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/layout/main-navigation.js\",\n            lineNumber: 10,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                __source: {\n                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/layout/main-navigation.js\",\n                    lineNumber: 11,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    __source: {\n                        fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/layout/main-navigation.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: (_main_navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().logo),\n                        __source: {\n                            fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/layout/main-navigation.js\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: \"Next Auth\"\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"nav\", {\n                __source: {\n                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/layout/main-navigation.js\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"ul\", {\n                    __source: {\n                        fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/layout/main-navigation.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                            __source: {\n                                fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/layout/main-navigation.js\",\n                                lineNumber: 18,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/auth\",\n                                __source: {\n                                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/layout/main-navigation.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 13\n                                },\n                                __self: this,\n                                children: \"Login\"\n                            })\n                        }),\n                        session && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                            __source: {\n                                fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/layout/main-navigation.js\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/profile\",\n                                __source: {\n                                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/layout/main-navigation.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 15\n                                },\n                                __self: this,\n                                children: \"Profile\"\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                            __source: {\n                                fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/layout/main-navigation.js\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                __source: {\n                                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/layout/main-navigation.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                },\n                                __self: this,\n                                children: \"Logout\"\n                            })\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n}\n_s1(MainNavigation, \"btnbnkOsPYI0mLfZro/2DT47AuA=\", false, function() {\n    return [\n        next_auth_client__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = MainNavigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainNavigation);\nvar _c;\n$RefreshReg$(_c, \"MainNavigation\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9tYWluLW5hdmlnYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QjtBQUNpQjtBQUVLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFekNHLGNBQWMsR0FBRyxDQUFDOztJQUN6QixHQUFLLENBQXNCRixHQUFZLGtCQUFaQSw0REFBVSxRQUE5QkcsT0FBTyxHQUFhSCxHQUFZLEtBQXZCSSxPQUFPLEdBQUlKLEdBQVk7SUFFdkMsTUFBTSx1RUFDSEssQ0FBTTtRQUFDQyxTQUFTLEVBQUVMLDJFQUFjOzs7Ozs7OztpRkFDOUJGLGtEQUFJO2dCQUFDUSxJQUFJLEVBQUMsQ0FBRzs7Ozs7OzsrRkFDWEMsQ0FBQzs7Ozs7OzttR0FDQ0MsQ0FBRzt3QkFBQ0gsU0FBUyxFQUFFTCx5RUFBWTs7Ozs7OztrQ0FBRSxDQUFTOzs7O2lGQUcxQ1UsQ0FBRzs7Ozs7OztnR0FDREMsQ0FBRTs7Ozs7Ozs7NkZBQ0FDLENBQUU7Ozs7Ozs7MkdBQ0FkLGtEQUFJO2dDQUFDUSxJQUFJLEVBQUMsQ0FBTzs7Ozs7OzswQ0FBQyxDQUFLOzs7d0JBRXpCSixPQUFPLHlFQUNMVSxDQUFFOzs7Ozs7OzJHQUNBZCxrREFBSTtnQ0FBQ1EsSUFBSSxFQUFDLENBQVU7Ozs7Ozs7MENBQUMsQ0FBTzs7OzZGQUdoQ00sQ0FBRTs7Ozs7OzsyR0FDQUMsQ0FBTTs7Ozs7OzswQ0FBQyxDQUFNOzs7Ozs7OztBQU0xQixDQUFDO0lBM0JRWixjQUFjOztRQUNNRix3REFBVTs7O0tBRDlCRSxjQUFjO0FBNkJ2QiwrREFBZUEsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L21haW4tbmF2aWdhdGlvbi5qcz82MDIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9tYWluLW5hdmlnYXRpb24ubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBNYWluTmF2aWdhdGlvbigpIHtcbiAgY29uc3QgW3Nlc3Npb24sIGxvYWRpbmddID0gdXNlU2Vzc2lvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICA8YT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT5OZXh0IEF1dGg8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPG5hdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hdXRoJz5Mb2dpbjwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIHtzZXNzaW9uICYmIChcbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3Byb2ZpbGUnPlByb2ZpbGU8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGJ1dHRvbj5Mb2dvdXQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5OYXZpZ2F0aW9uO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTZXNzaW9uIiwiY2xhc3NlcyIsIk1haW5OYXZpZ2F0aW9uIiwic2Vzc2lvbiIsImxvYWRpbmciLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJocmVmIiwiYSIsImRpdiIsImxvZ28iLCJuYXYiLCJ1bCIsImxpIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/main-navigation.js\n");

/***/ })

});