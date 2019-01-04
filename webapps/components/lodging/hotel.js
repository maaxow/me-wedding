angular.module('app.controllers.lodging', [])

.controller('LodgingController', ["$scope", "$http", "$timeout", "CONSTANTS", 
	function($scope, $http, $timeout, CONSTANTS){
	
		$scope.hotels = [];
		$http.get("components/lodging/hotels.json").then(function(hotels){
			$scope.hotels = hotels.data;
		});
}]);
