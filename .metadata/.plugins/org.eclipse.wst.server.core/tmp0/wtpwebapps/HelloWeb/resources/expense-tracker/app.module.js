(function () {

  var app = angular.module('expenseTracker', ['ui.router','mm.foundation','highcharts-ng']);

  app.run(function ($rootScope) {
    angular.element(document).on("click", function(e) {
      $rootScope.$broadcast("documentClicked", angular.element(e.target));
    });
  });


  app.config(function ($stateProvider) {
    var viewBase = 'expense-tracker/views/';
    var partialViewBase = 'expense-tracker/partials/';

    $stateProvider
    .state('expenseTracker', {
      url: '/ExpenseTracker',
      templateUrl: viewBase+'main.html'
    })
    .state('statementOverview', {
      url: '/StatementOverview',
      templateUrl: partialViewBase+'statement-overview.html'
    })
    .state('statementOverview.categories', {
      url: '/Categories',
      templateUrl: partialViewBase+'statement-overview-categories.html'
    })
    .state('statementOverview.transactions', {
      url: '/Categories',
      templateUrl: partialViewBase+'statement-overview-transactions.html'
    });
  });
 app.factory('sharedDataService', function(){

   var creditcard = {};
   return {
    getCreditcard: function() {
     return creditcard;
    },
    setCreditcard: function (value) {
     creditcard = value;
    }
   };
 });
})();
