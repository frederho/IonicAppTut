angular.module('songhop.controllers')
	.controller('DiscoverCtrl', ['$scope', 'songService', function($scope, songService) {
		$scope.songs = songService.getSongs();
		$scope.currentSong = angular.copy(songService.getCurrentSong());
	}]);

