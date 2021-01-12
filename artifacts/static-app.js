(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "cloudinary-react"
var external_cloudinary_react_ = __webpack_require__(26);

// EXTERNAL MODULE: /Users/joshuar/Projects/jr-xix/src/components/projects/code/imgLoad/imgLoad.css
var imgLoad = __webpack_require__(74);

// EXTERNAL MODULE: /Users/joshuar/Projects/jr-xix/src/components/loadingIndicator/LoadingIndicator.css
var loadingIndicator_LoadingIndicator = __webpack_require__(75);

// CONCATENATED MODULE: /Users/joshuar/Projects/jr-xix/src/components/loadingIndicator/LoadingIndicator.js
// styles
//
var LoadingIndicator_LoadingIndicator=function LoadingIndicator(){return/*#__PURE__*/external_react_default.a.createElement("div",{className:"loading-indicator",style:{opacity:'1'}},/*#__PURE__*/external_react_default.a.createElement("div",{className:"node-1"}),/*#__PURE__*/external_react_default.a.createElement("div",{className:"node-2"}),/*#__PURE__*/external_react_default.a.createElement("div",{className:"node-3"}));};/* harmony default export */ var components_loadingIndicator_LoadingIndicator = (LoadingIndicator_LoadingIndicator);
// CONCATENATED MODULE: /Users/joshuar/Projects/jr-xix/src/components/projects/code/imgLoad/imgLoad.js
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}/* ImgLoad */ /*
  - get an image from props array
  - set loading text / spinner
  - wait until image loaded successfully
  - set opacity of image when loaded
  - optionally set image aspect ratio

  props:
    image: a url
    ratio: if provided as #x#, will size the image for stenciling
    fade: defaults to true - fade image opacity of load
    duration: effect duration - defaults to .5s
    className: add a class
    loadingMessage: display a message while loading
    indicator: display a component while loading
    controls:  show controls to adjust props
    cloudinary: use cloudinary component instead of img
  */// styles
// components
//
var imgLoad_ImgLoad=/*#__PURE__*/function(_React$Component){_inherits(ImgLoad,_React$Component);var _super=_createSuper(ImgLoad);function ImgLoad(props){var _this;_classCallCheck(this,ImgLoad);_this=_super.call(this,props);_defineProperty(_assertThisInitialized(_this),"componentDidMount",function(){/* If not using cloudinary, call loadImage */ /* loadImage promise success */if(!_this.props.cloudinary){// console.log('...not cloudinary...')
_this.loadImage().then(function(){_this.setState({loaded:true});/* loadImage promise failure */},function(error){console.log('Loading failed.',error);_this.setState({loaded:false});});}});_defineProperty(_assertThisInitialized(_this),"render",function(){var imgStyles=_this.props.fade?{opacity:_this.state.loaded?'1':'0',transition:"opacity ".concat(_this.props.duration," ease-in-out")}:null;var showLoadingIndicator=!_this.state.loaded&&_this.props.indicator?/*#__PURE__*/external_react_default.a.createElement(components_loadingIndicator_LoadingIndicator,null):null;var showLoadingMessage=_this.props.loadingMessage?!_this.state.loaded?/*#__PURE__*/external_react_default.a.createElement("p",{className:"loading-message"},_this.props.loadingMessage):null:null;var showControls=_this.props.showControls&&/*#__PURE__*/external_react_default.a.createElement("div",{className:"image-loader-controls"},/*#__PURE__*/external_react_default.a.createElement("button",{onClick:_this.reloadImage},"rerender"));var imageLoad=function imageLoad(){_this.setState({loaded:true});};/* if cloudinary prop is true, use the cloudinary component... */var showImage=_this.props.cloudinary?/*#__PURE__*/external_react_default.a.createElement(external_cloudinary_react_["Image"],{className:"cloudinary image ".concat(_this.props.className),cloudName:"joshuar",publicId:_this.state.imgUrl,width:"auto",dpr:"auto",crop:"scale",progressive:"false",f_auto:"true",secure:true,responsive:true,onLoad:function onLoad(event){// let parent know the image loaded and send back the url
if(_this.props.imgLoaded){_this.props.imgLoaded(event.currentTarget.src);}imageLoad();},style:imgStyles}):/*#__PURE__*/external_react_default.a.createElement("img",{alt:"",src:_this.state.imgUrl,className:"image",style:imgStyles});return/*#__PURE__*/external_react_default.a.createElement("div",{className:"image-loader ".concat(_this.props.className),key:"image-loader",style:{paddingBottom:_this.getAspectRatio()}},showLoadingIndicator,showLoadingMessage,showImage,showControls);});_defineProperty(_assertThisInitialized(_this),"loadImage",function(){return new Promise(function(resolve,reject){var img=new external_cloudinary_react_["Image"]();/* resolve promise on load */img.onload=function(){resolve(img);// return the image element
};/* reject promise on not load */img.onerror=function(){reject();};/* image to load */img.src=_this.state.imgUrl;});});_defineProperty(_assertThisInitialized(_this),"getAspectRatio",function(){var computeRatio=function computeRatio(ratio){var w=parseInt(ratio.toString().split("x")[0]);// before x
var h=parseInt(ratio.toString().split("x")[1]);// after x
var aspectRatio=w&&h?"".concat((h/w*100).toFixed(2),"%"):console.log("Incorrect ratio prop");return aspectRatio;};var ratio=_this.props.ratio&&_this.props.ratio.length?computeRatio(_this.props.ratio):null;return ratio;});_this.state={loaded:false,imgUrl:_this.props.url};return _this;}return ImgLoad;}(external_react_default.a.Component);_defineProperty(imgLoad_ImgLoad,"defaultProps",{url:null,ratio:null,fade:true,duration:'.5s',className:'',indicator:true,loadingMessage:null,controls:false,cloudinary:true});/* harmony default export */ var imgLoad_imgLoad = __webpack_exports__["a"] = (/*#__PURE__*/external_react_default.a.forwardRef(function(props,ref){return/*#__PURE__*/external_react_default.a.createElement(imgLoad_ImgLoad,_extends({},props,{imgRef:ref}));}));

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Loading: true,
  withLoading: true,
  onLoading: true,
  removal: true,
  getRoutePath: true,
  getBasePath: true,
  Head: true,
  scrollTo: true,
  RouteData: true,
  withRouteData: true,
  SiteData: true,
  withSiteData: true,
  Prefetch: true,
  Routes: true,
  Root: true
};
Object.defineProperty(exports, "removal", {
  enumerable: true,
  get: function get() {
    return _utils.removal;
  }
});
Object.defineProperty(exports, "getRoutePath", {
  enumerable: true,
  get: function get() {
    return _utils.getRoutePath;
  }
});
Object.defineProperty(exports, "getBasePath", {
  enumerable: true,
  get: function get() {
    return _utils.getBasePath;
  }
});
Object.defineProperty(exports, "Head", {
  enumerable: true,
  get: function get() {
    return _reactHelmet.Helmet;
  }
});
Object.defineProperty(exports, "scrollTo", {
  enumerable: true,
  get: function get() {
    return _scrollTo.default;
  }
});
Object.defineProperty(exports, "RouteData", {
  enumerable: true,
  get: function get() {
    return _RouteData.default;
  }
});
Object.defineProperty(exports, "withRouteData", {
  enumerable: true,
  get: function get() {
    return _RouteData.withRouteData;
  }
});
Object.defineProperty(exports, "SiteData", {
  enumerable: true,
  get: function get() {
    return _SiteData.default;
  }
});
Object.defineProperty(exports, "withSiteData", {
  enumerable: true,
  get: function get() {
    return _SiteData.withSiteData;
  }
});
Object.defineProperty(exports, "Prefetch", {
  enumerable: true,
  get: function get() {
    return _Prefetch.default;
  }
});
Object.defineProperty(exports, "Routes", {
  enumerable: true,
  get: function get() {
    return _Routes.default;
  }
});
Object.defineProperty(exports, "Root", {
  enumerable: true,
  get: function get() {
    return _Root.default;
  }
});
exports.onLoading = exports.withLoading = exports.Loading = void 0;

var _utils = __webpack_require__(13);

var _reactHelmet = __webpack_require__(55);

var _browser = __webpack_require__(12);

Object.keys(_browser).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _browser[key];
    }
  });
});

var _scrollTo = _interopRequireDefault(__webpack_require__(32));

var _RouteData = _interopRequireWildcard(__webpack_require__(56));

var _SiteData = _interopRequireWildcard(__webpack_require__(57));

var _Prefetch = _interopRequireDefault(__webpack_require__(58));

var _Routes = _interopRequireDefault(__webpack_require__(34));

var _Root = _interopRequireDefault(__webpack_require__(59));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).enterModule;
  enterModule && enterModule(module);
})(); // Migration Hints


var Loading = function Loading() {
  (0, _utils.removal)('Loading');
};

exports.Loading = Loading;

var withLoading = function withLoading() {
  (0, _utils.removal)('withLoading');
};

exports.withLoading = withLoading;

var onLoading = function onLoading() {
  (0, _utils.removal)('onLoading');
};

exports.onLoading = onLoading;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loading, "Loading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  reactHotLoader.register(withLoading, "withLoading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  reactHotLoader.register(onLoading, "onLoading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
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
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(50);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(52);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(22);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(53);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(21);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var _render = userRender || (0, _utils.createDefaultRender)(Loading, Err);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireSync = _req2.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = {
        error: null
      };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req3 = (0, _requireUniversalModule2.default)(asyncModule, options, this.props),
            addModule = _req3.addModule,
            requireSync = _req3.requireSync,
            requireAsync = _req3.requireAsync,
            asyncOnly = _req3.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({
            error: error
          });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({
            mod: mod
          }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2.default)(asyncModule, options, nextProps, this.props),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var mod = void 0;

            try {
              mod = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _mod = requireSync(nextProps, this.context);

            this.setState({
              mod: function mod() {
                return null;
              }
            }); // HMR /w Redux and HOCs can be finicky, so we

            setTimeout(function () {
              return _this2.setState({
                mod: _mod
              });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.mod && loadingTransition) {
          this.update({
            mod: null
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (mod) {
          var state = {
            mod: mod
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({
            error: error
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return _render(props, mod, isLoading, userError || error);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}

exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)(module)))

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scrollToTop_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76);
/* harmony import */ var _scrollToTop_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scrollToTop_css__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}// styles
//
var ScrollButton=/*#__PURE__*/function(_React$Component){_inherits(ScrollButton,_React$Component);var _super=_createSuper(ScrollButton);function ScrollButton(){var _this;_classCallCheck(this,ScrollButton);_this=_super.call(this);_this.state={intervalId:0};return _this;}_createClass(ScrollButton,[{key:"render",value:function render(){var _this2=this;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{title:"Back to top",className:"scroll-button",onClick:function onClick(){_this2.scrollToTop();}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"up-arrow"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon",{points:"9.98 8.15 1.37 15.19 0.5 13.62 8.99 6.3 9.98 4.81 11.01 6.3 19.5 13.62 18.59 15.19 9.98 8.15"}))));}},{key:"scrollStep",value:function scrollStep(){if(window.pageYOffset===0){clearInterval(this.state.intervalId);}window.scroll(0,window.pageYOffset-this.props.scrollStepInPx);}},{key:"scrollToTop",value:function scrollToTop(){var intervalId=setInterval(this.scrollStep.bind(this),this.props.delayInMs);this.setState({intervalId:intervalId});}}]);return ScrollButton;}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (ScrollButton);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reloadRouteData = reloadRouteData;
exports.getRouteInfo = getRouteInfo;
exports.prefetchData = prefetchData;
exports.prefetchTemplate = prefetchTemplate;
exports.prefetch = prefetch;
exports.getCurrentRoutePath = getCurrentRoutePath;
exports.registerTemplateForPath = exports.registerTemplates = exports.templateUpdated = exports.templateErrorByPath = exports.templatesByPath = exports.templates = exports.registerPlugins = exports.plugins = exports.sharedDataByHash = exports.routeErrorByPath = exports.routeInfoByPath = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _axios = _interopRequireDefault(__webpack_require__(29));

var _utils = __webpack_require__(13);

var _Visibility = _interopRequireDefault(__webpack_require__(30));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).enterModule;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
} // RouteInfo / RouteData


var routeInfoByPath = {};
exports.routeInfoByPath = routeInfoByPath;
var routeErrorByPath = {};
exports.routeErrorByPath = routeErrorByPath;
var sharedDataByHash = {};
exports.sharedDataByHash = sharedDataByHash;
var inflightRouteInfo = {};
var inflightPropHashes = {};
var requestPool = (0, _utils.createPool)({
  concurrency: Number("5")
}); // Plugins

var plugins = [];
exports.plugins = plugins;

var registerPlugins = function registerPlugins(newPlugins) {
  plugins.splice.apply(plugins, [0, Infinity].concat(_toConsumableArray(newPlugins)));
}; // Templates


exports.registerPlugins = registerPlugins;
var templates = {};
exports.templates = templates;
var templatesByPath = {};
exports.templatesByPath = templatesByPath;
var templateErrorByPath = {};
exports.templateErrorByPath = templateErrorByPath;
var templateUpdated = {
  cb: function cb() {}
};
exports.templateUpdated = templateUpdated;

var registerTemplates = function registerTemplates(tmps, notFoundKey) {
  Object.keys(templates).forEach(function (key) {
    delete templates[key];
  });
  Object.keys(tmps).forEach(function (key) {
    templates[key] = tmps[key];
  });
  templatesByPath['404'] = templates[notFoundKey];
  templateUpdated.cb();
};

exports.registerTemplates = registerTemplates;

var registerTemplateForPath = function registerTemplateForPath(path, template) {
  path = (0, _utils.getRoutePath)(path);
  templatesByPath[path] = templates[template];
};

exports.registerTemplateForPath = registerTemplateForPath;
init(); // When in development, init a socket to listen for data changes
// When the data changes, we invalidate and reload all of the route data

function init() {
  // In development, we need to open a socket to listen for changes to data
  if (false) { var run, io; }

  if (true) startPreloader();
}

function startPreloader() {
  if (typeof document !== 'undefined') {
    var run = function run() {
      var els = [].slice.call(document.getElementsByTagName('a'));
      els.forEach(function (el) {
        var href = el.getAttribute('href');
        var shouldPrefetch = !(el.getAttribute('prefetch') === 'false');

        if (href && shouldPrefetch) {
          (0, _Visibility.default)(el, function () {
            prefetch(href);
          });
        }
      });
    };

    setInterval(run, Number("300"));
  }
}

function reloadRouteData() {
  // Delete all cached data
  ;
  [routeInfoByPath, sharedDataByHash, routeErrorByPath, inflightRouteInfo, inflightPropHashes].forEach(function (part) {
    Object.keys(part).forEach(function (key) {
      delete part[key];
    });
  }); // Force each RouteData component to reload

  global.reloadAll();
}

function getRouteInfo(_x) {
  return _getRouteInfo.apply(this, arguments);
}

function _getRouteInfo() {
  _getRouteInfo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(path) {
    var _ref4,
        priority,
        routeInfo,
        _ref7,
        data,
        routeInfoRoot,
        cacheBuster,
        getPath,
        _ref8,
        _data,
        _ref9,
        _data2,
        _args2 = arguments;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref4 = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {}, priority = _ref4.priority;
            path = (0, _utils.getRoutePath)(path); // Check if we should fetch RouteData for this url et all.

            if ((0, _utils.isPrefetchableRoute)(path)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return");

          case 4:
            if (!routeInfoByPath[path]) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", routeInfoByPath[path]);

          case 6:
            if (!routeErrorByPath[path]) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return");

          case 8:
            _context2.prev = 8;

            if (true) {
              _context2.next = 18;
              break;
            } // In dev, request from the webpack dev server


            if (!inflightRouteInfo[path]) {
              inflightRouteInfo[path] = _axios.default.get("/__react-static__/routeInfo/".concat(path === '/' ? '' : path));
            }

            _context2.next = 13;
            return inflightRouteInfo[path];

          case 13:
            _ref7 = _context2.sent;
            data = _ref7.data;
            routeInfo = data;
            _context2.next = 35;
            break;

          case 18:
            // In production, fetch the JSON file
            // Find the location of the routeInfo.json file
            routeInfoRoot = ( false ? undefined : "/") || false;
            cacheBuster = process.env.REACT_STATIC_CACHE_BUST ? "?".concat(process.env.REACT_STATIC_CACHE_BUST) : '';
            getPath = "".concat(routeInfoRoot).concat((0, _utils.pathJoin)(path, 'routeInfo.json')).concat(cacheBuster); // If this is a priority call bypass the queue

            if (!priority) {
              _context2.next = 29;
              break;
            }

            _context2.next = 24;
            return _axios.default.get(getPath);

          case 24:
            _ref8 = _context2.sent;
            _data = _ref8.data;
            routeInfo = _data;
            _context2.next = 35;
            break;

          case 29:
            // Otherwise, add it to the queue
            if (!inflightRouteInfo[path]) {
              inflightRouteInfo[path] = requestPool.add(function () {
                return _axios.default.get(getPath);
              });
            }

            _context2.next = 32;
            return inflightRouteInfo[path];

          case 32:
            _ref9 = _context2.sent;
            _data2 = _ref9.data;
            routeInfo = _data2;

          case 35:
            _context2.next = 44;
            break;

          case 37:
            _context2.prev = 37;
            _context2.t0 = _context2["catch"](8); // If there was an error, mark the path as errored

            routeErrorByPath[path] = true; // Unless we already fetched the 404 page,
            // try to load info for the 404 page

            if (!(!routeInfoByPath['404'] && !routeErrorByPath['404'])) {
              _context2.next = 43;
              break;
            }

            getRouteInfo('404', {
              priority: priority
            });
            return _context2.abrupt("return");

          case 43:
            return _context2.abrupt("return");

          case 44:
            if (!priority) {
              delete inflightRouteInfo[path];
            }

            if (_typeof(routeInfo) !== 'object' || !routeInfo.path) {
              // routeInfo must have returned 200, but is not actually
              // a routeInfo object. Mark it as an error and move on silently
              routeErrorByPath[path] = true;
            } else {
              routeInfoByPath[path] = routeInfo;
            }

            return _context2.abrupt("return", routeInfoByPath[path]);

          case 47:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[8, 37]]);
  }));
  return _getRouteInfo.apply(this, arguments);
}

function prefetchData(_x2) {
  return _prefetchData.apply(this, arguments);
}

function _prefetchData() {
  _prefetchData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(path) {
    var _ref5,
        priority,
        routeInfo,
        _args4 = arguments;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _ref5 = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {}, priority = _ref5.priority;
            _context4.next = 3;
            return getRouteInfo(path, {
              priority: priority
            });

          case 3:
            routeInfo = _context4.sent;

            if (routeInfo) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return");

          case 6:
            if (!routeInfo.sharedData) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", (0, _utils.getFullRouteData)(routeInfo));

          case 8:
            // Request and build the props one by one
            routeInfo.sharedData = {}; // Request the template and loop over the routeInfo.sharedHashesByProp, requesting each prop

            _context4.next = 11;
            return Promise.all(Object.keys(routeInfo.sharedHashesByProp).map( /*#__PURE__*/function () {
              var _ref10 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(key) {
                var hash, staticDataPath, absoluteStaticDataPath, _ref11, prop, _ref12, _prop;

                return _regenerator.default.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        hash = routeInfo.sharedHashesByProp[key]; // Check the sharedDataByHash first

                        if (sharedDataByHash[hash]) {
                          _context3.next = 26;
                          break;
                        }

                        _context3.prev = 2;
                        staticDataPath = (0, _utils.pathJoin)("", "staticData/".concat(hash, ".json"));
                        absoluteStaticDataPath = (0, _utils.makePathAbsolute)(staticDataPath); // If priority, get it immediately

                        if (!priority) {
                          _context3.next = 13;
                          break;
                        }

                        _context3.next = 8;
                        return _axios.default.get(absoluteStaticDataPath);

                      case 8:
                        _ref11 = _context3.sent;
                        prop = _ref11.data;
                        sharedDataByHash[hash] = prop;
                        _context3.next = 19;
                        break;

                      case 13:
                        // Non priority, share inflight requests and use pool
                        if (!inflightPropHashes[hash]) {
                          inflightPropHashes[hash] = requestPool.add(function () {
                            return _axios.default.get(absoluteStaticDataPath);
                          });
                        }

                        _context3.next = 16;
                        return inflightPropHashes[hash];

                      case 16:
                        _ref12 = _context3.sent;
                        _prop = _ref12.data; // Place it in the cache

                        sharedDataByHash[hash] = _prop;

                      case 19:
                        _context3.next = 25;
                        break;

                      case 21:
                        _context3.prev = 21;
                        _context3.t0 = _context3["catch"](2);
                        console.log('Error: There was an error retrieving a prop for this route! hashID:', hash);
                        console.error(_context3.t0);

                      case 25:
                        if (!priority) {
                          delete inflightPropHashes[hash];
                        }

                      case 26:
                        // Otherwise, just set it as the key
                        routeInfo.sharedData[key] = sharedDataByHash[hash];

                      case 27:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this, [[2, 21]]);
              }));

              return function (_x5) {
                return _ref10.apply(this, arguments);
              };
            }()));

          case 11:
            return _context4.abrupt("return", (0, _utils.getFullRouteData)(routeInfo));

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _prefetchData.apply(this, arguments);
}

function prefetchTemplate(_x3) {
  return _prefetchTemplate.apply(this, arguments);
}

function _prefetchTemplate() {
  _prefetchTemplate = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(path) {
    var _ref6,
        priority,
        routeInfo,
        Template,
        _args5 = arguments;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _ref6 = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {}, priority = _ref6.priority; // Clean the path

            path = (0, _utils.getRoutePath)(path); // Get route info so we can check if path has any data

            _context5.next = 4;
            return getRouteInfo(path, {
              priority: priority
            });

          case 4:
            routeInfo = _context5.sent;

            if (routeInfo) {
              // Make sure to use the path as defined in the routeInfo object here.
              // This will make sure 404 route info returned from getRouteInfo is handled correctly.
              registerTemplateForPath(routeInfo.path, routeInfo.template);
            } // Preload the template if available


            Template = templatesByPath[path];

            if (Template) {
              _context5.next = 10;
              break;
            } // If no template was found, mark it with an error


            templateErrorByPath[path] = true;
            return _context5.abrupt("return");

          case 10:
            if (routeInfo) {
              _context5.next = 12;
              break;
            }

            return _context5.abrupt("return", Template);

          case 12:
            if (!(!routeInfo.templateLoaded && Template.preload)) {
              _context5.next = 21;
              break;
            }

            if (!priority) {
              _context5.next = 18;
              break;
            }

            _context5.next = 16;
            return Template.preload();

          case 16:
            _context5.next = 20;
            break;

          case 18:
            _context5.next = 20;
            return requestPool.add(function () {
              return Template.preload();
            });

          case 20:
            routeInfo.templateLoaded = true;

          case 21:
            return _context5.abrupt("return", Template);

          case 22:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _prefetchTemplate.apply(this, arguments);
}

function prefetch(_x4) {
  return _prefetch.apply(this, arguments);
}

function _prefetch() {
  _prefetch = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(path) {
    var options,
        type,
        data,
        _ref13,
        _ref14,
        _args6 = arguments;

    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            options = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {}; // Clean the path

            path = (0, _utils.getRoutePath)(path);
            type = options.type; // If it's priority, we stop the queue temporarily

            if (options.priority) {
              requestPool.stop();
            }

            if (!(type === 'data')) {
              _context6.next = 10;
              break;
            }

            _context6.next = 7;
            return prefetchData(path, options);

          case 7:
            data = _context6.sent;
            _context6.next = 21;
            break;

          case 10:
            if (!(type === 'template')) {
              _context6.next = 15;
              break;
            }

            _context6.next = 13;
            return prefetchTemplate(path, options);

          case 13:
            _context6.next = 21;
            break;

          case 15:
            ;
            _context6.next = 18;
            return Promise.all([prefetchData(path, options), prefetchTemplate(path, options)]);

          case 18:
            _ref13 = _context6.sent;
            _ref14 = _slicedToArray(_ref13, 1);
            data = _ref14[0];

          case 21:
            // If it was priority, start the queue again
            if (options.priority) {
              requestPool.start();
            }

            return _context6.abrupt("return", data);

          case 23:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));
  return _prefetch.apply(this, arguments);
}

function getCurrentRoutePath() {
  // If in the browser, use the window
  if (typeof document !== 'undefined') {
    return (0, _utils.getRoutePath)(decodeURIComponent(window.location.href));
  }
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(routeInfoByPath, "routeInfoByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(routeErrorByPath, "routeErrorByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(sharedDataByHash, "sharedDataByHash", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(inflightRouteInfo, "inflightRouteInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(inflightPropHashes, "inflightPropHashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(requestPool, "requestPool", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(plugins, "plugins", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerPlugins, "registerPlugins", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templates, "templates", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templatesByPath, "templatesByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templateErrorByPath, "templateErrorByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templateUpdated, "templateUpdated", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerTemplates, "registerTemplates", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerTemplateForPath, "registerTemplateForPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(init, "init", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(startPreloader, "startPreloader", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(reloadRouteData, "reloadRouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(getRouteInfo, "getRouteInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetchData, "prefetchData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetchTemplate, "prefetchTemplate", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetch, "prefetch", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(getCurrentRoutePath, "getCurrentRoutePath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathJoin = pathJoin;
exports.getRoutePath = getRoutePath;
exports.unwrapArray = unwrapArray;
exports.isObject = isObject;
exports.deprecate = deprecate;
exports.removal = removal;
exports.isAbsoluteUrl = isAbsoluteUrl;
exports.makePathAbsolute = makePathAbsolute;
exports.makeHookReducer = makeHookReducer;
exports.makeHookMapper = makeHookMapper;
exports.isSSR = isSSR;
exports.getBasePath = getBasePath;
exports.isPrefetchableRoute = isPrefetchableRoute;
exports.getFullRouteData = getFullRouteData;
Object.defineProperty(exports, "poolAll", {
  enumerable: true,
  get: function get() {
    return _swimmer.poolAll;
  }
});
Object.defineProperty(exports, "createPool", {
  enumerable: true,
  get: function get() {
    return _swimmer.createPool;
  }
});
exports.cleanSlashes = exports.trimDoubleSlashes = exports.trimTrailingSlashes = exports.trimLeadingSlashes = exports.cutPathToRoot = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _swimmer = __webpack_require__(47);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).enterModule;
  enterModule && enterModule(module);
})();

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var REGEX_TO_CUT_TO_ROOT = /(\..+?)\/.*/g;
var REGEX_TO_REMOVE_LEADING_SLASH = /^\/{1,}/g;
var REGEX_TO_REMOVE_TRAILING_SLASH = /\/{1,}$/g;
var REGEX_TO_REMOVE_DOUBLE_SLASH = /\/{2,}/g;

var cutPathToRoot = function cutPathToRoot() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_CUT_TO_ROOT, '$1');
};

exports.cutPathToRoot = cutPathToRoot;

var trimLeadingSlashes = function trimLeadingSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_REMOVE_LEADING_SLASH, '');
};

exports.trimLeadingSlashes = trimLeadingSlashes;

var trimTrailingSlashes = function trimTrailingSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_REMOVE_TRAILING_SLASH, '');
};

exports.trimTrailingSlashes = trimTrailingSlashes;

var trimDoubleSlashes = function trimDoubleSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (isAbsoluteUrl(string)) {
    var _string$split = string.split('://'),
        _string$split2 = _slicedToArray(_string$split, 2),
        _string$split2$ = _string$split2[0],
        scheme = _string$split2$ === void 0 ? '' : _string$split2$,
        _string$split2$2 = _string$split2[1],
        path = _string$split2$2 === void 0 ? '' : _string$split2$2;

    return [scheme, path.replace(REGEX_TO_REMOVE_DOUBLE_SLASH, '/')].join('://');
  }

  return string.replace(REGEX_TO_REMOVE_DOUBLE_SLASH, '/');
};

exports.trimDoubleSlashes = trimDoubleSlashes;

var cleanSlashes = function cleanSlashes(string) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!string) return '';
  var _options$leading = options.leading,
      leading = _options$leading === void 0 ? true : _options$leading,
      _options$trailing = options.trailing,
      trailing = _options$trailing === void 0 ? true : _options$trailing,
      _options$double = options.double,
      double = _options$double === void 0 ? true : _options$double;
  var cleanedString = string;

  if (leading) {
    cleanedString = trimLeadingSlashes(cleanedString);
  }

  if (trailing) {
    cleanedString = trimTrailingSlashes(cleanedString);
  }

  if (double) {
    cleanedString = trimDoubleSlashes(cleanedString);
  }

  return cleanedString;
};

