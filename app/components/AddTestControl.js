import React from 'react';
import TestControlStore from '../stores/TestControlStore';
import TestControlActions from '../actions/TestControlActions';
import TestScenarioActions from '../actions/TestScenarioActions';
import Checkbox from './Checkbox';


						 
						 
class AddTestControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = TestControlStore.getState();
    this.onChange = this.onChange.bind(this);
	this.handleInputChange =  this.handleInputChange.bind(this);
	this.toggleCheckbox =  this.toggleCheckbox.bind(this);
	this.handleFormSubmit =  this.handleFormSubmit.bind(this);
	this.createCheckboxes =  this.createCheckboxes.bind(this);
	this.createCheckbox =  this.createCheckbox.bind(this);
  }

  componentWillMount() {
    this.selectedtestscenarios = new Set();
  }
  
  componentDidMount() {
    TestControlStore.listen(this.onChange);
    TestScenarioActions.getTestScenarios();

  }

  componentWillUnmount() {
    TestControlStore.unlisten(this.onChange);
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
    if (this.selectedtestscenarios.has(key)) {
      this.selectedtestscenarios.delete(key);
    } else {
      this.selectedtestscenarios.add(key);
    }
  }
  
  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();

    for (let checkbox of this.selectedtestscenarios) {
      console.log(checkbox, 'is selected.');
    }
	
	 var state = this.state;
      state['selectedtestscenarios'] = this.selectedtestscenarios;
      this.setState(state);
	  TestControlActions.addTestControl(this.state);

  }
  
  
  createCheckboxes() {

    return this.state.testscenarios.map(this.createCheckbox);
  }
  
  
  createCheckbox(testscenario) {
	  
    let chkBox = <Checkbox 
              handleCheckboxChange={this.toggleCheckbox}
              testElementID={testscenario._id}
              />;
    return(  
            
            <div className="panel panel-default">
                <div className="panel-heading">
                   {chkBox}&nbsp;{testscenario.testcasescenarioid}

                </div>
                <div className="panel-body">{testscenario.description}</div>
            </div>
        )			  
  }

  	
  render() {
	
	
    return (
      <div className='container'>
        <div className='row flipInX animated'>
          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Add Test Control</div>
              <div className='panel-body'>
                <form onSubmit={this.handleFormSubmit}>

				<span className='help-block'>{this.state.helpBlock}</span>
				<div className="form-group">
                    <label className="control-label" htmlFor="description">Test Control Description:</label>
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

export default AddTestControl;