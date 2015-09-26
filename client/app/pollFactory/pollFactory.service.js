'use strict';

angular.module('voteapp2App')
  .factory('pollFactory', function ($http) {

    function getAllPolls() {
      return $http.get('/api/polls');
    }

    // Public API here
    return {
      getAllPolls: getAllPolls
    };
  });
