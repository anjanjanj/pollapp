'use strict';
//@TODO: add auth requirements to client routes as necessary - redirect to login page somehow
angular.module('voteapp2App')
  .controller('NewPollCtrl', function ($scope, $location, pollFactory) {

    //@TODO: add checking for empty choices (see Angular form verification) + min 2 choices
    //$scope.myForm.choices = {};
    $scope.myForm = {};
    //$scope.myForm.title = '';

    $scope.myForm.placeHolders = ['Enya', 'John Lennon'];
    $scope.counter = 0;
    $scope.myForm.choices=['', '']

    $scope.addChoice = function(){
      $scope.counter++;
      $scope.myForm.placeHolders.push('New Choice ' + $scope.counter);
      $scope.myForm.choices.push('');
    };
    $scope.removeChoice = function(index){
      $scope.myForm.placeHolders[index]=null;
      $scope.myForm.placeHolders=$scope.myForm.placeHolders.filter(function(item){return item !==null;});
    };

    $scope.myForm.addPoll = function() {
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
