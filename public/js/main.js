angular.module('app', []).controller('AppController', function($scope, $http, $interval){


	function Guest(){
		this.firstname = '';
		this.lastname= '';
		this.email= '';
		this.phone_number= '';
		this.address= '';
		this.post_code= '';
		this.city= '';
		this.country= '';
		this.present= null;
	}
	function dateDiff( date1, date2 ) {
		var diff = date2 - date1;
		return isNaN( diff ) ? NaN : {
			diff : diff,
				ms : Math.floor(diff % 1000),
				seconds  : Math.floor(diff / 1000 % 60),
				minutes  : Math.floor(diff / 60000 % 60),
				hours  : Math.floor(diff / 3600000 % 24),
				days  : Math.floor(diff / 86400000)
		};
	}
	$interval(function(){
		var weddingDate = Date.parse('06-29-2019'),
		today = new Date();
		var diff = dateDiff(today, weddingDate);
		$scope.couldown = diff;
	},1000);

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
});
