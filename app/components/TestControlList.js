import React from 'react';
import {isEqual} from 'underscore';
import TestControlListStore from '../stores/TestControlListStore';
import TestControlActions from '../actions/TestControlActions';
import TestControlRow from './TestControlRow';


class TestControlList extends React.Component {
  constructor(props) {
    super(props);
    this.state = TestControlListStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    TestControlListStore.listen(this.onChange);
    TestControlActions.getTestControls();
  }

  componentWillUnmount() {
    TestControlListStore.unlisten(this.onChange);
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.params, this.props.params)) {
      TestControlActions.getTestControls();
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
                        this.state.testcontrols.map(function(s,index){
                            return(
                                <TestControlRow info={s} key={"testcontrol"+index} />
                            )         
                        })
                    }
					</div>
                </div>
     );
  }
}

export default TestControlList;