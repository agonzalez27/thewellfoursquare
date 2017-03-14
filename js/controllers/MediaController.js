  (function() {
    'use strict';

      angular.module('theWell')
      .controller('MediaController', MediaController)
      .config(function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
          'self',
          'https://www.youtube.com/**'
        ]);
      });

      MediaController.$inject = ['$http']

      function MediaController ($http) {
      var vm = this;
      vm.videos = {}
      vm.links = []

      $http({
      method: 'GET',
      url: 'http://localhost:3000/api/mediaRequest'
      }).then(function (youtubeData) {
        vm.videos = youtubeData.data
        var items = vm.videos.items
        for(var i = 0; i < items.length; i++) {
          vm.links.push(items[i].id.videoId)
        }
      }, function (response) {
        console.log(response)

      });

      vm.getIframeSrc = function(links) {
        return 'https://www.youtube.com/embed/' + links;
      };

        console.log(vm.links)

    }

  }());
