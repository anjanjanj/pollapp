'use strict';

angular.module('voteapp2App')
  .controller('AllpollsCtrl', function ($scope, $http, pollFactory) {
    $scope.polls = [];

    pollFactory.getAllPolls().then(function(result) {
      $scope.polls = result.data;
    });
  });
