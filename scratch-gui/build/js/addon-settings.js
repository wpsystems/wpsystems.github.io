var GUI =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"addon-settings": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/playground/addon-settings.jsx","vendors~addon-settings~credits~editor~embed~fullscreen~player","addon-settings~editor~fullscreen~player","addon-settings~addons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/addons/settings/settings.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/addons/settings/settings.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Copyright (C) 2021 Thomas Weber\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with this program.  If not, see <https://www.gnu.org/licenses/>.\n */\n\n/* #E5F0FF */\n\n/* #E9F1FC */\n\n/* #D9E3F2 */\n\n/* 90% transparent version of motion-primary */\n\n/* #FFFFFF */\n\n/* 25% transparent version of ui-white */\n\n/* 25% transparent version of ui-white */\n\n/* 25% transparent version of ui-white */\n\n/* 15% transparent version of black */\n\n/* #575E75 */\n\n/* 35% transparent version of motion-primary */\n\n/* 15% transparent version of motion-primary */\n\n/* opt-in theme overrides */\n\n/* #FF661A */\n\n/* #E64D00 */\n\n/* #CF63CF */\n\n/* #BD42BD */\n\n/* #FFAB19 */\n\n/* #FF8C1A */\n\n/* #0FBD8C */\n\n/* #0FBD8C */\n\n/* #FF8C1A */\n\n/* #FFB366 */\n\n/* #FF8C1A */\n\n/* 35% transparent version of extensions-primary */\n\n/* opaque version of extensions-transparent, on white bg */\n\n/* lighter than motion-primary */\n\nbody {\n    background-color: white;\n    color: black;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    margin: 0;\n}\n\nbody[theme=\"dark\"] {\n    background-color: #222222;\n    color: white;\n}\n\na[href] {\n    color: #2a67eb;\n    text-decoration: underline;\n}\n\n[theme=\"dark\"] a[href] {\n    color: #6d9bff;\n}\n\na:active, a:focus {\n    outline: none;\n    box-shadow: 0 0 0 3px hsla(0, 100%, 65%, 0.35);\n}\n\n.settings_container_3vJ_s {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n}\n\n.settings_header_HXeeT {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    position: relative;\n    padding: 8px 20px;\n    background-color: #fcfcfc;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n[theme=\"dark\"] .settings_header_HXeeT {\n    background-color: #222222;\n}\n\n@media (max-width: 700px) {\n    .settings_header_HXeeT {\n        padding-left: 5px;\n        padding-right: 5px;\n    }\n}\n\n.settings_button_3Zf4L {\n    color: #000;\n    background: #efefef;\n    border: 1px solid #acacac;\n    padding: 8px 12px;\n    border-radius: 4px;\n    outline: none;\n    height: 32px;\n    font-family: inherit;\n    font-size: 14px;\n    transition: 0.25s ease;\n    transition-property: background;\n    display: flex;\n    align-items: center;\n}\n\n[theme=\"dark\"] .settings_button_3Zf4L {\n    color: #fff;\n    background: #222222;\n    border-color: #000;\n}\n\n.settings_button_3Zf4L:hover {\n    background: #aaaaaa;\n}\n\n[theme=\"dark\"] .settings_button_3Zf4L:hover {\n    background: #151515;\n}\n\n.settings_button_3Zf4L:active, .settings_button_3Zf4L:focus-within {\n    box-shadow: 0 0 0 3px hsla(0, 100%, 65%, 0.35);\n}\n\n.settings_search-container_14AR7 {\n    display: flex;\n    background-color: #f0f0f0;\n    color: #222;\n    border: 1px solid #cecece;\n    border-radius: 4px;\n}\n\n.settings_search-container_14AR7:focus-within {\n    box-shadow: 0 0 0 3px hsla(0, 100%, 65%, 0.35);\n}\n\n.settings_search-input_1OS9U {\n    color: inherit;\n    width: 150px;\n    height: 16px;\n    padding: 10px 15px;\n    border: none;\n    outline: none;\n    background-color: transparent;\n    font-size: 14px;\n}\n\n/* legacy edge */\n\n.settings_search-input_1OS9U::-ms-clear {\n    display: none;\n}\n\n.settings_search-button_1PO4j {\n    height: 36px;\n    width: 36px;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    background-color: transparent;\n    background-image: url(" + escape(__webpack_require__(/*! ./search-black.svg */ "./src/addons/settings/search-black.svg")) + ");\n    background-repeat: no-repeat;\n    background-position: center;\n}\n\n[theme=\"dark\"] .settings_search-container_14AR7 {\n    color: white;\n    background-color: #111111;\n    border-color: #222222;\n}\n\n[theme=\"dark\"] .settings_search-button_1PO4j {\n    background-image: url(" + escape(__webpack_require__(/*! ./search-white.svg */ "./src/addons/settings/search-white.svg")) + ");\n}\n\n.settings_search-input_1OS9U:not([value=\"\"]) ~ .settings_search-button_1PO4j {\n    background-image: url(" + escape(__webpack_require__(/*! ./clear-black.svg */ "./src/addons/settings/clear-black.svg")) + ") !important;\n}\n\n[theme=\"dark\"] .settings_search-input_1OS9U:not([value=\"\"]) ~ .settings_search-button_1PO4j {\n    background-image: url(" + escape(__webpack_require__(/*! ./clear-white.svg */ "./src/addons/settings/clear-white.svg")) + ") !important;\n}\n\n.settings_feedback-button-outer_3BvjT {\n    background: #f0f0f0;\n    border: 1px solid #cecece;\n    color: #333 !important;\n    height: 36px;\n    box-sizing: border-box;\n    border-radius: 4px;\n    padding: 0 12px;\n    margin-left: 10px;\n    font-size: 12px;\n    outline: none;\n    display: flex;\n    align-items: center;\n    text-decoration: none !important;\n}\n\n[theme=\"dark\"] .settings_feedback-button-outer_3BvjT {\n    background-color: white;\n    border-color: white;\n}\n\n.settings_feedback-button-outer_3BvjT:active, .settings_feedback-button-outer_3BvjT:focus-within {\n    box-shadow: 0 0 0 3px hsla(0, 100%, 65%, 0.35);\n}\n\n.settings_feedback-button-inner_1iiHA {\n    text-decoration: none;\n    font-weight: bold;\n    text-align: center;\n}\n\n.settings_addons_WnqmP {\n    overflow-y: auto;\n    overflow-x: hidden;\n    padding: 10px 20px;\n    height: 100%;\n}\n\n@media (max-width: 700px) {\n    .settings_addons_WnqmP {\n        padding-left: 5px;\n        padding-right: 5px;\n    }\n}\n\n.settings_addon_2zhVU {\n    background: #f7f7f7;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n    border: 1px solid #cfcfcf;\n    border-radius: 5px;\n    margin: 10px 0 10px 0;\n    font-size: 14px;\n}\n\n.settings_addon-dirty_TnKY5 {\n    background: #ffeedf;\n}\n\n[theme=\"dark\"] .settings_addon_2zhVU {\n    background-color: #2a2a2a;\n    border-color: #333;\n}\n\n[theme=\"dark\"] .settings_addon-dirty_TnKY5 {\n    background: rgb(39, 50, 53);\n}\n\n.settings_addon-header_2QwGV {\n    padding: 0 10px;\n    height: 50px;\n    display: flex;\n    align-items: center;\n}\n\n.settings_extension-image_2jXeB {\n    height: 16px;\n    width: 16px;\n    margin-right: 8px;\n}\n\n.settings_addon-title_1bgsn {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    white-space: nowrap;\n}\n\n.settings_addon-title-text_Q9wTc {\n\n}\n\n.settings_inline-description_1zx5M {\n    margin-left: 10px;\n    color: gray;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.settings_addon-operations_29Iap {\n    margin-left: auto;\n    padding-left: 4px;\n    display: flex;\n    align-items: center;\n}\n\n.settings_reset-button_1rOZQ {\n    display: flex;\n    margin-right: 8px;\n    border-radius: 4px;\n    cursor: pointer;\n    border: none;\n    background-color: transparent;\n}\n\n.settings_reset-button_1rOZQ:hover {\n    background: rgba(0, 0, 0, 0.05);\n}\n\n.settings_reset-button_1rOZQ:active, .settings_reset-button_1rOZQ:focus-within {\n    outline: none;\n    box-shadow: 0 0 0 3px hsla(0, 100%, 65%, 0.35);\n}\n\n.settings_reset-button-image_2T0au {\n    padding: 1px 0;\n    height: 16px;\n    width: 16px;\n}\n\n[theme=\"dark\"] .settings_reset-button_1rOZQ:hover {\n    background: rgba(255, 255, 255, 0.05);\n}\n\n.settings_switch_3uQIK {\n    display: block;\n    background: #111;\n    width: 40px;\n    height: 20px;\n    border: none;\n    border-radius: 10px;\n    position: relative;\n    cursor: pointer;\n    transition: 0.25s ease;\n    transition-property: background;\n}\n\n.settings_switch_3uQIK[state=\"on\"] {\n    background: hsla(0, 100%, 65%, 1);\n}\n\n.settings_switch_3uQIK::before {\n    content: \"\";\n    position: absolute;\n    display: block;\n    width: 10px;\n    height: 10px;\n    background: #fff;\n    border-radius: 5px;\n    top: 5px;\n    left: 5px;\n    transition: 0.25s ease;\n    transition-property: background, left;\n}\n\n[theme=\"dark\"] .settings_switch_3uQIK::before {\n    background: #aaa;\n}\n\n.settings_switch_3uQIK[state=\"on\"]::before {\n    background: #fff;\n    left: 25px;\n}\n\n.settings_switch_3uQIK:active, .settings_switch_3uQIK:focus-within {\n    outline: none;\n    box-shadow: 0 0 0 3px hsla(0, 100%, 65%, 0.35);\n}\n\n.settings_tag-container_2c2bM {\n    display: flex;\n    align-items: center;\n}\n\n.settings_tag_7BYRi {\n    border-radius: 4px;\n    padding: 2px 5px;\n    margin-left: 10px;\n    border-bottom: 2px solid #111;\n    white-space: nowrap;\n}\n\n.settings_tag-recommended_2NobT {\n    color: white;\n    background-color: #175ef8;\n    border-color: #0e44b8;\n}\n\n.settings_tag-theme_2OxTA {\n    color: black;\n    background-color: #9ad4cf;\n    border-color: #628f8c;\n}\n\n.settings_tag-beta_3l83I {\n    color: white;\n    background-color: #fd662b;\n    border-color: #d84a12;\n}\n\n.settings_tag-easter-egg_9f6db {\n    color: black;\n    background-color: #b9f38d;\n    border-color: #8fce5e;\n}\n\n.settings_tag-new_2UTQQ {\n    color: white;\n    background: #b117f8;\n    border-color: #6f0073;\n}\n\n.settings_tag-turbowarp_3o8UW {\n    color: white;\n    background: hsla(0, 100%, 65%, 1);\n    border-color: rgb(185, 38, 38);\n}\n\n@media (max-width: 550px) {\n    .settings_tag_7BYRi:not(.settings_tag-beta_3l83I) {\n        display: none;\n    }\n}\n\n.settings_addon-details_34Bpn {\n    padding: 0 20px;\n    margin-bottom: 10px;\n    color: #111;\n}\n\n[theme=\"dark\"] .settings_addon-details_34Bpn {\n    color: #ddd;\n}\n\n.settings_credit-container_2f-MG {\n\n}\n\n.settings_credit-title_2ndRT {\n    padding-right: 5px;\n}\n\n.settings_credit_d1cAU {\n\n}\n\n.settings_description_1SX5a {\n\n}\n\n.settings_notice-container_23O_T {\n\n}\n\n.settings_notice_1Yx9M {\n    color: black;\n    padding: 10px;\n    border-radius: 5px;\n    font-weight: bold;\n    margin: 10px 0;\n    display: flex;\n    align-items: center;\n    background: rgba(154, 212, 207, 0.7);\n}\n\n.settings_notice-icon_2Y3NN {\n    height: 16px;\n    width: 16px;\n    margin-right: 10px;\n}\n\n.settings_setting-container_2hi13 {\n    margin-top: 10px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n\n.settings_setting_qydbq {\n    margin: 10px;\n    margin-right: 30px;\n    min-height: 35px;\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.settings_setting-label_kOihj {\n    font-weight: bold;\n    text-transform: uppercase;\n    color: #555;\n    font-size: 12px;\n    margin-right: 10px;\n}\n\n[theme=\"dark\"] .settings_setting-label_kOihj {\n    color: #aaa;\n}\n\n.settings_setting_qydbq input {\n    color: #000;\n    background: #efefef;\n    border: 1px solid #acacac;\n    padding: 8px 12px;\n    border-radius: 4px;\n    transition: 0.25s ease;\n    transition-property: background;\n}\n\n[theme=\"dark\"] .settings_setting_qydbq input {\n    color: #fff;\n    background: #222222;\n    border: 1px solid #000;\n}\n\n.settings_setting_qydbq input:focus, .settings_setting_qydbq input:active {\n    outline: none;\n    border-color: hsla(0, 100%, 65%, 1);\n    box-shadow: 0 0 0 3px hsla(0, 100%, 65%, 0.35);\n}\n\n.settings_setting_qydbq input[type=\"checkbox\"] {\n    height: 20px;\n    width: 20px;\n    padding: 0;\n    appearance: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    background-color: white;\n    background-size: 20px 20px;\n    background-position: center center;\n}\n\n.settings_setting_qydbq input[type=\"checkbox\"]:checked {\n    border-color: hsla(0, 100%, 65%, 1);\n    background-color: hsla(0, 100%, 65%, 1);\n    background-image: url(" + escape(__webpack_require__(/*! ./check.svg */ "./src/addons/settings/check.svg")) + ");\n}\n\n.settings_setting_qydbq input[type=\"checkbox\"]:hover:not(:focus) {\n    border-color: hsla(0, 60%, 50%, 1);\n}\n\n.settings_setting_qydbq input[type=\"checkbox\"]:checked:hover {\n    border-color: hsla(0, 60%, 50%, 1);\n}\n\n.settings_setting_qydbq input[type=\"number\"] {\n    border-radius: 20px;\n    font-size: 14px;\n}\n\n.settings_setting_qydbq input[type=\"color\"] {\n    height: 30px;\n    width: 100px;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    outline: none;\n    border: 1px solid transparent;\n    border-radius: 4px 0px 0px 4px;\n}\n\n.settings_reset-color-button_378LC {\n    border-radius: 0 4px 4px 0px;\n    box-sizing: border-box;\n    height: 30px;\n}\n\n.settings_select_3gkhn {\n    display: flex;\n}\n\n.settings_select-option_1kghH {\n    cursor: pointer;\n    padding: 10px;\n    margin: 0;\n    background: transparent;\n    border: none;\n    background: #f0f0f0;\n    color: #000;\n    border: 1px solid #aaa;\n    border-right-width: 0;\n    transition: 0.25s ease;\n    transition-property: color, background, border;\n}\n\n[theme=\"dark\"] .settings_select-option_1kghH {\n    color: #fff;\n    background: #222222;\n    border-color: #000000;\n}\n\n.settings_select-option_1kghH:first-child {\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\n\n.settings_select-option_1kghH:last-child {\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n    border-right-width: 1px;\n}\n\n.settings_select-option_1kghH.settings_selected_216ME {\n    color: white;\n    background: hsla(0, 100%, 65%, 1);\n}\n\n.settings_select-option_1kghH:active, .settings_select-option_1kghH:focus-within {\n    outline: none;\n    box-shadow: 0 0 0 3px hsla(0, 100%, 65%, 0.35);\n}\n\n.settings_presets_VTsxF {\n    width: 100%;\n}\n\n.settings_preset-button_2AjAU {\n    margin-right: 10px;\n}\n\n.settings_footer_1gjVj {\n    color: #444;\n}\n\n[theme=\"dark\"] .settings_footer_1gjVj {\n    color: #aaa;\n}\n\n.settings_unsupported-container_3HTJ- {\n    margin-bottom: 10px;\n}\n\n.settings_unsupported-addon_SHirC {\n    padding-left: 5px;\n}\n\n.settings_version_3uqkC {\n    margin-bottom: 10px;\n}\n\n.settings_footer-buttons_1qdL9 {\n    margin-bottom: 10px;\n    display: flex;\n}\n\n.settings_footer-buttons_1qdL9 > .settings_button_3Zf4L {\n    margin-right: 10px;\n}\n\n.settings_reset-all-button_1sZUk {\n\n}\n\n.settings_export-button_pOzkO {\n\n}\n\n.settings_import-button_nCk8B {\n\n}\n\n.settings_no-results_21WJ5 {\n    text-align: center;\n    font-style: italic;\n}\n\n.settings_dirty-outer_1v5px {\n    display: flex;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    width: calc(100% - 20px);\n    margin-left: 10px;\n    z-index: 10;\n    justify-content: center;\n    animation: settings_dirty-appear_rQ_S_ 0.2s ease;\n    pointer-events: none;\n    margin-top: 2px;\n}\n\n.settings_dirty-inner_2AjRe {\n    padding: 8px;\n    background: #ffeedf;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n    border: 1px solid #cfcfcf;\n    border-radius: 4px;\n    pointer-events: auto;\n    display: flex;\n    align-items: center;\n    text-align: center;\n}\n\n[theme=\"dark\"] .settings_dirty-inner_2AjRe {\n    background: rgb(39, 50, 53);\n    border-color: #222;\n}\n\n.settings_dirty-button_48luC {\n    margin-left: 6px;\n}\n\n@keyframes settings_dirty-appear_rQ_S_ {\n    from {\n        transform: translateY(-100%);\n    }\n    to {\n        transform: translateY(0);\n    }\n}\n", ""]);

