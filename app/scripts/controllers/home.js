'use strict';

/**
 * @ngdoc function
 * @name vidhataHondaApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the vidhataHondaApp
 */
angular.module('vidhataHondaApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    var homePageSliderFolder = '/images/homepage/slider/';
    var carNames = ['Honda-Amaze','Honda-Brio','Honda-City','Honda-Crv','Honda-Jazz','Honda-Mobilio'];
    $scope.addSlide = function() {
    var title = carNames[slides.length % 4];
    slides.push({
        image: homePageSliderFolder + title + '.jpg',
        text: title
      });
    };

    for (var i=0; i<carNames.length; i++) {
      $scope.addSlide();
    }
  });
