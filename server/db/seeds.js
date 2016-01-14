var mongoose              = require("mongoose");
var pops                  = require("./pops");

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/popcollector');

var db = mongoose.connection;

db.on("error", function(err){
  console.log("Oops! Mongo threw an error. Is `mongod` running?");
  console.log(err.message);
  process.exit();
});

db.once("open", function () {
  console.log("Connected to the database.");
  var Pop = require("../api/pops/pop.model");

  Pop.remove({}).then(function(){
    forEach(pops, function(popDatum){
      return new Pop(popDatum).save();
    }).then(function(){
      process.exit();
    });
  });
});

function forEach(collection, callback, index){
  if(!index) index = 0;
  return callback(collection[index]).then(function(){
    if(collection[index + 1]) return forEach(collection, callback, index + 1);
  });
}
