(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterActions = function FooterActions() {
  _classCallCheck(this, FooterActions);

  this.generateActions();
};

exports.default = _alt2.default.createActions(FooterActions);

},{"../alt":6}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarActions = function NavbarActions() {
  _classCallCheck(this, NavbarActions);

  this.generateActions();
};

exports.default = _alt2.default.createActions(NavbarActions);

},{"../alt":6,"underscore":"underscore"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestCaseActions = function () {
  function TestCaseActions() {
    _classCallCheck(this, TestCaseActions);

    this.generateActions('getTestCasesSuccess', 'getTestCasesFail', 'addTestCaseSuccess', 'addTestCaseFail', 'deleteTestCaseSuccess', 'deleteTestCaseFail');
  }

  _createClass(TestCaseActions, [{
    key: 'getTestCases',
    value: function getTestCases() {
      var _this = this;

      var resourceUrl = "http://localhost:3000/api/testframework/testcases";
      $.ajax({ url: resourceUrl }).done(function (data) {
        _this.actions.getTestCasesSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.getTestCasesFail(jqXhr);
      });
    }
  }, {
    key: 'addTestCase',
    value: function addTestCase(testcase) {
      var _this2 = this;

      var inputObject = { "_id": "TCI001",
        "readFrom": { "_resource": testcase.inputdatasource },
        "loadTo": {
          "_resource": testcase.inputdatatarget,
          "protocolHeaderOption": [{
            "_key": "Key1",
            "__text": "Value1"
          }, {
            "_key": "Key2",
            "__text": "Value2"
          }]
        }

      };

      var inputObjectData = JSON.stringify(inputObject);
      var outputObject = { "_id": "TCO002",
        "description": "first output",
        "expectedOutput": { "_resource": testcase.expectedoutputsource,
          "_count": "1",
          "_format": testcase.expectedoutputformat
        },
        "comparator": "1",

        "readFrom": { "_resource": testcase.actualoutputdatasource },

        "loadTo": {
          "_resource": testcase.actualoutputdatatarget,
          "protocolHeaderOption": [{
            "_key": "Key1",
            "__text": "Value1"
          }, {
            "_key": "Key2",
            "__text": "Value2"
          }]
        }

      };

      var outputObjectData = JSON.stringify(outputObject);
      var requestObject = {
        "description": testcase.description,
        "repeatCount": "1",
        "waitBetweenRepeat": "500",
        "input": inputObjectData,
        "output": outputObjectData
      };

      var resourceUrl = "http://localhost:3000/api/testframework/testcases";

      $.ajax({
        type: 'POST',
        url: resourceUrl,
        data: JSON.stringify(requestObject),
        dataType: "json",
        contentType: "application/json"

      }).done(function (data) {
        _this2.actions.addTestCaseSuccess(data);
      }).fail(function (jqXhr) {
        _this2.actions.addTestCaseFail(jqXhr.responseJSON.message);
      });
    }
  }, {
    key: 'deleteTestCase',
    value: function deleteTestCase(testcase) {
      var _this3 = this;

      var resourceUrl = "http://localhost:3000/api/testframework/testcases/" + testcase._id;

      $.ajax({
        type: 'DELETE',
        url: resourceUrl,
        dataType: "json"
      }).done(function (data) {
        _this3.actions.deleteTestCaseSuccess(testcase);
      }).fail(function (jqXhr) {
        _this3.actions.deleteTestCaseFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return TestCaseActions;
}();

exports.default = _alt2.default.createActions(TestCaseActions);

},{"../alt":6}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestControlActions = function () {
  function TestControlActions() {
    _classCallCheck(this, TestControlActions);

    this.generateActions('getTestControlsSuccess', 'getTestControlsFail', 'addTestControlSuccess', 'addTestControlFail', 'deleteTestControlSuccess', 'deleteTestControlFail');
  }

  _createClass(TestControlActions, [{
    key: 'getTestControls',
    value: function getTestControls() {
      var _this = this;

      var resourceUrl = "http://localhost:3000/api/testframework/testcasecontrol";

      $.ajax({ url: resourceUrl }).done(function (data) {
        _this.actions.getTestControlsSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.getTestControlsFail(jqXhr);
      });
    }
  }, {
    key: 'addTestControl',
    value: function addTestControl(testcasecontrol) {
      var _this2 = this;

      var requestObject = {

        "description": testcasecontrol.description,
        "testscenarios": Array.from(testcasecontrol.selectedtestscenarios)

      };

      var resourceUrl = "http://localhost:3000/api/testframework/testcasecontrol";

      $.ajax({
        type: 'POST',
        url: resourceUrl,
        data: JSON.stringify(requestObject),
        dataType: "json",
        contentType: "application/json"

      }).done(function (data) {
        _this2.actions.addTestControlSuccess(data);
      }).fail(function (jqXhr) {
        _this2.actions.addTestControlFail(jqXhr.responseJSON.message);
      });
    }
  }, {
    key: 'deleteTestControl',
    value: function deleteTestControl(testcontrol) {
      var _this3 = this;

      var resourceUrl = "http://localhost:3000/api/testframework/testcasecontrol/" + testcontrol._id;

      $.ajax({
        type: 'DELETE',
        url: resourceUrl,
        dataType: "json"
      }).done(function (data) {
        _this3.actions.deleteTestControlSuccess(testcontrol);
      }).fail(function (jqXhr) {
        _this3.actions.deleteTestControlFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return TestControlActions;
}();

exports.default = _alt2.default.createActions(TestControlActions);

},{"../alt":6}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestScenarioActions = function () {
  function TestScenarioActions() {
    _classCallCheck(this, TestScenarioActions);

    this.generateActions('getTestScenariosSuccess', 'getTestScenariosFail', 'addTestScenarioSuccess', 'addTestScenarioFail', 'deleteTestScenarioSuccess', 'deleteTestScenarioFail');
  }

  _createClass(TestScenarioActions, [{
    key: 'getTestScenarios',
    value: function getTestScenarios() {
      var _this = this;

      var resourceUrl = "http://localhost:3000/api/testframework/testcasescenario";

      $.ajax({ url: resourceUrl }).done(function (data) {
        _this.actions.getTestScenariosSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.getTestScenariosFail(jqXhr);
      });
    }
  }, {
    key: 'addTestScenario',
    value: function addTestScenario(testcasescenario) {
      var _this2 = this;

      var requestObject = {

        "description": testcasescenario.description,
        "testcases": Array.from(testcasescenario.selectedtestcases)

      };

      var resourceUrl = "http://localhost:3000/api/testframework/testcasescenario";

      $.ajax({
        type: 'POST',
        url: resourceUrl,
        data: JSON.stringify(requestObject),
        dataType: "json",
        contentType: "application/json"

      }).done(function (data) {
        _this2.actions.addTestScenarioSuccess(data);
      }).fail(function (jqXhr) {
        _this2.actions.addTestScenarioFail(jqXhr.responseJSON.message);
      });
    }
  }, {
    key: 'deleteTestScenario',
    value: function deleteTestScenario(testscenario) {
      var _this3 = this;

      var resourceUrl = "http://localhost:3000/api/testframework/testcasescenario/" + testscenario._id;

      $.ajax({
        type: 'DELETE',
        url: resourceUrl,
        dataType: "json"
      }).done(function (data) {
        _this3.actions.deleteTestScenarioSuccess(testscenario);
      }).fail(function (jqXhr) {
        _this3.actions.deleteTestScenarioFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return TestScenarioActions;
}();

exports.default = _alt2.default.createActions(TestScenarioActions);

},{"../alt":6}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TestCaseStore = require('../stores/TestCaseStore');

var _TestCaseStore2 = _interopRequireDefault(_TestCaseStore);

var _TestCaseActions = require('../actions/TestCaseActions');

var _TestCaseActions2 = _interopRequireDefault(_TestCaseActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var testCaseResourceOptions = [{ value: 'HTTP_TESTMF1', label: 'HTTP_TESTMF1' }, { value: 'HTTP_TESTMF2', label: 'HTTP_TESTMF2' }, { value: 'R062', label: 'R062' }, { value: 'R063', label: 'R063' }, { value: 'R064', label: 'R064' }, { value: 'INPUT_R2JSON', label: 'INPUT_R2JSON' }, { value: 'OUTPUT_R2JSON', label: 'OUTPUT_R2JSON' }, { value: 'EXPECTED_R2JSON', label: 'EXPECTED_R2JSON' }, { value: 'R041', label: 'R041' }, { value: 'R042', label: 'R042' }, { value: 'R052', label: 'R052' }, { value: 'R043', label: 'R043' }, { value: 'R044', label: 'R044' }, { value: 'R031', label: 'R031' }, { value: 'R032', label: 'R032' }, { value: 'R033', label: 'R033' }, { value: 'R034', label: 'R034' }, { value: 'R035', label: 'R035' }, { value: 'R036', label: 'R036' }, { value: 'R037', label: 'R037' }, { value: 'R038', label: 'R038' }, { value: 'R039', label: 'R039' }, { value: 'R040', label: 'R040' }, { value: 'DEFAULT', label: 'Please Select' }];

var fileFormatOptions = [{ value: 'XML', label: 'XML' }, { value: 'HTTP', label: 'HTTP' }, { value: 'JSON', label: 'JSON' }, { value: 'FILE', label: 'FILE' }, { value: 'DEFAULT', label: 'Please Select' }];

var AddTestCase = function (_React$Component) {
  _inherits(AddTestCase, _React$Component);

  function AddTestCase(props) {
    _classCallCheck(this, AddTestCase);

    var _this = _possibleConstructorReturn(this, (AddTestCase.__proto__ || Object.getPrototypeOf(AddTestCase)).call(this, props));

    _this.state = _TestCaseStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.addTestCase = _this.addTestCase.bind(_this);

    return _this;
  }

  _createClass(AddTestCase, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _TestCaseStore2.default.listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _TestCaseStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    }
  }, {
    key: 'addTestCase',
    value: function addTestCase(e) {
      e.preventDefault();
      _TestCaseActions2.default.addTestCase(this.state);
    }
  }, {
    key: 'render',
    value: function render() {

      var createItem = function createItem(item, key) {
        return _react2.default.createElement(
          'option',
          { key: key, value: item.value },
          item.label
        );
      };

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row flipInX animated' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-8' },
            _react2.default.createElement(
              'div',
              { className: 'panel panel-default' },
              _react2.default.createElement(
                'div',
                { className: 'panel-heading' },
                'Add TestCase'
              ),
              _react2.default.createElement(
                'div',
                { className: 'panel-body' },
                _react2.default.createElement(
                  'form',
                  { onSubmit: this.addTestCase },
                  _react2.default.createElement(
                    'span',
                    { className: 'help-block' },
                    this.state.helpBlock
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label', htmlFor: 'description' },
                      'Test Case Description:'
                    ),
                    _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'description', name: 'description', value: this.state.description, onChange: this.handleInputChange, placeholder: 'Test Case Description' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label', htmlFor: 'inputdatasource' },
                      'Input Data Source:'
                    ),
                    _react2.default.createElement(
                      'select',
                      { className: 'form-control', id: 'inputdatasource', name: 'inputdatasource', value: this.state.inputdatasource, onChange: this.handleInputChange },
                      testCaseResourceOptions.map(createItem)
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label', htmlFor: 'inputdatatarget' },
                      'Input Data Target:'
                    ),
                    _react2.default.createElement(
                      'select',
                      { className: 'form-control', id: 'inputdatatarget', name: 'inputdatatarget', value: this.state.inputdatatarget, onChange: this.handleInputChange },
                      testCaseResourceOptions.map(createItem)
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label', htmlFor: 'actualoutputdatasource' },
                      'Actual Output Data Source:'
                    ),
                    _react2.default.createElement(
                      'select',
                      { className: 'form-control', id: 'actualoutputdatasource', name: 'actualoutputdatasource', value: this.state.actualoutputdatasource, onChange: this.handleInputChange },
                      testCaseResourceOptions.map(createItem)
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label', htmlFor: 'actualoutputdatatarget' },
                      'Actual Output Data Target:'
                    ),
                    _react2.default.createElement(
                      'select',
                      { className: 'form-control', id: 'actualoutputdatatarget', name: 'actualoutputdatatarget', value: this.state.actualoutputdatatarget, onChange: this.handleInputChange },
                      testCaseResourceOptions.map(createItem)
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label', htmlFor: 'expectedoutputsource' },
                      'Actual Output Data Target:'
                    ),
                    _react2.default.createElement(
                      'select',
                      { className: 'form-control', id: 'expectedoutputsource', name: 'expectedoutputsource', value: this.state.expectedoutputsource, onChange: this.handleInputChange },
                      testCaseResourceOptions.map(createItem)
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label', htmlFor: 'expectedoutputformat' },
                      'Actual Output Data Target:'
                    ),
                    _react2.default.createElement(
                      'select',
                      { className: 'form-control', id: 'expectedoutputformat', name: 'expectedoutputformat', value: this.state.expectedoutputformat, onChange: this.handleInputChange },
                      fileFormatOptions.map(createItem)
                    )
                  ),
                  _react2.default.createElement(
                    'button',
                    { type: 'submit', className: 'btn btn-primary' },
                    'Submit'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return AddTestCase;
}(_react2.default.Component);

exports.default = AddTestCase;

},{"../actions/TestCaseActions":3,"../stores/TestCaseStore":29,"react":"react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TestControlStore = require('../stores/TestControlStore');

var _TestControlStore2 = _interopRequireDefault(_TestControlStore);

var _TestControlActions = require('../actions/TestControlActions');

var _TestControlActions2 = _interopRequireDefault(_TestControlActions);

var _TestScenarioActions = require('../actions/TestScenarioActions');

var _TestScenarioActions2 = _interopRequireDefault(_TestScenarioActions);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddTestControl = function (_React$Component) {
  _inherits(AddTestControl, _React$Component);

  function AddTestControl(props) {
    _classCallCheck(this, AddTestControl);

    var _this = _possibleConstructorReturn(this, (AddTestControl.__proto__ || Object.getPrototypeOf(AddTestControl)).call(this, props));

    _this.state = _TestControlStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.toggleCheckbox = _this.toggleCheckbox.bind(_this);
    _this.handleFormSubmit = _this.handleFormSubmit.bind(_this);
    _this.createCheckboxes = _this.createCheckboxes.bind(_this);
    _this.createCheckbox = _this.createCheckbox.bind(_this);
    return _this;
  }

  _createClass(AddTestControl, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.selectedtestscenarios = new Set();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _TestControlStore2.default.listen(this.onChange);
      _TestScenarioActions2.default.getTestScenarios();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _TestControlStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    }
  }, {
    key: 'toggleCheckbox',
    value: function toggleCheckbox(key) {
      if (this.selectedtestscenarios.has(key)) {
        this.selectedtestscenarios.delete(key);
      } else {
        this.selectedtestscenarios.add(key);
      }
    }
  }, {
    key: 'handleFormSubmit',
    value: function handleFormSubmit(formSubmitEvent) {
      formSubmitEvent.preventDefault();

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.selectedtestscenarios[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var checkbox = _step.value;

          console.log(checkbox, 'is selected.');
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var state = this.state;
      state['selectedtestscenarios'] = this.selectedtestscenarios;
      this.setState(state);
      _TestControlActions2.default.addTestControl(this.state);
    }
  }, {
    key: 'createCheckboxes',
    value: function createCheckboxes() {

      return this.state.testscenarios.map(this.createCheckbox);
    }
  }, {
    key: 'createCheckbox',
    value: function createCheckbox(testscenario) {

      var chkBox = _react2.default.createElement(_Checkbox2.default, {
        handleCheckboxChange: this.toggleCheckbox,
        testElementID: testscenario._id
      });
      return _react2.default.createElement(
        'div',
        { className: 'panel panel-default' },
        _react2.default.createElement(
          'div',
          { className: 'panel-heading' },
          chkBox,
          ' ',
          testscenario.testcasescenarioid
        ),
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          testscenario.description
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row flipInX animated' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-8' },
            _react2.default.createElement(
              'div',
              { className: 'panel panel-default' },
              _react2.default.createElement(
                'div',
                { className: 'panel-heading' },
                'Add Test Control'
              ),
              _react2.default.createElement(
                'div',
                { className: 'panel-body' },
                _react2.default.createElement(
                  'form',
                  { onSubmit: this.handleFormSubmit },
                  _react2.default.createElement(
                    'span',
                    { className: 'help-block' },
                    this.state.helpBlock
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label', htmlFor: 'description' },
                      'Test Control Description:'
                    ),
                    _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'description', name: 'description', value: this.state.description, onChange: this.handleInputChange, placeholder: 'Test Scenario Description' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    this.createCheckboxes()
                  ),
                  _react2.default.createElement(
                    'button',
                    { type: 'submit', className: 'btn btn-primary' },
                    'Submit'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return AddTestControl;
}(_react2.default.Component);

exports.default = AddTestControl;

},{"../actions/TestControlActions":4,"../actions/TestScenarioActions":5,"../stores/TestControlStore":31,"./Checkbox":11,"react":"react"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TestScenarioStore = require('../stores/TestScenarioStore');

var _TestScenarioStore2 = _interopRequireDefault(_TestScenarioStore);

var _TestScenarioActions = require('../actions/TestScenarioActions');

var _TestScenarioActions2 = _interopRequireDefault(_TestScenarioActions);

var _TestCaseActions = require('../actions/TestCaseActions');

var _TestCaseActions2 = _interopRequireDefault(_TestCaseActions);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddTestScenario = function (_React$Component) {
  _inherits(AddTestScenario, _React$Component);

  function AddTestScenario(props) {
    _classCallCheck(this, AddTestScenario);

    var _this = _possibleConstructorReturn(this, (AddTestScenario.__proto__ || Object.getPrototypeOf(AddTestScenario)).call(this, props));

    _this.state = _TestScenarioStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleFormSubmit = _this.handleFormSubmit.bind(_this);
    _this.toggleCheckbox = _this.toggleCheckbox.bind(_this);
    _this.createCheckboxes = _this.createCheckboxes.bind(_this);
    _this.createCheckbox = _this.createCheckbox.bind(_this);
    return _this;
  }

  _createClass(AddTestScenario, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.selectedtestcases = new Set();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _TestScenarioStore2.default.listen(this.onChange);
      _TestCaseActions2.default.getTestCases();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _TestScenarioStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    }
  }, {
    key: 'toggleCheckbox',
    value: function toggleCheckbox(key) {
      if (this.selectedtestcases.has(key)) {
        this.selectedtestcases.delete(key);
      } else {
        this.selectedtestcases.add(key);
      }
    }
  }, {
    key: 'handleFormSubmit',
    value: function handleFormSubmit(formSubmitEvent) {
      formSubmitEvent.preventDefault();

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.selectedtestcases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var checkbox = _step.value;

          console.log(checkbox, 'is selected.');
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var state = this.state;
      state['selectedtestcases'] = this.selectedtestcases;
      this.setState(state);
      _TestScenarioActions2.default.addTestScenario(this.state);
    }
  }, {
    key: 'createCheckboxes',
    value: function createCheckboxes() {

      return this.state.testcases.map(this.createCheckbox);
    }
  }, {
    key: 'createCheckbox',
    value: function createCheckbox(testcase) {

      var chkBox = _react2.default.createElement(_Checkbox2.default, {
        handleCheckboxChange: this.toggleCheckbox,
        testElementID: testcase._id
      });
      return _react2.default.createElement(
        'div',
        { className: 'panel panel-default' },
        _react2.default.createElement(
          'div',
          { className: 'panel-heading' },
          chkBox,
          ' ',
          testcase.testcaseid
        ),
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          testcase.description
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row flipInX animated' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-8' },
            _react2.default.createElement(
              'div',
              { className: 'panel panel-default' },
              _react2.default.createElement(
                'div',
                { className: 'panel-heading' },
                'Add Test Scenario'
              ),
              _react2.default.createElement(
                'div',
                { className: 'panel-body' },
                _react2.default.createElement(
                  'form',
                  { onSubmit: this.handleFormSubmit },
                  _react2.default.createElement(
                    'span',
                    { className: 'help-block' },
                    this.state.helpBlock
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label', htmlFor: 'description' },
                      'Test Scenario Description:'
                    ),
                    _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'description', name: 'description', value: this.state.description, onChange: this.handleInputChange, placeholder: 'Test Scenario Description' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    this.createCheckboxes()
                  ),
                  _react2.default.createElement(
                    'button',
                    { type: 'submit', className: 'btn btn-primary' },
                    'Submit'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return AddTestScenario;
}(_react2.default.Component);

exports.default = AddTestScenario;

},{"../actions/TestCaseActions":3,"../actions/TestScenarioActions":5,"../stores/TestScenarioStore":33,"./Checkbox":11,"react":"react"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navbar2.default, { history: this.props.history }),
        this.props.children,
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

},{"./Footer":12,"./Navbar":14,"react":"react"}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _this.toggleCheckbox = _this.toggleCheckbox.bind(_this);
    _this.state = {
      isChecked: false
    };
    return _this;
  }

  _createClass(Checkbox, [{
    key: "toggleCheckbox",
    value: function toggleCheckbox() {
      this.setState({
        isChecked: !this.state.isChecked
      });

      this.props.handleCheckboxChange(this.props.testElementID);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "checkbox" },
        _react2.default.createElement(
          "label",
          null,
          _react2.default.createElement("input", { type: "checkbox",
            value: this.props.testElementID,
            checked: this.state.isChecked,
            onChange: this.toggleCheckbox })
        )
      );
    }
  }]);

  return Checkbox;
}(_react2.default.Component);

exports.default = Checkbox;

},{"react":"react"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _FooterStore = require('../stores/FooterStore');

var _FooterStore2 = _interopRequireDefault(_FooterStore);

var _FooterActions = require('../actions/FooterActions');

var _FooterActions2 = _interopRequireDefault(_FooterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

    _this.state = _FooterStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Footer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _FooterStore2.default.listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _FooterStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'footer',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-5' },
              _react2.default.createElement(
                'h3',
                { className: 'lead' },
                _react2.default.createElement(
                  'strong',
                  null,
                  'Functional Test Framework Footer'
                )
              )
            ),
            _react2.default.createElement('div', { className: 'col-sm-7 hidden-xs' })
          )
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;

},{"../actions/FooterActions":1,"../stores/FooterStore":26,"react":"react","react-router":"react-router"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'alert alert-info' },
        'Hello from Home Component'
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;

},{"react":"react"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _NavbarStore = require('../stores/NavbarStore');

var _NavbarStore2 = _interopRequireDefault(_NavbarStore);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

    _this.state = _NavbarStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _NavbarStore2.default.listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _NavbarStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: 'navbar navbar-default navbar-static-top' },
        _react2.default.createElement('div', { className: 'navbar-header' }),
        _react2.default.createElement(
          'div',
          { id: 'navbar', className: 'navbar-collapse collapse' },
          _react2.default.createElement(
            'ul',
            { className: 'nav navbar-nav' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/' },
                'Home'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/testcase' },
                'Test Case'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/testcasescenario' },
                'Test Case Scenario'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/testcasecontrol' },
                'Test Case Control'
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

},{"../actions/NavbarActions":2,"../stores/NavbarStore":27,"react":"react","react-router":"react-router"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddTestCase = require('./AddTestCase');

var _AddTestCase2 = _interopRequireDefault(_AddTestCase);

var _TestCaseList = require('./TestCaseList');

var _TestCaseList2 = _interopRequireDefault(_TestCaseList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestCase = function (_React$Component) {
  _inherits(TestCase, _React$Component);

  function TestCase(props) {
    _classCallCheck(this, TestCase);

    return _possibleConstructorReturn(this, (TestCase.__proto__ || Object.getPrototypeOf(TestCase)).call(this, props));
  }

  _createClass(TestCase, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-6' },
          _react2.default.createElement(_AddTestCase2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-6' },
          _react2.default.createElement(_TestCaseList2.default, null)
        )
      );
    }
  }]);

  return TestCase;
}(_react2.default.Component);

exports.default = TestCase;

},{"./AddTestCase":7,"./TestCaseList":17,"react":"react"}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddTestControl = require('./AddTestControl');

var _AddTestControl2 = _interopRequireDefault(_AddTestControl);

var _TestControlList = require('./TestControlList');

var _TestControlList2 = _interopRequireDefault(_TestControlList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestCaseControl = function (_React$Component) {
  _inherits(TestCaseControl, _React$Component);

  function TestCaseControl(props) {
    _classCallCheck(this, TestCaseControl);

    return _possibleConstructorReturn(this, (TestCaseControl.__proto__ || Object.getPrototypeOf(TestCaseControl)).call(this, props));
  }

  _createClass(TestCaseControl, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-6' },
          _react2.default.createElement(_AddTestControl2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-6' },
          _react2.default.createElement(_TestControlList2.default, null)
        )
      );
    }
  }]);

  return TestCaseControl;
}(_react2.default.Component);

exports.default = TestCaseControl;

},{"./AddTestControl":8,"./TestControlList":20,"react":"react"}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _TestCaseListStore = require('../stores/TestCaseListStore');

var _TestCaseListStore2 = _interopRequireDefault(_TestCaseListStore);

var _TestCaseActions = require('../actions/TestCaseActions');

var _TestCaseActions2 = _interopRequireDefault(_TestCaseActions);

var _TestCaseRow = require('./TestCaseRow');

var _TestCaseRow2 = _interopRequireDefault(_TestCaseRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestCaseList = function (_React$Component) {
  _inherits(TestCaseList, _React$Component);

  function TestCaseList(props) {
    _classCallCheck(this, TestCaseList);

    var _this = _possibleConstructorReturn(this, (TestCaseList.__proto__ || Object.getPrototypeOf(TestCaseList)).call(this, props));

    _this.state = _TestCaseListStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(TestCaseList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _TestCaseListStore2.default.listen(this.onChange);
      _TestCaseActions2.default.getTestCases();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _TestCaseListStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (!(0, _underscore.isEqual)(prevProps.params, this.props.params)) {
        _TestCaseActions2.default.getTestCases();
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'col-md-6' },
        _react2.default.createElement(
          'div',
          { className: 'list-group' },
          this.state.testcases.map(function (s, index) {
            return _react2.default.createElement(_TestCaseRow2.default, { info: s, key: "testcase" + index });
          })
        )
      );
    }
  }]);

  return TestCaseList;
}(_react2.default.Component);

exports.default = TestCaseList;

},{"../actions/TestCaseActions":3,"../stores/TestCaseListStore":28,"./TestCaseRow":18,"react":"react","underscore":"underscore"}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TestCaseActions = require('../actions/TestCaseActions');

var _TestCaseActions2 = _interopRequireDefault(_TestCaseActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestCaseRow = function (_React$Component) {
  _inherits(TestCaseRow, _React$Component);

  function TestCaseRow(props) {
    _classCallCheck(this, TestCaseRow);

    var _this = _possibleConstructorReturn(this, (TestCaseRow.__proto__ || Object.getPrototypeOf(TestCaseRow)).call(this, props));

    _this.deleteTestCase = _this.deleteTestCase.bind(_this);

    return _this;
  }

  _createClass(TestCaseRow, [{
    key: 'deleteTestCase',
    value: function deleteTestCase(e) {
      e.preventDefault();
      _TestCaseActions2.default.deleteTestCase(this.props.info);
    }
  }, {
    key: 'render',
    value: function render() {

      var delta = this.props.checkBoxRequired ? _react2.default.createElement(
        'span',
        { 'class': 'checkbox' },
        _react2.default.createElement('input', { type: 'checkbox' })
      ) : _react2.default.createElement(
        'span',
        { className: 'pull-right text-uppercase delete-button', onClick: this.deleteTestCase },
        '×'
      );

      return _react2.default.createElement(
        'div',
        { className: 'panel panel-default' },
        _react2.default.createElement(
          'div',
          { className: 'panel-heading' },
          delta,
          ' ',
          this.props.info.testcaseid
        ),
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          this.props.info.description
        )
      );
    }
  }]);

  return TestCaseRow;
}(_react2.default.Component);

exports.default = TestCaseRow;

},{"../actions/TestCaseActions":3,"react":"react"}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddTestScenario = require('./AddTestScenario');

var _AddTestScenario2 = _interopRequireDefault(_AddTestScenario);

var _TestScenarioList = require('./TestScenarioList');

var _TestScenarioList2 = _interopRequireDefault(_TestScenarioList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestCaseScenario = function (_React$Component) {
  _inherits(TestCaseScenario, _React$Component);

  function TestCaseScenario(props) {
    _classCallCheck(this, TestCaseScenario);

    return _possibleConstructorReturn(this, (TestCaseScenario.__proto__ || Object.getPrototypeOf(TestCaseScenario)).call(this, props));
  }

  _createClass(TestCaseScenario, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-6' },
          _react2.default.createElement(_AddTestScenario2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-6' },
          _react2.default.createElement(_TestScenarioList2.default, null)
        )
      );
    }
  }]);

  return TestCaseScenario;
}(_react2.default.Component);

exports.default = TestCaseScenario;

},{"./AddTestScenario":9,"./TestScenarioList":22,"react":"react"}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _TestControlListStore = require('../stores/TestControlListStore');

var _TestControlListStore2 = _interopRequireDefault(_TestControlListStore);

var _TestControlActions = require('../actions/TestControlActions');

var _TestControlActions2 = _interopRequireDefault(_TestControlActions);

var _TestControlRow = require('./TestControlRow');

var _TestControlRow2 = _interopRequireDefault(_TestControlRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestControlList = function (_React$Component) {
  _inherits(TestControlList, _React$Component);

  function TestControlList(props) {
    _classCallCheck(this, TestControlList);

    var _this = _possibleConstructorReturn(this, (TestControlList.__proto__ || Object.getPrototypeOf(TestControlList)).call(this, props));

    _this.state = _TestControlListStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(TestControlList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _TestControlListStore2.default.listen(this.onChange);
      _TestControlActions2.default.getTestControls();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _TestControlListStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (!(0, _underscore.isEqual)(prevProps.params, this.props.params)) {
        _TestControlActions2.default.getTestControls();
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'col-md-6' },
        _react2.default.createElement(
          'div',
          { className: 'list-group' },
          this.state.testcontrols.map(function (s, index) {
            return _react2.default.createElement(_TestControlRow2.default, { info: s, key: "testcontrol" + index });
          })
        )
      );
    }
  }]);

  return TestControlList;
}(_react2.default.Component);

exports.default = TestControlList;

},{"../actions/TestControlActions":4,"../stores/TestControlListStore":30,"./TestControlRow":21,"react":"react","underscore":"underscore"}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TestControlActions = require('../actions/TestControlActions');

var _TestControlActions2 = _interopRequireDefault(_TestControlActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestControlRow = function (_React$Component) {
  _inherits(TestControlRow, _React$Component);

  function TestControlRow(props) {
    _classCallCheck(this, TestControlRow);

    var _this = _possibleConstructorReturn(this, (TestControlRow.__proto__ || Object.getPrototypeOf(TestControlRow)).call(this, props));

    _this.deleteTestControl = _this.deleteTestControl.bind(_this);

    return _this;
  }

  _createClass(TestControlRow, [{
    key: 'deleteTestControl',
    value: function deleteTestControl(e) {
      e.preventDefault();
      _TestControlActions2.default.deleteTestControl(this.props.info);
    }
  }, {
    key: 'render',
    value: function render() {

      var delta = this.props.checkBoxRequired ? _react2.default.createElement(
        'span',
        { 'class': 'checkbox' },
        _react2.default.createElement('input', { type: 'checkbox' })
      ) : _react2.default.createElement(
        'span',
        { className: 'pull-right text-uppercase delete-button', onClick: this.deleteTestControl },
        '×'
      );

      return _react2.default.createElement(
        'div',
        { className: 'panel panel-default' },
        _react2.default.createElement(
          'div',
          { className: 'panel-heading' },
          delta,
          ' ',
          this.props.info.testcasecontrolid
        ),
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          this.props.info.description
        )
      );
    }
  }]);

  return TestControlRow;
}(_react2.default.Component);

exports.default = TestControlRow;

},{"../actions/TestControlActions":4,"react":"react"}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _TestScenarioListStore = require('../stores/TestScenarioListStore');

var _TestScenarioListStore2 = _interopRequireDefault(_TestScenarioListStore);

var _TestScenarioActions = require('../actions/TestScenarioActions');

var _TestScenarioActions2 = _interopRequireDefault(_TestScenarioActions);

var _TestScenarioRow = require('./TestScenarioRow');

var _TestScenarioRow2 = _interopRequireDefault(_TestScenarioRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestScenarioList = function (_React$Component) {
  _inherits(TestScenarioList, _React$Component);

  function TestScenarioList(props) {
    _classCallCheck(this, TestScenarioList);

    var _this = _possibleConstructorReturn(this, (TestScenarioList.__proto__ || Object.getPrototypeOf(TestScenarioList)).call(this, props));

    _this.state = _TestScenarioListStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(TestScenarioList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _TestScenarioListStore2.default.listen(this.onChange);
      _TestScenarioActions2.default.getTestScenarios();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _TestScenarioListStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (!(0, _underscore.isEqual)(prevProps.params, this.props.params)) {
        _TestScenarioActions2.default.getTestScenarios();
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'col-md-6' },
        _react2.default.createElement(
          'div',
          { className: 'list-group' },
          this.state.testscenarios.map(function (s, index) {
            return _react2.default.createElement(_TestScenarioRow2.default, { info: s, key: "testscenario" + index });
          })
        )
      );
    }
  }]);

  return TestScenarioList;
}(_react2.default.Component);

