import alt from '../alt';
import TestScenarioActions from '../actions/TestScenarioActions';
import TestCaseActions from '../actions/TestCaseActions';

class TestScenarioStore {
  constructor() {
    this.bindActions(TestScenarioActions);
	this.bindActions(TestCaseActions);
	this.description = '';
	this.helpBlock = '';
    this.testcases =  [];
  }
  
  
  onAddTestScenarioSuccess(testscenario) {
    this.helpBlock = 'Test Screnario with ID:: '+ testscenario.testcasescenarioid + ' added successfully';
  }

  onAddTestScenarioFail(errorMessage) {
    this.helpBlock = errorMessage;
  }
  
  onGetTestCasesSuccess(data) {
    this.testcases = data;
  }

  onDeleteTestScenarioSuccess(testscenario) {
    this.helpBlock = 'Test case with ID:: '+ testscenario.testcasescenarioid + ' deleted successfully';
  }

  onDeleteTestScenarioFail(errorMessage) {
    this.helpBlock = errorMessage;
  }

}

export default alt.createStore(TestScenarioStore);