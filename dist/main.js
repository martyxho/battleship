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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1px;\n  background-color: black;\n}\n\n.main {\n  background-color: white;\n  display: grid;\n  grid-template-rows: 1fr max-content 1fr;\n  justify-content: center;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 40px 1fr;\n  grid-template-rows: 40px 1fr;\n}\n\n.below {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n#ship-box {\n  width: 400px;\n  height: 200px;\n  border: solid 1px rgb(182, 171, 228);\n  display: flex;\n  flex-wrap: wrap;\n  padding: 10px;\n}\n.ship-div {\n  display: flex;\n  margin-right: 10px;\n  height: 40px;\n} \n#ship-box .ship {\n  height: 39px;\n  width: 39px;\n  border: solid 1px rgb(182, 171, 228);\n}\n.grid {\n  grid-column: 2;\n  grid-row: 2;\n  height: 400px;\n  width: 400px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.letters {\n  grid-row: 1;\n  grid-column: 2;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.numbers {\n  grid-column: 1;\n  grid-row: 2;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n}\n.grid-div {\n  width: 100%;\n  border: solid 1px rgb(182, 171, 228);\n  margin-top: -1px;\n  border-right: none;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  font-size: 25px;\n}\n\n.grid-div:nth-child(10n) {\n  border-right: solid 1px rgb(182, 171, 228);\n} \n.guide-div {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\n.ship {\n  background-color: rgba(99, 111, 212, 0.301);\n}\n\n.hit {\n  background-color: rgba(247, 244, 104, 0.63);\n}\n\n.miss {\n  opacity: .7;\n  background-color: rgba(99, 110, 212, 0.103);\n}\n\n.valid-drop {\n  background-color: rgba(99, 111, 212, 0.301);\n}\n\n.invalid-drop {\n  background-color: rgba(212, 116, 99, 0.301);\n}\n\n.hide {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,uCAAuC;EACvC,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,aAAa;EACb,oCAAoC;EACpC,aAAa;EACb,eAAe;EACf,aAAa;AACf;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,YAAY;EACZ,WAAW;EACX,oCAAoC;AACtC;AACA;EACE,cAAc;EACd,WAAW;EACX,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,WAAW;EACX,cAAc;EACd,aAAa;EACb,sCAAsC;AACxC;;AAEA;EACE,cAAc;EACd,WAAW;EACX,aAAa;EACb,mCAAmC;AACrC;AACA;EACE,WAAW;EACX,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,0CAA0C;AAC5C;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,WAAW;EACX,2CAA2C;AAC7C;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,aAAa;AACf","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1px;\n  background-color: black;\n}\n\n.main {\n  background-color: white;\n  display: grid;\n  grid-template-rows: 1fr max-content 1fr;\n  justify-content: center;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 40px 1fr;\n  grid-template-rows: 40px 1fr;\n}\n\n.below {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n#ship-box {\n  width: 400px;\n  height: 200px;\n  border: solid 1px rgb(182, 171, 228);\n  display: flex;\n  flex-wrap: wrap;\n  padding: 10px;\n}\n.ship-div {\n  display: flex;\n  margin-right: 10px;\n  height: 40px;\n} \n#ship-box .ship {\n  height: 39px;\n  width: 39px;\n  border: solid 1px rgb(182, 171, 228);\n}\n.grid {\n  grid-column: 2;\n  grid-row: 2;\n  height: 400px;\n  width: 400px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.letters {\n  grid-row: 1;\n  grid-column: 2;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.numbers {\n  grid-column: 1;\n  grid-row: 2;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n}\n.grid-div {\n  width: 100%;\n  border: solid 1px rgb(182, 171, 228);\n  margin-top: -1px;\n  border-right: none;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  font-size: 25px;\n}\n\n.grid-div:nth-child(10n) {\n  border-right: solid 1px rgb(182, 171, 228);\n} \n.guide-div {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\n.ship {\n  background-color: rgba(99, 111, 212, 0.301);\n}\n\n.hit {\n  background-color: rgba(247, 244, 104, 0.63);\n}\n\n.miss {\n  opacity: .7;\n  background-color: rgba(99, 110, 212, 0.103);\n}\n\n.valid-drop {\n  background-color: rgba(99, 111, 212, 0.301);\n}\n\n.invalid-drop {\n  background-color: rgba(212, 116, 99, 0.301);\n}\n\n.hide {\n  display: none;\n}"],"sourceRoot":""}]);
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


const state = (() => {
  const states = {};
  function setLastHit(coord) {
    states.hit = coord;
  }
  function getLastHit() {
    return states.hit;
  }
  function setAdjMissFalse() {
    state.miss = false;
  }
  function setAdjMissTrue() {
    state.miss = true;
  }
  function getAdjMiss() {
    return state.miss;
  }
  function setTraverseTrue() {
    state.traverse = true;
  }
  function setTraverseFalse() {
    state.traverse = false;
  }
  function getTraverse() {
    return state.traverse;
  }
  function setTraverseMissTrue() {
    state.traverseMiss = true;
  }
  function setTraverseMissFalse() {
    state.traverseMiss = false;
  }
  function getTraverseMiss() {
    return state.traverseMiss;
  }
  function setI(i) {
    state.i = i;
  }
  function getI(i) {
    return state.i;
  }
  return {
    setLastHit,
    getLastHit,
    setAdjMissFalse,
    setAdjMissTrue,
    getAdjMiss,
    setTraverseTrue,
    setTraverseFalse,
    getTraverse,
    setTraverseMissTrue,
    setTraverseMissFalse,
    getTraverseMiss,
    setI,
    getI,
  };
})();

const computerFactory = () => {
  const board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  board.randomPopulate();
  state.setAdjMissFalse();
  function logState(coord) {
    const obj = {
      coord, lastHit: state.getLastHit(), trav: state.getTraverse(), i: state.getI(),
    };
    console.log(obj);
  }
  function getBoard() {
    return board;
  }
  function attack(playerBoard) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const grid = playerBoard.getGrid();
    while (!playerBoard.full()) {
      if (state.getTraverseMiss()) {
        traverseDir(playerBoard, state.getLastHit());
        return;
      }
      if (state.getAdjMiss()) {
        attackAdjacent(playerBoard, state.getLastHit());
        return;
      }
      const a = (Math.floor(Math.random() * 10)) + 1;
      const b = alphabet[Math.floor(Math.random() * 10)];
      if (!grid[a][b] || !grid[a][b].hasOwnProperty('marker')) {
        attackLoop(playerBoard, [a, b]);
        return;
      }
    }
  }
  function attackLoop(playerBoard, coord) {
    const [a, b] = coord;
    const hit = playerBoard.receiveAttack(a, b);
    if (hit) {
      state.setLastHit([a, b]);
      state.setAdjMissFalse();
      state.setTraverseMissFalse();
      const sunk = checkSunk(playerBoard, coord);
      if (sunk) {
        state.setTraverseFalse();
        attack(playerBoard);
        return;
      }
      if (state.getTraverse()) {
        traverseDir(playerBoard, coord);
        return;
      }
      attackAdjacent(playerBoard, [a, b]);
    }
  }

  function checkSunk(playerBoard, coord) {
    const grid = playerBoard.getGrid();
    const [a, b] = coord;
    if (grid[a][b].hasOwnProperty('ship')) {
      return grid[a][b].ship.isSunk();
    }
    return grid[a][b].isSunk();
  }
  function checkShip(playerBoard, coord) {
    const grid = playerBoard.getGrid();
    const [a, b] = coord;
    if (!grid[a][b]) {
      return false;
    }
    if (grid[a][b].hasOwnProperty('marker')) {
      return grid[a][b].hasOwnProperty('ship');
    }
    return grid[a][b].hasOwnProperty('isSunk');
  }
  function attackAdjacent(playerBoard, coord) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const grid = playerBoard.getGrid();
    const adj = calcAdj(coord);
    let go = true;
    adj.forEach((e, i) => {
      if (go) {
        const [a, b] = e;
        if ((a > 0 && a < 11) && alphabet.includes(b)) {
          if (!grid[a][b] || !grid[a][b].hasOwnProperty('marker')) {
            if (!grid[a][b]) {
              state.setAdjMissTrue();
            } else {
              state.setI(i);
              state.setTraverseTrue();
            }
            go = false;
            attackLoop(playerBoard, [a, b]);
          }
        }
      }
    });
  }
  function calcAdj(coord) {
    const [a, b] = coord;
    const left = [a, getAlpha(b, -1)];
    const up = [a - 1, b];
    const right = [a, getAlpha(b, 1)];
    const down = [a + 1, b];
    const adj = [left, up, right, down];
    return adj;
  }
  function traverseDir(playerBoard, coord) {
    const grid = playerBoard.getGrid();
    const adj = calcAdj(coord);
    const i = state.getI();
    const [a, b] = adj[i];
    if (outOfBounds([a, b]) || !checkShip(playerBoard, [a, b])) {
      state.setI(getOpp(i));
    }
    if (attackChecks(playerBoard, [a, b])) {
      if (!grid[a][b]) {
        state.setTraverseMissTrue();
      }
      attackLoop(playerBoard, [a, b]);
      return;
    }
    traverseDir(playerBoard, [a, b]);
  }
  function outOfBounds(coord) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const [a, b] = coord;
    if ((a > 0 && a < 11) && alphabet.includes(b)) {
      return false;
    }
    return true;
  }
  function attackChecks(playerBoard, coord) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const grid = playerBoard.getGrid();
    const [a, b] = coord;
    if ((a > 0 && a < 11) && alphabet.includes(b)) {
      if (!grid[a][b] || !grid[a][b].hasOwnProperty('marker')) {
        return true;
      }
    }
    return false;
  }
  function getOpp(i) {
    switch (i) {
      case 0:
        return 2;
      case 1:
        return 3;
      case 2:
        return 0;
      default:
        return 1;
    }
  }
  function getAlpha(b, n) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const i = alphabet.indexOf(b) + n;
    return alphabet[i];
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
/* harmony import */ var _assets_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/close.svg */ "./src/assets/close.svg");
/* harmony import */ var _assets_circle_medium_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/circle-medium.svg */ "./src/assets/circle-medium.svg");




