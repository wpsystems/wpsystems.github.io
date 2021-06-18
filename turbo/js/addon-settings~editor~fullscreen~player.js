(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-settings~editor~fullscreen~player"],{

/***/ "./node_modules/raw-loader/index.js!./src/lib/tw-theme-dark.css":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/tw-theme-dark.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* GUI */\n:root {\n    background: #111;\n    color: #eee;\n    /* see colors.csss */\n    --ui-primary: rgb(17, 17, 17);\n    --ui-secondary: rgb(30, 30, 30);\n    --ui-tertiary: rgb(46, 46, 46);\n    --ui-modal-overlay: #333a;\n    --text-primary: #eee;\n    /* scratch-paint */\n    --paint-ui-pane-border: rgb(46, 46, 46);\n    --paint-text-primary: #eee;\n    --paint-form-border: rgb(46, 46, 46);\n}\n\n/* Blockly */\n.blocklySvg {\n    background-color: var(--ui-secondary) !important;\n}\n[id^=\"blocklyGridPattern\"] > line {\n    stroke: #484848;\n}\n.blocklyFlyoutBackground {\n    fill: #111;\n}\n.blocklyFlyoutLabelText {\n    fill: #ccc;\n}\n.blocklyFlyoutButton .blocklyText {\n    fill: #ccc;\n}\n.blocklyFlyoutButton:hover {\n    fill: #111;\n}\n.scratchCategoryMenu {\n    color: #ccc;\n}\n.blocklyToolboxDiv,\n.scratchCategoryMenu {\n    background: #111 !important;\n}\n.blocklyScrollbarHandle {\n    fill: #666;\n}\n.blocklyZoom {\n    filter: invert(100%);\n}\n.scratchCategoryMenuItem.categorySelected {\n    background: var(--ui-secondary);\n}\n.valueReportBox {\n    color: black;\n}\n.blocklyWidgetDiv .goog-menu {\n    background: var(--ui-primary);\n    border-color: hsla(0, 0%, 0%, 0.15);\n}\n.blocklyWidgetDiv .goog-menuitem {\n    color: var(--text-primary);\n}\n.blocklyWidgetDiv .goog-menuitem.goog-menuitem-highlight {\n    background-color: var(--ui-tertiary);\n    border-color: transparent; /* remove border */\n}\n.scratchCommentText {\n    color: black;\n}\n.blocklyInsertionMarker > .blocklyPath {\n    fill: #ccc;\n}\n\n/* Other / Multipurpose */\n.Popover-body {\n    background: var(--ui-secondary);\n    border-color: var(--ui-tertiary);\n    color: var(--text-primary);\n}\n.Popover-tipShape {\n    fill: var(--ui-secondary);\n    stroke: var(--ui-tertiary);\n}\n"

/***/ }),

/***/ "./src/addons/addon-manifests.js":
/*!***************************************!*\
  !*** ./src/addons/addon-manifests.js ***!
  \***************************************/
/*! exports provided: unsupportedAddons, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsupportedAddons", function() { return unsupportedAddons; });
/* harmony import */ var _addons_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addons.json */ "./src/addons/addons.json");
var _addons_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./addons.json */ "./src/addons/addons.json", 1);
/* harmony import */ var _new_addons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-addons.json */ "./src/addons/new-addons.json");
var _new_addons_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./new-addons.json */ "./src/addons/new-addons.json", 1);
/* harmony import */ var _is_mobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-mobile */ "./src/addons/is-mobile.js");
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



const clipboardSupported = !!(navigator.clipboard && navigator.clipboard.write);
const mediaRecorderSupported = !!window.MediaRecorder && MediaRecorder.isTypeSupported('video/webm');

const isSupported = (addonId, manifest) => {
  if (!manifest.permissions) {
    return true;
  }

  if (!clipboardSupported && manifest.permissions.includes('clipboardWrite')) {
    return false;
  }

  if (!mediaRecorderSupported && addonId === 'mediarecorder') {
    return false;
  }

  return true;
};

const addonMap = {};
const unsupportedAddons = {};

for (const addonId of _addons_json__WEBPACK_IMPORTED_MODULE_0__) {
  const manifest = __webpack_require__("./src/addons/addons sync recursive ^\\.\\/.*\\/addon\\.json$")("./".concat(addonId, "/addon.json"));

  if (_is_mobile__WEBPACK_IMPORTED_MODULE_2__["default"]) {
    if (typeof manifest.enabledByDefaultMobile !== 'undefined') {
      manifest.enabledByDefault = manifest.enabledByDefaultMobile;
    }
  }

  if (_new_addons_json__WEBPACK_IMPORTED_MODULE_1__.includes(addonId)) {
    if (!manifest.tags) {
      manifest.tags = [];
    }

    manifest.tags.push('new');
  }

  if (isSupported(addonId, manifest)) {
    addonMap[addonId] = manifest;
  } else {
    unsupportedAddons[addonId] = manifest;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (addonMap);

/***/ }),

/***/ "./src/addons/addons sync recursive ^\\.\\/.*\\/addon\\.json$":
/*!******************************************************!*\
  !*** ./src/addons/addons sync ^\.\/.*\/addon\.json$ ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./2d-color-picker/addon.json": "./src/addons/addons/2d-color-picker/addon.json",
	"./bitmap-copy/addon.json": "./src/addons/addons/bitmap-copy/addon.json",
	"./block-palette-icons/addon.json": "./src/addons/addons/block-palette-icons/addon.json",
	"./block-switching/addon.json": "./src/addons/addons/block-switching/addon.json",
	"./blocks2image/addon.json": "./src/addons/addons/blocks2image/addon.json",
	"./cat-blocks/addon.json": "./src/addons/addons/cat-blocks/addon.json",
	"./clones/addon.json": "./src/addons/addons/clones/addon.json",
	"./color-picker/addon.json": "./src/addons/addons/color-picker/addon.json",
	"./custom-block-shape/addon.json": "./src/addons/addons/custom-block-shape/addon.json",
	"./custom-zoom/addon.json": "./src/addons/addons/custom-zoom/addon.json",
	"./data-category-tweaks-v2/addon.json": "./src/addons/addons/data-category-tweaks-v2/addon.json",
	"./debugger/addon.json": "./src/addons/addons/debugger/addon.json",
	"./drag-drop/addon.json": "./src/addons/addons/drag-drop/addon.json",
	"./editor-colored-context-menus/addon.json": "./src/addons/addons/editor-colored-context-menus/addon.json",
	"./editor-devtools/addon.json": "./src/addons/addons/editor-devtools/addon.json",
	"./editor-searchable-dropdowns/addon.json": "./src/addons/addons/editor-searchable-dropdowns/addon.json",
	"./editor-sounds/addon.json": "./src/addons/addons/editor-sounds/addon.json",
	"./editor-stage-left/addon.json": "./src/addons/addons/editor-stage-left/addon.json",
	"./editor-theme3/addon.json": "./src/addons/addons/editor-theme3/addon.json",
	"./folders/addon.json": "./src/addons/addons/folders/addon.json",
	"./gamepad/addon.json": "./src/addons/addons/gamepad/addon.json",
	"./hide-flyout/addon.json": "./src/addons/addons/hide-flyout/addon.json",
	"./initialise-sprite-position/addon.json": "./src/addons/addons/initialise-sprite-position/addon.json",
	"./load-extensions/addon.json": "./src/addons/addons/load-extensions/addon.json",
	"./mediarecorder/addon.json": "./src/addons/addons/mediarecorder/addon.json",
	"./mouse-pos/addon.json": "./src/addons/addons/mouse-pos/addon.json",
	"./mute-project/addon.json": "./src/addons/addons/mute-project/addon.json",
	"./onion-skinning/addon.json": "./src/addons/addons/onion-skinning/addon.json",
	"./pause/addon.json": "./src/addons/addons/pause/addon.json",
	"./remove-curved-stage-border/addon.json": "./src/addons/addons/remove-curved-stage-border/addon.json",
	"./remove-sprite-confirm/addon.json": "./src/addons/addons/remove-sprite-confirm/addon.json",
	"./transparent-orphans/addon.json": "./src/addons/addons/transparent-orphans/addon.json",
	"./tw-interface-customization/addon.json": "./src/addons/addons/tw-interface-customization/addon.json",
	"./tw-project-info/addon.json": "./src/addons/addons/tw-project-info/addon.json",
	"./variable-manager/addon.json": "./src/addons/addons/variable-manager/addon.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/addons/addons sync recursive ^\\.\\/.*\\/addon\\.json$";

/***/ }),

