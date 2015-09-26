'use strict';

angular.module('voteapp2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('polldetail', {
        url: '/poll/:id',
        templateUrl: 'app/polls/polldetail/polldetail.html',
        controller: 'PolldetailCtrl'
      });
  });