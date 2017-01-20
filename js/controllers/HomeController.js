(function() {
  'use strict';

    angular.module('theWell')
    .controller('HomeController', HomeController)

    HomeController.$inject = ['$location', '$anchorScroll']

    function HomeController ($location, $anchorScroll) {
    var vm = this;

      vm.scrollTo = function(scrollLocation) {
        $location.hash(scrollLocation);
        $anchorScroll();
      }
    }

}());
