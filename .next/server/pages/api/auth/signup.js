"use strict";
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
exports.id = "pages/api/auth/signup";
exports.ids = ["pages/api/auth/signup"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hashPassword\": () => (/* binding */ hashPassword),\n/* harmony export */   \"verifyPassword\": () => (/* binding */ verifyPassword)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n\nconst hashPassword = async (password)=>{\n    const hashedPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 12);\n    return hashedPassword;\n};\nconst verifyPassword = async (password, hashedPassword)=>{\n    const isValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare)(password, hashedPassword);\n    return isValid;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBRWpDLEtBQUssQ0FBQ0UsWUFBWSxVQUFVQyxRQUFRLEdBQUssQ0FBQztJQUMvQyxLQUFLLENBQUNDLGNBQWMsR0FBRyxLQUFLLENBQUNKLDhDQUFJLENBQUNHLFFBQVEsRUFBRSxFQUFFO0lBQzlDLE1BQU0sQ0FBQ0MsY0FBYztBQUN2QixDQUFDO0FBRU0sS0FBSyxDQUFDQyxjQUFjLFVBQVVGLFFBQVEsRUFBRUMsY0FBYyxHQUFLLENBQUM7SUFDakUsS0FBSyxDQUFDRSxPQUFPLEdBQUcsS0FBSyxDQUFDTCxpREFBTyxDQUFDRSxRQUFRLEVBQUVDLGNBQWM7SUFFdEQsTUFBTSxDQUFDRSxPQUFPO0FBQ2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vbGliL2F1dGguanM/Mjg3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYXNoLCBjb21wYXJlIH0gZnJvbSBcImJjcnlwdGpzXCI7XG5cbmV4cG9ydCBjb25zdCBoYXNoUGFzc3dvcmQgPSBhc3luYyAocGFzc3dvcmQpID0+IHtcbiAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBoYXNoKHBhc3N3b3JkLCAxMik7XG4gIHJldHVybiBoYXNoZWRQYXNzd29yZDtcbn07XG5cbmV4cG9ydCBjb25zdCB2ZXJpZnlQYXNzd29yZCA9IGFzeW5jIChwYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpID0+IHtcbiAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGNvbXBhcmUocGFzc3dvcmQsIGhhc2hlZFBhc3N3b3JkKTtcblxuICByZXR1cm4gaXNWYWxpZDtcbn07XG4iXSwibmFtZXMiOlsiaGFzaCIsImNvbXBhcmUiLCJoYXNoUGFzc3dvcmQiLCJwYXNzd29yZCIsImhhc2hlZFBhc3N3b3JkIiwidmVyaWZ5UGFzc3dvcmQiLCJpc1ZhbGlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/auth.js\n");

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectToDatabase = async ()=>{\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://rodrigo-nextjs:gQZDShGgtfZRS4GY@cluster0.pnlkh.mongodb.net/nextjsauth?retryWrites=true&w=majority\");\n    return client;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToDatabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRXJDLEtBQUssQ0FBQ0MsaUJBQWlCLGFBQWUsQ0FBQztJQUNyQyxLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNGLHdEQUFtQixDQUN0QyxDQUFpSDtJQUduSCxNQUFNLENBQUNFLE1BQU07QUFDZixDQUFDO0FBRUQsaUVBQWVELGlCQUFpQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL2xpYi9kYi5qcz8zZGM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuY29uc3QgY29ubmVjdFRvRGF0YWJhc2UgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgXCJtb25nb2RiK3NydjovL3JvZHJpZ28tbmV4dGpzOmdRWkRTaEdndGZaUlM0R1lAY2x1c3RlcjAucG5sa2gubW9uZ29kYi5uZXQvbmV4dGpzYXV0aD9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuICApO1xuXG4gIHJldHVybiBjbGllbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9EYXRhYmFzZTtcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImNvbm5lY3RUb0RhdGFiYXNlIiwiY2xpZW50IiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/db.js\n");

/***/ }),

