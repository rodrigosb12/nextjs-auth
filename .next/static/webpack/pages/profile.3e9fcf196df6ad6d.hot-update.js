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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _profile_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-form */ \"./components/profile/profile-form.js\");\n/* harmony import */ var _user_profile_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-profile.module.css */ \"./components/profile/user-profile.module.css\");\n/* harmony import */ var _user_profile_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_user_profile_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nfunction UserProfile() {\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), loadedSession = ref1[0], setLoadedSession = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)().then(function(session) {\n            setLoadedSession(session);\n            setIsLoading(false);\n        });\n    }, []);\n    var ref2 = _slicedToArray((0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession)(), 2), session1 = ref2[0], loading = ref2[1];\n    if (loading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n            className: (_user_profile_module_css__WEBPACK_IMPORTED_MODULE_4___default().profile),\n            __source: {\n                fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/user-profile.js\",\n                lineNumber: 20,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"Loading...\"\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n        className: (_user_profile_module_css__WEBPACK_IMPORTED_MODULE_4___default().profile),\n        __source: {\n            fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/user-profile.js\",\n            lineNumber: 24,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/user-profile.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"Your User Profile\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_profile_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/user-profile.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n_s1(UserProfile, \"n4te1NVhmQkKdIaeY2KoGHOv3+8=\", false, function() {\n    return [\n        next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUvdXNlci1wcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlEO0FBQ2Q7QUFFSDtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFdENNLFdBQVcsR0FBRyxDQUFDOztJQUN0QixHQUFLLENBQTZCSCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF4Q0ksU0FBUyxHQUFrQkosR0FBYyxLQUE5QkssWUFBWSxHQUFJTCxHQUFjO0lBQ2hELEdBQUssQ0FBcUNBLElBQVUsR0FBVkEsK0NBQVEsSUFBM0NNLGFBQWEsR0FBc0JOLElBQVUsS0FBOUJPLGdCQUFnQixHQUFJUCxJQUFVO0lBRXBERCxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmRCw0REFBVSxHQUFHVSxJQUFJLENBQUMsUUFBUSxDQUFQQyxPQUFPLEVBQUssQ0FBQztZQUM5QkYsZ0JBQWdCLENBQUNFLE9BQU87WUFDeEJKLFlBQVksQ0FBQyxLQUFLO1FBQ3BCLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsR0FBSyxDQUFzQlIsSUFBWSxrQkFBWkEsNERBQVUsUUFBOUJZLFFBQU8sR0FBYVosSUFBWSxLQUF2QmEsT0FBTyxHQUFJYixJQUFZO0lBQ3ZDLEVBQUUsRUFBRWEsT0FBTyxFQUFFLENBQUM7UUFDWixNQUFNLHNFQUFFQyxDQUFDO1lBQUNDLFNBQVMsRUFBRVYseUVBQWU7Ozs7Ozs7c0JBQUUsQ0FBVTs7SUFDbEQsQ0FBQztJQUVELE1BQU0sdUVBQ0hZLENBQU87UUFBQ0YsU0FBUyxFQUFFVix5RUFBZTs7Ozs7Ozs7aUZBQ2hDYSxDQUFFOzs7Ozs7OzBCQUFDLENBQWlCOztpRkFDcEJkLHFEQUFXOzs7Ozs7Ozs7O0FBR2xCLENBQUM7SUF0QlFFLFdBQVc7O1FBV1NOLHdEQUFVOzs7S0FYOUJNLFdBQVc7QUF3QnBCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL3VzZXItcHJvZmlsZS5qcz9jZGQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlc3Npb24sIGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgUHJvZmlsZUZvcm0gZnJvbSBcIi4vcHJvZmlsZS1mb3JtXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi91c2VyLXByb2ZpbGUubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBVc2VyUHJvZmlsZSgpIHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbG9hZGVkU2Vzc2lvbiwgc2V0TG9hZGVkU2Vzc2lvbl0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0U2Vzc2lvbigpLnRoZW4oKHNlc3Npb24pID0+IHtcbiAgICAgIHNldExvYWRlZFNlc3Npb24oc2Vzc2lvbik7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW3Nlc3Npb24sIGxvYWRpbmddID0gdXNlU2Vzc2lvbigpO1xuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8cCBjbGFzc05hbWU9e2NsYXNzZXMucHJvZmlsZX0+TG9hZGluZy4uLjwvcD47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9maWxlfT5cbiAgICAgIDxoMT5Zb3VyIFVzZXIgUHJvZmlsZTwvaDE+XG4gICAgICA8UHJvZmlsZUZvcm0gLz5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlO1xuIl0sIm5hbWVzIjpbInVzZVNlc3Npb24iLCJnZXRTZXNzaW9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcm9maWxlRm9ybSIsImNsYXNzZXMiLCJVc2VyUHJvZmlsZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImxvYWRlZFNlc3Npb24iLCJzZXRMb2FkZWRTZXNzaW9uIiwidGhlbiIsInNlc3Npb24iLCJsb2FkaW5nIiwicCIsImNsYXNzTmFtZSIsInByb2ZpbGUiLCJzZWN0aW9uIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/profile/user-profile.js\n");

/***/ })

});