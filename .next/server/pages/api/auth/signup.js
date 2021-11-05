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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hashPassword\": () => (/* binding */ hashPassword),\n/* harmony export */   \"verifyPassword\": () => (/* binding */ verifyPassword)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n\nconst hashPassword = async (password)=>{\n    const hashedPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 12);\n    return hashedPassword;\n};\nconst verifyPassword = async (password, hashedPassword)=>{\n    const isValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare)(password, hashedPassword);\n    return isValid;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBRWpDLEtBQUssQ0FBQ0UsWUFBWSxVQUFVQyxRQUFRLEdBQUssQ0FBQztJQUMvQyxLQUFLLENBQUNDLGNBQWMsR0FBRyxLQUFLLENBQUNKLDhDQUFJLENBQUNHLFFBQVEsRUFBRSxFQUFFO0lBQzlDLE1BQU0sQ0FBQ0MsY0FBYztBQUN2QixDQUFDO0FBRU0sS0FBSyxDQUFDQyxjQUFjLFVBQVVGLFFBQVEsRUFBRUMsY0FBYyxHQUFLLENBQUM7SUFDakUsS0FBSyxDQUFDRSxPQUFPLEdBQUcsS0FBSyxDQUFDTCxpREFBTyxDQUFDRSxRQUFRLEVBQUVDLGNBQWM7SUFDdEQsTUFBTSxDQUFDRSxPQUFPO0FBQ2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vbGliL2F1dGguanM/Mjg3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYXNoLCBjb21wYXJlIH0gZnJvbSBcImJjcnlwdGpzXCI7XG5cbmV4cG9ydCBjb25zdCBoYXNoUGFzc3dvcmQgPSBhc3luYyAocGFzc3dvcmQpID0+IHtcbiAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBoYXNoKHBhc3N3b3JkLCAxMik7XG4gIHJldHVybiBoYXNoZWRQYXNzd29yZDtcbn07XG5cbmV4cG9ydCBjb25zdCB2ZXJpZnlQYXNzd29yZCA9IGFzeW5jIChwYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpID0+IHtcbiAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGNvbXBhcmUocGFzc3dvcmQsIGhhc2hlZFBhc3N3b3JkKTtcbiAgcmV0dXJuIGlzVmFsaWQ7XG59O1xuIl0sIm5hbWVzIjpbImhhc2giLCJjb21wYXJlIiwiaGFzaFBhc3N3b3JkIiwicGFzc3dvcmQiLCJoYXNoZWRQYXNzd29yZCIsInZlcmlmeVBhc3N3b3JkIiwiaXNWYWxpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/auth.js\n");

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectToDatabase = async ()=>{\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://rodrigo-nextjs:gQZDShGgtfZRS4GY@cluster0.pnlkh.mongodb.net/nextjsauth?retryWrites=true&w=majority\");\n    return client;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRTlCLEtBQUssQ0FBQ0MsaUJBQWlCLGFBQWUsQ0FBQztJQUM1QyxLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNGLHdEQUFtQixDQUN0QyxDQUFpSDtJQUduSCxNQUFNLENBQUNFLE1BQU07QUFDZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL2xpYi9kYi5qcz8zZGM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuZXhwb3J0IGNvbnN0IGNvbm5lY3RUb0RhdGFiYXNlID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIFwibW9uZ29kYitzcnY6Ly9yb2RyaWdvLW5leHRqczpnUVpEU2hHZ3RmWlJTNEdZQGNsdXN0ZXIwLnBubGtoLm1vbmdvZGIubmV0L25leHRqc2F1dGg/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbiAgKTtcblxuICByZXR1cm4gY2xpZW50O1xufTsiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNsaWVudCIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/db.js\n");

/***/ }),

