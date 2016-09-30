import React from 'react';
import TestScenarioStore from '../stores/TestScenarioStore';
import TestScenarioActions from '../actions/TestScenarioActions';
import TestCaseActions from '../actions/TestCaseActions';
import Checkbox from './Checkbox';


						 
						 
class AddTestScenario extends React.Component {
  constructor(props) {
    super(props);
    this.state = TestScenarioStore.getState();
    this.onChange = this.onChange.bind(this);
	this.handleInputChange =  this.handleInputChange.bind(this);
	this.handleFormSubmit =  this.handleFormSubmit.bind(this);
	this.toggleCheckbox =  this.toggleCheckbox.bind(this);
	this.createCheckboxes =  this.createCheckboxes.bind(this);
	this.createCheckbox =  this.createCheckbox.bind(this);
  }

  componentWillMount() {
    this.selectedtestcases = new Set();
  }
  
  componentDidMount() {
    TestScenarioStore.listen(this.onChange);
    TestCaseActions.getTestCases();

  }

  componentWillUnmount() {
    TestScenarioStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }
  
  handleInputChange(e){
	  e.preventDefault();
	  var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
  }
  
  toggleCheckbox(key) {
    if (this.selectedtestcases.has(key)) {
      this.selectedtestcases.delete(key);
    } else {
      this.selectedtestcases.add(key);
    }
  }
  
  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();

    for (let checkbox of this.selectedtestcases) {
      console.log(checkbox, 'is selected.');
    }
	
	 var state = this.state;
      state['selectedtestcases'] = this.selectedtestcases;
      this.setState(state);
	  TestScenarioActions.addTestScenario(this.state);

  }
  
  
  createCheckboxes() {

    return this.state.testcases.map(this.createCheckbox);
  }
  
  
  createCheckbox(testcase) {
	  
    let chkBox = <Checkbox 
              handleCheckboxChange={this.toggleCheckbox}
              testElementID={testcase._id}
              />;
    return(  
            
            <div className="panel panel-default">
                <div className="panel-heading">
                   {chkBox}&nbsp;{testcase.testcaseid}

                </div>
                <div className="panel-body">{testcase.description}</div>
            </div>
        )			  
  }

  	
  render() {
	
	
    return (
      <div className='container'>
        <div className='row flipInX animated'>
          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Add Test Scenario</div>
              <div className='panel-body'>
                <form onSubmit={this.handleFormSubmit}>

				<span className='help-block'>{this.state.helpBlock}</span>
				<div className="form-group">
                    <label className="control-label" htmlFor="description">Test Scenario Description:</label>
                    <input type="text" className="form-control" id="description" name="description" value={this.state.description} onChange={this.handleInputChange} placeholder="Test Scenario Description" />                    
                </div>
				<div className="form-group">
				{this.createCheckboxes()}
                </div>
				<button type='submit' className='btn btn-primary'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTestScenario;