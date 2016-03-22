angular.module('shows.service', [])
	.factory('showsResource', function ($resource) {
		return $resource('/api/:type');
	});
