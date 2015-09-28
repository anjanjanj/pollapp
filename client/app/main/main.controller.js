'use strict';

angular.module('voteapp2App')
  .controller('MainCtrl', function ($scope, Auth) {

    $scope.isLoggedIn = Auth.isLoggedIn;

  });