/***/ "./pages/api/auth/signup.js":
/*!**********************************!*\
  !*** ./pages/api/auth/signup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/db */ \"./lib/db.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/auth */ \"./lib/auth.js\");\n\n\nconst handler = async (req, res)=>{\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const { email , password  } = data;\n        if (!email || !email.includes(\"@\") || !password || password.trim().length < 7) {\n            res.status(422).json({\n                message: \"Invalid input - password should be at least 7 characters long\"\n            });\n            return;\n        }\n        const client = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const db = client.db();\n        const existingUser = await db.collection(\"users\").findOne({\n            email: email\n        });\n        if (existingUser) {\n            res.status(422).json({\n                json: \"Email already linked to an user account\"\n            });\n            client.close();\n            return;\n        }\n        const hashedPassword = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.hashPassword)(password);\n        const result = await db.collection(\"users\").insertOne({\n            email: email,\n            password: hashedPassword\n        });\n        res.status(201).json({\n            message: \"Created user!\"\n        });\n        client.close();\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStDO0FBQ0M7QUFFaEQsS0FBSyxDQUFDRSxPQUFPLFVBQVVDLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDbkMsRUFBRSxFQUFFRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxDQUFNLE9BQUUsQ0FBQztRQUMxQixLQUFLLENBQUNDLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFJO1FBRXJCLEtBQUssQ0FBQyxDQUFDLENBQUNDLEtBQUssR0FBRUMsUUFBUSxFQUFDLENBQUMsR0FBR0gsSUFBSTtRQUVoQyxFQUFFLEdBQUdFLEtBQUssS0FBS0EsS0FBSyxDQUFDRSxRQUFRLENBQUMsQ0FBRyxRQUFNRCxRQUFRLElBQUlBLFFBQVEsQ0FBQ0UsSUFBSSxHQUFHQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDOUVSLEdBQUcsQ0FDQVMsTUFBTSxDQUFDLEdBQUcsRUFDVkMsSUFBSSxDQUFDLENBQUM7Z0JBQUNDLE9BQU8sRUFBRSxDQUErRDtZQUFDLENBQUM7WUFDcEYsTUFBTTtRQUNSLENBQUM7UUFFRCxLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNoQixtREFBaUI7UUFFdEMsS0FBSyxDQUFDaUIsRUFBRSxHQUFHRCxNQUFNLENBQUNDLEVBQUU7UUFFcEIsS0FBSyxDQUFDQyxZQUFZLEdBQUcsS0FBSyxDQUFDRCxFQUFFLENBQUNFLFVBQVUsQ0FBQyxDQUFPLFFBQUVDLE9BQU8sQ0FBQyxDQUFDO1lBQUNaLEtBQUssRUFBRUEsS0FBSztRQUFDLENBQUM7UUFFMUUsRUFBRSxFQUFFVSxZQUFZLEVBQUUsQ0FBQztZQUNqQmQsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztnQkFBQ0EsSUFBSSxFQUFFLENBQXlDO1lBQUMsQ0FBQztZQUN4RUUsTUFBTSxDQUFDSyxLQUFLO1lBQ1osTUFBTTtRQUNSLENBQUM7UUFFRCxLQUFLLENBQUNDLGNBQWMsR0FBRyxLQUFLLENBQUNyQix1REFBWSxDQUFDUSxRQUFRO1FBRWxELEtBQUssQ0FBQ2MsTUFBTSxHQUFHLEtBQUssQ0FBQ04sRUFBRSxDQUNwQkUsVUFBVSxDQUFDLENBQU8sUUFDbEJLLFNBQVMsQ0FBQyxDQUFDO1lBQUNoQixLQUFLLEVBQUVBLEtBQUs7WUFBRUMsUUFBUSxFQUFFYSxjQUFjO1FBQUMsQ0FBQztRQUV2RGxCLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQ0MsT0FBTyxFQUFFLENBQWU7UUFBQyxDQUFDO1FBQ2pEQyxNQUFNLENBQUNLLEtBQUs7SUFDZCxDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlbkIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9hdXRoL3NpZ251cC5qcz9hMmE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0VG9EYXRhYmFzZSBmcm9tIFwiLi4vLi4vLi4vbGliL2RiXCI7XG5pbXBvcnQgeyBoYXNoUGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2F1dGhcIjtcblxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gZGF0YTtcblxuICAgIGlmICghZW1haWwgfHwgIWVtYWlsLmluY2x1ZGVzKFwiQFwiKSB8fCAhcGFzc3dvcmQgfHwgcGFzc3dvcmQudHJpbSgpLmxlbmd0aCA8IDcpIHtcbiAgICAgIHJlc1xuICAgICAgICAuc3RhdHVzKDQyMilcbiAgICAgICAgLmpzb24oeyBtZXNzYWdlOiBcIkludmFsaWQgaW5wdXQgLSBwYXNzd29yZCBzaG91bGQgYmUgYXQgbGVhc3QgNyBjaGFyYWN0ZXJzIGxvbmdcIiB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5maW5kT25lKHsgZW1haWw6IGVtYWlsIH0pO1xuXG4gICAgaWYgKGV4aXN0aW5nVXNlcikge1xuICAgICAgcmVzLnN0YXR1cyg0MjIpLmpzb24oeyBqc29uOiBcIkVtYWlsIGFscmVhZHkgbGlua2VkIHRvIGFuIHVzZXIgYWNjb3VudFwiIH0pO1xuICAgICAgY2xpZW50LmNsb3NlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBoYXNoUGFzc3dvcmQocGFzc3dvcmQpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGJcbiAgICAgIC5jb2xsZWN0aW9uKFwidXNlcnNcIilcbiAgICAgIC5pbnNlcnRPbmUoeyBlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCB9KTtcblxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogXCJDcmVhdGVkIHVzZXIhXCIgfSk7XG4gICAgY2xpZW50LmNsb3NlKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsiY29ubmVjdFRvRGF0YWJhc2UiLCJoYXNoUGFzc3dvcmQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJlbWFpbCIsInBhc3N3b3JkIiwiaW5jbHVkZXMiLCJ0cmltIiwibGVuZ3RoIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJjbGllbnQiLCJkYiIsImV4aXN0aW5nVXNlciIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwiY2xvc2UiLCJoYXNoZWRQYXNzd29yZCIsInJlc3VsdCIsImluc2VydE9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/signup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/signup.js"));
module.exports = __webpack_exports__;

})();