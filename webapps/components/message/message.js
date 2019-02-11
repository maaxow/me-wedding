angular.module('app.controllers.message', [])

.controller('MessageController', function($scope, $http, $interval, REST, $timeout){

	// ### DECLARATION ###
	// Local
	var Message = function(){
		this.sender = '';
		this.isAnonymous = false;
		this.messageDate = new Date();
		this.message = '';
	},
	_initialize = function(){
		$scope.isAnonymousValue = "false";
		$scope.newMessage = new Message();
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
	// Binded
	$scope.isPresent = function(){
		if($scope.isAnonymousValue === "true"){
			$scope.message.isAnonymous = true;
		} else {
			$scope.message.isAnonymous = false;
		}
	}
	$scope.confirm = function(){
		$http.post(REST.message, $scope.newMessage).then(function(response){
			showMessage("Message enregistrée", 'green');
			resetMessage();
		}, function(err){
			showMessage("Erreur", 'red');
			resetMessage();
		});
	};
	
	// ### EXECUTION ###
	_initialize();
	
});