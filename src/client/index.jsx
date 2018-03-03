import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import MaskedInput from './components/MaskedInput.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false,
      number: '',
      raw: '',
      mask: '(XXX) XXX-XXXX',
      clicked: false
    }
  }

  validator = (value) => {
    if (value.length === 10) {
      let maskedNum = ''
      let mask = this.state.mask;
      let i = 0;
      for (let char of mask) {
        if (char === 'X') {
          maskedNum += value[i]
          i++
        } else {
          maskedNum += char
        }
      }
      this.setState({valid: true, number: maskedNum, raw: value})
    } else {
      this.setState({valid: false})
    }
  }

  showLastInput = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <div>
        <MaskedInput mask={this.state.mask} validator={this.validator} />
        {this.state.valid ?   <p>{this.state.number}</p> : <p>Invalid</p>}
        <button onClick={this.showLastInput}>Get Last Input</button>
        {this.state.clicked ? <p>Raw: {this.state.raw} <br/> Masked: {this.state.number}</p> : null}
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));