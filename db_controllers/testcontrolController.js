var SequenceCounter = require("../models/sequenceCounter");
var TestScenario = require("../models/testscenario");
var TestCaseControl = require("../models/testcontrol");


var _ = require("underscore");

var router = require("express").Router();
router.route("/testcasecontrol/:id?").get(getTestControls).post(addTestControl).delete(deleteTestControl);

function getTestControls(req, res) {
    TestCaseControl.find(function (err, testscenarios) {
        if (err)
            res.send(err);
        else
            res.json(testscenarios);
    });
}

function addTestControl(req, res) {
	
   SequenceCounter.increment('testcontrol', function (err, result) {
     if (err) {
        console.error('Counter on testcontrol save error: ' + err); return;
      }
	   console.log('inside addTestControl and counter is: ' + result.next);
	 
	 TestScenario.find({
           '_id': { $in: req.body.testscenarios}
                  }, function(err, docs){
                                          console.log(docs);
	              var testCaseControl = new TestCaseControl({testcasecontrolid: 'TCTRLID_' + result.next,			
                                                               description: req.body.description, 
                                                               testscenario:  docs
                          							});
				    console.log('Adding testcontrol: ' + JSON.stringify(testCaseControl));
                    testCaseControl.save(function (err,testCaseControl) {
                                   						if (err) {
                                                                 console.log(err);
    													} else {
                                                           console.log('testcontrol saved successfully:', testCaseControl);
	                                                       res.json(testCaseControl);
                                                        }
                                         });
                  });
    }); 
}

function deleteTestControl(req, res) {
    var id = req.params.id;
    TestCaseControl.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;