// exports
exports.locals = {
	"container": "settings_container_3vJ_s",
	"header": "settings_header_HXeeT",
	"button": "settings_button_3Zf4L",
	"search-container": "settings_search-container_14AR7",
	"searchContainer": "settings_search-container_14AR7",
	"search-input": "settings_search-input_1OS9U",
	"searchInput": "settings_search-input_1OS9U",
	"search-button": "settings_search-button_1PO4j",
	"searchButton": "settings_search-button_1PO4j",
	"feedback-button-outer": "settings_feedback-button-outer_3BvjT",
	"feedbackButtonOuter": "settings_feedback-button-outer_3BvjT",
	"feedback-button-inner": "settings_feedback-button-inner_1iiHA",
	"feedbackButtonInner": "settings_feedback-button-inner_1iiHA",
	"addons": "settings_addons_WnqmP",
	"addon": "settings_addon_2zhVU",
	"addon-dirty": "settings_addon-dirty_TnKY5",
	"addonDirty": "settings_addon-dirty_TnKY5",
	"addon-header": "settings_addon-header_2QwGV",
	"addonHeader": "settings_addon-header_2QwGV",
	"extension-image": "settings_extension-image_2jXeB",
	"extensionImage": "settings_extension-image_2jXeB",
	"addon-title": "settings_addon-title_1bgsn",
	"addonTitle": "settings_addon-title_1bgsn",
	"addon-title-text": "settings_addon-title-text_Q9wTc",
	"addonTitleText": "settings_addon-title-text_Q9wTc",
	"inline-description": "settings_inline-description_1zx5M",
	"inlineDescription": "settings_inline-description_1zx5M",
	"addon-operations": "settings_addon-operations_29Iap",
	"addonOperations": "settings_addon-operations_29Iap",
	"reset-button": "settings_reset-button_1rOZQ",
	"resetButton": "settings_reset-button_1rOZQ",
	"reset-button-image": "settings_reset-button-image_2T0au",
	"resetButtonImage": "settings_reset-button-image_2T0au",
	"switch": "settings_switch_3uQIK",
	"tag-container": "settings_tag-container_2c2bM",
	"tagContainer": "settings_tag-container_2c2bM",
	"tag": "settings_tag_7BYRi",
	"tag-recommended": "settings_tag-recommended_2NobT",
	"tagRecommended": "settings_tag-recommended_2NobT",
	"tag-theme": "settings_tag-theme_2OxTA",
	"tagTheme": "settings_tag-theme_2OxTA",
	"tag-beta": "settings_tag-beta_3l83I",
	"tagBeta": "settings_tag-beta_3l83I",
	"tag-easter-egg": "settings_tag-easter-egg_9f6db",
	"tagEasterEgg": "settings_tag-easter-egg_9f6db",
	"tag-new": "settings_tag-new_2UTQQ",
	"tagNew": "settings_tag-new_2UTQQ",
	"tag-turbowarp": "settings_tag-turbowarp_3o8UW",
	"tagTurbowarp": "settings_tag-turbowarp_3o8UW",
	"addon-details": "settings_addon-details_34Bpn",
	"addonDetails": "settings_addon-details_34Bpn",
	"credit-container": "settings_credit-container_2f-MG",
	"creditContainer": "settings_credit-container_2f-MG",
	"credit-title": "settings_credit-title_2ndRT",
	"creditTitle": "settings_credit-title_2ndRT",
	"credit": "settings_credit_d1cAU",
	"description": "settings_description_1SX5a",
	"notice-container": "settings_notice-container_23O_T",
	"noticeContainer": "settings_notice-container_23O_T",
	"notice": "settings_notice_1Yx9M",
	"notice-icon": "settings_notice-icon_2Y3NN",
	"noticeIcon": "settings_notice-icon_2Y3NN",
	"setting-container": "settings_setting-container_2hi13",
	"settingContainer": "settings_setting-container_2hi13",
	"setting": "settings_setting_qydbq",
	"setting-label": "settings_setting-label_kOihj",
	"settingLabel": "settings_setting-label_kOihj",
	"reset-color-button": "settings_reset-color-button_378LC",
	"resetColorButton": "settings_reset-color-button_378LC",
	"select": "settings_select_3gkhn",
	"select-option": "settings_select-option_1kghH",
	"selectOption": "settings_select-option_1kghH",
	"selected": "settings_selected_216ME",
	"presets": "settings_presets_VTsxF",
	"preset-button": "settings_preset-button_2AjAU",
	"presetButton": "settings_preset-button_2AjAU",
	"footer": "settings_footer_1gjVj",
	"unsupported-container": "settings_unsupported-container_3HTJ-",
	"unsupportedContainer": "settings_unsupported-container_3HTJ-",
	"unsupported-addon": "settings_unsupported-addon_SHirC",
	"unsupportedAddon": "settings_unsupported-addon_SHirC",
	"version": "settings_version_3uqkC",
	"footer-buttons": "settings_footer-buttons_1qdL9",
	"footerButtons": "settings_footer-buttons_1qdL9",
	"reset-all-button": "settings_reset-all-button_1sZUk",
	"resetAllButton": "settings_reset-all-button_1sZUk",
	"export-button": "settings_export-button_pOzkO",
	"exportButton": "settings_export-button_pOzkO",
	"import-button": "settings_import-button_nCk8B",
	"importButton": "settings_import-button_nCk8B",
	"no-results": "settings_no-results_21WJ5",
	"noResults": "settings_no-results_21WJ5",
	"dirty-outer": "settings_dirty-outer_1v5px",
	"dirtyOuter": "settings_dirty-outer_1v5px",
	"dirty-appear": "settings_dirty-appear_rQ_S_",
	"dirtyAppear": "settings_dirty-appear_rQ_S_",
	"dirty-inner": "settings_dirty-inner_2AjRe",
	"dirtyInner": "settings_dirty-inner_2AjRe",
	"dirty-button": "settings_dirty-button_48luC",
	"dirtyButton": "settings_dirty-button_48luC"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/lib/normalize.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/lib/normalize.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}\nbody{margin:0}\narticle,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}\naudio,canvas,progress,video{display:inline-block;vertical-align:baseline}\naudio:not([controls]){display:none;height:0}\n[hidden],template{display:none}\na{background-color:transparent}\na:active,a:hover{outline:0}\nabbr[title]{border-bottom:1px dotted}\nb,strong{font-weight:bold}\ndfn{font-style:italic}\nh1{font-size:2em;margin:.67em 0}\nmark{background:#ff0;color:#000}\nsmall{font-size:80%}\nsub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\nsup{top:-0.5em}\nsub{bottom:-0.25em}\nimg{border:0}\nsvg:not(:root){overflow:hidden}\nfigure{margin:1em 40px}\nhr{box-sizing:content-box;height:0}\npre{overflow:auto}\ncode,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}\nbutton,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}\nbutton{overflow:visible}\nbutton,select{text-transform:none}\nbutton,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}\nbutton[disabled],html input[disabled]{cursor:default}\nbutton::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}\ninput{line-height:normal}\ninput[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}\ninput[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}\ninput[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}\ninput[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}\nfieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}\nlegend{border:0;padding:0}\ntextarea{overflow:auto}\noptgroup{font-weight:bold}\ntable{border-collapse:collapse;border-spacing:0}\ntd,th{padding:0}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/decode-uri-component/index.js":
/*!****************************************************!*\
  !*** ./node_modules/decode-uri-component/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/strict-uri-encode/index.js");
var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var decodeComponent = __webpack_require__(/*! decode-uri-component */ "./node_modules/decode-uri-component/index.js");

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

