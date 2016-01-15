"use strict";

(function() {
  angular
    .module("pops")
    .controller("PopCtrl", [
      'PopFactory',
      '$stateParams',
      PopCtrl
    ]);

    function PopCtrl(PopFactory, $stateParams) {
      this.pops = PopFactory.query();
      // this.pop = PopFactory.get({id: $stateParams.id});
    }
})();
