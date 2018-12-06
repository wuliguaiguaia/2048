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
    over.style.display = 'none';
    new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjLzEuanBnIiwid2VicGFjazovLy8uL3NyYy9iZy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnNjc3M/MjNjZiIsIndlYnBhY2s6Ly8vLi9zcmMvbXVzaWMubXAzIl0sIm5hbWVzIjpbIm5ld2dhbWUiLCJXIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xpbmV0d2lkdGgiLCJwYXJlbnQiLCJib3hXIiwiY2xpZW50V2lkdGgiLCJzY29yZW51bSIsImdldEVsZW1lbnRCeUlkIiwib3ZlciIsInJlc3VsdCIsImJlc3RET00iLCJzcGFjZUJvYXJkIiwiYm9hcmQiLCJiZXN0U2NvcmUiLCJzY29yZSIsImNvbmZsaWN0QXJyIiwiZ3JpZENlbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2VsbFciLCJkaWZmIiwiaW5pdCIsInN0eWxlIiwiaGVpZ2h0IiwiaSIsImoiLCJjZWxsIiwiY3NzVGV4dCIsImdldFBvc2l0aW9uIiwidG9wIiwibGVmdCIsImlubmVyVGV4dCIsImxvY2FsU3RvcmFnZSIsImJlc3QiLCJ1bmRlZmluZWQiLCJyZW1vdmVOdW1iZXJDZWxsIiwiYXBwZW5kTnVtYmVyQ2VsbCIsImdlbmVyYXRvck9uZU51bWJlciIsInJlZ2lzdGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJldmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIm51bWNlbGwiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJhcHBlbmRDaGlsZCIsIm51bWJlckNlbGwiLCJsZW4iLCJsZW5ndGgiLCJyZW1vdmVDaGlsZCIsInByaXZhdGUyMDQ4IiwiY29uc29sZSIsImxvZyIsImdldEJnY29sb3IiLCJnZXRDb2xvciIsInB1c2giLCJyYW5kb20iLCJNYXRoIiwicmFuZG9tWCIsInJhbmRvbVkiLCJyYW5kb21OdW0iLCJwcm9kdWN0V2l0aEFuaW1hdGlvbiIsIm9ua2V5ZG93biIsImUiLCJrZXkiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsIm1vdmVMZWZ0RXZlbnQiLCJtb3ZlUmlnaHRFdmVudCIsIm1vdmVVcEV2ZW50IiwibW92ZURvd25FdmVudCIsInByZVgiLCJwcmVZIiwibmV4dFgiLCJuZXh0WSIsImRlbHRYIiwiZGVsdFkiLCJldiIsInRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwiY2hhbmdlZFRvdWNoZXMiLCJhYnMiLCJwcmV2ZW50RGVmYXVsdCIsIm1vdmVSaWdodCIsInVwZGF0ZUJvYXJkVmlldyIsImlzZ2FtZW92ZXIiLCJtb3ZlTGVmdCIsIm1vdmVVcCIsIm1vdmVEb3duIiwiaXNtb3ZlIiwiaXNub3NwYWNlIiwiZGlzcGxheSIsIm1heCIsImNhbm1vdmVVcCIsImNhbm1vdmVMZWZ0IiwiY2FubW92ZVJpZ2h0IiwiY2FubW92ZURvd24iLCJrIiwibm9ibG9ja1ZlcnRpY2FsIiwic2hvd01vdmVWZXJ0aWNhbEFuaW1hdGlvbiIsInVwZGF0ZVNjb3JlIiwibm9ibG9ja0hvcml6b25hbCIsInNob3dNb3ZlSG9yaXpvbmFsQW5pbWF0aW9uIiwiYyIsIm51bSIsImZyb21YIiwiZnJvbVkiLCJ0b1giLCJ0b1kiLCJ0cmFuc2l0aW9uIiwieCIsInkiLCJiZyIsImNvbG9yIiwidGV4dCIsIndpbmRvdyIsIm9ubG9hZCIsImF1ZGlvIiwic3JjIiwic2V0QXR0cmlidXRlIiwidXJsIiwibG9jYXRpb24iLCJocmVmIiwiaW5kZXhPZiIsIkdhbWUiLCJvbmNsaWNrIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsYUFBYSxtQkFBTyxDQUFDLGlHQUE4QztBQUNuRSwyQkFBMkIsbUJBQU8sQ0FBQyw2RkFBNEM7QUFDL0U7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLFNBQVMsY0FBYyxrQkFBa0IscUJBQXFCLCtCQUErQixtQkFBTyxDQUFDLDhCQUFVLGtCQUFrQiwwQkFBMEIsRUFBRSxtQkFBbUIsbUJBQW1CLG1CQUFtQix5QkFBeUIscUJBQXFCLEVBQUUsMENBQTBDLFVBQVUsdUNBQXVDLG1CQUFPLENBQUMsNEJBQVMsUUFBUSw2QkFBNkIsRUFBRSxFQUFFLFlBQVksa0JBQWtCLHFCQUFx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Q0FBQ0MsTUFBUCxHQUFnQixZQUFNO0FBQ3BCQyxPQUFLLENBQUNDLEdBQU4sR0FBWUEsaURBQVo7QUFDQUQsT0FBSyxDQUFDRSxZQUFOLENBQW1CLFVBQW5CLEVBQStCLElBQS9CO0FBQ0EsTUFBSUMsR0FBRyxHQUFHTCxNQUFNLENBQUNNLFFBQVAsQ0FBZ0JDLElBQTFCOztBQUNBLE1BQUlGLEdBQUcsQ0FBQ0csT0FBSixDQUFZLEdBQVosSUFBbUIsQ0FBQyxDQUF4QixFQUEyQjtBQUN6QixRQUFJSCxHQUFHLENBQUNHLE9BQUosQ0FBWSxVQUFaLElBQTBCLENBQTlCLEVBQWlDO0FBQy9CSCxTQUFHLEdBQUdBLEdBQUcsR0FBRyxnQkFBWjtBQUNBTCxZQUFNLENBQUNNLFFBQVAsR0FBa0JELEdBQWxCO0FBQ0Q7QUFDRjs7QUFJRCxNQUFJSSw2Q0FBSjs7QUFDQWpJLFVBQVEsQ0FBQ2tJLE9BQVQsR0FBbUIsWUFBTTtBQUN2QjFILFFBQUksQ0FBQ2EsS0FBTCxDQUFXMkUsT0FBWCxHQUFxQixNQUFyQjtBQUNBLFFBQUlpQyw2Q0FBSjtBQUNELEdBSEQ7QUFJRCxDQWxCRCxDOzs7Ozs7Ozs7Ozs7QUNGQSxjQUFjLG1CQUFPLENBQUMsaU1BQXVHOztBQUU3SCw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsbUdBQWdEOztBQUVyRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ25CZixpQkFBaUIscUJBQXVCLDBDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vYmcuanBnXCIpKSArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEyMCU7IH1cXG4gIGJvZHkgLndyYXBwZXIge1xcbiAgICB3aWR0aDogMzI1cHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDAgYXV0bzsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLzEuanBnXCIpKSArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgfSB9XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cXG4gIGhlYWRlciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgY29sb3I6ICM5ZDgxNzc7XFxuICAgIG1hcmdpbjogMDsgfVxcbiAgaGVhZGVyIC5zY29yZSB7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZDgxNzc7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4ICNjYWMyYzI7XFxuICAgIHBhZGRpbmc6IDJweCA0cHg7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDsgfVxcbiAgICBoZWFkZXIgLnNjb3JlIHNwYW4ge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBtYXJnaW4tdG9wOiAxcHg7IH1cXG5cXG4jZ3JpZC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZDgxNzc7XFxuICBtYXJnaW4tdG9wOiAzNXB4O1xcbiAgYm9yZGVyOiA2cHggc29saWQgIzlkODE3NzsgfVxcbiAgI2dyaWQtY29udGFpbmVyIC5ncmlkLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNlYWQ0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxcbiAgI2dyaWQtY29udGFpbmVyIC5udW1iZXItY2VsbCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAjZ3JpZC1jb250YWluZXIgLm51bWJlci1jZWxsLXdhcm4ge1xcbiAgICBhbmltYXRpb246IHdhcm4gLjNzIGVhc2Utb3V0OyB9XFxuXFxuQGtleWZyYW1lcyB3YXJuIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxcblxcbi5zY29yZS1hbmltYXRpb24ge1xcbiAgYW5pbWF0aW9uOiBudW0gLjNzIGVhc2Utb3V0IGZvcndhcmRzOyB9XFxuXFxuQGtleWZyYW1lcyBudW0ge1xcbiAgMCUge1xcbiAgICBjb2xvcjogcGluaztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cXG5cXG4jb3ZlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBwYWRkaW5nOiAxNnB4IDEwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHotaW5kZXg6IDk5OTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyODY2YjtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHRvcDogNDYlO1xcbiAgZm9udC1zaXplOiAyM3B4O1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXNjYXBlKHVybCkge1xuICAgIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdXJsXG4gICAgfVxuICAgIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICAgIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgICAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICAgIH1cbiAgICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gICAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkpIHtcbiAgICAgICAgcmV0dXJuICdcIicgKyB1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSArICdcIidcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsXG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwNjQ5YzMyZTZmYjhkM2FmMDRiODJiMTE3M2VhZjg0Mi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhYzU0ODg2OTVlMTJlYjA3YjhmNzYyNDI4YjEwNDY1Ni5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBuZXdnYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuVyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKS5jbGluZXR3aWR0aDtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JpZC1jb250YWluZXJcIik7XHJcbiAgICAgICAgdGhpcy5ib3hXID0gdGhpcy5wYXJlbnQuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgICAgIHRoaXMuc2NvcmVudW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm51bVwiKTtcclxuICAgICAgICB0aGlzLm92ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJcIik7XHJcbiAgICAgICAgdGhpcy5yZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc3VsdG51bVwiKTtcclxuICAgICAgICB0aGlzLmJlc3RET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jlc3ROdW1cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zcGFjZUJvYXJkID0gW107IC8v5LqM57u05pWw57uE77yM5L+d5a2YIOepuuagvOWtkCDnmoQg57Si5byVXHJcbiAgICAgICAgdGhpcy5ib2FyZCA9IFtdOyAgICAgIC8v5LqM57u05pWw57uEIOS/neWtmCDmiYDmnIkg5qC85a2Q55qE5pWw5YC8XHJcbiAgICAgICAgdGhpcy5iZXN0U2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuY29uZmxpY3RBcnIgPSBbXTsgLy/liKTmlq3mmK/lkKblj6DliqBcclxuICAgICAgICB0aGlzLmdyaWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkLWNlbGxcIik7XHJcblxyXG4gICAgICAgIHRoaXMuY2VsbFcgPSB0aGlzLmJveFcgKiAwLjIxO1xyXG4gICAgICAgIHRoaXMuZGlmZiA9IDAuMDM5OSAqIHRoaXMuYm94VztcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMucGFyZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuYm94VyArICdweCc7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNncmlkLWNlbGwtJHtpfS0ke2p9YCk7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7dGhpcy5jZWxsV31weDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7dGhpcy5jZWxsV31weDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6ICR7dGhpcy5nZXRQb3NpdGlvbihpLCBqKS50b3B9cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogJHt0aGlzLmdldFBvc2l0aW9uKGksIGopLmxlZnR9cHhcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmJlc3RET00uaW5uZXJUZXh0ID0gbG9jYWxTdG9yYWdlLmJlc3QgIT09IHVuZGVmaW5lZCA/IGxvY2FsU3RvcmFnZS5iZXN0IDogMFxyXG4gICAgICAgIC8vIOa4heepum51bWJlclxyXG4gICAgICAgIHRoaXMucmVtb3ZlTnVtYmVyQ2VsbCgpO1xyXG5cclxuICAgICAgICAvLyAxLuS4uuWHj+WwkURPTeaTjeS9nO+8jOWwhiBhcHBlbmQg5YiG56a75Ye65p2lXHJcbiAgICAgICAgdGhpcy5hcHBlbmROdW1iZXJDZWxsKCk7XHJcblxyXG4gICAgICAgIC8vIDIu5Yid5aeL5YyWIGJvYXJkIGNvbmZsaWN0QXJy77yM6buY6K6k5Li6MFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0gPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5jb25mbGljdEFycltpXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZsaWN0QXJyW2ldW2pdID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDMuIGJvYXJkIOmHjOWFiOa3u+WKoOS4pOS4qiwg5q2k5pe25Yqo55S7IOmcgOimgeWQjOatpei/m+ihjO+8jOaJgOS7peW/hemhu+WIhuemu+WHuuadpSDkuLrmr4/kuKrmlrDlop7liqDnmoTpg73mt7vliqDliqjnlLtcclxuICAgICAgICB0aGlzLmdlbmVyYXRvck9uZU51bWJlcigpO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdG9yT25lTnVtYmVyKCk7XHJcblxyXG4gICAgICAgIC8vIDQu5LqL5Lu26Kem5Y+RIFxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoKTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIH1cclxuICAgIC8vIOaIkOe7qeWKqOeUu1xyXG4gICAgdXBkYXRlU2NvcmUoKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZW51bS5hZGRFdmVudExpc3RlbmVyKCdteUV2ZW50JywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlbnVtLmNsYXNzTGlzdC5hZGQoJ3Njb3JlLWFuaW1hdGlvbicpXHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVudW0uaW5uZXJUZXh0ID0gdGhpcy5zY29yZTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlbnVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Njb3JlLWFuaW1hdGlvbicpXHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBsZXQgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO1xyXG4gICAgICAgIGV2ZW50LmluaXRDdXN0b21FdmVudChcIm15RXZlbnRcIiwgZmFsc2UsIHRydWUsIFwiXCIpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVudW0uZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50ID0gbnVsbDtcclxuICAgICAgICB9LCAzMDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmROdW1iZXJDZWxsKCkge1xyXG4gICAgICAgIGxldCBudW1jZWxsID0gbnVsbDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbnVtY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBudW1jZWxsLmlkID0gYG51bWJlci1jZWxsLSR7aX0tJHtqfWA7XHJcbiAgICAgICAgICAgICAgICBudW1jZWxsLmNsYXNzTGlzdC5hZGQoXCJudW1iZXItY2VsbFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKG51bWNlbGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlTnVtYmVyQ2VsbCgpIHtcclxuICAgICAgICBsZXQgbnVtYmVyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5udW1iZXItY2VsbCcpO1xyXG4gICAgICAgIGxldCBsZW4gPSBudW1iZXJDZWxsLmxlbmd0aDtcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm51bWJlci1jZWxsJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVDaGlsZChudW1iZXJDZWxsW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZUJvYXJkVmlldygpIHtcclxuICAgICAgICAvLyDlr7lib2FyZCDlvqrnjq/vvIzmoLnmja5ib2FyZOWAvOS4uuWFtiDorr7nva7moLflvI9cclxuICAgICAgICBsZXQgY2VsbCA9IG51bGw7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbnVtYmVyLWNlbGwtJHtpfS0ke2p9YCk7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJudW1iZXItY2VsbC13YXJuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuY3NzVGV4dCA9IFwid2lkdGg6MDtoZWlnaHQ6MDtcIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5pbm5lclRleHQgPSB0aGlzLnByaXZhdGUyMDQ4KHRoaXMuYm9hcmRbaV1bal0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJpdmF0ZTIwNDgodGhpcy5ib2FyZFtpXVtqXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5jc3NUZXh0ID0gYHdpZHRoOiR7dGhpcy5jZWxsV31weDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6JHt0aGlzLmNlbGxXfXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDoke3RoaXMuZ2V0UG9zaXRpb24oaSxqKS50b3B9cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDoke3RoaXMuZ2V0UG9zaXRpb24oaSxqKS5sZWZ0fXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6JHt0aGlzLmdldEJnY29sb3IodGhpcy5ib2FyZFtpXVtqXSl9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiR7dGhpcy5nZXRDb2xvcih0aGlzLmJvYXJkW2ldW2pdKX1gO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmxpY3RBcnJbaV1bal0gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0b3JPbmVOdW1iZXIoKSB7XHJcbiAgICAgICAgdGhpcy5zcGFjZUJvYXJkID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwYWNlQm9hcmQucHVzaChbaSwgal0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsZW4gPSB0aGlzLnNwYWNlQm9hcmQubGVuZ3RoO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfnqbrmoLzlrZDmlbDph48nLGxlbilcclxuICAgICAgICBsZXQgcmFuZG9tID0gW107XHJcbiAgICAgICAgaWYgKGxlbiA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgcmFuZG9tID0gdGhpcy5zcGFjZUJvYXJkW35+KE1hdGgucmFuZG9tKCkgKiBsZW4pXTtcclxuICAgICAgICB0aGlzLnJhbmRvbVggPSByYW5kb21bMF07XHJcbiAgICAgICAgdGhpcy5yYW5kb21ZID0gcmFuZG9tWzFdO1xyXG5cclxuICAgICAgICAvLyDpmo/mnLrkuqfnlJ/mlbDlrZcyLzQ7XHJcbiAgICAgICAgdGhpcy5yYW5kb21OdW0gPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gMiA6IDQ7XHJcbiAgICAgICAgLy8g6ZqP5py65L2N572uIOS6p+eUnyDpmo/mnLrmlbDlrZdcclxuICAgICAgICB0aGlzLmJvYXJkW3RoaXMucmFuZG9tWF1bdGhpcy5yYW5kb21ZXSA9IHRoaXMucmFuZG9tTnVtO1xyXG5cclxuICAgICAgICB0aGlzLnByb2R1Y3RXaXRoQW5pbWF0aW9uKHRoaXMucmFuZG9tWCwgdGhpcy5yYW5kb21ZLCB0aGlzLnJhbmRvbU51bSk7XHJcbiAgICAgICAgdGhpcy5zcGFjZUJvYXJkID0gW107IC8v5q+P5qyh5b+F6aG75o+Q5YmN5riF56m677yM5LmL5ZCO5YaN5qyh5riF56m655qEIOimgeS5iOWxgOmDqOWPmOmHj++8jOimgeS5iOWwgeijheaIkOWFtuS7luaWueazlSDmr5TlpoIgbm9zcGFjZSgpXHJcblxyXG4gICAgfVxyXG4gICAgbm9zcGFjZSgpIHtcclxuICAgICAgICAvLyDliIbnprvlh7rmnaVcclxuICAgICAgICAvLyAxLiDmt7vliqDmlrDnmoTmoLzlrZDmmK/pnIDopoHliKTmlq1cclxuICAgICAgICAvLyAyLiDmuLjmiI/nu5PmnZ/ml7bpnIDopoEg5Yik5patXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKH5+KGkvNCksfn4oaSU0KSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW35+KGkgLyA0KV1bfn4oaSAlIDQpXSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZWdpc3RlcigpIHtcclxuICAgICAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywoZSk9PntcclxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQga2V5ID0gZS5rZXkudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJhcnJvd2xlZnRcIjpcclxuICAgICAgICAgICAgICAgICAgICAvL2EuIOWPkeeUn+enu+WKqOaJjeiDvei/m+ihjCBnZW5lcmF0ZSDlkowgdXBkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMS4g6K6+572udGhpcy5mbGFnXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMi4g5oiW6ICFIOenu+WKqOWHveaVsOmHjOmdoui/lOWbnnRydWUs5Y+q5pyJ5Lqn55Sf56e75Yqo5omN6YeN572uICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIOWHveaVsOi/lOWbniBpZih0aGlzLm1vdmVMZWZ0KCkpIOWNs+aJp+ihjOWPiOi/lOWbnlxyXG4gICAgICAgICAgICAgICAgICAgIC8vYi4g56e75Yqo5Lya5Lqn55Sf5Yqo55S7IOmcgOimgeW7tui/nyDmlLnlj5hib2FyZCDpnIDopoHml7bpl7Qg5YaN5bu26L+fXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlTGVmdEV2ZW50KGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImFycm93cmlnaHRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVSaWdodEV2ZW50KGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImFycm93dXBcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVVcEV2ZW50KGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImFycm93ZG93blwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURvd25FdmVudChlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IFtlLCBwcmVYLCBwcmVZLCBuZXh0WCwgbmV4dFksIGRlbHRYLCBkZWx0WV0gPSBbXTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIGUgPSBldi50b3VjaGVzWzBdO1xyXG4gICAgICAgICAgICBwcmVYID0gZS5wYWdlWDtcclxuICAgICAgICAgICAgcHJlWSA9IGUucGFnZVk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIGUgPSBldi5jaGFuZ2VkVG91Y2hlc1swXTtcclxuICAgICAgICAgICAgbmV4dFggPSBlLnBhZ2VYO1xyXG4gICAgICAgICAgICBuZXh0WSA9IGUucGFnZVk7XHJcbiAgICAgICAgICAgIGRlbHRYID0gbmV4dFggLSBwcmVYO1xyXG4gICAgICAgICAgICBkZWx0WSA9IG5leHRZIC0gcHJlWTtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRlbHRYKSA+IE1hdGguYWJzKGRlbHRZKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlbHRYID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVJpZ2h0RXZlbnQoZXYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRlbHRYIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUxlZnRFdmVudChldik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRlbHRZKSA+IE1hdGguYWJzKGRlbHRYKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlbHRZID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURvd25FdmVudChldik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVsdFkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVXBFdmVudChldik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8v6Zi75q2i6aG16Z2i5LiL5ouJ5Yi35paw5Yqf6IO9bmVuZ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBtb3ZlUmlnaHRFdmVudChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICh0aGlzLm1vdmVSaWdodCgpKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVCb2FyZFZpZXcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdG9yT25lTnVtYmVyKCk7XHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge30sIDM1MCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc2dhbWVvdmVyKCk7XHJcbiAgICAgICAgICAgIH0sIDY1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW92ZUxlZnRFdmVudChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICh0aGlzLm1vdmVMZWZ0KCkpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJvYXJkVmlldygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0b3JPbmVOdW1iZXIoKTtcclxuICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7fSwgMzUwKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzZ2FtZW92ZXIoKTtcclxuICAgICAgICAgICAgfSwgNjUwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtb3ZlVXBFdmVudChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICh0aGlzLm1vdmVVcCgpKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVCb2FyZFZpZXcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdG9yT25lTnVtYmVyKCk7XHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc2dhbWVvdmVyKCk7XHJcbiAgICAgICAgICAgIH0sIDM1MCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc2dhbWVvdmVyKCk7XHJcbiAgICAgICAgICAgIH0sIDY1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW92ZURvd25FdmVudChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICh0aGlzLm1vdmVEb3duKCkpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJvYXJkVmlldygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0b3JPbmVOdW1iZXIoKTtcclxuICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7fSwgMzUwKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzZ2FtZW92ZXIoKTtcclxuICAgICAgICAgICAgfSwgMzYwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpc2dhbWVvdmVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc21vdmUoKSAmJiAhdGhpcy5pc25vc3BhY2UoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmJlc3RTY29yZSA9IGxvY2FsU3RvcmFnZS5iZXN0ICE9PSB1bmRlZmluZWQgPyBsb2NhbFN0b3JhZ2UuYmVzdCA6IHRoaXMuc2NvcmU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYmVzdFNjb3JlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuYmVzdERPTS5pbm5lclRleHQgPSB0aGlzLnNjb3JlO1xyXG4gICAgICAgICAgICB0aGlzLm92ZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmJlc3QgPSBNYXRoLm1heCh0aGlzLnNjb3JlLCB0aGlzLmJlc3RTY29yZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaXNub3NwYWNlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtqXSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaXNtb3ZlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhbm1vdmVVcCgpIHx8IHRoaXMuY2FubW92ZUxlZnQoKSB8fCB0aGlzLmNhbm1vdmVSaWdodCgpIHx8IHRoaXMuY2FubW92ZURvd24oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbW92ZURvd24oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbm1vdmVEb3duKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMzsgayA+IGk7IGstLSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtrXVtqXSA9PSAwICYmIHRoaXMubm9ibG9ja1ZlcnRpY2FsKGosIGssIGksIHRoaXMuYm9hcmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNb3ZlVmVydGljYWxBbmltYXRpb24oaSwgaiwgaywgaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2tdW2pdID0gdGhpcy5ib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV1bal0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5ib2FyZFtrXVtqXSA9PSB0aGlzLmJvYXJkW2ldW2pdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vYmxvY2tWZXJ0aWNhbChqLCBrLCBpLCB0aGlzLmJvYXJkKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuY29uZmxpY3RBcnJba11bal0pIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TW92ZVZlcnRpY2FsQW5pbWF0aW9uKGksIGosIGssIGopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtrXVtqXSArPSB0aGlzLmJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlICs9IHRoaXMuYm9hcmRba11bal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZsaWN0QXJyW2tdW2pdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBjYW5tb3ZlRG93bigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bal0gIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2kgKyAxXVtqXSA9PSAwIHx8IHRoaXMuYm9hcmRbaSArIDFdW2pdID09IHRoaXMuYm9hcmRbaV1bal0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIG1vdmVSaWdodCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FubW92ZVJpZ2h0KCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMjsgaiA+PSAwOyBqLS0pIHsgLy8gbXVzdCBiZWdpbiByaWdodCBzaWRlXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtqXSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDM7IGsgPiBqOyBrLS0pIHsgLy8ganVkZ2UgYmVnaW4gcmlnaHQgc2lkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtrXSA9PSAwICYmIHRoaXMubm9ibG9ja0hvcml6b25hbChpLCBrLCBqLCB0aGlzLmJvYXJkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TW92ZUhvcml6b25hbEFuaW1hdGlvbihpLCBqLCBpLCBrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV1ba10gPSB0aGlzLmJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgLy/ooajnpLrlt7Lnu4/np7vliqjov4fvvIzkuI3pnIDopoHlnKjlvqrnjq9r5LqGXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5ib2FyZFtpXVtrXSA9PSB0aGlzLmJvYXJkW2ldW2pdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vYmxvY2tIb3Jpem9uYWwoaSwgaywgaiwgdGhpcy5ib2FyZCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLmNvbmZsaWN0QXJyW2ldW2tdKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TW92ZUhvcml6b25hbEFuaW1hdGlvbihpLCBqLCBpLCBrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV1ba10gKz0gdGhpcy5ib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV1bal0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSB0aGlzLmJvYXJkW2ldW2tdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25mbGljdEFycltrXVtqXSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTY29yZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNhbm1vdmVSaWdodCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bal0gIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2ogKyAxXSA9PSAwIHx8IHRoaXMuYm9hcmRbaV1baiArIDFdID09IHRoaXMuYm9hcmRbaV1bal0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIG1vdmVMZWZ0KCkge1xyXG4gICAgICAgIC8vIOaYr+WQpuWPr+S7peWQkeW3puenu+WKqFxyXG4gICAgICAgIGlmICghdGhpcy5jYW5tb3ZlTGVmdCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjYW5tb3ZlIGxlZnRcIilcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bal0gIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgajsgaysrKSB7IC8v5LuO5bem6L656YGN5Y6GIOS7juWwj+W8gOWni1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtrXSA9PSAwICYmIHRoaXMubm9ibG9ja0hvcml6b25hbChpLCBqLCBrLCB0aGlzLmJvYXJkKSkgeyAvLyDokL3ohJrkvY3nva7jgILjgILlt6bovrnlhajkuLrnqbog5peg6Zqc56KNXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNb3ZlSG9yaXpvbmFsQW5pbWF0aW9uKGksIGosIGksIGspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVtrXSA9IHRoaXMuYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5ib2FyZFtpXVtrXSA9PSB0aGlzLmJvYXJkW2ldW2pdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vYmxvY2tIb3Jpem9uYWwoaSwgaiwgaywgdGhpcy5ib2FyZCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLmNvbmZsaWN0QXJyW2ldW2tdKSB7IC8v5Y+v5Y+g5YqgIOS4lOS4remXtOaXoOmanOeijVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vdmVIb3Jpem9uYWxBbmltYXRpb24oaSwgaiwgaSwgayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2ldW2tdICs9IHRoaXMuYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gdGhpcy5ib2FyZFtpXVtrXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmxpY3RBcnJba11bal0gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNhbm1vdmVMZWZ0KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgNDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtqXSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1baiAtIDFdID09IDAgfHwgdGhpcy5ib2FyZFtpXVtqIC0gMV0gPT0gdGhpcy5ib2FyZFtpXVtqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvL+m7mOiupOS4jeWPr+enu+WKqFxyXG4gICAgfVxyXG4gICAgbW92ZVVwKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5tb3ZlVXAoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2FubW91dmUgdXBcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGk7IGsrKykgeyAvLyAwIDEgMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtrXVtqXSA9PSAwICYmIHRoaXMubm9ibG9ja1ZlcnRpY2FsKGosIGksIGssIHRoaXMuYm9hcmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNb3ZlVmVydGljYWxBbmltYXRpb24oaSwgaiwgaywgaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2tdW2pdID0gdGhpcy5ib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV1bal0gPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYm9hcmRba11bal0gPT0gdGhpcy5ib2FyZFtpXVtqXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2Jsb2NrVmVydGljYWwoaiwgaSwgaywgdGhpcy5ib2FyZCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLmNvbmZsaWN0QXJyW2tdW2pdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNb3ZlVmVydGljYWxBbmltYXRpb24oaSwgaiwgaywgaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2tdW2pdICs9IHRoaXMuYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gdGhpcy5ib2FyZFtrXVtqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmxpY3RBcnJba11bal0gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7IC8v5b+F6aG75YaZ5Zyo6YeM6Z2iIOWPquacieS4pOenjeaDheWGtSDpnZ7mraTljbPlvbxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNhbm1vdmVVcCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bal0gIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdID09IHRoaXMuYm9hcmRbaSAtIDFdW2pdIHx8IHRoaXMuYm9hcmRbaSAtIDFdW2pdID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIG5vYmxvY2tIb3Jpem9uYWwoaSwgaiwgaywgYm9hcmQpIHsgLy8yLDIsMFxyXG4gICAgICAgIGZvciAobGV0IGMgPSBrICsgMTsgYyA8IGo7IGMrKykgeyAvLzIsMCAyLDEgICBcclxuICAgICAgICAgICAgaWYgKGJvYXJkW2ldW2NdICE9IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIG5vYmxvY2tWZXJ0aWNhbChqLCBpLCBrLCBib2FyZCkge1xyXG4gICAgICAgIGZvciAobGV0IGMgPSBrICsgMTsgYyA8IGk7IGMrKykge1xyXG4gICAgICAgICAgICBpZiAoYm9hcmRbY11bal0gIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcHJvZHVjdFdpdGhBbmltYXRpb24oaSwgaiwgbnVtKSB7XHJcbiAgICAgICAgLy8g5om+5Yiw6K+l5qC85a2Q77yM5Li65YW25re75YqgY2xhc3Ms5Yqo55S75pWI5p6cXHJcbiAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbnVtYmVyLWNlbGwtJHtpfS0ke2p9YCk7XHJcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWNlbGwtd2FyblwiKTsgLy9cclxuICAgICAgICBjZWxsLmlubmVyVGV4dCA9IHRoaXMucHJpdmF0ZTIwNDgobnVtKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByaXZhdGUyMDQ4KG51bSkpXHJcbiAgICAgICAgY2VsbC5zdHlsZS5jc3NUZXh0ID0gYHdpZHRoOiR7dGhpcy5jZWxsVysyfXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiR7dGhpcy5jZWxsVysyfXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiR7dGhpcy5nZXRQb3NpdGlvbihpLGopLnRvcH1weDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6JHt0aGlzLmdldFBvc2l0aW9uKGksaikubGVmdH1weDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6JHt0aGlzLmdldEJnY29sb3IodGhpcy5ib2FyZFtpXVtqXSl9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6JHt0aGlzLmdldENvbG9yKHRoaXMuYm9hcmRbaV1bal0pfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICB9XHJcbiAgICBzaG93TW92ZUhvcml6b25hbEFuaW1hdGlvbihmcm9tWCwgZnJvbVksIHRvWCwgdG9ZKSB7XHJcbiAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbnVtYmVyLWNlbGwtJHtmcm9tWH0tJHtmcm9tWX1gKTtcclxuICAgICAgICBjZWxsLnN0eWxlLnRyYW5zaXRpb24gPSAnbGVmdCBlYXNlIDMwMG1zJztcclxuICAgICAgICBjZWxsLnN0eWxlLmxlZnQgPSBgJHt0aGlzLmdldFBvc2l0aW9uKHRvWCx0b1kpLmxlZnR9cHhgO1xyXG4gICAgfVxyXG4gICAgc2hvd01vdmVWZXJ0aWNhbEFuaW1hdGlvbihmcm9tWCwgZnJvbVksIHRvWCwgdG9ZKSB7XHJcbiAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbnVtYmVyLWNlbGwtJHtmcm9tWH0tJHtmcm9tWX1gKTtcclxuICAgICAgICBjZWxsLnN0eWxlLnRyYW5zaXRpb24gPSBgdG9wIGVhc2UgMzAwbXNgO1xyXG4gICAgICAgIGNlbGwuc3R5bGUudG9wID0gYCR7dGhpcy5nZXRQb3NpdGlvbih0b1gsdG9ZKS50b3B9cHhgO1xyXG5cclxuICAgIH1cclxuICAgIGdldFBvc2l0aW9uKHgsIHkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b3A6IHRoaXMuZGlmZiAvIDIgKyB4ICogKHRoaXMuZGlmZiArIHRoaXMuY2VsbFcpLFxyXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmRpZmYgLyAyICsgeSAqICh0aGlzLmRpZmYgKyB0aGlzLmNlbGxXKSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRCZ2NvbG9yKG51bSkge1xyXG4gICAgICAgIGxldCBiZyA9IFwiXCJcclxuICAgICAgICBzd2l0Y2ggKG51bSkge1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBiZyA9IFwiI2ZkZmZkZlwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIGJnID0gXCJyZ2IoMjU1LCAyMTcsIDE2MSlcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICBiZyA9IFwicmdiKDIwMiwgNzMsIDYzKVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTY6XHJcbiAgICAgICAgICAgICAgICBiZyA9IFwiI2ZlZTM4OFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzI6XHJcbiAgICAgICAgICAgICAgICBiZyA9IFwiI2U5YWU2YVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNjQ6XHJcbiAgICAgICAgICAgICAgICBiZyA9IFwiI2QwZTlmZlwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBiZyA9IFwidHJhbnNwYXJlbnRcIlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmc7XHJcbiAgICB9XHJcbiAgICBnZXRDb2xvcihudW0pIHtcclxuICAgICAgICBsZXQgY29sb3IgPSBudW0gPT0gMiA/ICdyZ2IoMTQ3LCAxMjUsIDEyNSknIDogbnVtID09IDQgPyAncmdiKDE0NywgMTI1LCAxMjUpJyA6IFwiI2ZmZlwiO1xyXG4gICAgICAgIHJldHVybiBjb2xvcjtcclxuICAgIH1cclxuICAgIHByaXZhdGUyMDQ4KG51bSkge1xyXG4gICAgICAgIGxldCB0ZXh0ID0gJyc7XHJcbiAgICAgICAgc3dpdGNoIChudW0pIHtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGV4dCA9IFwi5bCP55m9XCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgdGV4dCA9IFwi5a6e5Lmg55SfXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgdGV4dCA9IFwi56iL5bqP5aqbXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxNjpcclxuICAgICAgICAgICAgICAgIHRleHQgPSBcIumhueebrue7j+eQhlwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzI6XHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gXCLmnrbmnoTluIhcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDY0OlxyXG4gICAgICAgICAgICAgICAgdGV4dCA9IFwi5oqA5pyv57uP55CGXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMjg6XHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gXCLpq5jnu4/nu4/nkIZcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI1NjpcclxuICAgICAgICAgICAgICAgIHRleHQgPSBcIuaKgOacr+aAu+ebkVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTEyOlxyXG4gICAgICAgICAgICAgICAgdGV4dCA9IFwi5aSn5aSn5oC755uRXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDI0OlxyXG4gICAgICAgICAgICAgICAgdGV4dCA9IFwi5Ymv5oC76KOBXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyMDQ4OlxyXG4gICAgICAgICAgICAgICAgdGV4dCA9IFwi5oC76KOBXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0MDk2OiBcclxuICAgICAgICAgICAgICAgIHRleHQgPSBcIuaAu+ijgeiAgeWphlwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgODE5MjpcclxuICAgICAgICAgICAgICAgIHRleHQgPSBcIuaAu+ijgeWys+avjVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gXCLml6Dms5Xmj4/ov7BcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiXHJcbmltcG9ydCBcIi4vbWFpbi5zY3NzXCJcclxuaW1wb3J0IHNyYyBmcm9tICcuL211c2ljLm1wMydcclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICBhdWRpby5zcmMgPSBzcmM7XHJcbiAgYXVkaW8uc2V0QXR0cmlidXRlKFwiYXV0b3BsYXlcIiwgdHJ1ZSk7XHJcbiAgdmFyIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gIGlmICh1cmwuaW5kZXhPZignPycpID4gLTEpIHtcclxuICAgIGlmICh1cmwuaW5kZXhPZigncmVsb2FkZWQnKSA8IDApIHtcclxuICAgICAgdXJsID0gdXJsICsgXCImcmVsb2FkZWQ9dHJ1ZVwiO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24gPSB1cmw7XHJcbiAgICB9XHJcbiAgfVxyXG4gXHJcbiAgICBcclxuXHJcbiAgbmV3IEdhbWUoKTtcclxuICBkb2N1bWVudC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgb3Zlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgbmV3IEdhbWUoKTtcclxuICB9XHJcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0yIS4vbWFpbi5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9tYWluLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9tYWluLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkMzRmYWZiODYyYjY2ZDNjM2FkOTczMTg4ZWE1ZTJkZS5tcDNcIjsiXSwic291cmNlUm9vdCI6IiJ9