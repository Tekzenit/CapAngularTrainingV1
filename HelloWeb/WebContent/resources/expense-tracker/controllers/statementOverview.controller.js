(function() {

    var injectParams = ['$scope', 'sharedDataService','transactionsService','ngTableParams', '$sce', '$q'];
    var StatementOverViewController = function(
    		$scope
    		, sharedDataService
    		, transactionsService
    		, ngTableParams
    		, $sce
    		, $q) {
      
    	var vm = this;
        
    	var data = [];
        
    	function getTransactions() {
    		var cc = sharedDataService.getCreditcard();
    		
    		var deferred = $q.defer();
    		
	        data = transactionsService
	        .GetTransactionByCreditCard(cc.id)
   	    	.then(function(transactions) {
	        	data = transactions;
	        	
	        	deferred.resolve();
   	    	});
	        
	        return deferred.promise;
    	}
    	
        function init() {
        	 
    		getTransactions().then(function() {
    			
    			$scope.tableParams = new ngTableParams({
                 page: 1,
                 count: 10
	        	}
	        	, {
	                 total: data.length, // length of data
	                 
	                 getData: function ($defer, params) {
	                	 params.total(data.length);
	                	 $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
	                 }
	        	});
    		});
        }
        
        init();

        //Watch for the credit card to change, then re-fetch transactions
        $scope.$on('ccChanged', function(event, args){ 
        	getTransactions().then(function() {
        		$scope.tableParams.reload()
        	}); 
    	});
    	
    };
    
  StatementOverViewController.$inject = injectParams;
    angular.module('expenseTracker')
        .controller('statementOverViewController', StatementOverViewController);

})();
