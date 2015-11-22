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

	__webpack_require__(54);

	module.exports = ui.module({
	    name: 'root',
	    url: '',
	    abstract: true,
	    components: __webpack_require__(56),
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

/***/ 54:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

	module.exports = ui.components([
	   __webpack_require__(57)
	]);

/***/ },

/***/ 57:
/***/ function(module, exports, __webpack_require__) {

	module.exports = ui.component({
	    name: 'rootSignup',
	    controller: __webpack_require__(58),
	    template: __webpack_require__(61)
	});

/***/ },

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function SignupCtrl($mdDialog) {
	    var self = this;

	    self.openDialog = openDialog;

	    function openDialog(ev, isMentor) {
	        $mdDialog.show({
	            controller: __webpack_require__(59),
	            controllerAs: 'ctrl',
	            template: __webpack_require__(60),
	            parent: angular.element(document.body),
	            targetEvent: ev,
	            clickOutsideToClose:true,
	            resolve: {
	                isMentor: function () {
	                    return isMentor;
	                }
	            }
	        })
	    }
	};

/***/ },

/***/ 59:
/***/ function(module, exports) {

	module.exports = function SignupDialogCtrl($mdDialog, $window, $cookies, isMentor, usersService) {
	    var ctrl = this;

	    ctrl.user = {
	      isMentor: isMentor,
	        skills: ['JavaScript'],
	        languages: ['English']
	    };

	    ctrl.signup = signup;
	    ctrl.cancel = cancel;

	    function signup() {
	        $cookies.put('login', ctrl.user);

	        //ctrl.user.id = usersService.users.length + 1;

	        //usersService.users.$add(ctrl.user).then(function () {
	            $window.location.href = '/dashboard/';
	        //});
	    }

	    function cancel() {
	        $mdDialog.cancel();
	    }
	};

/***/ },

/***/ 60:
/***/ function(module, exports) {

	module.exports = "<md-dialog flex=\"90\" aria-label=\"Signup\" ng-cloak>\n    <form>\n        <md-dialog-content>\n            <div class=\"md-dialog-content\" flex>\n                <div layout layout-sm=\"column\">\n                    <md-input-container flex>\n                        <label>First name</label>\n                        <input ng-model=\"ctrl.user.firstName\">\n                    </md-input-container>\n                    <md-input-container flex>\n                        <label>Last Name</label>\n                        <input ng-model=\"ctrl.user.lastName\">\n                    </md-input-container>\n                </div>\n\n                <div layout layout-sm=\"column\">\n                    <md-input-container flex>\n                        <label>Email</label>\n                        <input type=\"email\" ng-model=\"ctrl.user.email\">\n                    </md-input-container>\n                </div>\n\n                <div layout layout-sm=\"column\">\n                    <md-input-container flex>\n                        <label>Password</label>\n                        <input type=\"password\" ng-model=\"ctrl.user.password\">\n                    </md-input-container>\n                    <md-input-container flex>\n                        <label>Confirm</label>\n                        <input type=\"password\" ng-model=\"ctrl.confirmPassword\">\n                    </md-input-container>\n                </div>\n\n                <div layout layout-sm=\"column\" flex>\n                    <md-input-container flex>\n                        <label>Skills</label>\n                        <md-chips ng-model=\"ctrl.user.skills\"></md-chips>\n                    </md-input-container>\n                </div>\n\n                <div layout layout-sm=\"column\">\n                    <md-input-container flex>\n                        <label>Languages</label>\n                        <md-chips ng-model=\"ctrl.user.languages\"></md-chips>\n                    </md-input-container>\n                </div>\n\n            </div>\n        </md-dialog-content>\n        <md-dialog-actions layout=\"row\" layout-align=\"end\">\n            <md-button class=\"md-primary\" ng-click=\"ctrl.signup()\">\n                Signup\n            </md-button>\n            <md-button ng-click=\"ctrl.cancel()\">\n                Cancel\n            </md-button>\n        </md-dialog-actions>\n    </form>\n</md-dialog>";

/***/ },

/***/ 61:
/***/ function(module, exports) {

	module.exports = "<div layout layout-align=\"center center\" layout-padding flex style=\"background-color: #abd4bd\">\n    Get started\n    <md-button class=\"md-raised\" ng-click=\"ctrl.openDialog($event, false)\">learning</md-button>\n    or\n    <md-button class=\"md-raised\" ng-click=\"ctrl.openDialog($event, true)\">teaching</md-button>\n    within minutes!\n</div>";

/***/ }

/******/ });