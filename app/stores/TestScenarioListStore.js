import alt from '../alt';
import TestScenarioActions from '../actions/TestScenarioActions';


class TestScenarioListStore {
  constructor() {
	this.bindActions(TestScenarioActions);
    this.testscenarios = [];
  }

  onGetTestScenariosSuccess(data) {
    this.testscenarios = data;
  }

  onGetTestScenariosFail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
  
  onAddTestScenarioSuccess(testcase) {
	  
	var newArray = this.testscenarios.slice();    
    newArray.push(testcase);   
    this.testscenarios = newArray;
  }
  
  onDeleteTestScenarioSuccess(testscenario) {
	  
	var _index;
    this.testscenarios.map(function (s, index) {
       if (s.testcasescenarioid === testscenario.testcasescenarioid) {
                _index = index;
            }
        });
        this.testscenarios.splice(_index, 1);  
	  
  }
}

export default alt.createStore(TestScenarioListStore);