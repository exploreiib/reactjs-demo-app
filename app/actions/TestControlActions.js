import alt from '../alt';	
	
	
class TestControlActions {
  constructor() {
    this.generateActions(
	  'getTestControlsSuccess',
      'getTestControlsFail',
	  'addTestControlSuccess',
      'addTestControlFail',
	  'deleteTestControlSuccess',
	  'deleteTestControlFail'  
	  
    );
  }

getTestControls() {

    let resourceUrl = "http://localhost:3000/api/testframework/testcasecontrol";

	$.ajax({ url: resourceUrl})
      .done((data) => {
        this.actions.getTestControlsSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getTestControlsFail(jqXhr);
      });
  }

  addTestControl(testcasecontrol) {

    var requestObject = {
                            
						    "description": testcasecontrol.description,
                            "testscenarios": Array.from(testcasecontrol.selectedtestscenarios)
							
							
						};
						
      	
	let resourceUrl = "http://localhost:3000/api/testframework/testcasecontrol";
 
    $.ajax({
      type: 'POST',
      url: resourceUrl,
      data: JSON.stringify(requestObject),
      dataType: "json",
      contentType: "application/json"

    })
      .done((data) => {
        this.actions.addTestControlSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.addTestControlFail(jqXhr.responseJSON.message);
      });
  }  
  
  deleteTestControl(testcontrol) {

          	
	let resourceUrl = "http://localhost:3000/api/testframework/testcasecontrol/"+testcontrol._id;
 
    $.ajax({
      type: 'DELETE',
      url: resourceUrl,
	  dataType: "json"
    })
      .done((data) => {
        this.actions.deleteTestControlSuccess(testcontrol);
      })
      .fail((jqXhr) => {
        this.actions.deleteTestControlFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(TestControlActions);