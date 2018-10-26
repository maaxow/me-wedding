angular.module('app.controllers.gift', [])

.controller('GiftController', ["$scope", "$http", "$timeout", "CONSTANTS", 
	function($scope, $http, $timeout, CONSTANTS){
	
		$scope.gifts = [];
		$scope.currentAmount = 2000;
		$scope.progressBarStyle = {
				width: '50%'
		};
		$scope.totalAmount = 0;
		var _initialize = function(){
			$scope.calculTotalAmount();
			$scope.calculWidthProgress();
		};
		$scope.calculTotalAmount = function(){
			var amount = 0;
			for(var index in $scope.gifts){
				amount += $scope.gifts[index].total;
			}
			$scope.totalAmount = amount;
			return amount;
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
