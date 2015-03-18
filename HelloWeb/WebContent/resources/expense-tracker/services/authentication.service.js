// ! this is Clark's code taken from day one , when done with clean up remove the uncommented code below and un comment this one//
//(function () {
//  var injectParams = ['$resource'];
//  var AuthenticationService = function ($resource) {
//    var AuthResource = $resource('/auth/');
//    var auth = {
//      loginUser: function (username, password) {
//        return username == "James" && password == "111";
//      }
//    };
//    return auth;
//  };
//  AuthenticationService.$inject = injectParams;
//  angular.module('expenseTracker')
//    .factory('authenticationService', AuthenticationService);
//
//})();

// to be removed after clean up//
(function () {
  var injectParams = ['$resource'];
  var AuthenticationService = function ($resource) {
   var auth = {
      loginUser: function (username, password) {
        return (username === 'James' && password === '111');
      }
    };
   return auth;
  };

  angular.module('expenseTracker')
    .factory('authenticationService', AuthenticationService);

})();
