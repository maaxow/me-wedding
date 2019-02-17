angular.module('app.controllers.gift', [])

.controller('GiftController', ["$scope", "$http", "$timeout", "REST", 
	function($scope, $http, $timeout, REST){
	
		$scope.gifts = [];
		$scope.currentAmount = 0;
		$scope.progressBarStyle = {
				width: '50%'
		};
		$scope.totalAmount = 5000;
		var _initialize = function(){
			$scope.calculAmount();
		};
		$scope.calculAmount = function(){
			$http.get(REST.transactionAmount).then(function(response){
				$scope.currentAmount = response.data;
				$scope.calculWidthProgress();
			});
		}
		$http.get("components/giftList/gifts.json").then(function(gifts){
			$scope.gifts = gifts.data;
		});
	
		$scope.calculWidthProgress = function(){
			var percent = ($scope.currentAmount*100) / 	$scope.totalAmount;
			$scope.progressBarStyle.width = percent + '%';
			return percent;
		};
		
		//Initialization
		$timeout(function(){
			_initialize();
		},10);
		$scope.calculWidthProgress();
}]);
