import React from 'react';
import {isEqual} from 'underscore';
import TestScenarioListStore from '../stores/TestScenarioListStore';
import TestScenarioActions from '../actions/TestScenarioActions';
import TestScenarioRow from './TestScenarioRow';


class TestScenarioList extends React.Component {
  constructor(props) {
    super(props);
    this.state = TestScenarioListStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    TestScenarioListStore.listen(this.onChange);
    TestScenarioActions.getTestScenarios();
  }

  componentWillUnmount() {
    TestScenarioListStore.unlisten(this.onChange);
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.params, this.props.params)) {
      TestScenarioActions.getTestScenarios();
    }
  }

  onChange(state) {
    this.setState(state);
  }

  render() {

    return (
	
	               <div className="col-md-6">
                     <div className='list-group'>
                    {
                        this.state.testscenarios.map(function(s,index){
                            return(
                                <TestScenarioRow info={s} key={"testscenario"+index} />
                            )         
                        })
                    }
					</div>
                </div>
     );
  }
}

export default TestScenarioList;