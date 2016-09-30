import React from 'react';
import TestScenarioActions from '../actions/TestScenarioActions';

class TestScenarioRow extends React.Component {
  constructor(props) {
    super(props);
	this.deleteTestScenario = this.deleteTestScenario.bind(this);

  }

  deleteTestScenario(e){
        e.preventDefault();
        TestScenarioActions.deleteTestScenario(this.props.info);

  }
  

  render() {
	 
     let delta = this.props.checkBoxRequired ? (
    <span class='checkbox'><input type='checkbox' ></input></span>    
  ) : (<span className='pull-right text-uppercase delete-button' onClick={this.deleteTestScenario}>&times;</span>)
  ;
  
	 return(  
            
            <div className="panel panel-default">
                <div className="panel-heading">
                   {delta}&nbsp;{this.props.info.testcasescenarioid}

                </div>
                <div className="panel-body">{this.props.info.description}</div>
            </div>
        )
  }
}

export default TestScenarioRow;