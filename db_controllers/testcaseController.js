var TestCase = require("../models/testcase");
var SequenceCounter = require("../models/sequenceCounter");

var _ = require("underscore");

var router = require("express").Router();
router.route("/testcases/:id?").get(getTestCases).post(addTestCase).delete(deleteTestCase);

function getTestCases(req, res) {
    TestCase.find(function (err, testcases) {
        if (err)
            res.send(err);
        else
            res.json(testcases);
    });
}

function addTestCase(req, res) {
	
   SequenceCounter.increment('testcase', function (err, result) {
       if (err) {
        console.error('Counter on testcase save error: ' + err); return;
      }
	   console.log('inside addTestCase and counter is: ' + result.next);
	   
	      console.log('inside addTestCase and req.body.description is: ' + req.body.description);
		   
		   	   	   console.log('inside addTestCase and req.body is: ' + req.body);
      
      var testCase = new TestCase({testcaseid: 'TCID_' + result.next,			
                                description: req.body.description, 
                                repeatCount: req.body.repeatCount, 
								waitBetweenRepeat: req.body.waitBetweenRepeat,
								input: req.body.input,
    							output: req.body.output

								});
	  console.log('Adding testCase: ' + JSON.stringify(testCase));
     //Lets save it
      testCase.save(function (err,testCase) {
          if (err) {
               console.log(err);
          }else {
               console.log('saved successfully:', testCase);
	           res.json(testCase);
         }
      });

    });  
}

function deleteTestCase(req, res) {
    var id = req.params.id;
    TestCase.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;
