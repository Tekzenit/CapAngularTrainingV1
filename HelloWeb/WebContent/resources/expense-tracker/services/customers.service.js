(function () {

  var injectParams = ['$resource'];
  var CustomersServive = function ($resource) {
    return $resource('http://localhost:9092/customers/:id/',{id: '@_id'},{})
  };

  CustomersServive.$inject = injectParams;

  angular.module('expenseTracker')
    .factory('customersService', CustomersServive);

})();