exports.cleanSlashes = cleanSlashes;

function pathJoin() {
  for (var _len = arguments.length, paths = new Array(_len), _key = 0; _key < _len; _key++) {
    paths[_key] = arguments[_key];
  }

  var newPath = paths.map(cleanSlashes).join('/');

  if (!newPath || newPath === '/') {
    return '/';
  }

  newPath = cleanSlashes(newPath);

  if (newPath.includes('?')) {
    newPath = newPath.substring(0, newPath.indexOf('?'));
  }

  return newPath;
} // This function is for extracting a routePath from a path or string
// RoutePaths do not have query params, basePaths, and should
// resemble the same string as passed in the static.config.js routes


function getRoutePath(routePath) {
  // Detect falsey paths and the root path
  if (!routePath || routePath === '/') {
    return '/';
  } // Remove origin, hashes, and query params


  if (typeof document !== 'undefined') {
    routePath = routePath.replace(window.location.origin, '');
    routePath = routePath.replace(/#.*/, '');
    routePath = routePath.replace(/\?.*/, '');
  } // Be sure to remove the base path


  if (false) {}

  routePath = routePath || '/';
  return pathJoin(routePath);
}

function unwrapArray(arg, defaultValue) {
  arg = Array.isArray(arg) ? arg[0] : arg;

  if (!arg && defaultValue) {
    return defaultValue;
  }

  return arg;
}

function isObject(a) {
  return !Array.isArray(a) && _typeof(a) === 'object' && a !== null;
}

function deprecate(from, to) {
  console.warn("React-Static deprecation notice: ".concat(from, " will be deprecated in favor of ").concat(to, " in the next major release."));
}

function removal(from) {
  console.warn("React-Static removal notice: ".concat(from, " is no longer supported in this version of React-Static. Please refer to the CHANGELOG for details."));
}

function isAbsoluteUrl(url) {
  if (typeof url !== 'string') {
    return false;
  }

  return /^[a-z][a-z0-9+.-]*:/.test(url);
}

function makePathAbsolute(path) {
  if (typeof path !== 'string') {
    return '/';
  }

  if (isAbsoluteUrl(path)) {
    return path;
  }

  return "/".concat(trimLeadingSlashes(path));
}

function makeHookReducer() {
  var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var hook = arguments.length > 1 ? arguments[1] : undefined;

  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      sync = _ref.sync;

  var hooks = flattenHooks(plugins, hook); // Returns a runner that takes a value (and opts) and
  // reduces the value through each hook, returning the
  // final value
  // compare is a function which is used to compare
  // the prev and next value and decide which to use.
  // By default, if undefined is returned from a reducer, the prev value
  // is retained

  if (sync) {
    return function (value, opts) {
      return hooks.reduce(function (prev, hook) {
        var next = hook(prev, opts);

        if (next instanceof Promise) {
          throw new Error('Cannot run async hooks in sync mode.');
        }

        return typeof next !== 'undefined' ? next : prev;
      }, value);
    };
  }

  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(value, opts) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return hooks.reduce( /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(prevPromise, hook) {
                  var prev, next;
                  return _regenerator.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return prevPromise;

                        case 2:
                          prev = _context.sent;
                          _context.next = 5;
                          return hook(prev, opts);

                        case 5:
                          next = _context.sent;
                          return _context.abrupt("return", typeof next !== 'undefined' ? next : prev);

                        case 7:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));

                return function (_x3, _x4) {
                  return _ref3.apply(this, arguments);
                };
              }(), Promise.resolve(value));

            case 2:
              value = _context2.sent;
              return _context2.abrupt("return", value);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
}

function makeHookMapper() {
  var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var hook = arguments.length > 1 ? arguments[1] : undefined;
  var hooks = flattenHooks(plugins, hook); // Returns a runner that takes options and returns
  // a flat array of values mapped from each hook

  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(opts) {
      var vals;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              vals = [];
              _context4.next = 3;
              return hooks.reduce( /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(prevPromise, hook) {
                  var val;
                  return _regenerator.default.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return prevPromise;

                        case 2:
                          _context3.next = 4;
                          return hook(opts);

                        case 4:
                          val = _context3.sent;
                          vals.push(val);

                        case 6:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, this);
                }));

                return function (_x6, _x7) {
                  return _ref5.apply(this, arguments);
                };
              }(), Promise.resolve());

            case 3:
              return _context4.abrupt("return", vals.filter(function (d) {
                return typeof d !== 'undefined';
              }));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    return function (_x5) {
      return _ref4.apply(this, arguments);
    };
  }();
}

function flattenHooks(plugins, hook) {
  // The flat hooks
  var hooks = []; // Adds a plugin hook to the hook list

  var addToHooks = function addToHooks(plugin) {
    // Add the hook
    hooks.push(plugin.hooks[hook]); // Recurse into sub plugins if needs be

    if (plugin.plugins) {
      plugin.plugins.forEach(addToHooks);
    }
  }; // Start with the config plugins


  plugins.forEach(addToHooks); // Filter out falsey entries

  return hooks.filter(Boolean);
}

function isSSR() {
  return typeof document === 'undefined';
}

function getBasePath() {
  return  false ? undefined : "";
}

function isPrefetchableRoute(path) {
  // when rendering static pages we dont need this et all
  if (isSSR()) {
    return false;
  }

  var _document = document,
      location = _document.location;
  var link;

  try {
    link = new URL(path, location.href);
  } catch (e) {
    // Return false on invalid URLs
    return false;
  } // if the hostname/port/protocol doesn't match its not a route link


  if (location.host !== link.host || location.protocol !== link.protocol) {
    return false;
  } // deny all files with extension other than .html


  if (link.pathname.includes('.') && !link.pathname.includes('.html')) {
    return false;
  }

  return true;
}