exports.default = TestScenarioList;

},{"../actions/TestScenarioActions":5,"../stores/TestScenarioListStore":32,"./TestScenarioRow":23,"react":"react","underscore":"underscore"}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TestScenarioActions = require('../actions/TestScenarioActions');

var _TestScenarioActions2 = _interopRequireDefault(_TestScenarioActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestScenarioRow = function (_React$Component) {
  _inherits(TestScenarioRow, _React$Component);

  function TestScenarioRow(props) {
    _classCallCheck(this, TestScenarioRow);

    var _this = _possibleConstructorReturn(this, (TestScenarioRow.__proto__ || Object.getPrototypeOf(TestScenarioRow)).call(this, props));

    _this.deleteTestScenario = _this.deleteTestScenario.bind(_this);

    return _this;
  }

  _createClass(TestScenarioRow, [{
    key: 'deleteTestScenario',
    value: function deleteTestScenario(e) {
      e.preventDefault();
      _TestScenarioActions2.default.deleteTestScenario(this.props.info);
    }
  }, {
    key: 'render',
    value: function render() {

      var delta = this.props.checkBoxRequired ? _react2.default.createElement(
        'span',
        { 'class': 'checkbox' },
        _react2.default.createElement('input', { type: 'checkbox' })
      ) : _react2.default.createElement(
        'span',
        { className: 'pull-right text-uppercase delete-button', onClick: this.deleteTestScenario },
        '×'
      );

      return _react2.default.createElement(
        'div',
        { className: 'panel panel-default' },
        _react2.default.createElement(
          'div',
          { className: 'panel-heading' },
          delta,
          ' ',
          this.props.info.testcasescenarioid
        ),
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          this.props.info.description
        )
      );
    }
  }]);

  return TestScenarioRow;
}(_react2.default.Component);

