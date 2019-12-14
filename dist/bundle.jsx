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
var OpenFolder_1 = __webpack_require__(1);
var opf = new OpenFolder_1["default"]();
opf.addFolderByName("material-water");
opf.open();
// alert(_.getActiveItem());
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
// const polyfill = new Polyfill();
// _.addAdj();
// var color = [1,1,1];
// var  name = "調整レイヤー";
// var n =  app.project.item(1).layers.addSolid(color,name,100,100,1,1);
// var comp = n.containingComp;
// n.outPoint = comp.duration;
// n.adjustmentLayer = true;
// n.source.width = comp.width;
// n.source.height = comp.height;
// n.source.pixelAspect = comp.pixelAspect;
// var color = [1,1,1];
// var  name = "調整レイヤー";
// app.project.item(1).addSolid(color,name,100,100,1,1);
// var proj = app.project;
// var comp = proj.items.addComp("name", 1920, 1080, 1.0, 30.0, 29.97);
// var distortionLayer = comp.layers.addSolid([0, 0, 0], 'Distortion', 1920, 1080, 1.0);
// const baseInfo = new BaseInfo();
// baseInfo.showData();
// const lf = new LoadFootage();
// var myComp = app.project.item(1);
// var mySolid = myComp.layers.addSolid([1.0,1.0,0], "my square", 50, 50, 1);
// var a = app.project.activeItem.selectedLayers;
// alert(a);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var CallCommand_1 = __webpack_require__(2);
var Folders_1 = __webpack_require__(3);
var OpenFolder = /** @class */ (function () {
    function OpenFolder() {
        this.paths = [];
    }
    OpenFolder.prototype.addFolderByName = function (folderName) {
        if (Folders_1.Folders[folderName] != null) {
            this.paths.push(Folders_1.Folders[folderName].path);
            return Folders_1.Folders[folderName].path;
        }
        return false;
    };
    OpenFolder.prototype.open = function () {
        for (var _i = 0, _a = this.paths; _i < _a.length; _i++) {
            var path = _a[_i];
            this.callCommand = new CallCommand_1["default"]("start " + path);
            this.callCommand.exec();
            return true;
        }
        return false;
    };
    return OpenFolder;
}());
exports["default"] = OpenFolder;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var CallCommand = /** @class */ (function () {
    function CallCommand(str) {
        this.commandStr = str;
    }
    CallCommand.prototype.exec = function () {
        system.callSystem("cmd.exe /c \"" + this.commandStr + " /t\"");
    };
    return CallCommand;
}());
exports["default"] = CallCommand;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.Folders = {
    "material-water": {
        path: "D:/googledrive/material/water_color/",
    },
    "material": {
        path: "D:/googledrive/material/",
    },
    "mateiral-gradation": {
        path: "D:/googledrive/material/gradation/"
    },
};


/***/ })
/******/ ]);