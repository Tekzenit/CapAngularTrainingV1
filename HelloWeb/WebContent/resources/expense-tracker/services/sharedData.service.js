(function () {
  var injectParams = [];
  var sharedDataService = function () {
	  var creditCard = null;
	  
	  this.getCreditCard = function() {
		  return creditCard;
	  }
	  
	  this.setCreditCard = function(value) {
		  creditCard = value;
	  }
  };

  sharedDataService.$inject = injectParams;
  angular.module('expenseTracker').service('sharedDataService', sharedDataService);

})();
