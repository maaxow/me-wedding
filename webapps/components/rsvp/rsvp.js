angular.module('app.controllers.rsvp', [])

.controller('RSVPController', function($scope, $http, $interval, REST, $timeout){

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
		$scope.savingMessage = "";
		$scope.savingStyle = {'color' : 'black'};
	},
	showMessage = function(message, color){
		$scope.savingMessage = message;
		$scope.savingStyle = {'color' : color};
	},
	resetMessage = function(){
		$timeout(function(){
			showMessage('', 'black');
		}, 3000);
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
		$http.post(REST.reponse, $scope.reponse).then(function(response){
			showMessage("Réponse enregistrée", 'green');
			resetMessage();
		}, function(err){
			showMessage("Erreur", 'red');
			resetMessage();
		});
	};
	
});
