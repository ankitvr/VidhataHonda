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
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
    var car = SharedData.getCarDetails().cars[slides.length % 4];
    slides.push({
        image: car.image,
        text: car.carName,
        landingPage:car.landingPage
      });
    };

    for (var i=0; i<SharedData.getCarDetails().cars.length; i++) {
      $scope.addSlide();
    }
  });
