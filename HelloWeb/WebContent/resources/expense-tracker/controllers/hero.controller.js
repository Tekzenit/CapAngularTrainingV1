(function() {

    var injectParams = ['$scope', 'transactionsService', 'customersService', 'sharedDataService'];
    var HeroController = function($scope, transactionsService, customersService, sharedDataService) {
        var vm = this;
        var transactions = transactionsService.query();
        var creditcard = function() {
            return sharedDataService.getCreditcard();
        };

        vm.transactionList = transactions;
        vm.creditcard = creditcard();


        $scope.$watch(creditcard, function(newValue, oldValue) {
            vm.creditcard = newValue;
            console.log(vm.creditcard);
        });


        //$scope.$watch(function() {
        //    return sharedDataService.getCreditcard();
        //}, function(newValue, oldValue) {
        //    vm.creditcard = newValue;
        //});

        vm.loading = true;

        vm.addPoints = function() {
            var seriesArray = vm.chartConfig.series
            var rndIdx = Math.floor(Math.random() * seriesArray.length);
            seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
        };

        vm.addSeries = function() {
            var rnd = []
            for (var i = 0; i < 10; i++) {
                rnd.push(Math.floor(Math.random() * 20) + 1)
            }
            vm.chartConfig.series.push({
                data: rnd
            })
        };

        vm.removeRandomSeries = function() {
            var seriesArray = vm.chartConfig.series
            var rndIdx = Math.floor(Math.random() * seriesArray.length);
            seriesArray.splice(rndIdx, 1)
        };

        vm.toggleLoading = function() {
            this.chartConfig.loading = !this.chartConfig.loading
        };


        //initiated on load
        //function getAllTransactions() {
        //    var cardId = 1;
        //    transactionsService.getTransactions(cardId)
        //        .success(function(trans) {
        //            console.log(trans);
        //        });
        //}


        function init() {
            vm.chartConfig = {
                options: {
                    chart: {
                        type: 'areaspline',
                        zoomType: 'x',
                        backgroundColor: null
                    }
                },
                legend: {
                    lineHeight: 50,
                    title: {
                        text: '',
                        style: {
                            color: '#fff',
                            font: '14px Trebuchet MS, Verdana, sans-serif'
                        },
                        verticalAlign: 'middle',
                        y: 0
                    }
                },
                series: [{
                    data: [0, 1, 2, 3, 4, 6, 2, 4, 5, 4, 8, 6, 5, 6, 7, 9, 10, 11, 13, 14, 12, 11, 10, 8, 13, 15, 18, 20, 20, 21, 22, 24, 25],
                    color: '#7cb5ec',
                    name: 'previous'
                }, {
                    data: [0, 1, 2, 2, 3, 5, 6, 6, 9, 11, 12, 14],
                    color: '#00ff00',
                    name: 'current'
                }],
                title: {
                    text: '',
                    style: {
                        color: '#fff',
                        font: '14px Trebuchet MS, Verdana, sans-serif'
                    }
                },
                xAxis: {
                    currentMin: 0,
                    currentMax: 31,
                    minRange: 1,
                    gridLineColor: 'rgb(0,0,0,0)',
                    tickWidth: 0,
                    title: {
                        text: '',
                        style: {
                            color: '#fff',
                            font: '14px Trebuchet MS, Verdana, sans-serif'
                        },
                        verticalAlign: 'middle',
                        y: 0
                    },
                    labels: {
                        style: {
                            color: '#fff',
                            font: '14px Trebuchet MS, Verdana, sans-serif'
                        },
                        verticalAlign: 'middle',
                        y: 30
                    }
                },
                yAxis: {
                    currentMin: 0,
                    currentMax: 25,
                    gridLineColor: 'rgb(0,0,0,0)',
                    lineColor: 'rgb(0,0,0,0.25)',
                    tickColor: 'rgb(0,0,0,0.25)',
                    title: {
                        text: '',
                        style: {
                            color: '#fff',
                            font: '14px Trebuchet MS, Verdana, sans-serif'
                        }
                    },
                    labels: {
                        style: {
                            color: '#fff',
                            font: '14px Trebuchet MS, Verdana, sans-serif'
                        }
                    }
                },
                loading: false
            };
        }

        //self invoking
        //getAllTransactions();
        init();

    };


    HeroController.$inject = injectParams;

    angular.module('expenseTracker')
        .controller('heroController', HeroController);

})();
