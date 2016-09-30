import React from 'react';
import AddTestScenario from './AddTestScenario';
import TestScenarioList from './TestScenarioList';


class TestCaseScenario extends React.Component {
  
  constructor(props) {
    super(props);
  }

  
  render() {
   return(
           <div className="row">
                <div className="col-md-6">
                    <AddTestScenario />
                </div>
                <div className="col-md-6">
				<TestScenarioList />
                </div>
           </div>
       )
  }
}
export default TestCaseScenario;