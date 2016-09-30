import alt from '../alt';
import TestScenarioActions from '../actions/TestScenarioActions';
import TestControlActions from '../actions/TestControlActions';

class TestControlStore {
  constructor() {
    this.bindActions(TestScenarioActions);
	this.bindActions(TestControlActions);
	this.description = '';
	this.helpBlock = '';
    this.testscenarios =  [];
  }
  
  onAddTestControlSuccess(testcontrol) {
    this.helpBlock = 'Test Control with ID:: '+ testcontrol.testcasecontrolid + ' added successfully';
  }

  onAddTestControlFail(errorMessage) {
    this.helpBlock = errorMessage;
  }
  
  onGetTestScenariosSuccess(data) {
    this.testscenarios = data;
  }
 
  onDeleteTestControlSuccess(testcontrol) {
    this.helpBlock = 'Test Control with ID:: '+ testcontrol.testcasecontrolid  + ' deleted successfully';
  }

  onDeleteTestControlFail(errorMessage) {
    this.helpBlock = errorMessage;
  }

}

export default alt.createStore(TestControlStore);