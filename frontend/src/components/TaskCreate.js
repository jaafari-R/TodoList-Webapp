import React, { useState } from 'react';

import { todoListAPI } from '../api/TodoListAPI';

import './TaskCreate.css'


function TaskCreate({addTask, notify}) {
    const [taskTitle, setTaskTitle] = useState("");

    const handleChange = (setState) => (e) => {
        setState(e.target.value);
    }

    /** TODO create task locally & give it the id returned from the server
     * Sends a create task request to the server
     * 
     * @returns created Task's Id on success
     */ 
    const createTask = async (e) => {
        e.preventDefault();
        todoListAPI.createTask(taskTitle)
            .then((response) => {
                notify({...response, msg: `Task ${response.newTask.title} was created successfully`});
                addTask(response.newTask)
            })
            .catch((response) => {
                notify(response)
            });
    }

  return (
    <div>
        <form className="create-task" action="">
            <h1>Create a Task</h1>
            <input className="create-taskTitle" id="taskTitle" type="text" value={taskTitle} onChange={handleChange(setTaskTitle)} placeholder='Task Title'/>
            <br />
            <button className="create-taskButton" onClick={createTask}>Create Task</button>
        </form>
    </div>
  )
}

export default TaskCreate