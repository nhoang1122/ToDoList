import React, { useState } from "react";
import ListDisplay from "./ListDisplay";

const AddTask = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [category, setCategory] = useState("")

  const handleClick = () => {
    setList([...list, {task:input, category: category}]);
    setInput("")
  };

  const deleteTask = (index) => {
    const newState = list;
    newState.splice(index, 1)
    setList([...newState])
  }

  return (
    <div>
      <h1>ADD TASK</h1>
      <div className="task-form">
        <input type="text" value={input} onChange={(evt) => setInput(evt.target.value)} />
        <select onChange={(e) => setCategory(e.target.value)}>
          <option selected disabled defaultValue>Category</option>
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Errands">Errands</option>
        </select>
        <button onClick={handleClick}>ADD TASK</button>
        <ListDisplay list={list} deleteTask={deleteTask}></ListDisplay>
      </div>
    </div>
  );
};

export default AddTask;
