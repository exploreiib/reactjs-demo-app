import React from 'react';
import AddTestCase from './AddTestCase';
import TestCaseList from './TestCaseList';

class TestCase extends React.Component {
  
  constructor(props) {
    super(props);
  }

  
  render() {
   return(
           <div className="row">
                <div className="col-md-6">
                    <AddTestCase />
                </div>
                <div className="col-md-6">
		    		<TestCaseList />         
                </div>
           </div>
       )
  }
}
export default TestCase;