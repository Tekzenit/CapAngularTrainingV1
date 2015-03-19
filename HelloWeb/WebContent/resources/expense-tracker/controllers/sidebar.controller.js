(function () {

  var injectParams = ['$rootScope', '$scope', 'sharedDataService', 'customersService'];
  var sidebarController = function ($rootScope, $scope, sharedDataService, customersService) {
    //use 'this' instead of $scope
    var vm = this;
    //hard coded for demo, in real production this would be passed through log in
    var customerId = 123;
    var customer = customersService.get({id: customerId}, function () {
      vm.customer = customer;
      vm.creditcards = customer.creditcards;
      vm.creditcard = customer.creditcards[0];
      sharedDataService.setCreditCard(customer.creditcards[0]);
    });

    vm.customers = customersService.query();
    
    //When the credit card changes, we want to broadcast an event to everyone
    //using the root scope so that they can update themselves. We have to use
    //$rootScope because we're siblings with the other controllers
    $scope.$watch(function() {
    	return vm.creditcard;
    }, function(newValue, oldValue) {
    	sharedDataService.setCreditCard(newValue);
    	$rootScope.$broadcast('creditCardChanged', newValue);
    });
  };

  sidebarController.$inject = injectParams;

  angular.module('expenseTracker').controller('sidebarController', sidebarController);

})();

