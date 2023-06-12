import React, { useState } from 'react'
import './TaskEdit.css'

import { todoListAPI } from '../api/TodoListAPI';

function TaskEdit({taskId, taskTitle, notify, cancleEdit, syncEditTask}) {
  const [id, setId] = useState(taskId);
  const [title, setTitle] = useState(taskTitle);

  const editTask = (e) => {
    e.preventDefault();
    todoListAPI.editTask(id, title)
      .then((response) => {
        notify({...response, msg: `${title} was edited successfully`});
        syncEditTask(id, title);
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
        <input value={title} onChange={handleChange(setTitle)} placeholder='Task Title' name="taskTitle" type="text" />
        <button onClick={editTask} type='submit' className='edit-submit'>Edit Task</button>
        <button onClick={cancleEdit} className='edit-cancle'>Cancle</button>
      </form>
    </div>
  )
}

export default TaskEdit