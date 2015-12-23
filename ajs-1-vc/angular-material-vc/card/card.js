(function() {
  'use strict';

  angular
    .module('cardDemo1', ['ngMaterial'])
    .controller('appController', appController);

  function appController() {
    var vm = this;

    vm.imagePath = 'image/washedout.png';
  }
})();
