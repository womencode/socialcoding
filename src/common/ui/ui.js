/**
 * @ngdoc module
 * @name common.ui
 * @description
 * ui
 */

/**
 * @ngdoc service
 * @name ui
 * @module common.ui
 *
 * @description
 * `ui` is awesome!
 */
var ui = module.exports = {
  configs: {}
};

// ========================================
// module
// ========================================

/**
 * @ngdoc method
 * @name ui#get
 *
 * @description
 * Grab the module config for a specific module
 *
 * @param {string} name Name of module config to retrieve
 *
 * @returns {object} Module config or null if not found
 */
ui.get = function (name) {
  return ui.configs[name];
};

/**
 * @ngdoc method
 * @name ui#module
 *
 * @description
 * Generates an Angular module
 *
 * @param {object} config A config object, with the following properties:
 *
 *   - `name` - `{string}`: Relative name
 *   - `url` - `{string=}`: Relative url
 *   - `components` - `{function=}`: ui.components() result
 *   - `views` - `{function=}`: ui.views() result
 *   - `modals` - `{function=}`: ui.modals() result
 *   - `menuItem` - `{object=}`: Menu item details
 *   - `comments` - `{object=}`: Comments config (vertail and type)
 *   - `subModules` - `{array=}`: Array of sub modules. Either ui.module() results or strings
 *   - `security` - `{object=}`: Security config
 *   - `breadcrumbItem` - `{object=}`: ncyBreadcrumb config
 *   - `ribbon` - `{object=}`: ribbon config
 *   - `resolve` - `{object=}`: ui-router resolves
 *   - `abstract` - `{boolean=}`: Default false
 *   - `onEnter` - `{function=}`: ui-router onEnter handler
*   - `onExit` - `{function=}`: ui-router onExit handler
*
* @returns {function} A function used internally to generate the Angular module
*
*/
ui.module = uiConfig(function (c, parent) {
  var config = _.clone(c);

  if (parent) {
    config.name = parent.name + '.' + config.name
  }

  ui.configs[config.name] = config;
  config.parent = parent;

  var views = config.views ? config.views(config, module, parent) : null;

  var subModules = _.map(config.subModules, function (subModule) {
      return _.isFunction(subModule) ? subModule(config).name : subModule;
    }) || [];

  _.each(['components', 'services', 'filters', 'validators'], function (key) {
    if (config[key]) {
      subModules.push(config[key](config).name);
    }
  });

  if (config.modals) {
    subModules = subModules.concat(config.modals(config));
  }

  if (_.has(config, 'url')) {
    subModules.push('ui.router');
  }

  if (config.menuItem) {
    subModules.push('cad.common.models.menu');
  }

  if (config.comments) {
    if (!config.resolve) { config.resolve = {}; }

    if (config.comments.vertical) {
      config.resolve.commentsVertical = function () {
        return config.comments.vertical;
      };
    }

    if (config.comments.type) {
      config.resolve.commentsType = function () {
        return config.comments.type;
      };
    }
  }

  var module = angular.module(config.name, subModules);

  if (_.has(config, 'url') || config.name == 'cad') {
    module.config(function ($stateProvider) {
      var viewConfig = {
        url: config.url,
        resolve: config.resolve,
        views: views,
        abstract: config.abstract || !config.views && !config.onEnter,
        ncyBreadcrumb: config.breadcrumbItem || {skip: true},
        onEnter: config.onEnter,
        onExit: config.onExit
      };
      viewConfig.data = {};
      if(config.security && config.security.authorization) {
        viewConfig.data.auth = config.security.authorization;
      }

      if (config.ribbon) {
        viewConfig.data.ribbon = config.ribbon;
      }

      $stateProvider.state(config.name, viewConfig);
    });
  }

  if (config.menuItem) {
    config.menuItem.sref = config.name;
    if(config.security){
      config.menuItem.auth = config.security.authorization;
    }


    module.run(function (menuModel) {
      menuModel.addMenuItem(parent && parent.menuItem, config.menuItem);
    });
  }

  if (config.callback) {
    config.callback(module);
  }

  if (config.run) {
    module.run(config.run);
  }

  return module;
});

// ========================================
// views
// ========================================

/**
 * @ngdoc method
 * @name ui#views
 *
 * @description
 * Generates the ui-router views config for a ui.module()
 *
 * @param {object} config A config object containing each view.
 *
 *   - `content` - `{function=}`: ui.view() result
 *   - `ribbon` - `{function=}`: ui.view() result
 *   - `search` - `{function=}`: ui.view() result
 *   - `sidebar` - `{function=}`: ui.view() result
 *
 * @returns {function} A function used internally to generate the Angular module
 */