function getFullRouteData(routeInfo) {
  return _objectSpread({}, routeInfo.sharedData ? routeInfo.sharedData : {}, routeInfo.data);
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(REGEX_TO_CUT_TO_ROOT, "REGEX_TO_CUT_TO_ROOT", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(REGEX_TO_REMOVE_LEADING_SLASH, "REGEX_TO_REMOVE_LEADING_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(REGEX_TO_REMOVE_TRAILING_SLASH, "REGEX_TO_REMOVE_TRAILING_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(REGEX_TO_REMOVE_DOUBLE_SLASH, "REGEX_TO_REMOVE_DOUBLE_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(cutPathToRoot, "cutPathToRoot", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(trimLeadingSlashes, "trimLeadingSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(trimTrailingSlashes, "trimTrailingSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(trimDoubleSlashes, "trimDoubleSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(cleanSlashes, "cleanSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(pathJoin, "pathJoin", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(getRoutePath, "getRoutePath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(unwrapArray, "unwrapArray", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isObject, "isObject", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(deprecate, "deprecate", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(removal, "removal", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isAbsoluteUrl, "isAbsoluteUrl", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(makePathAbsolute, "makePathAbsolute", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(makeHookReducer, "makeHookReducer", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(makeHookMapper, "makeHookMapper", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(flattenHooks, "flattenHooks", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isSSR, "isSSR", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(getBasePath, "getBasePath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isPrefetchableRoute, "isPrefetchableRoute", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(getFullRouteData, "getFullRouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)(module)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(21);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(51)("" + id);
  }

  return __webpack_require__('' + id);
};

exports.default = requireById;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStaticInfo = useStaticInfo;
exports.withStaticInfo = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).enterModule;
  enterModule && enterModule(module);
})();

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
} // eslint-disable-next-line


var context = _react.default.createContext({});

if (typeof document !== 'undefined') {
  context = _react.default.createContext(window.__routeInfo);
}

var _default = context;
var _default2 = _default;
exports.default = _default2;

var StaticInfo = function StaticInfo(_ref) {
  var children = _ref.children;
  return _react.default.createElement(context.Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, children);
};

var withStaticInfo = function withStaticInfo(Comp) {
  return function (props) {
    return _react.default.createElement(StaticInfo, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, function (staticInfo) {
      return _react.default.createElement(Comp, _extends({}, props, {
        staticInfo: staticInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }));
    });
  };
};

exports.withStaticInfo = withStaticInfo;

function useStaticInfo() {
  return _react.default.useContext(context);
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(context, "context", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(StaticInfo, "StaticInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(withStaticInfo, "withStaticInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(useStaticInfo, "useStaticInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _components_scrollToTop___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _styles_project_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var _styles_project_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_project_css__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// components
// import { Img } from '../components/image-loader'
// styles
//
var Hilights=/*#__PURE__*/function(_React$Component){_inherits(Hilights,_React$Component);var _super=_createSuper(Hilights);function Hilights(){var _this;_classCallCheck(this,Hilights);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_defineProperty(_assertThisInitialized(_this),"render",function(){return[/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Head"],{key:"head"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{charSet:"UTF-8"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title",null,"joshuar(design)")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{key:"hilights-project",className:"project hilights"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"summary"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"/* Hilights */"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Product design for a music collaboration app that facilitates conversations around specific sections of recordings.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"project-content"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/hilights/cover.png",cloudinary:true,ratio:"511x289"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"/* wireframes */"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/hilights/hilights-wireframe-sketches.jpg",cloudinary:true,ratio:"26x11",className:"rounded"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"/* mobile sitemap */"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/hilights/hilights-sitemap-mobile.jpg",cloudinary:true,ratio:"8x5",className:"rounded"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"/* desktop sitemap */"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/hilights/hilights-sitemap-desktop.jpg",cloudinary:true,ratio:"8x5",className:"rounded"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"/* mobile wireframes */"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/hilights/hilights-wireframes-mobile",cloudinary:true,ratio:"900x683"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"/* desktop wireframe prototype */"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/hilights/hilights-wireframe-prototype-desktop",cloudinary:true,ratio:"8x5",className:"rounded"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"/* mobile comp */"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/hilights/hilights-mobile",cloudinary:true,ratio:"2101x1500",className:"rounded"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"/* desktop comps */"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/hilights/hilights-macbook",cloudinary:true,ratio:"2101x1700",className:"rounded"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/hilights/hilights-imac",cloudinary:true,ratio:"2101x1700",className:"rounded"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"../../",href:"/",className:"back-link"},"back")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_scrollToTop___WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],{key:"scroll-button",scrollStepInPx:"80",delayInMs:"16.66"})];});return _this;}return Hilights;}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (Hilights);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _components_scrollToTop___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _styles_project_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var _styles_project_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_project_css__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// components
// import { Img } from '../components/image-loader'
// styles
//
var Lumen=/*#__PURE__*/function(_React$Component){_inherits(Lumen,_React$Component);var _super=_createSuper(Lumen);function Lumen(){var _this;_classCallCheck(this,Lumen);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_defineProperty(_assertThisInitialized(_this),"render",function(){return[/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Head"],{key:"head"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{charSet:"UTF-8"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title",null,"joshuar(design)")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{key:"lumen-project",className:"project lumen"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"summary"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"/* Lumen */"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"User research, usability testing, and UI wireframes for a LMS (Learning Management System) that provides open source textbooks.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"project-content"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/lumen/cover.png",cloudinary:true,ratio:"511x289",className:"rounded"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"/* app audit */"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/lumen/lumen-audit",cloudinary:true,ratio:"16x7",className:"white rounded"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"/* user research */"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"three-up"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"three-up-wrapper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/lumen/lumen-research-01",cloudinary:true,ratio:"956x726",className:"rounded"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"three-up-wrapper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/lumen/lumen-research-02",cloudinary:true,ratio:"956x726",className:"rounded"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"three-up-wrapper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/lumen/lumen-research-03",cloudinary:true,ratio:"956x726",className:"rounded"})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"/* personas */"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/lumen/lumen-personas-02",cloudinary:true,ratio:"502x325",className:"white rounded"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"/* card sorting for IA */"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"three-up"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"three-up-wrapper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/lumen/lumen-card-sorting-01",cloudinary:true,ratio:"12x12",className:"rounded"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"three-up-wrapper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/lumen/lumen-card-sorting-02",cloudinary:true,ratio:"12x12",className:"rounded"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"three-up-wrapper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/lumen/lumen-card-sorting-03",cloudinary:true,ratio:"12x12",className:"rounded"})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"/* wireframes */"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"two-up"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"two-up-wrapper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/lumen/lumen-ac-wireframes",cloudinary:true,ratio:"2400x1453",className:"white rounded"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"two-up-wrapper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/lumen/lumen-qe-wireframes",cloudinary:true,ratio:"2400x1453",className:"white rounded"})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"/* assessment creator */"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"two-up"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"two-up-wrapper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/lumen/lumen-ac-02",cloudinary:true,ratio:"2880x2936",className:"rounded"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"two-up-wrapper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/lumen/lumen-ac-03",cloudinary:true,ratio:"2880x2686",className:"rounded"})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"/* question editor */"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/lumen/lumen-wireframe-05-preview",cloudinary:true,ratio:"2400x1453",className:"white rounded"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"../../",href:"/",className:"back-link"},"back")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_scrollToTop___WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],{key:"scroll-button",scrollStepInPx:"80",delayInMs:"16.66"})];});return _this;}return Lumen;}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (Lumen);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _components_scrollToTop___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _styles_project_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var _styles_project_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_project_css__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// components
// import { Img } from '../components/image-loader'
// styles
//
var Idealist=/*#__PURE__*/function(_React$Component){_inherits(Idealist,_React$Component);var _super=_createSuper(Idealist);function Idealist(){var _this;_classCallCheck(this,Idealist);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_defineProperty(_assertThisInitialized(_this),"render",function(){return[/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Head"],{key:"head"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{charSet:"UTF-8"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title",null,"joshuar(design)")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{key:"idealist-project",className:"project idealist"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"summary"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"/* Idealist */"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"UX design & front-end engineering for Idealist.org, an international non-profit job board with a social mission to create more good in the world by helping people turn their intentions into actions.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"project-content"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/idealist/cover",cloudinary:true,ratio:"900x646"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"/* responsive search */"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/idealist/idealist-search-mobile",cloudinary:true,ratio:"1800x796",className:"rounded"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"/* our team + about us */"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/idealist/idealist-team-mobile",cloudinary:true,ratio:"1800x1296",className:"rounded"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"/* desktop search */"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/idealist/idealist-search-desktop.jpg",cloudinary:true,ratio:"2560x1600",className:"rounded scrollable"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"../../",href:"/",className:"back-link"},"back")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_scrollToTop___WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],{key:"scroll-button",scrollStepInPx:"80",delayInMs:"16.66"})];});return _this;}return Idealist;}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (Idealist);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(15);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2.default)(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Spinner;

var _react = _interopRequireDefault(__webpack_require__(0));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Spinner.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).enterModule;
  enterModule && enterModule(module);
})();

function Spinner() {
  return _react.default.createElement("div", {
    className: "react-static-loading",
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'center',
      padding: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, _react.default.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "\n        @keyframes react-static-loader {\n          0% {\n            transform: rotate(0deg)\n          }\n          100% {\n            transform: rotate(360deg)\n          }\n        }\n      "), _react.default.createElement("svg", {
    style: {
      width: '50px',
      height: '50px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, _react.default.createElement("circle", {
    style: {
      transformOrigin: '50% 50% 0px',
      animation: 'react-static-loader 1s infinite',
      r: 20,
      stroke: 'rgba(0,0,0,0.4)',
      strokeWidth: 4,
      cx: 25,
      cy: 25,
      strokeDasharray: 10.4,
      strokeLinecap: 'round',
      fill: 'transparent'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })));
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Spinner, "Spinner", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Spinner.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)(module)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, "/* Project */\n", ""]);



/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("cloudinary-react");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Imports
// Plugins
var plugins=[{location:"/Users/joshuar/Projects/jr-xix",plugins:[],hooks:{}}];// Export em!
/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onVisible;

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).enterModule;
  enterModule && enterModule(module);
})();

if (typeof document !== 'undefined') {
  // Polyfill that shiz!
  __webpack_require__(48); // Do manual polling for intersections every second. This isn't very fast
  // but should handle most edge cases for now


  IntersectionObserver.POLL_INTERVAL = 1000;
}

var list = new Map();

function onVisible(element, callback) {
  if (list.get(element)) {
    return;
  }

  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      // Edge doesn't support isIntersecting. intersectionRatio > 0 works as a fallback
      if (element === entry.target && (entry.isIntersecting || entry.intersectionRatio > 0)) {
        io.unobserve(element);
        io.disconnect();
        callback();
      }
    });
  });
  io.observe(element);
  list.set(element, true);
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(list, "list", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Visibility.js");
  reactHotLoader.register(onVisible, "onVisible", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Visibility.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)(module)))

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_joshuar_Projects_jr_xix_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _Users_joshuar_Projects_jr_xix_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_joshuar_Projects_jr_xix_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2__);
Object(_Users_joshuar_Projects_jr_xix_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2__["setHasBabelPlugin"])();var universalOptions={loading:function loading(){return null;},error:function error(props){console.error(props.error);return/*#__PURE__*/React.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.");}};var t_0=_Users_joshuar_Projects_jr_xix_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/containers/404",load:function load(){return Promise.all([Promise.resolve(/* import() | src/containers/404 */).then(__webpack_require__.bind(null, 36))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/containers/404');},resolve:function resolve(){return /*require.resolve*/(36);},chunkName:function chunkName(){return"src/containers/404";}}),universalOptions);var t_1=_Users_joshuar_Projects_jr_xix_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/containers/design",load:function load(){return Promise.all([Promise.resolve(/* import() | src/containers/design */).then(__webpack_require__.bind(null, 37))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/containers/design');},resolve:function resolve(){return /*require.resolve*/(37);},chunkName:function chunkName(){return"src/containers/design";}}),universalOptions);var t_2=_Users_joshuar_Projects_jr_xix_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/containers/design/hilights",load:function load(){return Promise.all([Promise.resolve(/* import() | src/containers/design/hilights */).then(__webpack_require__.bind(null, 18))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/containers/design/hilights');},resolve:function resolve(){return /*require.resolve*/(18);},chunkName:function chunkName(){return"src/containers/design/hilights";}}),universalOptions);var t_3=_Users_joshuar_Projects_jr_xix_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/containers/design/lumen",load:function load(){return Promise.all([Promise.resolve(/* import() | src/containers/design/lumen */).then(__webpack_require__.bind(null, 19))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/containers/design/lumen');},resolve:function resolve(){return /*require.resolve*/(19);},chunkName:function chunkName(){return"src/containers/design/lumen";}}),universalOptions);var t_4=_Users_joshuar_Projects_jr_xix_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/containers/design/idealist",load:function load(){return Promise.all([Promise.resolve(/* import() | src/containers/design/idealist */).then(__webpack_require__.bind(null, 20))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/containers/design/idealist');},resolve:function resolve(){return /*require.resolve*/(20);},chunkName:function chunkName(){return"src/containers/design/idealist";}}),universalOptions);var t_5=_Users_joshuar_Projects_jr_xix_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/containers/code",load:function load(){return Promise.all([Promise.resolve(/* import() | src/containers/code */).then(__webpack_require__.bind(null, 42))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/containers/code');},resolve:function resolve(){return /*require.resolve*/(42);},chunkName:function chunkName(){return"src/containers/code";}}),universalOptions);var t_6=_Users_joshuar_Projects_jr_xix_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/containers/about",load:function load(){return Promise.all([Promise.resolve(/* import() | src/containers/about */).then(__webpack_require__.bind(null, 38))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/containers/about');},resolve:function resolve(){return /*require.resolve*/(38);},chunkName:function chunkName(){return"src/containers/about";}}),universalOptions);var t_7=_Users_joshuar_Projects_jr_xix_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/containers/stories",load:function load(){return Promise.all([Promise.resolve(/* import() | src/containers/stories */).then(__webpack_require__.bind(null, 39))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/containers/stories');},resolve:function resolve(){return /*require.resolve*/(39);},chunkName:function chunkName(){return"src/containers/stories";}}),universalOptions);var t_8=_Users_joshuar_Projects_jr_xix_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/containers/stories/aila.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src/containers/stories/aila */).then(__webpack_require__.bind(null, 41))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/containers/stories/aila.js');},resolve:function resolve(){return /*require.resolve*/(41);},chunkName:function chunkName(){return"src/containers/stories/aila";}}),universalOptions);// Template Map
/* harmony default export */ __webpack_exports__["default"] = ({'../src/containers/404':t_0,'../src/containers/design':t_1,'../src/containers/design/hilights':t_2,'../src/containers/design/lumen':t_3,'../src/containers/design/idealist':t_4,'../src/containers/code':t_5,'../src/containers/about':t_6,'../src/containers/stories':t_7,'../src/containers/stories/aila.js':t_8});var notFoundTemplate="../src/containers/404";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollTo;

var _raf = _interopRequireDefault(__webpack_require__(33));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).enterModule;
  enterModule && enterModule(module);
})();

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} //


