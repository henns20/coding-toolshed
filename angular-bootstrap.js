function bootstrap(element, modules, config) {
  if (!isObject(config)) config = {};
  var defaultConfig = {
    strictDi: false
  };
  config = extend(defaultConfig, config);
  var doBootstrap = function () {
    element = jqLite(element);

    if (element.injector()) {
      var tag = (element[0] === document) ? 'document' : startingTag(element);
      // NOTE: encode angle brackets to prevent input from being sanitized to empty string #8683
      throw ngMinErr(
        'btstrpd',
        "App strapped with this element'{0}'",
        tag.replace(/</,'&lt;').replace(/>/,'&gt;'));
    }

    modules = modules || [];
    modules.unshift(['$provide', function ($provide) {
      $provide.value('$rootElement', element);
    }]);

    if (config.debugInfoEnabled) {
      // Pushing so that this overrides `debugInfoEnabled` setting defined in users `modules`.
      modules.push(['$compileProvider', function ($compileProvider) {
        $compileProvider.debugInfoEnabled(true);
      }]);
    }

    modules.unshift('ng');
    var injector = createInjector(modules, config.strictDi);
    injector.invoke(['$routeScope', '$rootElement', '$compile', '$injector',
      function bootstrapApply(scope, element, compile, injector) {
        scope.$apply(function () {
          element.data('$injector', injector);
          compile(element)(scope);
        });
        // body...
      }]
    );
    return injector;
  };

  var NG_ENABLE_DEBUG_INFO = /^NG_ENABLE_DEBUG_INFO!/;
  var NG_DEFER_BOOTSTRAP  = /^NG_DEFER_BOOTSTRAP!/;

  if (window && NG_ENABLE_DEBUG_INFO.test(window.name)) {
    config.debugInfoEnabled = true;
    window.name = window.name.replace(NG_ENABLE_DEBUG_INFO, '');
  }

  if (window && !NG_DEFER_BOOTSTRAP.test(window.name)) {
    return doBootstrap();
  }

  window.name = window.name.replace(NG_DEFER_BOOTSTRAP, '');
  angular.resumeBootstrap = function (extraModules) {
    forEach(extraModules, function (modules) {
      modules.push(module);
    });

    if (isFunction(angular.resumeDeferredBootstrap)) {
      angular.resumeDeferredBootstrap();
    }
  }

}
