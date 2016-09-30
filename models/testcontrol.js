var mongoose = require("mongoose");

var TestCaseControlSchema = new mongoose.Schema({
  testcasecontrolid : String,	
  description: String,
  testscenario: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'testcasescenario'
  } ]
});

module.exports = mongoose.model('testcasecontrol', TestCaseControlSchema);