exports.default = TestScenarioRow;

},{"../actions/TestScenarioActions":5,"react":"react"}],24:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter2.default,
  { history: history },
  _routes2.default
), document.getElementById('app'));

},{"./routes":25,"history/lib/createBrowserHistory":40,"react":"react","react-dom":"react-dom","react-router":"react-router"}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _TestCase = require('./components/TestCase');

var _TestCase2 = _interopRequireDefault(_TestCase);

var _TestCaseScenario = require('./components/TestCaseScenario');

var _TestCaseScenario2 = _interopRequireDefault(_TestCaseScenario);

var _TestCaseControl = require('./components/TestCaseControl');

var _TestCaseControl2 = _interopRequireDefault(_TestCaseControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { component: _App2.default },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/testcase', component: _TestCase2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/testcasescenario', component: _TestCaseScenario2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/testcasecontrol', component: _TestCaseControl2.default })
);

},{"./components/App":10,"./components/Home":13,"./components/TestCase":15,"./components/TestCaseControl":16,"./components/TestCaseScenario":19,"react":"react","react-router":"react-router"}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _FooterActions = require('../actions/FooterActions');

var _FooterActions2 = _interopRequireDefault(_FooterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterStore = function FooterStore() {
  _classCallCheck(this, FooterStore);

  this.bindActions(_FooterActions2.default);
};

exports.default = _alt2.default.createStore(FooterStore);

},{"../actions/FooterActions":1,"../alt":6}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarStore = function NavbarStore() {
  _classCallCheck(this, NavbarStore);

  this.bindActions(_NavbarActions2.default);
};

