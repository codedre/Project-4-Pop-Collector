'use strict';

(function() {
  angular
    .module('popc')
    .directive('sidePanel', function() {
      return {
        templateUrl: 'components/sidePanel/sidePanel.html',
        restrict: 'E',
        link: function (scope, element, attrs) {
        }
      };
    });
})();
