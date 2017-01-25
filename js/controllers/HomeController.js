(function() {
  'use strict';

    angular.module('theWell')
    .controller('HomeController', HomeController)

    HomeController.$inject = ['$location', '$anchorScroll', '$http']

    function HomeController ($location, $anchorScroll, $http) {
    var vm = this;

      vm.scrollTo = function(scrollLocation) {
        $location.hash(scrollLocation);
        $anchorScroll();
      }

      vm.sendMail = function () {
        var data = ({
            contactName : vm.contactName,
            contactEmail : vm.contactEmail,
            contactMsg : vm.contactMsg
        });
        console.log(data)
        // Simple POST request example (passing data) :
        $http.post('http://localhost:3000/api/prayerRequest', data).
            success(function(data, status, headers, config) {
                // vm callback will be called asynchronously
                // when the response is available
                Materialize.toast('Thanks for your message ' + data.contactName + "."  + "  Our prayer team will be in conctact with you shortly.", 4000);

            }).
            error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

      };
  }



}());