function extract(str) {
	var queryStart = str.indexOf('?');
	if (queryStart === -1) {
		return '';
	}
	return str.slice(queryStart + 1);
}

function parse(str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^[?#&]/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeComponent(val);

		formatter(decodeComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	if (opts.sort === false) {
		opts.sort = function () {};
	}

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort(opts.sort).map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

exports.parseUrl = function (str, opts) {
	return {
		url: str.split('?')[0] || '',
		query: parse(extract(str), opts)
	};
};


/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),

/***/ "./src/addons/settings/brush-black.svg":
/*!*********************************************!*\
  !*** ./src/addons/settings/brush-black.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/969aaca3d7c0ff67b664b24c2652fb12.svg";

/***/ }),

/***/ "./src/addons/settings/brush-white.svg":
/*!*********************************************!*\
  !*** ./src/addons/settings/brush-white.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/3956a1bd066bf0462fe415217d8d94ad.svg";

/***/ }),

/***/ "./src/addons/settings/check.svg":
/*!***************************************!*\
  !*** ./src/addons/settings/check.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/70f8bee49a78f131d8dc87658809a684.svg";

/***/ }),

/***/ "./src/addons/settings/clear-black.svg":
/*!*********************************************!*\
  !*** ./src/addons/settings/clear-black.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/e997e36ade408c75ef4424b928e10846.svg";

/***/ }),

/***/ "./src/addons/settings/clear-white.svg":
/*!*********************************************!*\
  !*** ./src/addons/settings/clear-white.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/2d9e73df10d3ae15f84c2c00b1b299ef.svg";

/***/ }),

/***/ "./src/addons/settings/extension-black.svg":
/*!*************************************************!*\
  !*** ./src/addons/settings/extension-black.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/6f52bcc0310181641bac6fec51c69e13.svg";

/***/ }),

/***/ "./src/addons/settings/extension-white.svg":
/*!*************************************************!*\
  !*** ./src/addons/settings/extension-white.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/2351800413d0cf1fde9084d12cea71c3.svg";

/***/ }),

/***/ "./src/addons/settings/info.svg":
/*!**************************************!*\
  !*** ./src/addons/settings/info.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/b987c9e2c37b17bd7c97f1fa47257d7e.svg";

/***/ }),

/***/ "./src/addons/settings/l10n/en.json":
/*!******************************************!*\
  !*** ./src/addons/settings/l10n/en.json ***!
  \******************************************/
/*! exports provided: tw.addons.settings.title, tw.addons.settings.credits, tw.addons.settings.reset, tw.addons.settings.resetAll, tw.addons.settings.confirmResetAll, tw.addons.settings.dirty, tw.addons.settings.dirtyButton, tw.addons.settings.presets, tw.addons.settings.tags.recommended, tw.addons.settings.tags.theme, tw.addons.settings.tags.beta, tw.addons.settings.tags.new, tw.addons.settings.search, tw.addons.settings.noResults, tw.addons.settings.export, tw.addons.settings.import, tw.addons.settings.unsupported, tw.addons.settings.addonFeedback, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"tw.addons.settings.title\":\"Addon Settings\",\"tw.addons.settings.credits\":\"Credits:\",\"tw.addons.settings.reset\":\"Reset\",\"tw.addons.settings.resetAll\":\"Reset all\",\"tw.addons.settings.confirmResetAll\":\"Are you sure you want to reset all addon settings to their default values?\",\"tw.addons.settings.dirty\":\"Reload TurboWarp to apply settings.\",\"tw.addons.settings.dirtyButton\":\"Reload now\",\"tw.addons.settings.presets\":\"Presets\",\"tw.addons.settings.tags.recommended\":\"Recommended\",\"tw.addons.settings.tags.theme\":\"Theme\",\"tw.addons.settings.tags.beta\":\"Beta\",\"tw.addons.settings.tags.new\":\"New!\",\"tw.addons.settings.search\":\"Search\",\"tw.addons.settings.noResults\":\"No results.\",\"tw.addons.settings.export\":\"Export settings\",\"tw.addons.settings.import\":\"Import settings\",\"tw.addons.settings.unsupported\":\"Some addons are not available in this browser:\",\"tw.addons.settings.addonFeedback\":\"Addon Feedback\"}");

/***/ }),

/***/ "./src/addons/settings/l10n/translations.json":
/*!****************************************************!*\
  !*** ./src/addons/settings/l10n/translations.json ***!
  \****************************************************/