const btns = (() => {
  const placeBtn = document.getElementById('place');
  placeBtn.onclick = showShipBox;
  const randomBtn = document.getElementById('random');
  randomBtn.onclick = randomPShips;
  const start = document.getElementById('start');
  start.onclick = startGame;
  function startGame() {
    const pBoard = ___WEBPACK_IMPORTED_MODULE_0__["default"].getPBoard();
    const check = pBoard.checkGrid();
    if (!check) {
      alert('All Ships have not been placed');
      return;
    }
    grid.addCGridListeners();
    removeBtns();
    closeShipBox();
    grid.resetPlayerGrid();
    displayState.displayShipsPlayer(pBoard, false);
    displayState.displayText();
  }
  function showShipBox() {
    const pBoard = ___WEBPACK_IMPORTED_MODULE_0__["default"].getPBoard();
    pBoard.resetGrid();
    displayState.resetShipBox();
    displayState.displayShipsPlayer(pBoard);
    const shipBox = document.getElementById('hide-div');
    shipBox.classList.toggle('hide');
    const shipText = document.querySelector('#left .text');
    shipText.classList.toggle('hide');
  }
  function randomPShips() {
    closeShipBox();
    const pBoard = ___WEBPACK_IMPORTED_MODULE_0__["default"].getPBoard();
    pBoard.resetGrid();
    pBoard.randomPopulate();
    displayState.displayShipsPlayer(pBoard, false);
    displayState.hideShipText();
  }
  function closeShipBox() {
    const shipBox = document.getElementById('hide-div');
    shipBox.classList.add('hide');
    displayState.hideShipText();
  }
  function removeBtns() {
    placeBtn.classList.add('hide');
    randomBtn.classList.add('hide');
    start.classList.add('hide');
  }
})();
const drag = (() => {
  const dragData = {};
  document.addEventListener('dragstart', (e) => {
    dragData.target = e.target;
    dragData.length = e.target.dataset.length;
    dragData.i = e.target.dataset.i;
    dragData.hor = e.target.dataset.hor;
    e.target.classList.add('dragging');
  });
  document.addEventListener('dragend', (event) => {
    // reset the transparency
    event.target.classList.remove('dragging');
  });
  document.addEventListener('dragover', (event) => {
    // prevent default to allow drop
    event.preventDefault();
  }, false);
  document.addEventListener('dragenter', (event) => {
    if (event.target.classList.contains('dropzone')) {
      const { coord } = event.target.dataset;
      const [a, b] = coord.split(',');
      const pBoard = ___WEBPACK_IMPORTED_MODULE_0__["default"].getPBoard();
      let check; let
        coords;
      if (dragData.hor === 'true') {
        check = pBoard.checkDropHor([a, b], dragData.length, dragData.i);
        coords = pBoard.getCoordsHor([a, b], dragData.length);
      } else {
        check = pBoard.checkDropVer([a, b], dragData.length, dragData.i);
        coords = pBoard.getCoordsVer([a, b], dragData.length);
      }
      coords.forEach((e) => {
        const box = document.querySelector(`#left div[data-coord='${e}']`);
        if (check) {
          box.classList.add('valid-drop');
        } else {
          box.classList.add('invalid-drop');
        }
      });
    }
  });
  document.addEventListener('dragleave', (event) => {
    if (event.target.classList.contains('dropzone')) {
      removeDragClasses(event);
    }
  });
  document.addEventListener('drop', (event) => {
    event.preventDefault();
    const pBoard = ___WEBPACK_IMPORTED_MODULE_0__["default"].getPBoard();
    if (event.target.classList.contains('dropzone')) {
      removeDragClasses(event);
      const { coord } = event.target.dataset;
      const [a, b] = coord.split(',');
      let coords; let
        check;
      if (dragData.hor === 'true') {
        check = pBoard.checkDropHor([a, b], dragData.length, dragData.i);
        coords = pBoard.getCoordsHor([a, b], dragData.length);
      } else {
        check = pBoard.checkDropVer([a, b], dragData.length, dragData.i);
        coords = pBoard.getCoordsVer([a, b], dragData.length);
      }
      if (check) {
        pBoard.removeShip(dragData.i);
        pBoard.addShip(coords, dragData.i, dragData.hor);
        if (dragData.target.parentElement.id === 'ship-box') {
          const shipBox = document.getElementById('ship-box');
          shipBox.removeChild(dragData.target);
        }
      }
    }
    displayState.displayShipsPlayer(pBoard);
  });
  function removeDragClasses(event) {
    const { coord } = event.target.dataset;
    const [a, b] = coord.split(',');
    const pBoard = ___WEBPACK_IMPORTED_MODULE_0__["default"].getPBoard();
    let coords;
    if (dragData.hor === 'true') {
      coords = pBoard.getCoordsHor([a, b], dragData.length);
    } else {
      coords = pBoard.getCoordsVer([a, b], dragData.length);
    }
    coords.forEach((e) => {
      const box = document.querySelector(`#left div[data-coord='${e}']`);
      box.classList.remove('valid-drop');
      box.classList.remove('invalid-drop');
    });
  }
})();

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
        if (!comp) {
          div.classList.add('dropzone');
        }
        const img = document.createElement('img');
        div.appendChild(img);
        grid.appendChild(div);
      });
    }
  }
  function addCGridListeners() {
    const grid = document.querySelector('#right .grid');
    const gridDivs = grid.querySelectorAll('.grid-div');
    gridDivs.forEach((e) => {
      e.addEventListener('click', attack, { once: true });
    });
  }
  function attack(e) {
    displayState.hideText();
    const coord = e.target.dataset.coord.split(',');
    ___WEBPACK_IMPORTED_MODULE_0__["default"].receivePlayerAttack(coord);
  }
  function removeListeners() {
    const cGrid = document.querySelector('#right .grid');
    const divs = cGrid.querySelectorAll('.grid-div');
    divs.forEach((e) => {
      e.removeEventListener('click', attack);
    });
  }
  function removeOneListener(box) {
    box.removeEventListener('click', attack);
  }
  function resetPlayerGrid() {
    clearPlayerGrid();
    createGridBoxes(pGrid, false);
  }
  function clearPlayerGrid() {
    const grid = document.querySelector('#left .grid');
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }
  }
  return {
    removeListeners, removeOneListener, resetPlayerGrid, addCGridListeners,
  };
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
  function display(pBoard) {
    displayShipsPlayer(pBoard);
  }
  function displayShipsPlayer(pBoard, interact = true) {
    grid.resetPlayerGrid();
    const pGrid = pBoard.getGrid();
    const gridDisplay = document.querySelector('#left .grid');
    Object.entries(pGrid).forEach((e) => {
      const [key1, val1] = e;
      Object.entries(val1).forEach((j) => {
        const [key2, val2] = j;
        if (val2) {
          if (val2.hasOwnProperty('isSunk')) {
            const box = gridDisplay.querySelector(`div[data-coord = "${key1},${key2}"]`);
            box.classList.add('ship');
            if (interact) {
              box.dataset.length = val2.length;
              box.dataset.i = val2.i;
              box.dataset.head = val2.head;
              box.draggable = true;
              box.dataset.hor = val2.hor;
              box.onclick = changeOri;
            }
          }
        }
      });
    });
  }
  function changeOri(e) {
    const pBoard = ___WEBPACK_IMPORTED_MODULE_0__["default"].getPBoard();
    let { hor } = e.target.dataset;
    hor = (hor === 'true');
    if (hor) {
      pBoard.changeOriVert(e);
    } else {
      pBoard.changeOriHor(e);
    }
    displayShipsPlayer(pBoard);
  }
  function displayShipsComputer(grid) {
    const gridDisplay = document.querySelector('#right .grid');
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
    displayHits(cGrid, cGridDisplay, true);
  }

  function displayHits(g, gridDisplay, comp = false) {
    Object.entries(g).forEach((e) => {
      const [key1, val1] = e;
      Object.entries(val1).forEach((j) => {
        const [key2, val2] = j;
        if (val2) {
          if (val2.hasOwnProperty('marker')) {
            const box = gridDisplay.querySelector(`div[data-coord = "${key1},${key2}"]`);
            if (comp) {
              grid.removeOneListener(box);
            }
            const img = box.querySelector('img');
            if (val2.hasOwnProperty('ship')) {
              img.src = _assets_close_svg__WEBPACK_IMPORTED_MODULE_1__;
              box.classList.add('hit');
            } else {
              img.src = _assets_circle_medium_svg__WEBPACK_IMPORTED_MODULE_2__;
              box.classList.add('miss');
            }
          }
        }
      });
    });
  }
  function displayShipBox(ships) {
    const shipBox = document.getElementById('ship-box');
    ships.forEach((e, i) => {
      const div = document.createElement('div');
      div.classList = 'ship-div';
      div.dataset.length = e.length;
      div.dataset.i = i;
      div.draggable = true;
      div.dataset.hor = true;
      for (let i = 0; i < e.length; i++) {
        const sDiv = document.createElement('div');
        sDiv.classList = 'ship';
        div.appendChild(sDiv);
      }
      shipBox.appendChild(div);
    });
  }
  function deleteShips() {
    const shipBox = document.getElementById('ship-box');
    while (shipBox.firstChild) {
      shipBox.removeChild(shipBox.firstChild);
    }
  }
  function resetShipBox() {
    const pBoard = ___WEBPACK_IMPORTED_MODULE_0__["default"].getPBoard();
    const ships = pBoard.getShips();
    deleteShips();
    displayShipBox(ships);
  }
  function displayText() {
    const text = document.querySelector('#right .text');
    text.classList.remove('hide');
  }
  function hideText() {
    const text = document.querySelector('#right .text');
    text.classList.add('hide');
  }

  function hideShipText() {
    const text = document.querySelector('#left .text');
    text.classList.add('hide');
  }

  return {
    display,
    displayHitsBoth,
    displayShipBox,
    displayShipsPlayer,
    resetShipBox,
    displayText,
    hideText,
    hideShipText,
  };
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
  let grid = createGameboard();
  const ships = createShips();
  function receiveAttack(a, b) {
    const coord = grid[a][b];
    if (coord) {
      if (coord.hasOwnProperty('marker')) {
        return 'illegal hit on marker';
      }
      coord.hit();
      grid[a][b] = hitObj(coord);
      hitDiagonals(a, b);
      if (coord.isSunk()) {
        hitAroundShip(coord);
      }
      return true;
    }
    grid[a][b] = hitObj();
    return false;
  }
  function hitAroundShip(ship) {
    const coords = findShip(ship);
    coords.forEach((e) => {
      hitSurrounding(e);
    });
  }
  function findShip(ship) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const coords = [];
    Object.values(grid).forEach((e, i) => {
      Object.values(e).forEach((x, j) => {
        if (x && x.hasOwnProperty('ship') && x.ship === ship) {
          const a = i + 1;
          const b = alphabet[j];
          coords.push([a, b]);
        }
      });
    });
    return coords;
  }
  function hitIfPoss(a, b) {
    if (!checkValid(a, b)) {
      return;
    }
    const coord = grid[a][b];
    if (coord) {
      if (coord.hasOwnProperty('marker')) {
        return;
      }
      coord.hit();
      grid[a][b] = hitObj(coord);
      hitDiagonals(a, b);
      return;
    }
    grid[a][b] = hitObj();
  }
  function checkValid(a, b) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    if ((a > 0 && a < 11) && alphabet.includes(b)) {
      return true;
    }
    return false;
  }
  function hitSurrounding(coord) {
    const sur = getSurrounding(coord);
    sur.forEach((e) => {
      const [a, b] = e;
      hitIfPoss(a, b);
    });
  }
  function getSurrounding(coord) {
    let [a, b] = coord;
    a = +a;
    const q = [a - 1, getAlpha(b, -1)];
    const w = [a - 1, b];
    const e = [a - 1, getAlpha(b, +1)];
    const r = [a, getAlpha(b, -1)];
    const t = [a, getAlpha(b, 1)];
    const y = [a + 1, getAlpha(b, -1)];
    const u = [a + 1, b];
    const i = [a + 1, getAlpha(b, 1)];
    return [q, w, e, r, t, y, u, i];
  }
  function hitDiagonals(a, b) {
    const upLeft = [(+a - 1), getAlpha(b, -1)];
    const upRight = [(+a - 1), getAlpha(b, 1)];
    const downLeft = [(+a + 1), getAlpha(b, -1)];
    const downRight = [(+a + 1), getAlpha(b, 1)];
    const diagonals = [upLeft, upRight, downLeft, downRight];
    diagonals.forEach((e) => hitDiagonal(e));
  }

  function hitDiagonal(d) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const [a, b] = d;
    if ((a > 0 && a < 11) && alphabet.includes(b)) {
      receiveAttack(a, b);
    }
  }

  function getAlpha(b, n) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const i = alphabet.indexOf(b) + n;
    return alphabet[i];
  }
  function hitObj(ship = null) {
    const obj = { marker: 'x' };
    if (ship) {
      obj.ship = ship;
    }
    return obj;
  }
  function randomPopulate() {
    ships.forEach((e) => {
      const { length } = e;
      const x = 11 - length;
      const random = Math.floor(Math.random() * 2) + 1;
      if (random > 1) {
        populateVertical(e);
      } else {
        populateHorizontal(e);
      }
    });
  }
  function populateVertical(e) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const x = 11 - e.length;
    let keepGoing = true;
    while (keepGoing) {
      const letter = alphabet[Math.floor(Math.random() * 10)];
      const number = (Math.floor(Math.random() * x)) + 1;
      const end = number + e.length - 1;
      const test = checkGridVert(number, letter, e);
      if (test) {
        keepGoing = false;
        fillGrid([number, letter], [end, letter], false, e);
      }
    }
  }
  function populateHorizontal(e) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const x = 11 - e.length;
    let keepGoing = true;
    while (keepGoing) {
      const number = Math.floor(Math.random() * 10) + 1;
      const start = Math.floor(Math.random() * x);
      const end = start + e.length - 1;
      const test = checkGridHori(number, start, e);
      if (test) {
        keepGoing = false;
        fillGrid([number, alphabet[start]], [number, alphabet[end]], true, e);
      }
    }
  }
  function checkGridVert(number, letter, ship) {
    let works = true;
    const end = number + ship.length;
    for (let i = number; i < end; i++) {
      const check = !checkSurrounding(i, letter, ship);
      if (grid[i][letter] || check) {
        works = false;
      }
    }
    return works;
  }
  function checkGridHori(number, start, ship) {
    let works = true;
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const end = start + ship.length;
    for (let i = start; i < end; i++) {
      const letter = alphabet[i];
      const check = !checkSurrounding(number, letter, ship);
      if (grid[number][letter] || check) {
        works = false;
      }
    }
    return works;
  }
  function checkSurrounding(a, b, shipObj) {
    const i = +a;
    const iUp = i - 1;
    const iDown = i + 1;
    const bLeft = getAlpha(b, -1);
    const bRight = getAlpha(b, 1);
    const upLeft = [iUp, bLeft];
    const up = [iUp, b];
    const upRight = [iUp, bRight];
    const left = [i, bLeft];
    const right = [i, bRight];
    const downLeft = [iDown, bLeft];
    const down = [iDown, b];
    const downRight = [iDown, bRight];
    const surrounding = [upLeft, up, upRight, left, right, downLeft, down, downRight];
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    let works = true;
    surrounding.forEach((e) => {
      const [c, d] = e;
      if ((c > 0 && c < 11) && alphabet.includes(d)) {
        const boxValue = grid[c][d];
        if (boxValue) {
          if (!(boxValue === shipObj)) {
            works = false;
          }
        }
      }
    });
    return works;
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
    const s4a = _ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip(4, 0);
    const s3a = _ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip(3, 1);
    const s3b = _ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip(3, 2);
    const s2a = _ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip(2, 3);
    const s2b = _ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip(2, 4);
    const s2c = _ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip(2, 5);
    const s1a = _ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip(1, 6);
    const s1b = _ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip(1, 7);
    const s1c = _ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip(1, 8);
    const s1d = _ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip(1, 9);

    return [s4a, s3a, s3b, s2a, s2b, s2c, s1a, s1b, s1c, s1d];
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
      const check = Object.values(e).some(isNullOrShip);
      if (check) {
        result = false;
      }
    });
    return result;
  }
  function isNullOrShip(e) {
    if (!e) {
      return true;
    }
    if (e.hasOwnProperty('isSunk')) {
      return true;
    }
    return false;
  }
  function getShips() {
    return ships;
  }
  function checkDropHor(coord, length, index) {
    const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const ship = ships[index];
    const [a, b] = coord;
    const start = alpha.indexOf(b);
    const end = alpha.indexOf(b) + +length;
    let drop = true;
    for (let i = start; i < end; i++) {
      if (!checkValid(a, alpha[i])) {
        drop = false;
      } else {
        const box = grid[a][alpha[i]];
        if (box) {
          if (!(box === ship)) {
            drop = false;
          }
        }
      }
      if (!checkSurrounding(a, alpha[i], ship)) {
        drop = false;
      }
    }
    return drop;
  }
  function checkDropVer(coord, length, index) {
    let [a, b] = coord;
    a = +a;
    const ship = ships[index];
    let drop = true;
    for (let i = a; i < a + +length; i++) {
      if (!checkValid(i, b)) {
        drop = false;
      } else {
        const box = grid[i][b];
        if (box) {
          if (!(box === ship)) {
            drop = false;
          }
        }
      }
      if (!checkSurrounding(i, b, ship)) {
        drop = false;
      }
    }
    return drop;
  }
  function getCoordsHor(coord, length) {
    const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const [a, b] = coord;
    const start = alpha.indexOf(b);
    const end = alpha.indexOf(b) + +length;
    const coords = [];
    for (let i = start; i < end; i++) {
      if (!checkValid(a, alpha[i])) {
        return coords;
      }
      coords.push(`${a},${alpha[i]}`);
    }
    return coords;
  }
  function getCoordsVer(coord, length) {
    let [a, b] = coord;
    a = +a;
    const coords = [];
    for (let i = a; i < a + +length; i++) {
      if (!checkValid(i, b)) {
        return coords;
      }
      coords.push(`${i},${b}`);
    }
    return coords;
  }
  function addShip(coords, i, hor) {
    const ship = ships[i];
    ship.head = coords[0];
    ship.hor = hor;
    coords.forEach((e) => {
      const [a, b] = e.split(',');
      grid[a][b] = ship;
    });
  }
  function removeShip(i) {
    const ship = ships[i];
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    Object.values(grid).forEach((e, i) => {
      Object.values(e).forEach((x, j) => {
        if (x === ship) {
          const a = i + 1;
          const b = alphabet[j];
          grid[a][b] = null;
        }
      });
    });
  }
  function changeOriHor(e) {
    const { head } = e.target.dataset;
    const [a, b] = head.split(',');
    const { length } = e.target.dataset;
    const { i } = e.target.dataset;
    const check = checkDropHor([a, b], length, i);
    if (check) {
      removeShip(i);
      const coords = getCoordsHor([a, b], length);
      addShip(coords, i, true);
    }
  }
  function changeOriVert(e) {
    const { head } = e.target.dataset;
    const [a, b] = head.split(',');
    const { length } = e.target.dataset;
    const { i } = e.target.dataset;
    const check = checkDropVer([a, b], length, i);
    if (check) {
      removeShip(i);
      const coords = getCoordsVer([a, b], length);
      addShip(coords, i, false);
    }
  }
  function resetGrid() {
    grid = createGameboard();
  }
  function checkGrid() {
    let count = 0;
    Object.values(grid).forEach((e) => {
      Object.values(e).forEach((x) => {
        if (x) {
          count += 1;
        }
      });
    });
    if (count === 20) {
      return true;
    }
    return false;
  }
  return {
    getGrid,
    receiveAttack,
    sinkAll,
    allSunk,
    full,
    hitAll,
    checkGridVert,
    checkGridHori,
    fillGrid,
    randomPopulate,
    checkSurrounding,
    getShips,
    checkDropHor,
    checkDropVer,
    getCoordsHor,
    getCoordsVer,
    addShip,
    removeShip,
    changeOriVert,
    changeOriHor,
    resetGrid,
    checkGrid,
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
  const ships = pBoard.getShips();
  const computer = (0,_computer__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const cBoard = computer.getBoard();
  _dom__WEBPACK_IMPORTED_MODULE_1__.displayState.displayShipBox(ships);
  _dom__WEBPACK_IMPORTED_MODULE_1__.displayState.display(pBoard);
  function gameLoop(comp = computer) {
    comp.attack(pBoard);
    _dom__WEBPACK_IMPORTED_MODULE_1__.displayState.displayHitsBoth(pBoard.getGrid(), cBoard.getGrid());
    if (checkEnd()) {
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.endGame)('computer');
    }
  }
  function receivePlayerAttack(coord) {
    const [a, b] = coord;
    const hit = cBoard.receiveAttack(a, b);
    _dom__WEBPACK_IMPORTED_MODULE_1__.displayState.displayHitsBoth(pBoard.getGrid(), cBoard.getGrid());
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
  function getPBoard() {
    return pBoard;
  }
  return { receivePlayerAttack, gameLoop, getPBoard };
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
  board.randomPopulate();
  function getBoard() {
    return board;
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
  function createShip(length, i) {
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
      i,
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


/***/ }),

/***/ "./src/assets/circle-medium.svg":
/*!**************************************!*\
  !*** ./src/assets/circle-medium.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee46e8f286ffa45d94ac.svg";

/***/ }),

