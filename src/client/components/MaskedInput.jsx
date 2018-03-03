import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MaskedInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    this.props.validator(this.state.value)
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

MaskedInput.propTypes = {
  mask: PropTypes.string.isRequired, // (XXX) XXX-XXXX
  validator: PropTypes.func.isRequired, // (value) => {return value.length === 10;}
};

export default MaskedInput;
