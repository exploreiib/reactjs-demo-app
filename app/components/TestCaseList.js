import React from 'react';
import {isEqual} from 'underscore';
import TestCaseListStore from '../stores/TestCaseListStore';
import TestCaseActions from '../actions/TestCaseActions';
import TestCaseRow from './TestCaseRow';


class TestCaseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = TestCaseListStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    TestCaseListStore.listen(this.onChange);
    TestCaseActions.getTestCases();
  }

  componentWillUnmount() {
    TestCaseListStore.unlisten(this.onChange);
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.params, this.props.params)) {
      TestCaseActions.getTestCases();
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
                        this.state.testcases.map(function(s,index){
                            return(
                                <TestCaseRow info={s} key={"testcase"+index} />
                            )         
                        })
                    }
					</div>
                </div>
     );
  }
}

export default TestCaseList;