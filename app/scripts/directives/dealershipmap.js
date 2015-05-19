'use strict';

/**
 * @ngdoc directive
 * @name vidhataHondaApp.directive:dealershipMap
 * @description
 * # dealershipMap
 */
angular.module('vidhataHondaApp')
  .directive('dealershipMap', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the dealershipMap directive');
      }
    };
  });
