(function() {
  var injectParams = ['$timeout', '$q'];
  var UsernameCheck = function($timeout, $q) {
    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ctrl) {
        // we will use this to check against the directive
        ctrl.$asyncValidators.usernamecheck = function (modelValue, viewValue) {

          if (ctrl.$isEmpty(modelValue)) {
            // consider empty model valid
            return $q.when();
          }
          var deferred = $q.defer();
          //simulated server response
          $timeout(function () {
            // Mock a delayed response
            if (modelValue === "James") {
              // The username is valid
              deferred.resolve();
            } else {
              deferred.reject();
            }
          }, 1000);
          // return the promise
          return deferred.promise;
        };
      }
    }
  };

angular.module('expenseTracker').directive("usernamecheck", UsernameCheck);
})();

(function () {
  var injectParams = ['$timeout', '$q'];
  var PasswordCheck = function ($timeout, $q) {
    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ctrl) {

        ctrl.$asyncValidators.paswwordcheck = function (modelValue, viewValue) {

          if (ctrl.$isEmpty(modelValue)) {
            // consider empty model valid
            return $q.when();
          }

          var deferred = $q.defer();
          // Mock a delayed response
          $timeout(function () {

            if (modelValue === "111") {

              deferred.resolve();
            } else {
              deferred.reject();
            }

          }, 1000);

          return deferred.promise;
        };
      }
    }
  };

  angular.module('expenseTracker').directive("paswwordcheck", PasswordCheck);
})();
