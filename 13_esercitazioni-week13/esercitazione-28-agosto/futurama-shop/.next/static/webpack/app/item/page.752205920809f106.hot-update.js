"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/item/page",{

/***/ "(app-pages-browser)/./action/get-item.ts":
/*!****************************!*\
  !*** ./action/get-item.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getItem: function() { return /* binding */ getItem; }\n/* harmony export */ });\n// specifichiamo il type del return\nconst getItem = async ()=>{\n    try {\n        const res = await fetch(\"https://api.sampleapis.com/futurama/inventory/1\");\n        const data = await res.json();\n        return data;\n    } catch (error) {\n        const message = error instanceof Error ? error.message : \"An error occurred while loading...\";\n        console.error(message);\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FjdGlvbi9nZXQtaXRlbS50cyIsIm1hcHBpbmdzIjoiOzs7O0FBRUEsbUNBQW1DO0FBQzVCLE1BQU1BLFVBQVU7SUFDdEIsSUFBSTtRQUNILE1BQU1DLE1BQU0sTUFBTUMsTUFBTTtRQUN4QixNQUFNQyxPQUFPLE1BQU1GLElBQUlHLElBQUk7UUFDM0IsT0FBT0Q7SUFDUixFQUFFLE9BQU9FLE9BQWdCO1FBQ3hCLE1BQU1DLFVBQVVELGlCQUFpQkUsUUFBUUYsTUFBTUMsT0FBTyxHQUFHO1FBQ3pERSxRQUFRSCxLQUFLLENBQUNDO0lBQ2Y7QUFDRCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FjdGlvbi9nZXQtaXRlbS50cz9hMTZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElJdGVtIH0gZnJvbSBcIkAvbW9kZWwvaXRlbVwiO1xyXG5cclxuLy8gc3BlY2lmaWNoaWFtbyBpbCB0eXBlIGRlbCByZXR1cm5cclxuZXhwb3J0IGNvbnN0IGdldEl0ZW0gPSBhc3luYyAoKTogUHJvbWlzZTxJSXRlbT4gPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLnNhbXBsZWFwaXMuY29tL2Z1dHVyYW1hL2ludmVudG9yeS8xXCIpO1xyXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xyXG5cdFx0Y29uc3QgbWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2FkaW5nLi4uXCI7XHJcblx0XHRjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xyXG5cdH1cclxufTtcclxuIl0sIm5hbWVzIjpbImdldEl0ZW0iLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIiwiRXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./action/get-item.ts\n"));

/***/ })

});