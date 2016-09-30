import React from 'react';
import AddTestControl from './AddTestControl';
import TestControlList from './TestControlList';


class TestCaseControl extends React.Component {
  
  constructor(props) {
    super(props);
  }

  
  render() {
   return(
           <div className="row">
                <div className="col-md-6">
                    <AddTestControl />
                </div>
                <div className="col-md-6">
				<TestControlList />
                </div>
           </div>
       )
  }
}
export default TestCaseControl;