(function () {

  var injectParams = ['$resource'];
  var CustomersServive = function ($resource) {
    return $resource('customers/:id/',{id: '@_id'},{})
  };

  CustomersServive.$inject = injectParams;

  angular.module('expenseTracker')
    .factory('customersService', CustomersServive);

})();


