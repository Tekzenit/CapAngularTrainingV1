(function() {

  var injectParams = ['$state','authenticationService'];
  var AuthenticateController = function($state, authenticationService) {
    var vm = this;
    vm.username = '';
    vm.password = '';
    vm.login = function() {
      authenticationService.loginUser(vm.username, vm.password).then(
        function (loginResult) {
           $state.go('expenseTracker');
        },
        function (err) {
          console.error(err);
        }
      );
    }
  };


  AuthenticateController.$inject = injectParams;

  angular.module('expenseTracker')
    .controller('authenticateController', AuthenticateController);

})();

