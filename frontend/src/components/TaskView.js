import React, { useState } from 'react'
import PushPinIcon from '@mui/icons-material/PushPin';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';

import { todoListAPI } from '../api/TodoListAPI';

import './TaskView.css'


function TaskView({taskId, taskTitle, taskDescription, taskCheck, taskPin, editTask, notify, syncPinTask}) {
  const showEditForm = () => {
    editTask(taskId, taskTitle, taskDescription);
  }

  const pinTask = async () => {
    const newPin = !taskPin;
    todoListAPI.pinTask(taskId, newPin)
      .then((response) => {
        syncPinTask(taskId, newPin)
        notify({...response, msg: (newPin ? "Pinned " : "Unpinned ") + taskTitle});
      })
      .catch((response) => {
        notify(response)
      })

  }

  const deleteTask = () => {
    if(!window.confirm(`Are you sure you want to delete <${taskTitle}>`))
      return;

    todoListAPI.deleteTask(taskId)
      .then((response) => {
        notify({...response, msg: `${taskTitle} was deleted`})
      })
      .catch((response) => {
        notify(response);
      })
  }

  return (
    <div className='view-task'>
      <div className="view-taskContent">
        <h2>{taskTitle || "Unknown"}</h2>
        <p>{taskDescription || "Unknown"}</p>
      </div>
      {
        taskPin && <PushPinIcon onClick={pinTask} className='view-taskPin' /> || <PushPinOutlinedIcon onClick={pinTask} className='view-taskPin' />
      }
      <button className='view-taskCheck'>Done</button>
      <button className='view-taskEdit' onClick={showEditForm}>Edit</button>
      <button className='view-taskDelete' onClick={deleteTask}>Delete</button>
    </div>
  )
}

export default TaskView