import React from 'react';


class Checkbox extends React.Component {
  
  constructor(props) {
    super(props);
	this.toggleCheckbox =  this.toggleCheckbox.bind(this);
	this.state = {
       isChecked: false
      };
  }

  toggleCheckbox() {
    this.setState({
      isChecked: ! this.state.isChecked
    });

    this.props.handleCheckboxChange(this.props.testElementID);
  }

  render() {
    return (
      <div className="checkbox">
        <label>
          <input type="checkbox" 
                          value={this.props.testElementID} 
                          checked={this.state.isChecked} 
                          onChange={this.toggleCheckbox} />

        </label>
      </div>
    );
  }
}
export default Checkbox;