/***/ "./src/assets/close.svg":
/*!******************************!*\
  !*** ./src/assets/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5cd3645cf868e38fd4b5.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxnQkFBZ0Isc0RBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFNBQVM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixTQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FB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V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wdXRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtZ2FwOiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgbWF4LWNvbnRlbnQgMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyO1xcbn1cXG5cXG4uYmVsb3cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3NoaXAtYm94IHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCByZ2IoMTgyLCAxNzEsIDIyOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLnNoaXAtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufSBcXG4jc2hpcC1ib3ggLnNoaXAge1xcbiAgaGVpZ2h0OiAzOXB4O1xcbiAgd2lkdGg6IDM5cHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCByZ2IoMTgyLCAxNzEsIDIyOCk7XFxufVxcbi5ncmlkIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5sZXR0ZXJzIHtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5udW1iZXJzIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcbi5ncmlkLWRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogc29saWQgMXB4IHJnYigxODIsIDE3MSwgMjI4KTtcXG4gIG1hcmdpbi10b3A6IC0xcHg7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4uZ3JpZC1kaXY6bnRoLWNoaWxkKDEwbikge1xcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDE4MiwgMTcxLCAyMjgpO1xcbn0gXFxuLmd1aWRlLWRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk5LCAxMTEsIDIxMiwgMC4zMDEpO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyNDQsIDEwNCwgMC42Myk7XFxufVxcblxcbi5taXNzIHtcXG4gIG9wYWNpdHk6IC43O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5OSwgMTEwLCAyMTIsIDAuMTAzKTtcXG59XFxuXFxuLnZhbGlkLWRyb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5OSwgMTExLCAyMTIsIDAuMzAxKTtcXG59XFxuXFxuLmludmFsaWQtZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMiwgMTE2LCA5OSwgMC4zMDEpO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUNiLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsV0FBVztFQUNYLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtZ2FwOiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgbWF4LWNvbnRlbnQgMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyO1xcbn1cXG5cXG4uYmVsb3cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3NoaXAtYm94IHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCByZ2IoMTgyLCAxNzEsIDIyOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLnNoaXAtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufSBcXG4jc2hpcC1ib3ggLnNoaXAge1xcbiAgaGVpZ2h0OiAzOXB4O1xcbiAgd2lkdGg6IDM5cHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCByZ2IoMTgyLCAxNzEsIDIyOCk7XFxufVxcbi5ncmlkIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5sZXR0ZXJzIHtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5udW1iZXJzIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcbi5ncmlkLWRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogc29saWQgMXB4IHJnYigxODIsIDE3MSwgMjI4KTtcXG4gIG1hcmdpbi10b3A6IC0xcHg7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4uZ3JpZC1kaXY6bnRoLWNoaWxkKDEwbikge1xcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDE4MiwgMTcxLCAyMjgpO1xcbn0gXFxuLmd1aWRlLWRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk5LCAxMTEsIDIxMiwgMC4zMDEpO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyNDQsIDEwNCwgMC42Myk7XFxufVxcblxcbi5taXNzIHtcXG4gIG9wYWNpdHk6IC43O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5OSwgMTEwLCAyMTIsIDAuMTAzKTtcXG59XFxuXFxuLnZhbGlkLWRyb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5OSwgMTExLCAyMTIsIDAuMzAxKTtcXG59XFxuXFxuLmludmFsaWQtZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMiwgMTE2LCA5OSwgMC4zMDEpO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBnYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuXG5jb25zdCBzdGF0ZSA9ICgoKSA9PiB7XG4gIGNvbnN0IHN0YXRlcyA9IHt9O1xuICBmdW5jdGlvbiBzZXRMYXN0SGl0KGNvb3JkKSB7XG4gICAgc3RhdGVzLmhpdCA9IGNvb3JkO1xuICB9XG4gIGZ1bmN0aW9uIGdldExhc3RIaXQoKSB7XG4gICAgcmV0dXJuIHN0YXRlcy5oaXQ7XG4gIH1cbiAgZnVuY3Rpb24gc2V0QWRqTWlzc0ZhbHNlKCkge1xuICAgIHN0YXRlLm1pc3MgPSBmYWxzZTtcbiAgfVxuICBmdW5jdGlvbiBzZXRBZGpNaXNzVHJ1ZSgpIHtcbiAgICBzdGF0ZS5taXNzID0gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBnZXRBZGpNaXNzKCkge1xuICAgIHJldHVybiBzdGF0ZS5taXNzO1xuICB9XG4gIGZ1bmN0aW9uIHNldFRyYXZlcnNlVHJ1ZSgpIHtcbiAgICBzdGF0ZS50cmF2ZXJzZSA9IHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gc2V0VHJhdmVyc2VGYWxzZSgpIHtcbiAgICBzdGF0ZS50cmF2ZXJzZSA9IGZhbHNlO1xuICB9XG4gIGZ1bmN0aW9uIGdldFRyYXZlcnNlKCkge1xuICAgIHJldHVybiBzdGF0ZS50cmF2ZXJzZTtcbiAgfVxuICBmdW5jdGlvbiBzZXRUcmF2ZXJzZU1pc3NUcnVlKCkge1xuICAgIHN0YXRlLnRyYXZlcnNlTWlzcyA9IHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gc2V0VHJhdmVyc2VNaXNzRmFsc2UoKSB7XG4gICAgc3RhdGUudHJhdmVyc2VNaXNzID0gZmFsc2U7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0VHJhdmVyc2VNaXNzKCkge1xuICAgIHJldHVybiBzdGF0ZS50cmF2ZXJzZU1pc3M7XG4gIH1cbiAgZnVuY3Rpb24gc2V0SShpKSB7XG4gICAgc3RhdGUuaSA9IGk7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0SShpKSB7XG4gICAgcmV0dXJuIHN0YXRlLmk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzZXRMYXN0SGl0LFxuICAgIGdldExhc3RIaXQsXG4gICAgc2V0QWRqTWlzc0ZhbHNlLFxuICAgIHNldEFkak1pc3NUcnVlLFxuICAgIGdldEFkak1pc3MsXG4gICAgc2V0VHJhdmVyc2VUcnVlLFxuICAgIHNldFRyYXZlcnNlRmFsc2UsXG4gICAgZ2V0VHJhdmVyc2UsXG4gICAgc2V0VHJhdmVyc2VNaXNzVHJ1ZSxcbiAgICBzZXRUcmF2ZXJzZU1pc3NGYWxzZSxcbiAgICBnZXRUcmF2ZXJzZU1pc3MsXG4gICAgc2V0SSxcbiAgICBnZXRJLFxuICB9O1xufSkoKTtcblxuY29uc3QgY29tcHV0ZXJGYWN0b3J5ID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IGdhbWVib2FyZCgpO1xuICBib2FyZC5yYW5kb21Qb3B1bGF0ZSgpO1xuICBzdGF0ZS5zZXRBZGpNaXNzRmFsc2UoKTtcbiAgZnVuY3Rpb24gbG9nU3RhdGUoY29vcmQpIHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBjb29yZCwgbGFzdEhpdDogc3RhdGUuZ2V0TGFzdEhpdCgpLCB0cmF2OiBzdGF0ZS5nZXRUcmF2ZXJzZSgpLCBpOiBzdGF0ZS5nZXRJKCksXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhvYmopO1xuICB9XG4gIGZ1bmN0aW9uIGdldEJvYXJkKCkge1xuICAgIHJldHVybiBib2FyZDtcbiAgfVxuICBmdW5jdGlvbiBhdHRhY2socGxheWVyQm9hcmQpIHtcbiAgICBjb25zdCBhbHBoYWJldCA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICAgIGNvbnN0IGdyaWQgPSBwbGF5ZXJCb2FyZC5nZXRHcmlkKCk7XG4gICAgd2hpbGUgKCFwbGF5ZXJCb2FyZC5mdWxsKCkpIHtcbiAgICAgIGlmIChzdGF0ZS5nZXRUcmF2ZXJzZU1pc3MoKSkge1xuICAgICAgICB0cmF2ZXJzZURpcihwbGF5ZXJCb2FyZCwgc3RhdGUuZ2V0TGFzdEhpdCgpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXRlLmdldEFkak1pc3MoKSkge1xuICAgICAgICBhdHRhY2tBZGphY2VudChwbGF5ZXJCb2FyZCwgc3RhdGUuZ2V0TGFzdEhpdCgpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgYSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpICsgMTtcbiAgICAgIGNvbnN0IGIgPSBhbHBoYWJldFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuICAgICAgaWYgKCFncmlkW2FdW2JdIHx8ICFncmlkW2FdW2JdLmhhc093blByb3BlcnR5KCdtYXJrZXInKSkge1xuICAgICAgICBhdHRhY2tMb29wKHBsYXllckJvYXJkLCBbYSwgYl0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGF0dGFja0xvb3AocGxheWVyQm9hcmQsIGNvb3JkKSB7XG4gICAgY29uc3QgW2EsIGJdID0gY29vcmQ7XG4gICAgY29uc3QgaGl0ID0gcGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhhLCBiKTtcbiAgICBpZiAoaGl0KSB7XG4gICAgICBzdGF0ZS5zZXRMYXN0SGl0KFthLCBiXSk7XG4gICAgICBzdGF0ZS5zZXRBZGpNaXNzRmFsc2UoKTtcbiAgICAgIHN0YXRlLnNldFRyYXZlcnNlTWlzc0ZhbHNlKCk7XG4gICAgICBjb25zdCBzdW5rID0gY2hlY2tTdW5rKHBsYXllckJvYXJkLCBjb29yZCk7XG4gICAgICBpZiAoc3Vuaykge1xuICAgICAgICBzdGF0ZS5zZXRUcmF2ZXJzZUZhbHNlKCk7XG4gICAgICAgIGF0dGFjayhwbGF5ZXJCb2FyZCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0ZS5nZXRUcmF2ZXJzZSgpKSB7XG4gICAgICAgIHRyYXZlcnNlRGlyKHBsYXllckJvYXJkLCBjb29yZCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGF0dGFja0FkamFjZW50KHBsYXllckJvYXJkLCBbYSwgYl0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrU3VuayhwbGF5ZXJCb2FyZCwgY29vcmQpIHtcbiAgICBjb25zdCBncmlkID0gcGxheWVyQm9hcmQuZ2V0R3JpZCgpO1xuICAgIGNvbnN0IFthLCBiXSA9IGNvb3JkO1xuICAgIGlmIChncmlkW2FdW2JdLmhhc093blByb3BlcnR5KCdzaGlwJykpIHtcbiAgICAgIHJldHVybiBncmlkW2FdW2JdLnNoaXAuaXNTdW5rKCk7XG4gICAgfVxuICAgIHJldHVybiBncmlkW2FdW2JdLmlzU3VuaygpO1xuICB9XG4gIGZ1bmN0aW9uIGNoZWNrU2hpcChwbGF5ZXJCb2FyZCwgY29vcmQpIHtcbiAgICBjb25zdCBncmlkID0gcGxheWVyQm9hcmQuZ2V0R3JpZCgpO1xuICAgIGNvbnN0IFthLCBiXSA9IGNvb3JkO1xuICAgIGlmICghZ3JpZFthXVtiXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZ3JpZFthXVtiXS5oYXNPd25Qcm9wZXJ0eSgnbWFya2VyJykpIHtcbiAgICAgIHJldHVybiBncmlkW2FdW2JdLmhhc093blByb3BlcnR5KCdzaGlwJyk7XG4gICAgfVxuICAgIHJldHVybiBncmlkW2FdW2JdLmhhc093blByb3BlcnR5KCdpc1N1bmsnKTtcbiAgfVxuICBmdW5jdGlvbiBhdHRhY2tBZGphY2VudChwbGF5ZXJCb2FyZCwgY29vcmQpIHtcbiAgICBjb25zdCBhbHBoYWJldCA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICAgIGNvbnN0IGdyaWQgPSBwbGF5ZXJCb2FyZC5nZXRHcmlkKCk7XG4gICAgY29uc3QgYWRqID0gY2FsY0Fkaihjb29yZCk7XG4gICAgbGV0IGdvID0gdHJ1ZTtcbiAgICBhZGouZm9yRWFjaCgoZSwgaSkgPT4ge1xuICAgICAgaWYgKGdvKSB7XG4gICAgICAgIGNvbnN0IFthLCBiXSA9IGU7XG4gICAgICAgIGlmICgoYSA+IDAgJiYgYSA8IDExKSAmJiBhbHBoYWJldC5pbmNsdWRlcyhiKSkge1xuICAgICAgICAgIGlmICghZ3JpZFthXVtiXSB8fCAhZ3JpZFthXVtiXS5oYXNPd25Qcm9wZXJ0eSgnbWFya2VyJykpIHtcbiAgICAgICAgICAgIGlmICghZ3JpZFthXVtiXSkge1xuICAgICAgICAgICAgICBzdGF0ZS5zZXRBZGpNaXNzVHJ1ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3RhdGUuc2V0SShpKTtcbiAgICAgICAgICAgICAgc3RhdGUuc2V0VHJhdmVyc2VUcnVlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnbyA9IGZhbHNlO1xuICAgICAgICAgICAgYXR0YWNrTG9vcChwbGF5ZXJCb2FyZCwgW2EsIGJdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBjYWxjQWRqKGNvb3JkKSB7XG4gICAgY29uc3QgW2EsIGJdID0gY29vcmQ7XG4gICAgY29uc3QgbGVmdCA9IFthLCBnZXRBbHBoYShiLCAtMSldO1xuICAgIGNvbnN0IHVwID0gW2EgLSAxLCBiXTtcbiAgICBjb25zdCByaWdodCA9IFthLCBnZXRBbHBoYShiLCAxKV07XG4gICAgY29uc3QgZG93biA9IFthICsgMSwgYl07XG4gICAgY29uc3QgYWRqID0gW2xlZnQsIHVwLCByaWdodCwgZG93bl07XG4gICAgcmV0dXJuIGFkajtcbiAgfVxuICBmdW5jdGlvbiB0cmF2ZXJzZURpcihwbGF5ZXJCb2FyZCwgY29vcmQpIHtcbiAgICBjb25zdCBncmlkID0gcGxheWVyQm9hcmQuZ2V0R3JpZCgpO1xuICAgIGNvbnN0IGFkaiA9IGNhbGNBZGooY29vcmQpO1xuICAgIGNvbnN0IGkgPSBzdGF0ZS5nZXRJKCk7XG4gICAgY29uc3QgW2EsIGJdID0gYWRqW2ldO1xuICAgIGlmIChvdXRPZkJvdW5kcyhbYSwgYl0pIHx8ICFjaGVja1NoaXAocGxheWVyQm9hcmQsIFthLCBiXSkpIHtcbiAgICAgIHN0YXRlLnNldEkoZ2V0T3BwKGkpKTtcbiAgICB9XG4gICAgaWYgKGF0dGFja0NoZWNrcyhwbGF5ZXJCb2FyZCwgW2EsIGJdKSkge1xuICAgICAgaWYgKCFncmlkW2FdW2JdKSB7XG4gICAgICAgIHN0YXRlLnNldFRyYXZlcnNlTWlzc1RydWUoKTtcbiAgICAgIH1cbiAgICAgIGF0dGFja0xvb3AocGxheWVyQm9hcmQsIFthLCBiXSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyYXZlcnNlRGlyKHBsYXllckJvYXJkLCBbYSwgYl0pO1xuICB9XG4gIGZ1bmN0aW9uIG91dE9mQm91bmRzKGNvb3JkKSB7XG4gICAgY29uc3QgYWxwaGFiZXQgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBjb25zdCBbYSwgYl0gPSBjb29yZDtcbiAgICBpZiAoKGEgPiAwICYmIGEgPCAxMSkgJiYgYWxwaGFiZXQuaW5jbHVkZXMoYikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gYXR0YWNrQ2hlY2tzKHBsYXllckJvYXJkLCBjb29yZCkge1xuICAgIGNvbnN0IGFscGhhYmV0ID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG4gICAgY29uc3QgZ3JpZCA9IHBsYXllckJvYXJkLmdldEdyaWQoKTtcbiAgICBjb25zdCBbYSwgYl0gPSBjb29yZDtcbiAgICBpZiAoKGEgPiAwICYmIGEgPCAxMSkgJiYgYWxwaGFiZXQuaW5jbHVkZXMoYikpIHtcbiAgICAgIGlmICghZ3JpZFthXVtiXSB8fCAhZ3JpZFthXVtiXS5oYXNPd25Qcm9wZXJ0eSgnbWFya2VyJykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmdW5jdGlvbiBnZXRPcHAoaSkge1xuICAgIHN3aXRjaCAoaSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gMjtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIDM7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGdldEFscGhhKGIsIG4pIHtcbiAgICBjb25zdCBhbHBoYWJldCA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICAgIGNvbnN0IGkgPSBhbHBoYWJldC5pbmRleE9mKGIpICsgbjtcbiAgICByZXR1cm4gYWxwaGFiZXRbaV07XG4gIH1cbiAgcmV0dXJuIHsgZ2V0Qm9hcmQsIGF0dGFjayB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcHV0ZXJGYWN0b3J5O1xuIiwiaW1wb3J0IGdhbWUgZnJvbSAnLic7XG5pbXBvcnQgeCBmcm9tICcuL2Fzc2V0cy9jbG9zZS5zdmcnO1xuaW1wb3J0IGRvdCBmcm9tICcuL2Fzc2V0cy9jaXJjbGUtbWVkaXVtLnN2Zyc7XG5cbmNvbnN0IGJ0bnMgPSAoKCkgPT4ge1xuICBjb25zdCBwbGFjZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZScpO1xuICBwbGFjZUJ0bi5vbmNsaWNrID0gc2hvd1NoaXBCb3g7XG4gIGNvbnN0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb20nKTtcbiAgcmFuZG9tQnRuLm9uY2xpY2sgPSByYW5kb21QU2hpcHM7XG4gIGNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0Jyk7XG4gIHN0YXJ0Lm9uY2xpY2sgPSBzdGFydEdhbWU7XG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICBjb25zdCBwQm9hcmQgPSBnYW1lLmdldFBCb2FyZCgpO1xuICAgIGNvbnN0IGNoZWNrID0gcEJvYXJkLmNoZWNrR3JpZCgpO1xuICAgIGlmICghY2hlY2spIHtcbiAgICAgIGFsZXJ0KCdBbGwgU2hpcHMgaGF2ZSBub3QgYmVlbiBwbGFjZWQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ3JpZC5hZGRDR3JpZExpc3RlbmVycygpO1xuICAgIHJlbW92ZUJ0bnMoKTtcbiAgICBjbG9zZVNoaXBCb3goKTtcbiAgICBncmlkLnJlc2V0UGxheWVyR3JpZCgpO1xuICAgIGRpc3BsYXlTdGF0ZS5kaXNwbGF5U2hpcHNQbGF5ZXIocEJvYXJkLCBmYWxzZSk7XG4gICAgZGlzcGxheVN0YXRlLmRpc3BsYXlUZXh0KCk7XG4gIH1cbiAgZnVuY3Rpb24gc2hvd1NoaXBCb3goKSB7XG4gICAgY29uc3QgcEJvYXJkID0gZ2FtZS5nZXRQQm9hcmQoKTtcbiAgICBwQm9hcmQucmVzZXRHcmlkKCk7XG4gICAgZGlzcGxheVN0YXRlLnJlc2V0U2hpcEJveCgpO1xuICAgIGRpc3BsYXlTdGF0ZS5kaXNwbGF5U2hpcHNQbGF5ZXIocEJvYXJkKTtcbiAgICBjb25zdCBzaGlwQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGUtZGl2Jyk7XG4gICAgc2hpcEJveC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgY29uc3Qgc2hpcFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGVmdCAudGV4dCcpO1xuICAgIHNoaXBUZXh0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgfVxuICBmdW5jdGlvbiByYW5kb21QU2hpcHMoKSB7XG4gICAgY2xvc2VTaGlwQm94KCk7XG4gICAgY29uc3QgcEJvYXJkID0gZ2FtZS5nZXRQQm9hcmQoKTtcbiAgICBwQm9hcmQucmVzZXRHcmlkKCk7XG4gICAgcEJvYXJkLnJhbmRvbVBvcHVsYXRlKCk7XG4gICAgZGlzcGxheVN0YXRlLmRpc3BsYXlTaGlwc1BsYXllcihwQm9hcmQsIGZhbHNlKTtcbiAgICBkaXNwbGF5U3RhdGUuaGlkZVNoaXBUZXh0KCk7XG4gIH1cbiAgZnVuY3Rpb24gY2xvc2VTaGlwQm94KCkge1xuICAgIGNvbnN0IHNoaXBCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZS1kaXYnKTtcbiAgICBzaGlwQm94LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBkaXNwbGF5U3RhdGUuaGlkZVNoaXBUZXh0KCk7XG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlQnRucygpIHtcbiAgICBwbGFjZUJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgcmFuZG9tQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBzdGFydC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIH1cbn0pKCk7XG5jb25zdCBkcmFnID0gKCgpID0+IHtcbiAgY29uc3QgZHJhZ0RhdGEgPSB7fTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IHtcbiAgICBkcmFnRGF0YS50YXJnZXQgPSBlLnRhcmdldDtcbiAgICBkcmFnRGF0YS5sZW5ndGggPSBlLnRhcmdldC5kYXRhc2V0Lmxlbmd0aDtcbiAgICBkcmFnRGF0YS5pID0gZS50YXJnZXQuZGF0YXNldC5pO1xuICAgIGRyYWdEYXRhLmhvciA9IGUudGFyZ2V0LmRhdGFzZXQuaG9yO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG4gIH0pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKGV2ZW50KSA9PiB7XG4gICAgLy8gcmVzZXQgdGhlIHRyYW5zcGFyZW5jeVxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuICB9KTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXZlbnQpID0+IHtcbiAgICAvLyBwcmV2ZW50IGRlZmF1bHQgdG8gYWxsb3cgZHJvcFxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0sIGZhbHNlKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3B6b25lJykpIHtcbiAgICAgIGNvbnN0IHsgY29vcmQgfSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0O1xuICAgICAgY29uc3QgW2EsIGJdID0gY29vcmQuc3BsaXQoJywnKTtcbiAgICAgIGNvbnN0IHBCb2FyZCA9IGdhbWUuZ2V0UEJvYXJkKCk7XG4gICAgICBsZXQgY2hlY2s7IGxldFxuICAgICAgICBjb29yZHM7XG4gICAgICBpZiAoZHJhZ0RhdGEuaG9yID09PSAndHJ1ZScpIHtcbiAgICAgICAgY2hlY2sgPSBwQm9hcmQuY2hlY2tEcm9wSG9yKFthLCBiXSwgZHJhZ0RhdGEubGVuZ3RoLCBkcmFnRGF0YS5pKTtcbiAgICAgICAgY29vcmRzID0gcEJvYXJkLmdldENvb3Jkc0hvcihbYSwgYl0sIGRyYWdEYXRhLmxlbmd0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGVjayA9IHBCb2FyZC5jaGVja0Ryb3BWZXIoW2EsIGJdLCBkcmFnRGF0YS5sZW5ndGgsIGRyYWdEYXRhLmkpO1xuICAgICAgICBjb29yZHMgPSBwQm9hcmQuZ2V0Q29vcmRzVmVyKFthLCBiXSwgZHJhZ0RhdGEubGVuZ3RoKTtcbiAgICAgIH1cbiAgICAgIGNvb3Jkcy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNsZWZ0IGRpdltkYXRhLWNvb3JkPScke2V9J11gKTtcbiAgICAgICAgaWYgKGNoZWNrKSB7XG4gICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoJ3ZhbGlkLWRyb3AnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZCgnaW52YWxpZC1kcm9wJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wem9uZScpKSB7XG4gICAgICByZW1vdmVEcmFnQ2xhc3NlcyhldmVudCk7XG4gICAgfVxuICB9KTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcEJvYXJkID0gZ2FtZS5nZXRQQm9hcmQoKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZHJvcHpvbmUnKSkge1xuICAgICAgcmVtb3ZlRHJhZ0NsYXNzZXMoZXZlbnQpO1xuICAgICAgY29uc3QgeyBjb29yZCB9ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQ7XG4gICAgICBjb25zdCBbYSwgYl0gPSBjb29yZC5zcGxpdCgnLCcpO1xuICAgICAgbGV0IGNvb3JkczsgbGV0XG4gICAgICAgIGNoZWNrO1xuICAgICAgaWYgKGRyYWdEYXRhLmhvciA9PT0gJ3RydWUnKSB7XG4gICAgICAgIGNoZWNrID0gcEJvYXJkLmNoZWNrRHJvcEhvcihbYSwgYl0sIGRyYWdEYXRhLmxlbmd0aCwgZHJhZ0RhdGEuaSk7XG4gICAgICAgIGNvb3JkcyA9IHBCb2FyZC5nZXRDb29yZHNIb3IoW2EsIGJdLCBkcmFnRGF0YS5sZW5ndGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hlY2sgPSBwQm9hcmQuY2hlY2tEcm9wVmVyKFthLCBiXSwgZHJhZ0RhdGEubGVuZ3RoLCBkcmFnRGF0YS5pKTtcbiAgICAgICAgY29vcmRzID0gcEJvYXJkLmdldENvb3Jkc1ZlcihbYSwgYl0sIGRyYWdEYXRhLmxlbmd0aCk7XG4gICAgICB9XG4gICAgICBpZiAoY2hlY2spIHtcbiAgICAgICAgcEJvYXJkLnJlbW92ZVNoaXAoZHJhZ0RhdGEuaSk7XG4gICAgICAgIHBCb2FyZC5hZGRTaGlwKGNvb3JkcywgZHJhZ0RhdGEuaSwgZHJhZ0RhdGEuaG9yKTtcbiAgICAgICAgaWYgKGRyYWdEYXRhLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkID09PSAnc2hpcC1ib3gnKSB7XG4gICAgICAgICAgY29uc3Qgc2hpcEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwLWJveCcpO1xuICAgICAgICAgIHNoaXBCb3gucmVtb3ZlQ2hpbGQoZHJhZ0RhdGEudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBkaXNwbGF5U3RhdGUuZGlzcGxheVNoaXBzUGxheWVyKHBCb2FyZCk7XG4gIH0pO1xuICBmdW5jdGlvbiByZW1vdmVEcmFnQ2xhc3NlcyhldmVudCkge1xuICAgIGNvbnN0IHsgY29vcmQgfSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0O1xuICAgIGNvbnN0IFthLCBiXSA9IGNvb3JkLnNwbGl0KCcsJyk7XG4gICAgY29uc3QgcEJvYXJkID0gZ2FtZS5nZXRQQm9hcmQoKTtcbiAgICBsZXQgY29vcmRzO1xuICAgIGlmIChkcmFnRGF0YS5ob3IgPT09ICd0cnVlJykge1xuICAgICAgY29vcmRzID0gcEJvYXJkLmdldENvb3Jkc0hvcihbYSwgYl0sIGRyYWdEYXRhLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvb3JkcyA9IHBCb2FyZC5nZXRDb29yZHNWZXIoW2EsIGJdLCBkcmFnRGF0YS5sZW5ndGgpO1xuICAgIH1cbiAgICBjb29yZHMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2xlZnQgZGl2W2RhdGEtY29vcmQ9JyR7ZX0nXWApO1xuICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkLWRyb3AnKTtcbiAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkLWRyb3AnKTtcbiAgICB9KTtcbiAgfVxufSkoKTtcblxuY29uc3QgZ3JpZCA9ICgoKSA9PiB7XG4gIGNvbnN0IHBHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlZnQgLmdyaWQnKTtcbiAgY29uc3QgY0dyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmlnaHQgLmdyaWQnKTtcbiAgY3JlYXRlR3JpZEJveGVzKHBHcmlkLCBmYWxzZSk7XG4gIGNyZWF0ZUdyaWRCb3hlcyhjR3JpZCwgdHJ1ZSk7XG4gIGZ1bmN0aW9uIGNyZWF0ZUdyaWRCb3hlcyhncmlkLCBjb21wKSB7XG4gICAgY29uc3QgYWxwaGFiZXQgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDExOyBpKyspIHtcbiAgICAgIGFscGhhYmV0LmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QgPSAnZ3JpZC1kaXYnO1xuICAgICAgICBkaXYuZGF0YXNldC5jb29yZCA9IFtpLCBlXTtcbiAgICAgICAgaWYgKCFjb21wKSB7XG4gICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2Ryb3B6b25lJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICBncmlkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gYWRkQ0dyaWRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyaWdodCAuZ3JpZCcpO1xuICAgIGNvbnN0IGdyaWREaXZzID0gZ3JpZC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1kaXYnKTtcbiAgICBncmlkRGl2cy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXR0YWNrLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gYXR0YWNrKGUpIHtcbiAgICBkaXNwbGF5U3RhdGUuaGlkZVRleHQoKTtcbiAgICBjb25zdCBjb29yZCA9IGUudGFyZ2V0LmRhdGFzZXQuY29vcmQuc3BsaXQoJywnKTtcbiAgICBnYW1lLnJlY2VpdmVQbGF5ZXJBdHRhY2soY29vcmQpO1xuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBjb25zdCBjR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyaWdodCAuZ3JpZCcpO1xuICAgIGNvbnN0IGRpdnMgPSBjR3JpZC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1kaXYnKTtcbiAgICBkaXZzLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhdHRhY2spO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZU9uZUxpc3RlbmVyKGJveCkge1xuICAgIGJveC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGF0dGFjayk7XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRQbGF5ZXJHcmlkKCkge1xuICAgIGNsZWFyUGxheWVyR3JpZCgpO1xuICAgIGNyZWF0ZUdyaWRCb3hlcyhwR3JpZCwgZmFsc2UpO1xuICB9XG4gIGZ1bmN0aW9uIGNsZWFyUGxheWVyR3JpZCgpIHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlZnQgLmdyaWQnKTtcbiAgICB3aGlsZSAoZ3JpZC5maXJzdENoaWxkKSB7XG4gICAgICBncmlkLnJlbW92ZUNoaWxkKGdyaWQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgcmVtb3ZlTGlzdGVuZXJzLCByZW1vdmVPbmVMaXN0ZW5lciwgcmVzZXRQbGF5ZXJHcmlkLCBhZGRDR3JpZExpc3RlbmVycyxcbiAgfTtcbn0pKCk7XG5cbmNvbnN0IGNyZWF0ZUdyaWRHdWlkZXMgPSAoKCkgPT4ge1xuICBjb25zdCBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhaW5lcicpO1xuICBjb250YWluZXJzLmZvckVhY2goKGMpID0+IHtcbiAgICBjcmVhdGVBbHBoYWJldEd1aWRlKGMpO1xuICAgIGNyZWF0ZU51bWJlcnNHdWlkZShjKTtcbiAgfSk7XG4gIGZ1bmN0aW9uIGNyZWF0ZUFscGhhYmV0R3VpZGUoYykge1xuICAgIGNvbnN0IGxldHRlcnMgPSBjLnF1ZXJ5U2VsZWN0b3IoJy5sZXR0ZXJzJyk7XG4gICAgY29uc3QgYWxwaGFiZXQgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBhbHBoYWJldC5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi50ZXh0Q29udGVudCA9IGU7XG4gICAgICBkaXYuY2xhc3NMaXN0ID0gJ2d1aWRlLWRpdic7XG4gICAgICBsZXR0ZXJzLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlTnVtYmVyc0d1aWRlKGMpIHtcbiAgICBjb25zdCBudW1iZXJzID0gYy5xdWVyeVNlbGVjdG9yKCcubnVtYmVycycpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYudGV4dENvbnRlbnQgPSBpO1xuICAgICAgZGl2LmNsYXNzTGlzdCA9ICdndWlkZS1kaXYnO1xuICAgICAgbnVtYmVycy5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cbiAgfVxufSkoKTtcblxuY29uc3QgZGlzcGxheVN0YXRlID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gZGlzcGxheShwQm9hcmQpIHtcbiAgICBkaXNwbGF5U2hpcHNQbGF5ZXIocEJvYXJkKTtcbiAgfVxuICBmdW5jdGlvbiBkaXNwbGF5U2hpcHNQbGF5ZXIocEJvYXJkLCBpbnRlcmFjdCA9IHRydWUpIHtcbiAgICBncmlkLnJlc2V0UGxheWVyR3JpZCgpO1xuICAgIGNvbnN0IHBHcmlkID0gcEJvYXJkLmdldEdyaWQoKTtcbiAgICBjb25zdCBncmlkRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0IC5ncmlkJyk7XG4gICAgT2JqZWN0LmVudHJpZXMocEdyaWQpLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGNvbnN0IFtrZXkxLCB2YWwxXSA9IGU7XG4gICAgICBPYmplY3QuZW50cmllcyh2YWwxKS5mb3JFYWNoKChqKSA9PiB7XG4gICAgICAgIGNvbnN0IFtrZXkyLCB2YWwyXSA9IGo7XG4gICAgICAgIGlmICh2YWwyKSB7XG4gICAgICAgICAgaWYgKHZhbDIuaGFzT3duUHJvcGVydHkoJ2lzU3VuaycpKSB7XG4gICAgICAgICAgICBjb25zdCBib3ggPSBncmlkRGlzcGxheS5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS1jb29yZCA9IFwiJHtrZXkxfSwke2tleTJ9XCJdYCk7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgaWYgKGludGVyYWN0KSB7XG4gICAgICAgICAgICAgIGJveC5kYXRhc2V0Lmxlbmd0aCA9IHZhbDIubGVuZ3RoO1xuICAgICAgICAgICAgICBib3guZGF0YXNldC5pID0gdmFsMi5pO1xuICAgICAgICAgICAgICBib3guZGF0YXNldC5oZWFkID0gdmFsMi5oZWFkO1xuICAgICAgICAgICAgICBib3guZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYm94LmRhdGFzZXQuaG9yID0gdmFsMi5ob3I7XG4gICAgICAgICAgICAgIGJveC5vbmNsaWNrID0gY2hhbmdlT3JpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gY2hhbmdlT3JpKGUpIHtcbiAgICBjb25zdCBwQm9hcmQgPSBnYW1lLmdldFBCb2FyZCgpO1xuICAgIGxldCB7IGhvciB9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICBob3IgPSAoaG9yID09PSAndHJ1ZScpO1xuICAgIGlmIChob3IpIHtcbiAgICAgIHBCb2FyZC5jaGFuZ2VPcmlWZXJ0KGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwQm9hcmQuY2hhbmdlT3JpSG9yKGUpO1xuICAgIH1cbiAgICBkaXNwbGF5U2hpcHNQbGF5ZXIocEJvYXJkKTtcbiAgfVxuICBmdW5jdGlvbiBkaXNwbGF5U2hpcHNDb21wdXRlcihncmlkKSB7XG4gICAgY29uc3QgZ3JpZERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmlnaHQgLmdyaWQnKTtcbiAgICBPYmplY3QuZW50cmllcyhncmlkKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBjb25zdCBba2V5MSwgdmFsMV0gPSBlO1xuICAgICAgT2JqZWN0LmVudHJpZXModmFsMSkuZm9yRWFjaCgoaikgPT4ge1xuICAgICAgICBjb25zdCBba2V5MiwgdmFsMl0gPSBqO1xuICAgICAgICBpZiAodmFsMikge1xuICAgICAgICAgIGlmICh2YWwyLmhhc093blByb3BlcnR5KCdpc1N1bmsnKSkge1xuICAgICAgICAgICAgY29uc3QgYm94ID0gZ3JpZERpc3BsYXkucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtY29vcmQgPSBcIiR7a2V5MX0sJHtrZXkyfVwiXWApO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGRpc3BsYXlIaXRzQm90aChwR3JpZCwgY0dyaWQpIHtcbiAgICBjb25zdCBwR3JpZERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGVmdCAuZ3JpZCcpO1xuICAgIGNvbnN0IGNHcmlkRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyaWdodCAuZ3JpZCcpO1xuICAgIGRpc3BsYXlIaXRzKHBHcmlkLCBwR3JpZERpc3BsYXkpO1xuICAgIGRpc3BsYXlIaXRzKGNHcmlkLCBjR3JpZERpc3BsYXksIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheUhpdHMoZywgZ3JpZERpc3BsYXksIGNvbXAgPSBmYWxzZSkge1xuICAgIE9iamVjdC5lbnRyaWVzKGcpLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGNvbnN0IFtrZXkxLCB2YWwxXSA9IGU7XG4gICAgICBPYmplY3QuZW50cmllcyh2YWwxKS5mb3JFYWNoKChqKSA9PiB7XG4gICAgICAgIGNvbnN0IFtrZXkyLCB2YWwyXSA9IGo7XG4gICAgICAgIGlmICh2YWwyKSB7XG4gICAgICAgICAgaWYgKHZhbDIuaGFzT3duUHJvcGVydHkoJ21hcmtlcicpKSB7XG4gICAgICAgICAgICBjb25zdCBib3ggPSBncmlkRGlzcGxheS5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS1jb29yZCA9IFwiJHtrZXkxfSwke2tleTJ9XCJdYCk7XG4gICAgICAgICAgICBpZiAoY29tcCkge1xuICAgICAgICAgICAgICBncmlkLnJlbW92ZU9uZUxpc3RlbmVyKGJveCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBib3gucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gICAgICAgICAgICBpZiAodmFsMi5oYXNPd25Qcm9wZXJ0eSgnc2hpcCcpKSB7XG4gICAgICAgICAgICAgIGltZy5zcmMgPSB4O1xuICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpbWcuc3JjID0gZG90O1xuICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZGlzcGxheVNoaXBCb3goc2hpcHMpIHtcbiAgICBjb25zdCBzaGlwQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXAtYm94Jyk7XG4gICAgc2hpcHMuZm9yRWFjaCgoZSwgaSkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuY2xhc3NMaXN0ID0gJ3NoaXAtZGl2JztcbiAgICAgIGRpdi5kYXRhc2V0Lmxlbmd0aCA9IGUubGVuZ3RoO1xuICAgICAgZGl2LmRhdGFzZXQuaSA9IGk7XG4gICAgICBkaXYuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgIGRpdi5kYXRhc2V0LmhvciA9IHRydWU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzRGl2LmNsYXNzTGlzdCA9ICdzaGlwJztcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNEaXYpO1xuICAgICAgfVxuICAgICAgc2hpcEJveC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGRlbGV0ZVNoaXBzKCkge1xuICAgIGNvbnN0IHNoaXBCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcC1ib3gnKTtcbiAgICB3aGlsZSAoc2hpcEJveC5maXJzdENoaWxkKSB7XG4gICAgICBzaGlwQm94LnJlbW92ZUNoaWxkKHNoaXBCb3guZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHJlc2V0U2hpcEJveCgpIHtcbiAgICBjb25zdCBwQm9hcmQgPSBnYW1lLmdldFBCb2FyZCgpO1xuICAgIGNvbnN0IHNoaXBzID0gcEJvYXJkLmdldFNoaXBzKCk7XG4gICAgZGVsZXRlU2hpcHMoKTtcbiAgICBkaXNwbGF5U2hpcEJveChzaGlwcyk7XG4gIH1cbiAgZnVuY3Rpb24gZGlzcGxheVRleHQoKSB7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyaWdodCAudGV4dCcpO1xuICAgIHRleHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICB9XG4gIGZ1bmN0aW9uIGhpZGVUZXh0KCkge1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmlnaHQgLnRleHQnKTtcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVTaGlwVGV4dCgpIHtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlZnQgLnRleHQnKTtcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZGlzcGxheSxcbiAgICBkaXNwbGF5SGl0c0JvdGgsXG4gICAgZGlzcGxheVNoaXBCb3gsXG4gICAgZGlzcGxheVNoaXBzUGxheWVyLFxuICAgIHJlc2V0U2hpcEJveCxcbiAgICBkaXNwbGF5VGV4dCxcbiAgICBoaWRlVGV4dCxcbiAgICBoaWRlU2hpcFRleHQsXG4gIH07XG59KSgpO1xuXG5mdW5jdGlvbiBlbmRHYW1lKHdpbm5lcikge1xuICBncmlkLnJlbW92ZUxpc3RlbmVycygpO1xuICBhbGVydChgJHt3aW5uZXJ9IHdpbnMhYCk7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlTdGF0ZSwgZW5kR2FtZSB9O1xuIiwiaW1wb3J0IHNoaXAgZnJvbSAnLi9zaGlwJztcblxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICBsZXQgZ3JpZCA9IGNyZWF0ZUdhbWVib2FyZCgpO1xuICBjb25zdCBzaGlwcyA9IGNyZWF0ZVNoaXBzKCk7XG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soYSwgYikge1xuICAgIGNvbnN0IGNvb3JkID0gZ3JpZFthXVtiXTtcbiAgICBpZiAoY29vcmQpIHtcbiAgICAgIGlmIChjb29yZC5oYXNPd25Qcm9wZXJ0eSgnbWFya2VyJykpIHtcbiAgICAgICAgcmV0dXJuICdpbGxlZ2FsIGhpdCBvbiBtYXJrZXInO1xuICAgICAgfVxuICAgICAgY29vcmQuaGl0KCk7XG4gICAgICBncmlkW2FdW2JdID0gaGl0T2JqKGNvb3JkKTtcbiAgICAgIGhpdERpYWdvbmFscyhhLCBiKTtcbiAgICAgIGlmIChjb29yZC5pc1N1bmsoKSkge1xuICAgICAgICBoaXRBcm91bmRTaGlwKGNvb3JkKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBncmlkW2FdW2JdID0gaGl0T2JqKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGZ1bmN0aW9uIGhpdEFyb3VuZFNoaXAoc2hpcCkge1xuICAgIGNvbnN0IGNvb3JkcyA9IGZpbmRTaGlwKHNoaXApO1xuICAgIGNvb3Jkcy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBoaXRTdXJyb3VuZGluZyhlKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBmaW5kU2hpcChzaGlwKSB7XG4gICAgY29uc3QgYWxwaGFiZXQgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBjb25zdCBjb29yZHMgPSBbXTtcbiAgICBPYmplY3QudmFsdWVzKGdyaWQpLmZvckVhY2goKGUsIGkpID0+IHtcbiAgICAgIE9iamVjdC52YWx1ZXMoZSkuZm9yRWFjaCgoeCwgaikgPT4ge1xuICAgICAgICBpZiAoeCAmJiB4Lmhhc093blByb3BlcnR5KCdzaGlwJykgJiYgeC5zaGlwID09PSBzaGlwKSB7XG4gICAgICAgICAgY29uc3QgYSA9IGkgKyAxO1xuICAgICAgICAgIGNvbnN0IGIgPSBhbHBoYWJldFtqXTtcbiAgICAgICAgICBjb29yZHMucHVzaChbYSwgYl0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29vcmRzO1xuICB9XG4gIGZ1bmN0aW9uIGhpdElmUG9zcyhhLCBiKSB7XG4gICAgaWYgKCFjaGVja1ZhbGlkKGEsIGIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvb3JkID0gZ3JpZFthXVtiXTtcbiAgICBpZiAoY29vcmQpIHtcbiAgICAgIGlmIChjb29yZC5oYXNPd25Qcm9wZXJ0eSgnbWFya2VyJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29vcmQuaGl0KCk7XG4gICAgICBncmlkW2FdW2JdID0gaGl0T2JqKGNvb3JkKTtcbiAgICAgIGhpdERpYWdvbmFscyhhLCBiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ3JpZFthXVtiXSA9IGhpdE9iaigpO1xuICB9XG4gIGZ1bmN0aW9uIGNoZWNrVmFsaWQoYSwgYikge1xuICAgIGNvbnN0IGFscGhhYmV0ID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG4gICAgaWYgKChhID4gMCAmJiBhIDwgMTEpICYmIGFscGhhYmV0LmluY2x1ZGVzKGIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGZ1bmN0aW9uIGhpdFN1cnJvdW5kaW5nKGNvb3JkKSB7XG4gICAgY29uc3Qgc3VyID0gZ2V0U3Vycm91bmRpbmcoY29vcmQpO1xuICAgIHN1ci5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBjb25zdCBbYSwgYl0gPSBlO1xuICAgICAgaGl0SWZQb3NzKGEsIGIpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGdldFN1cnJvdW5kaW5nKGNvb3JkKSB7XG4gICAgbGV0IFthLCBiXSA9IGNvb3JkO1xuICAgIGEgPSArYTtcbiAgICBjb25zdCBxID0gW2EgLSAxLCBnZXRBbHBoYShiLCAtMSldO1xuICAgIGNvbnN0IHcgPSBbYSAtIDEsIGJdO1xuICAgIGNvbnN0IGUgPSBbYSAtIDEsIGdldEFscGhhKGIsICsxKV07XG4gICAgY29uc3QgciA9IFthLCBnZXRBbHBoYShiLCAtMSldO1xuICAgIGNvbnN0IHQgPSBbYSwgZ2V0QWxwaGEoYiwgMSldO1xuICAgIGNvbnN0IHkgPSBbYSArIDEsIGdldEFscGhhKGIsIC0xKV07XG4gICAgY29uc3QgdSA9IFthICsgMSwgYl07XG4gICAgY29uc3QgaSA9IFthICsgMSwgZ2V0QWxwaGEoYiwgMSldO1xuICAgIHJldHVybiBbcSwgdywgZSwgciwgdCwgeSwgdSwgaV07XG4gIH1cbiAgZnVuY3Rpb24gaGl0RGlhZ29uYWxzKGEsIGIpIHtcbiAgICBjb25zdCB1cExlZnQgPSBbKCthIC0gMSksIGdldEFscGhhKGIsIC0xKV07XG4gICAgY29uc3QgdXBSaWdodCA9IFsoK2EgLSAxKSwgZ2V0QWxwaGEoYiwgMSldO1xuICAgIGNvbnN0IGRvd25MZWZ0ID0gWygrYSArIDEpLCBnZXRBbHBoYShiLCAtMSldO1xuICAgIGNvbnN0IGRvd25SaWdodCA9IFsoK2EgKyAxKSwgZ2V0QWxwaGEoYiwgMSldO1xuICAgIGNvbnN0IGRpYWdvbmFscyA9IFt1cExlZnQsIHVwUmlnaHQsIGRvd25MZWZ0LCBkb3duUmlnaHRdO1xuICAgIGRpYWdvbmFscy5mb3JFYWNoKChlKSA9PiBoaXREaWFnb25hbChlKSk7XG4gIH1cblxuICBmdW5jdGlvbiBoaXREaWFnb25hbChkKSB7XG4gICAgY29uc3QgYWxwaGFiZXQgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBjb25zdCBbYSwgYl0gPSBkO1xuICAgIGlmICgoYSA+IDAgJiYgYSA8IDExKSAmJiBhbHBoYWJldC5pbmNsdWRlcyhiKSkge1xuICAgICAgcmVjZWl2ZUF0dGFjayhhLCBiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBbHBoYShiLCBuKSB7XG4gICAgY29uc3QgYWxwaGFiZXQgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBjb25zdCBpID0gYWxwaGFiZXQuaW5kZXhPZihiKSArIG47XG4gICAgcmV0dXJuIGFscGhhYmV0W2ldO1xuICB9XG4gIGZ1bmN0aW9uIGhpdE9iaihzaGlwID0gbnVsbCkge1xuICAgIGNvbnN0IG9iaiA9IHsgbWFya2VyOiAneCcgfTtcbiAgICBpZiAoc2hpcCkge1xuICAgICAgb2JqLnNoaXAgPSBzaGlwO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIGZ1bmN0aW9uIHJhbmRvbVBvcHVsYXRlKCkge1xuICAgIHNoaXBzLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBlO1xuICAgICAgY29uc3QgeCA9IDExIC0gbGVuZ3RoO1xuICAgICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgKyAxO1xuICAgICAgaWYgKHJhbmRvbSA+IDEpIHtcbiAgICAgICAgcG9wdWxhdGVWZXJ0aWNhbChlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvcHVsYXRlSG9yaXpvbnRhbChlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBwb3B1bGF0ZVZlcnRpY2FsKGUpIHtcbiAgICBjb25zdCBhbHBoYWJldCA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICAgIGNvbnN0IHggPSAxMSAtIGUubGVuZ3RoO1xuICAgIGxldCBrZWVwR29pbmcgPSB0cnVlO1xuICAgIHdoaWxlIChrZWVwR29pbmcpIHtcbiAgICAgIGNvbnN0IGxldHRlciA9IGFscGhhYmV0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV07XG4gICAgICBjb25zdCBudW1iZXIgPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogeCkpICsgMTtcbiAgICAgIGNvbnN0IGVuZCA9IG51bWJlciArIGUubGVuZ3RoIC0gMTtcbiAgICAgIGNvbnN0IHRlc3QgPSBjaGVja0dyaWRWZXJ0KG51bWJlciwgbGV0dGVyLCBlKTtcbiAgICAgIGlmICh0ZXN0KSB7XG4gICAgICAgIGtlZXBHb2luZyA9IGZhbHNlO1xuICAgICAgICBmaWxsR3JpZChbbnVtYmVyLCBsZXR0ZXJdLCBbZW5kLCBsZXR0ZXJdLCBmYWxzZSwgZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHBvcHVsYXRlSG9yaXpvbnRhbChlKSB7XG4gICAgY29uc3QgYWxwaGFiZXQgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBjb25zdCB4ID0gMTEgLSBlLmxlbmd0aDtcbiAgICBsZXQga2VlcEdvaW5nID0gdHJ1ZTtcbiAgICB3aGlsZSAoa2VlcEdvaW5nKSB7XG4gICAgICBjb25zdCBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgICAgY29uc3Qgc3RhcnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB4KTtcbiAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgZS5sZW5ndGggLSAxO1xuICAgICAgY29uc3QgdGVzdCA9IGNoZWNrR3JpZEhvcmkobnVtYmVyLCBzdGFydCwgZSk7XG4gICAgICBpZiAodGVzdCkge1xuICAgICAgICBrZWVwR29pbmcgPSBmYWxzZTtcbiAgICAgICAgZmlsbEdyaWQoW251bWJlciwgYWxwaGFiZXRbc3RhcnRdXSwgW251bWJlciwgYWxwaGFiZXRbZW5kXV0sIHRydWUsIGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBjaGVja0dyaWRWZXJ0KG51bWJlciwgbGV0dGVyLCBzaGlwKSB7XG4gICAgbGV0IHdvcmtzID0gdHJ1ZTtcbiAgICBjb25zdCBlbmQgPSBudW1iZXIgKyBzaGlwLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gbnVtYmVyOyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIGNvbnN0IGNoZWNrID0gIWNoZWNrU3Vycm91bmRpbmcoaSwgbGV0dGVyLCBzaGlwKTtcbiAgICAgIGlmIChncmlkW2ldW2xldHRlcl0gfHwgY2hlY2spIHtcbiAgICAgICAgd29ya3MgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHdvcmtzO1xuICB9XG4gIGZ1bmN0aW9uIGNoZWNrR3JpZEhvcmkobnVtYmVyLCBzdGFydCwgc2hpcCkge1xuICAgIGxldCB3b3JrcyA9IHRydWU7XG4gICAgY29uc3QgYWxwaGFiZXQgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBjb25zdCBlbmQgPSBzdGFydCArIHNoaXAubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICBjb25zdCBsZXR0ZXIgPSBhbHBoYWJldFtpXTtcbiAgICAgIGNvbnN0IGNoZWNrID0gIWNoZWNrU3Vycm91bmRpbmcobnVtYmVyLCBsZXR0ZXIsIHNoaXApO1xuICAgICAgaWYgKGdyaWRbbnVtYmVyXVtsZXR0ZXJdIHx8IGNoZWNrKSB7XG4gICAgICAgIHdvcmtzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB3b3JrcztcbiAgfVxuICBmdW5jdGlvbiBjaGVja1N1cnJvdW5kaW5nKGEsIGIsIHNoaXBPYmopIHtcbiAgICBjb25zdCBpID0gK2E7XG4gICAgY29uc3QgaVVwID0gaSAtIDE7XG4gICAgY29uc3QgaURvd24gPSBpICsgMTtcbiAgICBjb25zdCBiTGVmdCA9IGdldEFscGhhKGIsIC0xKTtcbiAgICBjb25zdCBiUmlnaHQgPSBnZXRBbHBoYShiLCAxKTtcbiAgICBjb25zdCB1cExlZnQgPSBbaVVwLCBiTGVmdF07XG4gICAgY29uc3QgdXAgPSBbaVVwLCBiXTtcbiAgICBjb25zdCB1cFJpZ2h0ID0gW2lVcCwgYlJpZ2h0XTtcbiAgICBjb25zdCBsZWZ0ID0gW2ksIGJMZWZ0XTtcbiAgICBjb25zdCByaWdodCA9IFtpLCBiUmlnaHRdO1xuICAgIGNvbnN0IGRvd25MZWZ0ID0gW2lEb3duLCBiTGVmdF07XG4gICAgY29uc3QgZG93biA9IFtpRG93biwgYl07XG4gICAgY29uc3QgZG93blJpZ2h0ID0gW2lEb3duLCBiUmlnaHRdO1xuICAgIGNvbnN0IHN1cnJvdW5kaW5nID0gW3VwTGVmdCwgdXAsIHVwUmlnaHQsIGxlZnQsIHJpZ2h0LCBkb3duTGVmdCwgZG93biwgZG93blJpZ2h0XTtcbiAgICBjb25zdCBhbHBoYWJldCA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICAgIGxldCB3b3JrcyA9IHRydWU7XG4gICAgc3Vycm91bmRpbmcuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgY29uc3QgW2MsIGRdID0gZTtcbiAgICAgIGlmICgoYyA+IDAgJiYgYyA8IDExKSAmJiBhbHBoYWJldC5pbmNsdWRlcyhkKSkge1xuICAgICAgICBjb25zdCBib3hWYWx1ZSA9IGdyaWRbY11bZF07XG4gICAgICAgIGlmIChib3hWYWx1ZSkge1xuICAgICAgICAgIGlmICghKGJveFZhbHVlID09PSBzaGlwT2JqKSkge1xuICAgICAgICAgICAgd29ya3MgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gd29ya3M7XG4gIH1cbiAgZnVuY3Rpb24gaGl0QWxsKCkge1xuICAgIGNvbnN0IGFscGhhYmV0ID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG4gICAgT2JqZWN0LnZhbHVlcyhncmlkKS5mb3JFYWNoKChlLCBpKSA9PiB7XG4gICAgICBPYmplY3QudmFsdWVzKGUpLmZvckVhY2goKHgsIGopID0+IHtcbiAgICAgICAgY29uc3QgYSA9IGkgKyAxO1xuICAgICAgICBjb25zdCBiID0gYWxwaGFiZXRbal07XG4gICAgICAgIHJlY2VpdmVBdHRhY2soYSwgYik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBzaW5rQWxsKCkge1xuICAgIGNvbnN0IGFscGhhYmV0ID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG4gICAgT2JqZWN0LnZhbHVlcyhncmlkKS5mb3JFYWNoKChlLCBpKSA9PiB7XG4gICAgICBPYmplY3QudmFsdWVzKGUpLmZvckVhY2goKHgsIGopID0+IHtcbiAgICAgICAgaWYgKHgpIHtcbiAgICAgICAgICBpZiAoeC5oYXNPd25Qcm9wZXJ0eSgnaXNTdW5rJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBpICsgMTtcbiAgICAgICAgICAgIGNvbnN0IGIgPSBhbHBoYWJldFtqXTtcbiAgICAgICAgICAgIHJlY2VpdmVBdHRhY2soYSwgYik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBhbGxTdW5rKCkge1xuICAgIGxldCBub1NoaXBzID0gdHJ1ZTtcbiAgICBPYmplY3QudmFsdWVzKGdyaWQpLmZvckVhY2goKGUpID0+IHtcbiAgICAgIE9iamVjdC52YWx1ZXMoZSkuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICBpZiAoeCkge1xuICAgICAgICAgIGlmICh4Lmhhc093blByb3BlcnR5KCdpc1N1bmsnKSkge1xuICAgICAgICAgICAgbm9TaGlwcyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5vU2hpcHM7XG4gIH1cbiAgZnVuY3Rpb24gZmlsbEdyaWQoYzEsIGMyLCBob3JpLCBzaGlwKSB7XG4gICAgY29uc3QgYWxwaGFiZXQgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBpZiAoaG9yaSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBhbHBoYWJldC5pbmRleE9mKGMxWzFdKTtcbiAgICAgIGNvbnN0IGVuZCA9IGFscGhhYmV0LmluZGV4T2YoYzJbMV0pO1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGFscGhhID0gYWxwaGFiZXRbaV07XG4gICAgICAgIGdyaWRbYzFbMF1dW2FscGhhXSA9IHNoaXA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSBjMVswXTsgaSA8PSBjMlswXTsgaSsrKSB7XG4gICAgICAgIGdyaWRbaV1bYzFbMV1dID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlU2hpcHMoKSB7XG4gICAgY29uc3QgczRhID0gc2hpcC5jcmVhdGVTaGlwKDQsIDApO1xuICAgIGNvbnN0IHMzYSA9IHNoaXAuY3JlYXRlU2hpcCgzLCAxKTtcbiAgICBjb25zdCBzM2IgPSBzaGlwLmNyZWF0ZVNoaXAoMywgMik7XG4gICAgY29uc3QgczJhID0gc2hpcC5jcmVhdGVTaGlwKDIsIDMpO1xuICAgIGNvbnN0IHMyYiA9IHNoaXAuY3JlYXRlU2hpcCgyLCA0KTtcbiAgICBjb25zdCBzMmMgPSBzaGlwLmNyZWF0ZVNoaXAoMiwgNSk7XG4gICAgY29uc3QgczFhID0gc2hpcC5jcmVhdGVTaGlwKDEsIDYpO1xuICAgIGNvbnN0IHMxYiA9IHNoaXAuY3JlYXRlU2hpcCgxLCA3KTtcbiAgICBjb25zdCBzMWMgPSBzaGlwLmNyZWF0ZVNoaXAoMSwgOCk7XG4gICAgY29uc3QgczFkID0gc2hpcC5jcmVhdGVTaGlwKDEsIDkpO1xuXG4gICAgcmV0dXJuIFtzNGEsIHMzYSwgczNiLCBzMmEsIHMyYiwgczJjLCBzMWEsIHMxYiwgczFjLCBzMWRdO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlR2FtZWJvYXJkKCkge1xuICAgIGNvbnN0IGlubmVyID0gY3JlYXRlSW5uZXIoKTtcbiAgICBjb25zdCBvdXRlciA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xuICAgICAgb3V0ZXJbaV0gPSB7IC4uLmlubmVyIH07XG4gICAgfVxuICAgIHJldHVybiBvdXRlcjtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVJbm5lcigpIHtcbiAgICBjb25zdCBhbHBoYWJldCA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgIGFscGhhYmV0LmZvckVhY2goKGUpID0+IG9ialtlXSA9IG51bGwpO1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRHcmlkKCkge1xuICAgIHJldHVybiBncmlkO1xuICB9XG5cbiAgZnVuY3Rpb24gZnVsbCgpIHtcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICBPYmplY3QudmFsdWVzKGdyaWQpLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGNvbnN0IGNoZWNrID0gT2JqZWN0LnZhbHVlcyhlKS5zb21lKGlzTnVsbE9yU2hpcCk7XG4gICAgICBpZiAoY2hlY2spIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBmdW5jdGlvbiBpc051bGxPclNoaXAoZSkge1xuICAgIGlmICghZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChlLmhhc093blByb3BlcnR5KCdpc1N1bmsnKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmdW5jdGlvbiBnZXRTaGlwcygpIHtcbiAgICByZXR1cm4gc2hpcHM7XG4gIH1cbiAgZnVuY3Rpb24gY2hlY2tEcm9wSG9yKGNvb3JkLCBsZW5ndGgsIGluZGV4KSB7XG4gICAgY29uc3QgYWxwaGEgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBjb25zdCBzaGlwID0gc2hpcHNbaW5kZXhdO1xuICAgIGNvbnN0IFthLCBiXSA9IGNvb3JkO1xuICAgIGNvbnN0IHN0YXJ0ID0gYWxwaGEuaW5kZXhPZihiKTtcbiAgICBjb25zdCBlbmQgPSBhbHBoYS5pbmRleE9mKGIpICsgK2xlbmd0aDtcbiAgICBsZXQgZHJvcCA9IHRydWU7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIGlmICghY2hlY2tWYWxpZChhLCBhbHBoYVtpXSkpIHtcbiAgICAgICAgZHJvcCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYm94ID0gZ3JpZFthXVthbHBoYVtpXV07XG4gICAgICAgIGlmIChib3gpIHtcbiAgICAgICAgICBpZiAoIShib3ggPT09IHNoaXApKSB7XG4gICAgICAgICAgICBkcm9wID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWNoZWNrU3Vycm91bmRpbmcoYSwgYWxwaGFbaV0sIHNoaXApKSB7XG4gICAgICAgIGRyb3AgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRyb3A7XG4gIH1cbiAgZnVuY3Rpb24gY2hlY2tEcm9wVmVyKGNvb3JkLCBsZW5ndGgsIGluZGV4KSB7XG4gICAgbGV0IFthLCBiXSA9IGNvb3JkO1xuICAgIGEgPSArYTtcbiAgICBjb25zdCBzaGlwID0gc2hpcHNbaW5kZXhdO1xuICAgIGxldCBkcm9wID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gYTsgaSA8IGEgKyArbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghY2hlY2tWYWxpZChpLCBiKSkge1xuICAgICAgICBkcm9wID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBib3ggPSBncmlkW2ldW2JdO1xuICAgICAgICBpZiAoYm94KSB7XG4gICAgICAgICAgaWYgKCEoYm94ID09PSBzaGlwKSkge1xuICAgICAgICAgICAgZHJvcCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFjaGVja1N1cnJvdW5kaW5nKGksIGIsIHNoaXApKSB7XG4gICAgICAgIGRyb3AgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRyb3A7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0Q29vcmRzSG9yKGNvb3JkLCBsZW5ndGgpIHtcbiAgICBjb25zdCBhbHBoYSA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICAgIGNvbnN0IFthLCBiXSA9IGNvb3JkO1xuICAgIGNvbnN0IHN0YXJ0ID0gYWxwaGEuaW5kZXhPZihiKTtcbiAgICBjb25zdCBlbmQgPSBhbHBoYS5pbmRleE9mKGIpICsgK2xlbmd0aDtcbiAgICBjb25zdCBjb29yZHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgaWYgKCFjaGVja1ZhbGlkKGEsIGFscGhhW2ldKSkge1xuICAgICAgICByZXR1cm4gY29vcmRzO1xuICAgICAgfVxuICAgICAgY29vcmRzLnB1c2goYCR7YX0sJHthbHBoYVtpXX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvb3JkcztcbiAgfVxuICBmdW5jdGlvbiBnZXRDb29yZHNWZXIoY29vcmQsIGxlbmd0aCkge1xuICAgIGxldCBbYSwgYl0gPSBjb29yZDtcbiAgICBhID0gK2E7XG4gICAgY29uc3QgY29vcmRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IGE7IGkgPCBhICsgK2xlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIWNoZWNrVmFsaWQoaSwgYikpIHtcbiAgICAgICAgcmV0dXJuIGNvb3JkcztcbiAgICAgIH1cbiAgICAgIGNvb3Jkcy5wdXNoKGAke2l9LCR7Yn1gKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvb3JkcztcbiAgfVxuICBmdW5jdGlvbiBhZGRTaGlwKGNvb3JkcywgaSwgaG9yKSB7XG4gICAgY29uc3Qgc2hpcCA9IHNoaXBzW2ldO1xuICAgIHNoaXAuaGVhZCA9IGNvb3Jkc1swXTtcbiAgICBzaGlwLmhvciA9IGhvcjtcbiAgICBjb29yZHMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgY29uc3QgW2EsIGJdID0gZS5zcGxpdCgnLCcpO1xuICAgICAgZ3JpZFthXVtiXSA9IHNoaXA7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlU2hpcChpKSB7XG4gICAgY29uc3Qgc2hpcCA9IHNoaXBzW2ldO1xuICAgIGNvbnN0IGFscGhhYmV0ID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG4gICAgT2JqZWN0LnZhbHVlcyhncmlkKS5mb3JFYWNoKChlLCBpKSA9PiB7XG4gICAgICBPYmplY3QudmFsdWVzKGUpLmZvckVhY2goKHgsIGopID0+IHtcbiAgICAgICAgaWYgKHggPT09IHNoaXApIHtcbiAgICAgICAgICBjb25zdCBhID0gaSArIDE7XG4gICAgICAgICAgY29uc3QgYiA9IGFscGhhYmV0W2pdO1xuICAgICAgICAgIGdyaWRbYV1bYl0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBjaGFuZ2VPcmlIb3IoZSkge1xuICAgIGNvbnN0IHsgaGVhZCB9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICBjb25zdCBbYSwgYl0gPSBoZWFkLnNwbGl0KCcsJyk7XG4gICAgY29uc3QgeyBsZW5ndGggfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgY29uc3QgeyBpIH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuICAgIGNvbnN0IGNoZWNrID0gY2hlY2tEcm9wSG9yKFthLCBiXSwgbGVuZ3RoLCBpKTtcbiAgICBpZiAoY2hlY2spIHtcbiAgICAgIHJlbW92ZVNoaXAoaSk7XG4gICAgICBjb25zdCBjb29yZHMgPSBnZXRDb29yZHNIb3IoW2EsIGJdLCBsZW5ndGgpO1xuICAgICAgYWRkU2hpcChjb29yZHMsIGksIHRydWUpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBjaGFuZ2VPcmlWZXJ0KGUpIHtcbiAgICBjb25zdCB7IGhlYWQgfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgY29uc3QgW2EsIGJdID0gaGVhZC5zcGxpdCgnLCcpO1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuICAgIGNvbnN0IHsgaSB9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICBjb25zdCBjaGVjayA9IGNoZWNrRHJvcFZlcihbYSwgYl0sIGxlbmd0aCwgaSk7XG4gICAgaWYgKGNoZWNrKSB7XG4gICAgICByZW1vdmVTaGlwKGkpO1xuICAgICAgY29uc3QgY29vcmRzID0gZ2V0Q29vcmRzVmVyKFthLCBiXSwgbGVuZ3RoKTtcbiAgICAgIGFkZFNoaXAoY29vcmRzLCBpLCBmYWxzZSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHJlc2V0R3JpZCgpIHtcbiAgICBncmlkID0gY3JlYXRlR2FtZWJvYXJkKCk7XG4gIH1cbiAgZnVuY3Rpb24gY2hlY2tHcmlkKCkge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgT2JqZWN0LnZhbHVlcyhncmlkKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBPYmplY3QudmFsdWVzKGUpLmZvckVhY2goKHgpID0+IHtcbiAgICAgICAgaWYgKHgpIHtcbiAgICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAoY291bnQgPT09IDIwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB7XG4gICAgZ2V0R3JpZCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHNpbmtBbGwsXG4gICAgYWxsU3VuayxcbiAgICBmdWxsLFxuICAgIGhpdEFsbCxcbiAgICBjaGVja0dyaWRWZXJ0LFxuICAgIGNoZWNrR3JpZEhvcmksXG4gICAgZmlsbEdyaWQsXG4gICAgcmFuZG9tUG9wdWxhdGUsXG4gICAgY2hlY2tTdXJyb3VuZGluZyxcbiAgICBnZXRTaGlwcyxcbiAgICBjaGVja0Ryb3BIb3IsXG4gICAgY2hlY2tEcm9wVmVyLFxuICAgIGdldENvb3Jkc0hvcixcbiAgICBnZXRDb29yZHNWZXIsXG4gICAgYWRkU2hpcCxcbiAgICByZW1vdmVTaGlwLFxuICAgIGNoYW5nZU9yaVZlcnQsXG4gICAgY2hhbmdlT3JpSG9yLFxuICAgIHJlc2V0R3JpZCxcbiAgICBjaGVja0dyaWQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmQ7XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGRpc3BsYXlTdGF0ZSwgZW5kR2FtZSB9IGZyb20gJy4vZG9tJztcbmltcG9ydCBwbGF5ZXJGYWN0b3J5IGZyb20gJy4vcGxheWVyJztcbmltcG9ydCBjb21wdXRlckZhY3RvcnkgZnJvbSAnLi9jb21wdXRlcic7XG5cbmNvbnN0IGdhbWUgPSAoKCkgPT4ge1xuICBjb25zdCBwbGF5ZXIgPSBwbGF5ZXJGYWN0b3J5KCk7XG4gIGNvbnN0IHBCb2FyZCA9IHBsYXllci5nZXRCb2FyZCgpO1xuICBjb25zdCBzaGlwcyA9IHBCb2FyZC5nZXRTaGlwcygpO1xuICBjb25zdCBjb21wdXRlciA9IGNvbXB1dGVyRmFjdG9yeSgpO1xuICBjb25zdCBjQm9hcmQgPSBjb21wdXRlci5nZXRCb2FyZCgpO1xuICBkaXNwbGF5U3RhdGUuZGlzcGxheVNoaXBCb3goc2hpcHMpO1xuICBkaXNwbGF5U3RhdGUuZGlzcGxheShwQm9hcmQpO1xuICBmdW5jdGlvbiBnYW1lTG9vcChjb21wID0gY29tcHV0ZXIpIHtcbiAgICBjb21wLmF0dGFjayhwQm9hcmQpO1xuICAgIGRpc3BsYXlTdGF0ZS5kaXNwbGF5SGl0c0JvdGgocEJvYXJkLmdldEdyaWQoKSwgY0JvYXJkLmdldEdyaWQoKSk7XG4gICAgaWYgKGNoZWNrRW5kKCkpIHtcbiAgICAgIGVuZEdhbWUoJ2NvbXB1dGVyJyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHJlY2VpdmVQbGF5ZXJBdHRhY2soY29vcmQpIHtcbiAgICBjb25zdCBbYSwgYl0gPSBjb29yZDtcbiAgICBjb25zdCBoaXQgPSBjQm9hcmQucmVjZWl2ZUF0dGFjayhhLCBiKTtcbiAgICBkaXNwbGF5U3RhdGUuZGlzcGxheUhpdHNCb3RoKHBCb2FyZC5nZXRHcmlkKCksIGNCb2FyZC5nZXRHcmlkKCkpO1xuICAgIGlmIChjaGVja0VuZCgpKSB7XG4gICAgICBlbmRHYW1lKCdwbGF5ZXInKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGhpdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBnYW1lTG9vcCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tFbmQoKSB7XG4gICAgcmV0dXJuIChwQm9hcmQuYWxsU3VuaygpIHx8IGNCb2FyZC5hbGxTdW5rKCkpO1xuICB9XG4gIGZ1bmN0aW9uIGdldFBCb2FyZCgpIHtcbiAgICByZXR1cm4gcEJvYXJkO1xuICB9XG4gIHJldHVybiB7IHJlY2VpdmVQbGF5ZXJBdHRhY2ssIGdhbWVMb29wLCBnZXRQQm9hcmQgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWU7XG4iLCJpbXBvcnQgZ2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcblxuY29uc3QgcGxheWVyRmFjdG9yeSA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBnYW1lYm9hcmQoKTtcbiAgYm9hcmQucmFuZG9tUG9wdWxhdGUoKTtcbiAgZnVuY3Rpb24gZ2V0Qm9hcmQoKSB7XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9XG4gIHJldHVybiB7IGdldEJvYXJkIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXJGYWN0b3J5O1xuIiwiY29uc3Qgc2hpcCA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGNyZWF0ZVNoaXAobGVuZ3RoLCBpKSB7XG4gICAgbGV0IGhpdHMgPSAwO1xuICAgIGNvbnN0IGhpdCA9IChuKSA9PiB7XG4gICAgICBpZiAoaGl0cyA8IGxlbmd0aCkge1xuICAgICAgICBoaXRzICs9IDE7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgaWYgKGhpdHMgPT0gbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIGxlbmd0aCxcbiAgICAgIGksXG4gICAgICBoaXQsXG4gICAgICBpc1N1bmssXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycihsZW5ndGgpIHtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIucHVzaChudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIHJldHVybiB7IGNyZWF0ZVNoaXAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=