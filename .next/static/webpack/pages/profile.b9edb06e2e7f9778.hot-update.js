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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _profile_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-form */ \"./components/profile/profile-form.js\");\n/* harmony import */ var _user_profile_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-profile.module.css */ \"./components/profile/user-profile.module.css\");\n/* harmony import */ var _user_profile_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_user_profile_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction UserProfile() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), loadedSession = ref1[0], setLoadedSession = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)().then(function(session) {\n            setLoadedSession(session);\n            setIsLoading(false);\n        });\n    }, []);\n    if (loading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n            className: (_user_profile_module_css__WEBPACK_IMPORTED_MODULE_4___default().profile),\n            __source: {\n                fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/user-profile.js\",\n                lineNumber: 19,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"Loading...\"\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n        className: (_user_profile_module_css__WEBPACK_IMPORTED_MODULE_4___default().profile),\n        __source: {\n            fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/user-profile.js\",\n            lineNumber: 23,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/user-profile.js\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"Your User Profile\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_profile_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/user-profile.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n_s(UserProfile, \"CdqPJpME50LqM7jx/XAA1zCwxj8=\");\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUvdXNlci1wcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlEO0FBQ2Q7QUFFSDtBQUNPOztTQUV0Q00sV0FBVyxHQUFHLENBQUM7O0lBQ3RCLEdBQUssQ0FBNkJILEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXhDSSxTQUFTLEdBQWtCSixHQUFjLEtBQTlCSyxZQUFZLEdBQUlMLEdBQWM7SUFDaEQsR0FBSyxDQUFxQ0EsSUFBVSxHQUFWQSwrQ0FBUSxJQUEzQ00sYUFBYSxHQUFzQk4sSUFBVSxLQUE5Qk8sZ0JBQWdCLEdBQUlQLElBQVU7SUFFcERELGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2ZELDREQUFVLEdBQUdVLElBQUksQ0FBQyxRQUFRLENBQVBDLE9BQU8sRUFBSyxDQUFDO1lBQzlCRixnQkFBZ0IsQ0FBQ0UsT0FBTztZQUN4QkosWUFBWSxDQUFDLEtBQUs7UUFDcEIsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxFQUFFLEVBQUVLLE9BQU8sRUFBRSxDQUFDO1FBQ1osTUFBTSxzRUFBRUMsQ0FBQztZQUFDQyxTQUFTLEVBQUVWLHlFQUFlOzs7Ozs7O3NCQUFFLENBQVU7O0lBQ2xELENBQUM7SUFFRCxNQUFNLHVFQUNIWSxDQUFPO1FBQUNGLFNBQVMsRUFBRVYseUVBQWU7Ozs7Ozs7O2lGQUNoQ2EsQ0FBRTs7Ozs7OzswQkFBQyxDQUFpQjs7aUZBQ3BCZCxxREFBVzs7Ozs7Ozs7OztBQUdsQixDQUFDO0dBckJRRSxXQUFXO0tBQVhBLFdBQVc7QUF1QnBCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL3VzZXItcHJvZmlsZS5qcz9jZGQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlc3Npb24sIGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgUHJvZmlsZUZvcm0gZnJvbSBcIi4vcHJvZmlsZS1mb3JtXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi91c2VyLXByb2ZpbGUubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBVc2VyUHJvZmlsZSgpIHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbG9hZGVkU2Vzc2lvbiwgc2V0TG9hZGVkU2Vzc2lvbl0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0U2Vzc2lvbigpLnRoZW4oKHNlc3Npb24pID0+IHtcbiAgICAgIHNldExvYWRlZFNlc3Npb24oc2Vzc2lvbik7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2ZpbGV9PkxvYWRpbmcuLi48L3A+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMucHJvZmlsZX0+XG4gICAgICA8aDE+WW91ciBVc2VyIFByb2ZpbGU8L2gxPlxuICAgICAgPFByb2ZpbGVGb3JtIC8+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcbiJdLCJuYW1lcyI6WyJ1c2VTZXNzaW9uIiwiZ2V0U2Vzc2lvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvZmlsZUZvcm0iLCJjbGFzc2VzIiwiVXNlclByb2ZpbGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJsb2FkZWRTZXNzaW9uIiwic2V0TG9hZGVkU2Vzc2lvbiIsInRoZW4iLCJzZXNzaW9uIiwibG9hZGluZyIsInAiLCJjbGFzc05hbWUiLCJwcm9maWxlIiwic2VjdGlvbiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/profile/user-profile.js\n");

/***/ })

});