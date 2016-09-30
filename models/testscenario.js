var mongoose = require("mongoose");

// Create a schema
var TestCaseScenarioSchema = new mongoose.Schema({
  testcasescenarioid : String,	
  description: String,
  testcase: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'testcase'
  } ]
});

module.exports = mongoose.model('testcasescenario', TestCaseScenarioSchema);