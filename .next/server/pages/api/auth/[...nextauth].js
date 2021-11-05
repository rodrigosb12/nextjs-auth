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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
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

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

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

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/auth */ \"./lib/auth.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/db */ \"./lib/db.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    session: {\n        jwt: true\n    },\n    providers: [\n        next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Credentials({\n            async authorize (credentials) {\n                const client = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_3__.connectToDatabase)();\n                const usersCollection = client.db().collection(\"users\");\n                const user = await usersCollection.findOne({\n                    email: credentials.email\n                });\n                if (!user) {\n                    client.close();\n                    throw new Error(\"No user found\");\n                }\n                const isValid = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.verifyPassword)(credentials.password, user.password);\n                if (!isValid) {\n                    client.close();\n                    throw new Error(\"Wrong password entered!!!\");\n                }\n                client.close();\n                return {\n                    email: user.email\n                };\n            }\n        }), \n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFDVztBQUVPO0FBQ0M7QUFFbkQsaUVBQWVBLGdEQUFRLENBQUMsQ0FBQztJQUN2QkksT0FBTyxFQUFFLENBQUM7UUFDUkMsR0FBRyxFQUFFLElBQUk7SUFDWCxDQUFDO0lBQ0RDLFNBQVMsRUFBRSxDQUFDO1FBQ1ZMLHNFQUFxQixDQUFDLENBQUM7a0JBQ2ZPLFNBQVMsRUFBQ0MsV0FBVyxFQUFFLENBQUM7Z0JBQzVCLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEtBQUssQ0FBQ1AsMERBQWlCO2dCQUV0QyxLQUFLLENBQUNRLGVBQWUsR0FBR0QsTUFBTSxDQUFDRSxFQUFFLEdBQUdDLFVBQVUsQ0FBQyxDQUFPO2dCQUV0RCxLQUFLLENBQUNDLElBQUksR0FBRyxLQUFLLENBQUNILGVBQWUsQ0FBQ0ksT0FBTyxDQUFDLENBQUM7b0JBQUNDLEtBQUssRUFBRVAsV0FBVyxDQUFDTyxLQUFLO2dCQUFDLENBQUM7Z0JBRXZFLEVBQUUsR0FBR0YsSUFBSSxFQUFFLENBQUM7b0JBQ1ZKLE1BQU0sQ0FBQ08sS0FBSztvQkFFWixLQUFLLENBQUMsR0FBRyxDQUFDQyxLQUFLLENBQUMsQ0FBZTtnQkFDakMsQ0FBQztnQkFFRCxLQUFLLENBQUNDLE9BQU8sR0FBRyxLQUFLLENBQUNqQix5REFBYyxDQUFDTyxXQUFXLENBQUNXLFFBQVEsRUFBRU4sSUFBSSxDQUFDTSxRQUFRO2dCQUV4RSxFQUFFLEdBQUdELE9BQU8sRUFBRSxDQUFDO29CQUNiVCxNQUFNLENBQUNPLEtBQUs7b0JBQ1osS0FBSyxDQUFDLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDLENBQTJCO2dCQUM3QyxDQUFDO2dCQUNEUixNQUFNLENBQUNPLEtBQUs7Z0JBRVosTUFBTSxDQUFDLENBQUM7b0JBQUNELEtBQUssRUFBRUYsSUFBSSxDQUFDRSxLQUFLO2dCQUFDLENBQUM7WUFDOUIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI7XG5cbmltcG9ydCB7IHZlcmlmeVBhc3N3b3JkIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9hdXRoXCI7XG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGJcIjtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBzZXNzaW9uOiB7XG4gICAgand0OiB0cnVlLFxuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICBQcm92aWRlcnMuQ3JlZGVudGlhbHMoe1xuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG5cbiAgICAgICAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gY2xpZW50LmRiKCkuY29sbGVjdGlvbihcInVzZXJzXCIpO1xuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24uZmluZE9uZSh7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCB9KTtcblxuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICBjbGllbnQuY2xvc2UoKTtcblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHVzZXIgZm91bmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgdmVyaWZ5UGFzc3dvcmQoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xuXG4gICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIldyb25nIHBhc3N3b3JkIGVudGVyZWQhISFcIik7XG4gICAgICAgIH1cbiAgICAgICAgY2xpZW50LmNsb3NlKCk7XG5cbiAgICAgICAgcmV0dXJuIHsgZW1haWw6IHVzZXIuZW1haWwgfTtcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG59KTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIlByb3ZpZGVycyIsInZlcmlmeVBhc3N3b3JkIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJzZXNzaW9uIiwiand0IiwicHJvdmlkZXJzIiwiQ3JlZGVudGlhbHMiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsImNsaWVudCIsInVzZXJzQ29sbGVjdGlvbiIsImRiIiwiY29sbGVjdGlvbiIsInVzZXIiLCJmaW5kT25lIiwiZW1haWwiLCJjbG9zZSIsIkVycm9yIiwiaXNWYWxpZCIsInBhc3N3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();