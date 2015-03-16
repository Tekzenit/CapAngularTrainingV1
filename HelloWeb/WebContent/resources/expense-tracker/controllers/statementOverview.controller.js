(function() {

    var injectParams = ['$scope', 'sharedDataService','transactionsService','ngTableParams', '$sce'];
    var StatementOverViewController = function($scope, sharedDataService, transactionsService, ngTableParams, $sce) {
      var vm = this;
      //vm.transactions = transactionsService.query();
      //vm.transactionList = transactions;

      var creditcard = function () {
        return sharedDataService.getCreditcard();
      };
      var cardId;


      $scope.$watch(creditcard, function (value) {
        cardId = value;
      });

      vm.getTransactionsByccId = function(cardId) {
       vm.currentcard = transactionsService.get({ccId: cardId});
        console.log(['current card transactions',vm.currentcard]);
      };


      var data = transactionsService.query();



      $scope.tableParams = new ngTableParams({
        page: 1,
        count: 10
      }, {
        total: data.length, // length of data
        getData: function ($defer, params) {
          $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
      });

    };
  StatementOverViewController.$inject = injectParams;
    angular.module('expenseTracker')
        .controller('statementOverViewController', StatementOverViewController);

})();