/***/ "./src/addons/addons.json":
/*!********************************!*\
  !*** ./src/addons/addons.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"cat-blocks\",\"editor-devtools\",\"editor-searchable-dropdowns\",\"data-category-tweaks-v2\",\"block-palette-icons\",\"hide-flyout\",\"mediarecorder\",\"drag-drop\",\"color-picker\",\"remove-sprite-confirm\",\"tw-project-info\",\"onion-skinning\",\"bitmap-copy\",\"2d-color-picker\",\"pause\",\"mute-project\",\"clones\",\"mouse-pos\",\"custom-block-shape\",\"editor-theme3\",\"editor-colored-context-menus\",\"editor-stage-left\",\"variable-manager\",\"gamepad\",\"editor-sounds\",\"folders\",\"block-switching\",\"load-extensions\",\"custom-zoom\",\"initialise-sprite-position\",\"blocks2image\",\"remove-curved-stage-border\",\"transparent-orphans\",\"debugger\",\"tw-interface-customization\"]");

/***/ }),

/***/ "./src/addons/addons/2d-color-picker/addon.json":
/*!******************************************************!*\
  !*** ./src/addons/addons/2d-color-picker/addon.json ***!
  \******************************************************/
/*! exports provided: name, description, tags, credits, userscripts, userstyles, libraries, versionAdded, enabledByDefault, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"2D color picker\",\"description\":\"Replaces saturation and brightness sliders with a 2D color picker. Hold Shift while dragging the cursor to change the values on a single axis.\",\"tags\":[\"editor\",\"costumeEditor\"],\"credits\":[{\"name\":\"Ucrash\"}],\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"userstyles\":[{\"url\":\"style.css\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"libraries\":[\"tinycolor2\"],\"versionAdded\":\"1.12.0\",\"enabledByDefault\":false}");

/***/ }),

/***/ "./src/addons/addons/bitmap-copy/addon.json":
/*!**************************************************!*\
  !*** ./src/addons/addons/bitmap-copy/addon.json ***!
  \**************************************************/
/*! exports provided: name, description, info, userscripts, versionAdded, tags, permissions, enabledByDefault, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Bitmap images copying\",\"description\":\"Allows you to actually copy a bitmap image from the paint editor, so that you can paste it in other websites or software.\",\"info\":[{\"type\":\"notice\",\"text\":\"\\\"Right click → copy\\\" is not supported. You must press Ctrl+C while a bitmap image is selected.\",\"id\":\"norightclick\"}],\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"versionAdded\":\"1.0.0\",\"tags\":[\"editor\",\"costumeEditor\"],\"permissions\":[\"clipboardWrite\"],\"enabledByDefault\":true}");

/***/ }),

/***/ "./src/addons/addons/block-palette-icons/addon.json":
/*!**********************************************************!*\
  !*** ./src/addons/addons/block-palette-icons/addon.json ***!
  \**********************************************************/
/*! exports provided: name, description, tags, enabledByDefault, dynamicEnable, dynamicDisable, userstyles, versionAdded, credits, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Block palette category icons\",\"description\":\"Adds icons inside the colored circles that identify block categories.\",\"tags\":[\"editor\",\"codeEditor\",\"theme\"],\"enabledByDefault\":false,\"dynamicEnable\":true,\"dynamicDisable\":true,\"userstyles\":[{\"url\":\"userstyle.css\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"versionAdded\":\"1.11.0\",\"credits\":[{\"name\":\"--Explosion--\",\"link\":\"https://scratch.mit.edu/users/--Explosion--/\"},{\"name\":\"RedGuy7\",\"link\":\"https://scratch.mit.edu/users/RedGuy7/\"}]}");

/***/ }),

/***/ "./src/addons/addons/block-switching/addon.json":
/*!******************************************************!*\
  !*** ./src/addons/addons/block-switching/addon.json ***!
  \******************************************************/
/*! exports provided: name, description, credits, dynamicEnable, dynamicDisable, versionAdded, userscripts, tags, settings, libraries, enabledByDefault, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Block switching\",\"description\":\"Right click on a block to switch it to a related block.\",\"credits\":[{\"name\":\"GarboMuffin\"}],\"dynamicEnable\":true,\"dynamicDisable\":true,\"versionAdded\":\"1.4.0\",\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"tags\":[\"editor\",\"codeEditor\",\"recommended\"],\"settings\":[{\"name\":\"Show option to change block to self\",\"id\":\"noop\",\"type\":\"boolean\",\"default\":true},{\"name\":\"Add border\",\"id\":\"border\",\"type\":\"boolean\",\"default\":true},{\"name\":\"Motion blocks\",\"id\":\"motion\",\"type\":\"boolean\",\"default\":true},{\"name\":\"Looks blocks\",\"id\":\"looks\",\"type\":\"boolean\",\"default\":true},{\"name\":\"Sound blocks\",\"id\":\"sound\",\"type\":\"boolean\",\"default\":true},{\"name\":\"Event blocks\",\"id\":\"event\",\"type\":\"boolean\",\"default\":true},{\"name\":\"Control blocks\",\"id\":\"control\",\"type\":\"boolean\",\"default\":true},{\"name\":\"Operator blocks\",\"id\":\"operator\",\"type\":\"boolean\",\"default\":true},{\"name\":\"Sensing blocks\",\"id\":\"sensing\",\"type\":\"boolean\",\"default\":true},{\"name\":\"Data blocks\",\"id\":\"data\",\"type\":\"boolean\",\"default\":true},{\"name\":\"Extension blocks\",\"id\":\"extension\",\"type\":\"boolean\",\"default\":true}],\"libraries\":[\"scratch-blocks\"],\"enabledByDefault\":true}");

/***/ }),

/***/ "./src/addons/addons/blocks2image/addon.json":
/*!***************************************************!*\
  !*** ./src/addons/addons/blocks2image/addon.json ***!
  \***************************************************/
/*! exports provided: name, description, tags, credits, userscripts, versionAdded, enabledByDefault, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Save blocks as image\",\"description\":\"Right click the editor workspace to export blocks as SVG/PNG images.\",\"tags\":[\"editor\",\"codeEditor\"],\"credits\":[{\"name\":\"summerscar\"}],\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"versionAdded\":\"1.13.0\",\"enabledByDefault\":false}");

/***/ }),

/***/ "./src/addons/addons/cat-blocks/addon.json":
/*!*************************************************!*\
  !*** ./src/addons/addons/cat-blocks/addon.json ***!
  \*************************************************/
/*! exports provided: name, description, credits, userscripts, info, settings, versionAdded, tags, enabledByDefault, libraries, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Cat blocks\",\"description\":\"Brings back editor cat hat blocks from April Fools 2020.\",\"credits\":[{\"name\":\"TheColaber\",\"link\":\"https://scratch.mit.edu/users/TheColaber\"},{\"name\":\"GarboMuffin\"}],\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"info\":[{\"type\":\"warning\",\"text\":\"The \\\"Watch mouse cursor\\\" option may impact performance when the editor is open.\",\"id\":\"watch\"}],\"settings\":[{\"id\":\"watch\",\"name\":\"Watch mouse cursor\",\"default\":false,\"type\":\"boolean\"}],\"versionAdded\":\"1.14.0\",\"tags\":[\"editor\",\"codeEditor\",\"theme\"],\"enabledByDefault\":false,\"libraries\":[\"scratch-blocks\"]}");

/***/ }),

/***/ "./src/addons/addons/clones/addon.json":
/*!*********************************************!*\
  !*** ./src/addons/addons/clones/addon.json ***!
  \*********************************************/
/*! exports provided: name, description, credits, dynamicEnable, dynamicDisable, versionAdded, userscripts, userstyles, tags, enabledByDefault, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Clone counter\",\"description\":\"Adds a counter in the editor which shows the total amount of clones.\",\"credits\":[{\"name\":\"Jeffalo\"}],\"dynamicEnable\":true,\"dynamicDisable\":true,\"versionAdded\":\"1.2.0\",\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"userstyles\":[{\"url\":\"style.css\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"tags\":[\"editor\",\"projectPlayer\"],\"enabledByDefault\":false}");

/***/ }),

/***/ "./src/addons/addons/color-picker/addon.json":
/*!***************************************************!*\
  !*** ./src/addons/addons/color-picker/addon.json ***!
  \***************************************************/
/*! exports provided: name, description, tags, credits, userscripts, userstyles, versionAdded, libraries, enabledByDefault, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Hex color picker\",\"description\":\"Adds hex code inputs to color pickers.\",\"tags\":[\"editor\",\"costumeEditor\",\"recommended\"],\"credits\":[{\"name\":\"Richie Bendall\"},{\"name\":\"apple502j\"}],\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"userstyles\":[{\"url\":\"style.css\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"versionAdded\":\"1.6.0\",\"libraries\":[\"tinycolor2\"],\"enabledByDefault\":true}");

/***/ }),

