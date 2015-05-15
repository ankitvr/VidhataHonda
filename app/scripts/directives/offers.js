'use strict';

/**
 * @ngdoc directive
 * @name vidhataHondaApp.directive:offers
 * @description
 * # offers
 */
angular.module('vidhataHondaApp')
  .directive('offers', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the offers directive');
      }
    };
  });
