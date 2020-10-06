import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/AddBar";
import Tasks from "./components/Tasks";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      inputContent: "",
      tasks: localStorage.getItem("tasks")
        ? JSON.parse(localStorage.getItem("tasks"))
        : [],
    };
  }

  handleInput = (e) => {
    this.setState({ inputContent: e.target.value });
  };

  handleAdd = (e) => {
    if (e.key === "Enter" && this.state.inputContent !== "") {
      let tasks = this.state.tasks.slice();
      tasks.push({ content: this.state.inputContent, time: Date.now() });
      this.setState({
        tasks: tasks,
        inputContent: "",
      });

      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };

  handleRemove = (target) => {
    let tasks = this.state.tasks
      .slice()
      .filter((task) => task.content !== target.content);
    this.setState({ tasks: tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  editTask = (target_bef, target_aft) => {
    let tasks = this.state.tasks.slice();
    let index = tasks.indexOf(target_bef);
    console.log(index);
    tasks[index] = target_aft;
    console.log(tasks);

    this.setState({ tasks: tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  render() {
    return (
      <React.Fragment>
        <header className="title">
          <span>
            <h1>Todo-list</h1>
          </span>
        </header>
        <main>
          <SearchBar
            inputContent={this.state.inputContent}
            handleInput={this.handleInput}
            handleAdd={this.handleAdd}
          />
          <Tasks
            tasks={this.state.tasks}
            handleRemove={this.handleRemove}
            editTask={this.editTask}
          />
        </main>
      </React.Fragment>
    );
  }
}
