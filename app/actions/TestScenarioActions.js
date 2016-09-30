import alt from '../alt';	
	
	
class TestScenarioActions {
  constructor() {
    this.generateActions(
	  'getTestScenariosSuccess',
      'getTestScenariosFail',
	  'addTestScenarioSuccess',
      'addTestScenarioFail',
	  'deleteTestScenarioSuccess',
	  'deleteTestScenarioFail'	  
    );
  }

getTestScenarios() {

    let resourceUrl = "http://localhost:3000/api/testframework/testcasescenario";

	$.ajax({ url: resourceUrl})
      .done((data) => {
        this.actions.getTestScenariosSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getTestScenariosFail(jqXhr);
      });
}

addTestScenario(testcasescenario) {

    var requestObject = {
                            
							 "description": testcasescenario.description,
                            "testcases": Array.from(testcasescenario.selectedtestcases)
							
							
						};
						
      	
	let resourceUrl = "http://localhost:3000/api/testframework/testcasescenario";
 
    $.ajax({
      type: 'POST',
      url: resourceUrl,
      data: JSON.stringify(requestObject),
      dataType: "json",
      contentType: "application/json"

    })
      .done((data) => {
        this.actions.addTestScenarioSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.addTestScenarioFail(jqXhr.responseJSON.message);
      });
}
  
  
  
  deleteTestScenario(testscenario) {

          	
	let resourceUrl = "http://localhost:3000/api/testframework/testcasescenario/"+testscenario._id;
 
    $.ajax({
      type: 'DELETE',
      url: resourceUrl,
	  dataType: "json"
    })
      .done((data) => {
        this.actions.deleteTestScenarioSuccess(testscenario);
      })
      .fail((jqXhr) => {
        this.actions.deleteTestScenarioFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(TestScenarioActions);