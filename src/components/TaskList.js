import React from "react";
import Task from "./Task";
function TaskList({tasks, handleDelete}) {
 
  return (
  
      <div className="tasks">
      {tasks.map((task, index)=> <Task key={index} task={task} deleteTask={handleDelete}/>)}
      </div>
  );
}

export default TaskList;
