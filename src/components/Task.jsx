import { useEffect, useState } from "react";
import "./Task.css";

const Task = (props) => {

    const[isCompleted,setIsCompleted] = useState(false)

    const handleComplete =()  =>{
      setIsCompleted(true)
    }

    const handleIncomplete = () =>{
      setIsCompleted(false)
    }


    const handleCheck = () =>{
      setIsCompleted(!isCompleted)
    }

  return (
    <>
    <div className="taskDivider">
      
      <h2>Task {props.taskNumber+1}</h2>
      <div className="container">
      <p className={`description ${isCompleted === true ? "taskDone" : "notDone"}`}>
            Description: {props.desc}
      </p>

        {/* <input type="checkbox" onClick={handleCheck}></input> */}
        <button className="completeBtn" onClick={handleComplete}>Completed</button>
        <button className="IncompleteBtn" onClick={handleIncomplete}>Incomplete</button>
        <button className="deleteBtn" onClick={() => props.delete(props.taskNumber)}>Delete</button>

      </div>
      </div>
    </>
  );
};

export default Task;

