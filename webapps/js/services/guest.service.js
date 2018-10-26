angular.module('app.services.guest', [])

.controller('$guest', function($scope, $http, $interval, CONSTANTS){
	function Guest(){
		this.id = 0;
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

return {
	getAll : function(){
		return $http.get('/guest');
	},
	add : function(newGuest){
		return $http.post('/guest', newGuest);
	},
	update : function(guest){
		return $http.post('/guest/update', guest);
	},
	remove : function(guestId){
		return $http.post('/guest/'+guestId+'/_delete');
	},
	findByLastName = function(searchLastName){
			var body = {
				lastname : searchLastName
			}
			return $http.post('/guest/find', body);
	}
};


})
