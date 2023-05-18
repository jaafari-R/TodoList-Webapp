import React, { useState } from 'react';

import { todoListAPI } from '../api/TodoListAPI';

import './TaskCreate.css'


function TaskCreate() {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const updateTaskTitle = (e) => {
        setTaskTitle(e.target.value);
    }
    const updateTaskDescription = (e) => {
        setTaskDescription(e.target.value);
    }

    /** TODO create task locally & give it the id returned from the server
     * Sends a create task request to the server
     * 
     * @returns created Task's Id on success
     */ 
    const createTask = async (e) => {
        e.preventDefault();
        todoListAPI.createTask(taskTitle, taskDescription);
    }

  return (
    <div>
        <form className="create-task" action="">
            <h1>Create a Task</h1>
            <input className="create-taskTitle" id="taskTitle" type="text" value={taskTitle} onChange={updateTaskTitle} placeholder='Task Title'/>
            <br />
            <textarea className="create-taskDescription" name="taskDescription" id="taskDescription" cols="30" rows="10" value={taskDescription} onChange={updateTaskDescription} placeholder='Task Description'></textarea>
            <br />
            <button className="create-taskButton" onClick={createTask}>Create Task</button>
        </form>
    </div>
  )
}

export default TaskCreate