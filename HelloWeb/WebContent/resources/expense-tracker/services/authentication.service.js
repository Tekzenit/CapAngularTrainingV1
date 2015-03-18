// to be removed after clean up//
(function () {
  var injectParams = ['$resource', '$q'];
  var AuthenticationService = function ($resource, $q) {
   var auth = {
      loginUser: function (username, password) {
        var deferred = $q.defer();
        
    	//Simulate an async API call
        setTimeout(function() {
        	if(username === 'James' && password === '111')
        		deferred.resolve();
        	else
        		deferred.reject();
          }, 1000);

          return deferred.promise;
      }
    };
   return auth;
  };

  angular.module('expenseTracker')
    .factory('authenticationService', AuthenticationService);

})();
