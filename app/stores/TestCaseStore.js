import alt from '../alt';
import TestCaseActions from '../actions/TestCaseActions';

class TestCaseStore {
  constructor() {
    this.bindActions(TestCaseActions);
	this.description = '';
    this.inputdatasource = 'DEFAULT';
	this.inputdatatarget = 'DEFAULT';
    this.actualoutputdatasource = 'DEFAULT';
	this.actualoutputdatatarget = 'DEFAULT';
	this.expectedoutputsource = 'DEFAULT';
	this.expectedoutputformat = 'DEFAULT';
	this.helpBlock = '';
  }

  onAddTestCaseSuccess(testcase) {
    this.helpBlock = 'Test case with ID:: '+ testcase.testcaseid + ' added successfully';
  }

  onAddTestCaseFail(errorMessage) {
    this.helpBlock = errorMessage;
  }

  onDeleteTestCaseSuccess(testcase) {
    this.helpBlock = 'Test case with ID:: '+ testcase.testcaseid + ' deleted successfully';
  }

  onDeleteTestCaseFail(errorMessage) {
    this.helpBlock = errorMessage;
  }

}

export default alt.createStore(TestCaseStore);