angular.module('app.controllers.admin', [])

.controller('AdminController', function($scope, $state){

	$scope.isGuest = false;
	$scope.isFamily = false;

	var updateBooleans = function(state){
		switch(state){
			case 'admin.guest':
			$scope.isGuest = true;
			$scope.isFamily = false;
			break;
			case 'admin.family':
			$scope.isGuest = false;
			$scope.isFamily = true;
			break;
			default:
			$scope.isGuest = false;
			$scope.isFamily = false;
		}
	};
	updateBooleans();

	$scope.changeView = function(state){
		$state.go(state);
		updateBooleans(state)
	};

});