/***/ "./pages/api/auth/signup.js":
/*!**********************************!*\
  !*** ./pages/api/auth/signup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/db */ \"./lib/db.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/auth */ \"./lib/auth.js\");\n\n\nconst handler = async (req, res)=>{\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const { email , password  } = data;\n        if (!email || !email.includes(\"@\") || !password || password.trim().length < 7) {\n            res.status(422).json({\n                message: \"Invalid input - password should be at least 7 characters long\"\n            });\n            return;\n        }\n        const client = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n        const db = client.db();\n        const existingUser = await db.collection(\"users\").findOne({\n            email: email\n        });\n        if (existingUser) {\n            res.status(422).json({\n                json: \"Email already linked to an user account\"\n            });\n            client.close();\n            return;\n        }\n        const hashedPassword = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.hashPassword)(password);\n        const result = await db.collection(\"users\").insertOne({\n            email: email,\n            password: hashedPassword\n        });\n        res.status(201).json({\n            message: \"Created user!\"\n        });\n        client.close();\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1EO0FBQ0g7QUFFaEQsS0FBSyxDQUFDRSxPQUFPLFVBQVVDLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDbkMsRUFBRSxFQUFFRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxDQUFNLE9BQUUsQ0FBQztRQUMxQixLQUFLLENBQUNDLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFJO1FBRXJCLEtBQUssQ0FBQyxDQUFDLENBQUNDLEtBQUssR0FBRUMsUUFBUSxFQUFDLENBQUMsR0FBR0gsSUFBSTtRQUVoQyxFQUFFLEdBQUdFLEtBQUssS0FBS0EsS0FBSyxDQUFDRSxRQUFRLENBQUMsQ0FBRyxRQUFNRCxRQUFRLElBQUlBLFFBQVEsQ0FBQ0UsSUFBSSxHQUFHQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDOUVSLEdBQUcsQ0FDQVMsTUFBTSxDQUFDLEdBQUcsRUFDVkMsSUFBSSxDQUFDLENBQUM7Z0JBQUNDLE9BQU8sRUFBRSxDQUErRDtZQUFDLENBQUM7WUFDcEYsTUFBTTtRQUNSLENBQUM7UUFFRCxLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNoQiwwREFBaUI7UUFFdEMsS0FBSyxDQUFDaUIsRUFBRSxHQUFHRCxNQUFNLENBQUNDLEVBQUU7UUFFcEIsS0FBSyxDQUFDQyxZQUFZLEdBQUcsS0FBSyxDQUFDRCxFQUFFLENBQUNFLFVBQVUsQ0FBQyxDQUFPLFFBQUVDLE9BQU8sQ0FBQyxDQUFDO1lBQUNaLEtBQUssRUFBRUEsS0FBSztRQUFDLENBQUM7UUFFMUUsRUFBRSxFQUFFVSxZQUFZLEVBQUUsQ0FBQztZQUNqQmQsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztnQkFBQ0EsSUFBSSxFQUFFLENBQXlDO1lBQUMsQ0FBQztZQUN4RUUsTUFBTSxDQUFDSyxLQUFLO1lBQ1osTUFBTTtRQUNSLENBQUM7UUFFRCxLQUFLLENBQUNDLGNBQWMsR0FBRyxLQUFLLENBQUNyQix1REFBWSxDQUFDUSxRQUFRO1FBRWxELEtBQUssQ0FBQ2MsTUFBTSxHQUFHLEtBQUssQ0FBQ04sRUFBRSxDQUNwQkUsVUFBVSxDQUFDLENBQU8sUUFDbEJLLFNBQVMsQ0FBQyxDQUFDO1lBQUNoQixLQUFLLEVBQUVBLEtBQUs7WUFBRUMsUUFBUSxFQUFFYSxjQUFjO1FBQUMsQ0FBQztRQUV2RGxCLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQ0MsT0FBTyxFQUFFLENBQWU7UUFBQyxDQUFDO1FBQ2pEQyxNQUFNLENBQUNLLEtBQUs7SUFDZCxDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlbkIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9hdXRoL3NpZ251cC5qcz9hMmE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYlwiO1xuaW1wb3J0IHsgaGFzaFBhc3N3b3JkIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9hdXRoXCI7XG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xuXG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGRhdGE7XG5cbiAgICBpZiAoIWVtYWlsIHx8ICFlbWFpbC5pbmNsdWRlcyhcIkBcIikgfHwgIXBhc3N3b3JkIHx8IHBhc3N3b3JkLnRyaW0oKS5sZW5ndGggPCA3KSB7XG4gICAgICByZXNcbiAgICAgICAgLnN0YXR1cyg0MjIpXG4gICAgICAgIC5qc29uKHsgbWVzc2FnZTogXCJJbnZhbGlkIGlucHV0IC0gcGFzc3dvcmQgc2hvdWxkIGJlIGF0IGxlYXN0IDcgY2hhcmFjdGVycyBsb25nXCIgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcblxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZmluZE9uZSh7IGVtYWlsOiBlbWFpbCB9KTtcblxuICAgIGlmIChleGlzdGluZ1VzZXIpIHtcbiAgICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHsganNvbjogXCJFbWFpbCBhbHJlYWR5IGxpbmtlZCB0byBhbiB1c2VyIGFjY291bnRcIiB9KTtcbiAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgaGFzaFBhc3N3b3JkKHBhc3N3b3JkKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiXG4gICAgICAuY29sbGVjdGlvbihcInVzZXJzXCIpXG4gICAgICAuaW5zZXJ0T25lKHsgZW1haWw6IGVtYWlsLCBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQgfSk7XG5cbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6IFwiQ3JlYXRlZCB1c2VyIVwiIH0pO1xuICAgIGNsaWVudC5jbG9zZSgpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbImNvbm5lY3RUb0RhdGFiYXNlIiwiaGFzaFBhc3N3b3JkIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwiZW1haWwiLCJwYXNzd29yZCIsImluY2x1ZGVzIiwidHJpbSIsImxlbmd0aCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiY2xpZW50IiwiZGIiLCJleGlzdGluZ1VzZXIiLCJjb2xsZWN0aW9uIiwiZmluZE9uZSIsImNsb3NlIiwiaGFzaGVkUGFzc3dvcmQiLCJyZXN1bHQiLCJpbnNlcnRPbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/signup.js\n");

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