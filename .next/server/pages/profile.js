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
exports.id = "pages/profile";
exports.ids = ["pages/profile"];
exports.modules = {

/***/ "./components/profile/profile-form.module.css":
/*!****************************************************!*\
  !*** ./components/profile/profile-form.module.css ***!
  \****************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"profile-form_form__3U8O4\",\n\t\"control\": \"profile-form_control__3DY65\",\n\t\"action\": \"profile-form_action__23LLQ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS1mb3JtLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLWZvcm0ubW9kdWxlLmNzcz85MTY0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvcm1cIjogXCJwcm9maWxlLWZvcm1fZm9ybV9fM1U4TzRcIixcblx0XCJjb250cm9sXCI6IFwicHJvZmlsZS1mb3JtX2NvbnRyb2xfXzNEWTY1XCIsXG5cdFwiYWN0aW9uXCI6IFwicHJvZmlsZS1mb3JtX2FjdGlvbl9fMjNMTFFcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/profile/profile-form.module.css\n");

/***/ }),

/***/ "./components/profile/user-profile.module.css":
/*!****************************************************!*\
  !*** ./components/profile/user-profile.module.css ***!
  \****************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"profile\": \"user-profile_profile__2YJCq\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUvdXNlci1wcm9maWxlLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9wcm9maWxlL3VzZXItcHJvZmlsZS5tb2R1bGUuY3NzP2NjZWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicHJvZmlsZVwiOiBcInVzZXItcHJvZmlsZV9wcm9maWxlX18yWUpDcVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/profile/user-profile.module.css\n");

/***/ }),

