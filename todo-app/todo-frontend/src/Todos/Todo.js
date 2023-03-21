import React from "react";

const Todo = ({ todo, doneInfo, notDoneInfo }) => {
  return (
    <React.Fragment>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "70%",
          margin: "auto",
        }}
      >
        <span className="text">{todo.text}</span>
        <span className="done">{todo.done ? doneInfo : notDoneInfo}</span>
      </div>
    </React.Fragment>
  );
};

export default Todo;
