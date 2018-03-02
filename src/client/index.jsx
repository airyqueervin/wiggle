import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import MaskedInput from './components/MaskedInput.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false,
      number: ''
    }
  }

  validator = (value) => {
    console.log(value.len)
    if (value.length === 10) {
      console.log('in here')
      let numFirst = '(' + value.substring(0, 3) + ') ' + value.substring(3, 6) + '-' + value.substring(6)
      this.setState({valid: true, number: numFirst})
    } else {
      this.setState({valid: false})
    }
  }

  render() {
    return (
      <div>
        <MaskedInput mask="(XXX) XXX-XXXX" validator={this.validator} />
        {this.state.valid ? null : <p>Invalid</p>}
        <p>{this.state.number}</p>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));