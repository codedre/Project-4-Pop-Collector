"use strict";

(function() {
  angular
    .module('popc', [
      'ui.router',
      'pops'
    ])
    .config([
      '$stateProvider',
      '$locationProvider',
      Router
    ]);



    function Router($stateProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      
      $stateProvider
        .state('popIndex', {
          url: '/',
          templateUrl: 'app/pops/index.html',
          controller: 'PopCtrl',
          controllerAs: 'PopVM'
        });
    }
})();
