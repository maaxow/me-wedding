angular.module('app.controllers.message', [])

.controller('MessageController', function($scope, $http, $interval, REST, $timeout){

	// ### DECLARATION ###
	// Local
	var Message = function(){
		this.sender = '';
		this.isAnonymous = false;
		this.messageDate = new Date().getTime();
		this.message = '';
	},
	_initialize = function(){
		$scope.newMessage = new Message();
		$scope.messages = [];
		$scope.savingMessage = "";
		$scope.savingStyle = {'color' : 'black'};
	},
	_initMessageList = function(){
		$http.get(REST.message).then(function(response){
			$scope.messages = response.data;
		});
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
	$scope.confirm = function(){
		$scope.newMessage.messageDate = new Date().getTime();
		$http.post(REST.message, $scope.newMessage).then(function(response){
			showMessage("Message enregistrée", 'green');
			resetMessage();
			_initMessageList();
		}, function(err){
			showMessage("Erreur", 'red');
			resetMessage();
		});
	};
	
	// ### EXECUTION ###
	_initialize();
	_initMessageList();
	
});
