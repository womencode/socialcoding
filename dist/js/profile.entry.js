/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = ui.module({
	    name: 'profile',
	    url: '',
	    abstract: true,
	    components: __webpack_require__(51),
	    subModules: [
	        'ngAria',
	        'ngMaterial',
	        'ngMessages',
	        'ngSanitize',
	        'ui.router',
	        'common'
	    ]
	})();

/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	module.exports = ui.components([
	   __webpack_require__(52)
	]);

/***/ },

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

	module.exports = ui.component({
	    name: 'profile',
	    controller: __webpack_require__(53),
	    template: __webpack_require__(54)
	});

/***/ },

/***/ 53:
/***/ function(module, exports) {

	module.exports = function ProfileCtrl() {
	    var ctrl = this;

	    ctrl.user = {
	        firstName: 'Ryan',
	        skills: [
	            {
	                name: 'JavaScript',
	                desc: '...'
	            },
	            {
	                name: 'iOS',
	                desc: '...'
	            },
	            {
	                name: 'AWS',
	                desc: '...'
	            }]
	    };
	};

/***/ },

/***/ 54:
/***/ function(module, exports) {

	module.exports = "<div layout=\"column\">\n    <div layout style=\"background-color: #abd4bd\">\n        <div layout layout-padding flex>\n            <div>\n                <img ng-src=\"/img/ryan.jpg\" class=\"md-avatar\" width=\"200\">\n            </div>\n\n            <div flex>\n                <h1>{{ ctrl.user.firstName }} {{ ctrl.user.lastName }} <md-icon md-font-library=\"material-icons\">online</md-icon></h1>\n            </div>\n\n            <md-whiteframe class=\"md-whiteframe-1dp\" style=\"background-color: #ffffff\" layout-paddingx layout=\"column\" layout-align=\"center center\">\n                <div>Likelihood of Reply: 89%</div>\n                <div>Response Time: within a few hours</div>\n\n                <div flex></div>\n\n                <a href=\"/code/\">\n                    <md-button class=\"md-raised md-primary\" style=\"background-color: #e4574b;\">\n                        <md-icon md-font-library=\"material-icons\">call</md-icon>\n                        Get Help from {{ctrl.user.firstName}}\n                    </md-button>\n                </a>\n\n            </md-whiteframe>\n        </div>\n    </div>\n\n    <div layout=\"column\" layout-margin>\n\n        <h3>About Me</h3>\n\n        <md-whiteframe class=\"md-whiteframe-1dp\" flex-sm=\"45\" flex-gt-sm=\"35\" flex-gt-md=\"25\" layout layout-padding>\n            <span>Text goes here</span>\n        </md-whiteframe>\n\n        <h3>Skills</h3>\n\n        <md-whiteframe class=\"md-whiteframe-1dp\" flex-sm=\"45\" flex-gt-sm=\"35\" flex-gt-md=\"25\" layout layout-padding>\n            <md-list>\n                <md-list-item ng-repeat=\"skill in ctrl.user.skills\">\n                    <h4>{{skill.name}}</h4>\n                    <p>{{skil.desc}}</p>\n                </md-list-item>\n            </md-list>\n        </md-whiteframe>\n    </div>\n</div>";

/***/ }

/******/ });