exports.default = _alt2.default.createStore(NavbarStore);

},{"../actions/NavbarActions":2,"../alt":6}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _TestCaseActions = require('../actions/TestCaseActions');

var _TestCaseActions2 = _interopRequireDefault(_TestCaseActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestCaseListStore = function () {
  function TestCaseListStore() {
    _classCallCheck(this, TestCaseListStore);

    this.bindActions(_TestCaseActions2.default);

    this.testcases = [];
  }

  _createClass(TestCaseListStore, [{
    key: 'onGetTestCasesSuccess',
    value: function onGetTestCasesSuccess(data) {
      this.testcases = data;
    }
  }, {
    key: 'onAddTestCasesFail',
    value: function onAddTestCasesFail(jqXhr) {
      toastr.error(jqXhr.responseJSON.message);
    }
  }, {
    key: 'onDeleteTestCaseSuccess',
    value: function onDeleteTestCaseSuccess(testcase) {

      var _index;
      this.testcases.map(function (s, index) {
        if (s.testcaseid === testcase.testcaseid) {
          _index = index;
        }
      });
      this.testcases.splice(_index, 1);
    }
  }, {
    key: 'onAddTestCaseSuccess',
    value: function onAddTestCaseSuccess(testcase) {

      var newArray = this.testcases.slice();
      newArray.push(testcase);
      this.testcases = newArray;
    }
  }]);

  return TestCaseListStore;
}();

exports.default = _alt2.default.createStore(TestCaseListStore);

},{"../actions/TestCaseActions":3,"../alt":6}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _TestCaseActions = require('../actions/TestCaseActions');

