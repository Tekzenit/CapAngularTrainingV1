(function() {

  var injectParams = ['$state'];
  var AuthenticateController = function($state) {
    var vm = this;
    vm.password = null;
    vm.disabled = function () {
      (vm.password !== '111') ? $error : $valid;
    };
    vm.getStarted = function () {
      $state.go('expenseTracker');
    };

    //function init() {
    //}
    //init();
  };


  AuthenticateController.$inject = injectParams;

  angular.module('expenseTracker')
    .controller('authenticateController', AuthenticateController);

})();