var ease = function ease(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

var defaultOptions = {
  duration: 800,
  offset: 0,
  context: typeof document !== 'undefined' && window
};

var getTop = function getTop(element, offset, contextScrollHeight, contextVisibleHeight) {
  return Math.min(element.getBoundingClientRect().top + window.pageYOffset + offset, contextScrollHeight - contextVisibleHeight);
};

var getPosition = function getPosition(start, end, elapsed, duration, easeFn) {
  if (elapsed > duration) return end;
  return start + (end - start) * easeFn(elapsed / duration);
};

function scrollTo(element, options) {
  var _defaultOptions$optio = _objectSpread({}, defaultOptions, options),
      duration = _defaultOptions$optio.duration,
      offset = _defaultOptions$optio.offset,
      context = _defaultOptions$optio.context;

  var start = window.pageYOffset;
  var innerHeight;
  var scrollHeight;

  if (context !== window) {
    innerHeight = context.offsetHeight;
    scrollHeight = context.scrollHeight;
  } else {
    innerHeight = window.innerHeight;
    scrollHeight = document.body.scrollHeight;
  }

  var clock = Date.now() - 1;
  return new Promise(function (resolve) {
    var step = function step() {
      var elapsed = Date.now() - clock;
      var end = typeof element === 'number' ? parseInt(element) : getTop(element, offset, scrollHeight, innerHeight);

      if (context !== window) {
        context.scrollTop = getPosition(start, end, elapsed, duration, ease);
      } else {
        window.scroll(0, getPosition(start, end, elapsed, duration, ease));
      }

      if (typeof duration === 'undefined' || elapsed > duration) {
        resolve();
        return;
      } // Sanity check to prevent taking over the scroll once we prematurely got to the element


      if (start === end) {
        resolve();
        return;
      }

      (0, _raf.default)(step);
    };

    step();
  });
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ease, "ease", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(defaultOptions, "defaultOptions", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(getTop, "getTop", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(getPosition, "getPosition", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(scrollTo, "scrollTo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)(module)))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("raf");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.withRoutePathContext = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _ = __webpack_require__(12);

var _StaticInfo = __webpack_require__(16);

var _utils = __webpack_require__(13);

var _Location = _interopRequireDefault(__webpack_require__(35));

var _Spinner = _interopRequireDefault(__webpack_require__(23));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js",
    _class,
    _temp;

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).enterModule;
  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var RoutePathContext = _react.default.createContext();

var withRoutePathContext = function withRoutePathContext(Comp) {
  return function (props) {
    return _react.default.createElement(RoutePathContext.Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, function (routePath) {
      return _react.default.createElement(Comp, _extends({}, props, {
        routePath: routePath,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }));
    });
  };
};

exports.withRoutePathContext = withRoutePathContext;
var componentCache = new WeakMap();

function with404Prop(Component) {
  // If the wrapped Component is currently in cached, return it from cache.
  if (componentCache.has(Component)) {
    return componentCache.get(Component);
  } // Otherwise, create a new wrapped Component...


  var WrappedComponent = function WrappedComponent(props) {
    return _react.default.createElement(Component, _extends({
      is404: true
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }));
  }; // ...and cache it


  componentCache.set(Component, WrappedComponent);
  return WrappedComponent;
}

var _default = (0, _StaticInfo.withStaticInfo)((_temp = _class = /*#__PURE__*/function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Routes);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Routes)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "safeForceUpdate", function () {
      if (_this.unmounted) {
        return;
      }

      _this.forceUpdate();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getComponentForPath", function (routePath) {
      var Loader = _this.props.Loader; // Clean the path

      routePath = (0, _utils.getRoutePath)(routePath); // Try and get the component

      var Comp = _.templatesByPath[routePath]; // Detect a 404

      var is404 = routePath === '404'; // Detect a failed template

      if (_.templateErrorByPath[routePath]) {
        is404 = true;
        Comp = _.templatesByPath['404'];
      } // Detect an unloaded template
      // TODO:suspense - This will become a suspense resource


      if (!Comp) {
        if (is404) {
          throw new Error('This page template could not be found and a 404 template could not be found to fall back on. This means something is terribly wrong and you should probably file an issue!');
        }

        ;

        _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Promise.all([(0, _.prefetch)(routePath, {
                    priority: true
                  }), new Promise(function (resolve) {
                    return setTimeout(resolve, "200");
                  })]);

                case 2:
                  _this.safeForceUpdate();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }))();

        return Loader;
      }

      return is404 ? with404Prop(Comp) : Comp;
    });

    return _this;
  }

  _createClass(Routes, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _.templateUpdated.cb = function () {
        return _this2.safeForceUpdate();
      };

      this.offLocationChange = (0, _Location.default)(function () {
        return _this2.safeForceUpdate();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmounted = true;
      if (this.offLocationChange) this.offLocationChange();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          staticInfo = _this$props.staticInfo;
      var routePath = (0, _utils.isSSR)() ? staticInfo.path : (0, _.getCurrentRoutePath)();
      var Comp = this.getComponentForPath(routePath);
      return _react.default.createElement(RoutePathContext.Provider, {
        value: routePath,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, children ? children({
        routePath: routePath,
        getComponentForPath: this.getComponentForPath
      }) : _react.default.createElement(Comp, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Routes;
}(_react.Component), _defineProperty(_class, "defaultProps", {
  Loader: _Spinner.default
}), _temp));

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RoutePathContext, "RoutePathContext", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(withRoutePathContext, "withRoutePathContext", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(componentCache, "componentCache", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(with404Prop, "with404Prop", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)(module)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).enterModule;
  enterModule && enterModule(module);
})();

var locationSubscribers = [];

var triggerLocationChange = function triggerLocationChange(location) {
  return locationSubscribers.forEach(function (s) {
    return s(location);
  });
};

var onLocationChange = function onLocationChange(cb) {
  locationSubscribers.push(cb);
  return function () {
    locationSubscribers = locationSubscribers.filter(function (d) {
      return d !== cb;
    });
  };
};

init();
var _default = onLocationChange;
var _default2 = _default;
exports.default = _default2;

function init() {
  if (typeof document !== 'undefined') {
    var oldPopstate = window.onpopstate;

    window.onpopstate = function () {
      if (oldPopstate) {
        oldPopstate.apply(void 0, arguments);
      }

      triggerLocationChange(window.location);
    };

    ['pushState', 'replaceState'].forEach(function (methodName) {
      var old = window.history[methodName];

      window.history[methodName] = function () {
        setTimeout(function () {
          return triggerLocationChange(window.location);
        }, 0);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return old.apply(window.history, args);
      };
    });
  }
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(locationSubscribers, "locationSubscribers", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(triggerLocationChange, "triggerLocationChange", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(onLocationChange, "onLocationChange", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(init, "init", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)(module)))

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
//
/* harmony default export */ __webpack_exports__["default"] = (function(){return[/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Head"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title",null,"joshuar(not found)")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"404 - Not found."))];});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _components_scrollToTop___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _design_hilights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _design_lumen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var _design_idealist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20);
/* harmony import */ var _styles_projects_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77);
/* harmony import */ var _styles_projects_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_projects_css__WEBPACK_IMPORTED_MODULE_8__);
// components
// routes
// styles
//
/* harmony default export */ __webpack_exports__["default"] = (function(){return[/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Head"],{key:"head"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title",null,"joshuar(product design)")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{key:"design-projects",className:"design projects"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"project-summary"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"/* Hilights */"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Product design for a music collaboration app that facilitates conversations around specific sections of recordings."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"project-cover"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"],{href:"./design/hilights",to:"design/hilights"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/hilights/cover.png",cloudinary:true,ratio:"511x289"})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Router"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_design_hilights__WEBPACK_IMPORTED_MODULE_5__["default"],{path:"hilights"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_design_lumen__WEBPACK_IMPORTED_MODULE_6__["default"],{path:"lumen"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_design_idealist__WEBPACK_IMPORTED_MODULE_7__["default"],{path:"idealist"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"project-summary"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"/* Lumen Learning */"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"User research, usability testing, and UI wireframes for a LMS (Learning Management System) that provides open source textbooks."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"project-cover"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"],{href:"./design/lumen",to:"design/lumen"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/lumen/cover.png",cloudinary:true,ratio:"900x564",className:"rounded"})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"project-summary"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"/* Idealist */"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"UX design & front-end engineering for Idealist.org, an international non-profit job board with a social mission to create more good in the world by helping people turn their intentions into actions."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"project-cover"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"],{href:"./design/idealist",to:"design/idealist"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{url:"jr-xix/idealist/cover.png",cloudinary:true,ratio:"900x646"}))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_scrollToTop___WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],{key:"scroll-button",scrollStepInPx:"80",delayInMs:"16.66"})];});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _styles_about_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81);
/* harmony import */ var _styles_about_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_about_css__WEBPACK_IMPORTED_MODULE_3__);
// components
// styles
//
/* harmony default export */ __webpack_exports__["default"] = (function(){return[/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Head"],{key:"head"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title",null,"joshuar(about)")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{key:"content",className:"about content"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"profile-pic-wrapper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],{url:"jr-xix/joshua-richey",ratio:"1x1",duration:"1s",className:"profile-pic rounded bordered",indicator:true,cloudinary:true})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"bio"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Joshua Richey is a user experience designer and front-end developer with > 12 years of experience researching, designing, and building websites & applications for humans."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"He has designed products for Pink Floyd, Skydance Entertainment, and the Grand Canyon Association, which he thinks is neat. He was the lead web designer at Idealist.org (an international jobs board for nonprofits) for ~5 years, where he spearheaded human-centered design efforts, built and maintained a scalable design system, and rewrote the front end using htlm5, postCSS, and react."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"When not in front of his screen, he\u2019s probably out walking around with his dog. When in front of the screen, he probably looks like this:"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"working-pic-wrapper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],{url:"jr-xix/working",ratio:"1x1",duration:"1s",className:"rounded bordered",indicator:true,cloudinary:true}))))];});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_projects_code_imgLoad___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _styles_stories_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
/* harmony import */ var _styles_stories_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_stories_css__WEBPACK_IMPORTED_MODULE_4__);
// components
// styles
//
/* harmony default export */ __webpack_exports__["default"] = (function(){return[/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Head"],{key:"head"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title",null,"joshuar(stories)")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{key:"content",className:"story content"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Stories"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"As We Come So We Go"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"./aila"},"Aila, The Winged Unicorn"))))];});

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, ".story.content {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: left;\n      align-items: left;\n  width: 100%;\n  letter-spacing: .01rem;\n}\n\n.story h1 {\n  margin-bottom: 2rem;\n  text-align: center;\n  color: #46a789;\n}\n\n.story li {\n  line-height: 2.5;\n}\n\n.section-title {\n  color: #46a789;\n  text-align: center;\n  margin-top: 3rem;\n}", ""]);



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_stories_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _styles_stories_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_stories_css__WEBPACK_IMPORTED_MODULE_2__);
// styles
//
/* harmony default export */ __webpack_exports__["default"] = (function(){return[/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Head"],{key:"head"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title",null,"joshuar(stories - Aila, The Winged Unicorn)")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{key:"content",className:"story content"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Aila, The Winged Unicorn"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"I: The Day"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Dream"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The young unicorn Aila was dozing in the meadow in the hour past dawn \u2014 in the hour before day \u2014 when she awoke with a jump. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She had been dreaming of the wishing ceremony, and in her dream she had walked down the long aisles past the Minotaurs, and around the radiant blue pool where the beloved Siren sisters sang their beautiful harmonies, and then up to the great dais where Osiler the Great Stallion waited, and she stepped her manicured hooves into the divots in the stone that had worn there after eons of similar events, and she froze. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She knew that she must sing, and she knew the song she must sing \u2013 she\u2019d been practicing it for the past two months day and night \u2013 but she could not utter a sound. She looked around at the patient elders who stood in a semi-circle behind the Great Stallion nervously. Elsie, her eldest sister was on the far left and she appeared annoyed. Beside her, Odon, her father, dark and grave, and the largest of the unicorns in the room apart from Osiler. Then came her older cousins, Liba and Pico, and her aunts, and her uncles, and well, everyone. And on her far right-hoof, her mother, Eranor, slender and tall, and purely white with stunning green eyes. Eranor nodded her onward when their eyes met, and that slight nudge broke Aila from her trepidatious trance. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She briefly collected her thoughts and recalled the words that laid out her wish. Words that in the human\u2019s language would translate to falling in love with a handsome tall stallion and raising beautiful and kind foals. It was what nearly every young unicorn maiden had wished for, for several eons. But when she set herself and opened her mouth, her breath came out, but Aila found that she could not make a sound."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Awakening"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She bolted upright which frightened Squalmy, her bunny friend who had been sleeping at her side for warmth, and he darted into the forest through the tall reeds. Three butterflies flitted up into the morning air, and one flitted right past her eyelashes and she flicked her tail harmlessly in mock annoyance."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh jee,\u201D she neighed aloud, Today ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"is")," the wishing ceremony!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She hopped a few times, kicking the leftover sleep out of her haunches, and sang out a long neigh, both to test out her voice and to express her joy to her friends in the meadow. The wishing ceremony was only the most important day in a young unicorn\u2019s life, and she\u2019d been waiting for it and dreaming about it for all of her 100 years. Well, to be fair she\u2019d only been aware of it for 99 1/2 years, so that would be a more accurate number if you\u2019re particular about such things. But as she bounded towards the endless golden fields of Naranthal where the elders would surely be gathered, something small troubled the young unicorn. She\u2019d never had a ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"bad")," dream about the wishing ceremony. Why now, she wondered? "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Naranthal was still slumbering when she arrived, so she grazed a bit on the tall golden grass. Her head was full of the events to come later in the day. The namings, the blinding, the dream casting, and finally her wishing. She was especially excited about her cousin Liba\u2019s new foal who had just turned twenty and was to be given his name today. Aila had always called him Jialy, but many of the other unicorn\u2019s names for him were splendid as well. And she was excited for Tabor who was to be blinded for the year so that he could lead the herd to the best pastures - it was a special honor reserved for only the eldest and wisest. And of course Eranor would be casting dreams for them this year, as it was the fourth convergence of the three important equine planets, and that meant that she, Aila, would be in charge of caring for her dam when the ceremonies and festivities were over. Which meant that she would have to graze even more than usual today if her horn was to have enough energy to share! It was going to be a big day!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She was bodiless in such thoughts when Fisko the fox came bounding out of the forest into the tall grass excitedly. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh! Aila, Aila! Come quick! Follow me! It\u2019s trouble!\u201D he cried."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhat is it, Fisko, what\u2019s the trouble?\u201D She asked. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She didn\u2019t really mouth those words, though, because, as you know, horses and unicorns can\u2019t speak. We can only whinny, and neigh, and snort, and huff, and groan, and grunt, and sigh, and squeal, and sing, and bray, and roar... and okay, we can make a whole sweep of sounds, but you know what I mean. We certainly don\u2019t ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"talk"),". No, instead, Aila just thought her thoughts, and ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"sent")," them. But the effect was the same, so what\u2019s the difference?"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CIt\u2019s Landry and Squalmy! Hurry!\u201D The fox urged. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila complied and followed Fisko into the woods full of her friends Cedar, and Oak, and Douglas, and Creek, and Slug, and Beetle, and Fern, and Bramble, and Ivy, and... I\u2019m doing it again, aren\u2019t I. I\u2019ll try to be more concise. She followed the fox into the woods, and though Fisko was fast, she was untroubled by keeping up. She was a unicorn and if she wanted she could run super, super, super fast. But she stayed behind Fisko to see what the trouble was."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Landry was a bunny she had known for many summers, and when she saw his body flat on the ground and motionless, she whinnied in shock. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhat\u2019s happened to him!?\u201D she exclaimed. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWell, him and Squalmy were hopping together, and each was trying to out-hop the other, and that\u2019s when I saw them and I laughed because they were about to hop themselves into the mud! And it\u2019s still funny, and if Landry wasn\u2019t fallen I\u2019d laugh again right now, because Squalmy did hop right into the mud, and when it was Landry\u2019s turn to hop next, he didn\u2019t! And so Squalmy hopped on out and thumped Landry in the ear and then Landry kicked Squalmy back and then they traded hops again but on each other\u2019s heads. And they were real upset with each other, too, and then they traded such very not nice words with each other, and then Squalmy hopped off towards the brook, and Landry tried to hop away too but when he jumped up into the air he just sort of froze, and then fell, and he\u2019s still here where he fell on the ground, right here...\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh Landry, you poor poor thing!\u201D Thought the unicorn. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila bent her nose down to the ground, where her friend Landry lay motionless, and she nudged his furry body with her snout, and she was filled with such a tremendous sadness that a tear rose in her eye. And that tear rolled down her cheek, and it rolled off into the air beneath her cheek, and the tear had just decided to make its way in a direct path to the forest floor when it was pierced by one of the sharpest things in the world: a unicorn horn. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The tear exploded into a colorful display. Purple, and pink. and red, and orange, and green, and teal, and blue, and a thousand other colors that only unicorns can see erupted from the spot where there was once a droplet of unicorn eye water. And it flashed out in a great cloud that disappeared almost instantly. But, when it was done, Aila\u2019s horn had retained some of the color, and it glowed warmly in the forest shade."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"What happened next both startled and amazed Fisko and the forest of friends surrounding Aila and the rabbit. She sharply thrust her horn into his side and picked him up a few inches off the ground. And his body stretched out and his eyes went wide. If you were watching closely you would have noticed the color moving from Aila\u2019s horn in a spiral down into Landry\u2019s body, and if you were watching really close you might have noticed that the color of his fur changed from brown to slightly ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"more")," brown. If you were here to see it, that is. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"When she lifted her head, Aila looked down at her friend, who blinked his eyes three times in quick succession, and then scratched his right ear vigorously with his right foot. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh Aila! You saved poor Landry! I knew you could do it!! Hahaha!!!!\u201D And with that, Fisko the fox leapt over a log and out of sight. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CMister Landry,\u201D Aila looked down at the rabbit. \u201CYou will make haste to apologize to my friend Mister Squalmy, now, won\u2019t you? I believe he owes you one as well. I believe both of your feelings were hurt today.\u201D "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYes ma\u2019am, absolutely I will. And thank you ma\u2019am, I don\u2019t know what happened, but I feel.. I feel great!! And Landry bounded off."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila was left alone in the forest. And even if you were here you wouldn\u2019t have noticed this: the quiet unicorn closed her eyes and sighed and then she swallowed, and for a moment she felt as sad and empty as a unicorn could possibly feel, as though she had swallowed a tiny bite of death."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Morning"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The moment passed and she found her joy as she jumped over a muddy patch on her way back to the others. Aila loved to jump, and she did so merrily several times on her way. And she saw a lovely patch of dark green clover which she snacked on momentarily, which whet her appetite for a more substantial grazing. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"When she returned to the fields of Naranthal the other unicorns were mostly all still asleep, and that was fine by her. She had an empty belly to tend! And she grazed and grazed, and when she was full she ate some more because she knew she would need her energy later. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Liba was the first to rise and when she saw Aila she made her way over and bowed customarily. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CGracious morning to you, young filly, how are you enjoying this day so far?\u201D Liba inquired."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CToday has been grand. I am excited, of course, about the ceremonies. I restored Landry again, and that left me a bit cold, but I\u2019ve warmed myself on this delicious grass and my heart is full again. And you, Liba, are you happy today? Are you excited to find Jialy\u2019s true name?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI am\u201D, Liba emoted, but she looked aside at the rolling hills. \u201CI am just nervous because Levnis feels strongly that the foal\u2019s name will be Ogok, and as you know I would much prefer Ansil. But of course it isn\u2019t up to me.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI am sure that Jialy will love his name no matter what it turns out to be!\u201D, Aila encouraged."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI am sure. But Ogok!?\u201D Liba scoffed, \u201CI\u2019d cry\u201D."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CSurely not, Liba! You will find joy in his name because it is his true sound. You only fear this name because you do not believe it is correct. But if it comes to be, you will know, and your love will cover this fear. You know this!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI do,\u201D she replied \u201Cbut still, Ogok the Great!?\u201D "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI admit that it sounds... a bit silly.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"And they both laughed, and they grazed, and Liba disturbed a sleeping Jay which she chased playfully for a bit, and Aila discovered a bit of golden clover, and thought to herself, \u201CWhat a wonderful day this is turning out to be!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"While she grazed, she thought longingly of her wish. She had of course been friends with the stallions of her herd for, well, for forever. But to truly love.. that must be the best feeling in the world, she thought. \u2019I bet it is magical. And my stallion will be the tallest in the heard, even taller than Odon or Osiler. He\u2019ll be all black, but with a hint of auburn that flashes in the sunlight, and he will be kind and powerful, and we will make a thousand foals.\u2019 And her heart was aflutter, as she grazed and fantasized about her wish. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"But a distant reservation disturbed her reveries. Though it was unclear what, something pulled on her, nagged her, and her dreaming dissolved. And she paused and looked around at the field, and at the rolling hills, and her friend the bee buzzing by, and the forest, and the rousing heard of beautiful rising unicorns, and she took a deep breath, and she cantered off to make her preparations for the day."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"II: The Ceremony"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Namings"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"There were to be four namings that day, and they came first so that the newest named could participate in the rest of the ceremonies. Names are very important to unicorns, for they serve to focus of all their magical energy. Without a name, a unicorn can run fast, but not super super super fast. And they can light their horns in a marvelous display, but they cannot channel that energy into acts of intention. They can bless, and they can send thoughts, but they cannot bless an individual creature, and they cannot project their thoughts as more than quiet hints. They can heal, but they cannot revive, and so for that reason, they are cared for and protected by the entire herd, and they are thought of as children without true individualism. But all of that changes with the passage of the naming ceremony."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The foal whom Aila called Jialy was last to receive his name that day. Aila\u2019s names for the others were Morsha, Esper, and Thedlin. Morsha was a fine golden brown young mare, with a tremendously long blonde mane. Aila cared greatly for her as her dam was Aila\u2019s aunt Liba. Aila loved all of her herd \u2013 it was her family after all \u2013 but she was especially friendly with Liba."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Liba had a rebellious streak in her spirit that was matched by a jagged red stripe down her golden right flank. On several occasions, Aila had joined Liba on long walks far away from the herd, and they talked by opening and sharing their hearts and swirling their unformed thoughts together. Once they had even brazenly approached the gates to the other realms together, and though Aila was quite apprehensive about it, they put their noses through the distorted, swirling, images and peered into the world of The Men. They only peeked through for a moment, but what they saw confounded Aila and Liba both. For days Aila replayed disjointed scenes of Men and things that made little sense to her, but Lessie was unbothered by such thoughts. Aila\u2019s curiosity festered, and one day she has brought it to Liba, but Liba said only that there was no need to worry themselves about the lives of Men, that they were trivial and simple, and perhaps she should have never taken Aila there. And they never did go back there together, but they did maintain a habit of going on long adventures making friends with all the beasts of their world. And thought Liba never went back to the gates, Aila one day would."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"At sundown, Morsha and the three others to be named approached the curved trees that marked the entrance to the Minotaur\u2019s maze with the rest of the heard at their backs. Their bodies together were striking in the waning light. Morsha was bright gold; Esper wore dappled blue; Thedlin was in white with auburn forelegs, tail, and mane; and of course Jialy was wearing his shaggy dark brown coat. In the waning light of the sun and the tinge of light from the moons, their four hides each had a distinct glow about them, while in collective they simply shone. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"From the shadows of the two great curved trees at the edge of the forest emerged Osiler. Without delay he approached the four foals and when only several feet away, he rose up on his hind legs and stomped forcibly down with his front hooves. There was a great thunderous sound, and a cloud of mist arose at his feet that rose upward revealing a fresh spring of pure crystalline water. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CFirst.\u201D He boomed. And he looked down to Morsha. Because he was the Great Stallion he did not have a name for her. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Nervous but excited, Morsha stepped forward into the pool. It glowed gently where her hooves touched, but she only sank in a few inches. She took two more small steps towards the Great Stallion and looked shyly up at him."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhat is your name?\u201D Osiler cried. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The rest of the heard, about 27 unicorns in total, were gathered behind the namelings in a wide arc. The first to call out was Morsha\u2019s dam, Rostly. She stepped forward, and responded, \u201CTinip!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"And from the horn of the unicorn standing in the pool came a strong but gentle blue light. And Rostly stepped back."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Her sire, Trally, stepped forth. \u201CIoni!\u201D He cried."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"And the horn of the unicorn emitted a soft orange glow."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CKalee!\u201D Cried Liba. And the horn glowed somewhat brighter orange."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila stepped forward to take her turn. \u201CMorsha!\u201D She cried. And the horn glowed a wonderful bright pink. It was the brightest yet, and she stepped back to her place hopefully."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CKelve!\u201D Cried Pico, the young mare\u2019s uncle. The horn shone a pale green, and dimmed considerably."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CTessa!\u201D Cried another. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CSendry!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CEva!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CLeston!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CShai!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"And after a long silence, and after the light from her horn had faded, she looked up at Osiler with a newfound poise and replied, \u201CMy name is Morsha.\u201D "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"And with that, the horn on every unicorn there in the fledgling darkness by the forest cast a marvelous explosion of bright pink light, and Morsha\u2019s horn was brightest of all. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"When the pink light dimmed, Osiler bowed his head, and Morsha trotted back to join the row of unicorns behind her."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Breglin and Thorsh\u2019s names were chosen in a similar fashion, and while Aila\u2019s name Esper made a strong showing, she was joyed to learn Breglin\u2019s true name. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"When Jialy stepped into the spring, Liba impetuously stepped forward. And when Osiler demanded \u201CWhat is your name?\u201D, Liba immediately cried out \u201CAnsil!\u201D "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Jialy\u2019s horn intensely glowed a miraculous dark blue. And as quick as that, Jialy replied \u201CMy name is Ansil\u201D, and the forest turned blue with the light of the unicorns."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Blinding"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CNow Tabor will step forward.\u201D Demanded Osiler. And Tabor did."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWe know Tabor, all of us. And we know his gentle heart and wise insight. We all know Tabor\u2019s joyful yellow song, and we all know the forest he tends, as it is verdant and lively and home to many friends. Not all know of Tabor\u2019s sacrifice, but today I will inform you. Three moons past, a group of 4 of The Men came through the gates. These Men were not like the ones we have met before, but they were angry and hostile and they meant us harm. Harm! They had long knives as sharp as our horns, but they had no magic. Tabor was able to drive these Men back through the gates, and he sealed it from passage from their dominion for one hundred years as is custom. But he paid a tax, Unicorns. He paid a tax that we must all bear, for one Men he made fall with his horn, and for that life his color has dimmed. A small matter, though, for today it will replenish.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CUnicorns rejoice, for Tabor has been chosen, and we will now perform the blinding!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Osiler raised his right hoof, and he splashed it down heavily into the spring. And out of a new mist, a translucent show of luminescence in the form of a unicorn became partway visible. This was Elphren, the currently blinded! And Elphren turned to face Tabor, and with two graceful motions he thrust his intangible horn into Tabor\u2019s eyes. As he did this, wispy threads of light flew away from his form and into Tabor\u2019s. And as that was taking place, Elphren became solid. When the spectacle was over, Elphren stood full-bodied facing a semi-transparent memory of Tabor. And on queue, the entire herd of unicorns surrounding the two lowered their heads, and from their horns came their individual colors, and those colors went into Tabor\u2019s body and his body flashed a bright white light, and he was gone."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Dream Casting"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"When the light had faded, and they were cloaked in darkness, Osiler continued. \u201CThis Convergence is the fourth alignment all three Equis Planets since the splitting of the realms. As such, it is a great honor bestowed upon Eranor to cast new dreams. Tonight marks one year since our last casting, and we have been blessed by the wonderful dreams cast by Shelse; may we all take a moment now to send her our gratitude.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"And there was a smattering of snickers and a number of neighs and a whinny, and Shelse glowed bright and demurely. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CEranor, please begin.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"And the herd watched stoically as Eranor stepped forward into the spring. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Eranor spoke. \u201CThank you, Osiler, and thank you all for this privilege. I have put special attention into my efforts this year for each of you. May these dreams bring you joy.\u201D "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"With that, she reared up onto her hind legs, and when she came crashing down, a great cloud of vapor formed around her. From inside the mist, a turbulent cyclone formed from Eranor\u2019s horn, and with a terrific gesture, Eranor rose again to her hind legs and the whirlwind shot up into the sky. Great clouds formed, magically illuminated, and they soon filled the sky. And as quickly as it had begun, it was over, and Eranor was unveiled in the spring facing Osiler again but small wisps of dream cloud vapor clung to her head and horn."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Wishing"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"All the unicorns cheered, and a warm rush of energy came over them. But Aila, who had seen hundreds of these ceremonies before, felt a nagging tug. She tried to brush it away with the flick of her tail, but it persisted, and she realized that she was feeling something strange. It was excitement, for her wishing was nearly upon her, but it was another feeling too \u2013 one she was unaccustomed to. She was\u2026 afraid. But what of? She would finally make her wish, and she would love, and mate! This was meant to be a good thing, right? Why was she afraid? She knew her wishing song, and she\u2019d been singing all day so she knew her voice works. And she knew what she wanted! Didn\u2019t she? "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"And there it was. Doubt. Aila, deep in her thoughts, finally realized that she wasn\u2019t sure that what she wanted was actually what she wanted. Mating a tall fine stallion sounded great. But surely there were other options! What else could they be? Why was she only now considering this? What had happened to her over the past months and years? She felt like she had been under a spell, and now here she was, confounded and instead of being overjoyed she was panicked. She inadvertently snorted at herself, and her neighbor, Kylie, looked over at her inquisitively. And she asked \u201CWhat?\u201D, and Aila, embarrassed, replied, \u201CNothing, just excited.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Kylie and Aila had been friends their whole lives - why was she hiding herself from her now? The panic was rising! Why couldn\u2019t she just say that she was afraid she had decided upon the wrong wish? Wait, the wrong wish?! Was is really the wrong wish? Wasn\u2019t this what every mare wishes for? But in her heart she knew that it wasn\u2019t what she wanted. She wanted something else.. but what was it? She had always loved her long adventures with Liba most of all. Maybe that was it. Aila was getting frantic. Maybe what was it? Adventure? She already had that! And she thought about her moments looking into the other realms.. it was forbidden but she would love to see them! And Aila felt a warm soothing sensation and she knew that she had changed her mind."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAnd now, we will adjourn temporarily, as we make our way to the Wishing Stage.\u201D Commanded Osiler, the Great Stallion. His horn flashed a dark purple light that reflected eerily off his smooth dark features. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWe have one Wish Maker, tonight. Aila, you will remain here.Wait for your shooting star to arrive, then do not tarry.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"And he led the herd through the two curved trees and back into the darkness beyond, and soon Aila was alone."))];});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ../lib/index.js
var lib = __webpack_require__(3);

// EXTERNAL MODULE: /Users/joshuar/Projects/jr-xix/src/components/scrollToTop/scrollToTop.js
var scrollToTop = __webpack_require__(11);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(22);

// EXTERNAL MODULE: external "react-syntax-highlighter"
var external_react_syntax_highlighter_ = __webpack_require__(27);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/languages/prism/jsx"
var jsx_ = __webpack_require__(43);
var jsx_default = /*#__PURE__*/__webpack_require__.n(jsx_);

// EXTERNAL MODULE: /Users/joshuar/Projects/jr-xix/src/components/codeProject/code-project.css
var code_project = __webpack_require__(78);

// CONCATENATED MODULE: /Users/joshuar/Projects/jr-xix/src/components/codeProject/codeProject.js
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// hilighter
// styles
//
external_react_syntax_highlighter_["PrismLight"].registerLanguage('jsx',jsx_default.a);var codeProject_CodeProject=/*#__PURE__*/function(_React$Component){_inherits(CodeProject,_React$Component);var _super=_createSuper(CodeProject);function CodeProject(props){var _this;_classCallCheck(this,CodeProject);_this=_super.call(this,props);_defineProperty(_assertThisInitialized(_this),"render",function(){var _this$state=_this.state,error=_this$state.error,isLoaded=_this$state.isLoaded,text=_this$state.text;if(error){return/*#__PURE__*/external_react_default.a.createElement("div",null,"Error: ",error.message);}else if(!isLoaded){var codeText='Loading...';}else{var _codeText=text;}return/*#__PURE__*/external_react_default.a.createElement("section",{className:"project-summary"},/*#__PURE__*/external_react_default.a.createElement("h1",null,"/* ".concat(_this.props.title," */")),/*#__PURE__*/external_react_default.a.createElement("p",null,_this.props.description),/*#__PURE__*/external_react_default.a.createElement("div",{className:"code-project",style:{paddingBottom:_this.getAspectRatio()}},_this.props.codeUrl&&/*#__PURE__*/external_react_default.a.createElement("button",{className:"code-toggle",onClick:function onClick(){return _this.setState(function(prevState){return{showCode:!prevState.showCode};});}}," ",_this.state.showCode?/*#__PURE__*/external_react_default.a.createElement("svg",{width:"20px",height:"14px",viewBox:"0 0 20 14",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/external_react_default.a.createElement("path",{d:"M5.334,5.702 L5.796,6.416 L0.728,9.566 L5.796,12.772 L5.278,13.416 L-6.17284002e-14,10.112 L-6.17284002e-14,9.006 L5.334,5.702 Z M10,11.8 C8.8954305,11.8 8,10.9045695 8,9.8 C8,8.6954305 8.8954305,7.8 10,7.8 C11.1045695,7.8 12,8.6954305 12,9.8 C12,10.9045695 11.1045695,11.8 10,11.8 Z M14.448,5.702 L19.796,9.02 L19.796,10.112 L14.518,13.416 L14,12.73 L19.054,9.566 L14,6.388 L14.448,5.702 Z",id:"path-1"})):/*#__PURE__*/external_react_default.a.createElement("svg",{width:"20px",height:"14px",viewBox:"0 0 20 14",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/external_react_default.a.createElement("path",{d:"M5.334,5.702 L5.796,6.416 L0.728,9.566 L5.796,12.772 L5.278,13.416 L-6.17284002e-14,10.112 L-6.17284002e-14,9.006 L5.334,5.702 Z M7.75399962,15.4 L7.03999962,15.092 L13.0599996,2.702 L13.7599996,3.052 L7.75399962,15.4 Z M14.448,5.702 L19.796,9.02 L19.796,10.112 L14.518,13.416 L14,12.73 L19.054,9.566 L14,6.388 L14.448,5.702 Z",id:"path-1"}))),!_this.state.showCode?_this.props.children:/*#__PURE__*/external_react_default.a.createElement("div",{className:"code-pane"},/*#__PURE__*/external_react_default.a.createElement(external_react_syntax_highlighter_["PrismLight"],{language:"jsx",useInlineStyles:false,showLineNumbers:true},_this.state.text))));});_defineProperty(_assertThisInitialized(_this),"getAspectRatio",function(){var computeRatio=function computeRatio(ratio){var w=parseInt(ratio.toString().split("x")[0]);// before x
var h=parseInt(ratio.toString().split("x")[1]);// after x
var aspectRatio=w&&h?"".concat((h/w*100).toFixed(2),"%"):console.log("Incorrect ratio prop");return aspectRatio;};var ratio=_this.props.ratio&&_this.props.ratio.length?computeRatio(_this.props.ratio):null;return ratio;});_defineProperty(_assertThisInitialized(_this),"loadCodeAsText",function(codeUrl){fetch(codeUrl).then(function(res){return res.text();}).then(function(result){_this.setState({isLoaded:true,text:result});},function(error){_this.setState({isLoaded:true,error:error});});});_this.state={showCode:false,error:null,isLoaded:false,text:''};return _this;}_createClass(CodeProject,[{key:"componentDidMount",value:function componentDidMount(){console.log(this.props.codeUrl);if(this.props.codeUrl){this.loadCodeAsText(this.props.codeUrl);}}}]);return CodeProject;}(external_react_default.a.Component);/* harmony default export */ var codeProject = (codeProject_CodeProject);
// EXTERNAL MODULE: /Users/joshuar/Projects/jr-xix/src/components/projects/code/imgLoad/imgLoad.js + 1 modules
var imgLoad = __webpack_require__(2);

// EXTERNAL MODULE: external "react-palette"
var external_react_palette_ = __webpack_require__(44);
var external_react_palette_default = /*#__PURE__*/__webpack_require__.n(external_react_palette_);

// CONCATENATED MODULE: /Users/joshuar/Projects/jr-xix/src/utils.js
/* utity functions *./

/* return a random number from an array */var randomIndexOf=function randomIndexOf(arr){return Math.floor(Math.random()*arr.length);};/* return an item from an array */var chooseFrom=function chooseFrom(arr){return arr[randomIndexOf(arr)];};/* Random image */var getRandomImage=function getRandomImage(arr){return chooseFrom(arr);};
// EXTERNAL MODULE: /Users/joshuar/Projects/jr-xix/src/components/projects/code/gridCells/gridCells.css
var gridCells = __webpack_require__(79);

// CONCATENATED MODULE: /Users/joshuar/Projects/jr-xix/src/components/projects/code/gridCells/gridCells.js
function gridCells_typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){gridCells_typeof=function _typeof(obj){return typeof obj;};}else{gridCells_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return gridCells_typeof(obj);}function gridCells_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function gridCells_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)gridCells_setPrototypeOf(subClass,superClass);}function gridCells_setPrototypeOf(o,p){gridCells_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return gridCells_setPrototypeOf(o,p);}function gridCells_createSuper(Derived){var hasNativeReflectConstruct=gridCells_isNativeReflectConstruct();return function _createSuperInternal(){var Super=gridCells_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=gridCells_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return gridCells_possibleConstructorReturn(this,result);};}function gridCells_possibleConstructorReturn(self,call){if(call&&(gridCells_typeof(call)==="object"||typeof call==="function")){return call;}return gridCells_assertThisInitialized(self);}function gridCells_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function gridCells_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function gridCells_getPrototypeOf(o){gridCells_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return gridCells_getPrototypeOf(o);}function gridCells_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// utils
// styles
//
var gridCells_GridCells=/*#__PURE__*/function(_React$Component){gridCells_inherits(GridCells,_React$Component);var _super=gridCells_createSuper(GridCells);function GridCells(props){var _this;gridCells_classCallCheck(this,GridCells);_this=_super.call(this,props);/* initial state */gridCells_defineProperty(gridCells_assertThisInitialized(_this),"componentDidMount",function(){/* get width and height of the image node */var node=_this.props.node.current;var w=node.clientWidth;var h=node.clientHeight;/* if less than 500px, cellsize = 50px, */ /* if greater than 500, cellsize is 100 */var cellSize=w<500?w/10:w/20;var rows=Math.round(w/cellSize);var cols=Math.round(h/cellSize);_this.setState({rows:rows,cols:cols,opacities:_this.assignOpacity(rows*cols),cellSize:cellSize,cellCount:rows*cols});window.addEventListener("resize",_this.updateDimensions);_this.updateCells();});gridCells_defineProperty(gridCells_assertThisInitialized(_this),"componentWillUnmount",function(){window.removeEventListener("resize",_this.updateDimensions);});gridCells_defineProperty(gridCells_assertThisInitialized(_this),"render",function(){var support=window.CSS.supports('mix-blend-mode','multiply');var mixMe=support?'multiply':'';return[/*#__PURE__*/external_react_default.a.createElement("div",{className:"grid-borders",key:"grid-borders"},_this.state.cellCount&&_this.generateCellBorders(_this.state.cellCount)),/*#__PURE__*/external_react_default.a.createElement("div",{className:"img-grid",ref:_this.imageGrid,key:"grid",style:{gridTemplateColumns:"repeat(auto-fill, minmax(".concat(_this.state.cellSize,"px, 1fr))")}},_this.state.opacities&&_this.generateCells(_this.state.opacities,_this.props.color,mixMe))];});gridCells_defineProperty(gridCells_assertThisInitialized(_this),"assignOpacity",function(count){var grid=[];for(var i=0;i<count;i++){grid.push(Math.random());}return grid;});gridCells_defineProperty(gridCells_assertThisInitialized(_this),"generateCells",function(opacities,cellColor,mode){return opacities.map(function(cellOpacity,i){return/*#__PURE__*/external_react_default.a.createElement("div",{key:"cell-".concat(i),className:"cell",style:{opacity:"".concat(cellOpacity),backgroundColor:cellColor,mixBlendMode:mode}});});});gridCells_defineProperty(gridCells_assertThisInitialized(_this),"generateCellBorders",function(count){var borders=[];for(var i=0;i<count;i++){borders.push(/*#__PURE__*/external_react_default.a.createElement("div",{key:"cell-".concat(i),className:"cell"}));}return borders;});gridCells_defineProperty(gridCells_assertThisInitialized(_this),"updateCells",function(){/* Generate a grid of cells  */_this.interval=setInterval(function(){// * Get the current array of opacities
var updatedCells=_this.state.opacities;var numberToChange=_this.state.rows*_this.state.cols/2;/* get a random int */var randomOpacity=function randomOpacity(){return(// console.log(Math.floor(Math.random() * 11))
Math.floor(Math.random()*11));};for(var i=0;i<numberToChange;i++){// * generate a random index number from the array
var randomIndex=randomIndexOf(_this.state.opacities);// assign opacities
updatedCells[randomIndex]=".".concat(randomOpacity());}// * Set state with the updated array
_this.setState({opacities:updatedCells});},1100);});_this.state={opacities:null,rows:null,cols:null,cellSize:null,cellCount:''};return _this;}return GridCells;}(external_react_default.a.Component);/* harmony default export */ var gridCells_gridCells = (gridCells_GridCells);
// EXTERNAL MODULE: /Users/joshuar/Projects/jr-xix/src/components/projects/code/imgGrid/imgGrid.css
var imgGrid = __webpack_require__(80);

// CONCATENATED MODULE: /Users/joshuar/Projects/jr-xix/src/components/projects/code/imgGrid/imgGrid.js
function imgGrid_typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){imgGrid_typeof=function _typeof(obj){return typeof obj;};}else{imgGrid_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return imgGrid_typeof(obj);}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function imgGrid_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function imgGrid_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)imgGrid_setPrototypeOf(subClass,superClass);}function imgGrid_setPrototypeOf(o,p){imgGrid_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return imgGrid_setPrototypeOf(o,p);}function imgGrid_createSuper(Derived){var hasNativeReflectConstruct=imgGrid_isNativeReflectConstruct();return function _createSuperInternal(){var Super=imgGrid_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=imgGrid_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return imgGrid_possibleConstructorReturn(this,result);};}function imgGrid_possibleConstructorReturn(self,call){if(call&&(imgGrid_typeof(call)==="object"||typeof call==="function")){return call;}return imgGrid_assertThisInitialized(self);}function imgGrid_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function imgGrid_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function imgGrid_getPrototypeOf(o){imgGrid_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return imgGrid_getPrototypeOf(o);}function imgGrid_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}/* ImgGrid */ /*
  - load an image using ImgLoad component
  - generate a grid of cells based on the image size
  - color cells based on the image color
  - assign divs random opacities
  - change some random cell opacities on an interval to animate the cells
  */// components
// styles
//
var imgGrid_ImgGrid=/*#__PURE__*/function(_React$Component){imgGrid_inherits(ImgGrid,_React$Component);var _super=imgGrid_createSuper(ImgGrid);function ImgGrid(props){var _this;imgGrid_classCallCheck(this,ImgGrid);_this=_super.call(this,props);imgGrid_defineProperty(imgGrid_assertThisInitialized(_this),"render",function(){return/*#__PURE__*/external_react_default.a.createElement("div",{ref:_this.imageGrid,className:"img-grid-wrapper"},_this.state.loaded&&/*#__PURE__*/external_react_default.a.createElement(external_react_palette_default.a,{image:_this.state.imgUrl},function(palette){return/*#__PURE__*/external_react_default.a.createElement(gridCells_gridCells,{color:palette.vibrant,node:_this.imageGrid,ratio:true});}),_this.renderImg());});imgGrid_defineProperty(imgGrid_assertThisInitialized(_this),"getAspectRatio",function(){var computeRatio=function computeRatio(ratio){var w=parseInt(ratio.toString().split("x")[0]);// before x
var h=parseInt(ratio.toString().split("x")[1]);// after x
var aspectRatio=w&&h?"".concat((h/w*100).toFixed(2),"%"):console.log("Incorrect ratio prop");return aspectRatio;};var ratio=_this.props.ratio&&_this.props.ratio.length?computeRatio(_this.props.ratio):null;return ratio;});imgGrid_defineProperty(imgGrid_assertThisInitialized(_this),"renderImg",function(){return/*#__PURE__*/external_react_default.a.createElement(imgLoad["a" /* default */],_extends({},_this.props,{imgLoaded:function imgLoaded(src){_this.setState({loaded:true,imgUrl:src});}}));});_this.imageGrid=/*#__PURE__*/external_react_default.a.createRef();_this.state={loaded:false,imgUrl:_this.props.url};return _this;}return ImgGrid;}(external_react_default.a.Component);imgGrid_defineProperty(imgGrid_ImgGrid,"defaultProps",{url:null});/* harmony default export */ var imgGrid_imgGrid = (imgGrid_ImgGrid);
// CONCATENATED MODULE: /Users/joshuar/Projects/jr-xix/src/containers/code.js
function code_typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){code_typeof=function _typeof(obj){return typeof obj;};}else{code_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return code_typeof(obj);}function code_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function code_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)code_setPrototypeOf(subClass,superClass);}function code_setPrototypeOf(o,p){code_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return code_setPrototypeOf(o,p);}function code_createSuper(Derived){var hasNativeReflectConstruct=code_isNativeReflectConstruct();return function _createSuperInternal(){var Super=code_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=code_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return code_possibleConstructorReturn(this,result);};}function code_possibleConstructorReturn(self,call){if(call&&(code_typeof(call)==="object"||typeof call==="function")){return call;}return code_assertThisInitialized(self);}function code_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function code_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function code_getPrototypeOf(o){code_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return code_getPrototypeOf(o);}function code_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// components
// utils
//
var code_Code=/*#__PURE__*/function(_React$Component){code_inherits(Code,_React$Component);var _super=code_createSuper(Code);function Code(){var _this;code_classCallCheck(this,Code);_this=_super.call(this);// cloudinary images
code_defineProperty(code_assertThisInitialized(_this),"render",function(){console.log('this.state.image',_this.state.image1);return[/*#__PURE__*/external_react_default.a.createElement(lib["Head"],{key:"head"},/*#__PURE__*/external_react_default.a.createElement("title",null,"joshuar(HTML + CSS + JS)")),/*#__PURE__*/external_react_default.a.createElement("section",{key:"content-code-projects",className:"code projects"},/*#__PURE__*/external_react_default.a.createElement(codeProject,{title:"React Grid Thing",description:"Pretty squares... (wip)",codeUrl:"https://raw.githubusercontent.com/joshuarrr/jr-xix/master/src/components/projects/code/imgGrid/imgGrid.js",ratio:"16x9"},/*#__PURE__*/external_react_default.a.createElement(imgGrid_imgGrid,{url:_this.state.image1,ratio:"16x9",duration:".5s",className:"rounded bordered",cloudinary:true})),/*#__PURE__*/external_react_default.a.createElement(codeProject,{title:"ImgLoad",description:"React image loader.",codeUrl:"https://raw.githubusercontent.com/joshuarrr/jr-xix/master/src/components/projects/code/imgLoad/imgLoad.js",ratio:"16x9"},/*#__PURE__*/external_react_default.a.createElement(imgLoad["a" /* default */],{url:_this.state.image2,ratio:"16x9",duration:"3s",className:"rounded bordered",cloudinary:true}))),/*#__PURE__*/external_react_default.a.createElement(scrollToTop["a" /* default */],{key:"scroll-button",scrollStepInPx:"50",delayInMs:"16.66"})];});var images=['jr-xix/projects/conquer','jr-xix/projects/santa-monica','jr-xix/projects/birds'];_this.state={image1:chooseFrom(images),image2:chooseFrom(images)};return _this;}return Code;}(external_react_default.a.Component);/* harmony default export */ var code = __webpack_exports__["default"] = (code_Code);

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/languages/prism/jsx");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("react-palette");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
__webpack_require__(49);
module.exports = __webpack_require__(54);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).enterModule;
  enterModule && enterModule(module);
})();
/* eslint-disable import/no-dynamic-require */