/***/ "./src/addons/addons/custom-block-shape/addon.json":
/*!*********************************************************!*\
  !*** ./src/addons/addons/custom-block-shape/addon.json ***!
  \*********************************************************/
/*! exports provided: name, description, tags, credits, versionAdded, enabledByDefault, userscripts, info, settings, presets, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Custom block shape\",\"description\":\"Adjust the padding, corner radius, and notch height of Scratch blocks.\",\"tags\":[\"editor\",\"codeEditor\",\"theme\",\"recommended\"],\"credits\":[{\"name\":\"SheepTester\",\"link\":\"https://scratch.mit.edu/users/Sheep_maker/\"},{\"name\":\"lisa_wolfgang\",\"link\":\"https://scratch.mit.edu/users/lisa_wolfgang\"},{\"name\":\"GarboMuffin\",\"link\":\"https://scratch.mit.edu/users/GarboMuffin\"}],\"versionAdded\":\"1.12.0\",\"enabledByDefault\":false,\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"info\":[{\"type\":\"warning\",\"text\":\"Decreasing the padding size is only visible to you, so when your projects are viewed by other users, your scripts may overlap.\",\"id\":\"paddingWarning\"}],\"settings\":[{\"name\":\"Padding size (50-200%)\",\"id\":\"paddingSize\",\"type\":\"integer\",\"min\":50,\"default\":100,\"max\":200,\"reloadRequired\":false},{\"name\":\"Corner size (0-300%)\",\"id\":\"cornerSize\",\"type\":\"integer\",\"min\":0,\"default\":100,\"max\":300,\"reloadRequired\":false},{\"name\":\"Notch height (0-150%)\",\"id\":\"notchSize\",\"type\":\"integer\",\"min\":0,\"default\":100,\"max\":150,\"reloadRequired\":false}],\"presets\":[{\"name\":\"3.0 Blocks\",\"id\":\"default3\",\"description\":\"The regular appearance of Scratch 3.0 blocks\",\"values\":{\"paddingSize\":100,\"cornerSize\":100,\"notchSize\":100}},{\"name\":\"2.0 Blocks\",\"id\":\"default2\",\"description\":\"An appearance similar to Scratch 2.0 blocks\",\"values\":{\"paddingSize\":70,\"cornerSize\":150,\"notchSize\":75}},{\"name\":\"3.0 Flat\",\"id\":\"flat3\",\"description\":\"Scratch 3.0 blocks with notches and corners removed\",\"values\":{\"paddingSize\":100,\"cornerSize\":0,\"notchSize\":0}},{\"name\":\"2.0 Flat\",\"id\":\"flat2\",\"description\":\"Scratch 2.0 blocks with notches and corners removed\",\"values\":{\"paddingSize\":70,\"cornerSize\":0,\"notchSize\":0}}]}");

/***/ }),

/***/ "./src/addons/addons/custom-zoom/addon.json":
/*!**************************************************!*\
  !*** ./src/addons/addons/custom-zoom/addon.json ***!
  \**************************************************/
/*! exports provided: name, description, tags, credits, versionAdded, enabledByDefault, userscripts, userstyles, settings, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Custom scripts area zoom settings\",\"description\":\"Adjust the minimum, maximum, speed, and start size of the zoom in the project code editor, and autohide the controls.\",\"tags\":[\"editor\",\"codeEditor\"],\"credits\":[{\"name\":\"ErrorGamer2000\",\"link\":\"https://scratch.mit.edu/users/ErrorGamer2000/\"}],\"versionAdded\":\"1.13.0\",\"enabledByDefault\":false,\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"userstyles\":[{\"url\":\"style.css\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"settings\":[{\"name\":\"Maximum Zoom (50-500%)\",\"id\":\"maxZoom\",\"type\":\"integer\",\"min\":100,\"default\":300,\"max\":500,\"reloadRequired\":false},{\"name\":\"Minimum Zoom (1-100%)\",\"id\":\"minZoom\",\"type\":\"integer\",\"min\":1,\"default\":30,\"max\":100,\"reloadRequired\":false},{\"name\":\"Start Zoom (50-500%)\",\"id\":\"startZoom\",\"type\":\"integer\",\"min\":50,\"default\":68,\"max\":500,\"reloadRequired\":false},{\"name\":\"Zoom Speed (50-200%)\",\"id\":\"zoomSpeed\",\"type\":\"integer\",\"min\":50,\"default\":100,\"max\":200,\"reloadRequired\":false},{\"name\":\"Autohide Zoom Controls\",\"id\":\"autohide\",\"type\":\"boolean\",\"default\":false},{\"name\":\"Autohide Animation duration\",\"id\":\"speed\",\"type\":\"select\",\"potentialValues\":[{\"id\":\"none\",\"name\":\"None\"},{\"id\":\"short\",\"name\":\"Short\"},{\"id\":\"default\",\"name\":\"Default\"},{\"id\":\"long\",\"name\":\"Long\"}],\"default\":\"default\",\"reloadRequired\":false}]}");

/***/ }),

/***/ "./src/addons/addons/data-category-tweaks-v2/addon.json":
/*!**************************************************************!*\
  !*** ./src/addons/addons/data-category-tweaks-v2/addon.json ***!
  \**************************************************************/
/*! exports provided: name, description, credits, userscripts, versionAdded, settings, tags, enabledByDefault, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Data category tweaks\",\"description\":\"Provides tweaks for the Data (\\\"Variables\\\") category in the editor.\",\"credits\":[{\"name\":\"GarboMuffin\"}],\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"],\"runAtComplete\":false}],\"versionAdded\":\"1.7.0\",\"settings\":[{\"name\":\"Separate List Category\",\"id\":\"separateListCategory\",\"type\":\"boolean\",\"default\":true,\"reloadRequired\":false},{\"name\":\"Separate Sprite-only Variables\",\"id\":\"separateLocalVariables\",\"type\":\"boolean\",\"default\":false,\"reloadRequired\":false},{\"name\":\"Move data blocks above variables list\",\"id\":\"moveReportersDown\",\"type\":\"boolean\",\"default\":false,\"reloadRequired\":false}],\"tags\":[\"editor\",\"codeEditor\",\"recommended\"],\"enabledByDefault\":false}");

/***/ }),

/***/ "./src/addons/addons/debugger/addon.json":
/*!***********************************************!*\
  !*** ./src/addons/addons/debugger/addon.json ***!
  \***********************************************/
/*! exports provided: name, description, credits, userscripts, userstyles, tags, enabledByDefault, versionAdded, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Debugger\",\"description\":\"Adds a new \\\"debugger\\\" block category and a \\\"logs\\\" window to the editor. The \\\"log\\\", \\\"warn\\\" and \\\"error\\\" blocks will print the specified message into the logs window. The \\\"breakpoint\\\" block will pause the project when executed.\",\"credits\":[{\"name\":\"GrahamSH\"},{\"name\":\"TheColaber\"},{\"name\":\"retronbv\"}],\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"projects\"]}],\"userstyles\":[{\"url\":\"style.css\",\"matches\":[\"projects\"]}],\"tags\":[\"editor\",\"beta\"],\"enabledByDefault\":false,\"versionAdded\":\"1.16.0\"}");

/***/ }),

/***/ "./src/addons/addons/drag-drop/addon.json":
/*!************************************************!*\
  !*** ./src/addons/addons/drag-drop/addon.json ***!
  \************************************************/
/*! exports provided: name, description, credits, userscripts, userstyles, versionAdded, tags, enabledByDefault, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Drag and drop files\",\"description\":\"Lets you drag images and sounds from your file explorer into the sprites pane or costume/sound list. You can also drag text files into lists or \\\"ask and wait\\\" prompts.\",\"credits\":[{\"name\":\"Sheep_maker\"}],\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"userstyles\":[{\"url\":\"dragged-over.css\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"versionAdded\":\"1.12.0\",\"tags\":[\"editor\",\"recommended\"],\"enabledByDefault\":true}");

/***/ }),

/***/ "./src/addons/addons/editor-colored-context-menus/addon.json":
/*!*******************************************************************!*\
  !*** ./src/addons/addons/editor-colored-context-menus/addon.json ***!
  \*******************************************************************/
/*! exports provided: name, description, credits, dynamicEnable, dynamicDisable, versionAdded, injectAsStyleElt, userscripts, userstyles, tags, enabledByDefault, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Colored context menus\",\"description\":\"Makes the editor context menus colorful when right-clicking a block.\",\"credits\":[{\"name\":\"GarboMuffin\"}],\"dynamicEnable\":true,\"dynamicDisable\":true,\"versionAdded\":\"1.0.0\",\"injectAsStyleElt\":true,\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"userstyles\":[{\"url\":\"userscript.css\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"tags\":[\"editor\",\"codeEditor\",\"theme\"],\"enabledByDefault\":false}");

/***/ }),

