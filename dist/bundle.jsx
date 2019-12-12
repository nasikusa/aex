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
var BaseInfo_1 = __webpack_require__(1);
var LoadFootage_1 = __webpack_require__(2);
// const createLayer = new CreateLayer();
// const ow = new OpenWeb();
// ow.setBlendMonitoring();
// ow.setUrl(URLs.unsplash);
// ow.open();
// ow.setUrls([
//   "http://nasikusa.net/blend-monitoring",
// ]);
// ow.urls.push('https://www.youtube.com/watch?v=v0b7TUVz6lY');
// ow.open();
// const cw = new CreateWindow();
// const cf: CreateFolder = new CreateFolder();
// cf.make();
// const loadTemplate = new LoadTemplate();
// loadTemplate.load();
var baseInfo = new BaseInfo_1["default"]();
// baseInfo.showData();
var lf = new LoadFootage_1["default"]();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var BaseInfo = /** @class */ (function () {
    function BaseInfo() {
        this.encoding = $.appEncoding;
        this.version = app.version;
        this.lang = app.isoLanguage;
        this.locale = $.locale;
        this.os = $.os;
        this.screen = $.screens;
    }
    BaseInfo.prototype.showData = function () {
        alert("version: " + this.version + "\n" +
            "lang: " + this.lang + "\n" +
            "os: " + this.os + "\n" +
            "locale: " + this.locale + "\n" +
            "encoding: " + this.encoding);
    };
    return BaseInfo;
}());
exports["default"] = BaseInfo;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var LoadFootage = /** @class */ (function () {
    function LoadFootage() {
        this.option = new ImportOptions();
        this.option.file = new File("D:/googledrive/render/temp/shadow/Image0001.png");
    }
    LoadFootage.prototype.load = function () {
        app.project.importFile(this.option);
    };
    return LoadFootage;
}());
exports["default"] = LoadFootage;


/***/ })
/******/ ]);