import React from "react";

const Task = props => {
  if (props.task.active) {
    return (
      <div>
        <p>
          <strong>{props.task.text}</strong> do {props.task.date} --{" "}
          {props.task.finishDate}{" "}
          <button onClick={() => props.doneTask(props.task.id)}>
            zrobione
          </button>{" "}
          <button onClick={() => props.delateTask(props.task.id)}>X</button>
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          <strong>{props.task.text}</strong> dnia {props.task.finishDate}
        </p>
      </div>
    );
  }
};

export default Task;
