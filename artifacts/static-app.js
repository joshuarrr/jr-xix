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
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}/* ImgLoad */ /*
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
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}// styles
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
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// components
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
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// components
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
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// components
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
/* harmony default export */ __webpack_exports__["default"] = (function(){return[/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Head"],{key:"head"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title",null,"joshuar(stories - Aila, The Winged Unicorn)")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{key:"content",className:"story content"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Aila, The Winged Unicorn"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"I: The Day"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Dream"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The young unicorn Aila was dozing in the meadow in the hour past dawn, in the hour before day, when she awoke with a jump."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She had been dreaming of the wishing ceremony, and in her dream she had walked down the long aisles past the Minotaur, and around the radiant blue pool where the beloved Siren sisters sang their beautiful harmonies, and then up to the great dais where Osiler the Great Stallion waited, and she stepped her manicured hooves into the divots in the stone that had worn there after eons of similar events, and she froze."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She knew that she must sing, and she knew the song she must sing \u2013 she\u2019d been practicing it for the past two months day and night \u2013 but she could not utter a sound. She looked around at the patient elders who stood in a semi-circle behind the Great Stallion nervously. Elsie, her eldest sister was on the far left and she appeared annoyed. Beside her, Odon, her father, dark and grave, and the largest of the unicorns in the room apart from Osiler. Then came her older cousins, Liba and Pico, and her aunts, and her uncles, and well, everyone. And on her far right-hoof, her mother, Eranor, slender and tall, and purely white with stunning green eyes. Eranor nodded her onward when their eyes met, and that slight nudge broke Aila from her trepidatious trance."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She briefly collected her thoughts and recalled the words that laid out her wish. Words that in the human\u2019s language would translate to falling in love with a handsome tall stallion and raising beautiful and kind foals. It was what nearly every young unicorn maiden had wished for, for several eons. But when she set herself and opened her mouth, her breath came out, but Aila found that she could not make a sound."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Awakening"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She bolted upright which frightened Squalmy, her bunny friend who had been sleeping at her side for warmth, and he darted into the forest through the tall reeds. Three butterflies flitted up into the morning air, and one flitted right past her eyelashes and she flicked her tail harmlessly in mock annoyance."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh jee,\u201D she neighed aloud, \u201CToday ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"is")," the wishing ceremony!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She hopped a few times, kicking the leftover sleep out of her haunches, and sang out a long neigh, both to test out her voice and to express her joy to her friends in the meadow. The wishing ceremony was only the most important day in a young unicorn\u2019s life, and she\u2019d been waiting for it and dreaming about it for all of her 100 years. Well, to be fair she\u2019d only been aware of it for 99 1/2 years, so that would be a more accurate number if you\u2019re particular about such things. But as she bounded towards the endless golden fields of Naranthal where the elders would surely be gathered, something small troubled the young unicorn. She\u2019d never had a ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"bad")," dream about the wishing ceremony. Why now, she wondered?"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Naranthal was still slumbering when she arrived, so she grazed a bit on the tall golden grass. Her head was full of the events to come later in the day. The namings, the blinding, the dream casting, and finally her wishing. She was excited with anticipation for her cousin Liba\u2019s new foal who had turned twenty in the fall and was to be given his name today. Aila had always called him Jialy, but many of the other unicorn\u2019s names for him were equally splendid. And she was excited for her uncle Tabor who was to be blinded for the year so that he could lead the herd to the best pastures - it was a special honor reserved for the eldest and wisest. And of course her mother, Eranor, would be casting dreams for them this year, as it was the fourth convergence of the three important equine planets, and that meant that she, Aila, would be in charge of caring for her dam when the ceremonies and festivities were over. Which meant that she would have to graze even more than usual today if her horn was to have enough energy to share! It was going to be a big day!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She was bodiless in her thoughts a sprightly red fox came bounding out of the forest into the tall grass excitedly."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh! Aila, Aila! Come quick! Follow me! It\u2019s trouble!\u201D he cried."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhat is it, Fisko, what\u2019s the trouble?\u201D She asked."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She didn\u2019t in fact mouth those words, though, because, as you may know, horses and unicorns can\u2019t speak. We can whinny, and neigh, and snort, and huff, and groan, and grunt, and sigh, and squeal, and sing, and bray, and roar\u2026 and okay, we can make a whole sweep of sounds, but we certainly don\u2019t ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"talk"),". No, instead, Aila thought her thoughts, and ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"sent")," them. But the effect was the same, so what\u2019s the difference?"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CIt\u2019s Landry and Squalmy! Hurry!\u201D The fox urged."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila complied and followed Fisko into the woods full of her friends Cedar, and Oak, and Douglas, and Creek, and Slug, and Beetle, and Fern, and Bramble, and Ivy, and\u2026 I\u2019m doing it again, aren\u2019t I. I\u2019ll try to be more concise. She followed the fox into the woods, and though Fisko was fast, she was untroubled by keeping up. She was a unicorn and if she wanted she could run super, super, super fast. But she stayed behind Fisko to see what the trouble was."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Landry was a bunny she had known for many summers, and when she saw his body flat on the ground and motionless, she whinnied in shock."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhat\u2019s happened to him!?\u201D she exclaimed."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWell, him and Squalmy were hopping together, and each was trying to out-hop the other, and that\u2019s when I saw them and I laughed because they were about to hop themselves into the mud! And it\u2019s still funny, and if Landry wasn\u2019t fallen I\u2019d laugh again right now, because Squalmy did hop right into the mud, and when it was Landry\u2019s turn to hop next, he didn\u2019t! And so Squalmy hopped on out and thumped Landry in the ear and then Landry kicked Squalmy back and then they traded hops again but on each other\u2019s heads. And they were real upset with each other, too, and then they traded such very not nice words with each other, and then Squalmy hopped off towards the brook, and Landry tried to hop away too but when he jumped up into the air he just sort of froze, and then fell, and he\u2019s still here where he fell on the ground, right here\u2026\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh Landry, you poor poor thing!\u201D Thought the unicorn."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila bent her nose down to the ground, where her friend Landry lay motionless, and she nudged his furry body with her snout, and she was filled with a tremendous sadness. A tear rose in her eye. And that tear rolled down her cheek, and it rolled off into the air beneath her cheek, and the tear had then decided to make its way in a direct path to the forest floor when it was pierced by one of the sharpest things in the world: a unicorn horn."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The tear exploded into a colorful display. Purple, and pink. and red, and orange, and green, and teal, and blue, and a thousand other colors that only unicorns can see erupted from the spot where there was once a droplet of unicorn eye water. And it flashed out in a great cloud that disappeared almost instantly. But, when it was done, Aila\u2019s horn had retained some of the swirling colors, and it glowed warmly in the forest shade."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"What happened next both startled and amazed Fisko and the forest of friends surrounding Aila and the rabbit. She sharply thrust her horn into his side and picked him up a few inches off the ground. And his body stretched out and his eyes went wide. If you were watching closely you would have noticed the color moving from Aila\u2019s horn in a spiral down into Landry\u2019s body, and if you were watching really close you might have noticed that the color of his fur changed from brown to slightly ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"more")," brown. If you were here to see it, that is."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"When she lifted her head, Aila looked down at her friend, who blinked his eyes three times in quick succession, and then scratched his right ear vigorously with his right foot."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh Aila! You saved poor Landry! I knew you could do it!! Hahaha!!!!\u201D And with that, Fisko the fox leapt over a log and out of sight."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CMister Landry,\u201D Aila looked down at the rabbit. \u201CYou will make haste to apologize to my friend Mister Squalmy, now, won\u2019t you? I believe he owes you one as well. I believe both of your feelings were hurt today.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYes ma\u2019am, absolutely I will. And thank you ma\u2019am, I don\u2019t know what happened, but I feel.. I feel great!!\u201D And Landry bounded off."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila was left alone in the forest. And even if you were here you wouldn\u2019t have noticed this: the quiet unicorn closed her eyes and sighed and then she swallowed, and for a moment she felt as sad and empty as a unicorn could possibly feel, as though she had swallowed a tiny bite of death."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Morning"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The moment passed and she found her joy as she jumped over a muddy patch on her way back to the others. Aila loved to jump, and she did so merrily several times on her way. And she saw a lovely patch of dark green clover which she snacked on momentarily, which whet her appetite for a more substantial grazing."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"When she returned to the fields of Naranthal the other unicorns were mostly all still asleep, and that was fine by her. She had an empty belly to tend! And she grazed and grazed, and when she was full she ate some more because she knew she would need her energy later."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Liba was among the first to rise and when she saw Aila she made her way over and bowed customarily."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CGracious morning to you, young filly, how are you enjoying this day so far?\u201D Liba inquired."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CToday has been grand. I am excited, of course, about the ceremonies. I restored Landry again, and that left me a bit cold, but I\u2019ve warmed myself on this delicious grass and my heart is full again. And you, Liba, are you happy today? Are you excited to find Jialy\u2019s true name?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI am\u201D, Liba emoted, but she looked aside at the rolling hills. \u201CI am just nervous because Levnis feels strongly that the foal\u2019s name will be Ogok, and as you know I would much prefer Ansil. But of course it isn\u2019t up to me.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI am sure that Jialy will love his name no matter what it turns out to be!\u201D, Aila encouraged."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI am sure. But Ogok!?\u201D Liba scoffed, \u201CI\u2019d cry\u201D."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CSurely not, Liba! You will find joy in his name because it is his true sound. You only fear this name because you do not believe it is correct. But if it comes to be, you will know, and your love will cover this fear. You know this!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI do,\u201D she replied \u201Cbut still, Ogok the Great!?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI admit that it sounds\u2026 a bit silly.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"And they both laughed, and they grazed, and Liba disturbed a sleeping Jay which she chased playfully for a bit, and Aila discovered a bit of golden clover, and thought to herself, \u201CWhat a wonderful day this is turning out to be!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"While she grazed, she thought longingly of her wish. She had of course been friends with the stallions of her herd for, well, for forever. But to truly love.. that must be the best feeling in the world, she thought. \u2018I bet it is magical. And my stallion will be the tallest in the herd, even taller than Odon or Osiler. He\u2019ll be all black, but with a hint of auburn that flashes in the sunlight, and he will be kind and powerful, and we will make a thousand foals.\u2019 And her heart was aflutter, as she grazed and fantasized about her wish."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"But a distant reservation disturbed her reveries. Though it was unclear what, something pulled on her, nagged her, and her dreaming dissolved. And she paused and looked around at the field, and at the rolling hills, and her friend the bee buzzing by, and the forest, and the rousing herd of beautiful rising unicorns, and she took a deep breath, and she cantered off to make her preparations for the day."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"II: The Ceremony"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Namings"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"There were to be four namings that day, and they came first so that the newest named could participate in the rest of the ceremonies. Names are very important to unicorns, for they serve to focus of all their magical energy. Without a name, a unicorn can run fast, but not super super super fast. And they can light their horns in a marvelous display, but they cannot channel that energy into acts of intention. They can bless, and they can send thoughts, but they cannot bless an individual creature, and they cannot project their thoughts as more than quiet hints. They can heal, but they cannot revive, and so for that reason, they are cared for and protected by the entire herd, and they are thought of as children without true individualism. But all of that changes with the passage of the naming ceremony."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The foal whom Aila called Jialy was last to receive his name that day. Aila\u2019s names for the others were Morsha, Esper, and Thedlin. Morsha was a fine golden brown young mare, with a tremendously long blonde mane. Aila cared greatly for her as her dam was Aila\u2019s aunt Rostly. Aila loved all of her herd \u2013 it was her family after all \u2013 but she was especially friendly with Liba."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Liba had a rebellious streak in her spirit that was matched by a jagged red stripe down her golden right flank. On several occasions, Aila had joined Liba on long walks far away from the herd, and they talked by opening and sharing their hearts and swirling their unformed thoughts together."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Once they had even brazenly approached the gates to the other realms together, and though Aila was quite apprehensive about it, they put their noses through the distorted, swirling, images and peered into the world of The Men. They only peeked through for a moment, but what they saw confounded Aila and Liba both. For days Aila replayed disjointed scenes of Men and things that made little sense to her, but Liba was unbothered by such thoughts. Aila\u2019s curiosity festered, and one day she has brought it to Liba, but Liba said only that there was no need to worry themselves about the lives of Men, that they were trivial and simple, and perhaps she should have never taken Aila there. And they never did go back there together, but they did maintain a habit of going on long adventures making friends with all the beasts of their world. And though Liba never went back to the gates, Aila one day would."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"At sundown, Morsha and the three others to be named approached the curved trees that marked the entrance to the Minotaur\u2019s maze with the rest of the herd at their backs. Their bodies together were striking in the waning light. Morsha was bright gold; Esper wore dappled blue; Thedlin was in white with auburn forelegs, tail, and mane; and of course Jialy was wearing his shaggy dark brown coat. In the waning light of the sun and the tinge of light from the moons their four hides each had a distinct glow about them, while in collective they simply shone."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"From the shadows of the two great curved trees at the edge of the forest emerged Osiler. Without delay he approached the four foals and when within a few feet, he rose on his hind legs and stomped forcibly down with his front hooves. There was a great thunderous sound, and a cloud of mist arose at his feet that quickly evaporated revealing a fresh spring of pure crystalline water."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CFirst.\u201D He boomed. And he looked down to Morsha. Because he was the Great Stallion he did not have a name for her."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Nervous but excited, Morsha stepped forward into the pool. It glowed gently where her hooves touched, but she only sank in a few inches. She took two more small steps towards the Great Stallion and looked shyly up at him."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhat is your name?\u201D Osiler cried."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The rest of the herd, about 27 unicorns in total, were gathered behind the namelings in a wide arc. The first to call out was Morsha\u2019s dam, Rostly. She stepped forward, and responded, \u201CTinip!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"And from the horn of the unicorn standing in the pool came a strong but gentle blue light. And Rostly stepped back."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Her sire, Trally, stepped forth. \u201CIoni!\u201D He cried."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"And the horn of the unicorn emitted a soft orange glow."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CKalee!\u201D Cried Liba. And the horn glowed somewhat brighter orange."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila stepped forward to take her turn. \u201CMorsha!\u201D She cried. And the horn glowed a wonderful bright pink. It was the brightest yet, and she stepped back to her place hopefully."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CKelve!\u201D Cried Pico, the young mare\u2019s uncle. The horn shone a pale green, and dimmed considerably."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CTessa!\u201D Cried another."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CSendry!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CEva!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CLeston!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CShail!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"And after a long silence, and after the light from her horn had faded, she looked up at Osiler with a newfound poise and replied, \u201CMy name is Morsha.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"And with that, the horn on every unicorn there in the fledgling darkness by the forest cast a marvelous explosion of bright pink light, and Morsha\u2019s horn was brightest of all."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"When the pink light dimmed, Osiler bowed his head, and Morsha trotted back to join the row of unicorns behind her."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Breglin and Thorsh\u2019s names were chosen in a similar fashion, and while Aila\u2019s name Esper made a strong showing, she was joyed to learn Breglin\u2019s true name."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"When Jialy stepped into the spring, Liba impetuously stepped forward. And when Osiler demanded \u201CWhat is your name?\u201D, Liba immediately cried out \u201CAnsil!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Jialy\u2019s horn intensely glowed a miraculous dark blue. And as quick as that, Jialy replied \u201CMy name is Ansil\u201D, and the forest turned blue with the light of the unicorns."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Blinding"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CNow Tabor will step forward.\u201D Demanded Osiler. And Tabor did."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWe know Tabor, all of us. And we know his gentle heart and wise insight. We all know Tabor\u2019s joyful yellow song, and we all know the forest he tends, as it is verdant and lively and home to many friends. Not all know of Tabor\u2019s sacrifice, but today I will inform you. Three moons past, a group of 4 of The Men came through the gates. These Men were not like the ones we have met before, but they were angry and hostile and they meant us harm. Harm! They had long knives as sharp as our horns, but they had no magic. Tabor was able to drive these Men back through the gates, and he sealed it from passage from their dominion for one hundred years as is custom. But he paid a tax, Unicorns. He paid a tax that we must all bear, for one Men he made fall with his horn, and for that life his color has dimmed. A small matter, though, for today it will replenish.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CUnicorns rejoice, for Tabor has been chosen, and we will now perform the blinding!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Osiler raised his right hoof, and he splashed it down heavily into the spring. And out of a new mist, a translucent show of luminescence in the form of a unicorn became partway visible. This was Elphren, the currently blinded! And Elphren turned to face Tabor, and with two graceful motions he thrust his intangible horn into Tabor\u2019s eyes. As he did this, wispy threads of light flew away from his form and into Tabor\u2019s. And as that was taking place, Elphren became solid. When the spectacle was over, Elphren stood full-bodied facing a semi-transparent memory of Tabor. And on cue, the entire herd of unicorns surrounding the two lowered their heads, and from their horns came their individual colors, and those colors went into Tabor\u2019s body and his body flashed a bright white light, and he was gone."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Dream Casting"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"When the light had faded, and they were cloaked in darkness, Osiler continued. \u201CThis Convergence is the fourth alignment all three Equis Planets since the splitting of the realms. As such, it is a great honor bestowed upon Eranor to cast new dreams. Tonight marks one year since our last casting, and we have been blessed by the wonderful dreams cast by Shelse; may we all take a moment now to send her our gratitude.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"And there was a smattering of snickers and a number of neighs and a whinny, and Shelse glowed bright and demurely."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CEranor, please begin.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"And the herd watched stoically as Eranor stepped forward into the spring."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Eranor spoke. \u201CThank you, Osiler, and thank you all for this privilege. I have put special attention into my efforts this year for each of you. May these dreams bring you joy.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"With that, she reared up onto her hind legs, and when she came crashing down, a great cloud of vapor formed around her. From inside the mist, a turbulent cyclone formed from Eranor\u2019s horn, and with a terrific gesture, Eranor rose again to her hind legs and the whirlwind shot up into the sky. Great clouds formed, magically illuminated, and they soon filled the sky. And as quickly as it had begun, it was over, and Eranor was unveiled in the spring facing Osiler again but small wisps of dream cloud vapor clung to her head and horn."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Wishing"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"All the unicorns cheered, and a warm rush of energy came over them. But Aila, who had seen hundreds of these ceremonies before, felt a nagging tug. She tried to brush it away with the flick of her tail, but it persisted, and she realized that she was feeling something strange. It was excitement, for her wishing was nearly upon her, but it was another feeling too \u2013 one she was unaccustomed to. She was\u2026 afraid. But what of? She would finally make her wish, and she would love, and mate! This was meant to be a good thing, right? Why was she afraid? She knew her wishing song, and she\u2019d been singing all day so she knew her voice works. And she knew what she wanted! Didn\u2019t she?"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"And there it was. Doubt. Aila, deep in her thoughts, finally realized that she wasn\u2019t sure that what she wanted was actually what she wanted. Mating a tall fine stallion sounded great. But surely there were other options! What else could they be? Why was she only now considering this? What had happened to her over the past months and years? She felt like she had been under a spell, and now here she was, confounded and instead of being overjoyed she was panicked. She inadvertently snorted at herself, and her neighbor, Kylie, looked over at her inquisitively. And she asked \u201CWhat?\u201D, and Aila, embarrassed, replied, \u201CNothing, just excited.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Kylie and Aila had been friends their whole lives - why was she hiding herself from her now? The panic was rising! Why couldn\u2019t she just say that she was afraid she had decided upon the wrong wish? Wait, the wrong wish?! Was is really the wrong wish? Wasn\u2019t this what every mare wishes for? But in her heart she knew that it wasn\u2019t what she wanted. She wanted something else.. but what was it? She had always loved her long adventures with Liba most of all. Maybe that was it. Aila was getting frantic. Maybe what was it? Adventure? She already had that! And she thought about her moments looking into the other realms.. it was forbidden but she would love to see them! And Aila felt a warm soothing sensation and she knew that she had changed her mind."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAnd now, we will adjourn temporarily, as we make our way to the Wishing Stage.\u201D Commanded Osiler, the Great Stallion. His horn flashed a dark purple light that reflected eerily off his smooth dark features."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWe have one Wish Maker, tonight. Aila, you will remain here. Wait for your shooting star to arrive, then do not tarry.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"And he led the herd through the two curved trees and back into the darkness beyond, and soon Aila was alone."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"Aila\u2019s Star"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She waited patiently. As she gazed up at the stars, her thoughts went back to that day when she and her cousin Liba had peeked through the gates to the world of The Men. The Men were an almost mythical race, far removed from everyday Unicorn life. They were known to be small, upright beings, of an unpredictable nature. But yes, they were real, and on occasion they had been known to find their way here to our realm."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The first of The Men to come through the gates were sensitive and easily startled, the old stories told. And they were artists, and they spoke to the Unicorns with pictures that they drew in the ground with sticks. The Unicorns at the time thought them to be kind and inquisitive and rather unsophisticated. When the leader of that first party of The Men drew a crude depiction of the three of them and the unicorn they were speaking to, Brax (it is told) whinnied and said to them, \u201CYes! That is you, and that is me, together!\u201D He was amused by the drawing of the obvious, but he couldn\u2019t possibly have know the full meaning of his own words."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Hundreds of years later The Men came again. This time there were six members of their herd; they were are all rather small, but two were larger than the rest, two were of medium stalk, and two of them were tiny. The tiny ones were delighted when they saw the herd \u2013 this was not Aila\u2019s herd, but another (The Zengoli, if you are curious or are keeping track) that grazes far to the north. And it is remembered that the littlest of The Men had the ability to actually speak to the Unicorns they met! They had very little to say, but what they did say pleased those there then. They ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"loved")," us. And probably because they felt such love from the little The Men, those unicorns became close with the Men. And The Men lived here, in our realm for several years."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"And perhaps it because they were so close to The Men that the falling that occurred was so devastating. For it is told that one of The Men cast a rope around the mare named Marissella, and he leaped upon her, and he tied her with the rope around the mouth, and although she protested and insisted that he remove himself, he did not, and she therefore dispelled him with her horn. And the other of The Men saw this occur and then ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"he")," threw rope at her, and so she dispelled the rope. And when he ran into the forest, it is said that Marissella followed, and Bren, her mate saw this and joined her, and they ran super super super fast and caught up with The Men as they reached the abode they had built out of dead trees."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"When the Unicorns arrived, they were curious why The Men had become hostile, and they meant to inquire. Marissella roared out her questions, and then there was a tremendous loud clap of thunder that came from the house, and Bren fell. Marissella cried out in alarm to her herd, and then went to Bren\u2019s side to revive him, but there was another loud clap and she fell. By the time Thossler the Great Stallion arrived at the house, The Men had cut the horn off of Marissella\u2019s head, and when Thossler dispelled the other Men, he had cut halfway through Bren\u2019s horn as well. When the medium sized and littlest of The Men saw the Great Stallion arrive and their large one fall, they shrieked and ran, and the Great Stallion Thossler shepherded them to the gates of the realms, and he forced them back through the Gate of The Men, and he used all the color in his body to seal the gate for a hundred years. Marissella could not be revived, but Thossler\u2019s last act as Great Stallion of the herd was to revive Bren."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"It is remembered that Bren stayed in that place, by the body of his love, for seven years, until the last traces of her body had been carried away by ants."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"There had been several other times that The Men had visited, but none so impactful as Thossler\u2019s stand. Unicorns became wary of the little beasts, and whenever The Men came, they would politely insist that they go back whence they came. And that reminded Aila of something that the Great Stallion Osiler had said \u2013 poor Tabor had to dispel one of The Men! How awful! He would carry that with him for many years, if not the rest of his life. Thankfully the lighting ceremony during his blinding would restore his colors \u2013 next year when he got his eyes back, that is. But what a terror he had suffered. And what exactly had happened!? Osiler said that The Men had come at us with knives!? Whatever for?"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Her own glimpse into the world of The Men had been a cacophony of random images. She had seen immense forests the size of mountains filled with massive rectangular trees, and she had seen a tube filled with rows and rows of The Men sitting and staring at colorful magic squares, and she had seen The Men of all shapes and sizes in huge crowds. And The Men made such noises! Sad noises, happy noises, explosive noises\u2026 noises of every possible size and feeling. She had seen two of The Men walking together, with their arms around each other, but the stopped and put their faces and bodies together as if they wished to become one. And she had seen two of The Men on a platform surrounded by a monstrous room full of them, and the two in the middle were swinging their arms at each other as though they were trying to knock each other over. But the one thing she saw that she couldn\u2019t stop thinking about was one of The Men on top of a horse running through the forest. And the thing she couldn\u2019t help herself from thinking about was that the horse was clearly delighted."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila was troubled. And that feeling of being afraid had come back, in a new form. She was tracking down the emotion when she felt a warmth in her horn in the sky to the southeast. And she looked up to see her star flying across the night\u2019s dark canvas."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CDear Star\u201D, she thought as she looked over at the tunnel leading into the dark forest. \u201CWhat am I to do? I think I want to see the world of The Men, but I\u2019m so afraid.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"When she looked back up to sky it had vanished \u2013 hidden on the other side of the planet."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh, well, I better get this over with.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"And she went through the two great oaks that were curved across each other so that they made an archway into the dark forest."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Wishing Ceremony"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila walked through the long aisles towards the great hall, where she knew the herd would be waiting. She knew the way well, so there was no risk of her getting lost. Not only had she been coming here for Unicorn Ceremonies for a hundred years, but she used to come here to play with the Minotaur when she was a young filly. Minnow (as she called him) hated it when she would almost let him catch her but then phase though one of the walls, but Aila loved doing it. Once she sent poor Minnow into such a rage that he fisted his way through the solid stone wall just in time to see her tail flick goodbye as she trotted through to the forest. Of course as she matured she felt bad for the poor bull-headed little beast, and she did what she could to make amends. For instance once she let him get a hold of her tail \u2013 just enough so that he was able to pluck a single strand from her tresses. And to this day he wears that hair around his neck, so she knew they were likely even."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"But today she had serious business, and so she trepidatiously but intently walked through the series of turns and twists of the labyrinth and soon found herself in the great chamber of the Sirens. Ahead, the sisters Thelzie and Mollpe were singing their beautiful harmonies, accompanied by what sounded like a small harp. Their song had no magical effect on her, but Aila tuned in momentarily and was struck with melancholy. The music was soft and mysterious, almost a whisper, and it created a susurrous din throughout the hall that relaxed her spirit. She pushed on, and as she crossed the central bridge over the circular pool, she caught sight of Mollpe twisting through the dark water."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYour song is enchanting, Mollpe\u201D, Aila sent delicately. \u201CIt calms me, and I am grateful.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Mollpe finished singing her current phrase, and she breached the water while arching her body backward through the air and resubmerged."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila continued onward. She came to the great gate that lead out to the Clearing, and paused for the briefest of moments. With a deep breath and a slow exhalation she exited the hall into the night."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"First she passed the namelings. She recognized Flaena and Ry, as they were both on either side of the aisle looking excitedly at her as she passed. And there was Morsha! Whose name she had found! She was filled with a brief but poignant joy. And there were the young stallions Ee and Artax, each looking at her with a cultured indifference but both inwardly hoping to catch her eye."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She stepped into the center of the clearing and approached the ring of elders. Her hooves fell effortlessly into the divots that had worn into the stone before the great dais. She thought of all the realms \u2013 how many were there? Twelve or a thousand and twelve, she couldn\u2019t remember at the moment. And she thought about that day she and Liba had peered into the world of The Men. She smiled and looked up at the Dais."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Osiler the Great Stallion was before her on the podium, standing tall and stately above the rest of the elders. Instead of his typical scowl, he appeared eager and almost happy. Aila scanned the ring of elders behind him. Her sister Elsie was to the far left \u2013 unlike Aila\u2019s dream she didn\u2019t appear annoyed at all but actually happy. Her father Odon, Liba, Pico, Trin, Era, Plassiler, Vestra, Sastari, Flamler, Trace, Aeina, Azren, Jal, and finally her lovely mother Eranor, and they were all looking at her with love and expectation."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Eranor\u2019s green eyes flashed and Aila heard her gentle urging, \u201CGo on dear.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila looked down at her beautiful hooves, took a deep breath, looked up directly into the eyes of Osiler and sang out, \u201CI wish free passage to and from the world of The Men.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"There was a long pause then wherein nothing happened. No one moved. No fly flitted a wing. Leaves that were halfway along on their voyage to the ground froze where they were. The Clearing \u2013 a great field encircled by a stand of tall pines and presently occupied by a coterie of Unicorns \u2013 was silent."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Osiler\u2019s eager and almost happy expression slowly shifted. First his slack jaw and partially open lips tightened and closed. Then his relaxed ears rotated forward. When his eyes narrowed (and did they turn red?), Aila felt the gravity of her wish. Had she made a terrible misstep? Her heart began to sink as she looked around and saw the same look on her father Odon\u2019s face."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Osiler spoke quietly but against the heavy silence his words stood with the weight of the megaliths."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CThat is forbidden.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"At that, Aila filled up with a terrible energy."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CForbidden?\u201D She asked."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CFORBIDDEN!\u201D Osiler cried."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"His voice echoed though the Siren\u2019s hall behind them, and around in circles guided by the pines as it ascended to the vastness of the sky in order to boom appropriately."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila both exploded and imploded. Her body was filled with dread. No, Terror. No, maybe it was dread. She had never angered Osiler before, and she had never been ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"yelled at")," before, and she found a powerful distaste for both. What had she done that was so wrong? Why did he yell so forcefully!? She was agitated - every cell in her body wanted to distance itself from Osiler in its own direction. Aila felt that tension. Her mind\u2019s eye flashed to Landry rabbit\u2019s contorted body stretched out while pegged by her horn as she revived him this morning, and she wondered if this is what dying and coming back to life might feel like."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She again scanned her periphery, seeking solace or comfort from anywhere, anyone. But everyone seemed to be in a similar state of shock. Aila looked back and forth, all around her. She looked up to the sky, following Osiler\u2019s voice, and saw a crow circling far above. And in the distance she saw some other young Unicorn\u2019s star racing across the night sky."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CThen I wish I had wings so that I might fly away from here.\u201D Aila sang before nurturing the thought. Even as the words left her mouth she felt the magic conspiring. There was a flurry of sounds now, whinnying and nickering and some gasping and some chattering. She heard Eranor neigh. But all of that was far off in the distance. Aila\u2019s entire world consisted of herself, the insane wish she had just made, Osiler\u2019s flummoxed expression, and her incredible desire to be anywhere but where she stood."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CThen it is done.\u201D Voiced Osiler."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"His words broke the spell, and Aila began a new one. She stood up on her hind legs, roared her fiercest roar, and stretched her illustrious wings open wider and wider for all to see."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"And then she flew away."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Dispersing"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The herd stared in amazement as her transfigured form lofted upwards in a gradual spiral until she crested the tips of the pines and was gone. Eranor called out to her to no avail. After the initial shock wore off, there was a chatter of animated voices as scattered members of the herd gave voice to their surprise and amazement. Eranor was distressed. Elsie and Trin comforted her. Osiler stood motionless looking skyward, his focus turned towards Ilo, or maybe Lastri, or possible it was Orthe. It was one of the three equine planets that were ever present in the sky. I think. What he pondered there, where his mind went then none knows. For minutes he stood in silence, and then he left the Clearing through the Siren\u2019s Hall without another word."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The ceremony ended in a hushed cacophony."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The unicorns dispersed. Ee and Artax, the young stallions exchangers impressed and surprised faces with each other. Ee was unabashedly smitten, having always been drawn to Aila\u2019s free spirit and independence. Artax was intrigued \u2013 Aila\u2019s wings were impressive and in their way, beautiful \u2013 but he felt uneasy. Being the largest in the herd apart from Osiler and Odon, he had always presumed that Aila would chose him to mate, if not a wish-stallion. Now, his immediate reaction was disappointment \u2013 he knew deep down that he had no desire to sire foals with wings! Ee on the other hand was enchanted, and Artax\u2019s thoughts comforted him. He realized the oddity of Aila\u2019s new form but it didn\u2019t diminish his esteem for her, it increased it."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Eranor and Trin left the clearing last. Trin stayed close to Eranor\u2019s flank, comforting her. She was exhausted from the dream making and now she didn\u2019t know what to think. Her youngest daughter had always been a free spirit, but this was an unexpected event! Eranor had heard Aila\u2019s song many times over the past few moons \u2013 Why had she not wished for her stallion? And where had she gone! Why did she want to visit the realm of The Men? There were too many unanswered questions, and she was too exhausted to investigate further. She needed rest, and she needed the restorative energy Aila had been cultivating. She hoped she would see her soon as she made her way to her dwelling in the shade of her friend the Sycamore."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"As Eranor crested the hill on the last stretch of her walk home, she saw Aila\u2019s signature pink glow near the Sycamore. Eranor sighed a deep sigh, and felt a wash of relief. She may have sprouted wings and flown away but at least she remembered her dear mother."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI think I\u2019ll leave you now\u201D, Trin said as they drew closer. \u201CI\u2019m sure the two of you will have much to discuss and Trace will be glad for companionship this night.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CThank you, Trin, I\u2019ve appreciated your companionship tonight myself.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Reckoning"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAila, you came!\u201D Eranor sent as she approached the tree and her beautiful pinkish shimmering daughter. Aila\u2019s coat was white of color, but her color was pink. Her horn, imbued with youth and ripe with magic, was constantly emitting a low level glow that clung to her form and wrapped her body in a subtle charming pink light. Her glow responded to her emotional state, and Aila was currently glowing with a dark, almost red, sheen. And her wings! Tucked in their resting position, Eranor hardly noticed them at first. Now she took a moment to gaze upon her daughter\u2019s new form. Even in the cover of night, she could distinguish the new shapes and the texture of feathers."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWell aren\u2019t they just lovely. Come on, let me have a look.\u201D She demanded."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh! You like them?\u201D Aila inquired as she slowly unfurled and rose her wingtips wide."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI didn\u2019t say that.\u201D Eranor grinned. \u201CI think they\u2019re just incredible. I might not have chosen them for myself but you have.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYes, mother, I have! And I don\u2019t know why and I don\u2019t know what to do. And I do love flying! But what have I done!?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI don\u2019t know Aila, but it is done, and there is no going back. I\u2019m sorry you are distressed.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI\u2019m not distressed! I have wings!\u201D Aila cried."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"In all actuality, she was in fact distressed, she just didn\u2019t realize it yet. But she would soon."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYes, dear. You do. You have an infinite future in front of you to come to terms with that fact. But there\u2019s nothing that I can do about it right here and now.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI know\u2026\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CBut there is something that you can do for me.\u201D Eranor was extremely exhausted, and she lowered her head. \u201CI am quite tired.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh mother! I forgot your dream casting! You\u2019re so pale! Let me help you.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Eranor stepped over to her clearing in the tall grass and slowly and carefully lay down. Aila followed, and when her mother was settled she leaned down and tucked her chin to point her horn towards her dam\u2019s chest. She slowly impaled her horn into her mother\u2019s side, aiming for the heart. When she could push no further, she closed her eyes and began expelling her energy into her mother\u2019s body. Where horn pierced hide there was a bright ring of bright pink, and where Aila\u2019s horn was exposed there was an incredible bright white that lit the eerie scene."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"It took a long time \u2013 Aila had been saving her magic for several weeks now \u2013 but eventually the process was complete. Aila withdrew her horn, and the glow diffused. Eranor was fast asleep, but her color had returned and she was breathing peacefully."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Flight"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila grazed nearby until dawn \u2013 that mystical hour before the day had awoken. The grass here was good and substantial but minty. Aila had never particularly cared for mint. She grazed, and while restoring her mother\u2019s depleted magical energy had calmed her, she was still at odds with herself. Why on Earth had she made such an impetuous wish? Why, not even Liba had done anything this crazy, and everyone always said she was the impish one. Well, it appears she was the wild one now. Wings! What stallion would ever want a mare with ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"wings"),"!? What of her friends? Would they treat her differently now? No, what a silly question. ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"Of course they would.")," This was distressing."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI am distressed!\u201D Aila realized."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She wanted desperately to talk to Liba, but it would be some time before that was a possibility, and Aila was agitated. Given her options, she decided to go for a fly. She reared up, spread her wings, and when she pushed them down her body went up. And she repeated the process. And it was actually quite easy to get the hang of, now that she knew what it was all about."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Her first flight had been a bit of an emotional battle. At first it was terrifying, but she was so angry and confused that she didn\u2019t let it get to her. But now she had time for it to really sink in \u2013 horses were not meant to fly! Countering that was her experience. \u201CI have already done this, and it worked out fine, so surely it will be fine now\u201D, she thought as she watched the sycamore tree and mother below shrink smaller and smaller."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"As she rose higher and higher, she started moving forward, which she found almost as easy as thinking it. She just leaned into the direction she wanted to go and her wings did the rest. And then she had the thought to try ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"hopping"),". Aila loved to hop and jump when she was land bound, so it was a natural instinct. But when she hopped in the air she flew in a dramatic arc hundreds of meters long. It was exhilarating! And so she air hopped for a while, and then she had another though. \u201CI wonder if I can ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"fly")," super super super fast!?\u201D And she tried. And guess what.. ok I know you already guessed it. She could. She ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"could")," fly super super super fast! And if you were here on the ground to see her flying you would swear it was just a meteorite flying by \u2013 a great sharp pink line drawn across the dark blue sky."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Space Bath"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila\u2019s initial reservations about her wish had for the moment evaporated. She reveled in this new sensation. She rejoiced in her new command over her form through the atmosphere. She was elated \u2013 a feeling she was quite familiar with. When she tired of air hopping and air flying super super super fast (which she called shooting), she tried going as high as she could. She reached the limits of the atmosphere, and went higher still. She entered the blackness of space, and she kept flying, higher and higher towards Ilo, her favorite of the three equine planets. After several minutes of traversing the vast nothingness, she found her mind starting to wander. She thought about her mother, sleeping far below in the tall minty grass. She thought about Liba, and Liba\u2019s foal Ansil, and she felt a tinge of envy. Would she ever mate now that she was\u2026 this? Surely there was a stallion out there somewhere that would love her despite her\u2026 abnormality. Ee and Artax had both made their interests clear; perhaps one of them would still admire her? She did prefer Ee, though. But Artax was a simple sort and might not care that her foals might be winged, and he might be a fine partner in a pasture-dwelling sort of way. But Ee was a bit more mysterious and unpredictable; Aila had always been curious about him. Wow, her thoughts really were wandering out here among the stars."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She tucked her wings in a moment, excited to feel the sudden drop of descent, but nothing happened. She floated there, with no resistance whatsoever. For some reason this made her laugh, though she didn\u2019t know why."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She let herself drift above the sky until the cold ate away at her reserves of energy; for a long while her mind was blank, and she simply breathed in the light of the stars. When the sun crested the planet below, a tremendous light pummeled her body and consciousness."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWell that was a bit of a rude awakening, wasn\u2019t it Mr. Sun!\u201D she exclaimed."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She supposed she should make her way back to Naranthal. She had found a new calmness, and was looking forward to seeing Liba and Elsie and all her other friends. What would Squalmy say!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"When she looked down she felt a bit queasy. She could see the entire planet, like a great disk in the sky. She could places where the sun had yet to reach! It must be dawn \u2013 her favorite time of the not yet day \u2013 there where the sun was about to shine."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"As she looked down at the earth so far away, she felt suddenly afraid."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh no!\u201D She thought."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhere is my home?\u201D She wondered."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"From this height she didn\u2019t recognize any of the landscape. She should have kept better track of where she was going!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"With no other options, Aila flew down towards the line where sunlight met the darkness, and hoped she would be able to find her way once she was nearer the surface."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Fountain of Youth"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She alighted near a small pond of sparkling clear blue water, in the warm sun of late morning, in a land completely foreign to her. She took several steps into the pond and had a long drink. The water was cool and had a tingly taste on her lips and tongue and at first she thought nothing of it as she had worked up a terrible thirst. But after a moment she paused, and she noticed in her reflection that her subtle pink ambient glow had intensified. There was something special about this water! She took another long drink, and felt her energies restoring. The tingly water was vaguely sweet, and though no longer thirsty she indulged in a third long dose. This was the most delicious pond she\u2019d ever drank from!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"While lapping at the water greedily, she felt a pair of eyes on her from the trees near the edge of the pond across from her. The pond was only a dozen or so meters across, so when she glanced up she expected to see a friend or visitor, but there was no one. Unicorn eyes are quite good. They are much better than the great eagles at seeing long distances, and much better than the prosimians at seeing in the dark, and they are almost as powerful as the dragonflies at seeing in slow motion. When Aila saw nothing in the woods she did not assume that her eyes were deceiving her; she wondered what invisible presence she detected."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHello?\u201D She sent her curiosity out into the direction of the presence."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She heard no reply, and the feeling of being watched subsided, so she bowed down to the water and began drinking again. As soon as she did so, she felt the presence return, and she quickly looked up a bit to the right, and as she did so, she saw a small branch of a magnolia tree move abruptly. She stared in that direction intently, her body perfectly still. Though she could see nothing but the woods there, she felt a life-force there that was almost familiar."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWho are you, friend? You needn\u2019t hide from me. I am Aila, the winged unicorn, and I mean you no harm.\u201D Aila\u2019s curiosity got the better of her."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"There was a brief pause, but then Aila saw a very faint yellow glow \u2013 it wasn\u2019t so much a glow actually, it was more like a network of moving veins that had a faint yellow color \u2013 in the vague shape of an invisible unicorn."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh Tabor! It\u2019s you! Thank Ilo, it\u2019s good to see you here! I have been lost for hours.\u201D She sent him her thoughts, but she was overflowing with energy. Each word was surrounded by a stream of powerful pink magic."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Tabor\u2019s glow intensified momentarily, and Aila could almost see his complete form. He quickly moved his head in a direction away from the pond.\""),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CDo you want me to follow you?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"At that, Tabor turned away and trotted slowly away."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"It was not known to Aila that the blinded could make themselves visible to a unicorn, and it was unheard of that a blinded would lead an individual, but Aila loved and trusted her uncle, and he was after all the blinded \u2013 his purpose now was to lead the herd!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI will follow!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila flapped her wings gently for effect, and she skittered up and across the surface of the pool and was quickly close behind."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"He led her to the south; through a grove of blooming pink magnolia trees that caused Aila\u2019s heart to flutter; up a steep hillside completely overgrown with ivy and tall pine trees that dripped lichen; across a great terrain of tall grasses and shrubs where Aila lost sight of Tabor and for a long while followed a nearly invisible trail of stamped grass; and into a sunken vale of mysterious cypress trees. This was a protracted sojourn Tabor was leading her on. Aila had plenty of time to wonder where he was leading her, and why, which was the more intriguing though less answerable question."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"When they reached the cypress vale, Aila felt a slight familiarity. These were interesting trees, and she had long ago made friends with their striated boles that showed off their powerful root structures. Aila remembered them fondly from her adventures with Liba - there were many near the gates of the realms that they had visited."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CThe gates!\u201D She cried, as she realized where they were."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Tabor stopped a moment, and his yellow glow flared briefly before he continued onward."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CBut why would you bring me here, Tabor?\u201D Perhaps this was just the most direct path to Naranthal. Surely Tabor was just helping her find her way home."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"They proceeded deeper into the vale, through a curvy trail, and were soon at the clearing where large standing stones marked the four directions around the grassy hill. Tabor led her not to the southern stone as she expected as she knew the gates were north of Naranthal, but in a direct path up the hill towards the gates."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CTabor, where are you taking me?\u201D Aila demanded, though she knew he could not answer."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"This time he did not respond. His yellow glow was intensifying, and when they arrived at the ring of stone ground that encircled the swirling windows Aila could again clearly see his magical form of swirling yellow lines. He led her around to the easternmost side of the circular path, and stopped facing the portal to the west."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila approached beside him, her mind abuzz. This was the gate to the realm of The Men."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CBut Tabor, I don\u2019t understand. I have been here before, and I have even looked through this gate. But Oslier said it is forbidden! Why have you brought me here?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"He stood motionless, facing the gate. Aila could not read his thoughts and she was unnerved. She was used to fully understanding the thoughts and emotions of her friends and companions. She knew Tabor fairly well, and trusted him implicitly. Her mother, Eranor, had always been close with her older brother, and though Aila had not interacted with Tabor frequently of late, he was family. Long ago, for years after her naming, Tabor would still call her Joili, as a sort of tease, and Aila would lovingly rebuke him for that. Now, she wished desperately to hear his voice. Instead, the ghostly blind indication of him stood motionless staring into the portal of The Men. What did he want her to do? Should she look through? Should she ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"go")," through?"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Why was this happening? The last day\u2019s cycle left Aila reeling. She had wished to go to the land of The Men, and been denied. She had wished for wings, and flown! She restored her mother\u2019s magical energy. She flew to the edge of the world and halfway to Ilo! And she had gotten lost, and then drank from a miraculous pond that saturated her with magic energy. She had found Tabor! That alone was a feat worth sharing with the herd - it was a revelation to her that it was even possible! And now she was being faced with an epic conundrum. What was she supposed to do?"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"As if on cue, Tabor looked over at Aila and his eyes glowed thick with veins of magical yellow energy. He then took several paces backwards, bowed his head slightly downwards, and lurched forward spanning the gap between himself and the portal in a single bound before leaping up and towards the portal, where he vanished."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CTabor!\u201D It was all she could exclaim before he was gone."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila snorted, and pawed at the ground with her fore-hooves. It was clear that he wanted her to go through the portal. A large part of her wanted to! What was on the other side? Where would she find herself if she went? Would she finally meet The Men? Why was Tabor urging her here? ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"What did he know?")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She was filled with excitement at the thought of adventuring out of her realm, and the magic bristled within her. The truth is, she wanted to go, she just wished she understood why this was happening."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"A thought came to her then. It was a saying that Tabor used long ago when Aila was young. One afternoon while walking with him and her mother, she had become afraid to leap across a wide stream, and he said to her ambivalently from the other side, ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"\u201CIf not now, then maybe never!\u201D")," It had peeved her at the time; she wasn\u2019t sure she would make it across, and she did not want to land in the rocky water. But she thought about never being able to do it and it gave her the courage she needed. Almost! She did land in the rocks and made a great splash, but she and Tabor and Eranor had a great laugh and it became one of her most cherished memories of her youth."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She shuffled over to where Tabor had last stood, and gazed into the opalescent portal, and steeled herself."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CIf not now, then maybe never,\u201D she said out loud to herself. With that, she spread her wings out wide and forward and leapt into the world of The Men."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"III: The World of Men"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Mirror"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She landed where she least expected, which was exactly where she would have landed if she had jumped through nothing. She was in the middle of the 12 portals, on the stone pathway that led to the center of the circle. The only difference that caught her eye was that the tall black obelisk in the center of the structure was glowing with a quiet black light. The light faded momentarily. She approached the stone and placed her horn against the mirrored black surface, but felt nothing. She glanced around, not sure what she hoped to see. She had expected to be transported to the land of The Men, or to at least see visions of the Men as she had with Liba, but it seemed she had just leap through a non-magical gate."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila turned to face the portal she had just come through. The stone pathway led directly to it from here, but there were diverging paths that led to either side of each of the gates."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She sent out a large pulse of awareness, which informed her that she was in fact in the exact same place, give or take a few paces, as before she had jumped through the gate. What had happened? Were the gates broken? Did she not do it right?"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Curious. She stepped forward to inspect the portal she had come through, but as soon as she looked up she was startled by her reflection. What had been a swirl of indecipherable images and lights on the other side was from this vantage as smooth as a still pond in the morning. In the surface she saw her new incarnation for the first time."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila had of course seen herself in reflective waters, and she had the awareness of her self as seen through her connections and sharing of thoughts with her friends and family of the herd. But this was the first time she had seen herself with her own eyes standing straight and tall. The mirror was true and the reflection perfect. She noticed her wings hanging loosely at her sides. One was nearly touching the ground! She adjusted them by pulling them back and tucking them in, and she admired the form they created. She looked like a swan! Curious, she spread her wings wide, and then directed them forward so that she could see the magnificence of the featherwork inside. She curled them forward and found that she could overlap them in front of herself so that just her eyes and horn were visible. She gave a brief flap and imagined what she would look like in flight, but found she didn\u2019t have to imagine \u2013 she was already several inches off the ground."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"This mirror was intriguing! She stepped close to the portal. Her horn was glowing hot pink, and tiny tendrils of magic vapor was drifting off it and her face. Her eyes looked severe in a way she would not have expected, and as she cocked her head a few degrees to the side, the unicorn in the mirror did the opposite. She analyzed her feelings to try to coordinate herself to what she was seeing. She was admittedly a bit nervous and confused \u2013 what had she just done, and why wasn\u2019t the portal working? She opened her mouth and watched the mirror mimic her. She stuck out her tongue and flipped her ears forward and crossed her eyes, and the mirror copied it all. She looked absurd! Aila laughed, and the unicorn in the portal laughed and she saw that she looked a bit more relaxed."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Oops \u2013 she noticed there was a bit of lichen on the top edge of her nose. She bent her head downward and lifted her right hoof up so that she could paw it off, but as she did so her horn connected with something hard and inert. The mirror! And then she remembered; Tabor had sealed the portal from the world of men."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh no!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhat have I done?\u201D Had she in fact transported somewhere? Was ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"this")," the world of Men? Was she trapped here for a hundred years? When had he sealed this gate?"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She stepped around the mirror, and examined the portal from the far side, the side she had initially leapt through. Instead of the swirling mass she had thought to see, there was nothing \u2013 just a thin, nearly invisible frame. The black obelisk was visible in the center of the hill. She walked through the frame and turned around to see the mirror once again. She was at last convinced that she had indeed landed in a different realm."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Hunt"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila turned and exited the inner circle via the path near the mirror and circumnavigated the portals. Each of the other eleven gates matched the first; they were all empty frames. She wondered what she was meant to do. Why on earth had Tabor lead her here? Had she in fact ever even seen him, or was that just an illusion brought on by the magic pond water she had drank? She still felt abuzz with the energy she had consumed there, but she noticed her stomach was grumbling. Unicorns had to eat!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"With nowhere else in mind, she decided to had south towards Naranthal and her home pastures. As she trotted down the path through the giant cypress trees, everything looked the same, but something felt remarkably different. She couldn\u2019t tell what unnerved her, but she was on high alert and keenly aware of her surrounds. She sent out pulses numerous times, but it was indeed the landscape she was familiar with. Something was wrong, she knew; it was almost as if something was missing. Ah, it was the animals. Or, rather, the absence of them. She couldn\u2019t sense any other being anywhere nearby."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She passed through the Cypress, and out through the trails that were cut into the low tangle of brambles and rhododendrons that demarcated the transition from forest to plain. She had only traversed this trail on a couple occasions but she recognized nearly every step. Soon she came to a small shaded thicket rich with ivy and tall weeping willows. There she stopped abruptly. Her keen hearing and smell forewarned her of the arrival of her friends the rabbit and the fox as they ran through the underbrush. So there were animals here after all!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"As they scurried through the brush and onto the trail, Aila called out, \u201CHello Bisky, Tiffle! Where are you off to in such a hurry?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Before she had finished her greeting, the rabbit, upon rounding the bend, halted in his tracks for a fraction of a second and darted off into the brambles. Aila saw that a tuft of hair was left dangling from a particularly nasty looking thorn near the ground. In a breath, the fox crashed through the mesh of brambles after the rabbit, and Aila stood open-mouthed. She was awash in the wake of uncomfortable feelings. This was no game they were playing!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Concerned, Aila circled back around the thickest of the the bushes to a spot that was clear enough for her to sneak through into the network of blackberries and tall gangly shrubs, and she cantered over to where she saw Tiffle, the red fox, at rest. She felt a terrible nausea hit her then, and shook her head from left to right, trying to shake it off."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CTiffle! What are you doing?\u201D She thought out loud to the fox as she approached."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The fox turned to her \u2013 something dangled loosely from his mouth \u2013 and immediately sprang away and disappeared into the deep forest before Aila could get close."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u2018What is this? What is happening!\u2019, she thought. \u2018Is Tiffle afraid of ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"me"),"? Whatever for?\u2019"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She walked forward and was stunned to see the rabbits torn body, in pieces on the ground, lifeless."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh Bisky, you poor animal! What has he done to you?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She examined the rabbit with her horn, but parts were missing, and he was beyond restoration. The hungry fox had killed the wild hare."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila felt sick. She impulsively spread her wings and flew several meters into the air, cresting the tree-line, seeking vainly to evade her own thoughts. What was wrong with an animal that could make it do something like that? She had never seen an intentional felling before! It made no sense to her. She wished she could go back and stop the atrocity before it happened, but there was nothing she could do about it."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Instead she breathed, and she focused on the sensation of the wind in her wingtips. She instinctively sent out a pulse and turned in the air for Naranthal, her home. She didn\u2019t know what else to do."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Wagon"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila\u2019s emotional state stabilized rapidly. Flying was still a new activity for her and it consumed much of her attention. She stayed low in the sky, barely above the treetops and focused on trying to remain as steady as possible. She found that the more she focused on her task the less successful she became, but when she concentrated on the direction she was going, her wings and body stabilized. As she progressed, she found that when she focused on her empty belly, or the delicious golden fields of Naranthal, her flying was at its best."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"When the trees dwindled down to a smattering and the grasses of Elseland began in Ernest, she landed for a quick bite. This was not favored pastureland of her herd, as the tall grasses here grew bitter and woody with sharp edges, but she was hungry, and she could of course eat and walk."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Hours had passed since her encounter with the fox and rabbit, and though it was unlike her to dwell, she kept remembering the look that fox had given her before he disappeared. It was as though he knew what he had done was wrong, but he simultaneously enjoyed it. Maybe she was reading too much into the look in his eyes, but it haunted her. A part of poor Bisky dangling from his mouth\u2026 he had been ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"eating")," him. Why would he do that? He must have been starving. That would explain the pleasure in his eyes. Aila herself was currently feeding her empty stomach. But there was plenty of food here, so that didn\u2019t make much sense."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She stumbled upon a patch of lush green clover and chomped at it voraciously, and she was grateful for the switch from the tall grass which she found barely palatable. Tabor came to mind again, and she reminded herself of her morning. Things were clearly different now, and she ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"had")," come through the gate. Now she couldn\u2019t sense the life-forces of the local fauna, and to top it off they ate each other. If this was indeed the world of The Men, she wasn\u2019t so sure she liked it all that much. Again, she wondered, \u201CWhy did Tabor urge me here? Why did I want to come here? And if this ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"is")," the realm of The Men, where are they to be found?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The answer to that last question soon presented itself. Aila had moved on from the clover and was considering making a super fast dash for Naranthal when she heard a commotion from far away to the southwest. A squeaky high pitched sound. A clunking sound and an accompanying rattle. The rhythmic footfalls of unicorns! Her ears perked up and she tuned her eyes on the direction of the sound. It was coming nearer."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Men"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"It was late morning, and Ian and Cal were weary from loading the wagon. They were cultivating a state of bored resentment over the entire nature of their trip. The young brothers would much rather be anywhere else than en route to Hillsdale with the tailor\u2019s bolts of fabric and the precious box of leather working tools and supplies."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Ian was particularly resentful. They\u2019d lived as peasants in the grove for what seemed like a century. Instead of his wish for something exciting to happen (anything!) coming true, or any of his family even remembering that it was his birthday, he got the grunt work dumped on his shoulders, again. It was bad enough having to field errands for his father, but it was ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"his")," box of leather tools that had been sold. He\u2019d spent months crafting those awls and burnishers, and he had just started cutting the teardrop shaped pieces for a scaled cuirass he\u2019d been making for himself. It had taken almost a year of working in the tanner\u2019s shop just to afford the leather and now he would have no way to work it. He would make new tools, but the setback was dispiriting. He wished that his older brother, Cal, had never said anything about the tools to their father but knew that in his way he was trying to be helpful. Their youngest sister Anna was sick and needed expensive herbs and liniments."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Cal was whistling off key, and that bothered Ian not at all for he was deaf. The brothers walked together on one side of the rickety wagon. The floppily rotating wooden wheels squeaked and whined, which also bothered Ian none."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"At least the rain had stopped. It was a lovely morning, and the sun had already risen above the trees and there was still a bit of peach left in the sky to the east. A family of swifts raced in a zig-zag across the tall green grass fields where the shining white unicorn grazed."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Wait, what! Ian stared for a long moment, not trusting his eyes. He slapped his hand to his brother\u2019s shoulder and pointed. Cal stared in disbelief for a long moment, not trusting his eyes."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Cal pulled back on the reins and stopped the wagon. He took a step towards the unicorn but Ian put his hand to his chest and made that face that meant he was serious."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The unicorn was walking towards them. She had seen them, and now she was walking towards them. And she had wings."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Winged Unicorn"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"As they came into view Aila realized they were not unicorns, but horses coming her way. They had a heavy looking cart attached to them with ropes and two slender stick like creatures walked beside. They wore brown flappy material on their bodies, and one was making a peculiar sound with his face. These must be The Men!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She ambled towards them and then they stopped and became quiet. Were they also afraid of her? She was curious, and proceeded to approach them slowly and quietly. She herself was not afraid. She didn\u2019t see any long knives or other menacing objects."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She stopped her approach as she neared, and welcomed them with a gently half-snort, half-neigh."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHello, friends. Are you The Men?\u201D She was about two paces away, and she spoke softly. \u201CHorse friends, tell me, do you consent to this treatment of your own free will? These ropes, do you not find them uncomfortable?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"There was no reply. The horses stood motionless and vacant. One of the Men made a motion to the other, and then slowly stepped towards aila. He held something out at her - it was a small red object. An apple! She liked apples! There weren\u2019t apple trees anywhere near here that she knew of, and she wondered how this creature had come upon one."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The Men then did something startling. He threw the apple at the ground by her feet. She impulsively huffed and stepped backwards, but the Men stood motionless. One of the Men made soft, indecipherable noises that were unnerving. She deduced that the Men were gifting her the apple in a sign of friendship. That was ok, she supposed, though she was unnerved by the strangeness of the entire scene, and the horses strange behavior did not put her at ease."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She stepped forward and took the apple in her mouth, keeping her eyes on the Men. She crunched down, and a piece fell to the ground while she worked the sweet juices into her mouth. She loved apples! As she bent to retrieve the piece that had escaped, she noticed one of the Men was coming nearer, his limb extended towards her. He seemed slow and harmless enough. What did he want? She wished he would speak."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhat do you want? Why do you not speak?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"He came quite close to her, ignoring her inquiry. At a few feet away she felt a faint sense of adoration. The Men did have a feeling, it was just very slight! His outstretched limb then touched the top of her nose. She imagined this must be how the Men greeted each other. Strange, but she supposed that for a species that can\u2019t talk, unexpected customs must arise."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Then the Men moved his hand up and down on her nose, and Aila found that peculiar, but she enjoyed the sensation. It was oddly comforting, and she noticed a tickle arose and then was soothed by his touch. She shut her eyes and sent him a bit of her energy as gratitude. Her horn pulsed a gentle pink light, which was all but invisible in the sunlight."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The other men had slowly approached, and the spell was broken when he threw a rope across Aila\u2019s neck."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CNo! What are you doing?\u201D She cried."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The other men made an almost identical sound."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The men pulled down on his rope, and somehow it constricted around her neck in a most uncomfortable and frightening way. So she dispelled it, and the rope vanished. She reared up on her hind legs and the Men with the rope fell backwards to the ground."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYou will not capture me, small Men! How dare you try! I am Aila, the Winged Unicorn! I am here by my own will. I am free!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"As she spread her wings and took flight she noticed the other Men, the one whom she had let touch her, standing towards her with his top limbs outstretched. Perhaps not all of The Men were the same. No matter. She wanted nothing to do with these two now."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She rose into the air and made her way towards Naranthal."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Castle"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She rose to a great height with only a few wingstrokes. She was furious! And a little bit scared. She remembered back to the story of Marissella\u2019s sad fate, and it had begun in much the same way, with The Men trying to capture a unicorn with a rope. Until today she hadn\u2019t even really known what rope was. She had heard of it from stories of the Men, but she had never seen it before, and she surely had never felt it. Around her neck, no less. The gall! Her outrage mounted. Aila liked most things she had encountered, but she didn\u2019t think she liked rope much."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Her feelings about Men were more complicated. She certainly did not like the one that had put a rope around her neck. In her mind she saw him falling back to the ground as the rope vanished from his hands, and as she played back the event she felt an urge to put her foot down on his body and stomp him out of existence. What a dreadful thought! What a vicious aspect this realm was bringing out in her. She had never had such thoughts before and she disliked how they made her feel. She blew the tension out through her nose as snort and resolved to think kinder thoughts."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"One of the Men had given her an apple and rubbed her nose. She had felt that he admired her. He seemed calm and gentle. Perhaps even kind?"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Her anger cooled off as she considered this. It was strange to her that the two Men had behaved so differently. It actually fascinated her. It reminded her of the time she had looked through the portal with Liba, when she had seen so many fractured moments of these creatures; some of the things she saw distressed her, but some of them she almost envied."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"If men varied so much amongst each other, how could she ever know who was safe and who was to be feared? Perhaps the gentle one was just craftier and also had foul motives. Perhaps he wanted to capture her as well. Aila didn\u2019t believe that, because she trusted the warm feeling that she felt from him. The other Men had no feeling about him at all, and he gave her no such comfort. Perhaps only some men were treacherous. Still, that made them all treacherous. She would apparently have to be more careful if she was to get home in one piece."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Home! How was she supposed to get home? She had come through a portal to the land of The Men and now she was stuck here! Tabor had sealed the portal, and she had no idea how else to get back to her own realm. She still hadn\u2019t spoken to Liba or Elsie or any of her friends in the herd and she missed them. She may have made a terrible mistake coming here, where animals kill each other and Men try to capture her. Her thoughts boiled again. \u2018What a terrible place this is turning out to be. Why why why on earth did Tabor lead me here?\u2019"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She took a few vigorous wing flaps, and surveyed the ground below. She saw the trail that the Men and the strange horses and wagon had been on, winding south towards \u2013 she could see from her vantage that something peculiar where the fields of Naranthal should be. She followed the road back with her eyes and saw now that alongside it were several large brown disruptions with rigid sides. She knew that the Men built things out of dead trees \u2013 perhaps these were their dwellings. But there were so many of them!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She took several more vigorous wing flaps. Soon she was near the hill where her mother\u2019s favorite Sycamore grew. Aila breathed a sigh of relief to see it standing tall and wide as ever, but there was one of the brown structures situated close by. This was the closest she had been to one, and she saw that it was in fact made of dead trees and mud and straw. It was big enough that three or four unicorns could fit inside at one time, and it had a gate cut into one side. Peculiar indeed!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She stayed high above the ground, and as she continued south she realized that the brown structures were tiny compared to what occupied the fields she sought. The lush pastures were nowhere to be seen. They were instead covered entirely with stone and tree parts and mud and straw and Men. There were hundreds of them, milling about on paved paths and making such loud noises that Aila could hear them from the clouds. But what intrigued and impressed her most was the enormous stone structure that sat in the middle of the entire conglomeration. It was hundreds of meters wide in both directions, and nearly as tall. There were four great towers on each corner, and long colorful banners atop conical structures on each. It was remarkable, and Aila was amazed."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She flew closer to the incredible structure, and as she did, something atop the nearest tower attracted her eye. It was a Men, and yet it appeared very different that those she had recently encountered. This one was slender and not quite as tall. It wore a white garment that stretched out behind her for many meters. It was narrow atop but billowed out near the ground, and Aila thought it looked like a flower. Also, this one was unfortunate because it was leaking profusely from its mid-section down the edge of the structure."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila\u2019s curiosity got the best of her she realized when the Men on the top of the structure looked up at her and made eye contact. She should not have been flying this close! The Men\u2019s eyes went wide, and their mouth fell open. Aila did not want to appear rude, so she flew in a narrow ring and landed gently on the stone surface several meters from the Men."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHello, Sierra, what ails you?\u201D Aila greeted."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The Men just stared at her, their mouth agape. They seemed terrified."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYou needn\u2019t fear ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"me"),", fair one. I am Aila, and I mean you no harm. Perhaps we may be friends!\u201D Aila tried to use her most soothing voice. She was of course wary of Men after her last encounter, but this one seemed frail and sad and unthreatening. Aila certainly did not want to frighten the poor thing."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201C\u2026Friends?\u201D The men questioned meekly after a perfectly timed dramatic pause. Princesses were good at such things, though Aila did not yet know that\u2019s what she had stumbled upon."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CFriends, sure.\u201D Aila replied."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYou have wings. You can fly?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYes, clearly.\u201D She fluffed her wings out slightly, for effect. Unicorns have their own talents as you well know."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHow is that possible? How are ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"you")," possible? Am I dead? Did I finally do it? Did I jump to my death?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila noticed the young Men\u2019s eyes were red and wet. They\u2019d been crying. Their skin was fair and thin and almost transparent in places. They had dark auburn hair that was pulled into a loose knot behind their face. They stood on the edge of the stone ground, near a break in the short wall that was apparently meant to keep the Men from falling off. Globs of ethereal black fluid was slowly draining from their chest. An aura of intense sadness spread from their body."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI came through the gate. In my realm, this structure stands in the middle of a great plain of golden grass, Naranthal, my home. I do not know how I am possible, but I wished for my wings at my wishing ceremony and I assure you that you are not dead. But dear Sierra, you are leaking, and this we must address.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhat? How do you know me? Who are you?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI don\u2019t know you, we just met. I am Aila, the Winged Unicorn. I am from Naranthal, of the Elseland herd. I would take you there today if I could but I myself am trapped here. The portal is sealed. But Sierra, you are leaking and appear to be critically wounded. I can help if you\u2019ll let me.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHow do you know my name? What do you mean I\u2019m leaking? Do you mean my eyes? I was crying, I can\u2019t hide that I suppose.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI don\u2019t know your name, I just call you what I think you should be called. Not your eyes, your chest.\u201D Aila stepped forward, and pointer her horn towards the princess."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHere.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila increased the magical current to her horn, and in the magical pink light that flared up, the princess could see. She ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"was")," leaking! The hole she had felt in her chest was real, and dark blackish red fluid had flooded the front of her and drenched her gown and a puddle had even formed at her feet. With each heartbeat a new spurt of the dark goop was expelled. She was mortified, and she gasped a slight shriek of shock."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHelp!\u201D The princess cried, waving her hands about herself."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI will.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila put her horn to the princesses chest, and into the gaping hole. A swirl of various colors twisted inside her horn, and after a moment it grew brighter and brighter. The princess shrieked. The unicorn closed her eyes. A final bright flash of light articulated the event. New flesh materialized and sealed the wound. Aila\u2019s horn was left embedded a few centimeters into the area over the princess\u2019s heart. She pulled her head back, and when the horn vacated the skin, a slight pink seven pointed star-shaped scar about the size of the princess\u2019s pinky nail remained."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI am sorry, I did not know that Men scar.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CMen? I am not a man, Unicorn, I am a princess. A woman.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila cocked her head. Of course! This was must be a female Men. That explained her different appearance. Her delicate features, slightness of body, her long tresses. Perhaps even her strange but beautiful clothing."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CMy apologies, princess.\u201D Aila was embarrassed and felt that she had insulted the woman. \u201CI know very little of you Men.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAgain, ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"Men"),"? Why do you call me that?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI am sorry! What should we call you? In our history we have met The Men, but none of them has spoken to us but the little ones, and they did not tell us much. I did not expect that any of you could talk.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWell, I suppose you should call us Humans, or People. I don\u2019t much care for either name, but that is what people call us. Men are the males of our species, and women the females. When you say men you speak to only half of us. I am a person. When you say \u2018the little ones\u2019, do you mean children?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI suppose so; I never actually met any \u2018people\u2019 before this day.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CThen we\u2019re even, for I have never met a unicorn.\u201D Sierra held her hands gently over her breast. She looked down at herself, and then back at Aila, the unicorn standing before her."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"In a quieter but more serious voice she asked, \u201CAila, what have you done to me?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The unicorn lowered here head so that her eyes were level with the princess\u2019s. \u201CI closed the hole. All of your love and energy was pouring out of you and you were dying. I am sorry about the scar, princess, though it may have been unavoidable. All love scars. Did someone hurt you?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The princess looked down at her chest again. She felt different. She had been mourning for weeks, and had lost herself to her anguish and unrequited longing. She tried not to think about it, but it was everywhere. She constantly ached for him, and yet she could not see him, nor tell him how she loved him. She had felt drained of meaning, and her every ambition abandoned her. She spent days on end at the tower crenelations considering her fate. Life had no meaning, and she had no will to go on. It was her fear of dying that kept her alive, for whenever she put her toes to the edge, a wave of vertigo and fear overrode her decision to end herself."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHenry.\u201D She whispered the name out loud. \u201CHe was to marry me. I love him with all of my heart, but he did not love me. I only believed that he did. He let me think he did. Perhaps I just wished it. He made me feel so alive, Aila. He brought me so much joy. And now I have no one. Even my father has gone away.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sierra had stopped talking weeks ago, as her sickness consumed her. She had sequestered herself in her tower, and only her quiet maid of honour, Bee, had seen her in these dark days. She brought food and spirits, herbs and flowers. She lit candles, and placed peppermint in various places throughout the princess\u2019s chambers. She made the bed, and took care of the menial chores for Sierra, but there was little else to do and nothing to say."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHe ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"made you")," feel these things?\u201D Aila inquired in disbelief. \u201CPerhaps this is a human thing? Men can ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"make")," you feel things? Unicorns feel our own feelings. We are aware of other\u2019s feelings, and those can change what we decide to feel. But none can make us feel a thing. None can make us feel love or joy, or even fear; those feelings come from our own making. Our feelings belong to us, and in fact they are us \u2013 they make us who we are. I don\u2019t mean to preach, Sierra, but this is the way with us. When we love, we give our energy to another, and they give us theirs. It feels wonderful because their love is a feeling custom made for us. Trading energy feels good! I think you have been giving your love away for a long time without getting any back.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The princess looked out at the mountains in the distance, and down at the ground for a brief moment, then she looked again at the unicorn before her."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI still don\u2019t believe that you are real. May I touch you? You are such a beautiful creature.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYou may.\u201D Aila was alarmed, but she felt nothing but meekness from Sierra, and she again dismissed her apprehensions."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She stepped closer to the princess and rose her head slightly. The princess reached up and very delicately placed her hand on the unicorn\u2019s neck. Aila could barely feel the touch, but she felt a tiny gentle loving sensation from the princess. She returned it with a soft pulse of magical energy, which she focused to Sierra\u2019s heart."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYou have much love in you. I believe you are going to be well.\u201D Aila gently sent her words of affirmation, and Sierra responded."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYou know, Aila, I think I will be.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Road"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila felt pangs of hunger in her belly, so she turned away from the princess to give herself room for take off. She had not eaten much of that dreadful Algaronian grass! But where should she go, she wondered. She\u2019d been looking forward to the lush fields of Naranthal, but now she was here and yet the grazelands were not."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWait, where are you going\u201D Sierra interjected."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI don\u2019t know, actually. I need to graze but the fields I expected to be here are covered by human. I guess I will head west, to Farro\u2019s Den, where we sometimes graze in the summer.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh! I hoped we would have more time together. But don\u2019t go west! My father has lead our army west to do battle with the Kells.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CBattle? What is that? What is an army?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh Aila. You little bird.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"At that, Aila huffed. She was no bird! But she sensed that Sierra meant it playfully, so she let it go."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CArmies are great numbers of men dressed and trained to do battle, where they fight and kill each other. It\u2019s rather pointless, I think, but father said that if we don\u2019t make a stand that the Kells would take our lands and murder and enslave our people, so he had to fight them to protect our kingdom.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila did not fully understand, but she was mortified."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CThey go to kill each other? This is dreadful. I don\u2019t understand. Why would these Kells attack your herd?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI don\u2019t know, Aila, but the whole town is scared that when our army returns it will be in defeat, or worse, they they won\u2018t return at all, and instead the Kells will come. Everyone is worried. I had given up hope for myself so cared little, but now I find myself worried again. Still, for your sake I beseech you, do not go west!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI will not. I fear I do not know this land as I once did.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sierra perked up a bit. \u201COh! I know it well! Perhaps I can help you, as you helped me! I can show you where many green pastures are. Do you like alfalfa?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI do! What is it?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHa! You can\u2019t like it if you don\u2019t even know what it is! Aila, you\u2019re silly!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI like most things. Though, I don\u2019t like rope.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CRope? What\u2019s so bad about rope?\u201D The Princess squinched up her face and rose an eyebrow. Aila thought her expression looked peculiarly cute. The princess had charms."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CA man tried to capture me with rope. He put it around my neck and pulled until it choked me. Sierra, I will not be captured or confined in that way ever again.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh that\u2019s dreadful! Aila, hear me. I am the princess of this kingdom; I technically rule all of these lands when my father is away. While you are with me, no harm will befall you from the people here.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYou are the leader?\u201D Aila cocked her head."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI am their princess. My father is the king, and he is the ruler of Rothelyn and many lands stretching east and south. That is why he has gone off to fight this war with the Kells.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI see. I am sorry I must go then. But tell me first what is a Rothelyn?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhy, this kingdom. This,\u201D she said as she stretched her arms out wide and directed Aila\u2019s attention to the buildings and people below, \u201Cis Rothe.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh. I would have called it Aerenthal.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sierra made a face that confused Aila. The princess lowered her forelegs and opened her mouth to speak but said nothing. Aila again felt the absence of her ability to know the woman\u2019s thoughts, and was suddenly curious."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhy do you falter? Is something wrong with that name?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The princess looked down at her hands, and her face became somber again."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAden is the prince of Aerenthal, the kingdom to the south. Aila, how do you know these things?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI did not know! I just said what I felt this place should be called.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CThat doesn\u2019t make any sense!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila felt terrible about the misunderstanding and about having said the name of Aden\u2019s land. But she did not like the way Sierra was addressing her, and thought it best for her to depart."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI\u2019m sorry. I did not mean to upset you. I will leave now.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CNo, do not leave. I demand that you tell me why you have come here. You said you only arrived this day and that you did not know our lands. How do you know of Aerenthal? How do you know my name?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sierra\u2019s consternation was making Aila anxious. She\u2019d been pleased that her healing had gone so well, and the princess\u2019s mood had dramatically improved in a short time. But she was again agitated and this was different. Instead of moribund and morose she was now exasperated and angry. Aila\u2019s innocence guided her."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CSierra, look at me. Put your hand on my shoulder. ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"I am a unicorn"),". I do not know you or your ways, and you do not know mine. I know names. I don\u2019t know how or why, I just know that I do. I named Morsha yesterday at the naming ceremony. I have known the names of Esthle, Pim, Nylse, and Neddle. Many unicorns channel this art, but not all.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila\u2019s tone was soothing, and at the mention of each name her horn pulsed gently. Sierra put her hand on Aila\u2019s shoulder and admired the unicorns long, coarse white hair."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhy have you come here, Unicorn? Why have you come to me?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI don\u2019t know. I followed Tabor to the gates. I wished to visit the world of The Men.\u201D Aila caught herself too late. \u201CThe world of Humans.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sierra rolled her eyes and raised the corner of one lip a fraction of a degree. She felt a strange electricity from the powerful beast\u2019s coat. She noted that the unicorn was simultaneously powerfully muscled and delicately formed. She was by no means slender, and yet she appeared so. Her coat was almost metallic, the hairs were so perfectly aligned and thick. She was warm. Not just her exterior - Sierra felt an almost magical depth to the animal, and it was kind and inviting. And then she felt an indescribably sensation \u2013 few humans have ever experienced this, and there is no good way to describe it but it was almost as if her thoughts became tangible and they touched something, or fell into a velvet tapestry."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"You can feel me?")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sierra jerked away from the Unicorn. \u201CWhat was that!?\u201D She gasped."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI felt you! That was me! Aila!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The princess took several back-steps away. If you were here and paying close attention you might have noticed that her left hand that had touched the unicorn had a faint swirl of pink mist about it. You would very likely not have noticed that the scar above her heart was faintly glowing in the sunlight as well."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\"Aila. Why have you come here. Why have you come here ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"now"),"??"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI don\u2019t know! Maybe I came here to heal you. But Sierra, I must go now to graze. If not east then I will head south.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sierra put a hand to her lip and looked away."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWait. Yes. Go south. Follow the road south out of town and when you get to the bridge bear east \u2013 there are fields there that may be suitable for grazing while you wait for me. I\u2019ll follow and when I arrive I will take you to the alfalfa fields. You mustn\u2019t go alone for there are many men there. But you will be safe with me.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila was relieved at this change in the princess\u2019s disposition. She was unpredictable in a way that unnerved her, but Aila had to admit to herself that a part of her liked that about her. She was impulsive and petulant but good natured at heart. In a way, Sierra reminded Aila of Liba. Aila snorted at that thought."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhat?\u201D Sierra asked, thinking the snort was meant for her."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh nothing, that sounds perfect. Just one thing, though\u2026\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhat?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CTell me, what is a road?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Battle"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"King Reginald was tired. He was cold, and he was covered from head to toe with dried sweat, mud, and blood. Alone in his tent, weary from the days battle, he stood staring down at the makeshift war table, his arms crossed. He had lost two entire battalions today. He was now down to 700 men. 706, if you\u2019re keeping track of such things. He refused to think the actual words, fearing that if he formed the sentences \u2013 even in his mind \u2013 that they would become truth. But his gut was more daring, and there he felt the inevitable. He had lost this war."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The king frowned. Today\u2019s defeat was the latest in a series of desperations, though the battles had begun well enough. Reginald had led his army of three thousand to this spot thirty days ago. One thousand archers, including three hundred longbowmen. Fifteen hundred infantrymen. Two hundred pikes. Three hundred mounted calvary. They had fortified the eastern edge of the sloped valley between the scarps of the sister mountains Gaia and Egris with hurried entrenchments consisting of crude ditches and bulwarks."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The first of the Kells, a vanguard brigade of a thousand calvary men, had fallen fast. Reginalds longbowmen stood on either side of valley forming a large V, and as the riders entered the vale, they let loose clouds of arrows. His infantry had finished the job, and that first battle was over. He had lost 3 men that day, to the Kells thousand, and he let the men celebrate against his better judgement. Though they had handily defeated this wave of attack, he knew well that the true battle had yet to begin."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"There was nothing the next day, nor the next. He sent scouts. He busied the men with continued ditch digging and bulwark construction. He rode his horse Abi up the side of Egris as far as he could, and surveyed the surrounding lands. It was mountains and trees as far as the eye could see in all directions. It was spring, and it was cloudy. This was perhaps one of his last days. He breathed in the crisp air, and tasted the faint dust of wildflower. Waiting for war is a kingly experience he had grown tired of. Days passed, and his scouts did not return. He sent more."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"His trebuchets had arrived a week later: six twenty foot wood beam structures that could lob giant stone blocks at the enemy with great force. His army was growing restless, but they were confident after their first victory. With his growing fortifications, the king himself let himself hope that it would be enough to stave off the Kell\u2019s next attack."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"It was not. The next morning brought a sea of infantrymen, perhaps five thousand. Shielded and armored, the longbowmen loosed volleys of arrows but had little effect. His calvary rode out in a strong phalanx and was swallowed whole. When the Kells were within range, his trebuchets fired round after round and devastated large aisles of the invaders, but they were slow to load and Reginald wished he had a hundred of the nefarious machines. It was his pikemen and infantry who saved that day, for they fought with vigor and held the line for wave after wave of the kells onslaught."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The invaders retreated that late-afternoon, and this time their victory was not jovial. It was hard to tell if it was a victory at all. They had held the line, but now they knew the terror they faced, and they shared the king\u2019s apprehension."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Jival, his best scout, returned to camp that evening. He helped Reginald arrange the stone figures on the parchment map in his tent. The map was sobering and they said little. After they completed arranging the markers, he dismissed Jival, and called for his five generals. These were his friends, and he knew each well. They were fathers, and lords of their own lands. They had fought battles together, but never at these odds. When they came to him now, he was not relieved for their company, he was ashamed. He could see no victory before them."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"'My lords. We have fought bravely and with honor. Each of you has proven yourself to me on the battlefield and off. I owe you my allegiance and my gratitude, and know that you have it. As you know, this war is not yet over. It has only begun. My scouts inform me that Davas Kell has amassed an army ten times the size of ours when we set out from Rothe. I invite now your inspiration. I ask you to study this map, and to see in it arithmetic in our favor.\""),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The five men crowded around the map and for many minutes made not a sound. Thedlin abruptly reached for one of the markers, then stopped mid-motion and retracted his arm. Agien put his hands on either side of the table opposite the king and leaned over, staring at the pieces. He looked up at Reginald and they traded a grave expression."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"After the uncomfortable silence had progressed into shock, Willyn was the first to speak."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhat of King Stewart? What of Aerenthal?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CNo word.\u201D The king dismissed the notion. His hopes at improving relations with Aerenthal had withered when Prince Aden had rejected his and Sierra\u2019s betrothal. Many kings would have gone to war over such a slight, and if not for the Kells intrusions he himself may have as well. He had considered it when Steward had sent a page with the news on scroll. He didn\u2019t even have the nerve to come face to face. Coward."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI\u2019ll not send another bird.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Silence encased the room once again."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Egner stepped back from the table and turned toward the king. \u201CThere is no arithmetic here my lord. There is only defeat. We must surrender.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Thedlin rebutted. \u201CAye, like the Lastlers surrendered! Look at them now, wiped clean from the earth. Or like the Castlans surrendered \u2013 enslaved in their own homes. Or like the coastal tribes, the Inquori and the Maults. Where are they now, Egner? You would have us join them on the plains of Farro?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Agien gave muted voice to his outrage. \u201CWe must not surrender, Egner. The Kells have no mercy. They do not want our tribute, our taxes, our trade. They mean only to bury us.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Thedlin spoke again. \u201CWe have twice rebutted their attacks. Here we have the tactical advantage.\u201D He contemplated the map and moved the bulk of the Kells armies into the valley they were perched above."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWe must hold. Our archers will take one in ten.\u201D He moved a handful of the black stones off the map to the edge of the table."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COur trebuchets two more.\u201D Again he scooped away a small portion of the stones."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CSuppose we place pikemen here,\u201D he moved three of the white stones to the bluff on the south side of the valley, \u201CAnd here\u2026\u201D He moved three more stones to a cluster even farther south, \u201C\u2026and if we move all our longbows from the north side to the south,\u201D he slid the five conical white stones from one side of the valley to the other. \u201CThen when the Kells fill the Valley, our pikes will take their flank by surprise, and our bows might be able to take quite a few more men than otherwise.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"He moved another handful of the black stones off to the edge of the map."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWe will still be greatly outnumbered. Your own math doesn\u2019t add up, Thedlin.\u201D Vots had remained quiet, but this was strategy he was comfortable with."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CBut. As you point out, this strategy may well disrupt the thrust of their attack. This is good. If we can slow them down further, we may be able to hold the line long enough for our short bows to get under their belly.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Vots now reached over and moved several small white triangular markers out from behind the apex of the V where the fortifications were."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHere. We put most of our bows here. They will have no cover, but they will take a small regiment of swords as their vanguard. Here they can attack the enemy from the rear if they stay hidden long enough to do so. Then we might have a chance to prolong their attack long enough for the trebuchets to extend their doom.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAye, this plan may work.\u201D Agien spoke after a long pause. \u201CIt may not work. But it may.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The king rose. He stared momentarily at Agien and flashed him a faint inference of resignation."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CIt may work. There is a chance. That\u2019s what we have at our disposition. Chance. My lords, pray tonight to whatever god or gods you put faith in for that chance. Tonight I will write to my daughter and send her my blessings. Perhaps you will do the same. I will resign my fate, and the fate of Rothelyn, to chance on the morrow. But I will not put my trust in chance. I do trust in your honor. I trust your courage, and your love for this land. I trust that your men will fight for their freedom and their lives, and the lives of their families. I trust in our fellowship. Thedlin, Vots. You have not given me much hope this night. But you have given us a chance.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"They retired. The king wrote to his daughter Sierra."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("blockquote",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"My love, Though these are difficult times, I must place a task of the utmost importance on you now. I am not long for the earth, I fear. Our victory here is ill-assured. You will soon be queen, and I have not prepared you for this position. This tiny stone you may recognize as your mother\u2019s. Take it to the gates, and to her land. Yes, I was not forthcoming about this but the stories were true. There you may find Rothelyn\u2019s, and perhaps all of Aerenthal\u2019s, salvation. You know who to seek. Dear Sierra I have erred in so many ways.",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"Forgive me. Reg")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The next morning the Kells main force advanced. The Rothians executed their battle plans and were successful in deflecting the forces. They held their line."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"They had held their line now for several weeks, but at great cost. Each subsequent battle had been won by desperation and chance. At this rate, the Kells would defeat them through persistence alone. They were down to seven hundred men. Seven hundred and six, if you\u2019re counting."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Willow"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sierra rode a fine large gray stallion, which surprised Aila. When she had seen the horse and rider approaching, she retracted several steps into the denser foliage near the forest line, ready to bolt. She was not afraid of these humans but she did not want to engage at the moment, she wanted to graze. Sierra have been right, and this was good pasture. Though plain the grass was thick and bitter. There were brambles and goat\u2019s heads but she had avoided them for the most part. It had been a while since she flew from the castle when Sierra arrived, but she was still hungry. She did not realize how ravenous she had become until this opportunity to properly graze."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAila! You made it!\u201D Sierra called as she entered the field and rode towards the unicorn."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"If not for her voice she would not have recognized the princess. Instead of her flowing white gown, she now wore a sleeveless grey material around her top half and tight fitting black garments around her legs. Her long auburn hair was tied behind her face in a pretty pattern, and it reminded Aila of a unicorn or horse\u2019s tail."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila relaxed as they neared and she recognized the princess\u2019s voice."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHello Sierra! And good day to you, fine stallion; how is it that you carry this woman on your back?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The horse said nothing, though, and Aila realized that the princess was holding a rope that was tied around the poor stallion\u2019s face."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CRope! What are you doing? Why do you treat this animal so?\u201D Aila was horrified. She may be dangerous after all. This was dreadful!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh!\u201D Sierra was aghast. \u201COh Aila, I am sorry! I should have told you I\u2019d be riding. This is my horse, Willow. Oh this must look dreadful to you.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila took several steps back from the woman and lowered her head."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYou will not capture me, human.\u201D She stated matter of factly. Then, louder, \u201CStallion, why do you not speak. What ill has befallen you?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAila! I don\u2019t want to capture you!\u201D Sierra jumped off the horse. \u201CI have had Willow since I was a child. I love him. And I think he loves me! I use the reins to tell him which way I want to go. It must appear awful to you but he doesn\u2019t mind. I promise!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sierra reached up and pat the strong muscular grey neck."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYou don\u2019t mind, do you boy?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI do not mind.\u201D The stallion huffed."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila\u2019s ears perked up. \u201CSo you can speak! Why do you speak to her but not me? Stallion, is what she says true? You permit this treatment?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The stallion looked off into the woods blankly, as if he hadn\u2019t heard the unicorn."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sierra replied. \u201CI don\u2019t think he understands you, Aila. What do you mean he can speak?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhen he huffed, did you not hear him?\u201D The unicorn was confused."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI heard him huff, of course.\u201D The princess was confused."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWell, she replied. I understood, even if you did not.\u201D Aila was less outraged, and was piecing things together. The horse, Willow, understood the princess but not her. The princess understood her, but not her horse. Aila alone could understand them both."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHe did!?\u201D The princess was excited by this for some reason. \u201CWhat on earth did he say?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHe said, I do not mind.\u201D The unicorn was resigned to this situation even though she was uncomfortable with it."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAh Willie, I knew you didn\u2019t mind! So you can understand me, huh! All this time?\u201D And she put her arms around her steed\u2019s neck and whispered in his ear \u201CI love you, good boy.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Willow snorted. As Sierra turned to her, she realized her role as translator in her present company."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHe says\u2026 he says he loves you. \u2026And that his ear itches again.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sierra scrubbed his ear and scratched all around and behind it and then rubbed his cheek. She looked then again at the unicorn standing nearby, and realized that Aila was staring somewhat uncomfortably."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAila, I do not mistreat my animals. I will take off his reins if you prefer. But it does make riding easier.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhat do you mean by saying ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"my animals"),"? Surely you do not believe that you can own an animal?\u201D Aila was confronting a very uncomfortable situation the best way she knew how, with curiosity."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COwnership is peculiar, I guess. It must seem so to you. Amongst men, Willow is considered to be my own, yes. And there are many other animals in that category. But my father taught me that to own an animal means only that I am responsible for its well-being and care. I have help now, but for most of my childhood I worked in the stables and I alone fed and brushed him. He was a young pup when I first rode him, and I took many falls learning to ride. Aila, we grew up together, Willow and I. I still often visit the stables to feed him and I bring him treats. No of course he is not ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"mine"),", but he ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"is")," my horse. Does that make sense to you?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CSome, yes. Will you ask him one thing for me?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COf course.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWill you ask him to introduce you to me?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The princess made her squinched up face again. \u201CUh, ok. Hey, Willow, This is Aila, a unicorn from another land. She asks that you introduce me to her? Can you do that boy?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"And the stallion took a pace towards Aila and neighed."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CUnicorn. This is Princess Sierra, of Rothe. She is my princess. She is my human.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila was relieved. No equine would mischaracterize someone in introduction. It was weird, but this horse did appear to love his princess. And the princess plainly loved him. Aila did not like the way the horse\u2019s face was bound, but he truly did not seem to mind. Aila remembered seeing a woman riding a horse when she had first put her head through the portal; that felt like a lifetime ago now! She huffed to herself and decided to let it go."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAila, I can tell this makes you uncomfortable. Here.\u201D Sierra made several quick motions, and in short order she had removed the harness from Willow\u2019s face. She then unbuckled the great straps that wrapped around the horses belly, and removed the heavy object from the horse\u2019s back that she had sat upon. She put it all in a pile on the ground, and addressed her again."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CUnicorn, you are a fine creature. And I do not know your ways, and you do not know mine. But I insist that you trust me. I mean you no harm, and I mean Willow no harm either. Now, will you follow me to the best field of alfalfa you\u2019ve ever laid eyes on or not?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWell, I suppose I will have to trust you. I have never seen a field of alfalfa before.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"They both laughed. Sierra reached into the pile in the grass and pulled out a small rectangular object, which she placed in her jerkin before nimbly jumping up onto the great male horse\u2019s bare back. The image of this woman astride this horse suddenly made sense. It was the ropes that Aila didn\u2019t like, but this relationship the two had with each other appeared symbiotic."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CThen let\u2019s go!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"At that, the grey horse kept forward at an impressive rate, and the princess held on by hugging his great neck. Aila hoped she wasn\u2019t making a mistake as she loped up beside them."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Fields"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The alfalfa fields were not far. At a gallop they reached them in a short time. This horse Willow was an impressive specimen and he ran gracefully and fast. Aila thought that if he were in a hurry or abnormally excited, Willow might even be able to run super fast."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"There was a short wooden structure surrounding the lush green field which they had to jump over, but it was effortless. The grass was tall and grew in thick long rows that went on forever. It had a pungent, earthy smell that made the unicorn\u2019s belly growl."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CThis smells wonderful.\u201D She said to herself."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWell go on then, try some!\u201D Sierra beckoned. \u201CJust don\u2019t eat too much of it or you might get sick.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila did try it, and she kept trying it for quite some time. When she instinctively sent out a pulse, she felt Sierra and Willow at a distance. She had wandered pretty far without even realizing it! She cantered back over to her companions and saw Sierra had the rectangular object in her lap and was hunched over it. She had small tools she was working with. Aila was curious."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhat is that?\u201D She asked."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sierra jumped up, startled. \u201CAila! Oh, this is my book. I like to draw and write silly things in it. I guess it\u2019s a kind of journal. You know, of my thoughts.\u201D She was embarrassed but she had been working on a drawing that had turned out lovely, she thought. It was a green field of alfalfa with Aila the winged unicorn in the middle, standing sideways but looking towards the viewer."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHere you can look.\u201D Sierra held out the book for Aila to see."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CIt\u2019s me! You made a mirror!\u201D Aila was impressed. She knew that the humans of the past had spoken to the unicorns by drawing pictures but understood them to be crude, simplistic representations. But this was beautiful and the colors were gentle and graceful, and it was very obviously her on the page, down to her horn glowing pink."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CIt is wonderful, Sierra.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CThanks, Aila.\u201D She folded the book up and put it back inside her shirt. \u201CAre you still hungry? I can take you to some hay next if you like. You probably shouldn\u2019t eat too much more Alfalfa.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila was still hungry, even thought the sweet earthy alfalfa had gone a long way at restoring her energy. Aila didn\u2019t know what hay was, but she decided to trust Sierra this time."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYes, that sounds nice.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"They hopped the fence again, and trotted leisurely down the dirt road heading farther south. Willow was a quiet animal, and the three of them made their way in silence, side by side. The terrain here was familiar to Aila, but the surroundings were different enough to disorient her. The soft, rolling hills comforted her, but the fences and occasional buildings felt strange and wrong. Ahead, a large structure challenged the horizon to the west, and the fact that they were heading towards it gave Aila mild anxiety."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhat is that?\u201D She turned slightly to look at Sierra beside her, and saw that she was crying. \u201CSierra, your face is leaking again.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI know. It\u2019s ok. I\u2019m just sad.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI understand. Can I do anything?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CNo, it\u2019s fine actually. I wan\u2019t to feel this. I can\u2019t explain it. It feels good to be out with you and Willow. I just wish things were different.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"They slowed to a walk, and Aila asked again, \u201CWhat is that ahead? Is that hay?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CThe barn? No, but that\u2019s where they store the hay! Hay is just like dried grass. I think you\u2019ll like it.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI like most things. Particularly things I can eat.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Plan"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"King Reginald unfolded his arms. He\u2019d been staring at the war table for hours. He was cold and tired, covered in mud, and the fresh slice across his ear and jawbone was stinging. He was losing this war, and though he had in all actuality made his decision an hour ago, he only now gave in to it."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CGerd.\u201D He muttered the name of the man he knew to be footsteps away outside his tent, and his steward immediately lifted the flap with a gloved hand."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CMy lord?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CSummon Thedlin and Wilyn. Also, Vots. My lord.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Soon the three joined Reginald in the king\u2019s pavilion. The fire in the center of the room kept it warm, but they were cold to their bones. A week\u2019s rest by a fire and a full belly of hot stewed meat and mead, now that might\u2019ve brought their cold hands and faces back to life."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CFriends. Please, sit.\u201D Reginald gestured to the chairs surrounding the war table. The men sat, following the king."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CBy Farro\u2019s fate, we have held the vale for many weeks, as you know. We have lost many men here; you know that as well. Unfortunately I did not invite you here this night to relay the obvious, though I do wish that it were so. Nor did I unite us here to again make battle plans \u2013 there will be no battle on the morrow.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The king paused and examined their perplexed faces before continuing."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\"There can be no victory here, with our seven hundred men against the Kell\u2019s hoard of thousands. I have come to the conclusion, at great debate with myself, that we must return to Rothe. We must garrison the keep, and make preparations for siege."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"This is not ideal, of course. Rothe has not been prepared for siege for a hundred years. Not since Arenthal\u2019s treacherous secession has there been battle on Rothelyn land. Great preparations are needed and there is little time. Rothmew Keep was once a stalwart stronghold, and it may well hold against the Kells under proper guidance."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Still. The town is likely doomed. The curtain wall is small. In peace, the town has grown wide and populous. The townsfolk themselves must make their own preparations. They should ready themselves for their own protection or evacuation. They won\u2019t have much time. I know not their fate, though, and it ails me."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Now. Thedlin. We grew up together. I know your mind for logistics, and I know your heart belongs to Rothelyn. I must ask you \u2013 no, I apologize but I must command \u2013 that you carry out these tasks. You must lead our surviving army home to Rothmew. The men are tired, but you must not tarry, for the Kells will be on your heels. Send scouts and have preparations underway, for as soon as you arrive you will witness the Kells as you have not. They will taste victory, and they will thirst for your annihilation. By chance, if your defensive efforts hold, you will steward Rothelyn until Sierra returns and dons the queen\u2019s crown. I would hope, then, that you will provide her with continued counsel.\""),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Thedlin stared intensely at Reginald. The king knew his distaste for politics and leadership. The king knew his aversion to the castle and even the town. And the king knew well that he wanted only to return to his provincial farm in the east. Why was Reginald now placing him in charge of his arms and estates?"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The king stared across the table at his oldest friend. His look was grave. His full form and rugged leather armor was aged and tired. He saw the fear in Thedlin\u2019s amber eyes turn to resignation and felt the pain he had placed on his friend\u2019s shoulders."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CIt must be you Thedlin.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Thedlin nodded. \u201CAye. I understand.\u201D Their locked eyes superseded the pretense of position, and Thedlin asked the question that was gnawing on him."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CBut what of you my lord. Nallo, why do you not lead us home?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"King Reginald smiled briefly at the utterance of his old nickname, but then looked askance towards the fire and his grim countenance reverted."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI am going to kill Davas.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Departure"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"They made plans into dusk and the early hours of night. Before the moon had risen, the army had packed up and decamped. Thedlin sent squires ahead, and before their departure he sent two birds \u2013 one to Gregor, Rothmew\u2019s chief steward with a list of instructions, and one to his wife, with a more painful missive."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("blockquote",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Dearest Lil, I am well, though the battle is lost. We return to Rothemew in defeat, plagued by a sizable force which shadows us. The farm is no longer safehaven, and I implore you to take the children North to Falkir. My father will take you in; be at home there and send a bird to Rothe when you arrive. I will hold Rothmew, against Farro\u2019s might if need be. Honor me with your safety. Your\u2019s in all, Thedlin")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Thedlin had men dismantle the catapults with axes, avoiding fires that might be seen by enemy scouts. After that task was complete lead the troop towards Rothe at an urgent pace."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Meanwhile, Gerdwin, The king\u2019s attendant, helped don the kings' armor, and readied the king\u2019s horse, and before he could ready his own, he listened in shock as the king dismissed him."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYou have served me well and faithfully, Gerd. Go to your family, and by all means necessary keep them safe. The land north of Kensbrook is yours. This is small recompense for your years of servitude. Thank you, and fare thee well.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The king handed him a small scroll with his seal, which the man held with both hands as his king rode off."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Reginald met Wilyn and Vots near the makeshift stables, and they walked their horses swiftly into the dark. Twenty swordsmen, two bannermen, and one scribe followed. Reginald had thought carefully as to this company. Wilyn was not much in the way of witw, but he was optimistic, and eager for approval. Though a man of forty plus years, he was boyish in that way. He was a hulking man, and devastating with a mace or mourning star. He had a wife but no children. Vots was an odd choice on the surface, but he was cunning and devious. The king might need input on strategy, and though not much of a fighter, Vots was quick with his sword and fearless in battle. He was without family, as they had suffered poorly when a terrible sickness plagued the lands several years past."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"He had commanded the two generals earlier in the evening to recruit ten men each. No fathers. It was clear that they were heading to their deaths."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"There was a chance that the king would in fact manage to kill Davas, though none of them could see a clear path to that outcome. Far more likely was that upon confrontation, they would be immediately all be killed by the Davas Kell\u2019s guards."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Riding forward, the twenty six men each felt their doom looming closer with every step. Even the horses felt the dour nature of their task."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Nap"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The barn grew as they neared until it loomed over them, as tall as an oak. Aila remembered that there would be several men near this place, but she didn\u2019t see any of them. When they came to a turnoff in the road, they proceeded into the thick fields of tall meaty grass, prompting Aila\u2019s hunger to return. She and willow grazed while the princess cried. Aila wondered how many tears this human had to shed."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The hay grass was delicious, and reminded her of the golden fields of Naranthal. Instead of full and sweet, this was thin and bitter, but it was rich and earthy and soon Aila was contented. At some point Sierra had dismounted and she sat with her legs tucked under her in the shorter grass by the road. Aila walked over to her side, and finding herself exhausted, lay down beside the princess and stretched out her legs. Detecting a deep sadness from the woman, she nudged her nose gently into her companion\u2019s thigh and sent her a pulse of soothing energy. Sierra put her hand on Aila\u2019s neck and gently pet the unicorn. Soon both were asleep."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Willow grazed, but he did not range far. He was keeping an eye on his friends."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Dream"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sierra rode on the back of the great white unicorn in their dream. They flew blazingly fast through the evening\u2019s golden clouds. Sierra\u2019s gown trailed behind her and fluttered in the wind. The anticipation was palpable. They were late for the ceremony!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The landed in the courtyard to a great fanfare. Colored banners were hung and flew hight above the castle walls. Doves flew gracefully about. Bards sand joyous tunes, and trumpets marked their arrival. Sierra alighted and kissed Aila\u2019s head before walking to the red aisle where her father stood. He brushed a strand of her hair back out of her face, then kissed his daughter\u2019s cheek. Sierra looked up into his gold and blue eyes, and felt a powerful happiness from him. His grey stubble and weathered face augmented his smile. They held hands and began walking down the ails lined with relatives and friends garbed in their best finery."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila watched lovingly as the humans moved to join those at the grand entrance to the keep, where a gate of flowers stood. She was having a particularly important thought about this event when she was awakened by the clopping of hooves nearby."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Scroll"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The afternoon had waned, and Willow approached the sleeping pair. He clopped his hooves until they awoke."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHorses coming\u201D, he huffed."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHorses?\u201D Aila asked. She stood and shook the sleep from her face."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sierra roused herself and climbed onto Willow. The three of them stopped to listen, and Aila heard it. Two horses running at a full gallop, and heading their way. She turned to face the north and watched as two riders headed towards them. One was shining brightly in the mid day sun, and the other was much smaller and wore simple brown garb similar to what Sierra wore."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"They soon approached, and the small one shouted, \u201CPrincess Sierra! My princess! News from the front!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila tucked her wings tight to her body, ready to take flight at a moment\u2019s notice. The two men atop the two horses stopped and the man in brown dismounted. He reached into a bag that was attached to the horse somehow and retrieved a cylindrical object that he handed up to Sierra. He then bowed low onto one knee and looked at the ground. Aila was nonplussed, uncertain how to react to his odd behavior, but the princess was unfazed."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sierra took the scroll, and addressed the young man before her as she broke the seal and unraveled it. \u201CYou may rise, page, and I thank you for your haste.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The princess stared at the words on the page, and her face became devoid of all emotion. At the same time, Aila felt a surge of emotion from her. She could not identify it as anything other than panic, or worse, dread."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CReturn to the keep, now.\u201D Sierra commanded. \u201CMake haste. Summon Gregor and Schiff to the king\u2019s chambers. Ensure that they are there by dusk. And please retrieve my saddle and tack from the fields near Swallow\u2019s bridge.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYes Princess Sierra, of course.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh, and Page, Speak not of what you see here.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYour Highness?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COff with you, now. Haste!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The two riders raced back the way they\u2019d come, leaving a cloud of brown dust that softly settled with the breeze."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila watched Sierra pry a small stone from the paper and tuck it into a hidden pouch on her pants. She then patiently rolled up the scroll and tucked it into her shirt."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAila, I am sorry. This is terrible. I must return to the keep.\u201D The princess made an expression Aila didn\u2019t understand. Her eyebrows were curved up, and she frowned with her mouth. The feeling of dread sustained."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"It dawned on Aila that unlike unicorns, who think with each other, sharing whichever thoughts they like, humans could not, or did not do this. Instead they made a wide range of expressions with their faces and sent waves of raw emotional energy to communicate. Aila wondered how much subtlety she was missing due to her ignorance of these expressions."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhy? What has happened?\u201D Aila asked."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CIt\u2019s my father. He has lost the battle with the Kells and shan\u2019t return. He is doomed.\u201D A tear streamed down Sierra\u2019s face, and she wiped her eyes with her arm."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CDoomed? How is that?\u201D Aila, persisted."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI don\u2019t know!\u201D She exclaimed more forcefully than she intended."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI\u2019m sorry. He didn\u2019t say, he said only that he was not long for the earth and that the battle was going poorly. My father is a man of absolutes. He would not write the message if he did not think he was in trouble.\u201D Sierra felt she might be explaining more than she had to so she pulled out the scroll, and read it aloud. She read at an even pace without inflection, but Aila managed to catch a brief glimpse of her father, the king, hunched over a dimly lit desk writing the letter. He was cold, and tired, but little else did she sense. Her curiosity about the stone and Sierra\u2019s mother was eclipsed by this vision of a man defending his kingdom, taking the time to write his daughter. Aila liked him."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CIf you father is in trouble we must go help him, mustn\u2019t we?\u201D Aila asked naively."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHelp him? How?\u201D Sierra had not thought of it, and she now wondered why."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI don\u2019t know - I don\u2019t know what trouble he is in. I do know that you love him, and that if we can offer aid then we should.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"But Aila, he\u2019s a hundred miles from here! It would take us days to even get there.\""),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila cocked her head. She ruffled her feathered wings, and pawed at the ground with her tufted hoof."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI don\u2019t know how far a hundred miles is, but I imagine that I could get us there expediently. Not you, Willow. I apologize, but you are far too big for me to carry.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWait, what? You would carry ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"me"),"?\u201D The princess was stunned. They had spent the day together, and Sierra would never have suspected that Aila would take her flying."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI would, so that you might help your father.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh Aila!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI have two conditions, however. One, no ropes. You will have to tell me with your words which way you would like to travel. And two, you have to promise not to fall off.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CDeal. Willy, let\u2019s get you back to the stables. From there Aila will take me to try to help the king. You don\u2019t mind, do you boy? Aila would take you too, but she says you\u2019re too big.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI don\u2019t mind.\u201D Willow looked at Aila, and for the first time she felt one of his thoughts. He ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"did")," mind."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Stable"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"They trotted casually to the stables, which were on the south side of the town and not far. Instead of the main road, Sierra led them through the fields and small farms in order to avoid as many people as possible. She warned Aila that there would be people at the stables but assured her that they were safe and would not try to capture her. Besides, after watching how the page had revered the princess, Aila trusted that no ill would befall her."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"As they got nearer and nearer to the stables, however, Aila\u2019s self-preservation instincts kicked in. They progressed, and soon there were men in every direction. She trailed Sierra and Willow timorously."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The stables turned out to be a great conglomeration of fences and buildings of various configurations. From her conversations with Sierra, she understood that the stables were where the horses lived and congregated. She was surprised therefore that she didn\u2019t see any."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhere are all the horses?\u201D She asked Sierra as they trotted towards the largest of the buildings in their vicinity. It was a wide building with a mildly sloped roof and a broad entrance. It was much too large. Aila felt diminished by it, as if through its mere existence she became faintly less important. She wondered how it came to be. Did men make this? She couldn\u2019t believe it possible. She reflected on that, and remembered the enormous grey castle she had first landed on earlier that morning. That structure could fit several of these in its bottom half! This building was made of wood whereas the castle was of stone. She was accustomed to large masses of stone \u2013 that might be the difference. The large wooden building in contrast appeared unnatural."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAnd where did all this wood come from?\u201D Aila added."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CThey\u2019re all inside.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CInside?\u201D Aila asked. Her apprehension was mounting. Why would the horses be inside?"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COf course. Where else would they be?\u201D Sierra didn\u2019t realize that Aila had become uncomfortable."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CGrazing? Sierra I don\u2019t like this.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sierra turned back to face Aila, and saw that the unicorns ears were lying flat. The poor thing was scared."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh, Aila! It\u2019s ok. I promise. You don\u2019t have to go in if you don\u2019t want to.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"They had stopped directly outside the stable entrance, and as Sierra spoke to Aila, the stable master Anton emerged."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CPrincess! Welcome home. And look at that, what a fine mare you\u2019ve returned with.\u201D He walked as he spoke, and was soon within kicking distance of Aila."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sierra addressed him. \u201CAntin, this is Aila, my new friend. Aila, this is Antin. He is in charge of the care for all the royal horses of Rothe.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Antin spoke freely to his horses but was amused at the matter of fact way the princess spoke to this white horse, but he played along. He removed his hat and bowed deeply towards Aila."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CA pleasure to make your acquaintance, fair mare.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CIt is nice to meet you, kind sir. You care for the horses here? Why are they inside? Do they not prefer the open air? How can they graze?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Antin had known Sierra her entire life, and he was quick to drop formalities. He turned to the princess.."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhere did you pick this one up, Sierra? She\u2019s lovely. Lovely horse.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHorse!\u201D Aila was flummoxed. The man had not only ignored her questions, but had called her a horse!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sierra caught on immediately. \u201CAntin, Aila wishes to know why the horses are inside. She posits that they may prefer to remain outside. Will you answer her?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Antin frowned. He didn\u2019t realize that the game would go this far. The princess wanted him to pretend to talk to this horse, that was clear, but why?"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CEntertain me, Antin.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYes, your highness.\u201D He turned again to Aila. \u201CYou see, Aila, it\u2019s like this. We have twelve hundred horses here, all told. Now several hundred are out with the army, and about four hundred are out in rotation at any given time. But that leaves several hundred to keep track of. Letting them run wild isn\u2019t an option \u2013 they\u2019d soon wander off and run wild. We keep them inside for the night where we feed them and tend to them. You\u2019re welcome to come see for yourself. We have plenty of room if you\u2019d like a stall.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila appreciated the reply but found that she did not like his response. She huffed. \u201CLet them run wild? Then the horses are prisoners here? Kept inside against their will? What is a stall? Show me.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sierra did not like the tension that was forming, and neither did Aila. Nor did Antin. The day had been long, and now he was forced to explain the working of a stable to a horse."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sierra translated but softened the edge of Aila\u2019s questions. \u201CShe believes the horses to be imprisoned. She wants to see them.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYes your highness. Let\u2019s get Willow home and brushed.\u201D He waved them in."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sierra rode Willow down a long hall with a fence down the middle. Antin followed behind on foot."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila surveyed the dark interior. At every other stride was a new demarcation constructed out of wood panels and fencing. In about half of the cells stood a lone horse. Occasionally one neigh or snort a greeting. Several were seen curled up or lying on their side in the clean straw. There was a stench of urine and manure. The horses were living in their own filth. Each cell had a gate at the far end that appeared to lead outside."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila detected not fear from these horses, but a terrible boredom. It pervaded and oppressed the space. They were resigned to their existence being the extent of their lives. They might not even know what else was possible."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila felt guilty. She was free, and they were not."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"They came to a large empty cell at the end of the block, and Sierra dismounted. Willow made his way into his cell and Sierra followed. She took a brush from the wall and the tall, muscular, grey horse stood motionless while she brushed him free of dust and debris. She whispered sweetnesses to him and pet him with her hands, and Aila knew that she loved him dearly."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Antin had approached and stood beside her."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhat do you say, girl. Think you\u2019d like to stay here with Willow in hiis stall? The two of you would make fine foals.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She snorted goodbye to Willow, and let Sierra know that she was leaving before cantering back the way they\u2019d come. This was not a good place. It might not be a bad place either, but she wanted to leave and not return."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sierra rejoined the unicorn outside and discovered that dusk had descended to greet them. It was almost dark, and she had to get to the Castle to make arrangements. There was much to do before she could leave for the mountains. When she saw Aila again she nearly cried. The unicorns head hung low, and her ears lay flat and her eyes were almost shut. She approached and put her hand on her shoulder. She tried to send Aila happy energy, but found she didn\u2019t have much to offer."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila was grateful for the tenderness, but it didn\u2019t help. She was terribly sad."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CSierra, they are broken.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHmm? What\u2019s broken?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CThe horses. They aren\u2019t\u2026 horses anymore.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"A tear emerged from the unicorns eye, and rolled down and off her cheek into the air. It decided to make its way in a direct path to the dirt below, and when it landed, it exploded in a brief but colorful display. The small cloud of color dissipated, and a tiny pink flower emerged from the dirt."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{id:"the-ring",className:"section-title"},"The Ring"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The king sat on the edge of an outpost of broken granite rocks on Egris' slope and surveyed the misty valley below. The past month\u2019s battles had made a blight of the eastern side, and even from this distance and in the faint morning light the bodies and mud stood out like a dark scab. On the western side he could see faint indications of tents where The Kells were camped. He knew that he could see but a fraction of their massive force, and his spirit was grim."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Reginald and his small escort had covertly marched through the thin dark forest that lined the southern mountain\u2019s lower slope. The snow that fell gently through the tall pines and dusted the forest floor had been accompanied by a biting wind. They had concentrated on stealth rather than distance. The goal had been to split off from his primary force without leaving a perceptible trail. After several slow hours, they made a small fireless camp and ate dried rations. They slept cold that night, and briefly."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The king had sent Jivan out to reconnoiter the movement of the Kell\u2019s army before curling up in his simple low tent."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Distracted by the cold, sleep evaded him for a long while. He thought about Sienna, and hoped that she was well enough to obe his command. The last time he had seen her she was depleted in a disheartening way. She had loved Aerenthal\u2019s Prince Aden mightily for several years. Their betrothal was out of a storybook, the prince and princess in love, to be wed in the spring. Sienna had been delighted and consumed with her preparations. More than that, it was a political victory for the kingdom. Relations had been sour with the Stewarts since the secession of Aerenthal. Reginald saw the wedding as an opportunity for diplomacy."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"He thought about Cyann, Sienna\u2019s mother, his wife, the former queen, and though he did not permit himself to long for her as a rule, he did now. He\u2019d not seen her for many years, since she had returned to her home. She had become gravely ill, and she believed that her constitution was not suited to the realm of men. On his left forefinger he wore the last gift she had given him: a long narrow black stone. He\u2019d had it converted into a ring years ago and had worn it ever since. He rubbed it now with his thumb and sent Cy his love, and his foreboding. She would want to know that this might be the last time she would feel his presence. Almost immediately, the stone warmed and Reg felt her there, returning his love and longing. Sleep had finally come."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Jivan approached, and his words broke the king\u2019s bitter stupor."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CIt is as you expected. Davas follows at the army\u2019s heels in the coward\u2019s position. I followed the trail eastward several miles where it provides a great vista. The army here\u201D, he gestured towards the western valley, \u201Cis by my count but two thousand strong.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHow far behind the main force is Davas?\u201D The king asked. He was partially relieved by Jivan\u2019s report."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CNone my liege. He is stationed at the rear of the men but not apart from it.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CGood. That is good.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The king returned to camp and conspired with Wilyn and Vots. They would wait until the majority of the Kells had passed through the eastern saddle and then approach the rearguard in the open vale."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Ambush"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The king sat at the cluttered writing desk in his quarters, with several loosened scrolls before him. He signed his name, Egen Stewart, to the tail of the page before him and held the page over a candle to dry the ink. He rolled it, affixed his seal - a boar\u2019s head with a sword running through it \u2013 and pushed it to the side."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"There was a gentle rapping on his chamber door."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CCome.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"His son, Aden, entered. He was a tall, handsome young man of nineteen years. He wore decorative studded leather armor and a high collared forest green half cape. His long brown hair and boyish features made him appear younger than he was."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CFather, you called.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI did. Come. Sit.\u201D King Stewart rose from his desk and turned to face the room, but then reached back and plucked one of the sealed scrolls from the desk, which he handed to his son. They sat then at the long oak table and a maid poured them wine."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAden, you won\u2019t like what I am about to tell you. I don\u2019t like it. But we have little in the way of options \u2013 we are in fact in a gravley tenuous position. I have shielded you from this, but you must now be informed. You know my vision for a united Aerenthal, but not my many ill-fated plots to attain it. This recent debacle with the Rothian princes is a testament. Davas has destroyed my hope of taking Rothe diplomatically. His ambition is to rule all of Thren, and he has amassed a great army, which he currently moves east. I have skillfully negotiated a peace with Davas, and I have his signature here that he will allow us to retain sovereign rule over Aerenthal. However, to retain this right, concessions were made. I have pledged our forces to aid in his claim to Rothe.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"King Stewart paused to give the boy time to catch up, and to sip from his goblet."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COn the morrow you will lead our men north, and you will lay siege on castle Rothemew.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aden stared incredulously at his father. First he had commanded that he cut off communication with Sienna, his love and betrothed. Now he was to lead an attack on her home? This was an appalling notion."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI won\u2019t!\u201D He burst. He had many thoughts and was surprised that the denial was all he could utter."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"King Stewart narrowed his eyes and calmly rebutted, \u201CYes, you will.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aden found his tongue. \u201CNever! I love her, and you would have me attack her in her own keep! Nonsense. I won\u2019t do it.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The king pushed on the table as he rose, knocking over his goblet. Wine spread violently across the table and dripped through the planks to the stone floor below."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYou will do it, and you will keep your tongue in your mouth. Or you will have it cut from it, and you will wear the necrotic appendage around your neck instead of those silly charms you wear. And what\u2019s more, when I am done with you, Davas Kell will do even worse. He was not pleased that you dismissed my orders and prolonged your engagement with her. Nor was I pleased to learn of it from him. If you even think of contacting that troll again, you\u2019ll be wishing it was your tongue being removed.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aden stared in shock and hatred at his father. His hands trembled, and he felt an urge to urinate. He felt an urge to draw his sword and bury it in the old man\u2019s chest. But he had seen his father in this state before and knew better than to argue."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYes sir. I will do as you say.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYou will. Now then. I have given Riles orders to ready the army, and his instructions are clear. You will be leading the men in naught but appearance; he retains command. Is that clear?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CThat\u2019s clear.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CGood. And boy. Do not tempt me. If you make one move to advance on that whore I will have her head slowly removed from her frame while you watch, understand? Dismissed.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aden returned to his chambers. He quickly wrote a brief letter of warning to Sienna, and rolled the small parchment tight. Then, thinking on it twice, he placed the letter into the fire and watched it disappear into smoke."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Flight"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila sensed Sienna\u2019s nervousness but again couldn\u2019t interpret it. They walked away from the stables wordlessly. As they approached a larger road that was paved with small flat stones, Aila noticed that it went through a large wall and that there were many more people in the direction they were heading. In the distance the large grey castle was visible, though the atmosphere between them blurred its edges."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CSienna, I wonder. The castle is a ways off, and there appear to be many people here. Shall we try flying?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The princess\u2019s face lit up. \u201COh, yes, let\u2019s! What a wonderful idea. I had feared that I would have Gregor in a foul mood by the time I arrived, but if we fly we should make it to the castle by sundown.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila nodded and stretched her wings out wide to her sides. The princess approached from behind and hopped onto the unicorn\u2019s back. Her knees pressed into the large white feathers attached to Aila\u2019s side, though, and when Aila tried to move her wings she found it untenable."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CSorry, I don\u2019t think this will work. Try wrapping your legs over the front?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"It was tricky, but eventually Sienna repositioned her feet in front of Aila\u2019s wings. She held on tightly by pressing her knees into Aila\u2019s powerful neck. She gripped tightly to the base of Aila\u2019s long white mane and leaned back so that the bulk of her weight was behind the unicorn\u2019s shoulders."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COk, Aila. I think I\u2019m ready.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CNow or maybe never!\u201D Aila shouted as she lowered her head a few degrees, raised her wings and flapped down hard to lift off."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CEeeeee!\u201D The princess cried as she fell back and off the animal."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COoof!\u201D She cried as she landed on her back in the dirt."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CSenn!\u201D Aila cried, as she turned around in air several feet off the ground. \u201CYou promised!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI didn\u2019t expect it would be that abrupt! Who taught you how to fly!?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CNo one! I am still learning!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CGreat, now you tell me.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"They both laughed. Aila landed beside the mildly embarrassed princess and they got back into position. This time, Sienna wrapped her long arms around Aila\u2019s neck. She wouldn\u2019t be bucked off twice!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CLet\u2019s try again, unicorn! This time, try bringing us up to a gallop first so that the trajectory into the sky is less steep.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CGood idea!\u201D And it worked. Sienna held on with all her might as they gained speed, and when Aila flapped her wings they climbed steadily up into the sky. The unicorns wings and neck undulated rhythmically and Sienna let her leg muscles loosen to ease the friction where the backs of her knees met the wings at Aila\u2019s shoulders. Eventually she was able to shift her weight further back and relax her legs. In leaning back, she loosened her arms and trusted her balance, and her deathtrap on Aila\u2019s mane, to keep her perched on the unicorn\u2019s back."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"It was surprisingly effective. As Sienna relaxed, Aila relaxed. She kept her eyes on the castle, and soon they were at a fair elevation. She focused on flying smoothly and gracefully, and when she felt Sienna\u2019s fear, she sent calming signals to her. And shortly after that, she felt Sienna sending Aila thoughts of amazement and wonder. She could see the entire town and surrounding lands at once! How amazing the feeling of the wind was! The speed! They were flying!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The long walk was but a short flight, and they soon landed on the top of the castle where they had first met early that morning. What a day this had been \u2014 it was hard to believe how much had happened."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The princess dismounted and gave Aila a tremendous hug."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CThat was amazing! I\u2019ve never experienced anything like it! Thank you, Aila! Thank you!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CMy pleasure! It was fun! I like flying with company!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI\u2019m glad! We have a long flight planned.\u201D The princess was exhilarated and exhausted."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CFor now, I must go inside. I have matters to attend. I must inform Gregor and begin preparing the castle defenses. My cousin Schiff will know what else needs to be done, and I must pack for our journey. Oh, I will have Bee bring you snacks. Do you mind waiting out here?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The smile Aila\u2019s eyes became oddly complex, and she replied, \u201CI don\u2019t mind.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Worst"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"By early afternoon, the majority of the Kells army had moved through the valley. They had initially moved in formation to the saddle, where the Rothian\u2019s defenses had been positioned, and stopped. Several hours passed before the army continued, narrowing and funneling through the narrow passage. Vots reported that the Kells had sent scouts out in several directions but none back to the west."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"As the sun broke through the grey clouds, King Reginald commanded his scribe, Talmund, to detach from the group and stay out of sight so that he might record the history of the day. And he commanded Jivan to stay with Talmund so that he might relay news to Rothemew. He released the remainder of his men from service and urged them to return to their homes and salvage what they could of their futures. None did, however; instead the two dozen men marched with him upon the Kell\u2019s rear ward. Vots and Wilyn walked beside their king and flew Rothelyn\u2019s blue banners."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"His plan, foolish though it was, worked, and they soon found themselves face to face with the royal guard."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Reginald walked ten paces toward the enemy and stood motionless. He drew his sword, planted it in the ground tip first, and yelled, \u201CI demand audience with Davas Kell!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"There was a slight commotion as the news spread deep into the ranks. Eventually an aisle formed as the Kells made way for their king. They wore black armor and black helmets with red combs. The effect was terrifying."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Davas emerged. He was a short man, and thin beneath his own black armor. His was more decorated with leather studs and buckles, and behind him trailed a red and black cape, emblazoned with the raven that was the Kells crest. His black hair glistened in the sun which made his pale white face appear ghostly. Despite his stature, he was an intimidating figure, evidenced in the way his men shrank back from his approach. What unexpectedly unnerved Reginald, however, was his grin. He looked like a starving man with a stolen a turkey leg."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAh, good king Reginald.\u201D Davas spit out the words with dramatic pauses between each syllable and approached the king as he continued. \u201CYou honor me with your presence. How good of you. But I wonder. Why have you come? Do you wish to bend your knee? To pay tribute for the many lives you have taken? Do you wish to beg for mercy? Tell me, won\u2019t you?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI have come to challenge you in combat, Davas. Hand to hand. Fight me now, or be dishonored before your men.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Davas looked stunned. He traded glances with the men behind him, first glancing over his shoulder, then over his right."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAn interesting proposition, my fellow king.\u201D He took another step closer. \u201CBut I think I must decline\u2026\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Before he had finished breathing out his last syllable, Davas had drawn a dagger with his left hand and thrust it directly into the front of Reginald\u2019s throat."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201C\u2026because, my lord, it appears that you are already dead.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Davas extricated his blade with an equally quick motion. King Reginald fell to his knees and clutched his neck with his gauntleted hands. As he fell face first into the mud, Davas turned and disappeared into the crowd of soldiers."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Vots and Wilyn dropped their banners and had taken several long strides towards the Kells before arrows found their mark and they fell. It was Kurn \u2013 the youngest Rothian, and if it were a thing to be measured, the most afraid \u2013 who alone managed to strike a killing blow with his sword before he succumbed to the arrows and the tip of a lance in his gut."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Talmund and Jivan watched in numb silence as the scene unfolded. They had expected the worst, but they had been unable to imagine it."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Night"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila reflected on the day as she waited for the princess. She had been on adventures at home but they had consisted of her and Liba or Elsie walking to the edges of their grassland, or to the gates, or to strange forests where they would make new animal friends. This was different. She made a mental recap of the day, starting with leaping through the gates to this land of humans. She\u2019d seen a fox eat a rabbit, been attacked by men with rope, met Sienna and Willow, discovered alfalfa and hay, dreamt with the princess, seen the stables, and finally, flown with a woman on her back. A strange day indeed!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Ah, Liba. She missed her friend. She found that she didn\u2019t wish she was home, however, she wished that Liba could be here, experiencing this exciting land with her."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"A woman emerged from the large entrance to the keep, and behind her two men followed carrying large items. The woman halted abruptly and gestured to the men when she saw Aila. They placed the objects on the ground and retreated into the keep, shutting the doors behind them."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Bee slowly approached the unicorn. In a quiet voice that was almost a whisper she said, \u201CSo you are real after all. Well, what a fantastic thing you are. You are beautiful, Aila. Yes, Sienna told me all about you, though I admit to have doubted her. It\u2019s not everyday that we get unicorns visiting Rothe. Oh, how rude of me. I should introduce myself. I am Bee, Sienna\u2019s maid. I brought you apples and bread and grains.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila had been cautiously listening to Bee, and she found that the trust she had developed with Sienna carried over to this woman, her companion. She felt a rumble in her belly at the mention of apples."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI like apples!\u201D She stated."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Bee\u2019s face came to life, and she brought her hands to her face. \u201CYou can speak!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYes, and so can you! This is my first day amongst humans, and I gather that only some people can understand me or speak to me. Some people even mistake me for a horse, though I am not sure how that is possible.\u201D Her horn pulsed a nonchalant pink glow."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CNor do I, Aila. Here.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Bee brought over one of the objects from the doorway, which turned out to be a bag full of apples. She took one from the bag and held it out for Aila, who took it and ate it in several chomps. Bee emptied the bag near Aila\u2019s feet, and proceeded to drag the other object towards the unicorn. It was a bag full of grain, with a couple loaves of warm bread on top."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CThis should keep you busy for a while. I will come check on you if Sienna doesn\u2019t beat me to it. Aila, I am glad you have come. I haven\u2019t seen her this happy in a long time.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Bee returned inside, and Aila ate the apples and grain and then dozed while standing."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sienna came out several hours later, and they spoke briefly. She was needed for many decisions about the castle defenses and would be gathering numerous leaders and nobles for a forum later that night. They would have to leave for the front on the morrow."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Bee returned shortly thereafter and put a thick blanket over Aila\u2019s back. She spent the night meandering the rooftop and dozing. She felt lonely and displaced, but her dreams brought her happiness. She discovered a garden down a small flight of stairs on a larger rooftop area with trees and a small grassy area, and she lay there on her side in the grass and slept until morning."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Sword"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CThere you are! Aila, wake up! Wake up! It\u2019s time.\u201D Sierra had feared that the unicorn had left in the night, but was relieved to find her in the rose garden."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Upon awakening, Aila sent out an awareness pulse and felt Sienna (unsurprising), and Bee nearby but out of sight. They returned to the tower rooftop where Aila discovered hay had been brought up, and several red apples in addition. She ate greedily; she was feeling depleted after the night\u2019s sleep."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sienna heaved a pack over her back, and strapped a long slender object to her waist, which piqued Aila\u2019s curiosity."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhat\u2019s that, Senn?\u201D She nuzzled towards the princess waist."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CMy sword.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CSword?\u201D Aila was concerned."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sienna drew the metal object out of its sheath, and presented the shiny long object perpendicularly to her friend."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CIt is solely for defense. It is sharp, like your horn. But not nearly as beautiful or magical, I\u2019m afraid. I hope I don\u2019t need to use it, but I would be a fool to not take it with us.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila remembered Osiler preaching about the men who had attacked Tabor with long sharp knives, and got chills."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI do not like swords.\u201D Aila said."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CMe either, Aila. I don\u2019t like them either. I don\u2019t like that my father is in danger and possible dead. I don\u2019t like that the Kells are attacking us. This whole mess stinks. But I am not going defenseless into a battle.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The princess sheathed her sword. Aila huffed, but dismissed the issue."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI brought you something. Figs. I think you\u2019ll like figs.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sienna held out her hand and Aila resignedly gave the black objects in her hand a sniff. She took one and chewed it. She did like figs."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Bad Place"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"They flew east. At first it was exhilarating, as before, but they flew higher and higher, and soon the wind was biting. Sienna carefully rotated her legs up and around Aila\u2019s flapping wings and put her feet towards the unicorns waist. Lying prone in that manner kept her warmer, and for a brief period while flying through the clouds she relaxed and drifted off to sleep. She dreamt she was flying on the back of a unicorn through the clouds when a patch of sun broke through and revealed a colorful rainbow. She woke with a start, disoriented, and remembered quickly that she was in fact lying on the back of a unicorn, flying through the clouds. There was no rainbow, however, and a feeling of dread returned as she recalled their destination. If her father was in fact in trouble, what could she possible do to help? She had rudimentary skills with a sword at best, and her thin leather armor was hardly good at keeping mosquitoes at bay. She felt Aila send her hopeful energy \u2013 it felt like being filled up with warm water \u2013 and she put the fear aside. It didn\u2019t matter what she could do, it mattered only that she did what she could."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CDid you see the rainbow?\u201D Aila called. \u201CIt was remarkable!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAila, I dreamt that! It was a dream!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201COh. I thought it was real.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The rest of the flight was uneventful, aside from an awkward exchange with a small flock of geese that insisted on occupying their air space. They flew for a long time before a pair of mountaintops pierced the surface of the clouds, at which point Aila descended. Dropping through the clouds was scary, and Sienna gasped several times before Aila could calm her."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"They emerged near the famed sister mountains, Gaia, to the north and Egris, to the south. Sienna surveyed the road that wound through the lesser mountains and traced the line from the foothills up through the forest to the pass, but she saw nothing of much interest. As they neared the pass, the ground rose to meet their elevation and before long they were no more than a few dozen meters above ground. They tracked the forested path and Sienna watched closely for signs of battle."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Pffft!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Something sharp and fast pierced through Aila\u2019s left wing and glanced across Sienna\u2019s shoulder."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Pfffft!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Pfffft! Pffffft! Pffft!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Several more flew past."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CArrows! Aila, fly!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sienna wasn\u2019t sure how she had missed them, but there were a half-dozen men in black leather armor below them and to their left in the middle of the road. The men had bows and were excitedly taking shots."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Pffft!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Pffft!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Another arrow flew through Aila\u2019s wing and this one embedded itself into the back of Sienna\u2019s arm. Another pierced Aila\u2019s shoulder, and mid-flight, she reared in pain and nearly threw Sienna from her perch. They stabilized, and Sienna reached for the arrow in the unicorn\u2019s shoulder but as she grabbed it, it dematerialized and was gone. She watched as the bloody hole in her friend\u2019s hide reconstituted itself and was healed over as though it had never been there."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Her shoulder throbbed, and Sienna reached back to remove the arrow there, but found nothing but a hole in her leather and an incredible amount of pain."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila stepped into super speed, and headed for the valley between the mountains. They were heading that way anyway, and it looked like good cover. She darted to a narrow section between the slopes of the two mountains at the edge of the valley and landed."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhat happened, Sean? Why did they hurt us?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"There was no reply, as Sienna had fainted from the pain of the wound. As Aila landed and came to a stop, her friend slipped slowly off her back and fell face down onto the ground."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila paced nervously back and forth beside Sienna before nudging her with her nose. She could feel that Sienna\u2019s life force was strong, but none of her thoughts or emotions were available. It was strange how accustomed to them Aila had become. She bowed and nudged her horn into the hole in the back of Sienna\u2019s leather vest, and her horn flashed white."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Minutes later Sienna roused."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhat happened?\u201D She stood and dusted herself off."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWe landed. Your head went away for a while. I am glad you are back. Sienna. This is a bad place.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Fall"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Remounted, Sienna and Aila walked through the remains of the Rothian defenses. Ditches were cut into the earth and nearly filled with dead men. A man with numerous arrows in his chest was draped backwards over a short fence made of logs, clutching his sword. They crested the low hill which opened out over the valley where they saw that the gore stretched before them deep into the valley. Aila noted that the bodies of men and horse alike were sprawled across the slope. To either side of the broad valley were piles of bodies. The earth was black with mud and blood."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila was stupefied. She was tired from the flight, and healing Sienna\u2019s shoulder had depleted a strange amount of her energy. The sights spread out before her brought on an inescapable despair."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sienna felt numb, though not as drained as the unicorn. She felt Aila\u2019s shock and confusion and rubbed her friend\u2019s neck, sending vain assurances."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CLet\u2019s fly over, Aila. I must look for my father\u2019s banners.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI want to leave this place, Sienna. Look, they have fallen so many. And the horses\u2026\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI know. We will leave soon. You can go if you must, but I must learn what has become of my father.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI won\u2019t leave you. Not here.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"They flew in large low circles over the valley, and Sienna shouted, \u201CThere!\u201D Her voice was filled with anxiety."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"They landed near where two blue banners lay. One was twisted and had been trod into the mud, but the other lay flat and exposed the white marks of the Rothian sigil: a rearing horse, with angular wings reaching skyward. Aila stashed the curiosity away in her mind for the time being because Sienna was calling."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She had dismounted and started running in a single motion. She recognized her father\u2019s blue cape and silver armor from overhead as they descended. She ran to him, and cried for Aila as she reached his body."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila approached tentatively. There were long knives \u2013 swords \u2013 and dead men in great number here."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sienna struggled to turn her father over. He was a big man, and his armor made him nearly impossible to lift. Aila helped by dragging her hoof across his body and toward her. He flopped onto his back, his hands were a mess of blood and leather and steel at his throat. Sienna moved his hands away from the wound and blood flowed from his neck in slow steady pulses."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAila, he\u2019s alive!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHe is. Sienna. Move aside. You may not want to watch this.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sienna backed away but kept her eyes transfixed on her father and friend."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila awkwardly spread her front legs and tucked her chin, then decisively plunged her horn into the dying man\u2019s throat."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAila!\u201D Sienna gasped. But it was an empty cry heard by no one."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"There was a long pink glow, and then a white flash, and Aila retracted her horn and stood straight. She backed away from the man beneath her, and looked away into the western side of the valley."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sienna ran again to her father. The wound at his throat was healed, replaced by a faint pink seven pointed star. His breathing had returned but he did not rise."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"In a dazed reverie, Aila felt the treachery of the black haired man thrusting his knife deep into Sienna\u2019s father\u2019s throat. She felt the silver metal enter his trachea with a sting, as though it was her own. She felt the pleasure this wicked man derived from his action. She felt the knife removed, and his blood flowing out into the chilly air. She felt the pulse of his blood tire, and the darkness come to him."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The unicorn fell to her knees, then side, in defeat. There was too much death here. She watched several crows fly across the grey-white sky before she closed her eyes."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Return"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Jivan watched as a white horse approached the scene of his king\u2019s death. The rider dismounted, and they milled about the body of the king. The rider was small, and Jivan thought that they should approach."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Talmund, by his side, watched as a winged unicorn landed, and watched as Princess Sienna dismounted. He saw them approach the king, and watched as a great display of light lit up the midday sky."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"They had stayed in the rocks by the forest, waiting to be sure that the Kells were far gone, and had planned to retrieve the body of their kind and bury their companions."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Jivan was first to speak, though he was aware that Talmund was staring in the same direction."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWe should intercept.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CTrue. What a beauty.\u201D Talmund replied. Jivan shot him a quizzical glance before throwing his pack over his back and heading down the steep scree."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"As they came within a dozen meters of the unicorn horse, they watched it tumble over. Jivan watched as the princess hurried over to the horse\u2019s side and cry upon it, and Talmund gazed in awe as the princess\u2019s hands glowed pink upon the unicorn\u2019s white hide."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Jivan took a step forward to approach but Talmund held him back. This was out of character, Jivan thought, and yeh he stayed."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"For several minutes they stood watching. Talmund felt uncomfortable as they were witness to something not meant to be shared. Jivan grew bored, and glanced around the valley identifying places where men might be waiting."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Eventually the unicorn rose. She looked tired, and her wings were dangling loose at her sides."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHello.\u201D The unicorn had seen them and was addressing them!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhy, uh, hello.\u201D Talmund did not know the proper protocol here."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Jivan turned to him. \u201CAre you talking to the horse?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"At that the princess turned to him and shouted."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CLook at her! She is NOT a horse!\u201D She then recognized Jivan and her fury raged. \u201CAnd you, my father\u2019s best scout. Do you even have eyes?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Jivan knelt. \u201CMy princess, I see but a horse. What should I witness but this?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Talmund then replied. \u201CYour highness, forgive him. He cannot see for he cannot comprehend or believe. The unicorn is impossible for his sight.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Jivan made a confused face. \u201CUnicorn?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila walked over to him. She bent her head down to him, and touched her horn gingerly to the man\u2019s head."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYes. Unicorn. Do you see me now?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"He did. A shroud life from his eyes and he stared in amazement."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYes, I see you now. Forgive me.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI do.\u201D Aila turned from the man."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The princess addressed the scribe. \u201CHow is it that you are here? Why are you not dead like these others?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The scribe explained, and described the events leading to the murder of their king. He told of the Kell\u2019s army and its continued advancement on Rothe. He told of Thedlin\u2019s retreat to the castle, and of their orders to relay these events in the case of disaster."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"They turned the focus to the immediate, and discussed the king\u2019s current state. They couldn\u2019t leave him here. Jivan proposed carrying him home to Rothe on a stretched made of branches, but the princess dismissed the idea."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CThat will take forever, and the castle will be well under siege by then.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWe could take him to Lorne, but it is unclear if they have been taken by the Kell\u2019s themselves. I have heard contrasting reports.\u201D Jivan trailed off, dispelled."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila chimed in. \u201CI will return your father to the castle. Bee can care for him.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sienna stared at her friend. The unicorn was tired and sad, that was evident. But she felt something else in her companion. Despair at the days events had snaked into her core. Sienna feared that the unicorn was offering this service not because she cared, but because she did not."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAila, no, he cannot hold on and will surely fall.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila looked at the king on the ground He was breathing, but barely alive. He had been fighting to protect his people and sacrificed himself. She pawed at the dirt with her hoof, and looked Sienna in the eyes."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CCome with us.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAila it will never work.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She paused again and pawed at the ground, digging a short trench in the mud."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CThen\u2026 tie him to me.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The princess broke down. \u201CNo, Aila, I won\u2019t have it!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Jivan and Talmund convinced her that it was the best option. They laid the king upon the unicorn\u2019s back and tied him there with straps pilfered from the tack of dead horses."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila hated the leather straps. Each one told her stories about the death of the animals they came from, and about their job constricting and controlling horses. The flight home to the castle was miserable, and though she tried, Aila discovered that she was unable to fly super super fast. She feared her magic was waning here in this terrible place. She wanted to be home."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"How was she to get there? The portals were closed. Instead of finding a way home she had immersed herself in the life of a princess and a kingdom under siege. Why was she even here? She had run away from her life back home in what now felt like a childish tantrum. For a moment she lamented that she had not wished for a stallion and a simple life. Her instincts had led her to this deathly place. Why did she react with such vehemence against Osiler\u2019s ruling that coming here was forbidden? She wondered. She was alone and tired and downtrodden. She did not want to spend one hundred years in this place. That was clear."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"A part of her spirit had fallen asleep, and the exertion of flying super fast did something to wake it. She might not want to be here, but here she was. And all around her people needed her help. Sienna needed her. This king needed her most immediately. Aila wondered why she had been unable to revive him. She had pulled him back from his descent into death\u2019s empty quarters, but he stayed buried beneath the colorful current of the living. That had never happened before, though she had healed countless animals at home. She wondered if it was because the man was large, but she had restored her friends the bears and moose and even an elephant. The man was nowhere near as big as that kindly beast. But the elephant was simple and this creature was complex. His motivations were many where the animals she had healed in the past were simple and pure. Maybe it took more to revive a creature of mixed intentions."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"No, she concluded. She was just tired. Her magic was waning, and she should conserve it from here on."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She slowed and continued her flight at a leisurely fast pace. By late afternoon she had reached the castle. Bee came to her, and two men unstrapped the king and took him inside. Bee brought her treats of figs and bread and a bag of grain. There was more hay on the castle rooftop, and Aila ate. As she was finishing up, Bee cleaned her coat with a thick brush that she\u2019d brought out, and while doing so sang her a quiet song about geese that flew away for the winter and retuned in the spring. Aila liked the song, and she liked Bee."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"When she took flight to rejoin the princess she felt almost renewed."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The March"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aden watched his note to Sienna burn to char in his bedroom fire. He stared in ire until his thoughts of her abated and the flickering flame was all that remained. He stood, grabbed his sword and headed down to the armory where he met Ren, the wizened sword master."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CHere to spar, young prince?\u201D He asked as he finished rubbing oil into a broad red leather sheath."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAye, if you\u2019ve time. I spoke with father and heard his plans to march on Rothe in the morn. I\u2019m to lead the army, though Riles is the true commander.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Ren nodded slowly. \u201CAye, I\u2019ve heard. Come.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"They went out a set of arched gates to the practice yard, and drew swords. They went about a series of easy maneuvers, and Ren checked the young prince several times. Aden was an adept swordsman. It was his primary activity, and he had learned from the best masters in the land. Unlike his poetry or drawings, his father endorsed his training, and had even conscripted great warriors from other lands to come practice with him. Aden, though young, had developed a strong and agile body and style to his art, and could rightfully be considered a master of much of his craft. But today Ren was having little trouble thwarting his attacks."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYou are projecting.\u201D He called."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aden let his sword tip down, and it touched the ground. \u201CRen, it isn\u2019t fair. I still love her.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Ren made a slow but serious top down attack that forced the young prince\u2019s sword back up to protect his head."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CIt\u2019s not. That is why we fight.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The clashed together then, and Aden let out a fury of angry attacks that Ren handily defended."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CBoy, what is this?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aden ignored him and continued bashing at him with his sword. Raglan grew tired of the onslaught and deftly swept the boy\u2019s foot from beneath him and kicked the sword from the prince\u2019s hand; the tip of his own he placed firmly against Aden\u2019s neck."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYou now find yourself defenseless and prone to my will. With a twitch of a muscle your throat would be open. Your anger led you here, Aden. One day, and soon I hope, you will learn to use your emotions to further your intent instead of letting them negate it.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"He helped the young man to his feet, and they finished fighting for the day."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYou are wise, Ren. However, I believe my true obstacle is understanding my intentions in the first place.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAye, but you\u2019ll have to discover that on your own, my Prince.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aden returned to his quarters. He had his squire make preparations, and in the morning he departed for Rothe ahead of Aerenthal\u2019s two thousand man army. Riles and several commanders rode with him, several banner men followed and the main army marched closely behind."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aden and Riles shared an animosity for each other that they each understood. They rode in mutual silence. Towards the end of the day\u2019s ride, Riles informed the prince that they would camp three nights in order to arrive at Rothmew in the morning."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The prince nodded in assent."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAnd Prince, you will ride in the rearguard that day.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"At this Aden prickled. \u201CNo, that I will not do. I was ordered to lead the men, and I that I will do.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Riles scoffed. \u201CI command this army, Prince, and you\u2019ll follow.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aden abruptly rode forward several paces and turned his horse forcing Riles to stop."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYou do not command me, Knight. I will ride where it pleases me.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"With that, he turned and rode onward."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The Trail"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CYour Highness, ma\u2019am,We should clear the field. This is not a safe place to linger.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"They had stood deliberating for several minutes. Directly after the unicorn had flown off with the king, the Princess had broken down in sobs. She now knelt on the field in the mud and stared out, as though she had not heard Jivan\u2019s voice."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"They conferred, and Talmund, the young scribe, made an attempt. He circuited around the princess and knelt in front of her, and he spoke softly, \u201CPrincess Sierra\u2026 We must go.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"He extended his arm towards her. \u201CCome, permit me to help you up?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The princess persisted, her face revealing no indication that she\u2019d heard. Moments later, however, she stood and started walking towards the eastern slope of the valley where the majority of the battle had taken place."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CMa\u2019am. This way.\u201D Jivan offered, and the princess changed angles and follow the pair out to the south, towards the slope of Egris. They reached the trees at the edge of the valley and continues south eastwardly as they could."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Jivan led them, and Talmund was glad for his directional savviness. He, at Jivan\u2019s suggestion, walked behind the Princess, and several times when she stopped walking, he comforted her and urged her on. \u201CIt\u2019ll be all right\u201D, he\u2019d say. \u201CYour father is in good keeping now. Let us push on. We\u2019ll soon be home. All will be well.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"They walked until nightfall. They made a fireless camp, and ate dried meat rations. Jivan and Talmund took turns on watch as the Princess slept in the simple low tent."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CIt doesn\u2019t seem real, does it?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Sienna had risen without Talmund noticing, and she startled him out of his sleepless fog as she sat beside him on a log. They looked out over a sylvan vista of pine tree covered hillsides."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CWhat?\u201D He asked."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CThe unicorn. Aila. It feels like a dream, now that she\u2019s gone.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CIt does. But she is real. I felt her, Sienna. Where did you find her?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Talmund realized too late that he had informally called the Princess by name, but she didn\u2019t take offense. The quietude of the waking forest and Talmund\u2019s quiet voice comforted her."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CShe found me. I think she saved my life. I was on the roof of the keep. I was lost. Talmund, I was about to take my life when she came to me from nowhere. No, I don\u2019t think she saved me, I know she did. And now she\u2019s saving my father\u2019s. And I can barely believe in her. I don\u2019t know why she came here.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"There was a moment of silence. In the distance a crow cawed. The wind sounded like a distant river as it blew through the tall conifers that covered them."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI think she is a part of me. That sounds not right as I say it aloud. But we dream together, and she speaks to me using psychic powers. She always wants to help me feel better. I don\u2019t know why I\u2019m telling you this. You must think I\u2019m daft. I think I just want someone to know - someone else to understand. I love her.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Light snow began to fall. Talmund took his time and considered carefully what to say next."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CMy mother told me childhood stories about the unicorns. Never winged ones, though. I used to love her stories. She told me about magical gates that led to lands of dragons and faeries and nymphs and demons and monsters and deities. But she spoke most often of the unicorns. She talked about them almost elusively; she always seemed to know more than she said. I always thought she was spinning tales from air. Once, after an elaborate yarn about a pair of black unicorns that fought until they became one \u2013 I remember this well \u2013 I asked her where she learned the stories. And she replied, \u2018Why Tally, I have visited them.\u2019 And she laughed, never spoke of it again.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The Princess began to shiver. Talmund rose and unfolded a green wool blanked he\u2019d been sitting on and placed it over her shoulders."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"He continued, \u201CIncredible as it may be, I wasn\u2019t all that surprised to see a unicorn yesterday. I never wholeheartedly believed that they truly exist, but now I think I was always meant to see one. I just wish I could tell my mother about this day.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"They sat in silence for a long while. The morning light had been dim and colorless but the sun rose now in earnest."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Jivan rose and joined the pair. Sienna asked, \u201CHow much farther is our journey do you suppose?\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CAnother day east should bring us near Klosser if we make good time. We can likely find an inn and horses there - I doubt the Kells will travel south this far. From there it\u2019s another two days to Rothe.\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"They made tea over a small fire, and warmed up before setting off through the woods."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"section-title"},"The River"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila\u2019s elevated mood lasted through the first half of her return journey. It was a beautiful sunny day, and she found a spot several tree lengths above the ground where the wind supported her weight and made flying almost effortless. The flight was meditative and her head was clear, though she was eager to find her companions."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She looked forward to catching up with Sienna and her new friends Jivan and Talmund. Her initial impressions of the two were mixed. Jivan had first struck her as ignorant, but he proved himself adaptable. Aila felt confidence and concern from him, but she understood him to be concerned for the safety of the group out of a perfunctory sense of obligation and diligence rather than out of personalized concern. Similar to her friend the hawk, he was constantly aware of his surroundings and assessing risks. Talmund, on the other hoof, was sensitive and quiet. Aila felt an immediate kinship with the young man. He was concerned with their safety as individuals; he\u2019d hated the task of strapping the king to her back and had tried his best to comfort her. Aila was learning that concern for the welfare of others was a nuanced thing amongst people; not all humans cared for others. Some, however, were genuinely kind."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She traveled above the path of the road below to the west. Below, she saw a large body of men walking Eastward. She contemplated them, and remembering what Talmund had said concluded that this must be Thedlin and the Rothian troops heading back to Rothe. They would be home soon, this was good to see! She flew higher to avoid their attention, nonetheless."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Encouraged to see the army below, and eager to see Sienna, she motioned to go into super fast speed, but found she could not. She flapped her wings super fast, but she did not magically accelerate as she expected. Nervous, she abandoned her super speed efforts and returned to her previous pace. As she progressed, she found herself tiring. Flying was becoming exceedingly difficult. Shortly thereafter she noticed that she was descending without intending it. And soon she had landed, unable to fly."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She was scared \u2013 a feeling she was growing familiar with these days. What would she do? If she couldn\u2019t fly, how was she going to get back to Sienna?"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Her wings were sore, and their physicality distracted the unicorn from her flightless plight. She walked off the road to the south and heard the distant white noise of a river. A drink would be nice."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She made her way down a tricky slope and through a small thicket to the rocky edge of the clear river and drank. The water was cold and revitalizing. The sun beat on her back and the combination of the cool water and hot sun put a natural spell on her. At peace, enjoying the sensations of the natural world, she dozed for a moment."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She dreamt briefly of her home, where she met Liba. She was furious with her. ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"\u2018Where are you, Aila? We\u2019re all worried and searching for you.\u2019")," Aila woke before she could explain, and was left standing by the river in the sun."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She stretched her legs and back before making her way back up the hillside to the road. As she neared the road she froze, for she heard men\u2019s quiet voices. She soon saw two men in black heading down the path, and a sense of dread came over her. These men matched her memory of those on the field. They must be Kells."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Her her heart beat faster as she considered options. She decided to reverse her course and head back towards the river. She leapt into action and took several strides before hearing the sound of arrows."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Pffffft!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Intense pain coursed through her rear leg. She dispelled the arrow and her leg healed quickly, but it scared her. She flapped her wings and jumped; her wings gave her lift but not flight and she violently made her way down to the river\u2019s edge."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Pfft! Pfffft!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The river was wide and the current deep and strong \u2013 it was wider than she could cross safely. She turned to the west and ran."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Pfft!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She pounded through the small stones at the edge of the river until brush forced her back up the slope, and found a small trail."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Pffffft!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"She breezed past a series of pines and shrubs, and leapt over a log and through a dense patch of ivy."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Pfft!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The pines gave way to a patch of reeds and grass, and Aila emerged at a full gallop. She found herself face to face with the bulk of the Kellian army. Hundreds of men who had been milling about and resting suddenly became alert. Aila froze."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CGet her!\u201D Men from the forest yelled. \u201CIt can\u2019t fly!\u201D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Dozens of men facing her drew their long knives. One man had a rope nearby and he grabbed it and ran wide to her flank. They rushed into a semi-circular formation around Aila\u2019s sides and whichever way she turned to flee they had blocked. She heard the men behind her yelling from the forest. She reared on her back legs and flapped her wings, both trying to fly and intimidate the men. But she could do neither thing."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Standing tall above the men like that, she finally saw how many there were. Not hundreds, but thousands. Those currently challenging her were but a small contingent of the greater force. And she saw that the men were circling her, and growing denser. She had thought she knew fear but now she understood that the root of fear was mortality. In all her life, she had never considered that it might one day end. Here she was now, facing that reality unwillingly."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u201CI am Aila! The Winged Unicorn! I am free!\u201D Aila bellowed. She pawed at the sky, and spread her wings in a final display as she summoned all her strength."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Aila, glowing pink with trails of magic vapor drifting off her body in every direction, slammed her front feet down into the ground and erupted. An intense pink globe of magical energy spread out from her and men flew away in every direction. The explosion was instantaneous and silence followed. And for Aila, darkness; the spell had consumed her last ounce of magic, and she collapsed."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u2026"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null))];});

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
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// hilighter
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
function gridCells_typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){gridCells_typeof=function _typeof(obj){return typeof obj;};}else{gridCells_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return gridCells_typeof(obj);}function gridCells_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function gridCells_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)gridCells_setPrototypeOf(subClass,superClass);}function gridCells_setPrototypeOf(o,p){gridCells_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return gridCells_setPrototypeOf(o,p);}function gridCells_createSuper(Derived){var hasNativeReflectConstruct=gridCells_isNativeReflectConstruct();return function _createSuperInternal(){var Super=gridCells_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=gridCells_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return gridCells_possibleConstructorReturn(this,result);};}function gridCells_possibleConstructorReturn(self,call){if(call&&(gridCells_typeof(call)==="object"||typeof call==="function")){return call;}return gridCells_assertThisInitialized(self);}function gridCells_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function gridCells_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function gridCells_getPrototypeOf(o){gridCells_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return gridCells_getPrototypeOf(o);}function gridCells_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// utils
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
function imgGrid_typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){imgGrid_typeof=function _typeof(obj){return typeof obj;};}else{imgGrid_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return imgGrid_typeof(obj);}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function imgGrid_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function imgGrid_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)imgGrid_setPrototypeOf(subClass,superClass);}function imgGrid_setPrototypeOf(o,p){imgGrid_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return imgGrid_setPrototypeOf(o,p);}function imgGrid_createSuper(Derived){var hasNativeReflectConstruct=imgGrid_isNativeReflectConstruct();return function _createSuperInternal(){var Super=imgGrid_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=imgGrid_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return imgGrid_possibleConstructorReturn(this,result);};}function imgGrid_possibleConstructorReturn(self,call){if(call&&(imgGrid_typeof(call)==="object"||typeof call==="function")){return call;}return imgGrid_assertThisInitialized(self);}function imgGrid_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function imgGrid_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function imgGrid_getPrototypeOf(o){imgGrid_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return imgGrid_getPrototypeOf(o);}function imgGrid_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}/* ImgGrid */ /*
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
function code_typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){code_typeof=function _typeof(obj){return typeof obj;};}else{code_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return code_typeof(obj);}function code_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function code_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)code_setPrototypeOf(subClass,superClass);}function code_setPrototypeOf(o,p){code_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return code_setPrototypeOf(o,p);}function code_createSuper(Derived){var hasNativeReflectConstruct=code_isNativeReflectConstruct();return function _createSuperInternal(){var Super=code_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=code_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return code_possibleConstructorReturn(this,result);};}function code_possibleConstructorReturn(self,call){if(call&&(code_typeof(call)==="object"||typeof call==="function")){return call;}return code_assertThisInitialized(self);}function code_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function code_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function code_getPrototypeOf(o){code_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return code_getPrototypeOf(o);}function code_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// components
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
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// styles
//
var controls_Controls=/*#__PURE__*/function(_React$Component){_inherits(Controls,_React$Component);var _super=_createSuper(Controls);function Controls(){var _this;_classCallCheck(this,Controls);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_defineProperty(_assertThisInitialized(_this),"render",function(){var toggleMode=_this.props.controls?_this.props.controls.length?/*#__PURE__*/external_react_default.a.createElement("ul",{className:"controls"},/*#__PURE__*/external_react_default.a.createElement("li",{className:"mode"},"\u2600\uFE0F")):console.log('empty controls array'):console.log('no controls array');return(// toggleMode
null);});return _this;}return Controls;}(external_react_default.a.Component);_defineProperty(controls_Controls,"defaultProps",{controls:null});/* harmony default export */ var controls_controls = (controls_Controls);
// CONCATENATED MODULE: /Users/joshuar/Projects/jr-xix/src/components/grid/grid.js
function grid_typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){grid_typeof=function _typeof(obj){return typeof obj;};}else{grid_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return grid_typeof(obj);}function grid_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function grid_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)grid_setPrototypeOf(subClass,superClass);}function grid_setPrototypeOf(o,p){grid_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return grid_setPrototypeOf(o,p);}function grid_createSuper(Derived){var hasNativeReflectConstruct=grid_isNativeReflectConstruct();return function _createSuperInternal(){var Super=grid_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=grid_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return grid_possibleConstructorReturn(this,result);};}function grid_possibleConstructorReturn(self,call){if(call&&(grid_typeof(call)==="object"||typeof call==="function")){return call;}return grid_assertThisInitialized(self);}function grid_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function grid_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function grid_getPrototypeOf(o){grid_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return grid_getPrototypeOf(o);}function grid_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// components
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