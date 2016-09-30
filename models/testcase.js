var mongoose = require("mongoose");

var TestCaseSchema = new mongoose.Schema({
  testcaseid : String,	
  description: String,
  repeatCount: String,
  waitBetweenRepeat: String,
  input: String,
  output: String
});

module.exports = mongoose.model('testcase', TestCaseSchema);