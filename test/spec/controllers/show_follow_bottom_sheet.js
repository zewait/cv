'use strict';

describe('Controller: ShowFollowBottomSheetCtrl', function () {

  // load the controller's module
  beforeEach(module('cvApp'));

  var ShowFollowBottomSheetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShowFollowBottomSheetCtrl = $controller('ShowFollowBottomSheetCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
