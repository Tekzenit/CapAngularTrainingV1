(function () {

  var injectParams = ['customersService'];
  var sidebarController = function (customersService) {
    //use 'this' instead of $scope
    var vm = this;
    //hard coded for demo, in real production this would be passed through log in
    var customerId = 123;
    var customer = customersService.get({id: customerId}, function () {
      vm.customer = customer;
      vm.creditcards = customer.creditcards;
      vm.creditcard = customer.creditcard[0];
    });

    vm.customers = customersService.query();
  };

  sidebarController.$inject = injectParams;

  angular.module('expenseTracker').controller('sidebarController', sidebarController);

})();