var _TestCaseActions2 = _interopRequireDefault(_TestCaseActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestCaseStore = function () {
  function TestCaseStore() {
    _classCallCheck(this, TestCaseStore);

    this.bindActions(_TestCaseActions2.default);
    this.description = '';
    this.inputdatasource = 'DEFAULT';
    this.inputdatatarget = 'DEFAULT';
    this.actualoutputdatasource = 'DEFAULT';
    this.actualoutputdatatarget = 'DEFAULT';
    this.expectedoutputsource = 'DEFAULT';
    this.expectedoutputformat = 'DEFAULT';
    this.helpBlock = '';
  }

  _createClass(TestCaseStore, [{
    key: 'onAddTestCaseSuccess',
    value: function onAddTestCaseSuccess(testcase) {
      this.helpBlock = 'Test case with ID:: ' + testcase.testcaseid + ' added successfully';
    }
  }, {
    key: 'onAddTestCaseFail',
    value: function onAddTestCaseFail(errorMessage) {
      this.helpBlock = errorMessage;
    }
  }, {
    key: 'onDeleteTestCaseSuccess',
    value: function onDeleteTestCaseSuccess(testcase) {
      this.helpBlock = 'Test case with ID:: ' + testcase.testcaseid + ' deleted successfully';
    }
  }, {
    key: 'onDeleteTestCaseFail',
    value: function onDeleteTestCaseFail(errorMessage) {
      this.helpBlock = errorMessage;
    }
  }]);

  return TestCaseStore;
}();

exports.default = _alt2.default.createStore(TestCaseStore);

},{"../actions/TestCaseActions":3,"../alt":6}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _TestControlActions = require('../actions/TestControlActions');

