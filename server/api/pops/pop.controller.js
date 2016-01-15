var express             = require("express");
var app                 = express();
var Pop                 = require("./pop.model");

function index (req, res) {
  Pop.find({}).then(function(allPops) {
    res.json(allPops);
  });
}

function show (req, res) {
  Pop.findById(req.params.id).then(function(pop) {
    res.json(pop);
  });
}

// function create (req, res) {
//   new Pop.create()
// }

function update (req, res) {
  Pop.findByIdAndUpdate(req.params.id, {
    "name": req.body.name,
    "series": req.body.series,
    "variant": req.body.variant,
    "variantOwner":req.body.variantOwner,
    "funkoLine": req.body.funkoLine,
    "lineNumber": req.body.lineNumber,
    "photoUrl": req.body.photoUrl,
    "tradingUsers": [req.body.userId]
  },
  {new: true})
  .then(function(user) {
    console.log(user);
    res.json(user);
  });
}

function destroy (req, res) {
  Pop.findByIdAndRemove( req.params.id , function(err, user) {
    if(err) {res.send(err);} else {
      res.json({success: "true"});
    }
  });
}

module.exports = {
  index     : index,
  show      : show,
  // create    : create,
  update    : update,
  destroy   : destroy
};
