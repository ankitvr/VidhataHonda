'use strict';

/**
 * @ngdoc directive
 * @name vidhataHondaApp.directive:vehicleNavigation
 * @description
 * # vehicleNavigation
 */
angular.module('vidhataHondaApp')
  .directive('vehicleNavigation', function (SharedData) {
  return {
      controller: ['$scope', function ($scope) {
          $scope.cars = SharedData.getCarDetails().cars;
          cars.foreach().pages = SharedData.getCarDetails().defaultPages;
      }],
      templateUrl: 'views/directives/vehicleNavigation.html',
      restrict: 'E'
    };
  });
