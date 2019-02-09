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
    <div>
      <div>
        {" "}
        <strong>do zrobienia</strong>{" "}
        {todoTask.length === 0 ? <p>nie masz nic do zrobienia</p> : todoTasks}
      </div>
      <div>
        {" "}
        <strong>zrobione</strong> {doneTasks}
      </div>
    </div>
  );
};

export default TaskList;
