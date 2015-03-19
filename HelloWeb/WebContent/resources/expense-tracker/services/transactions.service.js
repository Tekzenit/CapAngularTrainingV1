
(function () {

  
  var injectParams = ['$resource'];
  
  var TransactionsService = function ($resource) {
   
	  var tranService = {
		  		  
		  getTransactionByCreditCard : function(cardId) {
			  transactionResource = $resource('transactions/:ccId/', {ccId: '@_cardId'});
			  
			  return transactionResource.query({ccId:cardId}).$promise;
		  }
	  };
	  
	  return tranService;
  }

  TransactionsService.$inject = injectParams;

  angular.module('expenseTracker')
    .factory('transactionsService', TransactionsService);
	
})();
