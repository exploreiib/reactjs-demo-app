import React from 'react';
import TestControlActions from '../actions/TestControlActions';

class TestControlRow extends React.Component {
  constructor(props) {
    super(props);
	this.deleteTestControl = this.deleteTestControl.bind(this);

  }

  deleteTestControl(e){
    e.preventDefault();
    TestControlActions.deleteTestControl(this.props.info);

  }
  

  render() {
	 
     let delta = this.props.checkBoxRequired ? (
    <span class='checkbox'><input type='checkbox' ></input></span>    
  ) : (<span className='pull-right text-uppercase delete-button' onClick={this.deleteTestControl}>&times;</span>)
  ;
  
	 return(  
            
            <div className="panel panel-default">
                <div className="panel-heading">
                   {delta}&nbsp;{this.props.info.testcasecontrolid}

                </div>
                <div className="panel-body">{this.props.info.description}</div>
            </div>
        )
  }
}

export default TestControlRow;