ui.views = function (config) {
  return function (moduleConfig, angularModule, parentConfig) {
    var views = {};

    moduleConfig.hasSidebar = (parentConfig && parentConfig.hasSidebar) || (config.sidebar);

    if (config.sidebar) {
      views['@'] = {
        template:
        '<div class="core" ng-cloak layout="row">' +
        '<md-sidenav ui-view="sectionSidebar@" class="site-sidenav md-sidenav-left md-whiteframe-z2" md-component-id="left" md-is-locked-open="true">'+
        '</md-sidenav>'+
          //  '<div layout="row" ui-view="sectionSidebar@"></div>' +
        '<md-content id="sectionContent" layout="column" layout-padding md-scroll-y  tabIndex="-1" ui-view="sectionContent@" flex >' +
        '</md-content>' +
        '</div>'
      };
    } else if(!moduleConfig.hasSidebar){
      views['@'] = {
        template:
        '<md-content id="sectionContent" class="core" ng-cloak layout="column" layout-padding md-scroll-y tabIndex="-1" ui-view="sectionContent@">' +
        '</md-content>'
      };

    }

    _.each(_.keys(config), function (key) {
      views[getViewName(config, key)] = config[key](moduleConfig, angularModule, key);

    });

    return views;
  };
};

/**
 * @ngdoc method
 * @name ui#view
 *
 * @description
 * Generates the ui-router views config for a ui.module()
 *
 * @param {object} config A config object for the view. See ui-router docs
 *
 * @returns {function} A function used internally to generate the Angular module
 */
ui.view = function (config) {
  return function (moduleConfig, angularModule, name) {
    _.defaults(config, {
      controllerAs: 'ctrl'
    });

    return config;
  };
};

function getViewName(config, key) {
  switch (key) {
    case 'search': return 'search@';
    case 'content': return 'sectionContent@';
    case 'sidebar': return 'sectionSidebar@';
    case 'ribbon': return 'ribbon@';
    default: return key;
  }
}

// ========================================
// components
// ========================================

/**
 * @ngdoc method
 * @name ui#component
 *
 * @description
 * Generates an Angular directive as a component with smart defaults. See Angular directive docs for full config. Only defaults are listed here.
 *
 * @param {object} config A config object for the component
 *
 *   - `name` - `{string}`: Camel case name of directive
 *   - `restrict` - `{string=}`: Defaults to 'EA'
 *   - `transclude` - `{boolean=}`: Defaults to true if the template includes 'ng-transclude'
 *   - `template` - `{string=}`: Template string, use require() to include an external template
 *   - `controller` - `{function=}`: Defaults to an empty function
 *   - `controllerAs` - `{string=}`: Defaults to 'ctrl'
 *   - `scope` - `{*=}`: Defaults to an empty isolated scope
 *   - `bindToController` - `{boolean=}` Defaults to true
 *   - `replace` - `{boolean=}` Defaults to true if a template is included
 *
 * See ui.module() docs, all config for a module works here as well
 *
 * @returns {function} A function used internally to generate the Angular directive
 */
ui.component = uiConfig(function (config, parent) {
  if (!config.name) throw new Error('Name required for component');

  var origLink = config.link;

  _.defaults(config, {
    restrict: 'EA',
    transclude: config.template && config.template.indexOf('ng-transclude') !== -1,
    controller: function () {},
    controllerAs: 'ctrl',
    scope: {},
    bindToController: true,
    replace: config.template !== null
  });

  if (_.isObject(config.scope) && config.controller) {
    config.scope.ref = '=?';
    config.link = function (scope, el, attrs, ctrls, t) {
      scope.ctrl.ref = scope.ctrl;

      if (origLink) origLink(scope, el, attrs, ctrls, t);
    };
  }

  var module = ui.module(config)(parent);

  module.directive(config.name, function () {
    return config;
  });

  if (config.controller) {
    module.controller(config.name.replace(/[\.\-\_]+/g, ''), config.controller);
  }

  return module;
});

/**
 * @ngdoc method
 * @name ui#components
 *
 * @description
 * Configures a ui.module() with an array of components as sub-modules.
 *
 * @param {array} components An array of ui.component() results
 *
 * @returns {function} A function used internally to generate the Angular module
 */
ui.components = uiSubModules('components');

// ========================================
// validator
// ========================================

/**
 * @ngdoc method
 * @name ui#validator
 *
 * @description
 * Generates an Angular async validator. See Angular validator docs
 * Call promise.resolve() or promise.reject() to pass or fail the validation
 *
 * @param {object} config A config object for the validator
 *
 *   - `name` - `{string}`: Camel case name of directive
 *   - `validator` - `{function=}`: method(scope, modelValue, viewValue, promise)
 *
 * See ui.module() docs, all config for a module works here as well
 *
 * @returns {function} A function used internally to generate the Angular directive
 */
