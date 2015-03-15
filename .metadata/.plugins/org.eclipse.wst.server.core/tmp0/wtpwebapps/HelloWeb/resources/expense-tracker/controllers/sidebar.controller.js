(function() {

  var SidebarController;
  var injectParams = ['$scope','customersService', 'sharedDataService'];
  SidebarController = function ($scope, customersService, sharedDataService) {
    //use 'this' instead of $scope
    var vm = this;
    vm.customers = null;
    vm.creditcards = null;
    vm.filter = '';
    vm.creditcard = '';

    $scope.$watch(function(){
      return sharedDataService.getCreditcard();
    }, function (newValue, oldValue) {
      vm.creditcard = newValue;
    });

    //hard coded for demo, in real production this would be passed through log in
    var customerId = 123;

    //initiated on load
    function init() {
      customersService.getCustomers(customerId)
        .success(function (custs) {
          vm.customers = custs;
          vm.creditcards = custs.creditcards;
          vm.creditcard = custs.creditcards.number;
          console.log(vm.creditcards);
        });


    }

    //self invoking
    init();


  };

  SidebarController.$inject = injectParams;

  angular.module('expenseTracker')
    .controller('sidebarController', SidebarController);

})();

