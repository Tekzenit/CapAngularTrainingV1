
(function () {

  
  var injectParams = ['$resource'];
  
  var TransactionsService = function ($resource) {
   
	  var tranService = {
		  		  
		  GetTransactionByCreditCard : function(cardId) {
			  transactionResource =
				  $resource('http://localhost:9092/transactions/:ccId/', {ccId: '@_cardId'});
			  
			  return transactionResource.query({ccId:cardId}).$promise;
		  }
	  };
	  
	  return tranService;
  }

  TransactionsService.$inject = injectParams;

  angular.module('expenseTracker')
    .factory('transactionsService', TransactionsService);
	
})();