/***/ "./components/profile/profile-form.js":
/*!********************************************!*\
  !*** ./components/profile/profile-form.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-form.module.css */ \"./components/profile/profile-form.module.css\");\n/* harmony import */ var _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_profile_form_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ProfileForm(props) {\n    const oldPassword = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const newPassword = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const submitHandler = (e)=>{\n        e.preventDefault();\n        const enteredOldPassword = oldPassword.current.value;\n        const enteredNewPassword = newPassword.current.value;\n        props.onChangePassword({\n            oldPassword: enteredOldPassword,\n            newPassword: enteredNewPassword\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n        className: (_profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n        onSubmit: submitHandler,\n        __source: {\n            fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/profile-form.js\",\n            lineNumber: 21,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),\n                __source: {\n                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/profile-form.js\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                        htmlFor: \"old-password\",\n                        __source: {\n                            fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/profile-form.js\",\n                            lineNumber: 23,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Old Password\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"password\",\n                        id: \"old-password\",\n                        ref: oldPassword,\n                        __source: {\n                            fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/profile-form.js\",\n                            lineNumber: 24,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),\n                __source: {\n                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/profile-form.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                        htmlFor: \"new-password\",\n                        __source: {\n                            fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/profile-form.js\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"New Password\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"password\",\n                        id: \"new-password\",\n                        ref: newPassword,\n                        __source: {\n                            fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/profile-form.js\",\n                            lineNumber: 28,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().action),\n                __source: {\n                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/profile-form.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                    __source: {\n                        fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/profile-form.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Change Password\"\n                })\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileForm);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS1mb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThCO0FBQ2lCO1NBRXRDRSxXQUFXLENBQUNDLEtBQUssRUFBRSxDQUFDO0lBQzNCLEtBQUssQ0FBQ0MsV0FBVyxHQUFHSiw2Q0FBTTtJQUMxQixLQUFLLENBQUNLLFdBQVcsR0FBR0wsNkNBQU07SUFFMUIsS0FBSyxDQUFDTSxhQUFhLElBQUlDLENBQUMsR0FBSyxDQUFDO1FBQzVCQSxDQUFDLENBQUNDLGNBQWM7UUFFaEIsS0FBSyxDQUFDQyxrQkFBa0IsR0FBR0wsV0FBVyxDQUFDTSxPQUFPLENBQUNDLEtBQUs7UUFDcEQsS0FBSyxDQUFDQyxrQkFBa0IsR0FBR1AsV0FBVyxDQUFDSyxPQUFPLENBQUNDLEtBQUs7UUFFcERSLEtBQUssQ0FBQ1UsZ0JBQWdCLENBQUMsQ0FBQztZQUN0QlQsV0FBVyxFQUFFSyxrQkFBa0I7WUFDL0JKLFdBQVcsRUFBRU8sa0JBQWtCO1FBQ2pDLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSx1RUFDSEUsQ0FBSTtRQUFDQyxTQUFTLEVBQUVkLHNFQUFZO1FBQUVlLFFBQVEsRUFBRVYsYUFBYTs7Ozs7Ozs7a0ZBQ25EVyxDQUFHO2dCQUFDRixTQUFTLEVBQUVkLHlFQUFlOzs7Ozs7Ozt5RkFDNUJrQixDQUFLO3dCQUFDQyxPQUFPLEVBQUMsQ0FBYzs7Ozs7OztrQ0FBQyxDQUFZOzt5RkFDekNDLENBQUs7d0JBQUNDLElBQUksRUFBQyxDQUFVO3dCQUFDQyxFQUFFLEVBQUMsQ0FBYzt3QkFBQ0MsR0FBRyxFQUFFcEIsV0FBVzs7Ozs7Ozs7OztrRkFFMURhLENBQUc7Z0JBQUNGLFNBQVMsRUFBRWQseUVBQWU7Ozs7Ozs7O3lGQUM1QmtCLENBQUs7d0JBQUNDLE9BQU8sRUFBQyxDQUFjOzs7Ozs7O2tDQUFDLENBQVk7O3lGQUN6Q0MsQ0FBSzt3QkFBQ0MsSUFBSSxFQUFDLENBQVU7d0JBQUNDLEVBQUUsRUFBQyxDQUFjO3dCQUFDQyxHQUFHLEVBQUVuQixXQUFXOzs7Ozs7Ozs7O2lGQUUxRFksQ0FBRztnQkFBQ0YsU0FBUyxFQUFFZCx3RUFBYzs7Ozs7OzsrRkFDM0J5QixDQUFNOzs7Ozs7OzhCQUFDLENBQWU7Ozs7O0FBSS9CLENBQUM7QUFFRCxpRUFBZXhCLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS1mb3JtLmpzPzJmMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9wcm9maWxlLWZvcm0ubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBQcm9maWxlRm9ybShwcm9wcykge1xuICBjb25zdCBvbGRQYXNzd29yZCA9IHVzZVJlZigpO1xuICBjb25zdCBuZXdQYXNzd29yZCA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGVudGVyZWRPbGRQYXNzd29yZCA9IG9sZFBhc3N3b3JkLmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgZW50ZXJlZE5ld1Bhc3N3b3JkID0gbmV3UGFzc3dvcmQuY3VycmVudC52YWx1ZTtcblxuICAgIHByb3BzLm9uQ2hhbmdlUGFzc3dvcmQoe1xuICAgICAgb2xkUGFzc3dvcmQ6IGVudGVyZWRPbGRQYXNzd29yZCxcbiAgICAgIG5ld1Bhc3N3b3JkOiBlbnRlcmVkTmV3UGFzc3dvcmQsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdvbGQtcGFzc3dvcmQnPk9sZCBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgaWQ9J29sZC1wYXNzd29yZCcgcmVmPXtvbGRQYXNzd29yZH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSduZXctcGFzc3dvcmQnPk5ldyBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgaWQ9J25ldy1wYXNzd29yZCcgcmVmPXtuZXdQYXNzd29yZH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9ufT5cbiAgICAgICAgPGJ1dHRvbj5DaGFuZ2UgUGFzc3dvcmQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUZvcm07XG4iXSwibmFtZXMiOlsidXNlUmVmIiwiY2xhc3NlcyIsIlByb2ZpbGVGb3JtIiwicHJvcHMiLCJvbGRQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwic3VibWl0SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRPbGRQYXNzd29yZCIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWROZXdQYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJkaXYiLCJjb250cm9sIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJyZWYiLCJhY3Rpb24iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/profile/profile-form.js\n");