var _TestControlActions2 = _interopRequireDefault(_TestControlActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestControlListStore = function () {
  function TestControlListStore() {
    _classCallCheck(this, TestControlListStore);

    this.bindActions(_TestControlActions2.default);
    this.testcontrols = [];
  }

  _createClass(TestControlListStore, [{
    key: 'onGetTestControlsSuccess',
    value: function onGetTestControlsSuccess(data) {
      this.testcontrols = data;
    }
  }, {
    key: 'onGetTestControlsFail',
    value: function onGetTestControlsFail(jqXhr) {
      toastr.error(jqXhr.responseJSON.message);
    }
  }, {
    key: 'onAddTestControlSuccess',
    value: function onAddTestControlSuccess(testcontrol) {

      var newArray = this.testcontrols.slice();
      newArray.push(testcontrol);
      this.testcontrols = newArray;
    }
  }, {
    key: 'onDeleteTestControlSuccess',
    value: function onDeleteTestControlSuccess(testcontrol) {

      var _index;
      this.testcontrols.map(function (s, index) {
        if (s.testcasecontrolid === testcontrol.testcasecontrolid) {
          _index = index;
        }
      });
      this.testcontrols.splice(_index, 1);
    }
  }]);

  return TestControlListStore;
}();

exports.default = _alt2.default.createStore(TestControlListStore);

},{"../actions/TestControlActions":4,"../alt":6}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _TestScenarioActions = require('../actions/TestScenarioActions');

