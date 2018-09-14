angular.module('app').directive('progInfo', function(){

return {
	restrict: 'E',
	templateUrl: '/js/directives/progInfo/progInfo.html',
	scope: {
		date: '=',
		hours: '=',
		title: '=',
		place: '=',
		mapsLink: '=',
		description: '='
	},
	controller: function($scope, $sce){

		$scope.html = function(html){
			return $sce.trustAsHtml(html);
		};
		// console.log("date", $scope.date);
		// console.log("hours", $scope.hours);
		// console.log("title", $scope.title);
		// console.log("place", $scope.place);
		// console.log("mapsLink", $scope.mapsLink);
		// console.log("description", $scope.description);
		// console.log($sce);
	}
}

});
