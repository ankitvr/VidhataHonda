'use strict';

describe('Directive: dealershipMap', function () {

  // load the directive's module
  beforeEach(module('vidhataHondaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dealership-map></dealership-map>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dealershipMap directive');
  }));
});
