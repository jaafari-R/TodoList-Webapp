import React, { useState } from 'react'

import './TaskEdit.css'

function TaskEdit({taskId, taskTitle, taskDescription}) {
  const [id, setId] = useState(taskId);
  const [title, setTitle] = useState(taskTitle);
  const [description, setDescription] = useState(taskDescription);

  const hideTaskEdit = (e) => {
    e.preventDefault();
    const taskEdit = document.getElementById("taskEdit");
    taskEdit.style.display = "none";
  }

  return (
    <div id='taskEdit'>
      <div className='page-cover'></div>
      <form className='edit-task' action="">
        <h1>Edit Task</h1>
        <br />
        <input className='edit-taskTitle' type="text" value={title} placeholder='Task Title'/>
        <br />
        <textarea className="edit-taskDescription" name="taskDescription" id="taskDescription" cols="30" rows="10 value={taskDescription} onChange={updateTaskDescription}" placeholder='Task Description'></textarea>
        <br />
        <button>Edit Task</button>
        <button onClick={hideTaskEdit}>Cancle</button>
      </form>
    </div>
  )
}

export default TaskEdit