angular.module('app.controllers.admin', [])

.controller('AdminController', function($scope, $http, $interval, CONSTANTS){
	function Guest(){
		this.id = 0;
		this.firstname = '';
		this.lastname= '';
		this.email= '';
		this.phone_number= '';
		this.address= '';
		this.post_code= '';
		this.city= '';
		this.country= '';
		this.present= 0;
	}

	$scope.guests = [];
	$scope.newGuest = new Guest();
	$scope.getAll = function(){
		$http.get('/api/guest').then(function(data){
			$scope.guests = data.data;
			console.log($scope.guests);
		});
	};
	$scope.getAll();

	$scope.addGuest = function(){
		$http.post('/api/guest', $scope.newGuest).then(function(data){
			$scope.getAll();
		});
	};

	$scope.edit = function(guest){
		$('#updateGuestModal').modal('show');
		$('#updateGuestModal').on('shown.bs.modal', function(response){
			console.log("modal Open !", response);
		});
		$('#updateGuestModal').on('', function(response){
			console.log("modal closed", response);
		});
		// $http.post('/api/guest/'+guest.id, guest).then(function(data){
		// 	console.log("data", data);
		// });
	};
	$scope.remove = function(guestId){

	};

	$scope.changePresent = function(){
		$scope.newGuest.present === 1 ? $scope.newGuest.present = 0 : $scope.newGuest.present = 1;
	}

})
