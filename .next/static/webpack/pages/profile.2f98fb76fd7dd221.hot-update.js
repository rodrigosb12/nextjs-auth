"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./components/profile/user-profile.js":
/*!********************************************!*\
  !*** ./components/profile/user-profile.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* harmony import */ var _profile_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-form */ \"./components/profile/profile-form.js\");\n/* harmony import */ var _user_profile_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profile.module.css */ \"./components/profile/user-profile.module.css\");\n/* harmony import */ var _user_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_user_profile_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nfunction UserProfile() {\n    _s1();\n    var ref = _slicedToArray((0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession)(), 2), session = ref[0], loading = ref[1];\n    if (loading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n            className: (_user_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default().profile),\n            __source: {\n                fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/user-profile.js\",\n                lineNumber: 9,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"loading\"\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n        className: (_user_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default().profile),\n        __source: {\n            fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/user-profile.js\",\n            lineNumber: 13,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/user-profile.js\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"Your User Profile\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_profile_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/user-profile.js\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n_s1(UserProfile, \"btnbnkOsPYI0mLfZro/2DT47AuA=\", false, function() {\n    return [\n        next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUvdXNlci1wcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QztBQUVMO0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUV0Q0csV0FBVyxHQUFHLENBQUM7O0lBQ3RCLEdBQUssQ0FBc0JILEdBQVksa0JBQVpBLDREQUFVLFFBQTlCSSxPQUFPLEdBQWFKLEdBQVksS0FBdkJLLE9BQU8sR0FBSUwsR0FBWTtJQUN2QyxFQUFFLEVBQUVLLE9BQU8sRUFBRSxDQUFDO1FBQ1osTUFBTSxzRUFBRUMsQ0FBQztZQUFDQyxTQUFTLEVBQUVMLHlFQUFlOzs7Ozs7O3NCQUFFLENBQU87O0lBQy9DLENBQUM7SUFFRCxNQUFNLHVFQUNITyxDQUFPO1FBQUNGLFNBQVMsRUFBRUwseUVBQWU7Ozs7Ozs7O2lGQUNoQ1EsQ0FBRTs7Ozs7OzswQkFBQyxDQUFpQjs7aUZBQ3BCVCxxREFBVzs7Ozs7Ozs7OztBQUdsQixDQUFDO0lBWlFFLFdBQVc7O1FBQ1NILHdEQUFVOzs7S0FEOUJHLFdBQVc7QUFjcEIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2ZpbGUvdXNlci1wcm9maWxlLmpzP2NkZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5cbmltcG9ydCBQcm9maWxlRm9ybSBmcm9tIFwiLi9wcm9maWxlLWZvcm1cIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL3VzZXItcHJvZmlsZS5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIFVzZXJQcm9maWxlKCkge1xuICBjb25zdCBbc2Vzc2lvbiwgbG9hZGluZ10gPSB1c2VTZXNzaW9uKCk7XG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9maWxlfT5sb2FkaW5nPC9wPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnByb2ZpbGV9PlxuICAgICAgPGgxPllvdXIgVXNlciBQcm9maWxlPC9oMT5cbiAgICAgIDxQcm9maWxlRm9ybSAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7XG4iXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsIlByb2ZpbGVGb3JtIiwiY2xhc3NlcyIsIlVzZXJQcm9maWxlIiwic2Vzc2lvbiIsImxvYWRpbmciLCJwIiwiY2xhc3NOYW1lIiwicHJvZmlsZSIsInNlY3Rpb24iLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/profile/user-profile.js\n");

/***/ })

});