angular.module('details.service', [])
	.factory('DetailsService', function ($resource) {
		return $resource('/api/shows/:id');
	});
