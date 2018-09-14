angular.module('app.controllers.admin.family', [])

.controller('AdminFamilyController', function($scope, $http, $interval, CONSTANTS){
	function Family(){
		this.id = 0;
		this.name = '';
		this.password= '';
		this.password_tmp= '';
	}

	$scope.families = [];
	$scope.newFamily = new Family();
	$scope.editFamily = new Family();
	$scope.removeId = null;
	$scope.searchName = "";
	$scope.getAll = function(){
		$http.get('/api/family').then(function(data){
			$scope.families = data.data;
		});
	};
	$scope.getAll();


	$scope.openAddModal = function(){
		$('#createFamilyModal').modal('show');
	};
	var closeAddModal = function(){
		$('#createFamilyModal').modal('hide');
	};

	$scope.addFamily = function(){
		$http.post('/api/family', $scope.newFamily).then(function(data){
			$scope.getAll();
			closeAddModal();
		});
	};

	$scope.openEditModal = function(guest){
		$scope.editGuest = guest;
		$("#updateFamilytModal").modal('show');
	};
	var closeEditModal = function(){
		$("#updateFamilyModal").modal('hide');
		$scope.editFamily = new Family();
	};

	$scope.edit = function(family){
		$http.post('/api/family/update', guest).then(function(data){
			$scope.getAll();
			closeEditModal();
		});
	};

	$scope.openRemoveModal = function(id){
		$("#removeFamilyModal").modal('show');
		$scope.removeId = id;
	};
	var closeRemoveModal = function(){
		$("#removeFamilyModal").modal('hide');
	};
	$scope.remove = function(familyId){
		$http.post('/api/family/delete/'+familyId).then(function(response){
			$scope.getAll();
			closeRemoveModal();
		});
	};

	$scope.findByName = function(){
		if($scope.searchName !== ""){
			var body = {
				name : $scope.searchName
			}
			$http.post('/api/family/find', body).then(function(response){
				$scope.families = response.data;
			});
		} else $scope.getAll();
	};

})
