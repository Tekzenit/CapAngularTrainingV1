(function() {
  var injectParams = ['$timeout', '$q'];
  var Username = function($timeout, $q) {
    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ctrl) {

        ctrl.$asyncValidators.username = function (modelValue, viewValue) {

          if (ctrl.$isEmpty(modelValue)) {
            // consider empty model valid
            return $q.when();
          }

          var deferred = $q.defer();

          $timeout(function () {
            // Mock a delayed response
            if (modelValue === "James") {
              // The username is valid
              deferred.resolve();
            } else {
              deferred.reject();
            }

          }, 2000);

          return deferred.promise;
        };
      }
    }
  };

angular.module('expenseTracker').directive("username", Username);
})();
