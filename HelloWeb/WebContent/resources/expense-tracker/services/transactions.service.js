
(function () {

  var injectParams = ['$resource'];
  var TransactionsService = function ($resource) {
   return $resource('http://localhost:9092/transactions/:ccId/', {ccId: '@_cardId'},{});
  };

  TransactionsService.$inject = injectParams;

  angular.module('expenseTracker')
    .factory('transactionsService', TransactionsService);

})();
