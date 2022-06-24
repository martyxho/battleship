/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1px;\n  background-color: black;\n}\n\n.main {\n  background-color: white;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 40px 1fr;\n  grid-template-rows: 40px 1fr;\n}\n\n.grid {\n  grid-column: 2;\n  grid-row: 2;\n  height: 400px;\n  width: 400px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.letters {\n  grid-row: 1;\n  grid-column: 2;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.numbers {\n  grid-column: 1;\n  grid-row: 2;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n}\n.grid-div {\n  width: 100%;\n  border: solid 1px rgb(182, 171, 228);\n  margin-top: -1px;\n  border-right: none;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  font-size: 25px;\n}\n\n.grid-div:nth-child(10n) {\n  border-right: solid 1px rgb(182, 171, 228);\n} \n\n.guide-div {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\n.ship {\n  background-color: rgba(99, 111, 212, 0.301);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,4BAA4B;AAC9B;;AAEA;EACE,cAAc;EACd,WAAW;EACX,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,WAAW;EACX,cAAc;EACd,aAAa;EACb,sCAAsC;AACxC;;AAEA;EACE,cAAc;EACd,WAAW;EACX,aAAa;EACb,mCAAmC;AACrC;AACA;EACE,WAAW;EACX,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,2CAA2C;AAC7C","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1px;\n  background-color: black;\n}\n\n.main {\n  background-color: white;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 40px 1fr;\n  grid-template-rows: 40px 1fr;\n}\n\n.grid {\n  grid-column: 2;\n  grid-row: 2;\n  height: 400px;\n  width: 400px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.letters {\n  grid-row: 1;\n  grid-column: 2;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.numbers {\n  grid-column: 1;\n  grid-row: 2;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n}\n.grid-div {\n  width: 100%;\n  border: solid 1px rgb(182, 171, 228);\n  margin-top: -1px;\n  border-right: none;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  font-size: 25px;\n}\n\n.grid-div:nth-child(10n) {\n  border-right: solid 1px rgb(182, 171, 228);\n} \n\n.guide-div {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\n.ship {\n  background-color: rgba(99, 111, 212, 0.301);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/computer.js":
/*!*************************!*\
  !*** ./src/computer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


const computerFactory = () => {
  const board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  board.populateGameboard();
  function getBoard() {
    return board;
  }
  function attack(playerBoard) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const grid = playerBoard.getGrid();
    while (!playerBoard.full()) {
      const a = (Math.floor(Math.random() * 10)) + 1;
      const b = alphabet[Math.floor(Math.random() * 10)];
      if (!grid[a][b] || !grid[a][b].hasOwnProperty('marker')) {
        return playerBoard.receiveAttack(a, b);
      }
    }
  }
  return { getBoard, attack };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (computerFactory);


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayState": () => (/* binding */ displayState),
/* harmony export */   "endGame": () => (/* binding */ endGame)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


const grid = (() => {
  const pGrid = document.querySelector('#left .grid');
  const cGrid = document.querySelector('#right .grid');
  createGridBoxes(pGrid, false);
  createGridBoxes(cGrid, true);
  function createGridBoxes(grid, comp) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    for (let i = 1; i < 11; i++) {
      alphabet.forEach((e) => {
        const div = document.createElement('div');
        div.classList = 'grid-div';
        div.dataset.coord = [i, e];
        if (comp) {
          div.addEventListener('click', attack, { once: true });
        }
        grid.appendChild(div);
      });
    }
  }
  function attack(e) {
    const coord = e.target.dataset.coord.split(',');
    ___WEBPACK_IMPORTED_MODULE_0__["default"].receivePlayerAttack(coord);
  }
  function removeListeners() {
    const cGrid = document.querySelector('#left .grid');
    const divs = cGrid.querySelectorAll('.grid-div');
    divs.forEach((e) => {
      e.removeEventListener('click', attack, { once: true });
    });
  }
  return { removeListeners };
})();

const createGridGuides = (() => {
  const containers = document.querySelectorAll('.container');
  containers.forEach((c) => {
    createAlphabetGuide(c);
    createNumbersGuide(c);
  });
  function createAlphabetGuide(c) {
    const letters = c.querySelector('.letters');
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    alphabet.forEach((e) => {
      const div = document.createElement('div');
      div.textContent = e;
      div.classList = 'guide-div';
      letters.appendChild(div);
    });
  }
  function createNumbersGuide(c) {
    const numbers = c.querySelector('.numbers');
    for (let i = 1; i < 11; i++) {
      const div = document.createElement('div');
      div.textContent = i;
      div.classList = 'guide-div';
      numbers.appendChild(div);
    }
  }
})();

const displayState = (() => {
  function display(pGrid, cGrid) {
    displayShips(pGrid);
    displayHitsBoth(pGrid, cGrid);
  }
  function displayShips(grid) {
    const gridDisplay = document.querySelector('#left .grid');
    Object.entries(grid).forEach((e) => {
      const [key1, val1] = e;
      Object.entries(val1).forEach((j) => {
        const [key2, val2] = j;
        if (val2) {
          if (val2.hasOwnProperty('isSunk')) {
            const box = gridDisplay.querySelector(`div[data-coord = "${key1},${key2}"]`);
            box.classList.add('ship');
          }
        }
      });
    });
  }
  function displayHitsBoth(pGrid, cGrid) {
    const pGridDisplay = document.querySelector('#left .grid');
    const cGridDisplay = document.querySelector('#right .grid');
    displayHits(pGrid, pGridDisplay);
    displayHits(cGrid, cGridDisplay);
  }

  function displayHits(grid, gridDisplay) {
    Object.entries(grid).forEach((e) => {
      const [key1, val1] = e;
      Object.entries(val1).forEach((j) => {
        const [key2, val2] = j;
        if (val2) {
          if (val2.hasOwnProperty('marker')) {
            const box = gridDisplay.querySelector(`div[data-coord = "${key1},${key2}"]`);
            box.textContent = 'h';
          }
        }
      });
    });
  }
  return { display };
})();

function endGame(winner) {
  grid.removeListeners();
  alert(`${winner} wins!`);
}




/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


const gameboard = () => {
  const grid = createGameboard();

  function receiveAttack(a, b) {
    const coord = grid[a][b];
    if (coord) {
      if (coord.hasOwnProperty('marker')) {
        throw new Error('illegal hit on marker');
      }
      coord.hit();
      grid[a][b] = hitObj(coord);
      return true;
    }
    grid[a][b] = hitObj();
    return false;
  }

  function hitObj(ship = null) {
    const obj = { marker: 'x' };
    if (ship) {
      obj.ship = ship;
    }
    return obj;
  }
  function populateGameboard() {
    const ships = createShips();
    fillGrid([5, 'A'], [8, 'A'], false, ships.s4a);
    fillGrid([4, 'C'], [4, 'E'], true, ships.s3a);
    fillGrid([6, 'D'], [6, 'F'], true, ships.s3b);
    fillGrid([8, 'E'], [9, 'E'], false, ships.s2a);
    fillGrid([5, 'I'], [6, 'I'], false, ships.s2b);
    fillGrid([10, 'H'], [10, 'I'], true, ships.s2c);
    fillGrid([1, 'D'], [1, 'D'], true, ships.s1a);
    fillGrid([1, 'J'], [1, 'J'], true, ships.s1b);
    fillGrid([3, 'J'], [3, 'J'], true, ships.s1c);
    fillGrid([8, 'C'], [8, 'C'], true, ships.s1d);
  }
  function hitAll() {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    Object.values(grid).forEach((e, i) => {
      Object.values(e).forEach((x, j) => {
        const a = i + 1;
        const b = alphabet[j];
        receiveAttack(a, b);
      });
    });
  }
  function sinkAll() {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    Object.values(grid).forEach((e, i) => {
      Object.values(e).forEach((x, j) => {
        if (x) {
          if (x.hasOwnProperty('isSunk')) {
            const a = i + 1;
            const b = alphabet[j];
            receiveAttack(a, b);
          }
        }
      });
    });
  }
  function allSunk() {
    let noShips = true;
    Object.values(grid).forEach((e) => {
      Object.values(e).forEach((x) => {
        if (x) {
          if (x.hasOwnProperty('isSunk')) {
            noShips = false;
          }
        }
      });
    });
    return noShips;
  }
  function fillGrid(c1, c2, hori, ship) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    if (hori) {
      const start = alphabet.indexOf(c1[1]);
      const end = alphabet.indexOf(c2[1]);
      for (let i = start; i <= end; i++) {
        const alpha = alphabet[i];
        grid[c1[0]][alpha] = ship;
      }
    } else {
      for (let i = c1[0]; i <= c2[0]; i++) {
        grid[i][c1[1]] = ship;
      }
    }
  }
  function createShips() {
    const s4a = _ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip(4);
    const s3a = _ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip(3);
    const s3b = _ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip(3);
    const s2a = _ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip(2);
    const s2b = _ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip(2);
    const s2c = _ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip(2);
    const s1a = _ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip(1);
    const s1b = _ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip(1);
    const s1c = _ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip(1);
    const s1d = _ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip(1);

    return {
      s4a, s3a, s3b, s2a, s2b, s2c, s1a, s1b, s1c, s1d,
    };
  }

  function createGameboard() {
    const inner = createInner();
    const outer = {};
    for (let i = 1; i < 11; i++) {
      outer[i] = { ...inner };
    }
    return outer;
  }
  function createInner() {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const obj = {};
    alphabet.forEach((e) => obj[e] = null);
    return obj;
  }

  function getGrid() {
    return grid;
  }

  function full() {
    let result = true;
    Object.values(grid).forEach((e) => {
      const check = Object.values(e).includes(null);
      if (check) {
        result = false;
      }
    });
    return result;
  }
  return {
    getGrid, populateGameboard, receiveAttack, sinkAll, allSunk, full, hitAll,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboard);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./computer */ "./src/computer.js");





const game = (() => {
  const player = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const pBoard = player.getBoard();
  const computer = (0,_computer__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const cBoard = computer.getBoard();
  _dom__WEBPACK_IMPORTED_MODULE_1__.displayState.display(pBoard.getGrid(), cBoard.getGrid());
  function gameLoop(comp = computer) {
    let hit = false;
    do {
      hit = comp.attack(pBoard);
      _dom__WEBPACK_IMPORTED_MODULE_1__.displayState.display(pBoard.getGrid(), cBoard.getGrid());
      if (checkEnd()) {
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.endGame)('computer');
      }
    } while (hit);
  }
  function receivePlayerAttack(coord) {
    const [a, b] = coord;
    const hit = cBoard.receiveAttack(a, b);
    _dom__WEBPACK_IMPORTED_MODULE_1__.displayState.display(pBoard.getGrid(), cBoard.getGrid());
    if (checkEnd()) {
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.endGame)('player');
      return;
    }
    if (hit) {
      return;
    }
    gameLoop();
  }

  function checkEnd() {
    return (pBoard.allSunk() || cBoard.allSunk());
  }
  return { receivePlayerAttack, gameLoop };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


const playerFactory = () => {
  const board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  board.populateGameboard();
  function getBoard() {
    return board;
  }
  function turn(cBoard) {
  }
  return { getBoard };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playerFactory);


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ship = (() => {
  function createShip(length) {
    let hits = 0;
    const hit = (n) => {
      if (hits < length) {
        hits += 1;
        return true;
      }
      return false;
    };
    const isSunk = () => {
      if (hits == length) {
        return true;
      }
      return false;
    };
    return {
      length,
      hit,
      isSunk,
    };
  }

  function createArr(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(null);
    }
    return arr;
  }

  return { createShip };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcHV0ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtZ2FwOiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmcjtcXG59XFxuXFxuLmdyaWQge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogMjtcXG4gIGhlaWdodDogNDAwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmxldHRlcnMge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLm51bWJlcnMge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuLmdyaWQtZGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDE4MiwgMTcxLCAyMjgpO1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi5ncmlkLWRpdjpudGgtY2hpbGQoMTBuKSB7XFxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoMTgyLCAxNzEsIDIyOCk7XFxufSBcXG5cXG4uZ3VpZGUtZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTksIDExMSwgMjEyLCAwLjMwMSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUNiLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC1nYXA6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGdyaWQtcm93OiAyO1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4ubGV0dGVycyB7XFxuICBncmlkLXJvdzogMTtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4ubnVtYmVycyB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG4uZ3JpZC1kaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IHNvbGlkIDFweCByZ2IoMTgyLCAxNzEsIDIyOCk7XFxuICBtYXJnaW4tdG9wOiAtMXB4O1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLmdyaWQtZGl2Om50aC1jaGlsZCgxMG4pIHtcXG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYigxODIsIDE3MSwgMjI4KTtcXG59IFxcblxcbi5ndWlkZS1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5OSwgMTExLCAyMTIsIDAuMzAxKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZ2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcblxuY29uc3QgY29tcHV0ZXJGYWN0b3J5ID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IGdhbWVib2FyZCgpO1xuICBib2FyZC5wb3B1bGF0ZUdhbWVib2FyZCgpO1xuICBmdW5jdGlvbiBnZXRCb2FyZCgpIHtcbiAgICByZXR1cm4gYm9hcmQ7XG4gIH1cbiAgZnVuY3Rpb24gYXR0YWNrKHBsYXllckJvYXJkKSB7XG4gICAgY29uc3QgYWxwaGFiZXQgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBjb25zdCBncmlkID0gcGxheWVyQm9hcmQuZ2V0R3JpZCgpO1xuICAgIHdoaWxlICghcGxheWVyQm9hcmQuZnVsbCgpKSB7XG4gICAgICBjb25zdCBhID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkgKyAxO1xuICAgICAgY29uc3QgYiA9IGFscGhhYmV0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV07XG4gICAgICBpZiAoIWdyaWRbYV1bYl0gfHwgIWdyaWRbYV1bYl0uaGFzT3duUHJvcGVydHkoJ21hcmtlcicpKSB7XG4gICAgICAgIHJldHVybiBwbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKGEsIGIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4geyBnZXRCb2FyZCwgYXR0YWNrIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wdXRlckZhY3Rvcnk7XG4iLCJpbXBvcnQgZ2FtZSBmcm9tICcuJztcblxuY29uc3QgZ3JpZCA9ICgoKSA9PiB7XG4gIGNvbnN0IHBHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlZnQgLmdyaWQnKTtcbiAgY29uc3QgY0dyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmlnaHQgLmdyaWQnKTtcbiAgY3JlYXRlR3JpZEJveGVzKHBHcmlkLCBmYWxzZSk7XG4gIGNyZWF0ZUdyaWRCb3hlcyhjR3JpZCwgdHJ1ZSk7XG4gIGZ1bmN0aW9uIGNyZWF0ZUdyaWRCb3hlcyhncmlkLCBjb21wKSB7XG4gICAgY29uc3QgYWxwaGFiZXQgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDExOyBpKyspIHtcbiAgICAgIGFscGhhYmV0LmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QgPSAnZ3JpZC1kaXYnO1xuICAgICAgICBkaXYuZGF0YXNldC5jb29yZCA9IFtpLCBlXTtcbiAgICAgICAgaWYgKGNvbXApIHtcbiAgICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhdHRhY2ssIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBncmlkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gYXR0YWNrKGUpIHtcbiAgICBjb25zdCBjb29yZCA9IGUudGFyZ2V0LmRhdGFzZXQuY29vcmQuc3BsaXQoJywnKTtcbiAgICBnYW1lLnJlY2VpdmVQbGF5ZXJBdHRhY2soY29vcmQpO1xuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBjb25zdCBjR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0IC5ncmlkJyk7XG4gICAgY29uc3QgZGl2cyA9IGNHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLWRpdicpO1xuICAgIGRpdnMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGF0dGFjaywgeyBvbmNlOiB0cnVlIH0pO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB7IHJlbW92ZUxpc3RlbmVycyB9O1xufSkoKTtcblxuY29uc3QgY3JlYXRlR3JpZEd1aWRlcyA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyJyk7XG4gIGNvbnRhaW5lcnMuZm9yRWFjaCgoYykgPT4ge1xuICAgIGNyZWF0ZUFscGhhYmV0R3VpZGUoYyk7XG4gICAgY3JlYXRlTnVtYmVyc0d1aWRlKGMpO1xuICB9KTtcbiAgZnVuY3Rpb24gY3JlYXRlQWxwaGFiZXRHdWlkZShjKSB7XG4gICAgY29uc3QgbGV0dGVycyA9IGMucXVlcnlTZWxlY3RvcignLmxldHRlcnMnKTtcbiAgICBjb25zdCBhbHBoYWJldCA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICAgIGFscGhhYmV0LmZvckVhY2goKGUpID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LnRleHRDb250ZW50ID0gZTtcbiAgICAgIGRpdi5jbGFzc0xpc3QgPSAnZ3VpZGUtZGl2JztcbiAgICAgIGxldHRlcnMuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVOdW1iZXJzR3VpZGUoYykge1xuICAgIGNvbnN0IG51bWJlcnMgPSBjLnF1ZXJ5U2VsZWN0b3IoJy5udW1iZXJzJyk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMTsgaSsrKSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi50ZXh0Q29udGVudCA9IGk7XG4gICAgICBkaXYuY2xhc3NMaXN0ID0gJ2d1aWRlLWRpdic7XG4gICAgICBudW1iZXJzLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuICB9XG59KSgpO1xuXG5jb25zdCBkaXNwbGF5U3RhdGUgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBkaXNwbGF5KHBHcmlkLCBjR3JpZCkge1xuICAgIGRpc3BsYXlTaGlwcyhwR3JpZCk7XG4gICAgZGlzcGxheUhpdHNCb3RoKHBHcmlkLCBjR3JpZCk7XG4gIH1cbiAgZnVuY3Rpb24gZGlzcGxheVNoaXBzKGdyaWQpIHtcbiAgICBjb25zdCBncmlkRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0IC5ncmlkJyk7XG4gICAgT2JqZWN0LmVudHJpZXMoZ3JpZCkuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgY29uc3QgW2tleTEsIHZhbDFdID0gZTtcbiAgICAgIE9iamVjdC5lbnRyaWVzKHZhbDEpLmZvckVhY2goKGopID0+IHtcbiAgICAgICAgY29uc3QgW2tleTIsIHZhbDJdID0gajtcbiAgICAgICAgaWYgKHZhbDIpIHtcbiAgICAgICAgICBpZiAodmFsMi5oYXNPd25Qcm9wZXJ0eSgnaXNTdW5rJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGdyaWREaXNwbGF5LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLWNvb3JkID0gXCIke2tleTF9LCR7a2V5Mn1cIl1gKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBkaXNwbGF5SGl0c0JvdGgocEdyaWQsIGNHcmlkKSB7XG4gICAgY29uc3QgcEdyaWREaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlZnQgLmdyaWQnKTtcbiAgICBjb25zdCBjR3JpZERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmlnaHQgLmdyaWQnKTtcbiAgICBkaXNwbGF5SGl0cyhwR3JpZCwgcEdyaWREaXNwbGF5KTtcbiAgICBkaXNwbGF5SGl0cyhjR3JpZCwgY0dyaWREaXNwbGF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlIaXRzKGdyaWQsIGdyaWREaXNwbGF5KSB7XG4gICAgT2JqZWN0LmVudHJpZXMoZ3JpZCkuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgY29uc3QgW2tleTEsIHZhbDFdID0gZTtcbiAgICAgIE9iamVjdC5lbnRyaWVzKHZhbDEpLmZvckVhY2goKGopID0+IHtcbiAgICAgICAgY29uc3QgW2tleTIsIHZhbDJdID0gajtcbiAgICAgICAgaWYgKHZhbDIpIHtcbiAgICAgICAgICBpZiAodmFsMi5oYXNPd25Qcm9wZXJ0eSgnbWFya2VyJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGdyaWREaXNwbGF5LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLWNvb3JkID0gXCIke2tleTF9LCR7a2V5Mn1cIl1gKTtcbiAgICAgICAgICAgIGJveC50ZXh0Q29udGVudCA9ICdoJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB7IGRpc3BsYXkgfTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGVuZEdhbWUod2lubmVyKSB7XG4gIGdyaWQucmVtb3ZlTGlzdGVuZXJzKCk7XG4gIGFsZXJ0KGAke3dpbm5lcn0gd2lucyFgKTtcbn1cblxuZXhwb3J0IHsgZGlzcGxheVN0YXRlLCBlbmRHYW1lIH07XG4iLCJpbXBvcnQgc2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jb25zdCBnYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBjcmVhdGVHYW1lYm9hcmQoKTtcblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGEsIGIpIHtcbiAgICBjb25zdCBjb29yZCA9IGdyaWRbYV1bYl07XG4gICAgaWYgKGNvb3JkKSB7XG4gICAgICBpZiAoY29vcmQuaGFzT3duUHJvcGVydHkoJ21hcmtlcicpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaWxsZWdhbCBoaXQgb24gbWFya2VyJyk7XG4gICAgICB9XG4gICAgICBjb29yZC5oaXQoKTtcbiAgICAgIGdyaWRbYV1bYl0gPSBoaXRPYmooY29vcmQpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGdyaWRbYV1bYl0gPSBoaXRPYmooKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBoaXRPYmooc2hpcCA9IG51bGwpIHtcbiAgICBjb25zdCBvYmogPSB7IG1hcmtlcjogJ3gnIH07XG4gICAgaWYgKHNoaXApIHtcbiAgICAgIG9iai5zaGlwID0gc2hpcDtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICBmdW5jdGlvbiBwb3B1bGF0ZUdhbWVib2FyZCgpIHtcbiAgICBjb25zdCBzaGlwcyA9IGNyZWF0ZVNoaXBzKCk7XG4gICAgZmlsbEdyaWQoWzUsICdBJ10sIFs4LCAnQSddLCBmYWxzZSwgc2hpcHMuczRhKTtcbiAgICBmaWxsR3JpZChbNCwgJ0MnXSwgWzQsICdFJ10sIHRydWUsIHNoaXBzLnMzYSk7XG4gICAgZmlsbEdyaWQoWzYsICdEJ10sIFs2LCAnRiddLCB0cnVlLCBzaGlwcy5zM2IpO1xuICAgIGZpbGxHcmlkKFs4LCAnRSddLCBbOSwgJ0UnXSwgZmFsc2UsIHNoaXBzLnMyYSk7XG4gICAgZmlsbEdyaWQoWzUsICdJJ10sIFs2LCAnSSddLCBmYWxzZSwgc2hpcHMuczJiKTtcbiAgICBmaWxsR3JpZChbMTAsICdIJ10sIFsxMCwgJ0knXSwgdHJ1ZSwgc2hpcHMuczJjKTtcbiAgICBmaWxsR3JpZChbMSwgJ0QnXSwgWzEsICdEJ10sIHRydWUsIHNoaXBzLnMxYSk7XG4gICAgZmlsbEdyaWQoWzEsICdKJ10sIFsxLCAnSiddLCB0cnVlLCBzaGlwcy5zMWIpO1xuICAgIGZpbGxHcmlkKFszLCAnSiddLCBbMywgJ0onXSwgdHJ1ZSwgc2hpcHMuczFjKTtcbiAgICBmaWxsR3JpZChbOCwgJ0MnXSwgWzgsICdDJ10sIHRydWUsIHNoaXBzLnMxZCk7XG4gIH1cbiAgZnVuY3Rpb24gaGl0QWxsKCkge1xuICAgIGNvbnN0IGFscGhhYmV0ID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG4gICAgT2JqZWN0LnZhbHVlcyhncmlkKS5mb3JFYWNoKChlLCBpKSA9PiB7XG4gICAgICBPYmplY3QudmFsdWVzKGUpLmZvckVhY2goKHgsIGopID0+IHtcbiAgICAgICAgY29uc3QgYSA9IGkgKyAxO1xuICAgICAgICBjb25zdCBiID0gYWxwaGFiZXRbal07XG4gICAgICAgIHJlY2VpdmVBdHRhY2soYSwgYik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBzaW5rQWxsKCkge1xuICAgIGNvbnN0IGFscGhhYmV0ID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG4gICAgT2JqZWN0LnZhbHVlcyhncmlkKS5mb3JFYWNoKChlLCBpKSA9PiB7XG4gICAgICBPYmplY3QudmFsdWVzKGUpLmZvckVhY2goKHgsIGopID0+IHtcbiAgICAgICAgaWYgKHgpIHtcbiAgICAgICAgICBpZiAoeC5oYXNPd25Qcm9wZXJ0eSgnaXNTdW5rJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBpICsgMTtcbiAgICAgICAgICAgIGNvbnN0IGIgPSBhbHBoYWJldFtqXTtcbiAgICAgICAgICAgIHJlY2VpdmVBdHRhY2soYSwgYik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBhbGxTdW5rKCkge1xuICAgIGxldCBub1NoaXBzID0gdHJ1ZTtcbiAgICBPYmplY3QudmFsdWVzKGdyaWQpLmZvckVhY2goKGUpID0+IHtcbiAgICAgIE9iamVjdC52YWx1ZXMoZSkuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICBpZiAoeCkge1xuICAgICAgICAgIGlmICh4Lmhhc093blByb3BlcnR5KCdpc1N1bmsnKSkge1xuICAgICAgICAgICAgbm9TaGlwcyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5vU2hpcHM7XG4gIH1cbiAgZnVuY3Rpb24gZmlsbEdyaWQoYzEsIGMyLCBob3JpLCBzaGlwKSB7XG4gICAgY29uc3QgYWxwaGFiZXQgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBpZiAoaG9yaSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBhbHBoYWJldC5pbmRleE9mKGMxWzFdKTtcbiAgICAgIGNvbnN0IGVuZCA9IGFscGhhYmV0LmluZGV4T2YoYzJbMV0pO1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGFscGhhID0gYWxwaGFiZXRbaV07XG4gICAgICAgIGdyaWRbYzFbMF1dW2FscGhhXSA9IHNoaXA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSBjMVswXTsgaSA8PSBjMlswXTsgaSsrKSB7XG4gICAgICAgIGdyaWRbaV1bYzFbMV1dID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlU2hpcHMoKSB7XG4gICAgY29uc3QgczRhID0gc2hpcC5jcmVhdGVTaGlwKDQpO1xuICAgIGNvbnN0IHMzYSA9IHNoaXAuY3JlYXRlU2hpcCgzKTtcbiAgICBjb25zdCBzM2IgPSBzaGlwLmNyZWF0ZVNoaXAoMyk7XG4gICAgY29uc3QgczJhID0gc2hpcC5jcmVhdGVTaGlwKDIpO1xuICAgIGNvbnN0IHMyYiA9IHNoaXAuY3JlYXRlU2hpcCgyKTtcbiAgICBjb25zdCBzMmMgPSBzaGlwLmNyZWF0ZVNoaXAoMik7XG4gICAgY29uc3QgczFhID0gc2hpcC5jcmVhdGVTaGlwKDEpO1xuICAgIGNvbnN0IHMxYiA9IHNoaXAuY3JlYXRlU2hpcCgxKTtcbiAgICBjb25zdCBzMWMgPSBzaGlwLmNyZWF0ZVNoaXAoMSk7XG4gICAgY29uc3QgczFkID0gc2hpcC5jcmVhdGVTaGlwKDEpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHM0YSwgczNhLCBzM2IsIHMyYSwgczJiLCBzMmMsIHMxYSwgczFiLCBzMWMsIHMxZCxcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlR2FtZWJvYXJkKCkge1xuICAgIGNvbnN0IGlubmVyID0gY3JlYXRlSW5uZXIoKTtcbiAgICBjb25zdCBvdXRlciA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xuICAgICAgb3V0ZXJbaV0gPSB7IC4uLmlubmVyIH07XG4gICAgfVxuICAgIHJldHVybiBvdXRlcjtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVJbm5lcigpIHtcbiAgICBjb25zdCBhbHBoYWJldCA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgIGFscGhhYmV0LmZvckVhY2goKGUpID0+IG9ialtlXSA9IG51bGwpO1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRHcmlkKCkge1xuICAgIHJldHVybiBncmlkO1xuICB9XG5cbiAgZnVuY3Rpb24gZnVsbCgpIHtcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICBPYmplY3QudmFsdWVzKGdyaWQpLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGNvbnN0IGNoZWNrID0gT2JqZWN0LnZhbHVlcyhlKS5pbmNsdWRlcyhudWxsKTtcbiAgICAgIGlmIChjaGVjaykge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHJldHVybiB7XG4gICAgZ2V0R3JpZCwgcG9wdWxhdGVHYW1lYm9hcmQsIHJlY2VpdmVBdHRhY2ssIHNpbmtBbGwsIGFsbFN1bmssIGZ1bGwsIGhpdEFsbCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZDtcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZGlzcGxheVN0YXRlLCBlbmRHYW1lIH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHBsYXllckZhY3RvcnkgZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IGNvbXB1dGVyRmFjdG9yeSBmcm9tICcuL2NvbXB1dGVyJztcblxuY29uc3QgZ2FtZSA9ICgoKSA9PiB7XG4gIGNvbnN0IHBsYXllciA9IHBsYXllckZhY3RvcnkoKTtcbiAgY29uc3QgcEJvYXJkID0gcGxheWVyLmdldEJvYXJkKCk7XG4gIGNvbnN0IGNvbXB1dGVyID0gY29tcHV0ZXJGYWN0b3J5KCk7XG4gIGNvbnN0IGNCb2FyZCA9IGNvbXB1dGVyLmdldEJvYXJkKCk7XG4gIGRpc3BsYXlTdGF0ZS5kaXNwbGF5KHBCb2FyZC5nZXRHcmlkKCksIGNCb2FyZC5nZXRHcmlkKCkpO1xuICBmdW5jdGlvbiBnYW1lTG9vcChjb21wID0gY29tcHV0ZXIpIHtcbiAgICBsZXQgaGl0ID0gZmFsc2U7XG4gICAgZG8ge1xuICAgICAgaGl0ID0gY29tcC5hdHRhY2socEJvYXJkKTtcbiAgICAgIGRpc3BsYXlTdGF0ZS5kaXNwbGF5KHBCb2FyZC5nZXRHcmlkKCksIGNCb2FyZC5nZXRHcmlkKCkpO1xuICAgICAgaWYgKGNoZWNrRW5kKCkpIHtcbiAgICAgICAgZW5kR2FtZSgnY29tcHV0ZXInKTtcbiAgICAgIH1cbiAgICB9IHdoaWxlIChoaXQpO1xuICB9XG4gIGZ1bmN0aW9uIHJlY2VpdmVQbGF5ZXJBdHRhY2soY29vcmQpIHtcbiAgICBjb25zdCBbYSwgYl0gPSBjb29yZDtcbiAgICBjb25zdCBoaXQgPSBjQm9hcmQucmVjZWl2ZUF0dGFjayhhLCBiKTtcbiAgICBkaXNwbGF5U3RhdGUuZGlzcGxheShwQm9hcmQuZ2V0R3JpZCgpLCBjQm9hcmQuZ2V0R3JpZCgpKTtcbiAgICBpZiAoY2hlY2tFbmQoKSkge1xuICAgICAgZW5kR2FtZSgncGxheWVyJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChoaXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ2FtZUxvb3AoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrRW5kKCkge1xuICAgIHJldHVybiAocEJvYXJkLmFsbFN1bmsoKSB8fCBjQm9hcmQuYWxsU3VuaygpKTtcbiAgfVxuICByZXR1cm4geyByZWNlaXZlUGxheWVyQXR0YWNrLCBnYW1lTG9vcCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZTtcbiIsImltcG9ydCBnYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuXG5jb25zdCBwbGF5ZXJGYWN0b3J5ID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IGdhbWVib2FyZCgpO1xuICBib2FyZC5wb3B1bGF0ZUdhbWVib2FyZCgpO1xuICBmdW5jdGlvbiBnZXRCb2FyZCgpIHtcbiAgICByZXR1cm4gYm9hcmQ7XG4gIH1cbiAgZnVuY3Rpb24gdHVybihjQm9hcmQpIHtcbiAgfVxuICByZXR1cm4geyBnZXRCb2FyZCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyRmFjdG9yeTtcbiIsImNvbnN0IHNoaXAgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBjcmVhdGVTaGlwKGxlbmd0aCkge1xuICAgIGxldCBoaXRzID0gMDtcbiAgICBjb25zdCBoaXQgPSAobikgPT4ge1xuICAgICAgaWYgKGhpdHMgPCBsZW5ndGgpIHtcbiAgICAgICAgaGl0cyArPSAxO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgIGlmIChoaXRzID09IGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICBsZW5ndGgsXG4gICAgICBoaXQsXG4gICAgICBpc1N1bmssXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycihsZW5ndGgpIHtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIucHVzaChudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIHJldHVybiB7IGNyZWF0ZVNoaXAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==