/***/ "./src/addons/addons/editor-devtools/addon.json":
/*!******************************************************!*\
  !*** ./src/addons/addons/editor-devtools/addon.json ***!
  \******************************************************/
/*! exports provided: name, description, info, credits, settings, userscripts, userstyles, versionAdded, tags, enabledByDefault, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Developer tools\",\"description\":\"Adds a find box and new menu options to the editor: copy/paste blocks, better tidy up, go to custom block definition, and more!\",\"info\":[{\"type\":\"notice\",\"text\":\"Press \\\"Ctrl+F\\\" to focus the find box, \\\"Ctrl+Space\\\" to bring up the \\\"add block by name\\\" popup, \\\"Ctrl+Left/Right\\\" to navigate find history.\",\"id\":\"shortcuts\"}],\"credits\":[{\"name\":\"griffpatch\"}],\"settings\":[{\"name\":\"Enhance \\\"Clean up Blocks\\\"\",\"id\":\"enableCleanUpPlus\",\"type\":\"boolean\",\"reloadRequired\":false,\"default\":true},{\"name\":\"Paste blocks at mouse cursor\",\"id\":\"enablePasteBlocksAtMouse\",\"type\":\"boolean\",\"reloadRequired\":false,\"default\":true},{\"name\":\"Middle mouse click variables, custom blocks or events to navigate\",\"id\":\"enableMiddleClickFinder\",\"type\":\"boolean\",\"reloadRequired\":false,\"default\":true}],\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"userstyles\":[{\"url\":\"userscript.css\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"versionAdded\":\"1.0.0\",\"tags\":[\"editor\",\"codeEditor\",\"costumeEditor\",\"recommended\"],\"enabledByDefault\":true}");

/***/ }),

/***/ "./src/addons/addons/editor-searchable-dropdowns/addon.json":
/*!******************************************************************!*\
  !*** ./src/addons/addons/editor-searchable-dropdowns/addon.json ***!
  \******************************************************************/
/*! exports provided: name, description, credits, dynamicEnable, dynamicDisable, userscripts, userstyles, versionAdded, tags, enabledByDefault, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Searchable dropdowns\",\"description\":\"Allows you to search dropdowns in the Scratch editor.\",\"credits\":[{\"name\":\"GarboMuffin\"}],\"dynamicEnable\":true,\"dynamicDisable\":true,\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"userstyles\":[{\"url\":\"userscript.css\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"versionAdded\":\"1.0.0\",\"tags\":[\"editor\",\"codeEditor\",\"recommended\"],\"enabledByDefault\":true}");

/***/ }),

/***/ "./src/addons/addons/editor-sounds/addon.json":
/*!****************************************************!*\
  !*** ./src/addons/addons/editor-sounds/addon.json ***!
  \****************************************************/
/*! exports provided: name, description, credits, userscripts, tags, enabledByDefault, versionAdded, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Editor sound effects\",\"description\":\"Plays sound effects when you connect or delete blocks.\",\"credits\":[{\"name\":\"GarboMuffin\"}],\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"tags\":[\"editor\",\"codeEditor\"],\"enabledByDefault\":false,\"versionAdded\":\"1.14.0\"}");

/***/ }),

/***/ "./src/addons/addons/editor-stage-left/addon.json":
/*!********************************************************!*\
  !*** ./src/addons/addons/editor-stage-left/addon.json ***!
  \********************************************************/
/*! exports provided: name, description, credits, userscripts, dynamicEnable, dynamicDisable, injectAsStyleElt, userstyles, tags, versionAdded, enabledByDefault, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Display stage on left side\",\"description\":\"Moves the stage to the left side of the editor.\",\"credits\":[{\"name\":\"NitroCipher/ZenithRogue\"}],\"userscripts\":[{\"url\":\"fix-share-the-love.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"dynamicEnable\":true,\"dynamicDisable\":true,\"injectAsStyleElt\":true,\"userstyles\":[{\"url\":\"stageleft.css\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"tags\":[\"editor\",\"theme\",\"recommended\"],\"versionAdded\":\"1.1.0\",\"enabledByDefault\":false}");

/***/ }),

/***/ "./src/addons/addons/editor-theme3/addon.json":
/*!****************************************************!*\
  !*** ./src/addons/addons/editor-theme3/addon.json ***!
  \****************************************************/
/*! exports provided: name, description, credits, dynamicEnable, dynamicDisable, injectAsStyleElt, versionAdded, userscripts, userstyles, settings, tags, enabledByDefault, presets, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Customizable block colors\",\"description\":\"Edit block colors for each category in the editor.\",\"credits\":[{\"name\":\"NitroCipher/ZenithRogue\"},{\"name\":\"TheColaber\",\"link\":\"https://scratch.mit.edu/users/TheColaber\"}],\"dynamicEnable\":true,\"dynamicDisable\":true,\"injectAsStyleElt\":true,\"versionAdded\":\"1.2.0\",\"userscripts\":[{\"url\":\"theme3.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"userstyles\":[{\"url\":\"theme3.css\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"settings\":[{\"name\":\"motion\",\"id\":\"motion-color\",\"type\":\"color\",\"default\":\"#4C97FF\",\"allowTransparency\":true,\"reloadRequired\":false},{\"name\":\"looks\",\"id\":\"looks-color\",\"type\":\"color\",\"default\":\"#9966FF\",\"allowTransparency\":true,\"reloadRequired\":false},{\"name\":\"sounds\",\"id\":\"sounds-color\",\"type\":\"color\",\"default\":\"#CF63CF\",\"allowTransparency\":true,\"reloadRequired\":false},{\"name\":\"events\",\"id\":\"events-color\",\"type\":\"color\",\"default\":\"#FFBF00\",\"allowTransparency\":true,\"reloadRequired\":false},{\"name\":\"control\",\"id\":\"control-color\",\"type\":\"color\",\"default\":\"#FFAB19\",\"allowTransparency\":true,\"reloadRequired\":false},{\"name\":\"sensing\",\"id\":\"sensing-color\",\"type\":\"color\",\"default\":\"#5CB1D6\",\"allowTransparency\":true,\"reloadRequired\":false},{\"name\":\"operators\",\"id\":\"operators-color\",\"type\":\"color\",\"default\":\"#59C059\",\"allowTransparency\":true,\"reloadRequired\":false},{\"name\":\"variables\",\"id\":\"data-color\",\"type\":\"color\",\"default\":\"#FF8C1A\",\"allowTransparency\":true,\"reloadRequired\":false},{\"name\":\"lists\",\"id\":\"data-lists-color\",\"type\":\"color\",\"default\":\"#FF661A\",\"allowTransparency\":true,\"reloadRequired\":false},{\"name\":\"custom\",\"id\":\"custom-color\",\"type\":\"color\",\"default\":\"#FF6680\",\"allowTransparency\":true,\"reloadRequired\":false},{\"name\":\"extensions\",\"id\":\"Pen-color\",\"type\":\"color\",\"default\":\"#0FBD8C\",\"allowTransparency\":true,\"reloadRequired\":false},{\"name\":\"TurboWarp\",\"id\":\"tw-color\",\"type\":\"color\",\"default\":\"#ff4c4c\",\"allowTransparency\":true,\"reloadRequired\":false},{\"name\":\"Block inputs\",\"id\":\"input-color\",\"type\":\"color\",\"default\":\"#FFFFFF\",\"reloadRequired\":false},{\"name\":\"Text color\",\"id\":\"text\",\"type\":\"select\",\"default\":\"white\",\"potentialValues\":[{\"id\":\"white\",\"name\":\"White\"},{\"id\":\"black\",\"name\":\"Black\"},{\"id\":\"colorOnWhite\",\"name\":\"Colored on white background\"},{\"id\":\"colorOnBlack\",\"name\":\"Colored on black background\"}],\"reloadRequired\":false}],\"tags\":[\"editor\",\"theme\",\"codeEditor\",\"recommended\"],\"enabledByDefault\":false,\"presets\":[{\"name\":\"3.0 Tweaks\",\"id\":\"tweaks\",\"description\":\"Events, Control, and Custom blocks with 2.0 inspired colors\",\"values\":{\"motion-color\":\"#4C97FF\",\"looks-color\":\"#9966FF\",\"sounds-color\":\"#CF63CF\",\"events-color\":\"#DE9E2E\",\"control-color\":\"#FFBF00\",\"sensing-color\":\"#5CB1D6\",\"operators-color\":\"#59C059\",\"data-color\":\"#FF8C1A\",\"data-lists-color\":\"#FF661A\",\"custom-color\":\"#5f49d8\",\"Pen-color\":\"#0FBD8C\",\"input-color\":\"#FFFFFF\",\"text\":\"white\"}},{\"name\":\"2.0 Colors\",\"id\":\"original\",\"description\":\"The original block colors from Scratch 2.0\",\"values\":{\"motion-color\":\"#4a6cd4\",\"looks-color\":\"#8a55d7\",\"sounds-color\":\"#bb42c3\",\"events-color\":\"#c88330\",\"control-color\":\"#e1a91a\",\"sensing-color\":\"#2ca5e2\",\"operators-color\":\"#5cb712\",\"data-color\":\"#ee7d16\",\"data-lists-color\":\"#cc5b22\",\"custom-color\":\"#632d99\",\"Pen-color\":\"#0e9a6c\",\"input-color\":\"#ffffff\",\"text\":\"white\"}},{\"name\":\"Dark\",\"id\":\"dark\",\"description\":\"Dark versions of the default colors\",\"values\":{\"motion-color\":\"#004099\",\"looks-color\":\"#220066\",\"sounds-color\":\"#752475\",\"events-color\":\"#997300\",\"control-color\":\"#664100\",\"sensing-color\":\"#1f5f7a\",\"operators-color\":\"#235c23\",\"data-color\":\"#b35900\",\"data-lists-color\":\"#993300\",\"custom-color\":\"#99004d\",\"Pen-color\":\"#064734\",\"tw-color\":\"#660000\",\"input-color\":\"#202020\",\"text\":\"white\"}},{\"name\":\"Black\",\"id\":\"black\",\"description\":\"Makes block backgrounds black\",\"values\":{\"motion-color\":\"#4C97FF\",\"looks-color\":\"#9966FF\",\"sounds-color\":\"#CF63CF\",\"events-color\":\"#FFBF00\",\"control-color\":\"#FFAB19\",\"sensing-color\":\"#5CB1D6\",\"operators-color\":\"#59C059\",\"data-color\":\"#FF8C1A\",\"data-lists-color\":\"#FF661A\",\"custom-color\":\"#FF6680\",\"Pen-color\":\"#0FBD8C\",\"input-color\":\"#202020\",\"text\":\"colorOnBlack\"}}]}");

/***/ }),

