'use strict';

angular.module('voteapp2App')
  .controller('PolldetailCtrl', function($scope, pollFactory, $stateParams, Auth) {

    $scope.isLoggedIn = Auth.isLoggedIn;
    if ($scope.isLoggedIn()) {
      $scope.getCurrentUser = Auth.getCurrentUser;
    }

    // load the poll data into the page
    pollFactory.getPollDetail($stateParams.id).then(function success(result) {
      $scope.poll = result;
      populateGraph($scope.poll.options);
    }, function failure(result) {
      console.error(result);
    });

    $scope.addVote = function(answer) {
      pollFactory.addVote($scope.poll._id, answer).then(function success(result) {
        $scope.poll.userAlreadyVoted = true;
        // update chart
        $scope.poll = result;
        populateGraph($scope.poll.options);
        //console.log('result in controller', JSON.stringify(result));
      }, function error(res) {
        //$scope.poll.options[answer] = $scope.poll.options[answer] - 1;
        //$scope.poll.alreadyVoted.pop();
        console.error(res);
      });
    };

    function populateGraph(pollOptions) {
      // ["option1": 5, "option3": 3]
      $scope.chartConfig.series[0].data = [];
      //console.log(pollOptions);
      _.forIn(pollOptions, function(votes, option) {
        //console.log(option, votes);
        $scope.chartConfig.series[0].data.push({
          'name': option,
          'y': votes
        });
      });
      //console.log($scope.chartConfig);
    }

    //@TODO: refactor highcharts into custom directive
    $scope.chartConfig = {

      options: {
        //This is the Main Highcharts chart config. Any Highchart options are valid here.
        //will be overriden by values specified below.
        chart: {
          type: 'pie'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.y} ({point.percentage:.1f}%)</b>',
          style: {
            padding: 10
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        }
      },
      //The below properties are watched separately for changes.

      //Series object (optional) - a list of series using normal highcharts series options.
      series: [{
        name: 'Votes',
        colorByPoint: true,
        data: []
      }],
      title: {
        text: ''
      },
      //Boolean to control showng loading status on chart (optional)
      //Could be a string if you want to show specific loading text.
      loading: false,
      //Whether to use HighStocks instead of HighCharts (optional). Defaults to false.
      useHighStocks: false,
      //size (optional) if left out the chart will default to size of the div or something sensible.
      size: {
        width: 500,
        height: 300
      }
    };

  });
