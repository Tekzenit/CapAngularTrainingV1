(function() {

	var customSelect = function($rootScope, sharedDataService) {
		return {
			restrict: "E",
			templateUrl: "expense-tracker/partials/custom-select.html",
			scope: {
				placeholder: "@",
				list: "=",
				selected: "="
			},
			link: function(scope) {
        scope.listVisible = false;
				scope.isPlaceholder = true;
				scope.select = function(item) {
          scope.listVisible = false;
					scope.isPlaceholder = false;
					scope.selected = item;
				};

				scope.isSelected = function(item) {
					return item[scope] === scope.selected;
				};

				scope.$watch("selected", function(value) {
					scope.isPlaceholder = scope.selected === undefined;
					scope.display = scope.selected;
          sharedDataService.setCreditcard(value);
				});
			}
		}
	};

	angular.module('expenseTracker').directive("customSelect", customSelect);

})();
