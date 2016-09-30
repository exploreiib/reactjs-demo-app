import React from 'react';
import TestCaseStore from '../stores/TestCaseStore';
import TestCaseActions from '../actions/TestCaseActions';


const testCaseResourceOptions = [
                            {value: 'HTTP_TESTMF1', label: 'HTTP_TESTMF1'},
                            {value:'HTTP_TESTMF2', label: 'HTTP_TESTMF2'},
                            {value: 'R062', label: 'R062'},
                            {value: 'R063', label: 'R063'},
							{value: 'R064', label: 'R064'},
							{value: 'INPUT_R2JSON', label: 'INPUT_R2JSON'},
							{value: 'OUTPUT_R2JSON', label: 'OUTPUT_R2JSON'},
							{value: 'EXPECTED_R2JSON', label: 'EXPECTED_R2JSON'},
							{value: 'R041', label: 'R041'},
							{value: 'R042', label: 'R042'},
                            {value:'R052', label: 'R052'},
                            {value: 'R043', label: 'R043'},
                            {value: 'R044', label: 'R044'},
							{value: 'R031', label: 'R031'},
							{value: 'R032', label: 'R032'},
							{value: 'R033', label: 'R033'},
							{value: 'R034', label: 'R034'},
							{value: 'R035', label: 'R035'},
							{value: 'R036', label: 'R036'},
                            {value:'R037', label: 'R037'},
                            {value: 'R038', label: 'R038'},
                            {value: 'R039', label: 'R039'},
							{value: 'R040', label: 'R040'},
                            {value: 'DEFAULT', label: 'Please Select'}

    ];

const fileFormatOptions = [
                            {value: 'XML', label: 'XML'},
                            {value:'HTTP', label: 'HTTP'},
                            {value: 'JSON', label: 'JSON'},
                            {value: 'FILE', label: 'FILE'},
                            {value: 'DEFAULT', label: 'Please Select'}

                         ];
						 
						 
class AddTestCase extends React.Component {
  constructor(props) {
    super(props);
    this.state = TestCaseStore.getState();
    this.onChange = this.onChange.bind(this);
	this.handleInputChange =  this.handleInputChange.bind(this);
	this.addTestCase =  this.addTestCase.bind(this);

  }

  componentDidMount() {
    TestCaseStore.listen(this.onChange);
  }

  componentWillUnmount() {
    TestCaseStore.unlisten(this.onChange);
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

  addTestCase(e){
	  e.preventDefault();
	  TestCaseActions.addTestCase(this.state);
  }
	
  render() {
	  
	var createItem = function (item, key) {
      return <option key={key} value={item.value}>{item.label}</option>;
    };
	
    return (
      <div className='container'>
        <div className='row flipInX animated'>
          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Add TestCase</div>
              <div className='panel-body'>
                <form onSubmit={this.addTestCase}>

				<span className='help-block'>{this.state.helpBlock}</span>
				<div className="form-group">
                    <label className="control-label" htmlFor="description">Test Case Description:</label>
                    <input type="text" className="form-control" id="description" name="description" value={this.state.description} onChange={this.handleInputChange} placeholder="Test Case Description" />                    
                </div>
				<div className="form-group">
                    <label className="control-label" htmlFor="inputdatasource">Input Data Source:</label>
					<select  className="form-control" id="inputdatasource" name="inputdatasource" value={this.state.inputdatasource} onChange={this.handleInputChange}>
					            {testCaseResourceOptions.map(createItem)}
					</select>
                </div>
               <div className="form-group">
                    <label className="control-label" htmlFor="inputdatatarget">Input Data Target:</label>
					<select  className="form-control" id="inputdatatarget" name="inputdatatarget" value={this.state.inputdatatarget} onChange={this.handleInputChange}>
					            {testCaseResourceOptions.map(createItem)}
					</select>
                </div>
				<div className="form-group">
                    <label className="control-label" htmlFor="actualoutputdatasource">Actual Output Data Source:</label>
					<select  className="form-control" id="actualoutputdatasource" name="actualoutputdatasource" value={this.state.actualoutputdatasource} onChange={this.handleInputChange}>
					            {testCaseResourceOptions.map(createItem)}
					</select>
                </div>
			    <div className="form-group">
                    <label className="control-label" htmlFor="actualoutputdatatarget">Actual Output Data Target:</label>
					<select  className="form-control" id="actualoutputdatatarget" name="actualoutputdatatarget" value={this.state.actualoutputdatatarget} onChange={this.handleInputChange}>
					            {testCaseResourceOptions.map(createItem)}
					</select>
                </div>
			    <div className="form-group">
                    <label className="control-label" htmlFor="expectedoutputsource">Actual Output Data Target:</label>
					<select  className="form-control" id="expectedoutputsource" name="expectedoutputsource" value={this.state.expectedoutputsource} onChange={this.handleInputChange}>
					            {testCaseResourceOptions.map(createItem)}
					</select>
                </div>

			    <div className="form-group">
                    <label className="control-label" htmlFor="expectedoutputformat">Actual Output Data Target:</label>
					<select  className="form-control" id="expectedoutputformat" name="expectedoutputformat" value={this.state.expectedoutputformat} onChange={this.handleInputChange}>
					            {fileFormatOptions.map(createItem)}
					</select>
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

export default AddTestCase;