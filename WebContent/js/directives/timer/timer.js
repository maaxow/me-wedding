angular.module('app').directive('maaxowTimer', function(){

return {
	restrict: 'E',
	templateUrl: '/js/directives/timer/timer.html',
	scope : {
		date : '='
	},
	link: function(scope, ele, attr){
	},
	controller: function($scope, $interval){
		$scope.nbDigitDays = 1;
		$scope.nbDigitHours = 1;
		$scope.nbDigitMinutes = 1;
		$scope.nbDigitSeconds = 1;

		$scope.daysString = "";
		$scope.hoursString = "";
		$scope.minutesString = "";
		$scope.secondsString = "";


		function dateDiff(date1, date2){
			var diff = date2 - date1;
			return isNaN(diff) ? NaN : {
				diff : diff,
				seconds  : Math.floor(diff / 1000 % 60),
				minutes  : Math.floor(diff / 60000 % 60),
				hours  : Math.floor(diff / 3600000 % 24),
				days  : Math.floor(diff / 86400000)
			};
		}

		function updateDigit(){
			$scope.daysString = timeToString($scope.timer.days).split('');
			$scope.hoursString = timeToString($scope.timer.hours).split('');
			$scope.minutesString = timeToString($scope.timer.minutes).split('');
			$scope.secondsString = timeToString($scope.timer.seconds).split('');
			$scope.nbDigitDays = $scope.daysString.length;
			$scope.nbDigitHours = $scope.hoursString.length;
			$scope.nbDigitMinutes = $scope.minutesString.length;
			$scope.nbDigitSeconds = $scope.secondsString.length;
		}

		function setTimeString(){

			// console.log($scope.daysString, $scope.hoursString, $scope.minutesString, $scope.secondsString);
		}

		function timeToString(nb){
				return nb >= 10 ? nb + "" : "0" + nb;
		}

		$interval(function(){
			var weddingDate = $scope.date,
			today = new Date();
			var diff = dateDiff(today, weddingDate);
			$scope.timer = diff;
			updateDigit();
			setTimeString();
		},1000);

		$scope.range = function(nb){
			return new Array(nb);
		}
	}
}

});
