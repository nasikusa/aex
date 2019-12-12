/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var CreateWindow_1 = __webpack_require__(2);
// const createLayer = new CreateLayer();
// const ow = new OpenWeb();
// ow.setUrls([
//   "http://nasikusa.net/blend-monitoring",
// ]);
// ow.urls.push('https://www.youtube.com/watch?v=v0b7TUVz6lY');
// ow.open();
var cw = new CreateWindow_1["default"]();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var OpenWeb = /** @class */ (function () {
    function OpenWeb() {
        // alert('test');
        this.urls = [];
    }
    OpenWeb.prototype.setUrl = function (url) {
        this.urls.push(url);
    };
    OpenWeb.prototype.setUrls = function (urlArray) {
        for (var _i = 0, urlArray_1 = urlArray; _i < urlArray_1.length; _i++) {
            var url = urlArray_1[_i];
            this.urls.push(url);
        }
    };
    OpenWeb.prototype.setBlendMonitoring = function () {
        this.urls.push("http://nasikusa.net/blend-monitoring");
    };
    OpenWeb.prototype.getUrl = function (order) {
        if (this.urls[order] != null) {
            return this.urls[order];
        }
    };
    OpenWeb.prototype.getUrls = function () {
        return this.urls;
    };
    OpenWeb.prototype.removeAllUrl = function () {
        this.urls = [];
    };
    OpenWeb.prototype.open = function () {
        if (this.urls.length !== 0) {
            for (var i = 0; i < this.urls.length; i++) {
                system.callSystem("cmd.exe /c \"start " + this.urls[i] + " /t\"");
            }
        }
    };
    return OpenWeb;
}());
exports["default"] = OpenWeb;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var OpenWeb_1 = __webpack_require__(1);
var CreateWindow = /** @class */ (function () {
    function CreateWindow() {
        var wnd = new Window("palette", "Test Window", [0, 0, 250, 150]);
        var okBtn = wnd.add("button", [55, 100, 140, 135], "OK");
        var cancelBtn = wnd.add("button", [155, 100, 240, 135], "Cancel");
        wnd.center();
        wnd.show();
        okBtn.onClick = function () {
            var ow = new OpenWeb_1["default"]();
            ow.setUrl("https://www.youtube.com/watch?v=v0b7TUVz6lY");
            ow.open();
        };
        cancelBtn.onClick = function () {
            wnd.close();
        };
    }
    return CreateWindow;
}());
exports["default"] = CreateWindow;


/***/ })
/******/ ]);