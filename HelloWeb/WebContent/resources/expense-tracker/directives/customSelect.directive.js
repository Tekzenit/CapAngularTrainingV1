(function() {

	var injectParams = [];

	var customSelect = function() {
		return {
			restrict: 'E',
			templateUrl: 'expense-tracker/partials/custom-select.html',
			scope: {
				placeholder: '@',
				list: '=',
				selected: '='
			},
			link: function($scope) {
        		$scope.listVisible = false;
				$scope.isPlaceholder = true;
				$scope.select = function(item) {
          			$scope.listVisible = false;
					$scope.isPlaceholder = false;
					$scope.selected = item;
				};

				scope.isSelected = function(item) {
					return item === $scope.selected;
				};
			}
		}
	};

	customSelect.$inject = injectParams;

	angular.module('expenseTracker').directive('customSelect', customSelect);

})();
