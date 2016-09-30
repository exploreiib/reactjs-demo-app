import React from 'react';
import TestCaseActions from '../actions/TestCaseActions';

class TestCaseRow extends React.Component {
  constructor(props) {
    super(props);
	this.deleteTestCase = this.deleteTestCase.bind(this);

  }

  deleteTestCase(e){
        e.preventDefault();
        TestCaseActions.deleteTestCase(this.props.info);
  }
  
  
 render() {
	 
let delta = this.props.checkBoxRequired ? (
    <span class='checkbox'><input type='checkbox' ></input></span>    
  ) : (<span className='pull-right text-uppercase delete-button' onClick={this.deleteTestCase}>&times;</span>)
  ;
  
	 return(  
            
            <div className="panel panel-default">
                <div className="panel-heading">
                   {delta}&nbsp;{this.props.info.testcaseid}

                </div>
                <div className="panel-body">{this.props.info.description}</div>
            </div>
        )
  }
}

export default TestCaseRow;