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
	$scope.editGuest = new Guest();
	$scope.removeId = null;
	$scope.getAll = function(){
		$http.get('/api/guest').then(function(data){
			$scope.guests = data.data;
		});
	};
	$scope.getAll();


	$scope.openAddModal = function(){
		$('#createGuestModal').modal('show');
	};
	var closeAddModal = function(){
		$('#createGuestModal').modal('hide');
	};

	$scope.addGuest = function(){
		$http.post('/api/guest', $scope.newGuest).then(function(data){
			$scope.getAll();
			closeAddModal();
		});
	};

	$scope.openEditModal = function(guest){
		$scope.editGuest = guest;
		$("#updateGuestModal").modal('show');
	};
	var closeEditModal = function(){
		$("#updateGuestModal").modal('hide');
		$scope.editGuest = new Guest();
	};

	$scope.edit = function(guest){
		$http.post('/api/guest/update', guest).then(function(data){
			$scope.getAll();
			closeEditModal();
		});
	};

	$scope.openRemoveModal = function(id){
		$("#removeGuestModal").modal('show');
		$scope.removeId = id;
	};
	var closeRemoveModal = function(){
		$("#removeGuestModal").modal('hide');
	};
	$scope.remove = function(guestId){
		$http.post('/api/guest/delete/'+guestId).then(function(response){
			$scope.getAll();
			closeRemoveModal();
		});
	};

	$scope.changePresent = function(guest){
		if(guest){
			guest.present === 1 ? guest.present = 0 : guest.present = 1;
		} else {
			$scope.newGuest.present === 1 ? $scope.newGuest.present = 0 : $scope.newGuest.present = 1;
		}
	}

})
