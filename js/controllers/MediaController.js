  (function() {
    'use strict';

      angular.module('theWell')
      .controller('MediaController', MediaController)


      MediaController.$inject = ['$http']

      function MediaController ($http) {
      var vm = this;
      vm.videos = {}
      vm.links = []

      $http({
      method: 'GET',
      url: 'https://thewellbackend.herokuapp.com/api/mediaRequest'
      }).then(function (youtubeData) {
        vm.videos = youtubeData.data
        var items = vm.videos.items
        for(var i = 0; i < 6 -1; i++) {
          vm.links.push(items[i].id.videoId)
        }
      }, function (response) {
        console.log(response)

      });

      vm.getIframeSrc = function(src) {
        return 'https://www.youtube.com/embed/' + src;
      };

    }

  }());
