angular.module('app.controllers.rsvp', [])

.controller('RSVPController', function($scope, $http, $interval, CONSTANTS){

	var RSVP = function(){
		this.name = '';
		this.email = '';
		this.isPresent = false;
		this.nbAdult = 0;
		this.nbTeenager = 0;
		this.nbChild = 0;
	},
	_initialize = function(){
		$scope.isPresentValue = "false";
		$scope.reponse = new RSVP();
	};
	
	_initialize();
	$scope.isPresent = function(){
		if($scope.isPresentValue === "true"){
			$scope.reponse.isPresent = true;
		} else {
			$scope.reponse.isPresent = false;
		}
	}
	$scope.confirm = function(){
		//TODO finish. $scope.reponse is OK, ready to send to REST Service
		$http.post('/rest/reponse', $scope.reponse);
	}
});
