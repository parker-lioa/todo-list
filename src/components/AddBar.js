import React, { Component } from "react";

export default class AddBar extends Component {
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
