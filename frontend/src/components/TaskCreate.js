import axios from 'axios';
import React, { useState } from 'react'

import './TaskCreate.css'

const API_URL = "http://localhost:5000/api/v1/todolist"

function TaskCreate() {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const updateTaskTitle = (e) => {
        setTaskTitle(e.target.value);
    }
    const updateTaskDescription = (e) => {
        setTaskDescription(e.target.value);
    }

    /**
     * Sends a create task request to the server
     * 
     * @returns created Task's Id on success
     */ 
    const createTask = async (e) => {
        e.preventDefault();
        axios.post(API_URL + "/add",
            {
                title: taskTitle,
                description: taskDescription
            }
        )
            .then(() => {

            })
            .catch((err) => console.log(err));
        console.log("TEST")
    }

  return (
    <div>
        <form className="create-task" action="">
            <h1>Create a Task</h1>
            <input className="create-taskTitle" id="taskTitle" type="text" placeholder='Task Title' value={taskTitle} onChange={updateTaskTitle} placeholder='Task Title'/>
            <br />
            <textarea className="create-taskDescription" name="taskDescription" id="taskDescription" cols="30" rows="10 value={taskDescription} onChange={updateTaskDescription}" placeholder='Task Description'></textarea>
            <br />
            <button className="create-taskButton" onClick={createTask}>Create Task</button>
        </form>
    </div>
  )
}

export default TaskCreate