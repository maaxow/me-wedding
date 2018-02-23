angular.module('app', ['ui.router', 'app.controllers.admin'])

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

.controller('AppController', function($scope){
	$scope.message = "home page !";
})
.controller('MainController', function($scope, CONSTANTS){
	$scope.weddingDate = Date.parse(CONSTANTS.weddingDate);
});