/***/ }),

/***/ "./components/profile/user-profile.js":
/*!********************************************!*\
  !*** ./components/profile/user-profile.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _profile_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-form */ \"./components/profile/profile-form.js\");\n/* harmony import */ var _user_profile_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile.module.css */ \"./components/profile/user-profile.module.css\");\n/* harmony import */ var _user_profile_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_user_profile_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction UserProfile() {\n    // const [isLoading, setIsLoading] = useState(true);\n    // useEffect(() => {\n    //   getSession().then((session) => {\n    //     if (!session) {\n    //       window.location.href = \"/auth\";\n    //     } else {\n    //       setIsLoading(false);\n    //     }\n    //   });\n    // }, []);\n    // if (isLoading) {\n    //   return <p className={classes.profile}>Loading...</p>;\n    // }\n    const changePasswordHandler = async (passwordData)=>{\n        const response = await fetch(\"/api/user/change-password\", {\n            method: \"PATCH\",\n            body: JSON.stringify(passwordData),\n            headers: {\n                \"Content-type\": \"application/json\"\n            }\n        });\n        const data = await response.json();\n        console.log(data);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n        className: (_user_profile_module_css__WEBPACK_IMPORTED_MODULE_2___default().profile),\n        __source: {\n            fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/user-profile.js\",\n            lineNumber: 34,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/user-profile.js\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"Your User Profile\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_profile_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                onChangePassword: changePasswordHandler,\n                __source: {\n                    fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/components/profile/user-profile.js\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserProfile);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUvdXNlci1wcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDTztTQUV0Q0UsV0FBVyxHQUFHLENBQUM7SUFDdEIsRUFBb0Q7SUFFcEQsRUFBb0I7SUFDcEIsRUFBcUM7SUFDckMsRUFBc0I7SUFDdEIsRUFBd0M7SUFDeEMsRUFBZTtJQUNmLEVBQTZCO0lBQzdCLEVBQVE7SUFDUixFQUFRO0lBQ1IsRUFBVTtJQUNWLEVBQW1CO0lBQ25CLEVBQTBEO0lBQzFELEVBQUk7SUFFSixLQUFLLENBQUNDLHFCQUFxQixVQUFVQyxZQUFZLEdBQUssQ0FBQztRQUNyRCxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUEyQiw0QkFBRSxDQUFDO1lBQ3pEQyxNQUFNLEVBQUUsQ0FBTztZQUNmQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDTixZQUFZO1lBQ2pDTyxPQUFPLEVBQUUsQ0FBQztnQkFDUixDQUFjLGVBQUUsQ0FBa0I7WUFDcEMsQ0FBQztRQUNILENBQUM7UUFFRCxLQUFLLENBQUNDLElBQUksR0FBRyxLQUFLLENBQUNQLFFBQVEsQ0FBQ1EsSUFBSTtRQUNoQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUk7SUFDbEIsQ0FBQztJQUVELE1BQU0sdUVBQ0hJLENBQU87UUFBQ0MsU0FBUyxFQUFFaEIseUVBQWU7Ozs7Ozs7O2lGQUNoQ2tCLENBQUU7Ozs7Ozs7MEJBQUMsQ0FBaUI7O2lGQUNwQm5CLHFEQUFXO2dCQUFDb0IsZ0JBQWdCLEVBQUVqQixxQkFBcUI7Ozs7Ozs7Ozs7QUFHMUQsQ0FBQztBQUVELGlFQUFlRCxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9wcm9maWxlL3VzZXItcHJvZmlsZS5qcz9jZGQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9maWxlRm9ybSBmcm9tIFwiLi9wcm9maWxlLWZvcm1cIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL3VzZXItcHJvZmlsZS5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIFVzZXJQcm9maWxlKCkge1xuICAvLyBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBnZXRTZXNzaW9uKCkudGhlbigoc2Vzc2lvbikgPT4ge1xuICAvLyAgICAgaWYgKCFzZXNzaW9uKSB7XG4gIC8vICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvYXV0aFwiO1xuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy8gfSwgW10pO1xuICAvLyBpZiAoaXNMb2FkaW5nKSB7XG4gIC8vICAgcmV0dXJuIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9maWxlfT5Mb2FkaW5nLi4uPC9wPjtcbiAgLy8gfVxuXG4gIGNvbnN0IGNoYW5nZVBhc3N3b3JkSGFuZGxlciA9IGFzeW5jIChwYXNzd29yZERhdGEpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS91c2VyL2NoYW5nZS1wYXNzd29yZFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhc3N3b3JkRGF0YSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMucHJvZmlsZX0+XG4gICAgICA8aDE+WW91ciBVc2VyIFByb2ZpbGU8L2gxPlxuICAgICAgPFByb2ZpbGVGb3JtIG9uQ2hhbmdlUGFzc3dvcmQ9e2NoYW5nZVBhc3N3b3JkSGFuZGxlcn0gLz5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlO1xuIl0sIm5hbWVzIjpbIlByb2ZpbGVGb3JtIiwiY2xhc3NlcyIsIlVzZXJQcm9maWxlIiwiY2hhbmdlUGFzc3dvcmRIYW5kbGVyIiwicGFzc3dvcmREYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJwcm9maWxlIiwiaDEiLCJvbkNoYW5nZVBhc3N3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/profile/user-profile.js\n");

