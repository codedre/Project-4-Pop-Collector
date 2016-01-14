var mongoose                = require("mongoose");

mongoose.connect("mongodb://localhost/popcollector");

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
