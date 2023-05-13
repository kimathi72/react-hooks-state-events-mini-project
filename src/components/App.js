import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  const [tasklist, setTaskList] = useState(TASKS)
  const [categories] =useState(CATEGORIES)
function deleteTask (task){
  return setTaskList(tasklist.filter(item => item !== task))
}

function handleFilterCategory (e){  
  if(e.target.value === "All" ){
    setTaskList(TASKS)
  }else {
    setTaskList(TASKS.filter(item=> item.category === e.target.value))
  }   
}
function handleAddTask(category, text){
  return setTaskList([...TASKS, {text, category}])  
}
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} handleCategoryfilter={handleFilterCategory}/>
      <NewTaskForm categories={categories} addTask={handleAddTask}/>
      <TaskList tasks = {tasklist} handleDelete={deleteTask}/>
    </div>
  );
}

export default App;
