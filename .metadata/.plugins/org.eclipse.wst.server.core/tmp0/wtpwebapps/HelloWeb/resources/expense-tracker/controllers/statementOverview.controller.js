(function() {

    var injectParams = ['transactionsService'];
    var StatementOverViewController = ['$scope', function($scope) {
        var vm = this;
        vm.transactions = null;
        vm.filter = '';

        function init() {

          transactionsService.getTransactions()
                .success(function(trans) {
                    vm.transactions = trans;
                });
        }

        init();
    }];
  StatementOverViewController.$inject = injectParams;
    angular.module('expenseTracker')
        .controller('statementOverViewController', StatementOverViewController);

})();
