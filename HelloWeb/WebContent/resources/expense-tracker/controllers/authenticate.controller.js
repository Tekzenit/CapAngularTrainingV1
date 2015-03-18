(function() {

  var injectParams = ['$state','authenticationService'];
  var AuthenticateController = function($state, authenticationService) {
    var vm = this;
    vm.username = '';
    vm.password = '';
    vm.submitted = false;
    vm.login = function () {
      if (authenticationService.loginUser(vm.username, vm.password))
        $state.go('expenseTracker');
    }

  };


  AuthenticateController.$inject = injectParams;

  angular.module('expenseTracker')
    .controller('authenticateController', AuthenticateController);

})();

