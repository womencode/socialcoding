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
	    name: 'listings',
	    url: '',
	    abstract: true,
	    components: __webpack_require__(47),
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

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

	module.exports = ui.components([
	    __webpack_require__(48)
	]);

/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	module.exports = ui.component({
	    name: 'listingsList',
	    controller: __webpack_require__(49),
	    template: __webpack_require__(50)
	})

/***/ },

/***/ 49:
/***/ function(module, exports) {

	module.exports = function ListCtrl() {
	    var ctrl = this;

	    var imagePath = 'img/list/60.jpeg';

	    ctrl.users = [
	        {
	            id: 1,
	            firstName: 'Ryan',
	            lastName: 'Campbell',
	            tag: 'React.js/flux enthusiast, author of react-google-maps',
	            desc: "Tom is a JavaScript expert who has passion in creating reusable UI components with React.js. He's also like to use flux to organize complex business logics using unidirectional data-flow. He has",
	            skills: ['JavaScript', 'iOS', 'AWS', 'Grails', 'Node.JS']
	        },
	        {
	            id: 1,
	            firstName: 'Ryan',
	            lastName: 'Campbell',
	            tag: 'React.js/flux enthusiast, author of react-google-maps',
	            desc: "Tom is a JavaScript expert who has passion in creating reusable UI components with React.js. He's also like to use flux to organize complex business logics using unidirectional data-flow. He has",
	            skills: ['JavaScript', 'iOS', 'AWS', 'Grails', 'Node.JS']
	        },
	        {
	            id: 1,
	            firstName: 'Ryan',
	            lastName: 'Campbell',
	            tag: 'React.js/flux enthusiast, author of react-google-maps',
	            desc: "Tom is a JavaScript expert who has passion in creating reusable UI components with React.js. He's also like to use flux to organize complex business logics using unidirectional data-flow. He has",
	            skills: ['JavaScript', 'iOS', 'AWS', 'Grails', 'Node.JS']
	        },
	        {
	            id: 1,
	            firstName: 'Ryan',
	            lastName: 'Campbell',
	            tag: 'React.js/flux enthusiast, author of react-google-maps',
	            desc: "Tom is a JavaScript expert who has passion in creating reusable UI components with React.js. He's also like to use flux to organize complex business logics using unidirectional data-flow. He has",
	            skills: ['JavaScript', 'iOS', 'AWS', 'Grails', 'Node.JS']
	        },{
	            id: 1,
	            firstName: 'Ryan',
	            lastName: 'Campbell',
	            tag: 'React.js/flux enthusiast, author of react-google-maps',
	            desc: "Tom is a JavaScript expert who has passion in creating reusable UI components with React.js. He's also like to use flux to organize complex business logics using unidirectional data-flow. He has",
	            skills: ['JavaScript', 'iOS', 'AWS', 'Grails', 'Node.JS']
	        },
	        {
	            id: 1,
	            firstName: 'Ryan',
	            lastName: 'Campbell',
	            tag: 'React.js/flux enthusiast, author of react-google-maps',
	            desc: "Tom is a JavaScript expert who has passion in creating reusable UI components with React.js. He's also like to use flux to organize complex business logics using unidirectional data-flow. He has",
	            skills: ['JavaScript', 'iOS', 'AWS', 'Grails', 'Node.JS']
	        },{
	            id: 1,
	            firstName: 'Ryan',
	            lastName: 'Campbell',
	            tag: 'React.js/flux enthusiast, author of react-google-maps',
	            desc: "Tom is a JavaScript expert who has passion in creating reusable UI components with React.js. He's also like to use flux to organize complex business logics using unidirectional data-flow. He has",
	            skills: ['JavaScript', 'iOS', 'AWS', 'Grails', 'Node.JS']
	        },
	        {
	            id: 1,
	            firstName: 'Ryan',
	            lastName: 'Campbell',
	            tag: 'React.js/flux enthusiast, author of react-google-maps',
	            desc: "Tom is a JavaScript expert who has passion in creating reusable UI components with React.js. He's also like to use flux to organize complex business logics using unidirectional data-flow. He has",
	            skills: ['JavaScript', 'iOS', 'AWS', 'Grails', 'Node.JS']
	        },


	    ];



	    ctrl.phones = [
	        { type: 'Home', number: '(555) 251-1234' },
	        { type: 'Cell', number: '(555) 786-9841' },
	        { type: 'Office', number: '(555) 314-1592' }
	    ];

	    ctrl.todos = [
	        {
	            face : imagePath,
	            what: 'Brunch this weekend?',
	            who: 'Min Li Chan',
	            when: '3:08PM',
	            notes: " I'll be in your neighborhood doing errands"
	        },
	        {
	            face : imagePath,
	            what: 'Brunch this weekend?',
	            who: 'Min Li Chan',
	            when: '3:08PM',
	            notes: " I'll be in your neighborhood doing errands"
	        },
	        {
	            face : imagePath,
	            what: 'Brunch this weekend?',
	            who: 'Min Li Chan',
	            when: '3:08PM',
	            notes: " I'll be in your neighborhood doing errands"
	        },
	        {
	            face : imagePath,
	            what: 'Brunch this weekend?',
	            who: 'Min Li Chan',
	            when: '3:08PM',
	            notes: " I'll be in your neighborhood doing errands"
	        },
	        {
	            face : imagePath,
	            what: 'Brunch this weekend?',
	            who: 'Min Li Chan',
	            when: '3:08PM',
	            notes: " I'll be in your neighborhood doing errands"
	        }
	    ];
	};

/***/ },

/***/ 50:
/***/ function(module, exports) {

	module.exports = "<div layout=\"column\">\n    <div layout=\"column\" layout-padding style=\"background-color: #abd4bd\">\n        <div>Find a <b>JavaScript</b> mentor...</div>\n    </div>\n\n    <div layout layout-margin layout-padding>\n        <div layout=\"column\" flex=\"25\">\n            <md-whiteframe class=\"md-whiteframe-1dp\" flex-sm=\"45\" flex-gt-sm=\"35\" flex-gt-md=\"25\" layout=\"column\" layout-align=\"center center\">\n                <span>.md-whiteframe-1dp</span>\n                <span>.md-whiteframe-1dp</span>\n                <span>.md-whiteframe-1dp</span>\n                <span>.md-whiteframe-1dp</span>\n            </md-whiteframe>\n        </div>\n        <md-list flex=\"75\">\n            <md-list-item class=\"md-3-line\" ng-repeat=\"user in ctrl.users\">\n                <img ng-src=\"{{user.face}}?{{$index}}\" class=\"md-avatar\" alt=\"{{item.who}}\">\n                <div class=\"md-list-item-text\" layout=\"column\">\n                    <h3><a href=\"/profile/#id={{user.id}}\">{{ user.firstName }} {{ user.lastName }}</a></h3>\n                    <h4>{{ user.tag }}</h4>\n                    <p>{{ user.desc }}</p>\n                </div>\n                <md-button class=\"md-raised\">View Profile</md-button>\n                <md-divider ng-if=\"!$last\"></md-divider>\n            </md-list-item>\n        </md-list>\n    </div>\n</div>\n";

/***/ }

/******/ });