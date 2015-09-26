'use strict';

describe('Controller: AllpollsCtrl', function () {

  // load the controller's module
  beforeEach(module('voteapp2App'));

  var AllpollsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AllpollsCtrl = $controller('AllpollsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
