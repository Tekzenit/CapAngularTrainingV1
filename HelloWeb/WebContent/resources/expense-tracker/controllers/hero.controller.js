(function () {

  var injectParams = ['$scope','transactionsService','customersService','sharedDataService'];
  var HeroController = function ($scope, transactionsService, customersService, sharedDataService) {
    var vm = this;
    vm.creditcard = null;

    $scope.$watch(function () {
      return sharedDataService.getCreditcard();
    }, function (newValue, oldValue) {
      vm.creditcard = newValue;
    });
    console.log(vm.creditcard);
    vm.loading = true;

    vm.addPoints = function () {
      var seriesArray = vm.chartConfig.series
      var rndIdx = Math.floor(Math.random() * seriesArray.length);
      seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
    };

    vm.addSeries = function () {
      var rnd = []
      for (var i = 0; i < 10; i++) {
        rnd.push(Math.floor(Math.random() * 20) + 1)
      }
      vm.chartConfig.series.push({
        data: rnd
      })
    }

    vm.removeRandomSeries = function () {
      var seriesArray = vm.chartConfig.series
      var rndIdx = Math.floor(Math.random() * seriesArray.length);
      seriesArray.splice(rndIdx, 1)
    }

    vm.toggleLoading = function () {
      this.chartConfig.loading = !this.chartConfig.loading
    }


    //initiated on load
    function getAllTransactions() {
      var cardId = 1;
      transactionsService.getTransactions(cardId)
        .success(function (trans) {
          console.log(trans);
        });
    }



    function init() {
      vm.chartConfig = {
        options: {
          chart: {
            type: 'line',
            zoomType: 'x'
          }
        },
        series: [{
          data: [10, 15, 12, 8, 7, 1, 1, 19, 15, 10]
        }],
        title: {
          text: ' '
        },
        xAxis: {currentMin: 1, currentMax: 12, minRange: 1},
        loading: false
      };
    }

    //self invoking
    getAllTransactions();
    init();

  };


  HeroController.$inject = injectParams;

  angular.module('expenseTracker')
    .controller('heroController', HeroController);

})();
