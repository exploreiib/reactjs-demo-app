import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import TestCase from './components/TestCase';
import TestCaseScenario from './components/TestCaseScenario';
import TestCaseControl from './components/TestCaseControl';



export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/testcase' component={TestCase} />
    <Route path='/testcasescenario' component={TestCaseScenario} />
    <Route path='/testcasecontrol' component={TestCaseControl} />

  </Route>
);