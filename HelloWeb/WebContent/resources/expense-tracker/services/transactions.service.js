(function() {

  var injectParams = ['$http','$q','$timeout'];
  var TransactionsService = function($http, $q, $timeout) {
    var service = this;

    service.getTransactions = function(cardId) {
      return $http.get('http://localhost:9091/transactions?ccId=' + cardId);
      //var deferred = $q.defer();
      //if(cardId) {
      //    deferred.resolve(function () {
      //      return $http.get('http://localhost:9091/transactions?'+cardId);
      //    })
      //  }else {
      //    deferred.reject('sending transactions is not allowed');
      //  }
      //return deferred.promise;
    };
    //service.getTransactionById = function(transactionId) {
    //  return $http.get('http://localhost:9091/transactions/' + transactionId)
    //    .then(function(response){
    //      return response;
    //    });
    //};
    //service.updateTransactionById = function(transactionId) {
    //  return $http.post('http://localhost:9091/transactions/' + transactionId)
    //    .then(function(response){
    //      return response;
    //    });
    //};
  };


  TransactionsService.$inject = injectParams;

  angular.module('expenseTracker')
    .service('transactionsService', TransactionsService);

})();
