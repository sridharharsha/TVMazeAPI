angular.module('app',
	['ngRoute', 'ngResource', 'search.controller', 'shows.service','details.controller','details.service'])
	.filter('trustHTML', function ($sce) {
    return function (text) {
      return $sce.trustAsHtml(text);
    };
  })
	.config(['$routeProvider', '$locationProvider',
		function ($routeProvider, $locationProvider) {

			$routeProvider
				.when('/', {
					templateUrl: 'views/search.html',
					controller: 'SearchController'
				})
				.when('/shows/:id', {
          templateUrl: 'views/details.html',
          controller: 'DetailsController',
          resolve: {
            response: function ($route, DetailsService) {
              return DetailsService.get({id: $route.current.params.id});
            }
          }
        })
				.otherwise({
					redirectTo: '/'
				});

			$locationProvider.html5Mode(true);
	}]);
