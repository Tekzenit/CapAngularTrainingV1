(function () {

  var injectParams = ['$resource'];

  var customersServive = function ($resource) {
    return $resource('customers/:id/',{id: '@_id'},{})
  };

  customersServive.$inject = injectParams;

  angular.module('expenseTracker').factory('customersService', customersServive);

})();


