'use strict';

angular.module('voteapp2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('newPoll', {
        url: '/new',
        templateUrl: 'app/polls/newPoll/newPoll.html',
        controller: 'NewPollCtrl'
      });
  });