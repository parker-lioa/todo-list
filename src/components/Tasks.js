import React, { Component } from "react";
import Task from "./Task";

export default class Tasks extends Component {
  render() {
    const { handleRemove, editTask } = this.props;
    return (
      <div className="tasks-container">
        {this.props.tasks.map((task, index) => (
          <Task
            task={task}
            key={index}
            handleRemove={handleRemove}
            editTask={editTask}
          />
        ))}
      </div>
    );
  }
}
