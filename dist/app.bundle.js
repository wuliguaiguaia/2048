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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js?!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js??ref--4-2!./src/main.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  height: 100vh;\n  overflow: hidden;\n  background: url(" + escape(__webpack_require__(/*! ./bg.jpg */ "./src/bg.jpg")) + ") no-repeat;\n  background-size: 120%; }\n  body .wrapper {\n    width: 325px;\n    height: 100%;\n    position: relative;\n    margin: 0 auto; }\n\n@media screen and (max-width: 400px) {\n  body {\n    background-image: url(" + escape(__webpack_require__(/*! ./1.jpg */ "./src/1.jpg")) + ");\n    background-size: cover; } }\n\nheader {\n  display: flex;\n  margin-top: 50px;\n  justify-content: space-between;\n  align-items: flex-start; }\n  header h1 {\n    font-size: 50px;\n    color: #9d8177;\n    margin: 0; }\n  header .score {\n    width: 70px;\n    float: right;\n    background-color: #9d8177;\n    opacity: 0.7;\n    color: #fff;\n    text-align: center;\n    box-shadow: 1px 1px 3px 1px #cac2c2;\n    padding: 2px 4px;\n    font-size: 10px;\n    margin-left: 5px; }\n    header .score span {\n      text-align: center;\n      font-size: 15px;\n      font-weight: 600;\n      display: block;\n      margin-top: 1px; }\n\n#grid-container {\n  position: relative;\n  margin: 0 auto;\n  width: 100%;\n  border-radius: 5px;\n  background-color: #9d8177;\n  margin-top: 35px;\n  border: 6px solid #9d8177; }\n  #grid-container .grid-cell {\n    background-color: #f3ead4;\n    border-radius: 5px;\n    position: absolute; }\n  #grid-container .number-cell {\n    border-radius: 5px;\n    position: absolute;\n    top: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 14px;\n    font-weight: bold; }\n  #grid-container .number-cell-warn {\n    animation: warn .3s ease-out; }\n\n@keyframes warn {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n\n.score-animation {\n  animation: num .3s ease-out forwards; }\n\n@keyframes num {\n  0% {\n    color: pink;\n    transform: scale(0); }\n  100% {\n    color: #fff;\n    transform: scale(1); } }\n\n#over {\n  position: fixed;\n  padding: 16px 10px;\n  color: #fff;\n  z-index: 999;\n  font-weight: bold;\n  background-color: #d2866b;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 46%;\n  font-size: 23px;\n  display: none; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


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

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/1.jpg":
/*!*******************!*\
  !*** ./src/1.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0649c32e6fb8d3af04b82b1173eaf842.jpg";

/***/ }),

