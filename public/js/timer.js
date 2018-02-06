angular.module('app').directive('maaxowTimer', function(){

return {
	restrict: 'E',
	template: '<div>{{timer.days + " jours " + timer.hours + " heures " +  timer.minutes + " minutes " +  timer.seconds + " secondes"}}</div>',
	scope : {
		date : '='
	},
	controller: function($scope, $interval){
		function dateDiff(date1, date2){
			var diff = date2 - date1;
			return isNaN(diff) ? NaN : {
				diff : diff,
				ms : Math.floor(diff % 1000),
				seconds  : Math.floor(diff / 1000 % 60),
				minutes  : Math.floor(diff / 60000 % 60),
				hours  : Math.floor(diff / 3600000 % 24),
				days  : Math.floor(diff / 86400000)
			};
		}
		$interval(function(){
			var weddingDate = $scope.date,
			today = new Date();
			var diff = dateDiff(today, weddingDate);
			$scope.timer = diff;
		},1000);

	}
}

});
