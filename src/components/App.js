import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  counter = 9;
  state = {
    tasks: []
  };
  doneTask = id => {
    const tasks = [...this.state.tasks];

    const index = tasks.findIndex(element => element.id === id);

    tasks[index].active = false;
    tasks[index].finishDate = new Date().toISOString().slice(0, 10);

    this.setState({
      tasks
    });
  };
  delateTask = id => {
    const tasks = [...this.state.tasks];

    const index = tasks.findIndex(element => element.id === id);
    tasks.splice(index, 1);

    this.setState({
      tasks
    });
  };
  addTask = (text, date, important) => {
    // console.log("dodaje");
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    };
    this.counter++;
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));
    return true;
  };
  render() {
    return (
      <div className="App">
        <h1>TODO LIST</h1>

        <AddTask addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delateTask={this.delateTask}
          doneTask={this.doneTask}
        />
      </div>
    );
  }
}

export default App;
