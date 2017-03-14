
(function() {
  'use strict';
  angular.module('theWell', ['ui.router'])
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'https://www.youtube.com/**'
    ]);
  });


}());
