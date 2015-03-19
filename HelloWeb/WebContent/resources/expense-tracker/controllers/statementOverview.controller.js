(function() {

    var injectParams = ['$scope', 'sharedDataService', 'transactionsService', 'ngTableParams'];
    var statementOverViewController = function($scope, sharedDataService, transactionsService, ngTableParams) {
    	var vm = this;
        vm.data = null;
        vm.categories = ['Rent', 'Utilities', 'Groceries', 'Shopping', 'Night Life', 'Gas and Car', 'Restaurants', 'Travel'];
        
    	function loadTransactions() {
    		var creditCard = sharedDataService.getCreditCard();
    		
    		if (creditCard == null) {
    			return;
    		}
    		
	        transactionsService.getTransactionByCreditCard(creditCard.id)
   	    		.then(function(transactions) {
   	    			vm.data = transactions;
   	    			$scope.tableParams = new ngTableParams(
   	    				{ page: 1, count: 10}, 
   	    				{
   	    					total: vm.data.length, // length of data
   		                	getData: function ($defer, params) {
   		                		params.total(vm.data.length);
   		                		$defer.resolve(vm.data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
   		                	}
   	    				});
   	    		});
    	}
    	
    	vm.save = function(transaction) {
    		transaction.isEditing = false;
    	}
    	
    	//In case there's already a selected card
    	loadTransactions();

        //Watch for the credit card to change, then re-fetch transactions
        $scope.$on('creditCardChanged', function(event, args){ 
        	loadTransactions();
    	});
    	
    };
    
    statementOverViewController.$inject = injectParams;
    angular.module('expenseTracker').controller('statementOverViewController', statementOverViewController);

})();
