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
    <div>TaskCreate
        <form className="create__form" action="">
            <input className="create__input" id="taskTitle" type="text" value={taskTitle} onChange={updateTaskTitle}/>
            <br />
            <textarea className="create__taskDescription" name="taskDescription" id="taskDescription" cols="30" rows="10 value={taskDescription} onChange={updateTaskDescription}"></textarea>
            <br />
            <button onClick={createTask}>Create Task</button>
        </form>
    </div>
  )
}

export default TaskCreate