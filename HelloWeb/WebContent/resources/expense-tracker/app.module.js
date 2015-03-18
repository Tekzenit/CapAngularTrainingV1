(function () {

  var app = angular.module('expenseTracker', ['ngResource', 'ui.router', 'mm.foundation', 'highcharts-ng', 'ngTable']);

  app.run(function ($rootScope, $state, $stateParams) {

// It is very common to access $state in templates that may not have a controller,
// you need to bind $state to $rootScope (or any other accessible scope) to access it from a template/view

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

  });

  app.config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider
      // any invalid will redirect to'/'
      .otherwise('/');
    var viewBase = 'expense-tracker/views/';
    var partialViewBase = 'expense-tracker/partials/';
    $stateProvider
      .state('expenseTracker', {
        url: '/ExpenseTracker',
        templateUrl: viewBase + 'main.html'
      })
      .state('statementOverview', {
        url: '/StatementOverview',
        templateUrl: partialViewBase + 'statement-overview.html'
      })
      .state('statementOverview.categories', {
        url: '/Categories',
        templateUrl: partialViewBase + 'statement-overview-categories.html'
      })
      .state('statementOverview.transactions', {
        url: '/Categories',
        templateUrl: partialViewBase + 'statement-overview-transactions.html'
      });
  });
  app.factory('sharedDataService', ['$rootScope', function ($rootScope) {
// use this to share the selected credit card data to any controller
    var creditcard = {};
    return {
      getCreditcard: function () {
        return creditcard;
      },
      setCreditcard: function (value) {
        creditcard = value;
        
        //Notify the controllers that we changed the credit card
        $rootScope.$broadcast('ccChanged', creditcard);
      }
    };
  }]);
})();


