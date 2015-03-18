
(function () {

  
  var injectParams = ['$resource'];
  //return $resource('http://localhost:9092/transactions/:ccId/', {ccId: '@_cardId'},{});
  
  var TransactionsService = function ($resource) {
   
	  var tranService = {
		  		  
		  GetTransactionByCreditCard : function(cardId) {
			  //return $resource('http://localhost:9092/transactions/' + ccId);
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
