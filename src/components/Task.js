import React from "react";

const Task = props => {
  return (
    <div>
      <p>
        <strong>{props.task.text}</strong> -- {props.task.date} --{" "}
        {props.task.finishDate}{" "}
        <button onClick={() => props.doneTask(props.task.id)}>zrobione</button>{" "}
        <button onClick={() => props.delateTask(props.task.id)}>X</button>
      </p>
    </div>
  );
};

export default Task;
