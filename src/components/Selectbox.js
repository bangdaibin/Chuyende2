import React, { Component } from 'react';


class Selectbox extends Component {

  state = {
    selected: '',
  }

  createOptions = (options) => options.map( o => <option value={o.value} key={o.value}>{o.label}</option> );

  onChange = (e) => {
    this.props.handleOnChange(e.target.value);
  }

  render() {
    const {  options } = this.props;

    return (
      <select onChange={ (e) => this.onChange(e) } >
        {this.createOptions(options)}
      </select>
    );
  }
}


export default Selectbox;
