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

/***/ "./components/profile/profile-form.js":
/*!********************************************!*\
  !*** ./components/profile/profile-form.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-form.module.css */ \"./components/profile/profile-form.module.css\");\n/* harmony import */ var _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_profile_form_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction ProfileForm(props) {\n    _s();\n    var oldPassword = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var newPassword = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var submitHandler = function(e) {\n        e.preventDefault();\n        var enteredOldPassword = oldPassword.current.value;\n        var enteredNewPassword = newPassword.current.value;\n        props.onChangePassword({\n            oldPassword: enteredOldPassword,\n            newPassword: enteredNewPassword\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n        className: (_profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n        onSubmit: submitHandler,\n        __source: {\n            fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/profile-form.js\",\n            lineNumber: 21,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),\n                __source: {\n                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/profile-form.js\",\n                    lineNumber: 22,\n                    columnNumber: 5\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                        htmlFor: \"old-password\",\n                        __source: {\n                            fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/profile-form.js\",\n                            lineNumber: 23,\n                            columnNumber: 7\n                        },\n                        __self: this,\n                        children: \"Old Password\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"password\",\n                        id: \"old-password\",\n                        ref: oldPassword,\n                        __source: {\n                            fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/profile-form.js\",\n                            lineNumber: 24,\n                            columnNumber: 7\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),\n                __source: {\n                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/profile-form.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                        htmlFor: \"new-password\",\n                        __source: {\n                            fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/profile-form.js\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"New Password\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"password\",\n                        id: \"new-password\",\n                        ref: newPassword,\n                        __source: {\n                            fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/profile-form.js\",\n                            lineNumber: 28,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().action),\n                __source: {\n                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/profile-form.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                    __source: {\n                        fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/profile-form.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Change Password\"\n                })\n            })\n        ]\n    }));\n}\n_s(ProfileForm, \"owYeSlMd+oD1l3FPu9aQqcN0/dM=\");\n_c = ProfileForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileForm);\nvar _c;\n$RefreshReg$(_c, \"ProfileForm\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS1mb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QjtBQUNpQjs7U0FFdENFLFdBQVcsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7O0lBQzNCLEdBQUssQ0FBQ0MsV0FBVyxHQUFHSiw2Q0FBTTtJQUMxQixHQUFLLENBQUNLLFdBQVcsR0FBR0wsNkNBQU07SUFFMUIsR0FBSyxDQUFDTSxhQUFhLEdBQUcsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQztRQUM1QkEsQ0FBQyxDQUFDQyxjQUFjO1FBRWhCLEdBQUssQ0FBQ0Msa0JBQWtCLEdBQUdMLFdBQVcsQ0FBQ00sT0FBTyxDQUFDQyxLQUFLO1FBQ3BELEdBQUssQ0FBQ0Msa0JBQWtCLEdBQUdQLFdBQVcsQ0FBQ0ssT0FBTyxDQUFDQyxLQUFLO1FBRXBEUixLQUFLLENBQUNVLGdCQUFnQixDQUFDLENBQUM7WUFDdEJULFdBQVcsRUFBRUssa0JBQWtCO1lBQy9CSixXQUFXLEVBQUVPLGtCQUFrQjtRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sdUVBQ0hFLENBQUk7UUFBQ0MsU0FBUyxFQUFFZCxzRUFBWTtRQUFFZSxRQUFRLEVBQUVWLGFBQWE7Ozs7Ozs7O2tGQUNyRFcsQ0FBRztnQkFBQ0YsU0FBUyxFQUFFZCx5RUFBZTs7Ozs7Ozs7eUZBQzVCa0IsQ0FBSzt3QkFBQ0MsT0FBTyxFQUFDLENBQWM7Ozs7Ozs7a0NBQUMsQ0FBWTs7eUZBQ3pDQyxDQUFLO3dCQUFDQyxJQUFJLEVBQUMsQ0FBVTt3QkFBQ0MsRUFBRSxFQUFDLENBQWM7d0JBQUNDLEdBQUcsRUFBRXBCLFdBQVc7Ozs7Ozs7Ozs7a0ZBRXhEYSxDQUFHO2dCQUFDRixTQUFTLEVBQUVkLHlFQUFlOzs7Ozs7Ozt5RkFDNUJrQixDQUFLO3dCQUFDQyxPQUFPLEVBQUMsQ0FBYzs7Ozs7OztrQ0FBQyxDQUFZOzt5RkFDekNDLENBQUs7d0JBQUNDLElBQUksRUFBQyxDQUFVO3dCQUFDQyxFQUFFLEVBQUMsQ0FBYzt3QkFBQ0MsR0FBRyxFQUFFbkIsV0FBVzs7Ozs7Ozs7OztpRkFFMURZLENBQUc7Z0JBQUNGLFNBQVMsRUFBRWQsd0VBQWM7Ozs7Ozs7K0ZBQzNCeUIsQ0FBTTs7Ozs7Ozs4QkFBQyxDQUFlOzs7OztBQUkvQixDQUFDO0dBL0JReEIsV0FBVztLQUFYQSxXQUFXO0FBaUNwQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLWZvcm0uanM/MmYzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL3Byb2ZpbGUtZm9ybS5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIFByb2ZpbGVGb3JtKHByb3BzKSB7XG4gIGNvbnN0IG9sZFBhc3N3b3JkID0gdXNlUmVmKCk7XG4gIGNvbnN0IG5ld1Bhc3N3b3JkID0gdXNlUmVmKCk7XG5cbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZW50ZXJlZE9sZFBhc3N3b3JkID0gb2xkUGFzc3dvcmQuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkTmV3UGFzc3dvcmQgPSBuZXdQYXNzd29yZC5jdXJyZW50LnZhbHVlO1xuXG4gICAgcHJvcHMub25DaGFuZ2VQYXNzd29yZCh7XG4gICAgICBvbGRQYXNzd29yZDogZW50ZXJlZE9sZFBhc3N3b3JkLFxuICAgICAgbmV3UGFzc3dvcmQ6IGVudGVyZWROZXdQYXNzd29yZCxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICA8bGFiZWwgaHRtbEZvcj0nb2xkLXBhc3N3b3JkJz5PbGQgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9J3Bhc3N3b3JkJyBpZD0nb2xkLXBhc3N3b3JkJyByZWY9e29sZFBhc3N3b3JkfSAvPlxuICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSduZXctcGFzc3dvcmQnPk5ldyBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgaWQ9J25ldy1wYXNzd29yZCcgcmVmPXtuZXdQYXNzd29yZH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9ufT5cbiAgICAgICAgPGJ1dHRvbj5DaGFuZ2UgUGFzc3dvcmQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUZvcm07XG4iXSwibmFtZXMiOlsidXNlUmVmIiwiY2xhc3NlcyIsIlByb2ZpbGVGb3JtIiwicHJvcHMiLCJvbGRQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwic3VibWl0SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRPbGRQYXNzd29yZCIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWROZXdQYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJkaXYiLCJjb250cm9sIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJyZWYiLCJhY3Rpb24iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/profile/profile-form.js\n");

/***/ })

});