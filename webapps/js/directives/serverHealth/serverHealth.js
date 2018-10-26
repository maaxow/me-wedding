angular.module('app').directive('serverHealth', function(){

return {
	restrict: 'E',
	templateUrl: 'js/directives/serverHealth/serverHealth.html',
	controller: function($scope, $http, $interval){

		$scope.orange = true;
		$scope.red = false;
		$scope.green = false;

		var updateColor = function(statusCode){
			if(statusCode === 200){
				setGreen();
			}
			else if(statusCode === 400){
				setRed();
			}
			else {
				setOrange();
			}
		}

		function setGreen(){
			$scope.green = true;
			$scope.orange = false;
			$scope.red = false;
		}
		function setOrange(){
			$scope.green = false;
			$scope.orange = true;
			$scope.red = false;
		}
		function setRed(){
			$scope.green = false;
			$scope.orange = false;
			$scope.red = true;
		}

		function getServerStatus(){
			$http.get('/server/health').then(function(response){
				updateColor(response.status);
				// console.log("response server : ", response);
			}, function(error){
				updateColor(error.status);
				// console.log("Error Serveur :", error);
			});
		}

		getServerStatus();
		$interval(function(){
			getServerStatus();
		},60000);
	}
}

});
