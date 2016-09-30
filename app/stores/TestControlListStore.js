import alt from '../alt';
import TestControlActions from '../actions/TestControlActions';

class TestControlListStore {
  constructor() {
    this.bindActions(TestControlActions);
    this.testcontrols = [];
  }

  onGetTestControlsSuccess(data) {
    this.testcontrols = data;
  }

  onGetTestControlsFail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
  
  onAddTestControlSuccess(testcontrol) {
	  
	var newArray = this.testcontrols.slice();    
    newArray.push(testcontrol);   
    this.testcontrols = newArray;
  }
  
  onDeleteTestControlSuccess(testcontrol) {
	  
	var _index;
    this.testcontrols.map(function (s, index) {
       if (s.testcasecontrolid === testcontrol.testcasecontrolid) {
                _index = index;
            }
        });
        this.testcontrols.splice(_index, 1);  
	  
  }
}

export default alt.createStore(TestControlListStore);