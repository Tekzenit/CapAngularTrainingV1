(function () {

  var SidebarController;
  var injectParams = ['$scope', 'customersService', 'sharedDataService'];
  SidebarController = function ($scope, customersService, sharedDataService) {
    //use 'this' instead of $scope
    var vm = this;
    //hard coded for demo, in real production this would be passed through log in
    var customerId = 123;
    var customer = customersService.get({id: customerId}, function () {
      vm.customer = customer;
      vm.creditcards = customer.creditcards;
      vm.creditcard = customer.creditcards.number;
    });
    vm.customers = customersService.query();

    $scope.$watch(function () {
      return sharedDataService.getCreditcard();
    }, function (newValue, oldValue) {
      vm.creditcard = newValue;
    });

  };

  SidebarController.$inject = injectParams;

  angular.module('expenseTracker')
    .controller('sidebarController', SidebarController);

})();

