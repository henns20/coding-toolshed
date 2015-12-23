'use strict';

angular
  .module('datePickerBasicUsage', ['ngMaterial', 'ngMessages'])
  .controller('AppController', AppController);

function AppController() {
  var vm = this;

  vm.myDate = new Date();
  vm.minDate = new Date(
    vm.myDate.getFullYear(),
    vm.myDate.getMonth() - 2,
    vm.myDate.getDate());
  vm.maxDate = new Date(
    vm.myDate.getFullYear(),
    vm.myDate.getMonth() + 2,
    vm.myDate.getDate());
    vm.onlyWeekendsPredicate = function(date) {
      var day = date.getDay();
      return day === 0 || day === 6;
    }
}
