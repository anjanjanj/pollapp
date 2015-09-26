'use strict';

angular.module('voteapp2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myPolls', {
        url: '/my',
        templateUrl: 'app/polls/myPolls/myPolls.html',
        controller: 'MyPollsCtrl',
        authenticate: true // restrict to authenticated users
      });
  });
