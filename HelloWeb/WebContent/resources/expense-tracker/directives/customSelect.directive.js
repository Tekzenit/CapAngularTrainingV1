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
				scope.init = function () {
         sharedDataService.setCreditcard(value);
        };
        scope.listVisible = false;
				scope.isPlaceholder = true;

				scope.select = function(item) {
					scope.isPlaceholder = false;
					scope.selected = item;
				};

				scope.isSelected = function(item) {
					return item[scope] === scope.selected;
				};

				scope.show = function() {
					scope.listVisible = true;
				};

				$rootScope.$on("documentClicked", function(inner, target) {
					//console.log($(target[0]).is(".custom-select-display.clicked") || $(target[0]).parents(".custom-select-display.clicked").length > 0);
					if (!$(target[0]).is(".custom-select-display.clicked") && !$(target[0]).parents(".custom-select-display.clicked").length > 0)
						scope.$apply(function() {
							scope.listVisible = false;
						});
				});

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
