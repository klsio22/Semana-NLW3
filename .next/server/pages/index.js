module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/server */ \"./src/server.js\");\n/* harmony import */ var _src_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* \nconst server = require('../src/server.js') */\n\nfunction Home() {\n  return _src_server__WEBPACK_IMPORTED_MODULE_0___default.a;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJzZXJ2ZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQ2IsU0FBT0Msa0RBQVA7QUFDRjs7QUFFY0QsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzZXJ2ZXIgZnJvbSBcIi4uL3NyYy9zZXJ2ZXJcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8qIFxuY29uc3Qgc2VydmVyID0gcmVxdWlyZSgnLi4vc3JjL3NlcnZlci5qcycpICovXG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gICByZXR1cm4gc2VydmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./src/database/fakedata.js":
/*!**********************************!*\
  !*** ./src/database/fakedata.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = [{\n  id: 1,\n  lat: \"-27.222633\",\n  lng: -\"49.6455874\",\n  name: \"Lar das meninas\",\n  description: \"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.\",\n  images: [\"https://images.unsplash.com/photo-1609005870928-3fb5409180c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit\", \" https://images.unsplash.com/photo-1609005870928-3fb5409180c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit\"],\n  instructions: \"Venha quando se sentir a vontade e traga muito amor e paciência para dar\",\n  opening_hours: \"Horário de visitas das 18h até 8h\",\n  open_on_weekends: \"1\"\n}, {\n  id: 2,\n  lat: \"-27.222633\",\n  lng: -\"49.6555874\",\n  name: \"Lar dos meninos\",\n  description: \"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.\",\n  images: [\"https://images.unsplash.com/photo-1609005870928-3fb5409180c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit\", \" https://images.unsplash.com/photo-1609005870928-3fb5409180c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit\"],\n  instructions: \"Venha quando se sentir a vontade e traga muito amor e paciência para dar\",\n  opening_hours: \"Horário de visitas das 18h até 8h\",\n  open_on_weekends: \"0\"\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UvZmFrZWRhdGEuanM/MDI5YSJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiaWQiLCJsYXQiLCJsbmciLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJpbnN0cnVjdGlvbnMiLCJvcGVuaW5nX2hvdXJzIiwib3Blbl9vbl93ZWVrZW5kcyJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixDQUNkO0FBQ0dDLElBQUUsRUFBRSxDQURQO0FBRUdDLEtBQUcsRUFBRSxZQUZSO0FBR0dDLEtBQUcsRUFBRSxDQUFDLFlBSFQ7QUFJR0MsTUFBSSxFQUFFLGlCQUpUO0FBS0dDLGFBQVcsRUFDUixpSEFOTjtBQU9HQyxRQUFNLEVBQUUsQ0FDTCw0T0FESyxFQUdMLDZPQUhLLENBUFg7QUFhR0MsY0FBWSxFQUNULDBFQWROO0FBZ0JHQyxlQUFhLEVBQUUsbUNBaEJsQjtBQWtCR0Msa0JBQWdCLEVBQUU7QUFsQnJCLENBRGMsRUFzQmQ7QUFDR1IsSUFBRSxFQUFFLENBRFA7QUFFR0MsS0FBRyxFQUFFLFlBRlI7QUFHR0MsS0FBRyxFQUFFLENBQUMsWUFIVDtBQUlHQyxNQUFJLEVBQUUsaUJBSlQ7QUFLR0MsYUFBVyxFQUNSLGlIQU5OO0FBT0dDLFFBQU0sRUFBRSxDQUNMLDRPQURLLEVBR0wsNk9BSEssQ0FQWDtBQWFHQyxjQUFZLEVBQ1QsMEVBZE47QUFnQkdDLGVBQWEsRUFBRSxtQ0FoQmxCO0FBa0JHQyxrQkFBZ0IsRUFBRTtBQWxCckIsQ0F0QmMsQ0FBakIiLCJmaWxlIjoiLi9zcmMvZGF0YWJhc2UvZmFrZWRhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFtcbiAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgbGF0OiBcIi0yNy4yMjI2MzNcIixcbiAgICAgIGxuZzogLVwiNDkuNjQ1NTg3NFwiLFxuICAgICAgbmFtZTogXCJMYXIgZGFzIG1lbmluYXNcIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgXCJQcmVzdGEgYXNzaXN0w6puY2lhIGEgY3JpYW7Dp2FzIGRlIDA2IGEgMTUgYW5vcyBxdWUgc2UgZW5jb250cmUgZW0gc2l0dWHDp8OjbyBkZSByaXNjbyBlL291IHZ1bG5lcmFiaWxpZGFkZSBzb2NpYWwuXCIsXG4gICAgICBpbWFnZXM6IFtcbiAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MDkwMDU4NzA5MjgtM2ZiNTQwOTE4MGMwP2Nyb3A9ZW50cm9weSZjcz10aW55c3JnYiZmaXQ9bWF4JmZtPWpwZyZpeGlkPU1Yd3hmREI4TVh4eVlXNWtiMjE4Zkh4OGZIeDhmQSZpeGxpYj1yYi0xLjIuMSZxPTgwJnc9MTA4MCZ1dG1fc291cmNlPXVuc3BsYXNoX3NvdXJjZSZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jYW1wYWlnbj1hcGktY3JlZGl0XCIsXG5cbiAgICAgICAgIFwiIGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjA5MDA1ODcwOTI4LTNmYjU0MDkxODBjMD9jcm9wPWVudHJvcHkmY3M9dGlueXNyZ2ImZml0PW1heCZmbT1qcGcmaXhpZD1NWHd4ZkRCOE1YeHlZVzVrYjIxOGZIeDhmSHg4ZkEmaXhsaWI9cmItMS4yLjEmcT04MCZ3PTEwODAmdXRtX3NvdXJjZT11bnNwbGFzaF9zb3VyY2UmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY2FtcGFpZ249YXBpLWNyZWRpdFwiLFxuICAgICAgXSxcblxuICAgICAgaW5zdHJ1Y3Rpb25zOlxuICAgICAgICAgXCJWZW5oYSBxdWFuZG8gc2Ugc2VudGlyIGEgdm9udGFkZSBlIHRyYWdhIG11aXRvIGFtb3IgZSBwYWNpw6puY2lhIHBhcmEgZGFyXCIsXG5cbiAgICAgIG9wZW5pbmdfaG91cnM6IFwiSG9yw6FyaW8gZGUgdmlzaXRhcyBkYXMgMThoIGF0w6kgOGhcIixcblxuICAgICAgb3Blbl9vbl93ZWVrZW5kczogXCIxXCIsXG4gICB9LFxuXG4gICB7XG4gICAgICBpZDogMixcbiAgICAgIGxhdDogXCItMjcuMjIyNjMzXCIsXG4gICAgICBsbmc6IC1cIjQ5LjY1NTU4NzRcIixcbiAgICAgIG5hbWU6IFwiTGFyIGRvcyBtZW5pbm9zXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgIFwiUHJlc3RhIGFzc2lzdMOqbmNpYSBhIGNyaWFuw6dhcyBkZSAwNiBhIDE1IGFub3MgcXVlIHNlIGVuY29udHJlIGVtIHNpdHVhw6fDo28gZGUgcmlzY28gZS9vdSB2dWxuZXJhYmlsaWRhZGUgc29jaWFsLlwiLFxuICAgICAgaW1hZ2VzOiBbXG4gICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjA5MDA1ODcwOTI4LTNmYjU0MDkxODBjMD9jcm9wPWVudHJvcHkmY3M9dGlueXNyZ2ImZml0PW1heCZmbT1qcGcmaXhpZD1NWHd4ZkRCOE1YeHlZVzVrYjIxOGZIeDhmSHg4ZkEmaXhsaWI9cmItMS4yLjEmcT04MCZ3PTEwODAmdXRtX3NvdXJjZT11bnNwbGFzaF9zb3VyY2UmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY2FtcGFpZ249YXBpLWNyZWRpdFwiLFxuXG4gICAgICAgICBcIiBodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYwOTAwNTg3MDkyOC0zZmI1NDA5MTgwYzA/Y3JvcD1lbnRyb3B5JmNzPXRpbnlzcmdiJmZpdD1tYXgmZm09anBnJml4aWQ9TVh3eGZEQjhNWHh5WVc1a2IyMThmSHg4Zkh4OGZBJml4bGliPXJiLTEuMi4xJnE9ODAmdz0xMDgwJnV0bV9zb3VyY2U9dW5zcGxhc2hfc291cmNlJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NhbXBhaWduPWFwaS1jcmVkaXRcIixcbiAgICAgIF0sXG5cbiAgICAgIGluc3RydWN0aW9uczpcbiAgICAgICAgIFwiVmVuaGEgcXVhbmRvIHNlIHNlbnRpciBhIHZvbnRhZGUgZSB0cmFnYSBtdWl0byBhbW9yIGUgcGFjacOqbmNpYSBwYXJhIGRhclwiLFxuXG4gICAgICBvcGVuaW5nX2hvdXJzOiBcIkhvcsOhcmlvIGRlIHZpc2l0YXMgZGFzIDE4aCBhdMOpIDhoXCIsXG5cbiAgICAgIG9wZW5fb25fd2Vla2VuZHM6IFwiMFwiLFxuICAgfSxcbl07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/database/fakedata.js\n");

/***/ }),

