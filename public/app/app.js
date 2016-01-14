"use strict";

(function() {
  angular
    .module('popc', [
      'ui.router',
      'pops'
    ])
    .config([
      '$stateProvider',
      Router
    ]);



    function Router($stateProvider) {
      $stateProvider
        .state('popIndex', {
          url: '/',
          templateUrl: 'app/pops/index.html',
          controller: 'PopCtrl',
          controllerAs: 'PopVM'
        });
    }
})();
