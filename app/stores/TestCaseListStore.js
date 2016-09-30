import alt from '../alt';
import TestCaseActions from '../actions/TestCaseActions';


class TestCaseListStore {
  constructor() {
	this.bindActions(TestCaseActions);

    this.testcases = [];
  }

  onGetTestCasesSuccess(data) {
    this.testcases = data;
  }

  onAddTestCasesFail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
  
  onDeleteTestCaseSuccess(testcase) {
	  
	var _index;
    this.testcases.map(function (s, index) {
       if (s.testcaseid === testcase.testcaseid) {
                _index = index;
            }
        });
        this.testcases.splice(_index, 1);  
	  
  }
  
  onAddTestCaseSuccess(testcase) {
	  
	var newArray = this.testcases.slice();    
    newArray.push(testcase);   
    this.testcases = newArray;
  }
}

export default alt.createStore(TestCaseListStore);