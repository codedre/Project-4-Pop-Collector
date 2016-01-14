"use strict";

(function() {
  angular
    .module("pops")
    .controller("PopCtrl", [
      'PopFactory',
      PopCtrl
    ]);

    function PopCtrl(PopFactory) {
      this.pops = PopFactory.query();
    }
})();
