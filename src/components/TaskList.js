import React from "react";
import Task from "./Task";

const TaskList = props => {
  const todoTask = props.tasks.filter(task => (task.active ? task : null));
  const doneTask = props.tasks.filter(task => (!task.active ? task : null));

  const todoTasks = todoTask.map(task => (
    <Task
      key={task.id}
      task={task}
      delateTask={props.delateTask}
      doneTask={props.doneTask}
    />
  ));
  const doneTasks = doneTask.map(task => (
    <Task
      key={task.id}
      task={task}
      delateTask={props.delateTask}
      doneTask={props.doneTask}
    />
  ));

  return (
    <div className="content">
      <div className="taskList">
        {" "}
        <h3>do zrobienia</h3>{" "}
        {todoTask.length === 0 ? <p>nie masz nic do zrobienia</p> : todoTasks}
      </div>
      <div className="doneList">
        {" "}
        <h3>zrobione</h3> {doneTasks}
      </div>
    </div>
  );
};

export default TaskList;
