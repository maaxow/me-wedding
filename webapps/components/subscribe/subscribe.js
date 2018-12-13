angular.module('app.controllers.subscribe', [])

.controller('SubscribeController', function($scope, $http, $interval, REST){

	//DEV VAR
	
	$scope.name = "";
	$scope.email = "";
	
	// END DEV VAR
	$scope.feedBackMessage = "";
	$scope.feedBackMessageStyle = {
			color: 'red'
	};
	var setColorStyle = function(newColor){
		$scope.feedBackMessageStyle.color = newColor;
	};
	$scope.subscribe = function(){
		console.log($scope.name, $scope.email);
		$http.post(REST.subscribe + '/' + $scope.name+'/' + $scope.email).then(function(response){
			setColorStyle('green');
			$scope.feedBackMessage = "Ton inscription est bien enregistré";
		}, function(err){
			setColorStyle('red');
			if(err.status === 409){
				$scope.feedBackMessage = "Adresse existante";
			} else if(err.status === 406){
				$scope.feedBackMessage = "Nom ou Email invalide";
			}
		})
	}
});
