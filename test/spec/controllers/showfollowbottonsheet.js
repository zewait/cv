'use strict';

describe('Controller: ShowfollowbottonsheetCtrl', function () {

  // load the controller's module
  beforeEach(module('cvApp'));

  var ShowfollowbottonsheetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShowfollowbottonsheetCtrl = $controller('ShowfollowbottonsheetCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
