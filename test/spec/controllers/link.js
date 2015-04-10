'use strict';

describe('Controller: LinkCtrl', function () {

  // load the controller's module
  beforeEach(module('cvApp'));

  var LinkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LinkCtrl = $controller('LinkCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