/***/ }),

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_profile_user_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/profile/user-profile */ \"./components/profile/user-profile.js\");\n\n\n\nfunction ProfilePage() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_profile_user_profile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        __source: {\n            fileName: \"/Users/mac/Desktop/React/NextJs/Next-Auth/pages/profile.js\",\n            lineNumber: 5,\n            columnNumber: 10\n        },\n        __self: this\n    }));\n}\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req: context.req\n    });\n    if (!session) {\n        return {\n            redirect: {\n                destination: \"/auth\",\n                permanent: false\n            }\n        };\n    }\n    return {\n        props: {\n            session\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ2U7U0FFbkRFLFdBQVcsR0FBRyxDQUFDO0lBQ3RCLE1BQU0sc0VBQUVELHdFQUFXOzs7Ozs7OztBQUNyQixDQUFDO0FBRU0sZUFBZUUsa0JBQWtCLENBQUNDLE9BQU8sRUFBRSxDQUFDO0lBQ2pELEtBQUssQ0FBQ0MsT0FBTyxHQUFHLEtBQUssQ0FBQ0wsNERBQVUsQ0FBQyxDQUFDO1FBQUNNLEdBQUcsRUFBRUYsT0FBTyxDQUFDRSxHQUFHO0lBQUMsQ0FBQztJQUVyRCxFQUFFLEdBQUdELE9BQU8sRUFBRSxDQUFDO1FBQ2IsTUFBTSxDQUFDLENBQUM7WUFDTkUsUUFBUSxFQUFFLENBQUM7Z0JBQ1RDLFdBQVcsRUFBRSxDQUFPO2dCQUNwQkMsU0FBUyxFQUFFLEtBQUs7WUFDbEIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQUM7UUFDTkMsS0FBSyxFQUFFLENBQUM7WUFBQ0wsT0FBTztRQUFDLENBQUM7SUFDcEIsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZUgsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL3Byb2ZpbGUuanM/MDhkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9maWxlL3VzZXItcHJvZmlsZVwiO1xuXG5mdW5jdGlvbiBQcm9maWxlUGFnZSgpIHtcbiAgcmV0dXJuIDxVc2VyUHJvZmlsZSAvPjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxOiBjb250ZXh0LnJlcSB9KTtcblxuICBpZiAoIXNlc3Npb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246IFwiL2F1dGhcIixcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgc2Vzc2lvbiB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGFnZTtcbiJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwiVXNlclByb2ZpbGUiLCJQcm9maWxlUGFnZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJzZXNzaW9uIiwicmVxIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/profile.js\n");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/profile.js"));
module.exports = __webpack_exports__;

})();