var plugins = __webpack_require__(28).default;

var _require = __webpack_require__(12),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/joshuar/Projects/jr-xix/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(28).default);
  });
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(plugins, "plugins", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapPlugins.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)(module)))

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("swimmer");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("intersection-observer");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(31),
    templates = _require.default,
    notFoundTemplate = _require.notFoundTemplate;

var _require2 = __webpack_require__(12),
    registerTemplates = _require2.registerTemplates;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/joshuar/Projects/jr-xix/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(31),
        templates = _require3.default,
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)(module)))

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.default = requireUniversalModule;

var _utils = __webpack_require__(21);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 15,
	"./": 15,
	"./index": 15,
	"./index.js": 15
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
webpackContext.id = 51;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(22);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _StaticInfo = _interopRequireDefault(__webpack_require__(16));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapApp.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).enterModule;
  enterModule && enterModule(module);
})();

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var App = __webpack_require__(82).default;

var _default = function _default(staticInfo) {
  return function (props) {
    return _react.default.createElement(_StaticInfo.default.Provider, {
      value: staticInfo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, _react.default.createElement(App, _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    })));
  };
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapApp.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapApp.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)(module)))

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRouteData = withRouteData;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _react = _interopRequireDefault(__webpack_require__(0));

var _ = __webpack_require__(12);

var _Spinner = _interopRequireDefault(__webpack_require__(23));

var _StaticInfo = __webpack_require__(16);

var _Routes = __webpack_require__(34);

var _utils = __webpack_require__(13);

var _class,
    _temp,
    _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).enterModule;
  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var instances = [];

if (false) {}