/***/ "./src/bg.jpg":
/*!********************!*\
  !*** ./src/bg.jpg ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ac5488695e12eb07b8f762428b104656.jpg";

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return newgame; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var newgame =
/*#__PURE__*/
function () {
  function newgame() {
    _classCallCheck(this, newgame);

    this.W = document.querySelector(".wrapper").clinetwidth;
    this.parent = document.querySelector("#grid-container");
    this.boxW = this.parent.clientWidth;
    this.scorenum = document.getElementById("num");
    this.over = document.querySelector("#over");
    this.result = document.querySelector("#resultnum");
    this.bestDOM = document.querySelector("#bestNum");
    this.spaceBoard = []; //二维数组，保存 空格子 的 索引

    this.board = []; //二维数组 保存 所有 格子的数值

    this.bestScore = 0;
    this.score = 0;
    this.conflictArr = []; //判断是否叠加

    this.gridCell = document.querySelectorAll(".grid-cell");
    this.cellW = this.boxW * 0.21;
    this.diff = 0.0399 * this.boxW;
    this.init();
  }

  _createClass(newgame, [{
    key: "init",
    value: function init() {
      this.parent.style.height = this.boxW + 'px';

      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          var cell = document.querySelector("#grid-cell-".concat(i, "-").concat(j));
          cell.style.cssText = "\n                    width: ".concat(this.cellW, "px;\n                    height: ").concat(this.cellW, "px;\n                    top: ").concat(this.getPosition(i, j).top, "px;\n                    left: ").concat(this.getPosition(i, j).left, "px\n                ");
        }
      }

      this.score = 0;
      this.bestDOM.innerText = localStorage.best !== undefined ? localStorage.best : 0; // 清空number

      this.removeNumberCell(); // 1.为减少DOM操作，将 append 分离出来

      this.appendNumberCell(); // 2.初始化 board conflictArr，默认为0

      for (var _i = 0; _i < 4; _i++) {
        this.board[_i] = [];
        this.conflictArr[_i] = [];

        for (var _j = 0; _j < 4; _j++) {
          this.board[_i][_j] = 0;
          this.conflictArr[_i][_j] = false;
        }
      } // 3. board 里先添加两个, 此时动画 需要同步进行，所以必须分离出来 为每个新增加的都添加动画


      this.generatorOneNumber();
      this.generatorOneNumber(); // 4.事件触发 

      this.register();
      return true;
    } // 成绩动画

  }, {
    key: "updateScore",
    value: function updateScore() {
      var _this = this;

      this.scorenum.addEventListener('myEvent', function () {
        _this.scorenum.classList.add('score-animation');

        _this.scorenum.innerText = _this.score;
        setTimeout(function () {
          _this.scorenum.classList.remove('score-animation');
        }, 300);
      }, false);
      var event = document.createEvent("CustomEvent");
      event.initCustomEvent("myEvent", false, true, "");
      this.scorenum.dispatchEvent(event);
      setTimeout(function () {
        event = null;
      }, 300);
    }
  }, {
    key: "appendNumberCell",
    value: function appendNumberCell() {
      var numcell = null;

      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          numcell = document.createElement("div");
          numcell.id = "number-cell-".concat(i, "-").concat(j);
          numcell.classList.add("number-cell");
          this.parent.appendChild(numcell);
        }
      }
    }
  }, {
    key: "removeNumberCell",
    value: function removeNumberCell() {
      var numberCell = document.querySelectorAll('.number-cell');
      var len = numberCell.length;

      if (document.querySelectorAll('.number-cell').length > 0) {
        for (var i = 0; i < len; i++) {
          this.parent.removeChild(numberCell[i]);
        }
      }
    }
  }, {
    key: "updateBoardView",
    value: function updateBoardView() {
      // 对board 循环，根据board值为其 设置样式
      var cell = null;

      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          cell = document.querySelector("#number-cell-".concat(i, "-").concat(j));
          cell.classList.remove("number-cell-warn");

          if (this.board[i][j] == 0) {
            cell.innerText = '';
            cell.style.cssText = "width:0;height:0;";
          } else {
            cell.innerText = this.private2048(this.board[i][j]);
            console.log(this.private2048(this.board[i][j]));
            cell.style.cssText = "width:".concat(this.cellW, "px;\n                                            height:").concat(this.cellW, "px;\n                                            top:").concat(this.getPosition(i, j).top, "px;\n                                            left:").concat(this.getPosition(i, j).left, "px;\n                                            background-color:").concat(this.getBgcolor(this.board[i][j]), ";\n                                            color:").concat(this.getColor(this.board[i][j]));
          }

          this.conflictArr[i][j] = false;
        }
      }
    }
  }, {
    key: "generatorOneNumber",
    value: function generatorOneNumber() {
      this.spaceBoard = [];

      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          if (this.board[i][j] == 0) {
            this.spaceBoard.push([i, j]);
          }
        }
      }

      var len = this.spaceBoard.length; // console.log('空格子数量',len)

      var random = [];
      if (len == 0) return;
      random = this.spaceBoard[~~(Math.random() * len)];
      this.randomX = random[0];
      this.randomY = random[1]; // 随机产生数字2/4;

      this.randomNum = Math.random() > 0.5 ? 2 : 4; // 随机位置 产生 随机数字

      this.board[this.randomX][this.randomY] = this.randomNum;
      this.productWithAnimation(this.randomX, this.randomY, this.randomNum);
      this.spaceBoard = []; //每次必须提前清空，之后再次清空的 要么局部变量，要么封装成其他方法 比如 nospace()
    }
  }, {
    key: "nospace",
    value: function nospace() {
      // 分离出来
      // 1. 添加新的格子是需要判断
      // 2. 游戏结束时需要 判断
      for (var i = 0; i < 16; i++) {
        // console.log(~~(i/4),~~(i%4));
        if (this.board[~~(i / 4)][~~(i % 4)] == 0) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "register",
    value: function register() {
      var _this2 = this;

      // document.addEventListener('keydown',(e)=>{
      document.onkeydown = function (e) {
        var key = e.key.toLocaleLowerCase();

        switch (key) {
          case "arrowleft":
            //a. 发生移动才能进行 generate 和 update
            // 1. 设置this.flag
            // 2. 或者 移动函数里面返回true,只有产生移动才重置  
            //         函数返回 if(this.moveLeft()) 即执行又返回
            //b. 移动会产生动画 需要延迟 改变board 需要时间 再延迟
            _this2.moveLeftEvent(e);

            break;

          case "arrowright":
            _this2.moveRightEvent(e);

            break;

          case "arrowup":
            _this2.moveUpEvent(e);

            break;

          case "arrowdown":
            _this2.moveDownEvent(e);

            break;
        } // })

      };

      var _ref = [],
          e = _ref[0],
          preX = _ref[1],
          preY = _ref[2],
          nextX = _ref[3],
          nextY = _ref[4],
          deltX = _ref[5],
          deltY = _ref[6];
      document.addEventListener('touchstart', function (ev) {
        e = ev.touches[0];
        preX = e.pageX;
        preY = e.pageY;
      }, false);
      document.addEventListener('touchend', function (ev) {
        e = ev.changedTouches[0];
        nextX = e.pageX;
        nextY = e.pageY;
        deltX = nextX - preX;
        deltY = nextY - preY;

        if (Math.abs(deltX) > Math.abs(deltY)) {
          if (deltX > 0) {
            _this2.moveRightEvent(ev);
          }

          if (deltX < 0) {
            _this2.moveLeftEvent(ev);
          }
        }

        if (Math.abs(deltY) > Math.abs(deltX)) {
          if (deltY > 0) {
            _this2.moveDownEvent(ev);
          }

          if (deltY < 0) {
            _this2.moveUpEvent(ev);
          }
        }
      }, false);
      document.addEventListener("touchmove", function (e) {
        e.preventDefault(); //阻止页面下拉刷新功能neng
      });
    }
  }, {
    key: "moveRightEvent",
    value: function moveRightEvent(e) {
      var _this3 = this;

      e.preventDefault();

      if (this.moveRight()) {
        setTimeout(function () {
          _this3.updateBoardView();

          _this3.generatorOneNumber();
        }, 300);
        setTimeout(function () {}, 350);
        setTimeout(function () {
          _this3.isgameover();
        }, 650);
      }
    }
  }, {
    key: "moveLeftEvent",
    value: function moveLeftEvent(e) {
      var _this4 = this;

      e.preventDefault();

      if (this.moveLeft()) {
        setTimeout(function () {
          _this4.updateBoardView();

          _this4.generatorOneNumber();
        }, 300);
        setTimeout(function () {}, 350);
        setTimeout(function () {
          _this4.isgameover();
        }, 650);
      }
    }
  }, {
    key: "moveUpEvent",
    value: function moveUpEvent(e) {
      var _this5 = this;

      e.preventDefault();

      if (this.moveUp()) {
        setTimeout(function () {
          _this5.updateBoardView();

          _this5.generatorOneNumber();
        }, 300);
        setTimeout(function () {
          _this5.isgameover();
        }, 350);
        setTimeout(function () {
          _this5.isgameover();
        }, 650);
      }
    }
  }, {
    key: "moveDownEvent",
    value: function moveDownEvent(e) {
      var _this6 = this;

      e.preventDefault();

      if (this.moveDown()) {
        setTimeout(function () {
          _this6.updateBoardView();

          _this6.generatorOneNumber();
        }, 300);
        setTimeout(function () {}, 350);
        setTimeout(function () {
          _this6.isgameover();
        }, 360);
      }
    }
  }, {
    key: "isgameover",
    value: function isgameover() {
      if (!this.ismove() && !this.isnospace()) {
        this.bestScore = localStorage.best !== undefined ? localStorage.best : this.score;
        console.log(this.bestScore);
        this.bestDOM.innerText = this.score;
        this.over.style.display = "block";
        localStorage.best = Math.max(this.score, this.bestScore);
        return;
      }
    }
  }, {
    key: "isnospace",
    value: function isnospace() {
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          if (this.board[i][j] == 0) {
            return true;
          }
        }
      }

      return false;
    }
  }, {
    key: "ismove",
    value: function ismove() {
      if (this.canmoveUp() || this.canmoveLeft() || this.canmoveRight() || this.canmoveDown()) {
        return true;
      }

      return false;
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      if (!this.canmoveDown()) {
        return false;
      }

      for (var j = 0; j < 4; j++) {
        for (var i = 2; i >= 0; i--) {
          if (this.board[i][j] != 0) {
            for (var k = 3; k > i; k--) {
              if (this.board[k][j] == 0 && this.noblockVertical(j, k, i, this.board)) {
                this.showMoveVerticalAnimation(i, j, k, j);
                this.board[k][j] = this.board[i][j];
                this.board[i][j] = 0;
                break;
              } else if (this.board[k][j] == this.board[i][j] && this.noblockVertical(j, k, i, this.board) && !this.conflictArr[k][j]) {
                this.showMoveVerticalAnimation(i, j, k, j);
                this.board[k][j] += this.board[i][j];
                this.board[i][j] = 0;
                this.score += this.board[k][j];
                this.conflictArr[k][j] = true;
                this.updateScore();
                break;
              }
            }
          }
        }
      }

      return true;
    }
  }, {
    key: "canmoveDown",
    value: function canmoveDown() {
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 4; j++) {
          if (this.board[i][j] != 0) {
            if (this.board[i + 1][j] == 0 || this.board[i + 1][j] == this.board[i][j]) {
              return true;
            }
          }
        }
      }

      return false;
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      if (!this.canmoveRight()) {
        return false;
      }

      for (var i = 0; i < 4; i++) {
        for (var j = 2; j >= 0; j--) {
          // must begin right side
          if (this.board[i][j] != 0) {
            for (var k = 3; k > j; k--) {
              // judge begin right side
              if (this.board[i][k] == 0 && this.noblockHorizonal(i, k, j, this.board)) {
                this.showMoveHorizonalAnimation(i, j, i, k);
                this.board[i][k] = this.board[i][j];
                this.board[i][j] = 0;
                break; //表示已经移动过，不需要在循环k了
              } else if (this.board[i][k] == this.board[i][j] && this.noblockHorizonal(i, k, j, this.board) && !this.conflictArr[i][k]) {
                this.showMoveHorizonalAnimation(i, j, i, k);
                this.board[i][k] += this.board[i][j];
                this.board[i][j] = 0;
                this.score += this.board[i][k];
                this.conflictArr[k][j] = true;
                this.updateScore();
                break;
              }
            }
          }
        }
      }

      return true;
    }
  }, {
    key: "canmoveRight",
    value: function canmoveRight() {
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++) {
          if (this.board[i][j] != 0) {
            if (this.board[i][j + 1] == 0 || this.board[i][j + 1] == this.board[i][j]) {
              return true;
            }
          }
        }
      }

      return false;
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      // 是否可以向左移动
      if (!this.canmoveLeft()) {
        return;
      } // console.log("canmove left")


      for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
          if (this.board[i][j] != 0) {
            for (var k = 0; k < j; k++) {
              //从左边遍历 从小开始
              if (this.board[i][k] == 0 && this.noblockHorizonal(i, j, k, this.board)) {
                // 落脚位置。。左边全为空 无障碍
                this.showMoveHorizonalAnimation(i, j, i, k);
                this.board[i][k] = this.board[i][j];
                this.board[i][j] = 0; // continue;

                break;
              } else if (this.board[i][k] == this.board[i][j] && this.noblockHorizonal(i, j, k, this.board) && !this.conflictArr[i][k]) {
                //可叠加 且中间无障碍
                this.showMoveHorizonalAnimation(i, j, i, k);
                this.board[i][k] += this.board[i][j];
                this.board[i][j] = 0;
                this.score += this.board[i][k];
                this.conflictArr[k][j] = true;
                this.updateScore(); // continue;

                break;
              }
            }
          }
        }
      }

      return true;
    }
  }, {
    key: "canmoveLeft",
    value: function canmoveLeft() {
      for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
          if (this.board[i][j] != 0) {
            if (this.board[i][j - 1] == 0 || this.board[i][j - 1] == this.board[i][j]) {
              return true;
            }
          }
        }
      }

      return false; //默认不可移动
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      if (!this.canmoveUp()) {
        return false;
      } // console.log("canmouve up");


      for (var j = 0; j < 4; j++) {
        for (var i = 1; i < 4; i++) {
          if (this.board[i][j] != 0) {
            for (var k = 0; k < i; k++) {
              // 0 1 2
              if (this.board[k][j] == 0 && this.noblockVertical(j, i, k, this.board)) {
                this.showMoveVerticalAnimation(i, j, k, j);
                this.board[k][j] = this.board[i][j];
                this.board[i][j] = 0;
                break;
              } else if (this.board[k][j] == this.board[i][j] && this.noblockVertical(j, i, k, this.board) && !this.conflictArr[k][j]) {
                this.showMoveVerticalAnimation(i, j, k, j);
                this.board[k][j] += this.board[i][j];
                this.board[i][j] = 0;
                this.score += this.board[k][j];
                this.conflictArr[k][j] = true;
                this.updateScore();
                break; //必须写在里面 只有两种情况 非此即彼
              }
            }
          }
        }
      }

      return true;
    }
  }, {
    key: "canmoveUp",
    value: function canmoveUp() {
      for (var i = 1; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          if (this.board[i][j] != 0) {
            if (this.board[i][j] == this.board[i - 1][j] || this.board[i - 1][j] == 0) {
              return true;
            }
          }
        }
      }

      return false;
    }
  }, {
    key: "noblockHorizonal",
    value: function noblockHorizonal(i, j, k, board) {
      //2,2,0
      for (var c = k + 1; c < j; c++) {
        //2,0 2,1   
        if (board[i][c] != 0) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "noblockVertical",
    value: function noblockVertical(j, i, k, board) {
      for (var c = k + 1; c < i; c++) {
        if (board[c][j] != 0) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "productWithAnimation",
    value: function productWithAnimation(i, j, num) {
      // 找到该格子，为其添加class,动画效果
      var cell = document.querySelector("#number-cell-".concat(i, "-").concat(j));
      cell.classList.add("number-cell-warn"); //

      cell.innerText = this.private2048(num);
      console.log(this.private2048(num));
      cell.style.cssText = "width:".concat(this.cellW + 2, "px;\n                            height:").concat(this.cellW + 2, "px;\n                            top:").concat(this.getPosition(i, j).top, "px;\n                            left:").concat(this.getPosition(i, j).left, "px;\n                            background-color:").concat(this.getBgcolor(this.board[i][j]), ";\n                            color:").concat(this.getColor(this.board[i][j]), ";\n                            ");
    }
  }, {
    key: "showMoveHorizonalAnimation",
    value: function showMoveHorizonalAnimation(fromX, fromY, toX, toY) {
      var cell = document.querySelector("#number-cell-".concat(fromX, "-").concat(fromY));
      cell.style.transition = 'left ease 300ms';
      cell.style.left = "".concat(this.getPosition(toX, toY).left, "px");
    }
  }, {
    key: "showMoveVerticalAnimation",
    value: function showMoveVerticalAnimation(fromX, fromY, toX, toY) {
      var cell = document.querySelector("#number-cell-".concat(fromX, "-").concat(fromY));
      cell.style.transition = "top ease 300ms";
      cell.style.top = "".concat(this.getPosition(toX, toY).top, "px");
    }
  }, {
    key: "getPosition",
    value: function getPosition(x, y) {
      return {
        top: this.diff / 2 + x * (this.diff + this.cellW),
        left: this.diff / 2 + y * (this.diff + this.cellW)
      };
    }
  }, {
    key: "getBgcolor",
    value: function getBgcolor(num) {
      var bg = "";

      switch (num) {
        case 2:
          bg = "#fdffdf";
          break;

        case 4:
          bg = "rgb(255, 217, 161)";
          break;

        case 8:
          bg = "rgb(202, 73, 63)";
          break;

        case 16:
          bg = "#fee388";
          break;

        case 32:
          bg = "#e9ae6a";
          break;

        case 64:
          bg = "#d0e9ff";
          break;

        default:
          bg = "transparent";
      }

      return bg;
    }
  }, {
    key: "getColor",
    value: function getColor(num) {
      var color = num == 2 ? 'rgb(147, 125, 125)' : num == 4 ? 'rgb(147, 125, 125)' : "#fff";
      return color;
    }
  }, {
    key: "private2048",
    value: function private2048(num) {
      var text = '';

      switch (num) {
        case 2:
          text = "小白";
          break;

        case 4:
          text = "实习生";
          break;

        case 8:
          text = "程序媛";
          break;

        case 16:
          text = "项目经理";
          break;

        case 32:
          text = "架构师";
          break;

        case 64:
          text = "技术经理";
          break;

        case 128:
          text = "高经经理";
          break;

        case 256:
          text = "技术总监";
          break;

        case 512:
          text = "大大总监";
          break;

        case 1024:
          text = "副总裁";
          break;

        case 2048:
          text = "总裁";
          break;

        case 4096:
          text = "总裁老婆";
          break;

        case 8192:
          text = "总裁岳母";
          break;

        default:
          text = "无法描述";
      }

      return text;
    }
  }]);

  return newgame;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _music_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music.mp3 */ "./src/music.mp3");
/* harmony import */ var _music_mp3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_music_mp3__WEBPACK_IMPORTED_MODULE_2__);




