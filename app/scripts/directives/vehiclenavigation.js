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
          $scope.cars.forEach(function(element, index, array){
            element.pages = SharedData.getCarDetails().defaultPages;
            });
      }],
      templateUrl: 'views/directives/vehicleNavigation.html',
      restrict: 'E'
    };
  });