var RouteData = (0, _StaticInfo.withStaticInfo)((0, _Routes.withRoutePathContext)((_temp = _class = /*#__PURE__*/function (_React$Component) {
  _inherits(RouteData, _React$Component);

  function RouteData() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RouteData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RouteData)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "safeForceUpdate", function () {
      if (_this.unmounted) {
        return;
      }

      _this.forceUpdate();
    });

    return _this;
  }

  _createClass(RouteData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      instances.push(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;

      instances = instances.filter(function (d) {
        return d !== _this2;
      });
      this.unmounted = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          children = _this$props.children,
          Loader = _this$props.Loader,
          routePath = _this$props.routePath;
      var routeError = _.routeErrorByPath[routePath];
      var routeInfo = routeError ? _.routeInfoByPath['404'] : _.routeInfoByPath[routePath]; // If there was an error reported for this path, throw an error
      // unless there is data for the 404 page

      if (routeError && (!routeInfo || !routeInfo.data)) {
        throw new Error("React-Static: <RouteData> could not find any data for this route: ".concat(routePath, ". If this is a dynamic route, please remove any reliance on RouteData or withRouteData from this routes components"));
      } // If we haven't requested the routeInfo and its shared data yet, or it's loading
      // Show a spinner and prefetch the data
      // TODO:suspense - This will become a suspense resource


      if (shouldLoadData(routeInfo)) {
        // To make sure route info will be fetched for 404 pages we should use the returned route info path (if any) instead of the original path
        var targetRouteInfoPath = routeInfo ? routeInfo.path : routePath;

        _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Promise.all([(0, _.prefetch)(targetRouteInfoPath, {
                    priority: true
                  }), new Promise(function (resolve) {
                    return setTimeout(resolve, "200");
                  })]);

                case 2:
                  _this3.safeForceUpdate();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }))();

        return _react.default.createElement(Loader, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        });
      } // Otherwise, get it from the routeInfoByPath (subsequent client side)
      // and merge it with the shared data


      var routeData = (0, _utils.getFullRouteData)(routeInfo);
      return children(routeData);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return RouteData;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  Loader: _Spinner.default
}), _temp)));

function shouldLoadData(routeInfo) {
  if (!routeInfo || !routeInfo.data) {
    return true;
  }

  return shouldLoadSharedData(routeInfo);
}

function shouldLoadSharedData(routeInfo) {
  return hasPropHashes(routeInfo) && !routeInfo.sharedData;
}

function hasPropHashes(routeInfo) {
  return routeInfo.sharedHashesByProp && Object.keys(routeInfo.sharedHashesByProp).length > 0;
}

var _default = RouteData;
var _default2 = _default;
exports.default = _default2;

function withRouteData(Comp) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (props) {
    return _react.default.createElement(RouteData, _extends({}, opts, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }), function (routeData) {
      return _react.default.createElement(Comp, _extends({}, routeData, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }));
    });
  };
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(instances, "instances", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(RouteData, "RouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(shouldLoadData, "shouldLoadData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(shouldLoadSharedData, "shouldLoadSharedData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(hasPropHashes, "hasPropHashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(withRouteData, "withRouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)(module)))

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSiteData = withSiteData;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _react = _interopRequireDefault(__webpack_require__(0));

var _axios = _interopRequireDefault(__webpack_require__(29));

var _Spinner = _interopRequireDefault(__webpack_require__(23));

var _StaticInfo = __webpack_require__(16);

var _class,
    _temp,
    _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).enterModule;
  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} // Share a single promise for all siteData requests


var siteDataPromise;
var SiteData = (0, _StaticInfo.withStaticInfo)((_temp = _class = /*#__PURE__*/function (_React$Component) {
  _inherits(SiteData, _React$Component);

  function SiteData(props) {
    var _this;

    _classCallCheck(this, SiteData);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SiteData).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "safeSetState", function () {
      var _this2;

      if (_this.unmounted) {
        return;
      }

      (_this2 = _this).setState.apply(_this2, arguments);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchSiteData", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _ref2, siteData;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (true) {
                _context.next = 6;
                break;
              }

              _context.next = 3;
              return function () {
                if (siteDataPromise) {
                  return siteDataPromise;
                }

                siteDataPromise = _axios.default.get('/__react-static__/siteData');
                return siteDataPromise;
              }();

            case 3:
              _ref2 = _context.sent;
              siteData = _ref2.data;

              _this.safeSetState({
                siteData: siteData
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    var staticInfo = _this.props.staticInfo;
    _this.state = {
      // Default siteData to use the staticInfo if possible
      // This will be undefined in development, which will
      // then be requested at runtime.
      siteData: staticInfo ? staticInfo.siteData : null
    };
    return _this;
  }

  _createClass(SiteData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchSiteData();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmounted = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          Loader = _this$props.Loader;
      var _this$state = this.state,
          siteData = _this$state.siteData,
          siteDataError = _this$state.siteDataError; // If there was a fetch error in dev, throw it to the nearest ErrorBoundary

      if (siteDataError) {
        throw siteDataError;
      }

      if (!siteData) {
        return _react.default.createElement(Loader, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        });
      }

      return children(siteData);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SiteData;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  Loader: _Spinner.default
}), _temp));
var _default = SiteData;
var _default2 = _default;
exports.default = _default2;

function withSiteData(Comp) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (props) {
    return _react.default.createElement(SiteData, _extends({}, opts, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), function (siteData) {
      return _react.default.createElement(Comp, _extends({}, siteData, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }));
    });
  };
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(siteDataPromise, "siteDataPromise", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(SiteData, "SiteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(withSiteData, "withSiteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)(module)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _react = _interopRequireDefault(__webpack_require__(0));

var _utils = __webpack_require__(13);

var _ = __webpack_require__(12);

var _Visibility = _interopRequireDefault(__webpack_require__(30));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Prefetch.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).enterModule;
  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Prefetch = /*#__PURE__*/function (_React$Component) {
  _inherits(Prefetch, _React$Component);

  function Prefetch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Prefetch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Prefetch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "runPrefetch", function () {
      return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _this$props, path, onLoad, cleanedPath, data;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = _this.props, path = _this$props.path, onLoad = _this$props.onLoad;
                cleanedPath = (0, _utils.getRoutePath)(path);
                _context.next = 4;
                return (0, _.prefetch)(cleanedPath);

              case 4:
                data = _context.sent;
                onLoad(data, cleanedPath);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }))();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRef", function (el) {
      if (!_this.props.force && el) {
        (0, _Visibility.default)(el, _this.runPrefetch);
      }
    });

    return _this;
  }

  _createClass(Prefetch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.force) {
        this.runPrefetch();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          rest = _objectWithoutProperties(_this$props2, ["children"]);

      if (children) {
        return children({
          handleRef: this.handleRef
        });
      }

      return _react.default.createElement("div", _extends({
        ref: this.handleRef
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Prefetch;
}(_react.default.Component);

exports.default = Prefetch;

_defineProperty(Prefetch, "defaultProps", {
  children: null,
  path: null,
  force: false,
  onLoad: function onLoad() {}
});

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Prefetch, "Prefetch", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Prefetch.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)(module)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _router = __webpack_require__(8);

var _ = __webpack_require__(12);

var _utils = __webpack_require__(13);

var _ErrorBoundary = _interopRequireDefault(__webpack_require__(60));

var _HashScroller = _interopRequireDefault(__webpack_require__(61));

var _StaticInfo = __webpack_require__(16);

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js",
    _class,
    _temp;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).enterModule;
  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var DefaultPath = function DefaultPath(_ref) {
  var render = _ref.render;
  return render;
};

var DefaultRouter = function DefaultRouter(_ref2) {
  var children = _ref2.children,
      basepath = _ref2.basepath,
      staticInfo = _ref2.staticInfo;
  children = _react.default.createElement(_router.Router, {
    basepath: basepath,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, _react.default.createElement(DefaultPath, {
    default: true,
    render: children,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
  return typeof document === 'undefined' ? _react.default.createElement(_router.ServerLocation, {
    url: (0, _utils.makePathAbsolute)(staticInfo.path),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, children) : children;
};

var RouterHook = (0, _utils.makeHookReducer)(_.plugins, 'Router', {
  sync: true
});
var ResolvedRouter = RouterHook(DefaultRouter);
var Root = (0, _StaticInfo.withStaticInfo)((_temp = _class = /*#__PURE__*/function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root(props) {
    var _this;

    _classCallCheck(this, Root);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Root).call(this));
    var staticInfo = props.staticInfo;

    if ( true && staticInfo) {
      var path = staticInfo.path,
          sharedData = staticInfo.sharedData,
          sharedHashesByProp = staticInfo.sharedHashesByProp,
          template = staticInfo.template; // Hydrate routeInfoByPath with the embedded routeInfo

      _.routeInfoByPath[path] = staticInfo; // Hydrate sharedDataByHash with the embedded routeInfo

      Object.keys(sharedHashesByProp).forEach(function (propKey) {
        _.sharedDataByHash[sharedHashesByProp[propKey]] = sharedData[propKey];
      }); // In SRR and production, synchronously register the template for the
      // initial path

      (0, _.registerTemplateForPath)(path, template); // For a 404 route we will register the current route as invalid

      if (path === '404') {
        var currentPath = (0, _.getCurrentRoutePath)(); // As long as we didn't navigate to the 404.html page directly

        if (currentPath !== '404') {
          _.routeErrorByPath[currentPath] = true;
          _.templateErrorByPath[currentPath] = true;
        }
      }
    }

    return _this;
  }

  _createClass(Root, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          disableScroller = _this$props.disableScroller,
          autoScrollToTop = _this$props.autoScrollToTop,
          autoScrollToHash = _this$props.autoScrollToHash,
          scrollToTopDuration = _this$props.scrollToTopDuration,
          scrollToHashDuration = _this$props.scrollToHashDuration,
          scrollToHashOffset = _this$props.scrollToHashOffset,
          staticInfo = _this$props.staticInfo;
      var scrollerProps = {
        autoScrollToTop: autoScrollToTop,
        autoScrollToHash: autoScrollToHash,
        scrollToTopDuration: scrollToTopDuration,
        scrollToHashDuration: scrollToHashDuration,
        scrollToHashOffset: scrollToHashOffset
      };

      var Wrapper = function Wrapper(_ref3) {
        var children = _ref3.children;
        return children;
      };

      var basepath = (0, _utils.getBasePath)(); // Add the scroller if not disabled

      if (!disableScroller) {
        Wrapper = function Wrapper(_ref4) {
          var children = _ref4.children;
          return _react.default.createElement(_HashScroller.default, _extends({}, scrollerProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            },
            __self: this
          }), children);
        };
      }

      return _react.default.createElement(_ErrorBoundary.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, _react.default.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, _react.default.createElement(ResolvedRouter, {
        basepath: basepath,
        staticInfo: staticInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, children)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Root;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  disableScroller: false,
  // TODO:v6 document this!
  autoScrollToTop: true,
  autoScrollToHash: true,
  scrollToTopDuration: 0,
  scrollToHashDuration: 800,
  scrollToHashOffset: 0
}), _temp));
var _default = Root;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DefaultPath, "DefaultPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(DefaultRouter, "DefaultRouter", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(RouterHook, "RouterHook", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(ResolvedRouter, "ResolvedRouter", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(Root, "Root", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)(module)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _utils = __webpack_require__(13);

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/ErrorBoundary.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).enterModule;
  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ErrorBoundary)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      error: false
    });

    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error) {
      if (typeof document === 'undefined') {
        throw error;
      }

      this.setState({
        error: error
      });
    }
  }, {
    key: "render",
    value: function render() {
      var error = this.state.error;

      if (error) {
        return _react.default.createElement("div", {
          style: {
            margin: '1rem',
            padding: '1rem',
            background: 'rgba(0,0,0,0.05)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, _react.default.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, "Oh-no! Something\u2019s gone wrong!"), _react.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }), _react.default.createElement("button", {
          size: "s",
          onClick: function onClick() {
            return window.location.reload();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, "Reload"));
      }

      return (0, _utils.unwrapArray)(this.props.children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ErrorBoundary;
}(_react.default.Component);

exports.default = ErrorBoundary;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorBoundary, "ErrorBoundary", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/ErrorBoundary.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)(module)))

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _raf = _interopRequireDefault(__webpack_require__(33));

var _Location = _interopRequireDefault(__webpack_require__(35));

var _scrollTo = _interopRequireDefault(__webpack_require__(32));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).enterModule;
  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var RouterScroller = /*#__PURE__*/function (_React$Component) {
  _inherits(RouterScroller, _React$Component);

  function RouterScroller() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RouterScroller);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RouterScroller)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToTop", function () {
      var _this$props = _this.props,
          autoScrollToTop = _this$props.autoScrollToTop,
          scrollToTopDuration = _this$props.scrollToTopDuration;

      if (autoScrollToTop) {
        (0, _scrollTo.default)(0, {
          duration: scrollToTopDuration
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToHash", function (hash) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$orScrollToTop = _ref.orScrollToTop,
          orScrollToTop = _ref$orScrollToTop === void 0 ? true : _ref$orScrollToTop;

      var _this$props2 = _this.props,
          scrollToHashDuration = _this$props2.scrollToHashDuration,
          autoScrollToHash = _this$props2.autoScrollToHash,
          scrollToHashOffset = _this$props2.scrollToHashOffset;

      if (!autoScrollToHash) {
        return;
      }

      if (hash) {
        var resolvedHash = hash.substring(1);

        if (resolvedHash) {
          // We must attempt to scroll synchronously or we risk the browser scrolling for us
          var element = document.getElementById(resolvedHash);

          if (element !== null) {
            (0, _scrollTo.default)(element, {
              duration: scrollToHashDuration,
              offset: scrollToHashOffset
            });
          } else {
            (0, _raf.default)(function () {
              var element = document.getElementById(resolvedHash);

              if (element !== null) {
                (0, _scrollTo.default)(element, {
                  duration: scrollToHashDuration,
                  offset: scrollToHashOffset
                });
              }
            });
          }
        }
      } else if (orScrollToTop) {
        (0, _scrollTo.default)(0, {
          duration: scrollToHashDuration
        });
      }
    });

    return _this;
  }

  _createClass(RouterScroller, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this; // Do not scroll to top on initial page load if hash does not exist


      this.scrollToHash(window.location.hash, {
        orScrollToTop: false
      });
      (0, _Location.default)(function (_ref2) {
        var hash = _ref2.hash,
            pathname = _ref2.pathname;

        if (_this2.prevPathname !== pathname && !hash) {
          _this2.scrollToTop();
        } else if (_this2.prevHash !== hash) {
          _this2.scrollToHash(hash);
        }

        _this2.prevPathname = pathname;
        _this2.prevHash = hash;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return RouterScroller;
}(_react.default.Component);

exports.default = RouterScroller;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RouterScroller, "RouterScroller", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/HashScroller.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(1)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)(module)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, "/* 🗺 Nav *********************************************************************/\n.nav {\n  color: white;\n  margin-bottom: var(--trailer);\n  text-align: center;\n}\n\n.nav-item {\n  padding: 1rem;\n  z-index: 100;\n  position: relative;\n}\n\n\n.nav-item.current {\n  color: white;\n}\n\n.desktop .nav-item {\n  padding: 1rem;\n  width: 100%;\n  text-align: center;\n  position: relative;\n  z-index: 10;\n}\n\n", ""]);



/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, "/* 💆🏽‍ Header ******************************************************************/\n.header {\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  /* justify-content: space-between; */\n  -ms-flex-direction: row;\n      flex-direction: row;\n  margin-bottom: var(--trailer)\n}\n\n.logo-link {\n  line-height: 0;\n  width: 3.5rem;\n  height: 3.5rem;\n  left: -1rem;\n  top: -.25rem;\n  position: relative;\n}\n\n.logo-link svg {\n  fill: white;\n  -webkit-transition: fill .3s ease-out;\n  -o-transition: fill .3s ease-out;\n  transition: fill .3s ease-out;\n  top: 50%;\n  width: 3.5rem;\n  height: 3.5rem;\n}\n\n.logo-link:hover svg {\n  fill: #46a789;\n}\n\n.title {\n  color: white;\n  text-align: center;\n}\n\n.desktop .logo-link {\n  top: var(--trailer);\n  left: -.1rem;\n}", ""]);



/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Imports
var urlEscape = __webpack_require__(65);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(66));

// Module
exports.push([module.i, ".social-links {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  padding-bottom: var(--trailer);\n}\n\n\n/*! Icons --------------------------------------------------------------------*/\n.icon {\n  background: rgba(0, 0, 0, 0) url(" + ___CSS_LOADER_URL___0___ + ") no-repeat;\n  background-size: 37px 293px;\n  display: inline-block;\n  position: relative;\n  /* @include size(37px); */\n  width: 3.7rem;\n  height: 3.7rem;\n  -webkit-filter: saturate(05%);\n          filter: saturate(05%);\n  opacity: .5;\n  -webkit-transition:\n    opacity .5s,\n    -webkit-filter .5s,\n    -webkit-transform .5s cubic-bezier(.16, .035, .24, 1.295);\n  transition:\n    opacity .5s,\n    -webkit-filter .5s,\n    -webkit-transform .5s cubic-bezier(.16, .035, .24, 1.295);\n  -o-transition:\n    filter .5s,\n    opacity .5s,\n    transform .5s cubic-bezier(.16, .035, .24, 1.295);\n  transition:\n    filter .5s,\n    opacity .5s,\n    transform .5s cubic-bezier(.16, .035, .24, 1.295);\n  transition:\n    filter .5s,\n    opacity .5s,\n    transform .5s cubic-bezier(.16, .035, .24, 1.295),\n    -webkit-filter .5s,\n    -webkit-transform .5s cubic-bezier(.16, .035, .24, 1.295);\n  -webkit-transform: scale(.6, .6);\n      -ms-transform: scale(.6, .6);\n          transform: scale(.6, .6);\n}\n\n.icon:hover,\n.icon:focus {\n  cursor: pointer;\n  -webkit-filter: saturate(100%);\n          filter: saturate(100%);\n  opacity: 1;\n  -webkit-transform: scale(.9, .9);\n      -ms-transform: scale(.9, .9);\n          transform: scale(.9, .9);\n}\n\n.icon.linkedin {\n  background-position: 0 0;\n}\n\n.icon.instagram {\n  background-position: 0 -64px;\n  top: .3rem;\n}\n\n.icon.codepen {\n  background-position: 0 -125px;\n  -webkit-filter: contrast(0%);\n          filter: contrast(0%);\n\n  &:hover {\n    -webkit-filter: contrast(100%);\n            filter: contrast(100%);\n  }\n}\n\n.icon.github {\n  background-position: 0 -190px;\n}", ""]);