window.onload = function () {
  audio.src = _music_mp3__WEBPACK_IMPORTED_MODULE_2___default.a;
  audio.setAttribute("autoplay", true);
  var url = window.location.href;

  if (url.indexOf('?') > -1) {
    if (url.indexOf('reloaded') < 0) {
      url = url + "&reloaded=true";
      window.location = url;
    }
  }

  new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();

  document.onclick = function () {
    if (over.style.display === "block") {
      new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();
      over.style.display = 'none';
    }
  };
};

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/sass-loader/lib/loader.js??ref--4-2!./main.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js?!./src/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/music.mp3":
/*!***********************!*\
  !*** ./src/music.mp3 ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d34fafb862b66d3c3ad973188ea5e2de.mp3";

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjLzEuanBnIiwid2VicGFjazovLy8uL3NyYy9iZy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnNjc3M/MjNjZiIsIndlYnBhY2s6Ly8vLi9zcmMvbXVzaWMubXAzIl0sIm5hbWVzIjpbIm5ld2dhbWUiLCJXIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xpbmV0d2lkdGgiLCJwYXJlbnQiLCJib3hXIiwiY2xpZW50V2lkdGgiLCJzY29yZW51bSIsImdldEVsZW1lbnRCeUlkIiwib3ZlciIsInJlc3VsdCIsImJlc3RET00iLCJzcGFjZUJvYXJkIiwiYm9hcmQiLCJiZXN0U2NvcmUiLCJzY29yZSIsImNvbmZsaWN0QXJyIiwiZ3JpZENlbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2VsbFciLCJkaWZmIiwiaW5pdCIsInN0eWxlIiwiaGVpZ2h0IiwiaSIsImoiLCJjZWxsIiwiY3NzVGV4dCIsImdldFBvc2l0aW9uIiwidG9wIiwibGVmdCIsImlubmVyVGV4dCIsImxvY2FsU3RvcmFnZSIsImJlc3QiLCJ1bmRlZmluZWQiLCJyZW1vdmVOdW1iZXJDZWxsIiwiYXBwZW5kTnVtYmVyQ2VsbCIsImdlbmVyYXRvck9uZU51bWJlciIsInJlZ2lzdGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJldmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIm51bWNlbGwiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJhcHBlbmRDaGlsZCIsIm51bWJlckNlbGwiLCJsZW4iLCJsZW5ndGgiLCJyZW1vdmVDaGlsZCIsInByaXZhdGUyMDQ4IiwiY29uc29sZSIsImxvZyIsImdldEJnY29sb3IiLCJnZXRDb2xvciIsInB1c2giLCJyYW5kb20iLCJNYXRoIiwicmFuZG9tWCIsInJhbmRvbVkiLCJyYW5kb21OdW0iLCJwcm9kdWN0V2l0aEFuaW1hdGlvbiIsIm9ua2V5ZG93biIsImUiLCJrZXkiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsIm1vdmVMZWZ0RXZlbnQiLCJtb3ZlUmlnaHRFdmVudCIsIm1vdmVVcEV2ZW50IiwibW92ZURvd25FdmVudCIsInByZVgiLCJwcmVZIiwibmV4dFgiLCJuZXh0WSIsImRlbHRYIiwiZGVsdFkiLCJldiIsInRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwiY2hhbmdlZFRvdWNoZXMiLCJhYnMiLCJwcmV2ZW50RGVmYXVsdCIsIm1vdmVSaWdodCIsInVwZGF0ZUJvYXJkVmlldyIsImlzZ2FtZW92ZXIiLCJtb3ZlTGVmdCIsIm1vdmVVcCIsIm1vdmVEb3duIiwiaXNtb3ZlIiwiaXNub3NwYWNlIiwiZGlzcGxheSIsIm1heCIsImNhbm1vdmVVcCIsImNhbm1vdmVMZWZ0IiwiY2FubW92ZVJpZ2h0IiwiY2FubW92ZURvd24iLCJrIiwibm9ibG9ja1ZlcnRpY2FsIiwic2hvd01vdmVWZXJ0aWNhbEFuaW1hdGlvbiIsInVwZGF0ZVNjb3JlIiwibm9ibG9ja0hvcml6b25hbCIsInNob3dNb3ZlSG9yaXpvbmFsQW5pbWF0aW9uIiwiYyIsIm51bSIsImZyb21YIiwiZnJvbVkiLCJ0b1giLCJ0b1kiLCJ0cmFuc2l0aW9uIiwieCIsInkiLCJiZyIsImNvbG9yIiwidGV4dCIsIndpbmRvdyIsIm9ubG9hZCIsImF1ZGlvIiwic3JjIiwic2V0QXR0cmlidXRlIiwidXJsIiwibG9jYXRpb24iLCJocmVmIiwiaW5kZXhPZiIsIkdhbWUiLCJvbmNsaWNrIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsYUFBYSxtQkFBTyxDQUFDLGlHQUE4QztBQUNuRSwyQkFBMkIsbUJBQU8sQ0FBQyw2RkFBNEM7QUFDL0U7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLFNBQVMsY0FBYyxrQkFBa0IscUJBQXFCLCtCQUErQixtQkFBTyxDQUFDLDhCQUFVLGtCQUFrQiwwQkFBMEIsRUFBRSxtQkFBbUIsbUJBQW1CLG1CQUFtQix5QkFBeUIscUJBQXFCLEVBQUUsMENBQTBDLFVBQVUsdUNBQXVDLG1CQUFPLENBQUMsNEJBQVMsUUFBUSw2QkFBNkIsRUFBRSxFQUFFLFlBQVksa0JBQWtCLHFCQUFx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Q0FBQ0MsTUFBUCxHQUFnQixZQUFNO0FBQ3BCQyxPQUFLLENBQUNDLEdBQU4sR0FBWUEsaURBQVo7QUFDQUQsT0FBSyxDQUFDRSxZQUFOLENBQW1CLFVBQW5CLEVBQStCLElBQS9CO0FBQ0EsTUFBSUMsR0FBRyxHQUFHTCxNQUFNLENBQUNNLFFBQVAsQ0FBZ0JDLElBQTFCOztBQUNBLE1BQUlGLEdBQUcsQ0FBQ0csT0FBSixDQUFZLEdBQVosSUFBbUIsQ0FBQyxDQUF4QixFQUEyQjtBQUN6QixRQUFJSCxHQUFHLENBQUNHLE9BQUosQ0FBWSxVQUFaLElBQTBCLENBQTlCLEVBQWlDO0FBQy9CSCxTQUFHLEdBQUdBLEdBQUcsR0FBRyxnQkFBWjtBQUNBTCxZQUFNLENBQUNNLFFBQVAsR0FBa0JELEdBQWxCO0FBQ0Q7QUFDRjs7QUFJRCxNQUFJSSw2Q0FBSjs7QUFDQWpJLFVBQVEsQ0FBQ2tJLE9BQVQsR0FBbUIsWUFBTTtBQUN2QixRQUFJMUgsSUFBSSxDQUFDYSxLQUFMLENBQVcyRSxPQUFYLEtBQXVCLE9BQTNCLEVBQW9DO0FBQ2xDLFVBQUlpQyw2Q0FBSjtBQUNBekgsVUFBSSxDQUFDYSxLQUFMLENBQVcyRSxPQUFYLEdBQXFCLE1BQXJCO0FBQ0Q7QUFDRixHQUxEO0FBTUQsQ0FwQkQsQzs7Ozs7Ozs7Ozs7O0FDRkEsY0FBYyxtQkFBTyxDQUFDLGlNQUF1Rzs7QUFFN0gsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLG1HQUFnRDs7QUFFckU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNuQmYsaUJBQWlCLHFCQUF1QiwwQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgZXNjYXBlID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2JnLmpwZ1wiKSkgKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMjAlOyB9XFxuICBib2R5IC53cmFwcGVyIHtcXG4gICAgd2lkdGg6IDMyNXB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwIGF1dG87IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgYm9keSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi8xLmpwZ1wiKSkgKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH0gfVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XFxuICBoZWFkZXIgaDEge1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGNvbG9yOiAjOWQ4MTc3O1xcbiAgICBtYXJnaW46IDA7IH1cXG4gIGhlYWRlciAuc2NvcmUge1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWQ4MTc3O1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCAjY2FjMmMyO1xcbiAgICBwYWRkaW5nOiAycHggNHB4O1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7IH1cXG4gICAgaGVhZGVyIC5zY29yZSBzcGFuIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgbWFyZ2luLXRvcDogMXB4OyB9XFxuXFxuI2dyaWQtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWQ4MTc3O1xcbiAgbWFyZ2luLXRvcDogMzVweDtcXG4gIGJvcmRlcjogNnB4IHNvbGlkICM5ZDgxNzc7IH1cXG4gICNncmlkLWNvbnRhaW5lciAuZ3JpZC1jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZWFkNDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cXG4gICNncmlkLWNvbnRhaW5lciAubnVtYmVyLWNlbGwge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgI2dyaWQtY29udGFpbmVyIC5udW1iZXItY2VsbC13YXJuIHtcXG4gICAgYW5pbWF0aW9uOiB3YXJuIC4zcyBlYXNlLW91dDsgfVxcblxcbkBrZXlmcmFtZXMgd2FybiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cXG5cXG4uc2NvcmUtYW5pbWF0aW9uIHtcXG4gIGFuaW1hdGlvbjogbnVtIC4zcyBlYXNlLW91dCBmb3J3YXJkczsgfVxcblxcbkBrZXlmcmFtZXMgbnVtIHtcXG4gIDAlIHtcXG4gICAgY29sb3I6IHBpbms7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7IH1cXG4gIDEwMCUge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XFxuXFxuI292ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcGFkZGluZzogMTZweCAxMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB6LWluZGV4OiA5OTk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMjg2NmI7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB0b3A6IDQ2JTtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZSh1cmwpIHtcbiAgICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAgICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgICB9XG4gICAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAgIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gICAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiAnXCInICsgdXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykgKyAnXCInXG4gICAgfVxuXG4gICAgcmV0dXJuIHVybFxufVxuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDY0OWMzMmU2ZmI4ZDNhZjA0YjgyYjExNzNlYWY4NDIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYWM1NDg4Njk1ZTEyZWIwN2I4Zjc2MjQyOGIxMDQ2NTYuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgbmV3Z2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLlcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIikuY2xpbmV0d2lkdGg7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dyaWQtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIHRoaXMuYm94VyA9IHRoaXMucGFyZW50LmNsaWVudFdpZHRoO1xyXG5cclxuICAgICAgICB0aGlzLnNjb3JlbnVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJudW1cIik7XHJcbiAgICAgICAgdGhpcy5vdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVyXCIpO1xyXG4gICAgICAgIHRoaXMucmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXN1bHRudW1cIik7XHJcbiAgICAgICAgdGhpcy5iZXN0RE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiZXN0TnVtXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3BhY2VCb2FyZCA9IFtdOyAvL+S6jOe7tOaVsOe7hO+8jOS/neWtmCDnqbrmoLzlrZAg55qEIOe0ouW8lVxyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBbXTsgICAgICAvL+S6jOe7tOaVsOe7hCDkv53lrZgg5omA5pyJIOagvOWtkOeahOaVsOWAvFxyXG4gICAgICAgIHRoaXMuYmVzdFNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmNvbmZsaWN0QXJyID0gW107IC8v5Yik5pat5piv5ZCm5Y+g5YqgXHJcbiAgICAgICAgdGhpcy5ncmlkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JpZC1jZWxsXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmNlbGxXID0gdGhpcy5ib3hXICogMC4yMTtcclxuICAgICAgICB0aGlzLmRpZmYgPSAwLjAzOTkgKiB0aGlzLmJveFc7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBhcmVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmJveFcgKyAncHgnO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZ3JpZC1jZWxsLSR7aX0tJHtqfWApO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAke3RoaXMuY2VsbFd9cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAke3RoaXMuY2VsbFd9cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAke3RoaXMuZ2V0UG9zaXRpb24oaSwgaikudG9wfXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6ICR7dGhpcy5nZXRQb3NpdGlvbihpLCBqKS5sZWZ0fXB4XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5iZXN0RE9NLmlubmVyVGV4dCA9IGxvY2FsU3RvcmFnZS5iZXN0ICE9PSB1bmRlZmluZWQgPyBsb2NhbFN0b3JhZ2UuYmVzdCA6IDBcclxuICAgICAgICAvLyDmuIXnqbpudW1iZXJcclxuICAgICAgICB0aGlzLnJlbW92ZU51bWJlckNlbGwoKTtcclxuXHJcbiAgICAgICAgLy8gMS7kuLrlh4/lsJFET03mk43kvZzvvIzlsIYgYXBwZW5kIOWIhuemu+WHuuadpVxyXG4gICAgICAgIHRoaXMuYXBwZW5kTnVtYmVyQ2VsbCgpO1xyXG5cclxuICAgICAgICAvLyAyLuWIneWni+WMliBib2FyZCBjb25mbGljdEFycu+8jOm7mOiupOS4ujBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkW2ldID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmxpY3RBcnJbaV0gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV1bal0gPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25mbGljdEFycltpXVtqXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAzLiBib2FyZCDph4zlhYjmt7vliqDkuKTkuKosIOatpOaXtuWKqOeUuyDpnIDopoHlkIzmraXov5vooYzvvIzmiYDku6Xlv4XpobvliIbnprvlh7rmnaUg5Li65q+P5Liq5paw5aKe5Yqg55qE6YO95re75Yqg5Yqo55S7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0b3JPbmVOdW1iZXIoKTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRvck9uZU51bWJlcigpO1xyXG5cclxuICAgICAgICAvLyA0LuS6i+S7tuinpuWPkSBcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKCk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9XHJcbiAgICAvLyDmiJDnu6nliqjnlLtcclxuICAgIHVwZGF0ZVNjb3JlKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmVudW0uYWRkRXZlbnRMaXN0ZW5lcignbXlFdmVudCcsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZW51bS5jbGFzc0xpc3QuYWRkKCdzY29yZS1hbmltYXRpb24nKVxyXG4gICAgICAgICAgICB0aGlzLnNjb3JlbnVtLmlubmVyVGV4dCA9IHRoaXMuc2NvcmU7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZW51bS5jbGFzc0xpc3QucmVtb3ZlKCdzY29yZS1hbmltYXRpb24nKVxyXG4gICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgbGV0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtcclxuICAgICAgICBldmVudC5pbml0Q3VzdG9tRXZlbnQoXCJteUV2ZW50XCIsIGZhbHNlLCB0cnVlLCBcIlwiKTtcclxuICAgICAgICB0aGlzLnNjb3JlbnVtLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudCA9IG51bGw7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kTnVtYmVyQ2VsbCgpIHtcclxuICAgICAgICBsZXQgbnVtY2VsbCA9IG51bGw7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIG51bWNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgbnVtY2VsbC5pZCA9IGBudW1iZXItY2VsbC0ke2l9LSR7an1gO1xyXG4gICAgICAgICAgICAgICAgbnVtY2VsbC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWNlbGxcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZChudW1jZWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZU51bWJlckNlbGwoKSB7XHJcbiAgICAgICAgbGV0IG51bWJlckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubnVtYmVyLWNlbGwnKTtcclxuICAgICAgICBsZXQgbGVuID0gbnVtYmVyQ2VsbC5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5udW1iZXItY2VsbCcpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQobnVtYmVyQ2VsbFtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGVCb2FyZFZpZXcoKSB7XHJcbiAgICAgICAgLy8g5a+5Ym9hcmQg5b6q546v77yM5qC55o2uYm9hcmTlgLzkuLrlhbYg6K6+572u5qC35byPXHJcbiAgICAgICAgbGV0IGNlbGwgPSBudWxsO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI251bWJlci1jZWxsLSR7aX0tJHtqfWApO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwibnVtYmVyLWNlbGwtd2FyblwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtqXSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5pbm5lclRleHQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmNzc1RleHQgPSBcIndpZHRoOjA7aGVpZ2h0OjA7XCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJUZXh0ID0gdGhpcy5wcml2YXRlMjA0OCh0aGlzLmJvYXJkW2ldW2pdKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByaXZhdGUyMDQ4KHRoaXMuYm9hcmRbaV1bal0pKVxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDoke3RoaXMuY2VsbFd9cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiR7dGhpcy5jZWxsV31weDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6JHt0aGlzLmdldFBvc2l0aW9uKGksaikudG9wfXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6JHt0aGlzLmdldFBvc2l0aW9uKGksaikubGVmdH1weDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiR7dGhpcy5nZXRCZ2NvbG9yKHRoaXMuYm9hcmRbaV1bal0pfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjoke3RoaXMuZ2V0Q29sb3IodGhpcy5ib2FyZFtpXVtqXSl9YDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZsaWN0QXJyW2ldW2pdID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdG9yT25lTnVtYmVyKCkge1xyXG4gICAgICAgIHRoaXMuc3BhY2VCb2FyZCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtqXSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGFjZUJvYXJkLnB1c2goW2ksIGpdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbGVuID0gdGhpcy5zcGFjZUJvYXJkLmxlbmd0aDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn56m65qC85a2Q5pWw6YePJyxsZW4pXHJcbiAgICAgICAgbGV0IHJhbmRvbSA9IFtdO1xyXG4gICAgICAgIGlmIChsZW4gPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIHJhbmRvbSA9IHRoaXMuc3BhY2VCb2FyZFt+fihNYXRoLnJhbmRvbSgpICogbGVuKV07XHJcbiAgICAgICAgdGhpcy5yYW5kb21YID0gcmFuZG9tWzBdO1xyXG4gICAgICAgIHRoaXMucmFuZG9tWSA9IHJhbmRvbVsxXTtcclxuXHJcbiAgICAgICAgLy8g6ZqP5py65Lqn55Sf5pWw5a2XMi80O1xyXG4gICAgICAgIHRoaXMucmFuZG9tTnVtID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IDIgOiA0O1xyXG4gICAgICAgIC8vIOmaj+acuuS9jee9riDkuqfnlJ8g6ZqP5py65pWw5a2XXHJcbiAgICAgICAgdGhpcy5ib2FyZFt0aGlzLnJhbmRvbVhdW3RoaXMucmFuZG9tWV0gPSB0aGlzLnJhbmRvbU51bTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0V2l0aEFuaW1hdGlvbih0aGlzLnJhbmRvbVgsIHRoaXMucmFuZG9tWSwgdGhpcy5yYW5kb21OdW0pO1xyXG4gICAgICAgIHRoaXMuc3BhY2VCb2FyZCA9IFtdOyAvL+avj+asoeW/hemhu+aPkOWJjea4heepuu+8jOS5i+WQjuWGjeasoea4heepuueahCDopoHkuYjlsYDpg6jlj5jph4/vvIzopoHkuYjlsIHoo4XmiJDlhbbku5bmlrnms5Ug5q+U5aaCIG5vc3BhY2UoKVxyXG5cclxuICAgIH1cclxuICAgIG5vc3BhY2UoKSB7XHJcbiAgICAgICAgLy8g5YiG56a75Ye65p2lXHJcbiAgICAgICAgLy8gMS4g5re75Yqg5paw55qE5qC85a2Q5piv6ZyA6KaB5Yik5patXHJcbiAgICAgICAgLy8gMi4g5ri45oiP57uT5p2f5pe26ZyA6KaBIOWIpOaWrVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh+fihpLzQpLH5+KGklNCkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFt+fihpIC8gNCldW35+KGkgJSA0KV0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXIoKSB7XHJcbiAgICAgICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsKGUpPT57XHJcbiAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGtleSA9IGUua2V5LnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYXJyb3dsZWZ0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgLy9hLiDlj5HnlJ/np7vliqjmiY3og73ov5vooYwgZ2VuZXJhdGUg5ZKMIHVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDEuIOiuvue9rnRoaXMuZmxhZ1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIDIuIOaIluiAhSDnp7vliqjlh73mlbDph4zpnaLov5Tlm550cnVlLOWPquacieS6p+eUn+enu+WKqOaJjemHjee9riAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICDlh73mlbDov5Tlm54gaWYodGhpcy5tb3ZlTGVmdCgpKSDljbPmiafooYzlj4jov5Tlm55cclxuICAgICAgICAgICAgICAgICAgICAvL2IuIOenu+WKqOS8muS6p+eUn+WKqOeUuyDpnIDopoHlu7bov58g5pS55Y+YYm9hcmQg6ZyA6KaB5pe26Ze0IOWGjeW7tui/n1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUxlZnRFdmVudChlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJhcnJvd3JpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUmlnaHRFdmVudChlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJhcnJvd3VwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVXBFdmVudChlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJhcnJvd2Rvd25cIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEb3duRXZlbnQoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBbZSwgcHJlWCwgcHJlWSwgbmV4dFgsIG5leHRZLCBkZWx0WCwgZGVsdFldID0gW107XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldikgPT4ge1xyXG4gICAgICAgICAgICBlID0gZXYudG91Y2hlc1swXTtcclxuICAgICAgICAgICAgcHJlWCA9IGUucGFnZVg7XHJcbiAgICAgICAgICAgIHByZVkgPSBlLnBhZ2VZO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChldikgPT4ge1xyXG4gICAgICAgICAgICBlID0gZXYuY2hhbmdlZFRvdWNoZXNbMF07XHJcbiAgICAgICAgICAgIG5leHRYID0gZS5wYWdlWDtcclxuICAgICAgICAgICAgbmV4dFkgPSBlLnBhZ2VZO1xyXG4gICAgICAgICAgICBkZWx0WCA9IG5leHRYIC0gcHJlWDtcclxuICAgICAgICAgICAgZGVsdFkgPSBuZXh0WSAtIHByZVk7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkZWx0WCkgPiBNYXRoLmFicyhkZWx0WSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkZWx0WCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVSaWdodEV2ZW50KGV2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkZWx0WCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVMZWZ0RXZlbnQoZXYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkZWx0WSkgPiBNYXRoLmFicyhkZWx0WCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkZWx0WSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEb3duRXZlbnQoZXYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRlbHRZIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVVwRXZlbnQoZXYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvL+mYu+atoumhtemdouS4i+aLieWIt+aWsOWKn+iDvW5lbmdcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgbW92ZVJpZ2h0RXZlbnQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGhpcy5tb3ZlUmlnaHQoKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQm9hcmRWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRvck9uZU51bWJlcigpO1xyXG4gICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHt9LCAzNTApO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNnYW1lb3ZlcigpO1xyXG4gICAgICAgICAgICB9LCA2NTApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vdmVMZWZ0RXZlbnQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGhpcy5tb3ZlTGVmdCgpKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVCb2FyZFZpZXcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdG9yT25lTnVtYmVyKCk7XHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge30sIDM1MCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc2dhbWVvdmVyKCk7XHJcbiAgICAgICAgICAgIH0sIDY1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW92ZVVwRXZlbnQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGhpcy5tb3ZlVXAoKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQm9hcmRWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRvck9uZU51bWJlcigpO1xyXG4gICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNnYW1lb3ZlcigpO1xyXG4gICAgICAgICAgICB9LCAzNTApO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNnYW1lb3ZlcigpO1xyXG4gICAgICAgICAgICB9LCA2NTApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vdmVEb3duRXZlbnQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGhpcy5tb3ZlRG93bigpKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVCb2FyZFZpZXcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdG9yT25lTnVtYmVyKCk7XHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge30sIDM1MCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc2dhbWVvdmVyKCk7XHJcbiAgICAgICAgICAgIH0sIDM2MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaXNnYW1lb3ZlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNtb3ZlKCkgJiYgIXRoaXMuaXNub3NwYWNlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5iZXN0U2NvcmUgPSBsb2NhbFN0b3JhZ2UuYmVzdCAhPT0gdW5kZWZpbmVkID8gbG9jYWxTdG9yYWdlLmJlc3QgOiB0aGlzLnNjb3JlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJlc3RTY29yZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmJlc3RET00uaW5uZXJUZXh0ID0gdGhpcy5zY29yZTtcclxuICAgICAgICAgICAgdGhpcy5vdmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5iZXN0ID0gTWF0aC5tYXgodGhpcy5zY29yZSwgdGhpcy5iZXN0U2NvcmUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlzbm9zcGFjZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bal0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlzbW92ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jYW5tb3ZlVXAoKSB8fCB0aGlzLmNhbm1vdmVMZWZ0KCkgfHwgdGhpcy5jYW5tb3ZlUmlnaHQoKSB8fCB0aGlzLmNhbm1vdmVEb3duKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIG1vdmVEb3duKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5tb3ZlRG93bigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtqXSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDM7IGsgPiBpOyBrLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRba11bal0gPT0gMCAmJiB0aGlzLm5vYmxvY2tWZXJ0aWNhbChqLCBrLCBpLCB0aGlzLmJvYXJkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TW92ZVZlcnRpY2FsQW5pbWF0aW9uKGksIGosIGssIGopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtrXVtqXSA9IHRoaXMuYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYm9hcmRba11bal0gPT0gdGhpcy5ib2FyZFtpXVtqXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2Jsb2NrVmVydGljYWwoaiwgaywgaSwgdGhpcy5ib2FyZCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLmNvbmZsaWN0QXJyW2tdW2pdKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vdmVWZXJ0aWNhbEFuaW1hdGlvbihpLCBqLCBrLCBqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRba11bal0gKz0gdGhpcy5ib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV1bal0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSB0aGlzLmJvYXJkW2tdW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25mbGljdEFycltrXVtqXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgY2FubW92ZURvd24oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpICsgMV1bal0gPT0gMCB8fCB0aGlzLmJvYXJkW2kgKyAxXVtqXSA9PSB0aGlzLmJvYXJkW2ldW2pdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBtb3ZlUmlnaHQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbm1vdmVSaWdodCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDI7IGogPj0gMDsgai0tKSB7IC8vIG11c3QgYmVnaW4gcmlnaHQgc2lkZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bal0gIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAzOyBrID4gajsgay0tKSB7IC8vIGp1ZGdlIGJlZ2luIHJpZ2h0IHNpZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1ba10gPT0gMCAmJiB0aGlzLm5vYmxvY2tIb3Jpem9uYWwoaSwgaywgaiwgdGhpcy5ib2FyZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vdmVIb3Jpem9uYWxBbmltYXRpb24oaSwgaiwgaSwgayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2ldW2tdID0gdGhpcy5ib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV1bal0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7IC8v6KGo56S65bey57uP56e75Yqo6L+H77yM5LiN6ZyA6KaB5Zyo5b6q546va+S6hlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYm9hcmRbaV1ba10gPT0gdGhpcy5ib2FyZFtpXVtqXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2Jsb2NrSG9yaXpvbmFsKGksIGssIGosIHRoaXMuYm9hcmQpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5jb25mbGljdEFycltpXVtrXSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vdmVIb3Jpem9uYWxBbmltYXRpb24oaSwgaiwgaSwgayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2ldW2tdICs9IHRoaXMuYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gdGhpcy5ib2FyZFtpXVtrXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmxpY3RBcnJba11bal0gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBjYW5tb3ZlUmlnaHQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtqICsgMV0gPT0gMCB8fCB0aGlzLmJvYXJkW2ldW2ogKyAxXSA9PSB0aGlzLmJvYXJkW2ldW2pdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBtb3ZlTGVmdCgpIHtcclxuICAgICAgICAvLyDmmK/lkKblj6/ku6XlkJHlt6bnp7vliqhcclxuICAgICAgICBpZiAoIXRoaXMuY2FubW92ZUxlZnQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2FubW92ZSBsZWZ0XCIpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCA0OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGo7IGsrKykgeyAvL+S7juW3pui+uemBjeWOhiDku47lsI/lvIDlp4tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1ba10gPT0gMCAmJiB0aGlzLm5vYmxvY2tIb3Jpem9uYWwoaSwgaiwgaywgdGhpcy5ib2FyZCkpIHsgLy8g6JC96ISa5L2N572u44CC44CC5bem6L655YWo5Li656m6IOaXoOmanOeijVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TW92ZUhvcml6b25hbEFuaW1hdGlvbihpLCBqLCBpLCBrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV1ba10gPSB0aGlzLmJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYm9hcmRbaV1ba10gPT0gdGhpcy5ib2FyZFtpXVtqXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2Jsb2NrSG9yaXpvbmFsKGksIGosIGssIHRoaXMuYm9hcmQpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5jb25mbGljdEFycltpXVtrXSkgeyAvL+WPr+WPoOWKoCDkuJTkuK3pl7Tml6Dpmpznoo1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNb3ZlSG9yaXpvbmFsQW5pbWF0aW9uKGksIGosIGksIGspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVtrXSArPSB0aGlzLmJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlICs9IHRoaXMuYm9hcmRbaV1ba107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZsaWN0QXJyW2tdW2pdID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBjYW5tb3ZlTGVmdCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bal0gIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2ogLSAxXSA9PSAwIHx8IHRoaXMuYm9hcmRbaV1baiAtIDFdID09IHRoaXMuYm9hcmRbaV1bal0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTsgLy/pu5jorqTkuI3lj6/np7vliqhcclxuICAgIH1cclxuICAgIG1vdmVVcCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FubW92ZVVwKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNhbm1vdXZlIHVwXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtqXSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBpOyBrKyspIHsgLy8gMCAxIDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRba11bal0gPT0gMCAmJiB0aGlzLm5vYmxvY2tWZXJ0aWNhbChqLCBpLCBrLCB0aGlzLmJvYXJkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TW92ZVZlcnRpY2FsQW5pbWF0aW9uKGksIGosIGssIGopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtrXVtqXSA9IHRoaXMuYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJvYXJkW2tdW2pdID09IHRoaXMuYm9hcmRbaV1bal0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9ibG9ja1ZlcnRpY2FsKGosIGksIGssIHRoaXMuYm9hcmQpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5jb25mbGljdEFycltrXVtqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TW92ZVZlcnRpY2FsQW5pbWF0aW9uKGksIGosIGssIGopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtrXVtqXSArPSB0aGlzLmJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlICs9IHRoaXMuYm9hcmRba11bal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZsaWN0QXJyW2tdW2pdID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAvL+W/hemhu+WGmeWcqOmHjOmdoiDlj6rmnInkuKTnp43mg4XlhrUg6Z2e5q2k5Y2z5b28XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBjYW5tb3ZlVXAoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtqXSA9PSB0aGlzLmJvYXJkW2kgLSAxXVtqXSB8fCB0aGlzLmJvYXJkW2kgLSAxXVtqXSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBub2Jsb2NrSG9yaXpvbmFsKGksIGosIGssIGJvYXJkKSB7IC8vMiwyLDBcclxuICAgICAgICBmb3IgKGxldCBjID0gayArIDE7IGMgPCBqOyBjKyspIHsgLy8yLDAgMiwxICAgXHJcbiAgICAgICAgICAgIGlmIChib2FyZFtpXVtjXSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBub2Jsb2NrVmVydGljYWwoaiwgaSwgaywgYm9hcmQpIHtcclxuICAgICAgICBmb3IgKGxldCBjID0gayArIDE7IGMgPCBpOyBjKyspIHtcclxuICAgICAgICAgICAgaWYgKGJvYXJkW2NdW2pdICE9IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHByb2R1Y3RXaXRoQW5pbWF0aW9uKGksIGosIG51bSkge1xyXG4gICAgICAgIC8vIOaJvuWIsOivpeagvOWtkO+8jOS4uuWFtua3u+WKoGNsYXNzLOWKqOeUu+aViOaenFxyXG4gICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI251bWJlci1jZWxsLSR7aX0tJHtqfWApO1xyXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jZWxsLXdhcm5cIik7IC8vXHJcbiAgICAgICAgY2VsbC5pbm5lclRleHQgPSB0aGlzLnByaXZhdGUyMDQ4KG51bSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcml2YXRlMjA0OChudW0pKVxyXG4gICAgICAgIGNlbGwuc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDoke3RoaXMuY2VsbFcrMn1weDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoke3RoaXMuY2VsbFcrMn1weDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDoke3RoaXMuZ2V0UG9zaXRpb24oaSxqKS50b3B9cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiR7dGhpcy5nZXRQb3NpdGlvbihpLGopLmxlZnR9cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiR7dGhpcy5nZXRCZ2NvbG9yKHRoaXMuYm9hcmRbaV1bal0pfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiR7dGhpcy5nZXRDb2xvcih0aGlzLmJvYXJkW2ldW2pdKX07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgfVxyXG4gICAgc2hvd01vdmVIb3Jpem9uYWxBbmltYXRpb24oZnJvbVgsIGZyb21ZLCB0b1gsIHRvWSkge1xyXG4gICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI251bWJlci1jZWxsLSR7ZnJvbVh9LSR7ZnJvbVl9YCk7XHJcbiAgICAgICAgY2VsbC5zdHlsZS50cmFuc2l0aW9uID0gJ2xlZnQgZWFzZSAzMDBtcyc7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5nZXRQb3NpdGlvbih0b1gsdG9ZKS5sZWZ0fXB4YDtcclxuICAgIH1cclxuICAgIHNob3dNb3ZlVmVydGljYWxBbmltYXRpb24oZnJvbVgsIGZyb21ZLCB0b1gsIHRvWSkge1xyXG4gICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI251bWJlci1jZWxsLSR7ZnJvbVh9LSR7ZnJvbVl9YCk7XHJcbiAgICAgICAgY2VsbC5zdHlsZS50cmFuc2l0aW9uID0gYHRvcCBlYXNlIDMwMG1zYDtcclxuICAgICAgICBjZWxsLnN0eWxlLnRvcCA9IGAke3RoaXMuZ2V0UG9zaXRpb24odG9YLHRvWSkudG9wfXB4YDtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRQb3NpdGlvbih4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdG9wOiB0aGlzLmRpZmYgLyAyICsgeCAqICh0aGlzLmRpZmYgKyB0aGlzLmNlbGxXKSxcclxuICAgICAgICAgICAgbGVmdDogdGhpcy5kaWZmIC8gMiArIHkgKiAodGhpcy5kaWZmICsgdGhpcy5jZWxsVyksXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0Qmdjb2xvcihudW0pIHtcclxuICAgICAgICBsZXQgYmcgPSBcIlwiXHJcbiAgICAgICAgc3dpdGNoIChudW0pIHtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgYmcgPSBcIiNmZGZmZGZcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBiZyA9IFwicmdiKDI1NSwgMjE3LCAxNjEpXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgYmcgPSBcInJnYigyMDIsIDczLCA2MylcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE2OlxyXG4gICAgICAgICAgICAgICAgYmcgPSBcIiNmZWUzODhcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDMyOlxyXG4gICAgICAgICAgICAgICAgYmcgPSBcIiNlOWFlNmFcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDY0OlxyXG4gICAgICAgICAgICAgICAgYmcgPSBcIiNkMGU5ZmZcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYmcgPSBcInRyYW5zcGFyZW50XCJcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJnO1xyXG4gICAgfVxyXG4gICAgZ2V0Q29sb3IobnVtKSB7XHJcbiAgICAgICAgbGV0IGNvbG9yID0gbnVtID09IDIgPyAncmdiKDE0NywgMTI1LCAxMjUpJyA6IG51bSA9PSA0ID8gJ3JnYigxNDcsIDEyNSwgMTI1KScgOiBcIiNmZmZcIjtcclxuICAgICAgICByZXR1cm4gY29sb3I7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlMjA0OChudW0pIHtcclxuICAgICAgICBsZXQgdGV4dCA9ICcnO1xyXG4gICAgICAgIHN3aXRjaCAobnVtKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRleHQgPSBcIuWwj+eZvVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHRleHQgPSBcIuWunuS5oOeUn1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgIHRleHQgPSBcIueoi+W6j+Wqm1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTY6XHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gXCLpobnnm67nu4/nkIZcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDMyOlxyXG4gICAgICAgICAgICAgICAgdGV4dCA9IFwi5p625p6E5biIXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA2NDpcclxuICAgICAgICAgICAgICAgIHRleHQgPSBcIuaKgOacr+e7j+eQhlwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTI4OlxyXG4gICAgICAgICAgICAgICAgdGV4dCA9IFwi6auY57uP57uP55CGXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyNTY6XHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gXCLmioDmnK/mgLvnm5FcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDUxMjpcclxuICAgICAgICAgICAgICAgIHRleHQgPSBcIuWkp+Wkp+aAu+ebkVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAyNDpcclxuICAgICAgICAgICAgICAgIHRleHQgPSBcIuWJr+aAu+ijgVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjA0ODpcclxuICAgICAgICAgICAgICAgIHRleHQgPSBcIuaAu+ijgVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDA5NjogXHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gXCLmgLvoo4HogIHlqYZcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDgxOTI6XHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gXCLmgLvoo4HlsrPmr41cIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGV4dCA9IFwi5peg5rOV5o+P6L+wXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIlxyXG5pbXBvcnQgXCIuL21haW4uc2Nzc1wiXHJcbmltcG9ydCBzcmMgZnJvbSAnLi9tdXNpYy5tcDMnXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgYXVkaW8uc3JjID0gc3JjO1xyXG4gIGF1ZGlvLnNldEF0dHJpYnV0ZShcImF1dG9wbGF5XCIsIHRydWUpO1xyXG4gIHZhciB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICBpZiAodXJsLmluZGV4T2YoJz8nKSA+IC0xKSB7XHJcbiAgICBpZiAodXJsLmluZGV4T2YoJ3JlbG9hZGVkJykgPCAwKSB7XHJcbiAgICAgIHVybCA9IHVybCArIFwiJnJlbG9hZGVkPXRydWVcIjtcclxuICAgICAgd2luZG93LmxvY2F0aW9uID0gdXJsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuICBuZXcgR2FtZSgpO1xyXG4gIGRvY3VtZW50Lm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAob3Zlci5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcclxuICAgICAgbmV3IEdhbWUoKTtcclxuICAgICAgb3Zlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9tYWluLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL21haW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL21haW4uc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQzNGZhZmI4NjJiNjZkM2MzYWQ5NzMxODhlYTVlMmRlLm1wM1wiOyJdLCJzb3VyY2VSb290IjoiIn0=