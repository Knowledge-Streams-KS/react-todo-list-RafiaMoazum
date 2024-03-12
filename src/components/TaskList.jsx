import { useState } from "react";
import Task from "./Task.jsx";
import "./TaskList.css"


function TaskList() {

  //const taskList=["Node Project","React Project","Softskills Homework","Home Task"]

  const [taskList,setTaskList] =useState([]);
  const [taskInput,setTaskInput] = useState()

  const handleInput = (e) =>{
    setTaskInput(e.target.value)
  }

  const handleAdd = () =>{
    if(taskInput != '')
    {
        setTaskList([...taskList,taskInput]);  //important
        setTaskInput("");
    }
   
  }

  const handleDelete = (index) => {

    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index,1);
    setTaskList(updatedTaskList)

    //setTaskList(taskList.splice(index,1))
  };

  return (
    <>
    <div className="main">
    <h1>To do list</h1>
    <div className="taskListContainer">
    <input type="text" placeholder="Enter the Task" value={taskInput} onChange={handleInput}></input>
    <button style={{margin:"5px", padding:"5px"}} onClick={handleAdd}>Add Task</button>
    </div>
    <br></br>
   
    <div className="inner">
    {taskList.map((ele,index) => {
      return <Task key={index} taskNumber={index} desc={ele} delete={handleDelete} />
    })}
    </div>
    </div>
    </>
  )
}

export default TaskList









