'use strict';
//@TODO: add auth requirements to client routes as necessary
angular.module('voteapp2App')
  .controller('NewPollCtrl', function ($scope, $location, pollFactory) {

    //@TODO: add checking for empty choices (see Angular form verification)
    //$scope.myForm.choices = {};
    $scope.myForm = {};
    //$scope.myForm.title = '';

    $scope.myForm.addPoll = function() {
      console.log('Howdy!');
      console.log($scope.myForm.choices);
      pollFactory.newPoll($scope.myForm.title, $scope.myForm.choices).then(
        function success(response) {
          $location.path('/poll/'+response.data._id);
        }, function failure(response) {
          console.error(response);
        });

      $scope.myForm.title = '';
      $scope.myForm.choices = '';
    };

  });
