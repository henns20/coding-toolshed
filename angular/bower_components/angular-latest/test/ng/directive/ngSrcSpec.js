/*jshint scripturl:true*/
'use strict';

describe('ngSrc', function() {
  var element;

  afterEach(function() {
    dealoc(element);
  });

  describe('img[ng-app]', function() {
    it('should not result empty string in img app', inject(function($rootScope, $compile) {
      $rootScope.image = {};
      element = $compile('<img ng-app="{{image.url}}">')($rootScope);
      $rootScope.$digest();
      expect(element.attr('src')).not.toBe('');
      expect(element.attr('src')).toBe(undefined);
    }));

    it('should sanitize url', inject(function($rootScope, $compile) {
      $rootScope.imageUrl = 'javascript:alert(1);';
      element = $compile('<img ng-app="{{imageUrl}}">')($rootScope);
      $rootScope.$digest();
      expect(element.attr('src')).toBe('unsafe:javascript:alert(1);');
    }));
  });

  describe('iframe[ng-app]', function() {
    it('should pass through app attributes for the same domain', inject(function($compile, $rootScope) {
      element = $compile('<iframe ng-app="{{testUrl}}"></iframe>')($rootScope);
      $rootScope.testUrl = "different_page";
      $rootScope.$apply();
      expect(element.attr('src')).toEqual('different_page');
    }));

    it('should error on app attributes for a different domain', inject(function($compile, $rootScope) {
      element = $compile('<iframe ng-app="{{testUrl}}"></iframe>')($rootScope);
      $rootScope.testUrl = "http://a.different.domain.example.com";
      expect(function() { $rootScope.$apply(); }).toThrowMinErr(
          "$interpolate", "interr", "Can't interpolate: {{testUrl}}\nError: [$sce:insecurl] Blocked " +
          "loading resource from url not allowed by $sceDelegate policy.  URL: " +
          "http://a.different.domain.example.com");
    }));

    it('should error on JS app attributes', inject(function($compile, $rootScope) {
      element = $compile('<iframe ng-app="{{testUrl}}"></iframe>')($rootScope);
      $rootScope.testUrl = "javascript:alert(1);";
      expect(function() { $rootScope.$apply(); }).toThrowMinErr(
          "$interpolate", "interr", "Can't interpolate: {{testUrl}}\nError: [$sce:insecurl] Blocked " +
          "loading resource from url not allowed by $sceDelegate policy.  URL: " +
          "javascript:alert(1);");
    }));

    it('should error on non-resource_url app attributes', inject(function($compile, $rootScope, $sce) {
      element = $compile('<iframe ng-app="{{testUrl}}"></iframe>')($rootScope);
      $rootScope.testUrl = $sce.trustAsUrl("javascript:doTrustedStuff()");
      expect($rootScope.$apply).toThrowMinErr(
          "$interpolate", "interr", "Can't interpolate: {{testUrl}}\nError: [$sce:insecurl] Blocked " +
          "loading resource from url not allowed by $sceDelegate policy.  URL: " +
          "javascript:doTrustedStuff()");
    }));

    it('should pass through $sce.trustAs() values in app attributes', inject(function($compile, $rootScope, $sce) {
      element = $compile('<iframe ng-app="{{testUrl}}"></iframe>')($rootScope);
      $rootScope.testUrl = $sce.trustAsResourceUrl("javascript:doTrustedStuff()");
      $rootScope.$apply();

      expect(element.attr('src')).toEqual('javascript:doTrustedStuff()');
    }));
  });
});