var _TestScenarioActions2 = _interopRequireDefault(_TestScenarioActions);

var _TestControlActions = require('../actions/TestControlActions');

var _TestControlActions2 = _interopRequireDefault(_TestControlActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestControlStore = function () {
  function TestControlStore() {
    _classCallCheck(this, TestControlStore);

    this.bindActions(_TestScenarioActions2.default);
    this.bindActions(_TestControlActions2.default);
    this.description = '';
    this.helpBlock = '';
    this.testscenarios = [];
  }

  _createClass(TestControlStore, [{
    key: 'onAddTestControlSuccess',
    value: function onAddTestControlSuccess(testcontrol) {
      this.helpBlock = 'Test Control with ID:: ' + testcontrol.testcasecontrolid + ' added successfully';
    }
  }, {
    key: 'onAddTestControlFail',
    value: function onAddTestControlFail(errorMessage) {
      this.helpBlock = errorMessage;
    }
  }, {
    key: 'onGetTestScenariosSuccess',
    value: function onGetTestScenariosSuccess(data) {
      this.testscenarios = data;
    }
  }, {
    key: 'onDeleteTestControlSuccess',
    value: function onDeleteTestControlSuccess(testcontrol) {
      this.helpBlock = 'Test Control with ID:: ' + testcontrol.testcasecontrolid + ' deleted successfully';
    }
  }, {
    key: 'onDeleteTestControlFail',
    value: function onDeleteTestControlFail(errorMessage) {
      this.helpBlock = errorMessage;
    }
  }]);

  return TestControlStore;
}();

exports.default = _alt2.default.createStore(TestControlStore);

},{"../actions/TestControlActions":4,"../actions/TestScenarioActions":5,"../alt":6}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _TestScenarioActions = require('../actions/TestScenarioActions');

