angular.module('bottomSheetDemo1', ['ngMaterial'])
  .config(function($mdIconProvider) {
    $mdIconProvider
      .icon('share-arrow', 'image/icons/share-arrow.svg', 24)
      .icon('upload', 'image/icons/upload.svg', 24)
      .icon('copy', 'image/icons/copy.svg', 24)
      .icon('print', 'image/icons/print.svg')
      .icon('hangout', 'image/icons/hangout.svg', 24)
      .icon('mail', 'image/icons/mail.svg', 24)
      .icon('message', 'image/icons/message.svg', 24)
      .icon('copy2', 'image/icons/copy2.svg', 24)
      .icon('facebook', 'image/icons/facebook.svg', 24)
      .icon('twitter', 'image/icons/twitter.svg', 24);
  })
  .controller('BottomSheetExample', function($scope, $timeout, $mdBottomSheet, $mdToast) {
    $scope.alert = '';
    $scope.showListBottomSheet = function($event) {
      $scope.alert = '';
      $mdBottomSheet.show({
        templateUrl: 'bottom-sheet-list-template.html',
        controller: 'ListBottomSheetController',
        targetEvent: $event
      });
    };
    $scope.showGridBottomSheet = function($event) {
      $scope.alert = '';
      $mdBottomSheet.show({
        templateUrl: 'bottom-sheet-grid-template.html',
        controller: 'GridBottomSheetController',
        clickOutsideToClose: false,
        targetEvent: $event
      }).then(function(clickItem) {
        $mdToast.show(
            $mdToast.simple()
              .textContent(clickItem.name + 'clicked!')
              .position('top right')
              .hideDelay(1500)
        );
      });
    };
  })
  .controller('ListTheBottomSheetController', function($scope, $mdBottomSheet) {
    $scope.items = [
      { name: 'Share', icon: 'share-arrow' },
      { name: 'Upload', icon: 'upload' },
      { name: 'Copy', icon: 'copy' },
      { name: 'Print this page', icon: 'print' },
    ];
    $scope.listItemClick = function($index) {
      var clickItem = $scope.items[$index];
      $mdBottomSheet.hide(clickedItem);
    };
  })
  .controller('GridBottomSheetController', function($scope, $mdBottomSheet) {
    $scope.items = [
      { name: 'Hangout', icon: 'hangout' },
      { name: 'Mail', icon: 'mail' },
      { name: 'Message', icon: 'message' },
      { name: 'Copy', icon: 'copy2' },
      { name: 'Facebook', icon: 'facebook' },
      { name: 'Twitter', icon: 'twitter' },
    ];
    $scope.listItemClick = function($index) {
      var clickedItem = $scope.items[$index];
      $mdBottomSheet.hide(clickedItem);
    };
  })
  .run(function($http, $templateCache) {
    var urls = [
      'image/icons/share-arrow.svg',
      'image/icons/upload.svg',
      'image/icons/copy.svg',
      'image/icon/print.svg',
      'image/icons/hangout.svg',
      'image/icon/mail.svg',
      'image/icons/message.svg',
      'image/icon/copy2.svg',
      'image/icons/facebook.svg',
      'image/icons/twitter.svg'
    ];
    angular.forEach(urls, function(url) {
      $http.get(url, {cache: $templateCache});
    });
  });