/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29uLXNwcml0ZSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTE4LjAxMiwxOTEuNDI1IEM4Ljk1NCwxOTEuNDI1IDEuNzA4LDE5OC45MSAxLjcwOCwyMDguMjY1IEMxLjcwOCwyMTUuNzUgNi40MTgsMjIxLjkyNSAxMi45MzksMjI0LjE3IEMxMy44NDUsMjI0LjM1NyAxNC4wMjYsMjIzLjc5NiAxNC4wMjYsMjIzLjQyMiBMMTQuMDI2LDIyMC42MTUgQzkuNDk3LDIyMS41NTEgOC41OTEsMjE4LjM3IDguNTkxLDIxOC4zNyBDNy44NjYsMjE2LjQ5OSA2Ljc3OSwyMTUuOTM3IDYuNzc5LDIxNS45MzcgQzUuMzMsMjE0LjgxNCA2Ljk2LDIxNS4wMDEgNi45NiwyMTUuMDAxIEM4LjU5LDIxNS4xODggOS40OTYsMjE2LjY4NSA5LjQ5NiwyMTYuNjg1IEMxMC45NDUsMjE5LjMwNSAxMy4zLDIxOC41NTYgMTQuMjA2LDIxNy45OTUgQzE0LjM4NywyMTYuODcyIDE0Ljc0OSwyMTYuMTI0IDE1LjI5MywyMTUuNzUgQzExLjY3LDIxNS4zNzYgNy44NjYsMjEzLjg3OSA3Ljg2NiwyMDcuNTE3IEM3Ljg2NiwyMDUuNjQ2IDguNTkxLDIwNC4xNDkgOS40OTYsMjAzLjAyNiBDOS4zMTUsMjAyLjY1MiA4Ljc3MSwyMDAuOTY4IDkuNjc3LDE5OC41MzUgQzkuNjc3LDE5OC41MzUgMTEuMTI2LDE5OC4xNjEgMTQuMjA2LDIwMC4yMTkgQzE1LjQ3NCwxOTkuODQ1IDE2LjkyMywxOTkuNjU4IDE4LjM3MywxOTkuNjU4IEMxOS44MjIsMTk5LjY1OCAyMS4wOSwxOTkuODQ1IDIyLjU0LDIwMC4yMTkgQzI1LjYyLDE5Ny45NzQgMjcuMDY5LDE5OC41MzUgMjcuMDY5LDE5OC41MzUgQzI3Ljk3NSwyMDAuNzggMjcuNDMxLDIwMi42NTIgMjcuMjUsMjAzLjAyNiBDMjguMzM3LDIwNC4xNDkgMjguODgsMjA1LjY0NiAyOC44OCwyMDcuNTE3IEMyOC44OCwyMTQuMDY2IDI1LjA3NiwyMTUuMzc2IDIxLjQ1MywyMTUuNzUgQzIxLjk5NiwyMTYuMzExIDIyLjU0LDIxNy4yNDcgMjIuNTQsMjE4LjkzMSBMMjIuNTQsMjIzLjYwOSBDMjIuNTQsMjIzLjk4MyAyMi45MDIsMjI0LjU0NSAyMy42MjcsMjI0LjM1NyBDMzAuMTQ4LDIyMi4xMTIgMzQuNjc3LDIxNS43NSAzNC42NzcsMjA4LjQ1MiBDMzQuMzE1LDE5OS4wOTYgMjcuMDY5LDE5MS40MjQgMTguMDExLDE5MS40MjQgTDE4LjAxMiwxOTEuNDI1IFoiIGlkPSJHSCIgZmlsbD0iIzgyOUFBOCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMzIuMjcyLDE0NS4zNjMgTDI4LjUzLDE0Mi44NiBMMzIuMjcyLDE0MC4zNTcgTDMyLjI3MiwxNDUuMzYzIFogTTE5LjM1NiwxNTUuOTcyIEwxOS4zNTYsMTQ4Ljk5NiBMMjUuODQsMTQ0LjY1OSBMMzEuMDc0LDE0OC4xNiBMMTkuMzU2LDE1NS45NzIgWiBNMTcuODYxLDE0Ni4zOTggTDEyLjU3MSwxNDIuODYgTDE3Ljg2MSwxMzkuMzIyIEwyMy4xNTEsMTQyLjg2IEwxNy44NjEsMTQ2LjM5OCBaIE0xNi4zNjUsMTU1Ljk3MiBMNC42NDYsMTQ4LjE2IEw5Ljg4MSwxNDQuNjU5IEwxNi4zNjUsMTQ4Ljk5NiBMMTYuMzY1LDE1NS45NzIgWiBNMy40NDksMTQwLjM1NyBMNy4xOTEsMTQyLjg2IEwzLjQ0OSwxNDUuMzYzIEwzLjQ0OSwxNDAuMzU3IFogTTE2LjM2NSwxMjkuNzQ3IEwxNi4zNjUsMTM2LjcyMyBMOS44ODEsMTQxLjA2MSBMNC42NDYsMTM3LjU1OSBMMTYuMzY1LDEyOS43NDcgWiBNMTkuMzU2LDEyOS43NDcgTDMxLjA3NCwxMzcuNTU5IEwyNS44NCwxNDEuMDYxIEwxOS4zNTYsMTM2LjcyMyBMMTkuMzU2LDEyOS43NDcgWiBNMzUuMjUsMTM3LjM2MiBMMzUuMjM4LDEzNy4yOTcgTDM1LjIxMiwxMzcuMTcxIEwzNS4xODksMTM3LjA5OSBMMzUuMTUsMTM2Ljk5IEwzNS4xMTcsMTM2LjkxNyBMMzUuMDY2LDEzNi44MTggTDM1LjAyNCwxMzYuNzQ4IEwzNC45NjEsMTM2LjY1NyBMMzQuOTEsMTM2LjU5MiBMMzQuODM1LDEzNi41MTEgTDM0Ljc3NSwxMzYuNDUyIEwzNC42OSwxMzYuMzgxIEwzNC42MjIsMTM2LjMzIEwzNC41OTcsMTM2LjMxMiBMMTguNjksMTI1LjcwNyBDMTguMTg4LDEyNS4zNzIgMTcuNTMzLDEyNS4zNzIgMTcuMDMxLDEyNS43MDcgTDEuMTI0LDEzNi4zMTIgTDEuMDk5LDEzNi4zMyBMMS4wMzIsMTM2LjM4MSBMMC45NDcsMTM2LjQ1MiBMMC44ODcsMTM2LjUxMSBMMC44MTMsMTM2LjU5MiBMMC43NjEsMTM2LjY1NyBMMC42OTgsMTM2Ljc0OCBMMC42NTUsMTM2LjgxOCBMMC42MDQsMTM2LjkxNyBMMC41NzEsMTM2Ljk5IEwwLjUzMiwxMzcuMDk5IEwwLjUwOSwxMzcuMTcxIEwwLjQ4MywxMzcuMjk3IEwwLjQ3MSwxMzcuMzYyIEwwLjQ1NywxMzcuNTU3IEwwLjQ1NywxNDguMTYyIEwwLjQ3MSwxNDguMzU4IEwwLjQ4MywxNDguNDIyIEwwLjUwOSwxNDguNTQ4IEwwLjUzMiwxNDguNjIgTDAuNTcxLDE0OC43MyBMMC42MDQsMTQ4LjgwMiBMMC42NTUsMTQ4LjkwMiBMMC42OTgsMTQ4Ljk3MSBMMC43NjEsMTQ5LjA2MiBMMC44MTMsMTQ5LjEyNyBMMC44ODcsMTQ5LjIwOCBMMC45NDcsMTQ5LjI2NiBMMS4wMzIsMTQ5LjMzOCBMMS4wOTksMTQ5LjM4OSBMMS4xMjQsMTQ5LjQwNyBMMTcuMDMxLDE2MC4wMTIgQzE3LjI4MiwxNjAuMTggMTcuNTcyLDE2MC4yNjQgMTcuODYxLDE2MC4yNjQgQzE4LjE1LDE2MC4yNjQgMTguNDM5LDE2MC4xOCAxOC42OSwxNjAuMDEyIEwzNC41OTcsMTQ5LjQwNyBMMzQuNjIyLDE0OS4zODkgTDM0LjY5LDE0OS4zMzggTDM0Ljc3NSwxNDkuMjY2IEwzNC44MzUsMTQ5LjIwOCBMMzQuOTEsMTQ5LjEyNyBMMzQuOTYxLDE0OS4wNjIgTDM1LjAyNCwxNDguOTcxIEwzNS4wNjYsMTQ4LjkwMiBMMzUuMTE3LDE0OC44MDIgTDM1LjE1LDE0OC43MyBMMzUuMTg5LDE0OC42MiBMMzUuMjEyLDE0OC41NDggTDM1LjIzOCwxNDguNDIyIEwzNS4yNSwxNDguMzU4IEwzNS4yNjMsMTQ4LjE2MiBMMzUuMjYzLDEzNy41NTcgTDM1LjI1LDEzNy4zNjIgWiIgaWQ9IkNQIiBmaWxsPSIjMUExOTE4Ij48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJJRyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4wMDAwMDAsIDYzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTI5LjA5NywwIEw1LjExMSwwIEMyLjgyNywwIDAuOTk5LDEuODExIDAuOTk5LDQuMDc1IEwwLjk5OSwxMiBMMzIuOTgsMTIgTDMyLjk4LDQuMDc1IEMzMy4yMDgsMS44MTEgMzEuMzgxLDAgMjkuMDk3LDAgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjODk1QTREIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLjk2NywxMiBMMi45NjMsMTIgTDIuOTYzLDAgQzIuMDc2LDAgMS42MTksMCAwLjk2NywwLjE4OCBMMC45NjcsMTIgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjRkYzOTM5Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBmaWxsPSIjRkVEMDQ5IiBwb2ludHM9IjIuOTYyIDAgNC45NTkgMCA0Ljk1OSAxMiAyLjk2MiAxMiI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgZmlsbD0iIzEwREQ3NiIgcG9pbnRzPSI0LjczNyAwIDYuNzM0IDAgNi43MzQgMTIgNC43MzcgMTIiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU2hhcGUiIGZpbGw9IiM1RkNDRkYiIHBvaW50cz0iNi43MzQgMCA4LjczMSAwIDguNzMxIDEyIDYuNzM0IDEyIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0LjAwMDAwMCwgMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsPSIjMTYyODM4IiBjeD0iMy4yNjMiIGN5PSIzLjczNyIgcj0iMi44ODQiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIGZpbGw9IiMyQzQzNTYiIGN4PSIzLjI2MyIgY3k9IjMuNzM3IiByPSIxLjU1MyI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iIzQ3NjM3QSIgY3g9IjMuMjYzIiBjeT0iMy43MzciIHI9IjEiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTEsMTIgTDEsMjcuNTMxIEMxLDI5Ljc1IDIuODE2LDMxLjUyNSA1LjA4NSwzMS41MjUgTDI4LjkxNSwzMS41MjUgQzMxLjE4NSwzMS41MjUgMzMsMjkuNzUgMzMsMjcuNTMxIEwzMywxMiBMMSwxMiBaIiBpZD0iU2hhcGUiIGZpbGw9IiNFNUUwREMiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgZmlsbD0iIzc1NDgzRCIgcG9pbnRzPSIyNi4zMjkgMTIuNTA2IDI0LjExIDEwLjI4NyAyNC4xMSAxMi41MDYiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMC45ODQsMTIuMjIyIEwxMSwyMi4yMDYgTDIwLjMxOSwzMS41MjUgTDI4Ljk3MiwzMS41MjUgQzMxLjE5MSwzMS41MjUgMzIuOTY2LDI5Ljc1IDMyLjk2NiwyNy41MzEgTDMyLjk2NiwxOS4xIEwyNS44NjYsMTIgTDIwLjk4NSwxMiBMMjAuOTg1LDEyLjIyMiBMMjAuOTg0LDEyLjIyMiBaIiBpZD0iU2hhcGUiIGZpbGw9IiNEMENCQzUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNy4wMDAwMDAsIDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iI0RDRDdEMyIgY3g9IjEwIiBjeT0iMTAiIHI9IjkuMTA5Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsPSIjMTYyODM4IiBjeD0iMTAiIGN5PSIxMCIgcj0iNy4yNCI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iIzJDNDM1NiIgY3g9IjEwIiBjeT0iMTAiIHI9IjQuMjA0Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsPSIjMTYyODM4IiBjeD0iMTAiIGN5PSIxMCIgcj0iMi4xMDIiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIGZpbGw9IiM0NzYzN0EiIGN4PSIxMi41NjkiIGN5PSI3LjQzMSIgcj0iMS42MzUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLjYsMTAuNiBMOS4yLDEwLjYgTDkuMiwzMiBMMi42LDMyIEwyLjYsMTAuNiBaIE01LjgsMCBDOCwwIDkuNiwxLjggOS42LDMuOCBDOS42LDYgNy44LDcuNiA1LjgsNy42IEMzLjYsNy42IDIsNS44IDIsMy44IEMyLDEuOCAzLjgsMCA1LjgsMCBaIE0xMy40LDEwLjYgTDE5LjgsMTAuNiBMMTkuOCwxMy42IEMyMC42LDEyIDIyLjgsMTAuMiAyNiwxMC4yIEMzMi44LDEwLjIgMzQsMTQuNiAzNCwyMC40IEwzNCwzMi4yIEwyNy40LDMyLjIgTDI3LjQsMjEuOCBDMjcuNCwxOS40IDI3LjQsMTYuMiAyNCwxNi4yIEMyMC42LDE2LjIgMjAsMTguOCAyMCwyMS42IEwyMCwzMi4yIEwxMy40LDMyLjIgTDEzLjQsMTAuNiBaIiBpZD0iSU4iIGZpbGw9IiMwMDdCQjUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, "/* 🐾 Footer *****************************************************************/\n.footer {\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  text-align: center;\n}\n", ""]);



/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, "/* ⚙️ Controls ****************************************************************/\n.controls {\n}\n", ""]);



/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Imports
exports.i(__webpack_require__(70), "");
exports.i(__webpack_require__(71), "");
exports.i(__webpack_require__(72), "");
exports.i(__webpack_require__(73), "");

// Module
exports.push([module.i, "/* 👩‍💻 App *********************************************************************/\n\n\n/* Vars */\n:root {\n  /* colors */\n\n  --red: #ce3a67;\n  --orange: #f0b046;\n  --yellow: rgb(200, 200, 60);\n  --green: #46a789;\n  --blue: #33bce1;\n  --purple: #AA71C4;\n\n  --border-green: #285547;\n  --border-gray: #333333;\n  --secondary-color: white;\n  --bg-color: rgb(25, 25, 25);\n  --gray: rgb(100, 100, 100);\n\n  /* fonts */\n  --body-text-color: rgb(220, 220, 220);\n\n  /* layout */\n  --trailer: 5vh;\n  --border-radius: 1.5rem;\n  --desktop-sidebar-width: 25vw;\n  --desktop-header-height: 10rem;\n  --desktop-gutter: 2.5vw;\n}", ""]);



/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, "/* 🏕 Reset ******************************************************************/\n:root {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nhtml {\n-webkit-text-size-adjust: 100%; /* Prevent font scaling in landscape while allowing user zoom */\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n* {\n  border: 0;\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n}\n\nimg {\n  max-width: 100%;\n}\n\n/* Remove image link borders */\na img,\n:link img,\n:visited img {\n  border: 0;\n}\n\n/* Selection color  */\n\n::-moz-selection {\n  background: rgba(0, 0, 0, .8);\n  color: rgb(255, 255, 255);\n}\n\n::selection {\n  background: rgba(0, 0, 0, .8);\n  color: rgb(255, 255, 255);\n}\n\n/* Mobile */\na:link {\n  -webkit-tap-highlight-color: transparent;\n}\n", ""]);



/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, ".hidden-text {\n  background-color: transparent;\n  border: 0;\n  color: transparent;\n  font: 0/0 a;\n  text-shadow: none;\n  display: none;\n  white-space: nowrap;\n}", ""]);



/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, "/* ✍️ Typography **************************************************************/\n@font-face {\n    font-family: 'FiraCode Light';\n    font-style: normal;\n    font-weight: 400;\n    src: local('FiraCode Light'), local('FiraCodeLight'),\n    url('https://cdn.jsdelivr.net/npm/firacode@1.205.0/distr/woff2/FiraCode-Light.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n    url('https://cdn.jsdelivr.net/npm/firacode@1.205.0/distr/woff/FiraCode-Light.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\nhtml {\n  font-size: 62.5%;\n  /* font-family: 'Fira Mono', monospace; */\n  font-family: 'FiraCode Light', monospace;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  font-weight: 400;\n}\n\nbody {\n  color: var(--body-text-color);\n  font-size: 1.3rem;\n  letter-spacing: .03rem;\n  line-height: 1.75;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 400;\n}\n\nh1 {\n  font-size: 1.3rem;\n  color: #46a789;\n  padding-bottom: .5rem;\n}\n\np {\n  margin-bottom: 2rem;\n}\n\na {\n  text-decoration: none;\n  color: var(--green);\n  -webkit-transition: color .3s ease-out;\n  -o-transition: color .3s ease-out;\n  transition: color .3s ease-out;\n}\n\na:hover {\n  cursor: pointer;\n  color: var(--yellow);\n}\n\na:focus {\n  outline: none;\n}\n\nul,\nol {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n\n.desktop,\n.desktop h1 {\n  font-size: 1.5rem;\n  letter-spacing: .15rem;\n  line-height: 2;\n}\n\n.desktop h1 {\n  padding-bottom: 2.1rem;\n}\n", ""]);



/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, "/* 📰 Layout ******************************************************************/\nbody {\n  background: var(--bg-color);\n}\n\n.mobile {\n  padding: 8vw;\n  display: grid;\n  height: 100vh;\n  grid-template-areas:\n    \"header\"\n    \"main\"\n    \"footer\";\n  grid-template-rows: 100px 1fr 160px;\n}\n\n.mobile main {\n  width: 100%;\n}\n\n.mobile .header {\n  grid-area: header;\n}\n\n.mobile .main {\n  grid-area: main;\n}\n\n.mobile .footer {\n  grid-area: footer;\n}\n\n/* Desktop */\n.desktop .left-column {\n  position: fixed;\n  width: var(--desktop-sidebar-width);\n  left: 0;\n  top: 0;\n  height: 100vh;\n  padding-right: var(--desktop-gutter);\n  display: grid;\n  grid-template-areas:\n    \"header\"\n    \"nav\"\n    \"footer\";\n  grid-template-rows: 100px 1fr calc(170px + var(--trailer));\n  /* show column borders */\n  /* box-shadow: inset 0 0 0 10px rgba(150, 0, 0, .3); */\n}\n\n.desktop .header {\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n\n.desktop .controls {\n  grid-area: controls;\n  /* align-items: center; */\n}\n\n.desktop .nav {\n  grid-area: nav;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  margin-top: var(--trailer);\n}\n\n.desktop .footer {\n  grid-area: footer;\n}\n\n.desktop .main {\n  grid-area: main;\n  min-height: 100vh;\n  -ms-flex-align: baseline;\n      align-items: baseline;\n  -ms-flex-pack: center;\n      justify-content: center;\n\n  padding: calc(var(--desktop-header-height) + var(--trailer) + 1.1rem)\n    var(--desktop-sidebar-width)\n    0;\n  /* show column borders */\n  /* box-shadow: inset 0 0 0 10px rgba(255, 255, 150, 1); */\n}\n\n.desktop .right-column {\n  position: fixed;\n  width: var(--desktop-sidebar-width);\n  right: 0;\n  top: 0;\n  height: 100vh;\n  display: grid;\n  /* show column borders */\n  /* box-shadow: inset 0 0 0 10px rgba(0, 150, 0, .3); */\n}\n\n/* show grid borders */\n/* .desktop .header,\n.desktop .controls,\n.desktop .nav,\n.desktop .footer {\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .1);\n}\n */\n\n\n", ""]);



/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, "/* imgLoad.css */\n/* Wrapper */\n.image-loader {\n  line-height: 0;\n  position: relative;\n  width: 100%;\n  padding: 0;\n  font-size: 0;\n}\n\n/* Image */\n.image-loader .image {\n  /* visibility: hidden; */\n  position: absolute;\n}\n\n/* Utility classes */\n.image-loader.rounded {\n  border-radius: var(--border-radius);\n  overflow: hidden;\n}\n\n.image-loader.rounded img {\n  border-radius: var(--border-radius);\n}\n\n.desktop .image-loader.rounded {\n  border-radius: calc(var(--border-radius) * 1.25);\n  overflow: hidden;\n}\n\n.image-loader.bordered {\n  -webkit-box-shadow: 0 0 0 1px var(--border-gray);\n          box-shadow: 0 0 0 1px var(--border-gray);\n}\n\n.image-loader.circle {\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.three-up {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n.two-up .image-loader,\n.three-up .image-loader {\n  margin-bottom: calc(var(--trailer) / 2);\n}\n\n.desktop .three-up {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n}\n\n.desktop .three-up .three-up-wrapper {\n  width: 30%;\n}\n\n.desktop .three-up .three-up-wrapper:not(:last-of-type) {\n  margin-right: calc(var(--desktop-gutter) / 2);\n}\n\n.desktop .two-up {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n}\n\n.desktop .two-up .two-up-wrapper {\n  width: 45%;\n}\n\n.desktop .two-up .two-up-wrapper:not(:last-of-type) {\n  margin-right: calc(var(--desktop-gutter) / 2);\n}\n\n/* scrollable */\n.image-loader.scrollable {\n  overflow-y: scroll;\n}\n\n.desktop .image-loader.scrollable {\n  overflow-y: scroll;\n}\n\n.desktop .image.scrollable {\n  overflow: hidden;\n  /* border-radius: 0; */\n}\n\n/* Loading message */\n.loading-message {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n      -ms-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n/* Controls */\n.image-loader-controls {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n  margin: calc(var(--trailer) / 2) ;\n}", ""]);



