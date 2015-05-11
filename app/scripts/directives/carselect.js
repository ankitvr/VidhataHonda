'use strict';

/**
 * @ngdoc directive
 * @name vidhataHondaApp.directive:CarSelect
 * @description
 * # CarSelect
 */
angular.module('vidhataHondaApp')
  .controller('CarListCtrl', ['$scope', function($scope) {
      $scope.carNames = carNames;
    }])
  .directive('carSelect', function () {
    return {
      templateUrl: 'views/directives/carSelectForm.html',
      restrict: 'E'
    };
  });
