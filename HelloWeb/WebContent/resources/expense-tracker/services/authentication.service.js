(function () {
    var injectParams = ['$resource'];
    var AuthenticationService = function ($resource) {
    var AuthResource = $resource('/auth/');
    var auth = {
      loginUser: function (username, password) {
        return AuthResource.save({}, {username: username, password: password}).$promise;
      }
    };
    return auth;
  };
  AuthenticationService.$inject = injectParams;
  angular.module('expenseTracker')
    .factory('authenticationService', AuthenticationService);

})();
