import React, { useState } from 'react'
import './TaskEdit.css'

import { todoListAPI } from '../api/TodoListAPI';

function TaskEdit({taskId, taskTitle, taskDescription, notify, cancleEdit, syncEditTask}) {
  const [id, setId] = useState(taskId);
  const [title, setTitle] = useState(taskTitle);
  const [description, setDescription] = useState(taskDescription);

  const editTask = (e) => {
    e.preventDefault();
    todoListAPI.editTask(id, title, description)
      .then((response) => {
        notify({...response, msg: `${title} was edited successfully`});
        syncEditTask(id, title, description);
        cancleEdit();
      })
      .catch((response) => {
        notify(response);
      })
  }

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  }

  return (
    <div id='taskEdit'>
      <div className='page-cover'></div>
      <form className='edit-task' action="">
        <h1>Edit Task</h1>
        <br />
        <input className='edit-taskTitle' value={title} onChange={handleChange(setTitle)} placeholder='Task Title' name="taskTitle" type="text" />
        <br />
        <textarea className="edit-taskDescription" value={description} onChange={handleChange(setDescription)} placeholder='Task Description' name="taskDescription" cols="30" rows="10" ></textarea>
        <br />
        <button onClick={editTask}>Edit Task</button>
        <button onClick={cancleEdit}>Cancle</button>
      </form>
    </div>
  )
}

export default TaskEdit