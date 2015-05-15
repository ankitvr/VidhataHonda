'use strict';

/**
 * @ngdoc function
 * @name vidhataHondaApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the vidhataHondaApp
 */
angular.module('vidhataHondaApp')
  .controller('HomeCtrl', function ($scope,SharedData) {
    $scope.myInterval = 55000;
    $scope.cars = SharedData.getCarDetails().cars;
  });
