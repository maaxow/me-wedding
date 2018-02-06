angular.module('app', []).controller('AppController', function($scope, $http, $interval, CONSTANTS){


	function Guest(){
		this.firstname = '';
		this.lastname= '';
		this.email= '';
		this.phone_number= '';
		this.address= '';
		this.post_code= '';
		this.city= '';
		this.country= '';
		this.present= null;
	}

	$scope.weddingDate = Date.parse(CONSTANTS.weddingDate);
	$scope.guests = [];
	$scope.newGuest = new Guest();
	$scope.getAll = function(){
		$http.get('/api/guest').then(function(data){
			$scope.guests = data.data;
		});
	};
	$scope.getAll();

	$scope.addGuest = function(){
		console.log("new guest : ", $scope.newGuest);
		$http.post('/api/guest', $scope.newGuest).then(function(data){
			$scope.getAll();
		});
	};
});