/*! exports provided: de, es, fr, it, ja, ko, nb, nl, pl, pt, ro, ru, sl, tr, zh-cn, zh-tw, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"de\":{\"tw.addons.settings.addonFeedback\":\"Feedback für Addons\",\"tw.addons.settings.confirmResetAll\":\"Bist du sicher, dass du alle Addoneinstellungen auf ihre Standardwerte zurücksetzen willst?\",\"tw.addons.settings.credits\":\"Danksagungen:\",\"tw.addons.settings.dirty\":\"Lade TurboWarp neu, um die Einstellungen anzuwenden.\",\"tw.addons.settings.dirtyButton\":\"Jetzt neu laden\",\"tw.addons.settings.export\":\"Einstellungen Exportieren\",\"tw.addons.settings.import\":\"Einstellungen Importieren\",\"tw.addons.settings.noResults\":\"Keine Suchergebnisse.\",\"tw.addons.settings.presets\":\"Voreinstellungen\",\"tw.addons.settings.reset\":\"Zurücksetzen\",\"tw.addons.settings.resetAll\":\"Alle zurücksetzen\",\"tw.addons.settings.search\":\"Suchen\",\"tw.addons.settings.tags.beta\":\"Beta\",\"tw.addons.settings.tags.new\":\"Neu!\",\"tw.addons.settings.tags.recommended\":\"Empfohlen\",\"tw.addons.settings.tags.theme\":\"Design\",\"tw.addons.settings.title\":\"Addon-Einstellungen\",\"tw.addons.settings.unsupported\":\"Manche Addons sind in diesem Browser nicht verfügbar:\"},\"es\":{\"tw.addons.settings.addonFeedback\":\"Enviar comentarios sobre addons\",\"tw.addons.settings.confirmResetAll\":\"¿Está seguro de que quiere reiniciar todos los addons a sus valores predeterminados?\",\"tw.addons.settings.credits\":\"Créditos:\",\"tw.addons.settings.dirty\":\"Recargue TurboWarp para aplicar los cambios.\",\"tw.addons.settings.dirtyButton\":\"Recargar ahora\",\"tw.addons.settings.export\":\"Exportar ajustes\",\"tw.addons.settings.import\":\"Importar ajustes\",\"tw.addons.settings.noResults\":\"Sin resultados.\",\"tw.addons.settings.presets\":\"Presets\",\"tw.addons.settings.reset\":\"Reiniciar\",\"tw.addons.settings.resetAll\":\"Reiniciar todos\",\"tw.addons.settings.search\":\"Buscar\",\"tw.addons.settings.tags.beta\":\"Beta\",\"tw.addons.settings.tags.new\":\"¡Nuevo!\",\"tw.addons.settings.tags.recommended\":\"Recomendado\",\"tw.addons.settings.tags.theme\":\"Tema\",\"tw.addons.settings.title\":\"Ajustes de Addons\",\"tw.addons.settings.unsupported\":\"Algunos addons no están disponibles en este navegador:\"},\"fr\":{\"tw.addons.settings.addonFeedback\":\"Commentaires sur le module complémentaire\",\"tw.addons.settings.confirmResetAll\":\"Êtes-vous sûr de vouloir réinitialiser tous les paramètres des addons à leurs valeurs par défaut ?\",\"tw.addons.settings.credits\":\"Crédits :\",\"tw.addons.settings.dirty\":\"Rechargez TurboWarp pour appliquer les paramètres.\",\"tw.addons.settings.dirtyButton\":\"Recharger maintenant\",\"tw.addons.settings.export\":\"Exporter les paramètres\",\"tw.addons.settings.import\":\"Importer les paramètres\",\"tw.addons.settings.noResults\":\"Aucuns résultats\",\"tw.addons.settings.presets\":\"Préconfigurations\",\"tw.addons.settings.reset\":\"Réinitialiser\",\"tw.addons.settings.resetAll\":\"Tout réinitialiser\",\"tw.addons.settings.search\":\"Rechercher\",\"tw.addons.settings.tags.beta\":\"Bêta\",\"tw.addons.settings.tags.new\":\"Nouveau !\",\"tw.addons.settings.tags.recommended\":\"Recommandé\",\"tw.addons.settings.tags.theme\":\"Thème\",\"tw.addons.settings.title\":\"Paramètres des addons\",\"tw.addons.settings.unsupported\":\"Certains addons ne sont pas disponibles sur ce navigateur \"},\"it\":{\"tw.addons.settings.addonFeedback\":\"Feedback sull'Addon\",\"tw.addons.settings.confirmResetAll\":\"Sei sicuro di voler riportare tutte le impostazioni dell'addon al loro valore iniziale?\",\"tw.addons.settings.credits\":\"Autore/i:\",\"tw.addons.settings.dirty\":\"Ricarica TurboWarp per applicare le nuove impostazioni.\",\"tw.addons.settings.dirtyButton\":\"Ricarica ora\",\"tw.addons.settings.export\":\"Esporta le impostazioni\",\"tw.addons.settings.import\":\"Importa le impostazioni\",\"tw.addons.settings.noResults\":\"Nessun risultato.\",\"tw.addons.settings.presets\":\"Valori iniziali\",\"tw.addons.settings.reset\":\"Resetta\",\"tw.addons.settings.resetAll\":\"Resetta tutto\",\"tw.addons.settings.search\":\"Cerca\",\"tw.addons.settings.tags.beta\":\"Beta\",\"tw.addons.settings.tags.new\":\"Nuovo!\",\"tw.addons.settings.tags.recommended\":\"Raccomandato\",\"tw.addons.settings.tags.theme\":\"Tema\",\"tw.addons.settings.title\":\"Impostazioni Addon\",\"tw.addons.settings.unsupported\":\"Alcuni addon non sono disponibili in questo browser:\"},\"ja\":{\"tw.addons.settings.addonFeedback\":\"アドオンのフィードバック\",\"tw.addons.settings.confirmResetAll\":\"アドオンの設定を削除し、デフォルトに戻します。よろしいですか？\",\"tw.addons.settings.credits\":\"クレジット:\",\"tw.addons.settings.dirty\":\"再読み込みをしてアドオンの効果を反映する。\",\"tw.addons.settings.dirtyButton\":\"すぐに再読み込みする\",\"tw.addons.settings.export\":\"設定を保存する\",\"tw.addons.settings.import\":\"設定を読み込む\",\"tw.addons.settings.noResults\":\"検索条件に一致する結果はありません。\",\"tw.addons.settings.presets\":\"プリセット\",\"tw.addons.settings.reset\":\"リセット\",\"tw.addons.settings.resetAll\":\"全てリセットする\",\"tw.addons.settings.search\":\"検索\",\"tw.addons.settings.tags.beta\":\"ベータ版\",\"tw.addons.settings.tags.new\":\"新機能!\",\"tw.addons.settings.tags.recommended\":\"おすすめ\",\"tw.addons.settings.tags.theme\":\"テーマ\",\"tw.addons.settings.title\":\"アドオン設定\",\"tw.addons.settings.unsupported\":\"いくつかのアドオンがお使いのブラウザに対応していません:\"},\"ko\":{\"tw.addons.settings.addonFeedback\":\"애드온에 문의하기\",\"tw.addons.settings.confirmResetAll\":\"정말로 애드온 설정을 기본값으로 초기화하시겠습니까?\",\"tw.addons.settings.credits\":\"크레딧:\",\"tw.addons.settings.dirty\":\"설정을 적용하기 위해 TurboWarp를 재시작합니다.\",\"tw.addons.settings.dirtyButton\":\"재시작하기\",\"tw.addons.settings.export\":\"설정 내보내기\",\"tw.addons.settings.import\":\"설정 가져오기\",\"tw.addons.settings.noResults\":\"결과가 없습니다.\",\"tw.addons.settings.presets\":\"프리셋\",\"tw.addons.settings.reset\":\"초기화하기\",\"tw.addons.settings.resetAll\":\"모두 초기화하기\",\"tw.addons.settings.search\":\"검색\",\"tw.addons.settings.tags.beta\":\"베타\",\"tw.addons.settings.tags.new\":\"새로운 기능\",\"tw.addons.settings.tags.recommended\":\"추천\",\"tw.addons.settings.tags.theme\":\"테마\",\"tw.addons.settings.title\":\"애드온 설정\",\"tw.addons.settings.unsupported\":\"일부 애드온은 다음 브라우저에서는 사용하실 수 없습니다:\"},\"nb\":{\"tw.addons.settings.addonFeedback\":\"Utvidelse tilbakemelding\",\"tw.addons.settings.confirmResetAll\":\"Er du sikkert at du vil tilbakestill alle utvidelser?\",\"tw.addons.settings.credits\":\"Fra:\",\"tw.addons.settings.dirty\":\"Oppdater siden nå til å oppdater innstillinger.\",\"tw.addons.settings.dirtyButton\":\"Oppdater siden nå\",\"tw.addons.settings.export\":\"Eksportinnstillinger\",\"tw.addons.settings.import\":\"Importinnstillinger\",\"tw.addons.settings.noResults\":\"Ingen resultater.\",\"tw.addons.settings.reset\":\"Tilbakestill\",\"tw.addons.settings.resetAll\":\"Tilbakestill alt\",\"tw.addons.settings.search\":\"Søk\",\"tw.addons.settings.tags.beta\":\"Beta\",\"tw.addons.settings.tags.new\":\"Ny!\",\"tw.addons.settings.tags.recommended\":\"Anbefalt\",\"tw.addons.settings.tags.theme\":\"Tema\",\"tw.addons.settings.title\":\"Innstillinger for utvidelser\",\"tw.addons.settings.unsupported\":\"Noen utvidelser er ikke tilgjengelig på dette nettleser.\"},\"nl\":{\"tw.addons.settings.addonFeedback\":\"Addon Feedback\",\"tw.addons.settings.confirmResetAll\":\"Ben je zeker dat je alle addon instellingen wil resetten naar hun standaard waarden?\",\"tw.addons.settings.credits\":\"Dank aan:\",\"tw.addons.settings.dirty\":\"Herlaad TurboWarp om de instellingen te accepteren.\",\"tw.addons.settings.dirtyButton\":\"Herlaad nu\",\"tw.addons.settings.export\":\"Exporteer instellingen\",\"tw.addons.settings.import\":\"Importeer instellingen\",\"tw.addons.settings.noResults\":\"Geen resultaten.\",\"tw.addons.settings.presets\":\"Voorinstellingen\",\"tw.addons.settings.reset\":\"Reset\",\"tw.addons.settings.resetAll\":\"Reset alles\",\"tw.addons.settings.search\":\"Zoek\",\"tw.addons.settings.tags.beta\":\"Beta\",\"tw.addons.settings.tags.new\":\"Nieuw!\",\"tw.addons.settings.tags.recommended\":\"Aanbevolen\",\"tw.addons.settings.tags.theme\":\"Thema\",\"tw.addons.settings.title\":\"Addons Instellingen\",\"tw.addons.settings.unsupported\":\"Sommige addons zijn niet beschikbaar in deze browser.\"},\"pl\":{\"tw.addons.settings.addonFeedback\":\"Opinia o dodatkach\",\"tw.addons.settings.confirmResetAll\":\"Jesteś pewien, że chcesz zresetować wszystkie dodatki do ich domyślnych wartości?\",\"tw.addons.settings.credits\":\"Kredyty:\",\"tw.addons.settings.dirty\":\"Odśwież TurboWarp, aby zastosować ustawienia.\",\"tw.addons.settings.dirtyButton\":\"Odśwież teraz\",\"tw.addons.settings.export\":\"Eksportuj ustawienia\",\"tw.addons.settings.import\":\"Importuj ustawienia\",\"tw.addons.settings.noResults\":\"Brak wyników.\",\"tw.addons.settings.presets\":\"Ustawienia wstępne\",\"tw.addons.settings.reset\":\"Resetuj\",\"tw.addons.settings.resetAll\":\"Resetuj wszystko\",\"tw.addons.settings.search\":\"Szukaj\",\"tw.addons.settings.tags.beta\":\"Beta\",\"tw.addons.settings.tags.new\":\"Nowość!\",\"tw.addons.settings.tags.recommended\":\"Polecane\",\"tw.addons.settings.tags.theme\":\"Motyw\",\"tw.addons.settings.title\":\"Ustawienia Dodatków\",\"tw.addons.settings.unsupported\":\"Niektóre dodatki nie są dostępne w tej przeglądarce:\"},\"pt\":{\"tw.addons.settings.addonFeedback\":\"Dar Feedback sobre Addons\",\"tw.addons.settings.confirmResetAll\":\"Tem certeza que quer resetar as configurações de todos os addons aos seus valores padrão?\",\"tw.addons.settings.credits\":\"Créditos:\",\"tw.addons.settings.dirty\":\"Recarregue o TurboWarp para aplicar as opções.\",\"tw.addons.settings.dirtyButton\":\"Recarregar agora\",\"tw.addons.settings.export\":\"Exportar configuração\",\"tw.addons.settings.import\":\"Importar configuração\",\"tw.addons.settings.noResults\":\"Sem resultados.\",\"tw.addons.settings.presets\":\"Predefinições\",\"tw.addons.settings.reset\":\"Resetar\",\"tw.addons.settings.resetAll\":\"Resetar tudo\",\"tw.addons.settings.search\":\"Buscar\",\"tw.addons.settings.tags.beta\":\"Beta\",\"tw.addons.settings.tags.new\":\"Novo!\",\"tw.addons.settings.tags.recommended\":\"Recomendado\",\"tw.addons.settings.tags.theme\":\"Tema\",\"tw.addons.settings.title\":\"Configurações de Addon\",\"tw.addons.settings.unsupported\":\"Alguns addons não estão disponíveis neste navegador:\"},\"ro\":{\"tw.addons.settings.addonFeedback\":\"Spune-ți Părerea despre Extensii\",\"tw.addons.settings.confirmResetAll\":\"Ești sigur că vrei să resetezi toate setările extensiilor la valorile lor implicite?\",\"tw.addons.settings.credits\":\"Credite:\",\"tw.addons.settings.dirty\":\"Reîncarcă TurboWarp pentru a aplica setările.\",\"tw.addons.settings.dirtyButton\":\"Reîncarcă acum\",\"tw.addons.settings.export\":\"Exportă setările\",\"tw.addons.settings.import\":\"Importă setările\",\"tw.addons.settings.noResults\":\"Niciun rezultat.\",\"tw.addons.settings.presets\":\"Presetări\",\"tw.addons.settings.reset\":\"Resetează\",\"tw.addons.settings.resetAll\":\"Resetează toate\",\"tw.addons.settings.search\":\"Caută\",\"tw.addons.settings.tags.beta\":\"Beta\",\"tw.addons.settings.tags.recommended\":\"Recomandat\",\"tw.addons.settings.title\":\"Setările Addon-urilor\",\"tw.addons.settings.unsupported\":\"Unele extensii nu sunt disponibile în acest browser:\"},\"ru\":{\"tw.addons.settings.credits\":\"Благодарности:\",\"tw.addons.settings.dirty\":\"Перезагрузить TurboWarp, чтобы применить настройки.\",\"tw.addons.settings.dirtyButton\":\"Перезагрузить сейчас\",\"tw.addons.settings.export\":\"Экспорт настроек\",\"tw.addons.settings.import\":\"Импорт настроек\",\"tw.addons.settings.noResults\":\"Нет результатов.\",\"tw.addons.settings.reset\":\"Сбросить\",\"tw.addons.settings.resetAll\":\"Сбросить всё\",\"tw.addons.settings.search\":\"Поиск\",\"tw.addons.settings.tags.beta\":\"Бета\",\"tw.addons.settings.tags.new\":\"Новое!\",\"tw.addons.settings.tags.recommended\":\"Рекомендованно\",\"tw.addons.settings.tags.theme\":\"Тема\",\"tw.addons.settings.title\":\"Настройки дополнений.\",\"tw.addons.settings.unsupported\":\"Некоторые дополнения не доступны в этом браузере:\"},\"sl\":{\"tw.addons.settings.addonFeedback\":\"Povratne informacije o dodatkih\",\"tw.addons.settings.confirmResetAll\":\"Ste prepričani, da želite ponastaviti vse nastavitve dodatkov?\",\"tw.addons.settings.credits\":\"Hvala:\",\"tw.addons.settings.dirty\":\"Znova naložite TurboWarp, da uporabite spremenjene nastavitve.\",\"tw.addons.settings.dirtyButton\":\"Znova naloži zdaj\",\"tw.addons.settings.export\":\"Izvozi nastavitve\",\"tw.addons.settings.import\":\"Uvozi nastavitve\",\"tw.addons.settings.noResults\":\"Ni rezultatov.\",\"tw.addons.settings.presets\":\"Prednastavitve\",\"tw.addons.settings.reset\":\"Ponastavi\",\"tw.addons.settings.resetAll\":\"Ponastavi vse\",\"tw.addons.settings.search\":\"Iskanje\",\"tw.addons.settings.tags.beta\":\"Beta\",\"tw.addons.settings.tags.new\":\"Novo!\",\"tw.addons.settings.tags.recommended\":\"Priporočeno\",\"tw.addons.settings.tags.theme\":\"Tema\",\"tw.addons.settings.title\":\"Nastavitve dodatkov\",\"tw.addons.settings.unsupported\":\"Nekateri dodatki v tem brskalniku niso na voljo:\"},\"tr\":{\"tw.addons.settings.addonFeedback\":\"Eklenti geribildirim\",\"tw.addons.settings.confirmResetAll\":\"Sen bütün eklenti ayarlarını sıfarlamaya eminmisin?\",\"tw.addons.settings.credits\":\"Krediler:\",\"tw.addons.settings.dirty\":\"Ayarı uygulamak için Turbowarp'u yeniden açın.\",\"tw.addons.settings.dirtyButton\":\"Şimdi yeniden yükle\",\"tw.addons.settings.export\":\"Dışarıya aktarmak ayarları\",\"tw.addons.settings.import\":\"İçeri aktarmak ayarları\",\"tw.addons.settings.noResults\":\"Sonuçlar yok.\",\"tw.addons.settings.presets\":\"Varsayılan ayarları\",\"tw.addons.settings.reset\":\"Sıfırla\",\"tw.addons.settings.resetAll\":\"Her şeyi sıfırla\",\"tw.addons.settings.search\":\"Arama\",\"tw.addons.settings.tags.beta\":\"Beta\",\"tw.addons.settings.tags.new\":\"Yeni!\",\"tw.addons.settings.tags.recommended\":\"Önerildi\",\"tw.addons.settings.tags.theme\":\"Tema\",\"tw.addons.settings.title\":\"Eklenti Ayarlar\",\"tw.addons.settings.unsupported\":\"Bazi içerikler bu web tarayacıda kullanamıyoruz:\"},\"zh-cn\":{\"tw.addons.settings.addonFeedback\":\"插件反馈\",\"tw.addons.settings.confirmResetAll\":\"你确定要将所有加载项设置重置为其默认值吗？\",\"tw.addons.settings.credits\":\"作者：\",\"tw.addons.settings.dirty\":\"重新加载TurboWarp以生效设置。\",\"tw.addons.settings.dirtyButton\":\"立即重新加载\",\"tw.addons.settings.export\":\"导出设置\",\"tw.addons.settings.import\":\"导入设置\",\"tw.addons.settings.noResults\":\"无结果。\",\"tw.addons.settings.presets\":\"预设\",\"tw.addons.settings.reset\":\"重置\",\"tw.addons.settings.resetAll\":\"全部重置\",\"tw.addons.settings.search\":\"搜索\",\"tw.addons.settings.tags.beta\":\"测试版\",\"tw.addons.settings.tags.new\":\"新内容！\",\"tw.addons.settings.tags.recommended\":\"推荐\",\"tw.addons.settings.tags.theme\":\"主题\",\"tw.addons.settings.title\":\"插件设置\",\"tw.addons.settings.unsupported\":\"某些插件在此浏览器中不可用：\"},\"zh-tw\":{\"tw.addons.settings.addonFeedback\":\"擴充功能回饋\",\"tw.addons.settings.confirmResetAll\":\"你確定要重設所有擴充功能至初始設定？\",\"tw.addons.settings.credits\":\"感謝：\",\"tw.addons.settings.dirty\":\"你需要重新載入 TurboWarp 以應用設定。\",\"tw.addons.settings.dirtyButton\":\"重新載入\",\"tw.addons.settings.export\":\"匯出設定\",\"tw.addons.settings.import\":\"匯入設定\",\"tw.addons.settings.noResults\":\"沒有相符的結果。\",\"tw.addons.settings.presets\":\"預設\",\"tw.addons.settings.reset\":\"重置\",\"tw.addons.settings.resetAll\":\"全部重置\",\"tw.addons.settings.search\":\"搜尋……\",\"tw.addons.settings.tags.beta\":\"測試版\",\"tw.addons.settings.tags.new\":\"新！\",\"tw.addons.settings.tags.recommended\":\"推薦\",\"tw.addons.settings.tags.theme\":\"主題\",\"tw.addons.settings.title\":\"擴充功能設定\",\"tw.addons.settings.unsupported\":\"這些擴充功能在這個瀏覽器不可用：\"}}");

/***/ }),

