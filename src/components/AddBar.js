import React, { Component } from "react";

export default class AddBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="input-bar">
        <input
          type="text"
          placeholder="Add task"
          value={this.props.inputContent}
          onChange={this.props.handleInput}
          onKeyPress={this.props.handleAdd}
        ></input>
      </div>
    );
  }
}