/***/ "./src/addons/addons/folders/addon.json":
/*!**********************************************!*\
  !*** ./src/addons/addons/folders/addon.json ***!
  \**********************************************/
/*! exports provided: name, description, info, credits, userscripts, userstyles, versionAdded, tags, enabledByDefault, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Sprite folders\",\"description\":\"Adds folders to sprite lists, as well as costume and sound lists. To create a folder, right click any sprite and click \\\"create folder\\\". Click a folder to open or close it. Right click a sprite to see what folders you can move it to, or alternatively drag and drop it into an open folder.\",\"info\":[{\"type\":\"notice\",\"text\":\"Users with this feature enabled will be able to see the folders in your project. Anyone else will see sprite lists normally (no folders).\",\"id\":\"notice-folders-are-public\"},{\"type\":\"notice\",\"text\":\"This feature works by adding \\\"[folderName]//\\\" at the beginning of the names for your sprites.\",\"id\":\"notice-sprite-names\"}],\"credits\":[{\"name\":\"GarboMuffin\"}],\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"],\"runAtComplete\":false}],\"userstyles\":[{\"url\":\"style.css\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"versionAdded\":\"1.11.0\",\"tags\":[\"editor\",\"recommended\"],\"enabledByDefault\":true}");

/***/ }),

/***/ "./src/addons/addons/gamepad/addon.json":
/*!**********************************************!*\
  !*** ./src/addons/addons/gamepad/addon.json ***!
  \**********************************************/
/*! exports provided: name, description, credits, info, userscripts, userstyles, settings, tags, enabledByDefault, versionAdded, dynamicEnable, dynamicDisable, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Gamepad support\",\"description\":\"Interact with projects using a USB or Bluetooth controller/gamepad.\",\"credits\":[{\"name\":\"GarboMuffin\"}],\"info\":[{\"type\":\"notice\",\"text\":\"This addon is highly experimental and subject to change. It can be configured with the gamepad button by the green flag.\",\"id\":\"info\"}],\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"userstyles\":[{\"url\":\"style.css\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]},{\"url\":\"gamepadlib.css\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"settings\":[{\"name\":\"Hide settings button when no controllers detected\",\"type\":\"boolean\",\"default\":false,\"id\":\"hide\"}],\"tags\":[\"editor\",\"projectPlayer\",\"recommended\"],\"enabledByDefault\":false,\"versionAdded\":\"1.14.0\",\"dynamicEnable\":true,\"dynamicDisable\":true}");

/***/ }),

/***/ "./src/addons/addons/hide-flyout/addon.json":
/*!**************************************************!*\
  !*** ./src/addons/addons/hide-flyout/addon.json ***!
  \**************************************************/
/*! exports provided: name, description, credits, info, userscripts, userstyles, versionAdded, settings, tags, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Auto-hide block palette\",\"description\":\"Hides the block palette if not hovered. Click the lock icon to lock it in place temporarily. Alternatively, use \\\"category click\\\" mode.\",\"credits\":[{\"name\":\"TheColaber\",\"link\":\"https://scratch.mit.edu/users/TheColaber\"}],\"info\":[{\"type\":\"notice\",\"text\":\"\\\"Palette area hover\\\" mode only extends the viewing area. If you want to be able to drag blocks into that area without them getting trashed, use one of the other modes.\",\"id\":\"hoverExplanation\"}],\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"userstyles\":[{\"url\":\"style.css\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"versionAdded\":\"1.8.0\",\"settings\":[{\"name\":\"Toggle on...\",\"id\":\"toggle\",\"type\":\"select\",\"potentialValues\":[{\"id\":\"hover\",\"name\":\"Palette area hover\"},{\"id\":\"cathover\",\"name\":\"Category hover\"},{\"id\":\"category\",\"name\":\"Category click\"}],\"default\":\"hover\"},{\"name\":\"Animation duration\",\"id\":\"speed\",\"type\":\"select\",\"potentialValues\":[{\"id\":\"none\",\"name\":\"None\"},{\"id\":\"short\",\"name\":\"Short\"},{\"id\":\"default\",\"name\":\"Default\"},{\"id\":\"long\",\"name\":\"Long\"}],\"reloadRequired\":false,\"default\":\"default\"}],\"tags\":[\"editor\",\"codeEditor\",\"recommended\"]}");

/***/ }),

/***/ "./src/addons/addons/initialise-sprite-position/addon.json":
/*!*****************************************************************!*\
  !*** ./src/addons/addons/initialise-sprite-position/addon.json ***!
  \*****************************************************************/
/*! exports provided: name, description, credits, userscripts, settings, versionAdded, tags, enabledByDefault, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Change new sprite default position\",\"description\":\"Moves sprites to a specified x/y position when they are created.\",\"credits\":[{\"name\":\"pufferfish101007\",\"link\":\"https://scratch.mit.edu/users/pufferfish101007\"}],\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"settings\":[{\"id\":\"x\",\"name\":\"X position\",\"type\":\"integer\",\"default\":0,\"min\":-240,\"max\":240,\"reloadRequired\":false},{\"id\":\"y\",\"name\":\"Y position\",\"type\":\"integer\",\"default\":0,\"min\":-180,\"max\":180,\"reloadRequired\":false},{\"id\":\"library\",\"name\":\"Randomize the position of library sprites\",\"type\":\"boolean\",\"default\":false,\"reloadRequired\":false}],\"versionAdded\":\"1.13.0\",\"tags\":[\"editor\"],\"enabledByDefault\":false}");

/***/ }),

/***/ "./src/addons/addons/load-extensions/addon.json":
/*!******************************************************!*\
  !*** ./src/addons/addons/load-extensions/addon.json ***!
  \******************************************************/
/*! exports provided: name, description, userscripts, settings, versionAdded, tags, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Auto-show editor extensions\",\"description\":\"Adds music, pen, and other editor extensions automatically to the block category list.\",\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"settings\":[{\"name\":\"Music\",\"id\":\"music\",\"type\":\"boolean\",\"default\":true},{\"name\":\"Pen\",\"id\":\"pen\",\"type\":\"boolean\",\"default\":true},{\"name\":\"Text to Speech\",\"id\":\"text2speech\",\"type\":\"boolean\",\"default\":false},{\"name\":\"Translate\",\"id\":\"translate\",\"type\":\"boolean\",\"default\":false}],\"versionAdded\":\"1.10.0\",\"tags\":[\"editor\",\"codeEditor\"]}");

/***/ }),

