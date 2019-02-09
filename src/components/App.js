import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "naucyc sie reacta",
        date: "2029-03-10",
        important: true,
        active: true,
        finishDate: false
      },
      {
        id: 1,
        text: "ugotowac",
        date: "2019-03-19",
        important: true,
        active: false,
        finishDate: false
      },
      {
        id: 2,
        text: "przygotowac",
        date: "2019-02-10",
        important: true,
        active: true,
        finishDate: false
      },
      {
        id: 3,
        text: "posprzatac",
        date: "2019-03-12",
        important: true,
        active: true,
        finishDate: false
      },
      {
        id: 4,
        text: "posprzatac2",
        date: "2019-03-12",
        important: true,
        active: true,
        finishDate: false
      }
    ]
  };
  doneTask = id => {
    const tasks = [...this.state.tasks];

    const index = tasks.findIndex(element => element.id === id);

    tasks[index].active = false;

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
  render() {
    return (
      <div>
        <h1>asda</h1>
        <AddTask />
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
