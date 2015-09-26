'use strict';

angular.module('voteapp2App')
  .factory('pollFactory', function($http, Auth, $q) {

    function getAllPolls() {
      return $http.get('/api/polls');
    }

    function getPollDetail(id) {
      return $q(function(resolve, reject) {
        $http.get('/api/polls/' + id).then(function success(result) {

          var poll = result.data;

          // also get the author's username (@FIXME: this causes an auth error
          //$http.get('/api/users/' + poll.author).then(function success (result) {
          //poll.authorName = result.data.name;

          if (Auth.isLoggedIn()) {
            // get whether or not the currently logged in user is the poll author
            if (poll.author === Auth.getCurrentUser()._id) {
              poll.userIsAuthor = true;
            } else {
              poll.userIsAuthor = false;
            }

            // get whether or not the currently logged in user has voted in this poll
            if (poll.alreadyVoted.indexOf(Auth.getCurrentUser()._id) > -1) {
              poll.userAlreadyVoted = true;
            } else {
              poll.userAlreadyVoted = false;
            }
          }

          //console.log(poll);
          resolve(poll);

          //}, function failure(result) { reject(result); });
        }, function failure(result) {
          reject(result);
        });
      });
    }

    function addVote(pollId, answer) {
      return $q(function(resolve, reject) {
        getPollDetail(pollId).then(function success(result) {
          var poll = result;
          if (poll.alreadyVoted.indexOf(Auth.getCurrentUser()._id) === -1) {
            poll.options[answer] = poll.options[answer] + 1;
            poll.alreadyVoted.push(Auth.getCurrentUser()._id);
            $http.put('/api/polls/' + pollId, poll).then(function success(res) {
              //console.log('response', JSON.stringify(res));
              //console.log('original poll', poll);
              poll.userAlreadyVoted = true;
              resolve(poll);
            }, function error(res) {
              reject(res);
            });
          }
        });
      });
    }

    // Public API here
    return {
      getAllPolls: getAllPolls,
      getPollDetail: getPollDetail,
      addVote: addVote
    };
  });