/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, ".loading-indicator {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -150%);\n      -ms-transform: translate(-50%, -150%);\n          transform: translate(-50%, -150%);\n  line-height: 0;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.node-1,\n.node-2,\n.node-3 {\n  background: #333;\n  width: 1rem;\n  height: 1rem;\n  -webkit-animation: pulse 4s infinite both;\n          animation: pulse 4s infinite both;\n  position: relative;\n}\n\n.node-1 {\n  left: -.5rem;\n}\n\n.node-2 {\n  -webkit-animation-delay: .5s;\n          animation-delay: .5s;\n}\n\n.node-3 {\n  left: .5rem;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n\n@-webkit-keyframes pulse {\n  0%, 100% {\n    opacity: .2;\n    -webkit-transform: scale(.9);\n            transform: scale(.9);\n  } 10% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@keyframes pulse {\n  0%, 100% {\n    opacity: .2;\n    -webkit-transform: scale(.9);\n            transform: scale(.9);\n  } 10% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n", ""]);



/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, ".scroll-button {\n  background-color: rgba(15, 15, 15, .8);\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 5px;\n  margin: 0 auto var(--trailer) auto;\n  opacity: .5;\n  border: 1px solid var(--border-gray);\n  -webkit-transition:\n    opacity .3s ease-out,\n    border .3s ease-out;\n  -o-transition:\n    opacity .3s ease-out,\n    border .3s ease-out;\n  transition:\n    opacity .3s ease-out,\n    border .3s ease-out;\n  position: relative;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n      -ms-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n.scroll-button:hover {\n  opacity: 1;\n  border: 1px solid var(--border-green);\n}\n\n.scroll-button:focus {\n  outline: 0; /* hide chrome outline */\n}\n\n.up-arrow svg {\n  fill: White;\n}\n\n.scroll-button:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: transparent;\n  border-radius: 3rem;\n  -webkit-box-shadow: 0 .5vh 1.5vh 0 rgba(0, 0, 0, .35);\n          box-shadow: 0 .5vh 1.5vh 0 rgba(0, 0, 0, .35);\n  opacity: 0;\n  -webkit-transition: opacity .3s ease-in-out;\n  -o-transition: opacity .3s ease-in-out;\n  transition: opacity .3s ease-in-out;\n  z-index: -1;\n}\n\n.scroll-button:hover:after {\n  opacity: 1;\n  cursor: pointer;\n}\n\n\n/* Desktop positioning */\n.desktop .scroll-button {\n  /* position: fixed; */\n  right: 50%;\n  bottom: 0;\n  margin-bottom: var(--trailer);\n  -webkit-transition:\n    opacity .3s ease-in-out,\n    -webkit-transform .3s ease-in-out;\n  transition:\n    opacity .3s ease-in-out,\n    -webkit-transform .3s ease-in-out;\n  -o-transition:\n    opacity .3s ease-in-out,\n    transform .3s ease-in-out;\n  transition:\n    opacity .3s ease-in-out,\n    transform .3s ease-in-out;\n  transition:\n    opacity .3s ease-in-out,\n    transform .3s ease-in-out,\n    -webkit-transform .3s ease-in-out;\n  -webkit-transform:\n    scale(.8, .8)\n    translateX(-50%);\n      -ms-transform:\n    scale(.8, .8)\n    translateX(-50%);\n          transform:\n    scale(.8, .8)\n    translateX(-50%);\n}\n\n.desktop .scroll-button:hover {\n  -webkit-transform-origin: center;\n      -ms-transform-origin: center;\n          transform-origin: center;\n  -webkit-transform:\n    scale(1, 1)\n    translate(-40%, -8%);\n      -ms-transform:\n    scale(1, 1)\n    translate(-40%, -8%);\n          transform:\n    scale(1, 1)\n    translate(-40%, -8%);\n}", ""]);



/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, ".projects {\n  width: 100%;\n  max-width: 92rem;\n}\n\n.project-summary {\n  width: 100%;\n  margin-bottom: calc(var(--trailer) * 2);\n  position: relative;\n}\n\n.project {\n  top: -1px;\n  position: relative;\n}\n\n.project p,\n.project-summary p {\n  margin-bottom: calc(var(--trailer) / 2);\n}\n\n.project-cover {\n  background: #222;\n  line-height: 0;\n  border-radius: var(--border-radius);\n  padding: 3rem;\n  position: relative;\n  border: 1px solid var(--border-gray);\n  -webkit-transition: border .3s ease-in-out;\n  -o-transition: border .3s ease-in-out;\n  transition: border .3s ease-in-out;\n}\n\n.project-summary .project-cover:hover {\n  border: 1px solid var(--border-green);\n}\n\n.project-summary .project-cover:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: transparent;\n  border-radius: var(--border-radius);\n  -webkit-box-shadow: 0 .5vh 1.5vh 0 rgba(0, 0, 0, .35);\n          box-shadow: 0 .5vh 1.5vh 0 rgba(0, 0, 0, .35);\n  opacity: 0;\n  -webkit-transition: opacity .3s ease-in-out;\n  -o-transition: opacity .3s ease-in-out;\n  transition: opacity .3s ease-in-out;\n  z-index: -1;\n}\n\n.desktop .project-summary .project-cover:after {\n  -webkit-box-shadow: 0 .5vh 1.5vh 0 rgba(0, 0, 0, .35);\n          box-shadow: 0 .5vh 1.5vh 0 rgba(0, 0, 0, .35);\n}\n\n.project-summary .project-cover:hover:after {\n  opacity: 1;\n}\n\n.desktop .project-summary {\n  top: -1px; /* optical alignment */\n}\n\n.desktop .project-summary p {\n  margin-bottom: 3.5rem;\n}\n\n.project-content {\n  width: 100%;\n  margin-bottom: var(--trailer);\n  position: relative;\n  background: #222;\n  border-radius: var(--border-radius);\n  padding: 3rem;\n  border: 1px solid var(--border-gray);\n}\n\n.desktop .projects {\n  top: -1px; /* optical alignment */\n}\n\n.desktop .summary p {\n  margin-bottom: 3.5rem;\n}\n\n.project-content section:not(:last-of-type) {\n  margin-bottom: var(--trailer);\n}\n\n.back-link {\n  display: block;\n  width: 100%;\n  text-align: center;\n  margin-bottom: var(--trailer);\n}\n\n.back-link:before {\n  content: \"<== \";\n}\n\n\n.code.projects {\n  display: grid;\n}", ""]);



/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, "/* <> Code Project ************************************************************/\n.code-project {\n  border-radius: var(--border-radius);\n  -webkit-box-shadow: 0 0 0 1px var(--border-gray);\n          box-shadow: 0 0 0 1px var(--border-gray);\n  position: relative;\n}\n\n.code-pane {\n  border-radius: var(--border-radius);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n  background: #151515;\n}\n\n.code-project .image-loader {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.code-toggle {\n  position: absolute;\n  right: 3rem;\n  bottom: -5rem;\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\n.desktop .code-toggle {\n  -webkit-transform: scale(1.25);\n      -ms-transform: scale(1.25);\n          transform: scale(1.25);\n}\n\n.code-toggle svg {\n  -webkit-transition: fill, .3s ease-out;\n  -o-transition: fill, .3s ease-out;\n  transition: fill, .3s ease-out;\n  fill: var(--green)\n}\n\n.code-toggle:hover svg {\n  fill: var(--yellow);\n}\n\n.code.projects pre {\n  background: #151515;\n  padding: 2rem;\n  font-size: 90%;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n\n/* syntax hilighting */\n.code.projects code {\n  font-family: 'FiraCode Light', monospace !important;\n}\n.code.projects .token.comment {\n  color: #ccc;\n}\n\n.code.projects .token.keyword {\n  color: var(--green);\n}\n\n.code.projects .token.string {\n  color: var(--orange);\n}\n\n.code.projects .token.function {\n  color: var(--yellow);\n}\n\n.code.projects .token.boolean {\n  color: var(--blue);\n}\n\n.code.projects .token.attr-name {\n  color: var(--red);\n}\n\n.code.projects .token.tag {\n  color: var(--green);\n}\n\n.code.projects .react-syntax-highlighter-line-number {\n  color: #666;\n}", ""]);



/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, "/* imgGrid.css */\n.img-grid-wrapper {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 3;\n  overflow: hidden;\n  border-radius: var(--border-radius);\n  -webkit-box-shadow: 0 0 0 1px var(--border-gray);\n          box-shadow: 0 0 0 1px var(--border-gray);\n}\n\n.desktop .img-grid-wrapper {\n  border-radius: calc(var(--border-radius) * 1.25);\n}\n\n.img-grid,\n.grid-borders {\n  position: absolute;\n  width: 100%;\n  display: grid;\n  grid-auto-rows: 1fr;\n  z-index: 2;\n}\n\n.img-grid {\n  opacity: .75;\n}\n\n.img-grid:before,\n.grid-borders:before {\n  content: '';\n  width: 0;\n  padding-bottom: 100%;\n  grid-row: 1 / 1;\n  grid-column: 1 / 1;\n}\n\n.img-grid > *:first-child,\n.grid-borders > *:first-child {\n  grid-row: 1 / 1;\n  grid-column: 1 / 1;\n}\n\n/* Cells */\n.img-grid .cell {\n  -webkit-transition: opacity 1s ease-in-out;\n  -o-transition: opacity 1s ease-in-out;\n  transition: opacity 1s ease-in-out;\n  /* help chrome + webkit play nice with mix-blend-mode*/\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n}\n\n/* Borders */\n.grid-borders {\n  display: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 5;\n  pointer-events: none;\n  -webkit-box-shadow: inset 1px 1px 0 5px rgba(255, 0, 0, .8);\n          box-shadow: inset 1px 1px 0 5px rgba(255, 0, 0, .8);\n}\n\n.grid-borders .cell {\n  -webkit-box-shadow: inset -1px -1px 0 0 rgba(255, 255, 255, .8);\n          box-shadow: inset -1px -1px 0 0 rgba(255, 255, 255, .8);\n  opacity: 1;\n  mix-blend-mode: normal;\n  background-color: transparent;\n  z-index: 5;\n}\n\n\n", ""]);



/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, ".about.content {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  width: 100%;\n}\n\n.profile-pic-wrapper {\n  width: 20rem;\n}\n\n.working-pic-wrapper {\n  width: 20rem;\n  height: 20rem;\n  margin: 0 auto;\n  padding-top: calc(var(--trailer) / 2);\n}\n\n.bio {\n  margin: var(--trailer) 0 calc(var(--trailer) * 2);\n}", ""]);



/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(25);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: ../lib/index.js
var lib = __webpack_require__(3);

// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(17);
var external_react_responsive_default = /*#__PURE__*/__webpack_require__.n(external_react_responsive_);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(8);

// CONCATENATED MODULE: /Users/joshuar/Projects/jr-xix/src/components/navlink/navlink.js
function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}//
/* harmony default export */ var navlink = (function(props){return/*#__PURE__*/external_react_default.a.createElement(router_["Link"],_extends({},props,{getProps:function getProps(_ref){var isCurrent=_ref.isCurrent;// the object returned here is passed to the
// anchor element's props
return{className:isCurrent?"".concat(props.className," current"):"".concat(props.className)};}}));});
// EXTERNAL MODULE: /Users/joshuar/Projects/jr-xix/src/components/nav/nav.css
var nav = __webpack_require__(62);

// CONCATENATED MODULE: /Users/joshuar/Projects/jr-xix/src/components/nav/nav.js
// styles
//
/* harmony default export */ var nav_nav = (function(){return/*#__PURE__*/external_react_default.a.createElement("nav",{className:"nav"},/*#__PURE__*/external_react_default.a.createElement(navlink,{className:"nav-item",to:"/"},"design"),/*#__PURE__*/external_react_default.a.createElement(navlink,{className:"nav-item",to:"/code"},"code"),/*#__PURE__*/external_react_default.a.createElement(navlink,{className:"nav-item",to:"/about"},"about"));});
// EXTERNAL MODULE: /Users/joshuar/Projects/jr-xix/src/components/header/header.css
var header = __webpack_require__(63);

// CONCATENATED MODULE: /Users/joshuar/Projects/jr-xix/src/components/header/header.js
// components
// styles
//
/* harmony default export */ var header_header = (function(){return/*#__PURE__*/external_react_default.a.createElement("header",{className:"header"},/*#__PURE__*/external_react_default.a.createElement(navlink,{to:"/",className:"logo-link"},/*#__PURE__*/external_react_default.a.createElement("svg",{id:"j",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},/*#__PURE__*/external_react_default.a.createElement("path",{d:"M10,7.55c0-.87,0-1-.6-1.39L9.23,6a.31.31,0,0,1,0-.4,15.42,15.42,0,0,0,2.31-1.1c.11,0,.2,0,.22.13,0,.78-.09,1.86-.09,2.78v5.42a9.57,9.57,0,0,1-.47,3.49A7.88,7.88,0,0,1,7.82,20a.38.38,0,0,1-.31-.52,4.27,4.27,0,0,0,1.32-1c.81-.94,1.21-2.55,1.21-5.29ZM11.9,1.16a1.11,1.11,0,0,1-1.19,1.17A1.11,1.11,0,0,1,9.57,1.19,1.15,1.15,0,0,1,10.78,0,1.12,1.12,0,0,1,11.9,1.16Z"})),/*#__PURE__*/external_react_default.a.createElement("h1",{className:"title hidden-text"},"Joshua Richey")),/*#__PURE__*/external_react_default.a.createElement(external_react_responsive_default.a,{key:"mobile",query:"(max-width: 1024px)"},/*#__PURE__*/external_react_default.a.createElement(nav_nav,null)));});
// EXTERNAL MODULE: /Users/joshuar/Projects/jr-xix/src/components/socialLinks/social-links.css
var social_links = __webpack_require__(64);

// CONCATENATED MODULE: /Users/joshuar/Projects/jr-xix/src/components/socialLinks/social-links.js
// styles
//
/* harmony default export */ var socialLinks_social_links = (function(){var links=[{title:"linkedin",url:"https://www.linkedin.com/in/joshuarichey","class":"linkedin"},{title:"instagram",url:"https://instagram.com/joshrr","class":"instagram"},{title:"codepen",url:"https://codepen.io/joshuar","class":"codepen"},{title:"github",url:"https://github.com/joshuarrr","class":"github"}];var linksList=links.map(function(link,i){return/*#__PURE__*/external_react_default.a.createElement("li",{key:"link-"+i,className:"social-link-item"},/*#__PURE__*/external_react_default.a.createElement("a",{className:"social-link icon "+link["class"],href:link.url,rel:"external",target:"_blank"},/*#__PURE__*/external_react_default.a.createElement("span",{className:"social-link-text hidden-text"},link.title)));});return/*#__PURE__*/external_react_default.a.createElement("ul",{className:"social-links"},linksList);});
// EXTERNAL MODULE: /Users/joshuar/Projects/jr-xix/src/components/footer/footer.css
var footer = __webpack_require__(67);

// CONCATENATED MODULE: /Users/joshuar/Projects/jr-xix/src/components/footer/footer.js
// components
// styles
//
/* harmony default export */ var footer_footer = (function(){return/*#__PURE__*/external_react_default.a.createElement("footer",{className:"footer"},/*#__PURE__*/external_react_default.a.createElement(socialLinks_social_links,null));});
// EXTERNAL MODULE: /Users/joshuar/Projects/jr-xix/src/components/controls/controls.css
var controls = __webpack_require__(68);

// CONCATENATED MODULE: /Users/joshuar/Projects/jr-xix/src/components/controls/controls.js
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// styles
//
var controls_Controls=/*#__PURE__*/function(_React$Component){_inherits(Controls,_React$Component);var _super=_createSuper(Controls);function Controls(){var _this;_classCallCheck(this,Controls);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_defineProperty(_assertThisInitialized(_this),"render",function(){var toggleMode=_this.props.controls?_this.props.controls.length?/*#__PURE__*/external_react_default.a.createElement("ul",{className:"controls"},/*#__PURE__*/external_react_default.a.createElement("li",{className:"mode"},"\u2600\uFE0F")):console.log('empty controls array'):console.log('no controls array');return(// toggleMode
null);});return _this;}return Controls;}(external_react_default.a.Component);_defineProperty(controls_Controls,"defaultProps",{controls:null});/* harmony default export */ var controls_controls = (controls_Controls);
// CONCATENATED MODULE: /Users/joshuar/Projects/jr-xix/src/components/grid/grid.js
function grid_typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){grid_typeof=function _typeof(obj){return typeof obj;};}else{grid_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return grid_typeof(obj);}function grid_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function grid_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)grid_setPrototypeOf(subClass,superClass);}function grid_setPrototypeOf(o,p){grid_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return grid_setPrototypeOf(o,p);}function grid_createSuper(Derived){var hasNativeReflectConstruct=grid_isNativeReflectConstruct();return function _createSuperInternal(){var Super=grid_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=grid_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return grid_possibleConstructorReturn(this,result);};}function grid_possibleConstructorReturn(self,call){if(call&&(grid_typeof(call)==="object"||typeof call==="function")){return call;}return grid_assertThisInitialized(self);}function grid_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function grid_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function grid_getPrototypeOf(o){grid_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return grid_getPrototypeOf(o);}function grid_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// components
//
var grid_Grid=/*#__PURE__*/function(_Component){grid_inherits(Grid,_Component);var _super=grid_createSuper(Grid);function Grid(){var _this;grid_classCallCheck(this,Grid);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));grid_defineProperty(grid_assertThisInitialized(_this),"render",function(){return[/*#__PURE__*/external_react_default.a.createElement(external_react_responsive_default.a,{key:"mobile",query:"(max-width: 1024px)"},/*#__PURE__*/external_react_default.a.createElement("div",{className:"mobile"},/*#__PURE__*/external_react_default.a.createElement(header_header,null),/*#__PURE__*/external_react_default.a.createElement("main",{className:"main"},/*#__PURE__*/external_react_default.a.createElement(lib["Routes"],null)),/*#__PURE__*/external_react_default.a.createElement(footer_footer,null),/*#__PURE__*/external_react_default.a.createElement(controls_controls,{controls:['toggle-mode','toggle-fullscreen','toggle-color']}))),/*#__PURE__*/external_react_default.a.createElement(external_react_responsive_default.a,{key:"desktop",query:"(min-width: 1025px)"},/*#__PURE__*/external_react_default.a.createElement("div",{className:"desktop grid"},/*#__PURE__*/external_react_default.a.createElement("div",{className:"left-column"},/*#__PURE__*/external_react_default.a.createElement(header_header,null),/*#__PURE__*/external_react_default.a.createElement(nav_nav,null),/*#__PURE__*/external_react_default.a.createElement(footer_footer,null)),/*#__PURE__*/external_react_default.a.createElement("main",{className:"main"},/*#__PURE__*/external_react_default.a.createElement(lib["Routes"],null)),/*#__PURE__*/external_react_default.a.createElement("div",{className:"right-column"},/*#__PURE__*/external_react_default.a.createElement(controls_controls,{controls:['toggle-mode','toggle-fullscreen','toggle-color']}))))];});return _this;}return Grid;}(external_react_["Component"]);/* harmony default export */ var grid = (grid_Grid);
// EXTERNAL MODULE: /Users/joshuar/Projects/jr-xix/src/app.css
var app = __webpack_require__(69);

// CONCATENATED MODULE: /Users/joshuar/Projects/jr-xix/src/App.js
// components
// styles
//
/* harmony default export */ var App = (function(){return/*#__PURE__*/external_react_default.a.createElement(lib["Root"],null,/*#__PURE__*/external_react_default.a.createElement(grid,null));});
// CONCATENATED MODULE: /Users/joshuar/Projects/jr-xix/src/index.js
// Top level component
//
// Render your app
if(typeof document!=='undefined'){var renderMethod= false?undefined:external_react_dom_default.a.hydrate||external_react_dom_default.a.render;var src_render=function render(Comp){renderMethod(/*#__PURE__*/external_react_default.a.createElement(Comp,null),document.getElementById('root'));};// Render!
src_render(App);// Hot Module Replacement
if(false){}}// Export top level component as JSX (for static rendering)
/* harmony default export */ var src = __webpack_exports__["default"] = (App);

/***/ })
/******/ ]);
});