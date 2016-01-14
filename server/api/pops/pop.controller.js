var express             = require("express");
var app                 = express();
var Pop                 = require("./pop.model");

function index(req,res) {
  Pop.find({}).then(function(allPops) {
    res.json(allPops);
  });
}

module.exports = {
  index     : index
  // show      : show,
  // create    : create,
  // update    : update,
  // destroy   : destroy
};
