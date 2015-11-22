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

	__webpack_require__(37);

	module.exports = ui.module({
	    name: 'root',
	    url: '',
	    abstract: true,
	    components: __webpack_require__(39),
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

/***/ 37:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

	module.exports = ui.components([
	   __webpack_require__(40)
	]);

/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

	module.exports = ui.component({
	    name: 'rootSignup',
	    controller: __webpack_require__(41),
	    template: __webpack_require__(44)
	});

/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function SignupCtrl($mdDialog) {
	    var self = this;

	    self.openDialog = openDialog;

	    function openDialog(ev) {
	        $mdDialog.show({
	            controller: __webpack_require__(42),
	            controllerAs: 'ctrl',
	            template: __webpack_require__(43),
	            parent: angular.element(document.body),
	            targetEvent: ev,
	            clickOutsideToClose:true
	        })
	    }
	};

/***/ },

/***/ 42:
/***/ function(module, exports) {

	module.exports = function SignupDialogCtrl($mdDialog, $window) {
	    var self = this;

	    self.signup = signup;
	    self.cancel = cancel;

	    function signup() {
	        $window.location.href = '/dashboard/';
	    }

	    function cancel() {
	        $mdDialog.cancel();
	    }
	};

/***/ },

/***/ 43:
/***/ function(module, exports) {

	module.exports = "<md-dialog aria-label=\"Signup\" ng-cloak>\n    <form>\n        <md-dialog-content>\n            <div class=\"md-dialog-content\">\n                <div layout layout-sm=\"column\">\n                    <md-input-container flex>\n                        <label>First name</label>\n                        <input ng-model=\"ctrl.user.firstName\">\n                    </md-input-container>\n                    <md-input-container flex>\n                        <label>Last Name</label>\n                        <input ng-model=\"ctrl.user.lastName\">\n                    </md-input-container>\n                </div>\n\n                <div layout layout-sm=\"column\">\n                    <md-input-container flex>\n                        <label>Email</label>\n                        <input type=\"email\" ng-model=\"ctrl.user.email\">\n                    </md-input-container>\n                </div>\n\n                <div layout layout-sm=\"column\">\n                    <md-input-container flex>\n                        <label>Password</label>\n                        <input ng-model=\"ctrl.user.password\">\n                    </md-input-container>\n                    <md-input-container flex>\n                        <label>Confirm</label>\n                        <input ng-model=\"ctrl.user.password\">\n                    </md-input-container>\n                </div>\n\n            </div>\n        </md-dialog-content>\n        <md-dialog-actions layout=\"row\" layout-align=\"end\">\n            <md-button class=\"md-primary\" ng-click=\"ctrl.signup()\">\n                Signup\n            </md-button>\n            <md-button ng-click=\"ctrl.cancel()\">\n                Cancel\n            </md-button>\n        </md-dialog-actions>\n    </form>\n</md-dialog>";

/***/ },

/***/ 44:
/***/ function(module, exports) {

	module.exports = "<div layout layout-align=\"center\">\n    <md-whiteframe class=\"md-whiteframe-1dp\" flex layout layout-align=\"center center\">\n        <md-button class=\"md-raised\" ng-click=\"ctrl.openDialog('student')\">I'm a Student</md-button>\n        OR\n        <md-button class=\"md-raised\" ng-click=\"ctrl.openDialog('mentor')\">I'm a Mentor</md-button>\n    </md-whiteframe>\n\n\n</div>";

/***/ }

/******/ });