"use strict";

(function(){
  angular
    .module("pops")
    .factory("PopFactory", [
      "$resource",
      Factory
    ]);

  function Factory($resource) {
    return $resource("/api/pops/:id", {}, {
      update: {method: "PUT"}
    });
  }
})();
