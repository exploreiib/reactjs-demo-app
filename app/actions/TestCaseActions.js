import alt from '../alt';	
	
	
class TestCaseActions {
  constructor() {
    this.generateActions(
	  'getTestCasesSuccess',
      'getTestCasesFail',
      'addTestCaseSuccess',
      'addTestCaseFail',
      'deleteTestCaseSuccess',
      'deleteTestCaseFail'
    );
  }

getTestCases() {
	let resourceUrl = "http://localhost:3000/api/testframework/testcases";
	$.ajax({ url: resourceUrl})
      .done((data) => {
        this.actions.getTestCasesSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getTestCasesFail(jqXhr);
      });
  }
  
addTestCase(testcase) {

  var inputObject = { "_id": "TCI001",
                           "readFrom": { "_resource": testcase.inputdatasource} ,
                            "loadTo": {
                                        "_resource": testcase.inputdatatarget,
                                        "protocolHeaderOption": [
                                                        {
                                                          "_key": "Key1",
                                                          "__text": "Value1"
                                                        },
                                                        {
                                                          "_key": "Key2",
                                                          "__text": "Value2"
                                                        }
                                                      ]
                                      }
					            	  
	};

    var inputObjectData = JSON.stringify(inputObject);
    var outputObject = { "_id": "TCO002",
							"description" :"first output",
                            "expectedOutput": { "_resource":testcase.expectedoutputsource,
                                                "_count": "1",
                                                "_format": testcase.expectedoutputformat
                                              } ,
                            "comparator": "1",
											  
                            "readFrom": { "_resource": testcase.actualoutputdatasource } ,
 											  
											  
                            "loadTo": {
                                        "_resource": testcase.actualoutputdatatarget,
                                        "protocolHeaderOption": [
                                                        {
                                                          "_key": "Key1",
                                                          "__text": "Value1"
                                                        },
                                                        {
                                                          "_key": "Key2",
                                                          "__text": "Value2"
                                                        }
                                                      ]
                                      }
					            	  
						};	

    var outputObjectData = JSON.stringify(outputObject);
    var requestObject = {
                            "description": testcase.description,
                            "repeatCount": "1",
                            "waitBetweenRepeat": "500",
                            "input": inputObjectData,
                            "output": outputObjectData
						};
						
      	
	let resourceUrl = "http://localhost:3000/api/testframework/testcases";
 
    $.ajax({
      type: 'POST',
      url: resourceUrl,
      data: JSON.stringify(requestObject),
      dataType: "json",
      contentType: "application/json"

    })
      .done((data) => {
        this.actions.addTestCaseSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.addTestCaseFail(jqXhr.responseJSON.message);
      });
  }

  
  deleteTestCase(testcase) {

          	
	let resourceUrl = "http://localhost:3000/api/testframework/testcases/"+testcase._id;
 
    $.ajax({
      type: 'DELETE',
      url: resourceUrl,
	  dataType: "json"
    })
      .done((data) => {
        this.actions.deleteTestCaseSuccess(testcase);
      })
      .fail((jqXhr) => {
        this.actions.deleteTestCaseFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(TestCaseActions);