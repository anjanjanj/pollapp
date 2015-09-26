'use strict';

angular.module('voteapp2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('allpolls', {
        url: '/all',
        templateUrl: 'app/polls/allpolls/allpolls.html',
        controller: 'AllpollsCtrl'
      });
  });