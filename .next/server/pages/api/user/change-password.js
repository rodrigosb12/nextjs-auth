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
exports.id = "pages/api/user/change-password";
exports.ids = ["pages/api/user/change-password"];
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

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth/client");

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

/***/ "./pages/api/user/change-password.js":
/*!*******************************************!*\
  !*** ./pages/api/user/change-password.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/db */ \"./lib/db.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/auth */ \"./lib/auth.js\");\n\n\n\nasync function handler(req, res) {\n    if (req.method !== \"PATCH\") {\n        return;\n    }\n    const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req: req\n    });\n    if (!session) {\n        res.status(401).json({\n            message: \"Not authenticated\"\n        });\n        return;\n    }\n    const userEmail = session.user.email;\n    const oldPassword = req.body.oldPassword;\n    const newPassword = req.body.newPassword;\n    const client = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n    const usersCollection = client.db().collection(\"users\");\n    const user = await usersCollection.findOne({\n        email: userEmail\n    });\n    if (!user) {\n        res.status(404).json({\n            message: \"Usernot found\"\n        });\n        client.close();\n        return;\n    }\n    const currentPassword = user.password;\n    const passwordAreEqual = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.verifyPassword)(oldPassword, currentPassword);\n    if (!passwordAreEqual) {\n        res.status(403).json({\n            message: \"Invalid Password.\"\n        });\n        client.close();\n        return;\n    }\n    const hashedPassword = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.hashPassword)(newPassword);\n    const result = await usersCollection.updateOne({\n        email: userEmail\n    }, {\n        $set: {\n            password: hashedPassword\n        }\n    });\n    client.close();\n    res.status(200).json({\n        message: \"Password updated!\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlci9jaGFuZ2UtcGFzc3dvcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkM7QUFDTTtBQUNhO2VBRWpESSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDaEMsRUFBRSxFQUFFRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxDQUFPLFFBQUUsQ0FBQztRQUMzQixNQUFNO0lBQ1IsQ0FBQztJQUVELEtBQUssQ0FBQ0MsT0FBTyxHQUFHLEtBQUssQ0FBQ1IsNERBQVUsQ0FBQyxDQUFDO1FBQUNLLEdBQUcsRUFBRUEsR0FBRztJQUFDLENBQUM7SUFFN0MsRUFBRSxHQUFHRyxPQUFPLEVBQUUsQ0FBQztRQUNiRixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLE9BQU8sRUFBRSxDQUFtQjtRQUFDLENBQUM7UUFDckQsTUFBTTtJQUNSLENBQUM7SUFFRCxLQUFLLENBQUNDLFNBQVMsR0FBR0osT0FBTyxDQUFDSyxJQUFJLENBQUNDLEtBQUs7SUFDcEMsS0FBSyxDQUFDQyxXQUFXLEdBQUdWLEdBQUcsQ0FBQ1csSUFBSSxDQUFDRCxXQUFXO0lBQ3hDLEtBQUssQ0FBQ0UsV0FBVyxHQUFHWixHQUFHLENBQUNXLElBQUksQ0FBQ0MsV0FBVztJQUV4QyxLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNqQiwwREFBaUI7SUFFdEMsS0FBSyxDQUFDa0IsZUFBZSxHQUFHRCxNQUFNLENBQUNFLEVBQUUsR0FBR0MsVUFBVSxDQUFDLENBQU87SUFFdEQsS0FBSyxDQUFDUixJQUFJLEdBQUcsS0FBSyxDQUFDTSxlQUFlLENBQUNHLE9BQU8sQ0FBQyxDQUFDO1FBQUNSLEtBQUssRUFBRUYsU0FBUztJQUFDLENBQUM7SUFFL0QsRUFBRSxHQUFHQyxJQUFJLEVBQUUsQ0FBQztRQUNWUCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLE9BQU8sRUFBRSxDQUFlO1FBQUMsQ0FBQztRQUNqRE8sTUFBTSxDQUFDSyxLQUFLO1FBQ1osTUFBTTtJQUNSLENBQUM7SUFFRCxLQUFLLENBQUNDLGVBQWUsR0FBR1gsSUFBSSxDQUFDWSxRQUFRO0lBRXJDLEtBQUssQ0FBQ0MsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDeEIseURBQWMsQ0FBQ2EsV0FBVyxFQUFFUyxlQUFlO0lBRTFFLEVBQUUsR0FBR0UsZ0JBQWdCLEVBQUUsQ0FBQztRQUN0QnBCLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQ0MsT0FBTyxFQUFFLENBQW1CO1FBQUMsQ0FBQztRQUNyRE8sTUFBTSxDQUFDSyxLQUFLO1FBQ1osTUFBTTtJQUNSLENBQUM7SUFFRCxLQUFLLENBQUNJLGNBQWMsR0FBRyxLQUFLLENBQUN4Qix1REFBWSxDQUFDYyxXQUFXO0lBRXJELEtBQUssQ0FBQ1csTUFBTSxHQUFHLEtBQUssQ0FBQ1QsZUFBZSxDQUFDVSxTQUFTLENBQzVDLENBQUM7UUFBQ2YsS0FBSyxFQUFFRixTQUFTO0lBQUMsQ0FBQyxFQUNwQixDQUFDO1FBQUNrQixJQUFJLEVBQUUsQ0FBQztZQUFDTCxRQUFRLEVBQUVFLGNBQWM7UUFBQyxDQUFDO0lBQUMsQ0FBQztJQUd4Q1QsTUFBTSxDQUFDSyxLQUFLO0lBQ1pqQixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1FBQUNDLE9BQU8sRUFBRSxDQUFtQjtJQUFDLENBQUM7QUFDdkQsQ0FBQztBQUVELGlFQUFlUCxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL3VzZXIvY2hhbmdlLXBhc3N3b3JkLmpzP2ZjMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGJcIjtcbmltcG9ydCB7IHZlcmlmeVBhc3N3b3JkLCBoYXNoUGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2F1dGhcIjtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQQVRDSFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXE6IHJlcSB9KTtcblxuICBpZiAoIXNlc3Npb24pIHtcbiAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6IFwiTm90IGF1dGhlbnRpY2F0ZWRcIiB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB1c2VyRW1haWwgPSBzZXNzaW9uLnVzZXIuZW1haWw7XG4gIGNvbnN0IG9sZFBhc3N3b3JkID0gcmVxLmJvZHkub2xkUGFzc3dvcmQ7XG4gIGNvbnN0IG5ld1Bhc3N3b3JkID0gcmVxLmJvZHkubmV3UGFzc3dvcmQ7XG5cbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcblxuICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBjbGllbnQuZGIoKS5jb2xsZWN0aW9uKFwidXNlcnNcIik7XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJzQ29sbGVjdGlvbi5maW5kT25lKHsgZW1haWw6IHVzZXJFbWFpbCB9KTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IFwiVXNlcm5vdCBmb3VuZFwiIH0pO1xuICAgIGNsaWVudC5jbG9zZSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGN1cnJlbnRQYXNzd29yZCA9IHVzZXIucGFzc3dvcmQ7XG5cbiAgY29uc3QgcGFzc3dvcmRBcmVFcXVhbCA9IGF3YWl0IHZlcmlmeVBhc3N3b3JkKG9sZFBhc3N3b3JkLCBjdXJyZW50UGFzc3dvcmQpO1xuXG4gIGlmICghcGFzc3dvcmRBcmVFcXVhbCkge1xuICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgbWVzc2FnZTogXCJJbnZhbGlkIFBhc3N3b3JkLlwiIH0pO1xuICAgIGNsaWVudC5jbG9zZSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgaGFzaFBhc3N3b3JkKG5ld1Bhc3N3b3JkKTtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24udXBkYXRlT25lKFxuICAgIHsgZW1haWw6IHVzZXJFbWFpbCB9LFxuICAgIHsgJHNldDogeyBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQgfSB9XG4gICk7XG5cbiAgY2xpZW50LmNsb3NlKCk7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJQYXNzd29yZCB1cGRhdGVkIVwiIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJjb25uZWN0VG9EYXRhYmFzZSIsInZlcmlmeVBhc3N3b3JkIiwiaGFzaFBhc3N3b3JkIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInNlc3Npb24iLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInVzZXJFbWFpbCIsInVzZXIiLCJlbWFpbCIsIm9sZFBhc3N3b3JkIiwiYm9keSIsIm5ld1Bhc3N3b3JkIiwiY2xpZW50IiwidXNlcnNDb2xsZWN0aW9uIiwiZGIiLCJjb2xsZWN0aW9uIiwiZmluZE9uZSIsImNsb3NlIiwiY3VycmVudFBhc3N3b3JkIiwicGFzc3dvcmQiLCJwYXNzd29yZEFyZUVxdWFsIiwiaGFzaGVkUGFzc3dvcmQiLCJyZXN1bHQiLCJ1cGRhdGVPbmUiLCIkc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/user/change-password.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/user/change-password.js"));
module.exports = __webpack_exports__;

})();