/***/ "./src/addons/addons/mediarecorder/addon.json":
/*!****************************************************!*\
  !*** ./src/addons/addons/mediarecorder/addon.json ***!
  \****************************************************/
/*! exports provided: name, description, tags, userscripts, userstyles, versionAdded, enabledByDefault, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Record project video\",\"description\":\"Adds a \\\"start recording\\\" button to the editor that allows you to record the project's stage.\",\"tags\":[\"editor\",\"editorMenuBar\",\"recommended\"],\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"userstyles\":[{\"url\":\"style.css\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"versionAdded\":\"1.6.0\",\"enabledByDefault\":false}");

/***/ }),

/***/ "./src/addons/addons/mouse-pos/addon.json":
/*!************************************************!*\
  !*** ./src/addons/addons/mouse-pos/addon.json ***!
  \************************************************/
/*! exports provided: name, description, credits, dynamicEnable, dynamicDisable, versionAdded, userscripts, userstyles, tags, enabledByDefault, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Mouse position\",\"description\":\"Displays your mouse position next to the flag in the editor.\",\"credits\":[{\"name\":\"Jeffalo\"}],\"dynamicEnable\":true,\"dynamicDisable\":true,\"versionAdded\":\"1.2.0\",\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"userstyles\":[{\"url\":\"style.css\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"tags\":[\"editor\",\"projectPlayer\",\"recommended\"],\"enabledByDefault\":false}");

/***/ }),

/***/ "./src/addons/addons/mute-project/addon.json":
/*!***************************************************!*\
  !*** ./src/addons/addons/mute-project/addon.json ***!
  \***************************************************/
/*! exports provided: name, description, credits, userscripts, versionAdded, enabledByDefault, tags, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Mute project player\",\"description\":\"Ctrl+Click the green flag to mute/unmute the project.\",\"credits\":[{\"name\":\"TheColaber\",\"link\":\"https://scratch.mit.edu/users/TheColaber\"}],\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"versionAdded\":\"1.7.0\",\"enabledByDefault\":true,\"tags\":[\"editor\",\"projectPlayer\",\"recommended\"]}");

/***/ }),

/***/ "./src/addons/addons/onion-skinning/addon.json":
/*!*****************************************************!*\
  !*** ./src/addons/addons/onion-skinning/addon.json ***!
  \*****************************************************/
/*! exports provided: name, description, credits, userscripts, userstyles, settings, versionAdded, tags, enabledByDefault, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Onion skinning\",\"description\":\"Shows transparent overlays of previous or next costumes when editing a costume. Controlled by buttons under the editor by the zoom buttons.\",\"credits\":[{\"name\":\"GarboMuffin\"}],\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"],\"runAtComplete\":false}],\"userstyles\":[{\"url\":\"style.css\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"settings\":[{\"id\":\"default\",\"name\":\"Enable by default\",\"type\":\"boolean\",\"default\":false},{\"id\":\"previous\",\"name\":\"Default previous costumes\",\"type\":\"integer\",\"default\":1,\"min\":0,\"max\":100},{\"id\":\"next\",\"name\":\"Default next costumes\",\"type\":\"integer\",\"default\":0,\"min\":0,\"max\":100},{\"id\":\"opacity\",\"name\":\"Opacity (%)\",\"type\":\"integer\",\"min\":0,\"max\":100,\"default\":25},{\"id\":\"opacityStep\",\"name\":\"Opacity Step (%)\",\"type\":\"integer\",\"min\":0,\"max\":100,\"default\":10},{\"id\":\"layering\",\"name\":\"Default layering\",\"type\":\"select\",\"default\":\"front\",\"potentialValues\":[{\"id\":\"front\",\"name\":\"Front\"},{\"id\":\"behind\",\"name\":\"Behind\"}]},{\"id\":\"mode\",\"name\":\"Default mode\",\"type\":\"select\",\"default\":\"merge\",\"potentialValues\":[{\"id\":\"merge\",\"name\":\"Merge images\"},{\"id\":\"tint\",\"name\":\"Color tint\"}]},{\"name\":\"Previous costume tint\",\"id\":\"beforeTint\",\"type\":\"color\",\"default\":\"#FF0000\"},{\"name\":\"Next costume tint\",\"id\":\"afterTint\",\"type\":\"color\",\"default\":\"#0000FF\"}],\"versionAdded\":\"1.5.0\",\"tags\":[\"editor\",\"costumeEditor\",\"recommended\"],\"enabledByDefault\":true}");

/***/ }),

/***/ "./src/addons/addons/pause/addon.json":
/*!********************************************!*\
  !*** ./src/addons/addons/pause/addon.json ***!
  \********************************************/
/*! exports provided: name, description, credits, dynamicEnable, dynamicDisable, versionAdded, userscripts, userstyles, tags, enabledByDefault, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Pause button\",\"description\":\"Adds a pause button next to the green flag.\",\"credits\":[{\"name\":\"Jeffalo\"},{\"name\":\"GarboMuffin\"}],\"dynamicEnable\":true,\"dynamicDisable\":true,\"versionAdded\":\"1.3.0\",\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"userstyles\":[{\"url\":\"style.css\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"tags\":[\"editor\",\"projectPlayer\",\"recommended\"],\"enabledByDefault\":true}");

/***/ }),

/***/ "./src/addons/addons/remove-curved-stage-border/addon.json":
/*!*****************************************************************!*\
  !*** ./src/addons/addons/remove-curved-stage-border/addon.json ***!
  \*****************************************************************/
/*! exports provided: name, description, tags, credits, enabledByDefault, dynamicDisable, dynamicEnable, versionAdded, userstyles, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Remove curved stage border\",\"description\":\"Removes the curved border around the stage, allowing you to see the corners.\",\"tags\":[\"editor\",\"theme\",\"projectPlayer\"],\"credits\":[{\"name\":\"Tacodude7729\",\"link\":\"https://github.com/Tacodude7729\"}],\"enabledByDefault\":false,\"dynamicDisable\":true,\"dynamicEnable\":true,\"versionAdded\":\"1.14.0\",\"userstyles\":[{\"url\":\"remove-borders.css\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}]}");

/***/ }),

/***/ "./src/addons/addons/remove-sprite-confirm/addon.json":
/*!************************************************************!*\
  !*** ./src/addons/addons/remove-sprite-confirm/addon.json ***!
  \************************************************************/
/*! exports provided: name, description, userscripts, versionAdded, tags, enabledByDefault, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Confirm sprite deletion\",\"description\":\"Asks if you're sure when deleting a sprite inside a project.\",\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"versionAdded\":\"1.0.0\",\"tags\":[\"editor\",\"recommended\"],\"enabledByDefault\":false}");

/***/ }),

/***/ "./src/addons/addons/transparent-orphans/addon.json":
/*!**********************************************************!*\
  !*** ./src/addons/addons/transparent-orphans/addon.json ***!
  \**********************************************************/
/*! exports provided: name, description, tags, versionAdded, dynamicDisable, dynamicEnable, credits, settings, userstyles, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Block transparency\",\"description\":\"Adjust the transparency for blocks in the editor, with separate options for orphaned blocks (those without a hat block at the top) and blocks that are being dragged.\",\"tags\":[\"editor\",\"codeEditor\"],\"versionAdded\":\"1.15.0\",\"dynamicDisable\":true,\"dynamicEnable\":true,\"credits\":[{\"name\":\"ErrorGamer2000\",\"link\":\"https://scratch.mit.edu/users/ErrorGamer2000/\"},{\"name\":\"GarboMuffin\"}],\"settings\":[{\"name\":\"Block transparency (%)\",\"id\":\"block\",\"type\":\"integer\",\"min\":0,\"max\":100,\"reloadRequired\":false,\"default\":0},{\"name\":\"Orphaned transparency (%)\",\"id\":\"orphan\",\"type\":\"integer\",\"min\":0,\"max\":100,\"reloadRequired\":false,\"default\":25},{\"name\":\"Dragged transparency (%)\",\"id\":\"dragged\",\"type\":\"integer\",\"min\":0,\"max\":100,\"reloadRequired\":false,\"default\":25}],\"userstyles\":[{\"url\":\"userstyle.css\",\"matches\":[\"projects\"]}]}");

/***/ }),

/***/ "./src/addons/addons/tw-interface-customization/addon.json":
/*!*****************************************************************!*\
  !*** ./src/addons/addons/tw-interface-customization/addon.json ***!
  \*****************************************************************/
