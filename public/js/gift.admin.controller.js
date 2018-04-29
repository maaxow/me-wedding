angular.module('app.controllers.admin.gift', [])

.controller('AdminGiftController', function($scope, $http, $interval, CONSTANTS){
	function Gift(){
		this.gift_id = 0;
		this.gift_name = "";
		this.gift_description = "";
		this.participants= [];
	}

	$scope.gifts = [];
	$scope.newGift = new Gift();
	$scope.editGift = new Gift();
	$scope.removeId = null;
	$scope.searchName = "";
	$scope.getAll = function(){
		$http.get('/gift').then(function(data){
			$scope.gifts = data.data;
		});
	};
	$scope.getAll();


	$scope.openAddModal = function(){
		$('#createGiftModal').modal('show');
	};
	var closeAddModal = function(){
		$('#createGiftModal').modal('hide');
	};

	$scope.addGift = function(){
		$http.post('/api/gift', $scope.newGift).then(function(data){
			$scope.getAll();
			closeAddModal();
		});
	};

	$scope.openEditModal = function(gift){
		$scope.editGift = gift;
		$("#updateGiftModal").modal('show');
	};
	var closeEditModal = function(){
		$("#updateGiftModal").modal('hide');
		$scope.editGift = new Gift();
	};

	$scope.edit = function(gift){
		$http.post('/api/gift/update', gift).then(function(data){
			console.log("on a fini upadte");
			$scope.getAll();
			closeEditModal();
		});
	};

	$scope.openRemoveModal = function(id){
		$("#removeGiftModal").modal('show');
		$scope.removeId = id;
	};
	var closeRemoveModal = function(){
		$("#removeGiftModal").modal('hide');
	};
	$scope.remove = function(giftId){
		$http.post('/gift/'+giftId+'/_delete').then(function(response){
			$scope.getAll();
			closeRemoveModal();
		});
	};

	$scope.findByName = function(){
		if($scope.searchName !== ""){
			var body = {
				name : $scope.searchName
			}
			$http.post('/api/gift/find', body).then(function(response){
				$scope.gifts = response.data;
			});
		} else $scope.getAll();
	};

	$scope.getParticipants = function(giftId){
		$http.get('/participants/'+giftId).then(function(response){
			return response;
		});
	};
})