/***/ "./src/addons/settings/search-black.svg":
/*!**********************************************!*\
  !*** ./src/addons/settings/search-black.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/6fb602003b4d9e845e84f77129346396.svg";

/***/ }),

/***/ "./src/addons/settings/search-white.svg":
/*!**********************************************!*\
  !*** ./src/addons/settings/search-white.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/57f600d0aecac12f47e2e337a0809d68.svg";

/***/ }),

/***/ "./src/addons/settings/search.js":
/*!***************************************!*\
  !*** ./src/addons/settings/search.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copyright (C) 2021 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/['"()\-+,./[\]]/g, ' ').trim();

const splitToWords = text => normalize(text).split(' ').filter(i => i);

const parseTexts = texts => {
  const result = [];

  for (const {
    score,
    text
  } of texts) {
    result.push({
      score,
      words: splitToWords(text)
    });
  }

  return result;
};

class Search {
  constructor(texts) {
    this.items = texts.map(parseTexts);
  }

  search(query) {
    const terms = splitToWords(query);
    const result = [];

    const processItem = item => {
      let totalScore = 0;

      for (const term of terms) {
        let highestScoreForTerm = 0;

        for (const group of item) {
          for (const word of group.words) {
            const wordIndex = word.indexOf(term);

            if (wordIndex !== -1) {
              let multiplier;

              if (wordIndex === 0) {
                multiplier = 1.5;
              } else {
                multiplier = 1;
              }

              const itemScore = group.score * multiplier;

              if (itemScore > highestScoreForTerm) {
                highestScoreForTerm = itemScore;
              }
            }
          }
        }

        if (highestScoreForTerm === 0) {
          return;
        }

        totalScore += highestScoreForTerm;
      }

      return totalScore;
    };

    for (let i = 0; i < this.items.length; i++) {
      const score = processItem(this.items[i]);

      if (score > 0) {
        result.push({
          index: i,
          score
        });
      }
    }

    result.sort((a, b) => b.score - a.score);
    return result;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/addons/settings/settings.css":
/*!******************************************!*\
  !*** ./src/addons/settings/settings.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./settings.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/addons/settings/settings.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/addons/settings/settings.jsx":
/*!******************************************!*\
  !*** ./src/addons/settings/settings.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search */ "./src/addons/settings/search.js");