/*! exports provided: name, description, userscripts, userstyles, settings, tags, enabledByDefault, l10n, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Interface customization\",\"description\":\"Customize some other parts of the interface.\",\"userscripts\":[{\"url\":\"remove-backpack.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"],\"settingMatch\":{\"id\":\"removeBackpack\",\"value\":true}}],\"userstyles\":[{\"url\":\"remove-backpack.css\",\"matches\":[\"https://scratch.mit.edu/projects/*\"],\"settingMatch\":{\"id\":\"removeBackpack\",\"value\":true}}],\"settings\":[{\"name\":\"Remove backpack\",\"id\":\"removeBackpack\",\"type\":\"boolean\",\"default\":false}],\"tags\":[\"theme\"],\"enabledByDefault\":false,\"l10n\":true}");

/***/ }),

/***/ "./src/addons/addons/tw-project-info/addon.json":
/*!******************************************************!*\
  !*** ./src/addons/addons/tw-project-info/addon.json ***!
  \******************************************************/
/*! exports provided: name, description, tags, credits, userscripts, dynamicEnable, dynamicDisable, l10n, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Block count\",\"description\":\"Shows the number of blocks a project has.\",\"tags\":[\"community\"],\"credits\":[{\"name\":\"TheColaber\",\"link\":\"https://scratch.mit.edu/users/TheColaber\"}],\"userscripts\":[{\"url\":\"blockcount.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"dynamicEnable\":true,\"dynamicDisable\":true,\"l10n\":true}");

/***/ }),

/***/ "./src/addons/addons/variable-manager/addon.json":
/*!*******************************************************!*\
  !*** ./src/addons/addons/variable-manager/addon.json ***!
  \*******************************************************/
/*! exports provided: name, description, credits, userscripts, userstyles, versionAdded, tags, enabledByDefault, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Variable manager\",\"description\":\"Adds a tab next to \\\"sounds\\\" in the editor for easily updating variables and lists.\",\"credits\":[{\"name\":\"Jeffalo\"},{\"name\":\"GarboMuffin\"}],\"userscripts\":[{\"url\":\"userscript.js\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"userstyles\":[{\"url\":\"style.css\",\"matches\":[\"https://scratch.mit.edu/projects/*\"]}],\"versionAdded\":\"1.11.0\",\"tags\":[\"editor\",\"recommended\"],\"enabledByDefault\":false}");

/***/ }),

/***/ "./src/addons/channels.js":
/*!********************************!*\
  !*** ./src/addons/channels.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let changeChannel;
let reloadChannel;

if (typeof BroadcastChannel !== 'undefined') {
  changeChannel = new BroadcastChannel('addons-change');
  reloadChannel = new BroadcastChannel('addons-reload');
}

/* harmony default export */ __webpack_exports__["default"] = ({
  changeChannel,
  reloadChannel
});

/***/ }),

/***/ "./src/addons/event-target.js":
/*!************************************!*\
  !*** ./src/addons/event-target.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Some browsers have a non-functional EventTarget, so we write our own version that works everywhere.
class EventTargetShim {
  constructor() {
    this._events = {};
  }

  addEventListener(event, handler) {
    if (!this._events[event]) {
      this._events[event] = [];
    }

    this._events[event].push(handler);
  }

  removeEventListener(event, handler) {
    const handlers = this._events[event];

    if (handlers) {
      this._events[event] = handlers.filter(i => i !== handler);
    }
  }

  dispatchEvent(event) {
    const handlers = this._events[event.type];

    if (handlers) {
      for (const fn of handlers) {
        fn(event);
      }
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EventTargetShim);

/***/ }),

/***/ "./src/addons/is-mobile.js":
/*!*********************************!*\
  !*** ./src/addons/is-mobile.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isMobile = () => // In case running in node
typeof window !== 'undefined' && 'ontouchstart' in window;

/* harmony default export */ __webpack_exports__["default"] = (isMobile());

/***/ }),

/***/ "./src/addons/new-addons.json":
/*!************************************!*\
  !*** ./src/addons/new-addons.json ***!
  \************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"transparent-orphans\"]");

/***/ }),

/***/ "./src/addons/settings-store-singleton.js":
/*!************************************************!*\
  !*** ./src/addons/settings-store-singleton.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-store */ "./src/addons/settings-store.js");

const settingStore = new _settings_store__WEBPACK_IMPORTED_MODULE_0__["default"]();
settingStore.readLocalStorage();
/* harmony default export */ __webpack_exports__["default"] = (settingStore);

/***/ }),

/***/ "./src/addons/settings-store.js":
/*!**************************************!*\
  !*** ./src/addons/settings-store.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addon_manifests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addon-manifests */ "./src/addons/addon-manifests.js");
/* harmony import */ var _upstream_meta_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upstream-meta.json */ "./src/addons/upstream-meta.json");
var _upstream_meta_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./upstream-meta.json */ "./src/addons/upstream-meta.json", 1);
/* harmony import */ var _event_target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-target */ "./src/addons/event-target.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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



const SETTINGS_KEY = 'tw:addons';
const VERSION = 1;

