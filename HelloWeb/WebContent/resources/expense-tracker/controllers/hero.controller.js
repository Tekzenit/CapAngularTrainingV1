(function() {

	var injectParams = [ '$scope', 'transactionsService', 'sharedDataService' ];
	var heroController = function($scope, transactionsService, sharedDataService) {
		var vm = this;

		function loadChart() {
			var cc = sharedDataService.getCreditCard();

			var transactionList = [];

			/*transactionsService.getTransactionByCreditCard(cc.id)
				.then(function(transactions) {
					transactionList = transactions;
				});*/
			
			vm.chartConfig = {
				options : {
					chart : {
						type : 'areaspline',
						zoomType : 'x',
						backgroundColor : null
					}
				},
				legend : {
					lineHeight : 50,
					title : {
						text : '',
						style : {
							color : '#fff',
							font : '14px Trebuchet MS, Verdana, sans-serif'
						},
						verticalAlign : 'middle',
						y : 0
					}
				},
				series : [
						{
							data : [ 0, 1, 2, 3, 4, 6, 2, 4, 5, 4, 8, 6, 5, 6,
									7, 9, 10, 11, 13, 14, 12, 11, 10, 8, 13,
									15, 18, 20, 20, 21, 22, 24, 25 ],
							color : '#7cb5ec',
							name : 'previous'
						}, {
							data : [ 0, 1, 2, 2, 3, 5, 6, 6, 9, 11, 12, 14 ],
							color : '#00ff00',
							name : 'current'
						} ],
				title : {
					text : '',
					style : {
						color : '#fff',
						font : '14px Trebuchet MS, Verdana, sans-serif'
					}
				},
				xAxis : {
					currentMin : 0,
					currentMax : 31,
					minRange : 1,
					gridLineColor : 'rgb(0,0,0,0)',
					tickWidth : 0,
					title : {
						text : '',
						style : {
							color : '#fff',
							font : '14px Trebuchet MS, Verdana, sans-serif'
						},
						verticalAlign : 'middle',
						y : 0
					},
					labels : {
						style : {
							color : '#fff',
							font : '14px Trebuchet MS, Verdana, sans-serif'
						},
						verticalAlign : 'middle',
						y : 30
					}
				},
				yAxis : {
					currentMin : 0,
					currentMax : 25,
					gridLineColor : 'rgb(0,0,0,0)',
					lineColor : 'rgb(0,0,0,0.25)',
					tickColor : 'rgb(0,0,0,0.25)',
					title : {
						text : '',
						style : {
							color : '#fff',
							font : '14px Trebuchet MS, Verdana, sans-serif'
						}
					},
					labels : {
						style : {
							color : '#fff',
							font : '14px Trebuchet MS, Verdana, sans-serif'
						}
					}
				},
				loading : false
			};
		}

		loadChart();
		
		//Watch for the credit card to change, then re-fetch transactions
        $scope.$on('creditCardChanged', function(event, args){ 
        	loadChart();
    	});

	}

	heroController.$inject = injectParams;
	angular.module('expenseTracker').controller('heroController', heroController);

})();
