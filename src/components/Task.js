import React from "react";

function Task({task, deleteTask}) {
  
  const handleDelete = (e) => {
    deleteTask(task);
  }
  
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={handleDelete} className="delete">X</button>
    </div>
  );
}

export default Task;