ui.validator = uiConfig(function (config, parent) {
  if (!config.name) throw new Error('Name required for validator');

  var origLink = config.link;

  _.defaults(config, {
    restrict: 'A',
    scope: {},
    require: 'ngModel'
  });

  var module = ui.module(config)(parent);

  module.directive(config.name, function ($q) {
    config.link = function (scope, elm, attrs, ngModel) {
      var submitCount = 0;

      if (config.warning) {
        scope.$on('formSubmit', function () {

          if (submitCount) {
            ngModel.$setValidity(config.name, true);
          }
          submitCount++;
        });
      }

      ngModel.$asyncValidators[config.name] = function (modelValue, viewValue) {
        var async = $q.defer();

        submitCount = 0;
        config.validator(scope, modelValue, viewValue, async);

        return async.promise;
      };

      if (config.scope) {
        scope.$watch('[' + _.keys(config.scope).join(',') + ']', function () {
          ngModel.$validate();
        }, true);
      }
    };

    return config;
  });

  return module;
});

/**
 * @ngdoc method
 * @name ui#validators
 *
 * @description
 * Configures a ui.module() with an array of validators as sub-modules.
 *
 * @param {array} validators An array of ui.validator() results
 *
 * @returns {function} A function used internally to generate the Angular module
 */
ui.validators = uiSubModules('validators');

// ========================================
// filters
// ========================================

/**
 * @ngdoc method
 * @name ui#filter
 *
 * @description
 * Generates an Angular filter. See Angular filter docs
 *
 * @param {object} config A config object for the filter
 *
 *   - `name` - `{string}`: Camel case name of filter
 *   - `filter` - `{function=}`: filter method.
 *
 * See ui.module() docs, all config for a module works here as well
 *
 * @returns {function} A function used internally to generate the Angular filter
 */
ui.filter = uiConfig(function (config, parent) {
  if (!config.name) throw new Error('Name required for filter');

  var origName = config.name;

  var module = ui.module(config)(parent);

  module.filter(origName, config.filter);

  return module;
});

/**
 * @ngdoc method
 * @name ui#filters
 *
 * @description
 * Configures a ui.module() with an array of filters as sub-modules.
 *
 * @param {array} filters An array of ui.filter() results
 *
 * @returns {function} A function used internally to generate the Angular module
 */
ui.filters = uiSubModules('filters');

// ========================================
// service
// ========================================

/**
 * @ngdoc method
 * @name ui#service
 *
 * @description
 * Generates an Angular service. See Angular service docs
 *
 * @param {object} config A config object for the service
 *
 *   - `name` - `{string}`: Camel case name of service
 *   - `service` - `{function=}`: service constructor
 *
 * See ui.module() docs, all config for a module works here as well
 *
 * @returns {function} A function used internally to generate the Angular service
 */
ui.service = uiConfig(function (config, parent) {
  if (!config.name) throw new Error('Name required for service');

  var module = ui.module(config)(parent);

  module.service(config.name, config.service);

  return module;
});

/**
 * @ngdoc method
 * @name ui#services
 *
 * @description
 * Configures a ui.module() with an array of services as sub-modules.
 *
 * @param {array} Array of ui.module() results
 *
 * @returns {function} A function used internally to generate the Angular module
 */
ui.services = uiSubModules('services');

// ========================================
// modal
// ========================================

/**
 * @ngdoc method
 * @name ui#modal
 *
 * @description
 * Generates a modal module that opens/closes when navigating to or from the specified URL. Uses Angular Material $mdDialog
 *
 * @param {object} config A config object for the modal
 *
 *   - `name` - `{string}`: Camel case name of modal
 *   - `template` - `{string=}`: Template string, use require() to include an external template
 *   - `controller` - `{function=}`: Defaults to an empty function
 *   - `controllerAs` - `{string=}`: Defaults to 'ctrl'
 *   - `parent` - `{jQuery=}`: Defaults to angular.element(document.body)
 *   - `clickOutsideToClose` - `{boolean=}` Defaults to true
 *
 * See ui.module() docs, all config for a module works here as well
 *
 * @returns {function} A function used internally to generate the modal
 */
ui.modal = uiConfig(function (config, parent) {
  var modal
    , _$mdDialog
    , didDismissOnExit = false;

  _.defaults(config, {
    controllerAs: 'ctrl',
    parent: angular.element(document.body),
    clickOutsideToClose: true,
    locals: {},
    bindToController: true,
    resolve: {}
  });

  return ui.module(_.defaults(config,{
    onEnter: onEnter,
    onExit: onExit
  }))(parent);

  function onEnter($timeout, $state, $mdDialog, $injector) {
    didDismissOnExit = false;
    _$mdDialog = $mdDialog;

    $timeout(function () {
      config.resolve = {};

      for (var key in $state.$current.locals.globals) {
        var value = $state.$current.locals.globals[key];

        (function (value) {
          config.resolve[key] = function () { return value; };
        })(value);
      }

      if (config.preModalShow) {
        config.preModalShow(config, $injector);
      }

      modal = $mdDialog.show(config)
        .then(function() {
          if(config.onClose) {
            config.onClose();
          } else {
            window.history.back();
          }
          modal = null;
        }, function() {
          if(config.onDismiss) {
            config.onDismiss();
          } else if (!didDismissOnExit) {
            window.history.back();
          }
          modal = null;
        });
    });
  }

  function onExit() {
    didDismissOnExit = true;
    if (modal) {
      _$mdDialog.cancel(modal);
      modal = null;
    }
  }
});