/* harmony import */ var _addon_manifests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../addon-manifests */ "./src/addons/addon-manifests.js");
/* harmony import */ var _get_addon_translations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../get-addon-translations */ "./src/addons/get-addon-translations.js");
/* harmony import */ var _l10n_en_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./l10n/en.json */ "./src/addons/settings/l10n/en.json");
var _l10n_en_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./l10n/en.json */ "./src/addons/settings/l10n/en.json", 1);
/* harmony import */ var _l10n_translations_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./l10n/translations.json */ "./src/addons/settings/l10n/translations.json");
var _l10n_translations_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./l10n/translations.json */ "./src/addons/settings/l10n/translations.json", 1);
/* harmony import */ var _upstream_meta_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../upstream-meta.json */ "./src/addons/upstream-meta.json");
var _upstream_meta_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../upstream-meta.json */ "./src/addons/upstream-meta.json", 1);
/* harmony import */ var _lib_detect_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/detect-locale */ "./src/lib/detect-locale.js");
/* harmony import */ var _lib_tw_theme_hoc_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/tw-theme-hoc.jsx */ "./src/lib/tw-theme-hoc.jsx");
/* harmony import */ var _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../settings-store-singleton */ "./src/addons/settings-store-singleton.js");
/* harmony import */ var _channels__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../channels */ "./src/addons/channels.js");
/* harmony import */ var _extension_white_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./extension-white.svg */ "./src/addons/settings/extension-white.svg");
/* harmony import */ var _extension_white_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_extension_white_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _extension_black_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./extension-black.svg */ "./src/addons/settings/extension-black.svg");
/* harmony import */ var _extension_black_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_extension_black_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _brush_white_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./brush-white.svg */ "./src/addons/settings/brush-white.svg");
/* harmony import */ var _brush_white_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_brush_white_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _brush_black_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./brush-black.svg */ "./src/addons/settings/brush-black.svg");
/* harmony import */ var _brush_black_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_brush_black_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _undo_white_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./undo-white.svg */ "./src/addons/settings/undo-white.svg");
/* harmony import */ var _undo_white_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_undo_white_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _undo_black_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./undo-black.svg */ "./src/addons/settings/undo-black.svg");
/* harmony import */ var _undo_black_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_undo_black_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _info_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./info.svg */ "./src/addons/settings/info.svg");
/* harmony import */ var _info_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_info_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _settings_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./settings.css */ "./src/addons/settings/settings.css");
/* harmony import */ var _settings_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_settings_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../polyfill */ "./src/addons/polyfill.js");
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_polyfill__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _lib_normalize_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../lib/normalize.css */ "./src/lib/normalize.css");
/* harmony import */ var _lib_normalize_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_lib_normalize_css__WEBPACK_IMPORTED_MODULE_22__);
const _excluded = ["onChange", "value"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (C) 2021 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */























/* eslint-disable no-alert */

/* eslint-disable no-console */

/* eslint-disable react/no-multi-comp */

/* eslint-disable react/jsx-no-bind */

const locale = Object(_lib_detect_locale__WEBPACK_IMPORTED_MODULE_9__["detectLocale"])(_upstream_meta_json__WEBPACK_IMPORTED_MODULE_8__.languages);
const addonTranslations = Object(_get_addon_translations__WEBPACK_IMPORTED_MODULE_5__["default"])(locale);
const settingsTranslations = _l10n_en_json__WEBPACK_IMPORTED_MODULE_6__;
document.documentElement.lang = locale;

if (locale !== 'en') {
  const messages = _l10n_translations_json__WEBPACK_IMPORTED_MODULE_7__[locale] || _l10n_translations_json__WEBPACK_IMPORTED_MODULE_7__[locale.split('-')[0]];

  if (messages) {
    Object.assign(settingsTranslations, messages);
  }
}

document.title = "".concat(settingsTranslations['tw.addons.settings.title'], " - TurboWarp");
const theme = Object(_lib_tw_theme_hoc_jsx__WEBPACK_IMPORTED_MODULE_10__["getInitialDarkMode"])() ? 'dark' : 'light';
document.body.setAttribute('theme', theme);

let _throttleTimeout;

const postThrottledSettingsChange = store => {
  if (_throttleTimeout) {
    clearTimeout(_throttleTimeout);
  }

  _throttleTimeout = setTimeout(() => {
    _channels__WEBPACK_IMPORTED_MODULE_12__["default"].changeChannel.postMessage({
      version: _upstream_meta_json__WEBPACK_IMPORTED_MODULE_8__.commit,
      store
    });
  }, 100);
};

const sortAddons = () => {
  const sortedOrder = Object.keys(_addon_manifests__WEBPACK_IMPORTED_MODULE_4__["default"]).sort((aId, bId) => {
    const aNew = _addon_manifests__WEBPACK_IMPORTED_MODULE_4__["default"][aId].tags.includes('new');
    const bNew = _addon_manifests__WEBPACK_IMPORTED_MODULE_4__["default"][bId].tags.includes('new');
    if (aNew && !bNew) return -1;
    if (bNew && !aNew) return 1;
    return 0;
  });
  const result = {};

  for (const key of sortedOrder) {
    result[key] = _addon_manifests__WEBPACK_IMPORTED_MODULE_4__["default"][key];
  }

  return result;
};

const CreditList = ({
  credits
}) => credits.map((author, index) => {
  const isLast = index === credits.length - 1;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.credit,
    key: index
  }, author.link ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: author.link,
    target: "_blank",
    rel: "noreferrer"
  }, author.name) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, author.name), isLast ? null : ', ');
});

CreditList.propTypes = {
  credits: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    link: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }))
};

const Switch = _ref => {
  let {
    onChange,
    value
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({
    className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.switch,
    state: value ? 'on' : 'off',
    role: "checkbox",
    "aria-checked": value ? 'true' : 'false',
    tabIndex: "0",
    onClick: () => onChange(!value)
  }, props));
};

Switch.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

const Select = ({
  onChange,
  value,
  values
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.select
}, values.map(potentialValue => {
  const id = potentialValue.id;
  const selected = id === value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    key: id,
    onClick: () => onChange(id),
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.selectOption, {
      [_settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.selected]: selected
    })
  }, potentialValue.name);
}));

Select.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }))
};

const Tags = ({
  tags
}) => tags.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.tagContainer
}, tags.includes('recommended') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.tag, _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.tagRecommended)
}, settingsTranslations['tw.addons.settings.tags.recommended']), tags.includes('theme') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.tag, _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.tagTheme)
}, settingsTranslations['tw.addons.settings.tags.theme']), tags.includes('beta') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.tag, _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.tagBeta)
}, settingsTranslations['tw.addons.settings.tags.beta']), tags.includes('new') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.tag, _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.tagNew)
}, settingsTranslations['tw.addons.settings.tags.new']), tags.includes('turbowarp') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.tag, _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.tagTurbowarp)
}, 'TurboWarp'));

Tags.propTypes = {
  tags: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)
};

