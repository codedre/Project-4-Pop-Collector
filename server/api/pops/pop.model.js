var mongoose = require("mongoose");

var PopSchema = new mongoose.Schema({
  name: String,
  series: String,
  variant: String,
  variantOwner: String,
  funkoLine: String,
  lineNumber: String,
  photoUrl: String,
  tradingUsers: []
});

module.exports = mongoose.model('Pop', PopSchema);
