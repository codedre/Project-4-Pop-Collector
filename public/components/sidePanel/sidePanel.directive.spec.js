'use strict';

describe('Directive: sidePanel', function () {

  // load the directive's module and view
  beforeEach(module('project4PopCollectorApp'));
  beforeEach(module('components/sidePanel/sidePanel.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<side-panel></side-panel>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the sidePanel directive');
  }));
});
