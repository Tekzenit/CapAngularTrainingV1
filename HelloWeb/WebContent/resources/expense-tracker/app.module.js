(function () {

  var app = angular.module('expenseTracker', ['ngResource','ui.router','mm.foundation','highcharts-ng','ngTable']);


  app.config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider
      //.when('/transactions?id', '/transactions/:id')
      // if invalid url go to root /
      .otherwise('/');
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
 
})();
