'use strict';

angular.module('voteapp2App')
  .controller('MyPollsCtrl', function ($scope, pollFactory, Auth) {
    $scope.polls = [];

    pollFactory.getAllPolls().then(function(result) {
      $scope.polls = _.filter(result.data, function(poll) {
        return (poll.author === Auth.getCurrentUser()._id);
      });
      if (_.isEmpty($scope.polls)) {
        $scope.polls = false;
      }
    });
  });
