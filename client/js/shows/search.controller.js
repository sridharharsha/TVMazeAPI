angular.module('search.controller', [])

.directive('showsDirective', function () {
	return {
		restrict: 'EA',
		scope: {
			character: '='
		},
		templateUrl: '../views/shows.html'
	}
})

	.controller('SearchController', function ($scope, showsResource) {
		$scope.getShows = function () {
			showsResource.get({
				type:'shows',
        name: $scope.searchTerm,
			}, function (response) {
				$scope.showResult = JSON.parse(response.text);
			});
		};

});