var _TestScenarioActions2 = _interopRequireDefault(_TestScenarioActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestScenarioListStore = function () {
  function TestScenarioListStore() {
    _classCallCheck(this, TestScenarioListStore);

    this.bindActions(_TestScenarioActions2.default);
    this.testscenarios = [];
  }

  _createClass(TestScenarioListStore, [{
    key: 'onGetTestScenariosSuccess',
    value: function onGetTestScenariosSuccess(data) {
      this.testscenarios = data;
    }
  }, {
    key: 'onGetTestScenariosFail',
    value: function onGetTestScenariosFail(jqXhr) {
      toastr.error(jqXhr.responseJSON.message);
    }
  }, {
    key: 'onAddTestScenarioSuccess',
    value: function onAddTestScenarioSuccess(testcase) {

      var newArray = this.testscenarios.slice();
      newArray.push(testcase);
      this.testscenarios = newArray;
    }
  }, {
    key: 'onDeleteTestScenarioSuccess',
    value: function onDeleteTestScenarioSuccess(testscenario) {

      var _index;
      this.testscenarios.map(function (s, index) {
        if (s.testcasescenarioid === testscenario.testcasescenarioid) {
          _index = index;
        }
      });
      this.testscenarios.splice(_index, 1);
    }
  }]);

  return TestScenarioListStore;
}();

exports.default = _alt2.default.createStore(TestScenarioListStore);

},{"../actions/TestScenarioActions":5,"../alt":6}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _TestScenarioActions = require('../actions/TestScenarioActions');

var _TestScenarioActions2 = _interopRequireDefault(_TestScenarioActions);

var _TestCaseActions = require('../actions/TestCaseActions');

var _TestCaseActions2 = _interopRequireDefault(_TestCaseActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestScenarioStore = function () {
  function TestScenarioStore() {
    _classCallCheck(this, TestScenarioStore);

    this.bindActions(_TestScenarioActions2.default);
    this.bindActions(_TestCaseActions2.default);
    this.description = '';
    this.helpBlock = '';
    this.testcases = [];
  }

  _createClass(TestScenarioStore, [{
    key: 'onAddTestScenarioSuccess',
    value: function onAddTestScenarioSuccess(testscenario) {
      this.helpBlock = 'Test Screnario with ID:: ' + testscenario.testcasescenarioid + ' added successfully';
    }
  }, {
    key: 'onAddTestScenarioFail',
    value: function onAddTestScenarioFail(errorMessage) {
      this.helpBlock = errorMessage;
    }
  }, {
    key: 'onGetTestCasesSuccess',
    value: function onGetTestCasesSuccess(data) {
      this.testcases = data;
    }
  }, {
    key: 'onDeleteTestScenarioSuccess',
    value: function onDeleteTestScenarioSuccess(testscenario) {
      this.helpBlock = 'Test case with ID:: ' + testscenario.testcasescenarioid + ' deleted successfully';
    }
  }, {
    key: 'onDeleteTestScenarioFail',
    value: function onDeleteTestScenarioFail(errorMessage) {
      this.helpBlock = errorMessage;
    }
  }]);

  return TestScenarioStore;
}();

exports.default = _alt2.default.createStore(TestScenarioStore);

},{"../actions/TestCaseActions":3,"../actions/TestScenarioActions":5,"../alt":6}],34:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],35:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],36:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],37:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))

},{"_process":34,"warning":52}],38:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  // FIXME: Work around our browser history not working correctly on Chrome
  // iOS: https://github.com/rackt/react-router/issues/2565
  if (ua.indexOf('CriOS') !== -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],39:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],40:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    var location = _parsePath2['default'](path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":35,"./DOMStateStorage":37,"./DOMUtils":38,"./ExecutionEnvironment":39,"./createDOMHistory":41,"./parsePath":46,"_process":34,"invariant":51}],41:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./DOMUtils":38,"./ExecutionEnvironment":39,"./createHistory":42,"_process":34,"invariant":51}],42:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

    if (typeof action === 'object') {
      //warning(
      //  false,
      //  'The state (2nd) argument to history.createLocation is deprecated; use a ' +
      //  'location descriptor instead'
      //)

      if (typeof location === 'string') location = _parsePath2['default'](location);

      location = _extends({}, location, { state: action });

      action = key;
      key = arguments[3] || createKey();
    }

    return _createLocation3['default'](location, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":35,"./AsyncUtils":36,"./createLocation":43,"./deprecate":44,"./parsePath":46,"./runTransitionHook":47,"deep-equal":48}],43:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _parsePath2['default'](location);

  if (typeof action === 'object') {
    //warning(
    //  false,
    //  'The state (2nd) argument to createLocation is deprecated; use a ' +
    //  'location descriptor instead'
    //)

    location = _extends({}, location, { state: action });

    action = key || _Actions.POP;
    key = _fourthArg;
  }

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';
  var state = location.state || null;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":35,"./parsePath":46}],44:[function(require,module,exports){
//import warning from 'warning'

"use strict";

exports.__esModule = true;
function deprecate(fn) {
  return fn;
  //return function () {
  //  warning(false, '[history] ' + message)
  //  return fn.apply(this, arguments)
  //}
}

exports["default"] = deprecate;
module.exports = exports["default"];
},{}],45:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],46:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./extractPath":45,"_process":34,"warning":52}],47:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":34,"warning":52}],48:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":49,"./lib/keys.js":50}],49:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],50:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],51:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":34}],52:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":34}]},{},[24])


//# sourceMappingURL=bundle.js.map
