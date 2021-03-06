import React, { Component } from 'react';

export default class EditToggle extends Component {
  render() {
    const {update} = this.props;
    return (
      <select className="dropDownContainer ml0" onChange={event => this.update(event.target.value)}>
        <option value="true"> Allow Edit </option>
        <option value="false"> Disable Edit </option>
      </select>
    )
  }
}