class SettingsStore extends _event_target__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    super();
    this.store = this.createEmptyStore();
  }
  /**
   * @private
   */


  createEmptyStore() {
    const result = {};

    for (const addonId of Object.keys(_addon_manifests__WEBPACK_IMPORTED_MODULE_0__["default"])) {
      result[addonId] = {};
    }

    return result;
  }

  readLocalStorage() {
    const base = this.store;

    try {
      const local = localStorage.getItem(SETTINGS_KEY);

      if (local) {
        const result = JSON.parse(local);

        if (result && typeof result === 'object' && result._ === VERSION) {
          for (const key of Object.keys(result)) {
            if (base.hasOwnProperty(key)) {
              const value = result[key];

              if (value && typeof value === 'object') {
                base[key] = value;
              }
            }
          }
        }
      }
    } catch (e) {// ignore
    }

    this.store = base;
  }
  /**
   * @private
   */


  saveToLocalStorage() {
    try {
      const result = {
        _: VERSION
      };

      for (const addonId of Object.keys(_addon_manifests__WEBPACK_IMPORTED_MODULE_0__["default"])) {
        const data = this.getAddonStorage(addonId);

        if (Object.keys(data).length > 0) {
          result[addonId] = data;
        }
      }

      localStorage.setItem(SETTINGS_KEY, JSON.stringify(result));
    } catch (e) {// ignore
    }
  }
  /**
   * @private
   */


  getAddonStorage(addonId) {
    if (this.store[addonId]) {
      return this.store[addonId];
    }

    throw new Error("Unknown addon store: ".concat(addonId));
  }
  /**
   * @private
   */


  getAddonManifest(addonId) {
    if (_addon_manifests__WEBPACK_IMPORTED_MODULE_0__["default"][addonId]) {
      return _addon_manifests__WEBPACK_IMPORTED_MODULE_0__["default"][addonId];
    }

    throw new Error("Unknown addon: ".concat(addonId));
  }
  /**
   * @private
   */


  getAddonSettingObject(manifest, settingId) {
    if (!manifest.settings) {
      return null;
    }

    for (const setting of manifest.settings) {
      if (setting.id === settingId) {
        return setting;
      }
    }

    return null;
  }

  getAddonEnabled(addonId) {
    const storage = this.getAddonStorage(addonId);

    if (storage.hasOwnProperty('enabled')) {
      return storage.enabled;
    }

    const manifest = this.getAddonManifest(addonId);
    return !!manifest.enabledByDefault;
  }

  getAddonSetting(addonId, settingId) {
    const storage = this.getAddonStorage(addonId);
    const manifest = this.getAddonManifest(addonId);
    const settingObject = this.getAddonSettingObject(manifest, settingId);

    if (!settingObject) {
      throw new Error("Unknown setting: ".concat(settingId));
    }

    if (storage.hasOwnProperty(settingId)) {
      return storage[settingId];
    }

    return settingObject.default;
  }
  /**
   * @private
   */


  getDefaultSettings(addonId) {
    const manifest = this.getAddonManifest(addonId);
    const result = {};

    for (const {
      id,
      default: value
    } of manifest.settings) {
      result[id] = value;
    }

    return result;
  }

  setAddonEnabled(addonId, value) {
    const storage = this.getAddonStorage(addonId);
    const manifest = this.getAddonManifest(addonId);
    const oldValue = this.getAddonEnabled(addonId);

    if (value === null) {
      value = !!manifest.enabledByDefault;
      delete storage.enabled;
    } else if (typeof value === 'boolean') {
      storage.enabled = value;
    } else {
      throw new Error('Enabled value is invalid.');
    }

    this.saveToLocalStorage();

    if (value !== oldValue) {
      const reloadRequired = value ? !manifest.dynamicEnable : !manifest.dynamicDisable;
      this.dispatchEvent(new CustomEvent('setting-changed', {
        detail: {
          addonId,
          settingId: 'enabled',
          reloadRequired,
          value
        }
      }));
    }
  }

  setAddonSetting(addonId, settingId, value) {
    const storage = this.getAddonStorage(addonId);
    const manifest = this.getAddonManifest(addonId);
    const settingObject = this.getAddonSettingObject(manifest, settingId);
    const oldValue = this.getAddonSetting(addonId, settingId);

    if (value === null) {
      value = settingObject.default;
      delete storage[settingId];
    } else {
      if (settingObject.type === 'boolean') {
        if (typeof value !== 'boolean') {
          throw new Error('Setting value is invalid.');
        }
      } else if (settingObject.type === 'integer') {
        if (typeof value !== 'number') {
          throw new Error('Setting value is invalid.');
        }
      } else if (settingObject.type === 'color') {
        if (typeof value !== 'string' || !/^#[0-9a-f]{6}$/i.test(value)) {
          throw new Error('Setting value is invalid.');
        }
      } else if (settingObject.type === 'select') {
        if (!settingObject.potentialValues.some(potentialValue => potentialValue.id === value)) {
          throw new Error('Setting value is invalid.');
        }
      } else {
        throw new Error('Setting object is of unknown type');
      }

      storage[settingId] = value;
    }

    this.saveToLocalStorage();

    if (value !== oldValue) {
      this.dispatchEvent(new CustomEvent('setting-changed', {
        detail: {
          addonId,
          settingId,
          reloadRequired: settingObject.reloadRequired !== false,
          value
        }
      }));
    }
  }

  applyAddonPreset(addonId, presetId) {
    const manifest = this.getAddonManifest(addonId);

    for (const {
      id,
      values
    } of manifest.presets) {
      if (id !== presetId) {
        continue;
      }

      const settings = _objectSpread(_objectSpread({}, this.getDefaultSettings(addonId)), values);

      for (const key of Object.keys(settings)) {
        this.setAddonSetting(addonId, key, settings[key]);
      }

      return;
    }

    throw new Error("Unknown preset: ".concat(presetId));
  }

  resetAllAddons() {
    for (const addon of Object.keys(_addon_manifests__WEBPACK_IMPORTED_MODULE_0__["default"])) {
      this.resetAddon(addon, true);
    } // In case resetAddon missed some properties, do a hard reset on storage.


    this.store = this.createEmptyStore();
    this.saveToLocalStorage();
  }

  resetAddon(addonId, resetEverything) {
    const storage = this.getAddonStorage(addonId);

    for (const setting of Object.keys(storage)) {
      if (setting === 'enabled') {
        if (resetEverything) {
          this.setAddonEnabled(addonId, null);
        }

        continue;
      }

      try {
        this.setAddonSetting(addonId, setting, null);
      } catch (e) {// ignore
      }
    }
  }

  export({
    theme
  }) {
    const result = {
      core: {
        // Upstream property. We don't use this.
        lightTheme: theme === 'light',
        // Append -tw to all versions, for example 1.8.0-prerelease-tw
        version: "".concat(_upstream_meta_json__WEBPACK_IMPORTED_MODULE_1__.version, "-tw")
      },
      addons: {}
    };

    for (const [addonId, manifest] of Object.entries(_addon_manifests__WEBPACK_IMPORTED_MODULE_0__["default"])) {
      const enabled = this.getAddonEnabled(addonId);
      const settings = {};

      if (manifest.settings) {
        for (const {
          id
        } of manifest.settings) {
          settings[id] = this.getAddonSetting(addonId, id);
        }
      }

      result.addons[addonId] = {
        enabled,
        settings
      };
    }

    return result;
  }

  import(data) {
    for (const [addonId, value] of Object.entries(data.addons)) {
      if (!_addon_manifests__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProperty(addonId)) {
        continue;
      }

      const {
        enabled,
        settings
      } = value;

      if (typeof enabled === 'boolean') {
        this.setAddonEnabled(addonId, enabled);
      }

      for (const [settingId, settingValue] of Object.entries(settings)) {
        try {
          this.setAddonSetting(addonId, settingId, settingValue);
        } catch (e) {// ignore
        }
      }
    }
  }

  setStoreWithVersionCheck({
    version,
    store
  }) {
    if (version !== _upstream_meta_json__WEBPACK_IMPORTED_MODULE_1__.commit) {
      return;
    }

    this.setStore(store);
  }

  setStore(newStore) {
    const oldStore = this.store;

    for (const addonId of Object.keys(oldStore)) {
      const oldSettings = oldStore[addonId];
      const newSettings = newStore[addonId];

      if (!newSettings || typeof newSettings !== 'object') {
        continue;
      }

      if (JSON.stringify(oldSettings) !== JSON.stringify(newSettings)) {
        const manifest = this.getAddonManifest(addonId);
        const dynamicEnable = !!manifest.dynamicEnable && !oldSettings.enabled && newSettings.enabled;
        const dynamicDisable = !!manifest.dynamicDisable && oldSettings.enabled && !newSettings.enabled; // Clone to avoid pass-by-reference issues

        this.store[addonId] = JSON.parse(JSON.stringify(newSettings));
        this.dispatchEvent(new CustomEvent('addon-changed', {
          detail: {
            addonId,
            dynamicEnable,
            dynamicDisable
          }
        }));
      }
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SettingsStore);

/***/ }),

/***/ "./src/addons/upstream-meta.json":
/*!***************************************!*\
  !*** ./src/addons/upstream-meta.json ***!
  \***************************************/
/*! exports provided: version, commit, languages, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"version\":\"1.16.1\",\"commit\":\"0b38e3f\",\"languages\":[\"de\",\"en\",\"es\",\"fr\",\"it\",\"ja\",\"ko\",\"pl\",\"pt-br\",\"ro\",\"ru\",\"sl\",\"tr\",\"zh-tw\"]}");

/***/ }),

/***/ "./src/lib/tw-theme-hoc.jsx":
/*!**********************************!*\
  !*** ./src/lib/tw-theme-hoc.jsx ***!
  \**********************************/
/*! exports provided: getInitialDarkMode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialDarkMode", function() { return getInitialDarkMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThemeHOC; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tw-theme-dark.css */ "./node_modules/raw-loader/index.js!./src/lib/tw-theme-dark.css");
/* harmony import */ var _raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const THEME_KEY = 'tw:theme';
const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const getInitialDarkMode = () => {
  try {
    const item = localStorage.getItem(THEME_KEY);

    if (item !== null) {
      return item === 'dark';
    }
  } catch (e) {// ignore
  }

  return darkMediaQuery.matches;
};
const darkModeStylesheet = document.createElement('style');
darkModeStylesheet.textContent = _raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1___default.a;

const ThemeHOC = function ThemeHOC(WrappedComponent) {
  class ThemeComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
      super(props);
      this.handleQueryChange = this.handleQueryChange.bind(this);
      this.handleClickTheme = this.handleClickTheme.bind(this);
      this.state = {
        dark: getInitialDarkMode()
      };
    }

    componentDidMount() {
      // media query does not have listeners in legacy edge
      if (darkMediaQuery.addEventListener) {
        darkMediaQuery.addEventListener('change', this.handleQueryChange);
      }

      this.updateDark();
    }

    componentDidUpdate() {
      try {
        localStorage.setItem(THEME_KEY, this.state.dark ? 'dark' : 'light');
      } catch (e) {// ignore
      }

      this.updateDark();
    }

    componentWillUnmount() {
      // media query does not have listeners in legacy edge
      if (darkMediaQuery.removeEventListener) {
        darkMediaQuery.removeEventListener('change', this.handleQueryChange);
      }
    }

    updateDark() {
      const dark = this.state.dark;
      document.body.setAttribute('theme', dark ? 'dark' : 'light');

      if (dark && !darkModeStylesheet.parentNode) {
        document.body.insertBefore(darkModeStylesheet, document.body.firstChild);
      } else if (!dark && darkModeStylesheet.parentNode) {
        darkModeStylesheet.parentNode.removeChild(darkModeStylesheet);
      }
    }

    handleQueryChange() {
      this.setState({
        dark: darkMediaQuery.matches
      });
    }

    handleClickTheme() {
      this.setState(state => ({
        dark: !state.dark
      }));
    }

    render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({
        onClickTheme: this.handleClickTheme
      }, this.props));
    }

  }

  return ThemeComponent;
};



/***/ })

}]);
//# sourceMappingURL=addon-settings~editor~fullscreen~player.js.map