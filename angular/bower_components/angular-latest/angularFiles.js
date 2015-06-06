'use strict';

var angularFiles = {
  'angularSrc': [
    'app/minErr.js',
    'app/Angular.js',
    'app/loader.js',
    'app/stringify.js',
    'app/AngularPublic.js',
    'app/jqLite.js',
    'app/apis.js',

    'app/auto/injector.js',

    'app/ng/anchorScroll.js',
    'app/ng/animate.js',
    'app/ng/asyncCallback.js',
    'app/ng/browser.js',
    'app/ng/cacheFactory.js',
    'app/ng/compile.js',
    'app/ng/controller.js',
    'app/ng/document.js',
    'app/ng/exceptionHandler.js',
    'app/ng/http.js',
    'app/ng/httpBackend.js',
    'app/ng/interpolate.js',
    'app/ng/interval.js',
    'app/ng/locale.js',
    'app/ng/location.js',
    'app/ng/log.js',
    'app/ng/parse.js',
    'app/ng/q.js',
    'app/ng/raf.js',
    'app/ng/rootScope.js',
    'app/ng/sanitizeUri.js',
    'app/ng/sce.js',
    'app/ng/sniffer.js',
    'app/ng/templateRequest.js',
    'app/ng/testability.js',
    'app/ng/timeout.js',
    'app/ng/urlUtils.js',
    'app/ng/window.js',
    'app/ng/cookieReader.js',

    'app/ng/filter.js',
    'app/ng/filter/filter.js',
    'app/ng/filter/filters.js',
    'app/ng/filter/limitTo.js',
    'app/ng/filter/orderBy.js',

    'app/ng/directive/directives.js',
    'app/ng/directive/a.js',
    'app/ng/directive/attrs.js',
    'app/ng/directive/form.js',
    'app/ng/directive/input.js',
    'app/ng/directive/ngBind.js',
    'app/ng/directive/ngChange.js',
    'app/ng/directive/ngClass.js',
    'app/ng/directive/ngCloak.js',
    'app/ng/directive/ngController.js',
    'app/ng/directive/ngCsp.js',
    'app/ng/directive/ngEventDirs.js',
    'app/ng/directive/ngIf.js',
    'app/ng/directive/ngInclude.js',
    'app/ng/directive/ngInit.js',
    'app/ng/directive/ngList.js',
    'app/ng/directive/ngModel.js',
    'app/ng/directive/ngNonBindable.js',
    'app/ng/directive/ngOptions.js',
    'app/ng/directive/ngPluralize.js',
    'app/ng/directive/ngRepeat.js',
    'app/ng/directive/ngShowHide.js',
    'app/ng/directive/ngStyle.js',
    'app/ng/directive/ngSwitch.js',
    'app/ng/directive/ngTransclude.js',
    'app/ng/directive/script.js',
    'app/ng/directive/select.js',
    'app/ng/directive/style.js',
    'app/ng/directive/validators.js'
  ],

  'angularLoader': [
    'stringify.js',
    'app/minErr.js',
    'app/loader.js'
  ],

  'angularModules': {
    'ngAnimate': [
      'app/ngAnimate/shared.js',
      'app/ngAnimate/rafScheduler.js',
      'app/ngAnimate/animateChildrenDirective.js',
      'app/ngAnimate/animateCss.js',
      'app/ngAnimate/animateCssDriver.js',
      'app/ngAnimate/animateJs.js',
      'app/ngAnimate/animateJsDriver.js',
      'app/ngAnimate/animateQueue.js',
      'app/ngAnimate/animateRunner.js',
      'app/ngAnimate/animation.js',
      'app/ngAnimate/module.js'
    ],
    'ngCookies': [
      'app/ngCookies/cookies.js',
      'app/ngCookies/cookieStore.js',
      'app/ngCookies/cookieWriter.js'
    ],
    'ngMessageFormat': [
      'app/ngMessageFormat/messageFormatCommon.js',
      'app/ngMessageFormat/messageFormatSelector.js',
      'app/ngMessageFormat/messageFormatInterpolationParts.js',
      'app/ngMessageFormat/messageFormatParser.js',
      'app/ngMessageFormat/messageFormatService.js'
    ],
    'ngMessages': [
      'app/ngMessages/messages.js'
    ],
    'ngResource': [
      'app/ngResource/resource.js'
    ],
    'ngRoute': [
      'app/ngRoute/route.js',
      'app/ngRoute/routeParams.js',
      'app/ngRoute/directive/ngView.js'
    ],
    'ngSanitize': [
      'app/ngSanitize/sanitize.js',
      'app/ngSanitize/filter/linky.js'
    ],
    'ngMock': [
      'app/ngMock/angular-mocks.js'
    ],
    'ngTouch': [
      'app/ngTouch/touch.js',
      'app/ngTouch/swipe.js',
      'app/ngTouch/directive/ngClick.js',
      'app/ngTouch/directive/ngSwipe.js'
    ],
    'ngAria': [
      'app/ngAria/aria.js'
    ]
  },

  'angularScenario': [
    'app/ngScenario/Scenario.js',
    'app/ngScenario/browserTrigger.js',
    'app/ngScenario/Application.js',
    'app/ngScenario/Describe.js',
    'app/ngScenario/Future.js',
    'app/ngScenario/ObjectModel.js',
    'app/ngScenario/Runner.js',
    'app/ngScenario/SpecRunner.js',
    'app/ngScenario/dsl.js',
    'app/ngScenario/matchers.js',
    'app/ngScenario/output/Html.js',
    'app/ngScenario/output/Json.js',
    'app/ngScenario/output/Xml.js',
    'app/ngScenario/output/Object.js'
  ],

  'angularTest': [
    'test/helpers/*.js',
    'test/ngScenario/*.js',
    'test/ngScenario/output/*.js',
    'test/*.js',
    'test/auto/*.js',
    'test/ng/**/*.js',
    'test/ngAnimate/*.js',
    'test/ngMessages/*.js',
    'test/ngCookies/*.js',
    'test/ngResource/*.js',
    'test/ngRoute/**/*.js',
    'test/ngSanitize/**/*.js',
    'test/ngMock/*.js',
    'test/ngTouch/**/*.js',
    'test/ngAria/*.js'
  ],

  'karma': [
    'bower_components/jquery/dist/jquery.js',
    'test/jquery_remove.js',
    '@angularSrc',
    'app/publishExternalApis.js',
    '@angularSrcModules',
    '@angularScenario',
    '@angularTest'
  ],

  'karmaExclude': [
    'test/jquery_alias.js',
    'app/angular-bootstrap.js',
    'app/ngScenario/angular-bootstrap.js'
  ],

  'karmaScenario': [
    'build/angular-scenario.js',
    'build/docs/docs-scenario.js'
  ],

  "karmaModules": [
    'build/angular.js',
    '@angularSrcModules',
    'app/ngScenario/browserTrigger.js',
    'test/helpers/*.js',
    'test/ngMessageFormat/*.js',
    'test/ngMock/*.js',
    'test/ngCookies/*.js',
    'test/ngRoute/**/*.js',
    'test/ngResource/*.js',
    'test/ngSanitize/**/*.js',
    'test/ngTouch/**/*.js',
    'test/ngAria/*.js'
  ],

  'karmaJquery': [
    'bower_components/jquery/dist/jquery.js',
    'test/jquery_alias.js',
    '@angularSrc',
    'app/publishExternalApis.js',
    '@angularSrcModules',
    '@angularScenario',
    '@angularTest'
  ],

  'karmaJqueryExclude': [
    'app/angular-bootstrap.js',
    'app/ngScenario/angular-bootstrap.js',
    'test/jquery_remove.js'
  ]
};

angularFiles['angularSrcModules'] = [].concat(
  angularFiles['angularModules']['ngAnimate'],
  angularFiles['angularModules']['ngMessageFormat'],
  angularFiles['angularModules']['ngMessages'],
  angularFiles['angularModules']['ngCookies'],
  angularFiles['angularModules']['ngResource'],
  angularFiles['angularModules']['ngRoute'],
  angularFiles['angularModules']['ngSanitize'],
  angularFiles['angularModules']['ngMock'],
  angularFiles['angularModules']['ngTouch'],
  angularFiles['angularModules']['ngAria']
);

if (exports) {
  exports.files = angularFiles;
  exports.mergeFilesFor = function() {
    var files = [];

    Array.prototype.slice.call(arguments, 0).forEach(function(filegroup) {
      angularFiles[filegroup].forEach(function(file) {
        // replace @ref
        var match = file.match(/^\@(.*)/);
        if (match) {
          files = files.concat(angularFiles[match[1]]);
        } else {
          files.push(file);
        }
      });
    });

    return files;
  };
}
