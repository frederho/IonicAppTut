angular.module('songhop.controllers')
	.controller('DiscoverCtrl', ['$scope', '$timeout','songService', function($scope, $timeout, songService) {
		$scope.songs = songService.getSongs();
		$scope.currentSong = angular.copy(songService.currentSong);
				
		$scope.sendFeedback = function (bool) {
			$scope.currentSong.rated = bool;
			$scope.currentSong.hide = true;

			$timeout(function() {
				var randomSong = Math.round(Math.random() * ($scope.songs.length - 1));
				$scope.currentSong = songService.setCurrentSong(randomSong);
				console.log($scope.currentSong);
			}, 250);
		}

	}]);

