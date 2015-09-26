'use strict';

describe('Controller: PolldetailCtrl', function () {

  // load the controller's module
  beforeEach(module('voteapp2App'));

  var PolldetailCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PolldetailCtrl = $controller('PolldetailCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
