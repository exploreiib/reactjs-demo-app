import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }


  render() {
    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='navbar-header'>
        </div>
        <div id='navbar' className='navbar-collapse collapse'>

          <ul className='nav navbar-nav'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/testcase'>Test Case</Link></li>
            <li><Link to='/testcasescenario'>Test Case Scenario</Link></li>
			<li><Link to='/testcasecontrol'>Test Case Control</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;