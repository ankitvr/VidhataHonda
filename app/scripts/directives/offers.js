'use strict';

/**
 * @ngdoc directive
 * @name vidhataHondaApp.directive:offers
 * @description
 * # offers
 */
angular.module('vidhataHondaApp')
  .directive('offers', function (SharedData) {
    return {
      controller: ['$scope', function ($scope) {
          $scope.offers = SharedData.getCarDetails().cars;
          $scope.offers.forEach(function (car, i) {
            offers.pages = SharedData.getCarDetails().defaultPages;
          });
      }],
      templateUrl: 'views/directives/offers.html',
      restrict: 'E'
    };
  });
