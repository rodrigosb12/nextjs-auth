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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _profile_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-form */ \"./components/profile/profile-form.js\");\n/* harmony import */ var _user_profile_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-profile.module.css */ \"./components/profile/user-profile.module.css\");\n/* harmony import */ var _user_profile_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_user_profile_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction UserProfile() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)().then(function(session) {\n            setIsLoading(false);\n            if (!session) {\n                window.location.href = \"/auth\";\n            }\n        });\n    }, []);\n    if (isLoading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n            className: (_user_profile_module_css__WEBPACK_IMPORTED_MODULE_4___default().profile),\n            __source: {\n                fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/user-profile.js\",\n                lineNumber: 20,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"Loading...\"\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n        className: (_user_profile_module_css__WEBPACK_IMPORTED_MODULE_4___default().profile),\n        __source: {\n            fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/user-profile.js\",\n            lineNumber: 24,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/user-profile.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"Your User Profile\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_profile_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/user-profile.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n_s(UserProfile, \"3+L5C4BXCkvfI+CLvYAvKVZ7bm8=\");\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUvdXNlci1wcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ0Y7QUFFSDtBQUNPOztTQUV0Q0ssV0FBVyxHQUFHLENBQUM7O0lBQ3RCLEdBQUssQ0FBNkJILEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXhDSSxTQUFTLEdBQWtCSixHQUFjLEtBQTlCSyxZQUFZLEdBQUlMLEdBQWM7SUFFaERELGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2ZELDREQUFVLEdBQUdRLElBQUksQ0FBQyxRQUFRLENBQVBDLE9BQU8sRUFBSyxDQUFDO1lBQzlCRixZQUFZLENBQUMsS0FBSztZQUNsQixFQUFFLEdBQUdFLE9BQU8sRUFBRSxDQUFDO2dCQUNiQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLENBQU87WUFDaEMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsRUFBRSxFQUFFTixTQUFTLEVBQUUsQ0FBQztRQUNkLE1BQU0sc0VBQUVPLENBQUM7WUFBQ0MsU0FBUyxFQUFFVix5RUFBZTs7Ozs7OztzQkFBRSxDQUFVOztJQUNsRCxDQUFDO0lBRUQsTUFBTSx1RUFDSFksQ0FBTztRQUFDRixTQUFTLEVBQUVWLHlFQUFlOzs7Ozs7OztpRkFDaENhLENBQUU7Ozs7Ozs7MEJBQUMsQ0FBaUI7O2lGQUNwQmQscURBQVc7Ozs7Ozs7Ozs7QUFHbEIsQ0FBQztHQXRCUUUsV0FBVztLQUFYQSxXQUFXO0FBd0JwQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvZmlsZS91c2VyLXByb2ZpbGUuanM/Y2RkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFByb2ZpbGVGb3JtIGZyb20gXCIuL3Byb2ZpbGUtZm9ybVwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vdXNlci1wcm9maWxlLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gVXNlclByb2ZpbGUoKSB7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFNlc3Npb24oKS50aGVuKChzZXNzaW9uKSA9PiB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgaWYgKCFzZXNzaW9uKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvYXV0aFwiO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8cCBjbGFzc05hbWU9e2NsYXNzZXMucHJvZmlsZX0+TG9hZGluZy4uLjwvcD47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9maWxlfT5cbiAgICAgIDxoMT5Zb3VyIFVzZXIgUHJvZmlsZTwvaDE+XG4gICAgICA8UHJvZmlsZUZvcm0gLz5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlO1xuIl0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb2ZpbGVGb3JtIiwiY2xhc3NlcyIsIlVzZXJQcm9maWxlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidGhlbiIsInNlc3Npb24iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJwIiwiY2xhc3NOYW1lIiwicHJvZmlsZSIsInNlY3Rpb24iLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/profile/user-profile.js\n");

/***/ })

});