/**
 * @ngdoc method
 * @name ui#modals
 *
 * @description
 * Generates an array of modals used by the parent ui.module
 *
 * @param {array} modals An array of ui.modal() results
 *
 * @returns {function} A function used internally to generate the Angular module
 */
ui.modals = function (modals) {
  return function (parent) {
    return _.map(modals, function (modal) {
      return modal(parent).name;
    });
  };
};

// ========================================
// scaffold
// ========================================

/**
 * @ngdoc service
 * @name ui.scaffold
 * @module common.ui
 *
 * @description
 * `ui.scaffold` is awesome!
 */
ui.scaffold = {};

/**
 * @ngdoc method
 * @name ui.scaffold#define
 *
 * @description
 * Generates a scaffolding definition allowing you to create a re-useable ui.module.
 *
 * @param {object} config A config object for the modal
 *
 *   - `name` - `{string}`: Camel case name of scaffolding. Will be used for ui.scaffold method name
 *   - `uiMethod` - `{string=}`: ui library method to run. Defaults to 'module'
 *   - `preConfig` - `{function}`: Method called before ui.module is created: function (config)
 *   - `postConfig` - `{function}`: Method called after ui.module is created: function (config, parent, module)
 *
 * See ui.module() docs, all config for a module works here as well
 *
 * @returns {function} A function used internally to generate the module
 */
ui.scaffold.define = function (scaffoldConfig) {
  if (ui.scaffold[scaffoldConfig.name]) throw new Error("Scaffold name '" + scaffoldConfig.name + "' already defined");

  _.defaults(scaffoldConfig, {
    uiMethod: 'module' // Use ui.module by default
  });

  ui.scaffold[scaffoldConfig.name] = function (instanceConfig) {
    _.defaults(instanceConfig, {
      resolve: {}
    });

    if (!instanceConfig[scaffoldConfig.name]) {
      instanceConfig[scaffoldConfig.name] = {};
    }

    var instanceScaffoldConfig = instanceConfig[scaffoldConfig.name];

    instanceConfig.resolve[scaffoldConfig.name + 'Config'] = function () {
      return instanceScaffoldConfig;
    };

    if (scaffoldConfig.preConfig) {
      scaffoldConfig.preConfig(instanceConfig);
    }

    return function (parent) {
      if (scaffoldConfig.preModule) {
        scaffoldConfig.preModule(instanceConfig, parent);
      }

      var module = ui[scaffoldConfig.uiMethod](instanceConfig)(parent);

      instanceScaffoldConfig.module = module;

      if (scaffoldConfig.postConfig) {
        scaffoldConfig.postConfig(instanceConfig, parent, module);
      }

      return module;
    };
  };

  return ui.module(scaffoldConfig);
};

/**
 * @ngdoc method
 * @name ui.scaffold#findParent
 *
 * @description
 * Util method used by scaffold to find a parent scaffolding object
 *
 * @param {object} config A config object for the modal
 *
 * @param {string} scaffoldName Camel case name of scaffolding
 * @param {object} parent Parent config
 *
 * @returns {function} Parent module with scaffoldName defined as a property or null if not found
 */
ui.scaffold.findParent = function (scaffoldName, parent) {
  while (parent) {
    if (parent[scaffoldName]) return parent;

    parent = parent.parent;
  }
  return null;
};

// ========================================
// private util
// ========================================

/**
 * @ngdoc method
 * @name uiSubModules
 *
 * @description
 * Group a set of sub modules in a module
 *
 * @param {string} name Name of module
 * @param {array} subModules Array of ui.module() results
 */
function uiSubModules(name) {
  return function (subModules) {
    return ui.module({
      name: name,
      subModules: subModules
    });
  };
}

/**
 * @ngdoc method
 * @name uiConfig
 *
 * @description
 * Wraps ui methods to parse config
 *
 * @param {function} callback Method function (config, parent)
 *
 * @returns {function} Method that accepts an object or a method (function (parent)) that returns an object
 */
function uiConfig(callback) {
  return function (config) {
    return function (parent) {
      // local config so config(parent) runs multiple times
      var c = _.isFunction(config) ? config(parent) : config;

      return callback(c, parent);
    };
  };
}
