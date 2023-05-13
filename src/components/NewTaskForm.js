import React, { useState } from "react";

function NewTaskForm({categories, addTask}) {
  const options = categories.filter(item => item !== "All")
  const [details, setDetails] = useState("");
  const [categoryOption, setCategoryOption] = useState("")
  
  function handleSubmit(e){
    e.preventDefault()
    addTask(categoryOption, details)
  }
  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={(e)=>setDetails(e.target.value)} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={(e)=>setCategoryOption(e.target.value)} name="category">
          {/* render <option> elements for each category here */
          options.map((option,index) => <option key={index} value={option}>{option}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
