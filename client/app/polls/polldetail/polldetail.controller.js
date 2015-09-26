'use strict';

angular.module('voteapp2App')
  .controller('PolldetailCtrl', function ($scope, pollFactory, $stateParams, Auth) {

    $scope.isLoggedIn = Auth.isLoggedIn;
    if ($scope.isLoggedIn()) {
      $scope.getCurrentUser = Auth.getCurrentUser;
    }

    // load the poll data into the page
    pollFactory.getPollDetail($stateParams.id).then(function success(result) {
      $scope.poll = result;
    }, function failure(result) { console.error(result); });

    $scope.addVote = function(answer) {
      pollFactory.addVote($scope.poll._id, answer).then(function success (result) {
          $scope.poll.userAlreadyVoted = true;
          // set res as new $scope data on this page
          // update chart
          $scope.poll = result;
          //console.log('result in controller', JSON.stringify(result));
        }, function error (res) {
          //$scope.poll.options[answer] = $scope.poll.options[answer] - 1;
          //$scope.poll.alreadyVoted.pop();
          console.error(res);
      });
    };

  });
