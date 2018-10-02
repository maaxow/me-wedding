angular.module('app.controllers.gift', [])

.controller('GiftController', function($scope, $http, $interval, CONSTANTS){
	$scope.gifts = [];
	$scope.totalAmount = function(){
		var amount = 0;
		for(var index in $scope.gifts){
			amount += $scope.gifts[index].total;
		}
		return amount;
	}
	$http.get("components/giftList/gifts.json").then(function(gifts){
		$scope.gifts = gifts.data;
	});

	$scope.calculWidthProgress = function(gift){
		var percent = (gift.amount*100) / gift.total;
		return percent * 518.6 / 100;
	};

});
