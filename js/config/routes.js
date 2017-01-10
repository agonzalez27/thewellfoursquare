
(function() {
  'use strict';

  angular.module('theWell')
    .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'js/templates/home.html'
      })
      .state('ministries', {
        url: '/ministries',
        templateUrl: 'js/templates/ministries.html'
      })
      .state('ourTeam', {
        url: '/ourteam',
        templateUrl: 'js/templates/ourTeam.html'
      })
      .state('media', {
        url: '/media',
        templateUrl: 'js/templates/media.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'js/templates/contact.html'
      })
  }
}());
