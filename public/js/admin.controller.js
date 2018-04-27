angular.module('app.controllers.admin', [])

.controller('AdminController', function($scope, $state){

	$scope.isGuest = false;
	$scope.isFamily = false;

	var updateBooleans = function(state){
		switch(state){
			case 'admin.guest':
			$scope.isGuest = true;
			$scope.isFamily = false;
			$scope.isGift = false;
			break;
			case 'admin.family':
			$scope.isGuest = false;
			$scope.isFamily = true;
			$scope.isGift = false;
			break;
			case 'admin.gift':
			$scope.isGift = true;
			$scope.isGuest = false;
			$scope.isFamily = false;
			default:
			$scope.isGuest = false;
			$scope.isFamily = false;
			$scope.isGift = false;
		}
	};
	updateBooleans();

	$scope.changeView = function(state){
		$state.go(state);
		updateBooleans(state)
	};

});
