import React, { useState } from 'react'
import PushPinIcon from '@mui/icons-material/PushPin';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';

import { todoListAPI } from '../api/TodoListAPI';

import './TaskView.css'


function TaskView({taskId, taskTitle, taskDescription, taskCheck, taskPin, editTask, notify}) {
  const [id, setId] = useState(taskId);
  const [title, setTitle] = useState(taskTitle);
  const [description, setDescription] = useState(taskDescription);
  const [check, setCheck] = useState(taskCheck);
  const [pin, setPin] = useState(taskPin);

  const showEditForm = () => {
    editTask(id, title, description);
  }

  const pinTask = async () => {
    const newPin = !pin;
    todoListAPI.pinTask(id, newPin)
      .then((response) => {
        setPin(newPin)
        response.msg = newPin ? `Pinned ${title}` : `Unpinned ${title}`;
        notify(response);
      })
      .catch((response) => {
        notify(response)
      })

  }

  const deleteTask = () => {
    if(!window.confirm(`Are you sure you want to delete <${title}>`))
      return;

    todoListAPI.deleteTask(id)
      .then((response) => {
        notify({...response, msg: `${title} was deleted`})
      })
      .catch((response) => {
        console.log(response)
        notify(response);
      })
  }

  return (
    <div className='view-task'>
      <div className="view-taskContent">
        <h2>{title || "Unknown"}</h2>
        <p>{description || "Unknown"}</p>
      </div>
      {
        pin && <PushPinIcon onClick={pinTask} className='view-taskPin' /> || <PushPinOutlinedIcon onClick={pinTask} className='view-taskPin' />
      }
      <button className='view-taskCheck'>Done</button>
      <button className='view-taskEdit' onClick={showEditForm}>Edit</button>
      <button className='view-taskDelete' onClick={deleteTask}>Delete</button>
    </div>
  )
}

export default TaskView