angular.module('details.controller',[])

.directive('castDirective', function () {
	return {
		restrict: 'EA',
		scope: {
			character: '='
		},
		templateUrl: '../views/casts.html'
	}
})

	.controller('DetailsController',function ($scope, response) {
		$scope.showDetails = response;
	});
