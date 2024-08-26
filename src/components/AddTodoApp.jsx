
import { useState } from "react";
import TodoItem from "./TodoItem";
import { IoMdAdd } from "react-icons/io";


function AddTodoapp({onNewItem})
{
  const [todoName,setTodoName]=useState("");
  const [duedate,setDueDate]=useState("");

const handleNameChange=(event)=>{
setTodoName(event.target.value);
};
const  handleDateChange=(event)=>{
setDueDate(event.target.value);
};
const handleAddBtnClick=()=>{
onNewItem(todoName,duedate);
setDueDate("");
setTodoName("");
}


  return ( <div class="container text-center">
  <div className="row kg-row">
  <div className="col-6"><input type="text" placeholder="Enter to do here" value={todoName}  onChange={handleNameChange}/>
  </div>
  <div className="col-4">
    <input type="date" value={duedate} onChange={handleDateChange} />
  </div>
  <div className="col-2">
  <button type="button" className="btn btn-success kg-btn"
  onClick={handleAddBtnClick}><IoMdAdd /></button>
  </div>
  </div>
  </div>
  );
}
export default AddTodoapp;