/***/ "./src/pages.js":
/*!**********************!*\
  !*** ./src/pages.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const orphanages = __webpack_require__(/*! ./database/fakedata.js */ \"./src/database/fakedata.js\");\n\nmodule.exports = {\n  index(req, res) {\n    //arrow functions\n    //return response.send(\"Olá mundo!\");\n    //console.log(path.join(__dirname,'views','index.html'))\n    //console.log(request.query);\n    //return response.sendFile(path.join(__dirname, \"views\", \"index.html\"));\n    return res.render(\"index\");\n  },\n\n  orphanage(req, res) {\n    return res.render(\"orphanage\");\n  },\n\n  orphanages(req, res) {\n    return res.render(\"orphanages\", {\n      orphanages\n    });\n  },\n\n  createOrphanege(req, res) {\n    return res.render(\"create-orphanage\");\n  }\n\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMuanM/Yzg0ZiJdLCJuYW1lcyI6WyJvcnBoYW5hZ2VzIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJpbmRleCIsInJlcSIsInJlcyIsInJlbmRlciIsIm9ycGhhbmFnZSIsImNyZWF0ZU9ycGhhbmVnZSJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLDBEQUFELENBQTFCOztBQUVBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZEMsT0FBSyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBVztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxXQUFPQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxPQUFYLENBQVA7QUFDRixHQVRhOztBQVdkQyxXQUFTLENBQUNILEdBQUQsRUFBTUMsR0FBTixFQUFXO0FBQ2pCLFdBQU9BLEdBQUcsQ0FBQ0MsTUFBSixDQUFXLFdBQVgsQ0FBUDtBQUNGLEdBYmE7O0FBZWRQLFlBQVUsQ0FBQ0ssR0FBRCxFQUFNQyxHQUFOLEVBQVc7QUFDbEIsV0FBT0EsR0FBRyxDQUFDQyxNQUFKLENBQVcsWUFBWCxFQUF5QjtBQUFDUDtBQUFELEtBQXpCLENBQVA7QUFDRixHQWpCYTs7QUFtQmRTLGlCQUFlLENBQUNKLEdBQUQsRUFBTUMsR0FBTixFQUFXO0FBQ3ZCLFdBQU9BLEdBQUcsQ0FBQ0MsTUFBSixDQUFXLGtCQUFYLENBQVA7QUFDRjs7QUFyQmEsQ0FBakIiLCJmaWxlIjoiLi9zcmMvcGFnZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBvcnBoYW5hZ2VzID0gcmVxdWlyZShcIi4vZGF0YWJhc2UvZmFrZWRhdGEuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgaW5kZXgocmVxLCByZXMpIHtcbiAgICAgIC8vYXJyb3cgZnVuY3Rpb25zXG4gICAgICAvL3JldHVybiByZXNwb25zZS5zZW5kKFwiT2zDoSBtdW5kbyFcIik7XG4gICAgICAvL2NvbnNvbGUubG9nKHBhdGguam9pbihfX2Rpcm5hbWUsJ3ZpZXdzJywnaW5kZXguaHRtbCcpKVxuICAgICAgLy9jb25zb2xlLmxvZyhyZXF1ZXN0LnF1ZXJ5KTtcblxuICAgICAgLy9yZXR1cm4gcmVzcG9uc2Uuc2VuZEZpbGUocGF0aC5qb2luKF9fZGlybmFtZSwgXCJ2aWV3c1wiLCBcImluZGV4Lmh0bWxcIikpO1xuICAgICAgcmV0dXJuIHJlcy5yZW5kZXIoXCJpbmRleFwiKTtcbiAgIH0sXG5cbiAgIG9ycGhhbmFnZShyZXEsIHJlcykge1xuICAgICAgcmV0dXJuIHJlcy5yZW5kZXIoXCJvcnBoYW5hZ2VcIik7XG4gICB9LFxuXG4gICBvcnBoYW5hZ2VzKHJlcSwgcmVzKSB7XG4gICAgICByZXR1cm4gcmVzLnJlbmRlcihcIm9ycGhhbmFnZXNcIiwge29ycGhhbmFnZXN9KTtcbiAgIH0sXG5cbiAgIGNyZWF0ZU9ycGhhbmVnZShyZXEsIHJlcykge1xuICAgICAgcmV0dXJuIHJlcy5yZW5kZXIoXCJjcmVhdGUtb3JwaGFuYWdlXCIpO1xuICAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages.js\n");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {//importar depedência\nconst express = __webpack_require__(/*! express */ \"express\");\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst pages = __webpack_require__(/*! ./pages.js */ \"./src/pages.js\"); // iniciando o express\n\n\nconst server = express();\nserver //utilizando os arquivos estáticos\n.use(express.static(\"public\")) //configurar template engine\n.set(\"views\", path.join(__dirname, \"views\")).set(\"view engine\", \"hbs\") //Rotas da aplicação\n.get(\"/\", pages.index).get(\"/orphanage\", pages.orphanage).get(\"/orphanages\", pages.orphanages).get(\"/create-orphanage\", pages.createOrphanege); //ligar o servidor\n\nserver.listen(5500);\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLmpzPzNmOWQiXSwibmFtZXMiOlsiZXhwcmVzcyIsInJlcXVpcmUiLCJwYXRoIiwicGFnZXMiLCJzZXJ2ZXIiLCJ1c2UiLCJzdGF0aWMiLCJzZXQiLCJqb2luIiwiX19kaXJuYW1lIiwiZ2V0IiwiaW5kZXgiLCJvcnBoYW5hZ2UiLCJvcnBoYW5hZ2VzIiwiY3JlYXRlT3JwaGFuZWdlIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLE1BQU1BLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyx3QkFBRCxDQUF2Qjs7QUFDQSxNQUFNQyxJQUFJLEdBQUdELG1CQUFPLENBQUMsa0JBQUQsQ0FBcEI7O0FBQ0EsTUFBTUUsS0FBSyxHQUFHRixtQkFBTyxDQUFDLGtDQUFELENBQXJCLEMsQ0FDQTs7O0FBRUEsTUFBTUcsTUFBTSxHQUFHSixPQUFPLEVBQXRCO0FBRUFJLE1BQU0sQ0FDSDtBQURHLENBRUZDLEdBRkosQ0FFUUwsT0FBTyxDQUFDTSxNQUFSLENBQWUsUUFBZixDQUZSLEVBSUc7QUFKSCxDQUtJQyxHQUxKLENBS1EsT0FMUixFQUtpQkwsSUFBSSxDQUFDTSxJQUFMLENBQVVDLFNBQVYsRUFBcUIsT0FBckIsQ0FMakIsRUFNSUYsR0FOSixDQU1RLGFBTlIsRUFNdUIsS0FOdkIsRUFRRztBQVJILENBU0lHLEdBVEosQ0FTUSxHQVRSLEVBU2FQLEtBQUssQ0FBQ1EsS0FUbkIsRUFVSUQsR0FWSixDQVVRLFlBVlIsRUFVc0JQLEtBQUssQ0FBQ1MsU0FWNUIsRUFXSUYsR0FYSixDQVdRLGFBWFIsRUFXdUJQLEtBQUssQ0FBQ1UsVUFYN0IsRUFZSUgsR0FaSixDQVlRLG1CQVpSLEVBWTZCUCxLQUFLLENBQUNXLGVBWm5DLEUsQ0FjQTs7QUFDQVYsTUFBTSxDQUFDVyxNQUFQLENBQWMsSUFBZCxFIiwiZmlsZSI6Ii4vc3JjL3NlcnZlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0YXIgZGVwZWTDqm5jaWFcbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcbmNvbnN0IHBhZ2VzID0gcmVxdWlyZShcIi4vcGFnZXMuanNcIik7XG4vLyBpbmljaWFuZG8gbyBleHByZXNzXG5cbmNvbnN0IHNlcnZlciA9IGV4cHJlc3MoKTtcblxuc2VydmVyXG4gICAvL3V0aWxpemFuZG8gb3MgYXJxdWl2b3MgZXN0w6F0aWNvc1xuICAgLnVzZShleHByZXNzLnN0YXRpYyhcInB1YmxpY1wiKSlcblxuICAgLy9jb25maWd1cmFyIHRlbXBsYXRlIGVuZ2luZVxuICAgLnNldChcInZpZXdzXCIsIHBhdGguam9pbihfX2Rpcm5hbWUsIFwidmlld3NcIikpXG4gICAuc2V0KFwidmlldyBlbmdpbmVcIiwgXCJoYnNcIilcblxuICAgLy9Sb3RhcyBkYSBhcGxpY2HDp8Ojb1xuICAgLmdldChcIi9cIiwgcGFnZXMuaW5kZXgpXG4gICAuZ2V0KFwiL29ycGhhbmFnZVwiLCBwYWdlcy5vcnBoYW5hZ2UpXG4gICAuZ2V0KFwiL29ycGhhbmFnZXNcIiwgcGFnZXMub3JwaGFuYWdlcylcbiAgIC5nZXQoXCIvY3JlYXRlLW9ycGhhbmFnZVwiLCBwYWdlcy5jcmVhdGVPcnBoYW5lZ2UpO1xuXG4vL2xpZ2FyIG8gc2Vydmlkb3JcbnNlcnZlci5saXN0ZW4oNTUwMCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/server.js\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCI/MjJmZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJleHByZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });