'use strict';

describe('Controller: MyPollsCtrl', function () {

  // load the controller's module
  beforeEach(module('voteapp2App'));

  var MyPollsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyPollsCtrl = $controller('MyPollsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
