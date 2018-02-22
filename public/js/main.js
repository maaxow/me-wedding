angular.module('app', ['ui.router'])

.config(['$stateProvider','$locationProvider','$urlRouterProvider', function($stateProvider, $locationProvider,$urlRouterProvider){

	$stateProvider
	.state('home', {
		url: "/",
		templateUrl: 'views/home.html',
		controller : 'AppController'
	})
	.state('story', {
		url: "/story",
		templateUrl: 'views/story.html',
		// controller : 'AppController'
	})
	.state('article', {
		url: "/article",
		templateUrl: 'views/article.html',
		// controller : 'AppController'
	})
	.state('info', {
		url: "/info",
		templateUrl: 'views/info.html',
		// controller : 'AppController'
	})
	.state('lodging', {
		url: "/lodging",
		templateUrl: 'views/lodging.html',
		// controller : 'AppController'
	})
	.state('guest', {
		url: "/guest",
		templateUrl: 'views/guest.html',
		// controller : 'AppController'
	})
	.state('contact', {
		url: "/contact",
		templateUrl: 'views/contact.html',
		// controller : 'AppController'
	})
	.state('admin', {
		url: '/admin',
		templateUrl: 'views/admin.html',
		controller: 'AdminController'
		/* OnEnter : function()
			authent
		*/
	})


	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
}])



.controller('AdminController', function($scope, $http, $interval, CONSTANTS){
	function Guest(){
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
	$scope.getAll = function(){
		$http.get('/api/guest').then(function(data){
			$scope.guests = data.data;
		});
	};
	$scope.getAll();

	$scope.addGuest = function(){
		console.log("new guest : ", $scope.newGuest);
		$http.post('/api/guest', $scope.newGuest).then(function(data){
			$scope.getAll();
		});
	};

	$scope.changePresent = function(){
		$scope.newGuest.present === 1 ? $scope.newGuest.present = 0 : $scope.newGuest.present = 1; 
	}

})
.controller('AppController', function($scope){
	$scope.message = "home page !";
})
.controller('MainController', function($scope, CONSTANTS){
	$scope.weddingDate = Date.parse(CONSTANTS.weddingDate);
});
