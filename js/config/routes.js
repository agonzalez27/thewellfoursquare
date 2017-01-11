
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
      .state('bibleStudy', {
        url: '/biblestudy',
        templateUrl: 'js/templates/bibleStudy.html'
      })
      .state('youth', {
        url: '/youth',
        templateUrl: 'js/templates/youth.html'
      })
      .state('kids', {
        url: '/kids',
        templateUrl: 'js/templates/kids.html'
      })
      .state('ourStory', {
        url: '/ourstory',
        templateUrl: 'js/templates/ourStory.html'
      })
      .state('values', {
        url: '/values',
        templateUrl: 'js/templates/values.html'
      })
  }
}());
