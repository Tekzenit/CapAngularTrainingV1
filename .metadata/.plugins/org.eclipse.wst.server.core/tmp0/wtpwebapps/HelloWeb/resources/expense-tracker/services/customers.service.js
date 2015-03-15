(function() {

    var injectParams = ['$http'];
    var customersService = function($http) {
        var service = this;
        service.getCustomers = function(customerId) {
            return $http.get('http://localhost:9091/customers/'+(customerId || '') );
        };
    };

    customersService.$inject = injectParams;

    angular.module('expenseTracker')
        .service('customersService', customersService);

})();