class BufferedInput extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleFlush = this.handleFlush.bind(this);
    this.state = {
      value: null
    };
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleFlush(e);
      e.target.blur();
    }
  }

  handleFlush(e) {
    if (this.state.value === null) {
      return;
    }

    if (this.props.type === 'number') {
      let value = +this.state.value;
      const min = e.target.min;
      const max = e.target.max;
      const step = e.target.step;
      if (min !== '') value = Math.max(min, value);
      if (max !== '') value = Math.min(max, value);
      if (step === '1') value = Math.round(value);
      this.props.onChange(value);
    } else {
      this.props.onChange(this.state.value);
    }

    this.setState({
      value: null
    });
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, this.props, {
      value: this.state.value === null ? this.props.value : this.state.value,
      onBlur: this.handleFlush,
      onChange: this.handleChange,
      onKeyPress: this.handleKeyPress
    }));
  }

}

BufferedInput.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};

const Setting = ({
  addonId,
  setting,
  value
}) => {
  const settingId = setting.id;
  const settingName = addonTranslations["".concat(addonId, "/@settings-name-").concat(settingId)] || setting.name;
  const uniqueId = "setting/".concat(addonId, "/").concat(settingId);
  const label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: uniqueId,
    className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.settingLabel
  }, settingName);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.setting
  }, setting.type === 'boolean' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: uniqueId,
    type: "checkbox",
    checked: value,
    onChange: e => _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].setAddonSetting(addonId, settingId, e.target.checked)
  })), setting.type === 'integer' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BufferedInput, {
    id: uniqueId,
    type: "number",
    min: setting.min,
    max: setting.max,
    step: "1",
    value: value,
    onChange: newValue => _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].setAddonSetting(addonId, settingId, newValue)
  })), setting.type === 'color' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: uniqueId,
    type: "color",
    value: value,
    onChange: e => _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].setAddonSetting(addonId, settingId, e.target.value)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.button, _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.resetColorButton),
    onClick: () => _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].setAddonSetting(addonId, settingId, setting.default)
  }, settingsTranslations['tw.addons.settings.reset'])), setting.type === 'select' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Select, {
    value: value,
    values: setting.potentialValues.map(({
      id,
      name
    }) => ({
      id,
      name: addonTranslations["".concat(addonId, "/@settings-select-").concat(settingId, "-").concat(id)] || name
    })),
    onChange: v => _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].setAddonSetting(addonId, settingId, v),
    setting: setting
  })));
};

Setting.propTypes = {
  addonId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  setting: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    default: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]),
    potentialValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    }))
  }),
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};

const Notice = ({
  addonId,
  notice
}) => {
  const noticeId = notice.id;
  const text = addonTranslations["".concat(addonId, "/@info-").concat(noticeId)] || notice.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.notice,
    type: notice.type
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.noticeIcon,
    src: _info_svg__WEBPACK_IMPORTED_MODULE_19___default.a,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, text));
};

Notice.propTypes = {
  addonId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  notice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })
};

const Presets = ({
  addonId,
  presets
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.setting, _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.presets)
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.settingLabel
}, settingsTranslations['tw.addons.settings.presets']), presets.map(preset => {
  const presetId = preset.id;
  const name = addonTranslations["".concat(addonId, "/@preset-name-").concat(presetId)] || preset.name;
  const description = addonTranslations["".concat(addonId, "/@preset-description-").concat(presetId)] || preset.description;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    key: presetId,
    title: description,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.button, _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.presetButton),
    onClick: () => _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].applyAddonPreset(addonId, presetId)
  }, name);
}));

Presets.propTypes = {
  addonId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  presets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  }))
};

const Addon = ({
  id,
  settings,
  manifest
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.addon, {
    [_settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.addonDirty]: settings.dirty
  })
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.addonHeader
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
  htmlFor: id,
  id: "".concat(id, "-label"),
  className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.addonTitle
}, manifest.tags.includes('theme') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.extensionImage,
  src: theme === 'dark' ? _brush_white_svg__WEBPACK_IMPORTED_MODULE_15___default.a : _brush_black_svg__WEBPACK_IMPORTED_MODULE_16___default.a,
  alt: ""
}) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.extensionImage,
  src: theme === 'dark' ? _extension_white_svg__WEBPACK_IMPORTED_MODULE_13___default.a : _extension_black_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
  alt: ""
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.addonTitleText
}, addonTranslations["".concat(id, "/@name")] || manifest.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tags, {
  tags: manifest.tags
}), !settings.enabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.inlineDescription
}, addonTranslations["".concat(id, "/@description")] || manifest.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.addonOperations
}, settings.enabled && manifest.settings && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.resetButton,
  onClick: () => _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].resetAddon(id),
  title: settingsTranslations['tw.addons.settings.reset']
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: theme === 'dark' ? _undo_white_svg__WEBPACK_IMPORTED_MODULE_17___default.a : _undo_black_svg__WEBPACK_IMPORTED_MODULE_18___default.a,
  className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.resetButtonImage,
  alt: settingsTranslations['tw.addons.settings.reset']
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Switch, {
  id: id,
  "aria-labelledby": "".concat(id, "-label"),
  value: settings.enabled,
  onChange: value => _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].setAddonEnabled(id, value)
}))), settings.enabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.addonDetails
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.description
}, addonTranslations["".concat(id, "/@description")] || manifest.description), manifest.credits && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.creditContainer
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.creditTitle
}, settingsTranslations['tw.addons.settings.credits']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CreditList, {
  credits: manifest.credits
})), manifest.info && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.noticeContainer
}, manifest.info.map(info => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Notice, {
  key: info.id,
  addonId: id,
  notice: info
}))), manifest.settings && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.settingContainer
}, manifest.settings.map(setting => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Setting, {
  key: setting.id,
  addonId: id,
  setting: setting,
  value: settings[setting.id]
})), manifest.presets && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Presets, {
  addonId: id,
  presets: manifest.presets
}))));

Addon.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  settings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    enabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    dirty: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
  }),
  manifest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    credits: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
    info: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })),
    settings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })),
    presets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
    tags: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)
  })
};

const Dirty = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.dirtyOuter
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.dirtyInner
}, settingsTranslations['tw.addons.settings.dirty'], props.onReloadNow && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.button, _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.dirtyButton),
  onClick: props.onReloadNow
}, settingsTranslations['tw.addons.settings.dirtyButton'])));

Dirty.propTypes = {
  onReloadNow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

const UnsupportedAddons = ({
  addons: addonList
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.unsupportedContainer
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.unsupportedText
}, settingsTranslations['tw.addons.settings.unsupported']), addonList.map(({
  id,
  manifest
}, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  key: id,
  className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.unsupportedAddon
}, addonTranslations["".concat(id, "/@name")] || manifest.name, index !== addonList.length - 1 && ', ')));

UnsupportedAddons.propTypes = {
  addons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    manifest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })
  }))
};

const addonToSearchItem = ({
  id,
  manifest
}) => {
  const texts = new Set();

  const addText = (score, text) => {
    if (text) {
      texts.add({
        score,
        text
      });
    }
  };

  addText(1, id);
  addText(1, manifest.name);
  addText(1, addonTranslations["".concat(id, "/@name")]);
  addText(0.5, manifest.description);
  addText(0.5, addonTranslations["".concat(id, "/@description")]);

  if (manifest.settings) {
    for (const setting of manifest.settings) {
      addText(0.25, setting.name);
      addText(0.25, addonTranslations["".concat(id, "/@settings-name-").concat(setting.id)]);
    }
  }

  if (manifest.presets) {
    for (const preset of manifest.presets) {
      addText(0.1, preset.name);
      addText(0.1, addonTranslations["".concat(id, "/@preset-name-").concat(preset.id)]);
      addText(0.1, preset.description);
      addText(0.1, addonTranslations["".concat(id, "/@preset-description-").concat(preset.id)]);
    }
  }

  for (const tag of manifest.tags) {
    const key = "tw.addons.settings.tags.".concat(tag);

    if (settingsTranslations[key]) {
      addText(0.25, settingsTranslations[key]);
    }
  }

  if (manifest.info) {
    for (const info of manifest.info) {
      addText(0.25, info.text);
      addText(0.25, addonTranslations["".concat(id, "/@info-").concat(info.id)]);
    }
  }

  return texts;
};

class AddonList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.search = new _search__WEBPACK_IMPORTED_MODULE_3__["default"](this.props.addons.map(addonToSearchItem));
  }

  render() {
    let addons;

    if (this.props.search) {
      addons = this.search.search(this.props.search).map(({
        index
      }) => this.props.addons[index]);
    } else {
      addons = this.props.addons;
    }

    if (addons.length === 0) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.noResults
      }, settingsTranslations['tw.addons.settings.noResults']);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, addons.map(({
      id,
      manifest,
      state
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Addon, {
      key: id,
      id: id,
      settings: state,
      manifest: manifest
    })));
  }

}

AddonList.propTypes = {
  addons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}).isRequired,
    manifest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}).isRequired
  })).isRequired,
  search: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

class AddonSettingsComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.handleSettingStoreChanged = this.handleSettingStoreChanged.bind(this);
    this.handleReloadNow = this.handleReloadNow.bind(this);
    this.handleResetAll = this.handleResetAll.bind(this);
    this.handleExport = this.handleExport.bind(this);
    this.handleImport = this.handleImport.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClickSearchButton = this.handleClickSearchButton.bind(this);
    this.searchRef = this.searchRef.bind(this);
    this.searchBar = null;
    this.state = {
      dirty: false,
      search: ''
    };

    for (const [id, manifest] of Object.entries(this.props.addons)) {
      const enabled = _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].getAddonEnabled(id);
      const addonState = {
        enabled: enabled,
        dirty: false
      };

      if (manifest.settings) {
        for (const setting of manifest.settings) {
          addonState[setting.id] = _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].getAddonSetting(id, setting.id);
        }
      }

      this.state[id] = addonState;
    }
  }

  componentDidMount() {
    _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].addEventListener('setting-changed', this.handleSettingStoreChanged);
    document.body.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].removeEventListener('setting-changed', this.handleSettingStoreChanged);
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }

  handleSettingStoreChanged(e) {
    const {
      addonId,
      settingId,
      value
    } = e.detail; // If channels are unavailable, every change requires reload.

    const reloadRequired = e.detail.reloadRequired || !_channels__WEBPACK_IMPORTED_MODULE_12__["default"].changeChannel;
    this.setState(state => {
      const newState = {
        [addonId]: _objectSpread(_objectSpread({}, state[addonId]), {}, {
          [settingId]: value
        })
      };

      if (reloadRequired) {
        newState[addonId].dirty = true;
        newState.dirty = true;
      }

      return newState;
    });

    if (!reloadRequired) {
      postThrottledSettingsChange(_settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].store);
    }
  }

  handleReloadNow() {
    // Value posted does not matter
    _channels__WEBPACK_IMPORTED_MODULE_12__["default"].reloadChannel.postMessage(0);
    this.setState({
      dirty: false
    });

    for (const addonId of Object.keys(_addon_manifests__WEBPACK_IMPORTED_MODULE_4__["default"])) {
      if (this.state[addonId].dirty) {
        this.setState(state => ({
          [addonId]: _objectSpread(_objectSpread({}, state[addonId]), {}, {
            dirty: false
          })
        }));
      }
    }
  }

  handleResetAll() {
    if (confirm(settingsTranslations['tw.addons.settings.confirmResetAll'])) {
      _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].resetAllAddons();
      this.setState({
        search: ''
      });
    }
  }

  handleExport() {
    const exportedData = _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].export({
      theme
    });
    this.props.onExportSettings(exportedData);
  }

  handleImport() {
    const fileSelector = document.createElement('input');
    fileSelector.type = 'file';
    fileSelector.accept = '.json';
    document.body.appendChild(fileSelector);
    fileSelector.click();
    document.body.removeChild(fileSelector);
    fileSelector.addEventListener('change', async () => {
      const file = fileSelector.files[0];

      if (!file) {
        return;
      }

      try {
        const text = await file.text();
        const data = JSON.parse(text);
        _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].import(data);
        this.setState({
          search: ''
        });
      } catch (e) {
        console.error(e);
        alert(e);
      }
    });
  }

  handleSearch(e) {
    const value = e.target.value;
    this.setState({
      search: value
    });
  }

  handleClickSearchButton() {
    this.setState({
      search: ''
    });
    this.searchBar.focus();
  }

  searchRef(searchBar) {
    this.searchBar = searchBar;
  }

  handleKeyDown(e) {
    const key = e.key;

    if (key.length === 1 && key !== ' ' && e.target === document.body && !(e.ctrlKey || e.metaKey || e.altKey)) {
      this.searchBar.focus();
    }

    if (key === 'f' && (e.ctrlKey || e.metaKey)) {
      this.searchBar.focus(); // TODO: disabling the builtin ctrl+f seems like a rude thing to do, consider only doing this in electron?

      e.preventDefault();
    }
  }

  render() {
    const addonState = Object.entries(this.props.addons).map(([id, manifest]) => ({
      id,
      manifest,
      state: this.state[id]
    }));
    const unsupported = Object.entries(this.props.unsupportedAddons).map(([id, manifest]) => ({
      id,
      manifest
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.container
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.header
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.searchContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.searchInput,
      value: this.state.search,
      onChange: this.handleSearch,
      placeholder: settingsTranslations['tw.addons.settings.search'],
      "aria-label": settingsTranslations['tw.addons.settings.search'],
      ref: this.searchRef,
      spellCheck: "false",
      autoFocus: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.searchButton,
      onClick: this.handleClickSearchButton
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://scratch.mit.edu/users/World_Languages/#comments",
      target: "_blank",
      rel: "noreferrer",
      className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.feedbackButtonOuter
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.feedbackButtonInner
    }, settingsTranslations['tw.addons.settings.addonFeedback'])), this.state.dirty && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dirty, {
      onReloadNow: _channels__WEBPACK_IMPORTED_MODULE_12__["default"].reloadChannel ? this.handleReloadNow : null
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.addons
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AddonList, {
      addons: addonState,
      search: this.state.search
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.footerButtons
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.button, _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.resetAllButton),
      onClick: this.handleResetAll
    }, settingsTranslations['tw.addons.settings.resetAll']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.button, _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.exportButton),
      onClick: this.handleExport
    }, settingsTranslations['tw.addons.settings.export']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.button, _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.importButton),
      onClick: this.handleImport
    }, settingsTranslations['tw.addons.settings.import'])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.footer
    }, unsupported.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UnsupportedAddons, {
      addons: unsupported
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_20___default.a.version
    }, "v".concat(_upstream_meta_json__WEBPACK_IMPORTED_MODULE_8__.version, " (").concat(_upstream_meta_json__WEBPACK_IMPORTED_MODULE_8__.commit, ")")))));
  }

}

AddonSettingsComponent.propTypes = {
  addons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
  unsupportedAddons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
  onExportSettings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
AddonSettingsComponent.defaultProps = {
  addons: sortAddons(),
  unsupportedAddons: _addon_manifests__WEBPACK_IMPORTED_MODULE_4__["unsupportedAddons"]
};
/* harmony default export */ __webpack_exports__["default"] = (AddonSettingsComponent);

/***/ }),

/***/ "./src/addons/settings/undo-black.svg":
/*!********************************************!*\
  !*** ./src/addons/settings/undo-black.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/1640b6d968e0a0e13bc3c309a616deaa.svg";

/***/ }),

/***/ "./src/addons/settings/undo-white.svg":
/*!********************************************!*\
  !*** ./src/addons/settings/undo-white.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/e138ee31dcce38e83e0f9855229c57b2.svg";

/***/ }),

/***/ "./src/lib/detect-locale.js":
/*!**********************************!*\
  !*** ./src/lib/detect-locale.js ***!
  \**********************************/
/*! exports provided: LANGUAGE_KEY, detectLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_KEY", function() { return LANGUAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectLocale", function() { return detectLocale; });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @fileoverview
 * Utility function to detect locale from the browser setting or paramenter on the URL.
 */
 // tw: read language from localStorage

const LANGUAGE_KEY = 'tw:language';
/**
 * look for language setting in the browser. Check against supported locales.
 * If there's a parameter in the URL, override the browser setting
 * @param {Array.string} supportedLocales An array of supported locale codes.
 * @return {string} the preferred locale
 */

const detectLocale = supportedLocales => {
  // tw: read language from localStorage
  try {
    const storedLanguage = localStorage.getItem(LANGUAGE_KEY);

    if (storedLanguage && supportedLocales.includes(storedLanguage)) {
      return storedLanguage;
    }
  } catch (e) {
    /* ignore */
  }

  let locale = 'en'; // default

  let browserLocale = window.navigator.userLanguage || window.navigator.language;
  browserLocale = browserLocale.toLowerCase(); // try to set locale from browserLocale

  if (supportedLocales.includes(browserLocale)) {
    locale = browserLocale;
  } else {
    browserLocale = browserLocale.split('-')[0];

    if (supportedLocales.includes(browserLocale)) {
      locale = browserLocale;
    }
  }

  const queryParams = query_string__WEBPACK_IMPORTED_MODULE_0___default.a.parse(location.search); // Flatten potential arrays and remove falsy values

  const potentialLocales = [].concat(queryParams.locale, queryParams.lang).filter(l => l);

  if (!potentialLocales.length) {
    return locale;
  }

  const urlLocale = potentialLocales[0].toLowerCase();

  if (supportedLocales.includes(urlLocale)) {
    return urlLocale;
  }

  return locale;
};



/***/ }),

/***/ "./src/lib/download-blob.js":
/*!**********************************!*\
  !*** ./src/lib/download-blob.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((filename, blob) => {
  const downloadLink = document.createElement('a');
  document.body.appendChild(downloadLink); // Use special ms version if available to get it working on Edge.

  if (navigator.msSaveOrOpenBlob) {
    navigator.msSaveOrOpenBlob(blob, filename);
    return;
  }

  if ('download' in HTMLAnchorElement.prototype) {
    const url = window.URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = filename;
    downloadLink.type = blob.type;
    downloadLink.click(); // remove the link after a timeout to prevent a crash on iOS 13 Safari

    window.setTimeout(() => {
      document.body.removeChild(downloadLink);
      window.URL.revokeObjectURL(url);
    }, 1000);
  } else {
    // iOS 12 Safari, open a new page and set href to data-uri
    let popup = window.open('', '_blank');
    const reader = new FileReader();

    reader.onloadend = function () {
      popup.location.href = reader.result;
      popup = null;
    };

    reader.readAsDataURL(blob);
  }
});

/***/ }),

/***/ "./src/lib/normalize.css":
/*!*******************************!*\
  !*** ./src/lib/normalize.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??postcss!./normalize.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/lib/normalize.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playground/addon-settings.jsx":
/*!*******************************************!*\
  !*** ./src/playground/addon-settings.jsx ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_download_blob_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/download-blob.js */ "./src/lib/download-blob.js");
/* harmony import */ var _addons_settings_settings_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addons/settings/settings.jsx */ "./src/addons/settings/settings.jsx");
/* harmony import */ var _app_target__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-target */ "./src/playground/app-target.js");
/**
 * Copyright (C) 2021 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */






const onExportSettings = settings => {
  const blob = new Blob([JSON.stringify(settings)]);
  Object(_lib_download_blob_js__WEBPACK_IMPORTED_MODULE_2__["default"])('turbowarp-addon-settings.json', blob);
};

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_addons_settings_settings_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
  onExportSettings: onExportSettings
}), _app_target__WEBPACK_IMPORTED_MODULE_4__["default"]);

/***/ }),

/***/ "./src/playground/app-target.js":
/*!**************************************!*\
  !*** ./src/playground/app-target.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const appTarget = document.getElementById('app'); // Remove everything from the target to fix macOS Safari "Save Page As",

while (appTarget.firstChild) {
  appTarget.removeChild(appTarget.firstChild);
}

document.body.classList.add('tw-loaded');
/* harmony default export */ __webpack_exports__["default"] = (appTarget);

/***/ })

/******/ });
//# sourceMappingURL=addon-settings.js.map