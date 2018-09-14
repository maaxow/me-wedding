angular.module('app.controllers.gift', [])

.controller('GiftController', function($scope, $http, $interval, CONSTANTS){
	$scope.gifts = [];

	$http.get("/components/giftList/gifts.json").then(function(gifts){
		$scope.gifts = gifts.data;
	});

	$scope.calculWidthProgress = function(gift){
		var percent = (gift.amount*100) / gift.total;
		return percent * 518.6 / 100;
	};

});
