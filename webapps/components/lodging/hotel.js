angular.module('app.controllers.lodging', [])

.controller('LodgingController', ["$scope", "$http", "$timeout", "CONSTANTS", 
	function($scope, $http, $timeout, CONSTANTS){
	
		$scope.hotels = [];
		$http.get("components/lodging/hotels.json", {headers: {
		       "Accept": "application/json;charset=utf-8",
		   }}).then(function(hotels){
			console.log("getting all hotels : ", hotels.data);
			$scope.hotels = hotels.data;
		});
}]);
