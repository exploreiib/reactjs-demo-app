var TestCase = require("../models/testcase");
var SequenceCounter = require("../models/sequenceCounter");
var TestScenario = require("../models/testscenario");


var _ = require("underscore");

var router = require("express").Router();
router.route("/testcasescenario/:id?").get(getTestScenarios).post(addTestScenario).delete(deleteTestScenario);

function getTestScenarios(req, res) {
    TestScenario.find(function (err, testscenarios) {
        if (err)
            res.send(err);
        else
            res.json(testscenarios);
    });
}

function addTestScenario(req, res) {
	
   SequenceCounter.increment('testscenario', function (err, result) {
     if (err) {
        console.error('Counter on testscenario save error: ' + err); return;
      }
	   console.log('inside addTestScenario and counter is: ' + result.next);
	 
	 TestCase.find({
           '_id': { $in: req.body.testcases}
                  }, function(err, docs){
                                          console.log(docs);
	              var testCaseScenario = new TestScenario({testcasescenarioid: 'TSID_' + result.next,			
                                                               description: req.body.description, 
                                                               testcase:  docs
                          							});
				    console.log('Adding testscenario: ' + JSON.stringify(testCaseScenario));
                    testCaseScenario.save(function (err,testCaseScenario) {
                                   						if (err) {
                                                                 console.log(err);
    													} else {
                                                           console.log('testscenario saved successfully:', testCaseScenario);
	                                                       res.json(testCaseScenario);
                                                        }
                                         });
                  });
    }); 
}

function deleteTestScenario(req, res) {
    var id = req.params.id;
    TestScenario.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;
