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
		controller : function($scope){
			$scope.infos = [
				{
					date: '29 Juin 2019',
					hours: '14h00',
					title: 'La Cérémonie Civile',
					place: 'Mairie de Gamaches, Place du Maréchal Leclercq.',
					mapsLink: 'https://www.google.fr/maps/place/Salle+de+permanence+de+la+mairie/@49.9856914,1.5598221,18.99z/data=!4m13!1m7!3m6!1s0x47e7563ccbb081db:0x40af13e81620bc0!2s80220+Gamaches!3b1!8m2!3d49.985833!4d1.559647!3m4!1s0x47e7566b1c010a41:0x3b917a7843935342!8m2!3d49.9857549!4d1.5598038?hl=fr',
					description: 'La cérémonie civile se déroulera dans la ville où a grandi Elodie. Un grand parking se situe juste devant, alors pas de tracas pour se garer.'
				},
				{
					date: '29 Juin 2019',
					hours: '16h00',
					title: 'La Cérémonie Religieuse',
					place: 'Eglise de Gamaches, rue de Normandie',
					mapsLink: 'https://www.google.fr/maps/place/Eglise+de+GAMACHES/@49.986051,1.55554,18.99z/data=!4m13!1m7!3m6!1s0x47e7563ccbb081db:0x40af13e81620bc0!2s80220+Gamaches!3b1!8m2!3d49.985833!4d1.559647!3m4!1s0x47e7566b1af8257f:0x762ce1bbfb397435!8m2!3d49.9860658!4d1.5554935?hl=fr',
					description: ''
				},
				{
					date: '29 Juin 2019',
					hours: '18h00',
					title: 'Le Vin d\'Honneur',
					place: 'Quelque part',
					mapsLink: 'https://www.google.fr/maps/place/Somme/@49.9676227,1.7309381,9z/data=!3m1!4b1!4m5!3m4!1s0x47e7873951d7aa9f:0x30af13e81612a80!8m2!3d49.914518!4d2.2707095',
					description: ''
				},
				{
					date: '29 Juin 2019',
					hours: '20h00',
					title: 'Le Diner',
					place: 'Quelque part',
					mapsLink: 'https://www.google.fr/maps/place/Somme/@49.9676227,1.7309381,9z/data=!3m1!4b1!4m5!3m4!1s0x47e7873951d7aa9f:0x30af13e81612a80!8m2!3d49.914518!4d2.2707095',
					description: ''
				}
			];
		}
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
	.state('giftList', {
		url: '/giftList',
		templateUrl: 'views/giftList.html',
		controller: function($scope){

			$scope.calculRest = function(gift){
				var payed = 0;
				for(index in gift.participants){
					payed += gift.participants[index].amount;
				}
				var rest = gift.total-payed;
				var percent = (payed*100)/gift.total;
				$scope.progressWidth = 	{width: percent+'%'};
				return rest;
			};
			$scope.progressWidth = 	{width: '10%'};
			$scope.gifts = [
				{
					name : 'Drone DJI Mavic Air',
					description: 'On aimerait acheter un drone, pour faire de tres belle images lors de notre voyage de noces.',
					total: 1200,
					participants : [
						{
							name: 'Christine Rose',
							amount: 10
						}
					]
				},
				{
					name : 'Set de couvert',
					description: 'Des beaux sets de couverts',
					total : 150,
					participants: [
						{
							name: 'Marie-Agnes Traulet',
							amount: 100
						}
					]
				}
			]
		}
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

.controller('AppController', function($scope, $http){
	$scope.message = "home page !";


})
.controller('MainController', function($scope, CONSTANTS, $http, $interval){
	$scope.weddingDate = new Date(2019,5,29); //Date.parse(CONSTANTS.weddingDate, 'MM-dd-yyyy');
	$scope.version = "gnee";
	$http.get('/server/version').then(function(response){
		console.log("version :", response.data);
			$scope.version = response.data;
	})
})
.filter('html',function($sce){
    return function(input){
        return $sce.trustAsHtml(input);
    }
});
