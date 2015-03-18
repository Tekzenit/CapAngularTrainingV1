(function() {

    var injectParams = [];
    var PointsController = function() {
        var vm = this;
        vm.loading = true;

        vm.toggleLoading = function() {
            this.chartConfig.loading = !this.chartConfig.loading
        }

        //initiated on load
        function init() {
            vm.chartConfig = {
                options: {
                    chart: {
                        type: 'pie'
                    }
                },
                title: {
                    text: '$868',
                    align: 'center',
                    verticalAlign: 'middle',
                    y: 0,
                    style: { "color": "#003a6f" }
                },
                subtitle: {
                    text: '/$1000',
                    align: 'center',
                    verticalAlign: 'middle',
                    y: 18,
                    style: { "color": "#2e913b" }
                },
                series: [{
                    innerSize: '50%',
                    data: [
                        ['Points earned', 868],
                        ['Points needed', 100],
                    ],
                    dataLabels: {
                        enabled: false
                    },
                    marker: {
                        enabled: false
                    }
                }],

                loading: false
            };
        }

        //self invoking
        init();
    };


    PointsController.$inject = injectParams;

    angular.module('expenseTracker')
        .controller('pointsController', PointsController);

})();
