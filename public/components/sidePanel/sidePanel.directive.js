'use strict';

(function() {
  angular
    .module('popc')
    .directive('sidePanel', function() {
      return {
        templateUrl: 'components/sidePanel/sidePanel.html',
        restrict: 'E',
        replace: true,
        link: function (scope, element, attrs) {
          scope.toggleMenu = function() {
            $('.button-collapse').sideNav({
                menuWidth: 300, // Default is 240
                edge: 'right', // Choose the horizontal origin
                closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
              }
            );
          };
        }
      };
    });
})();
