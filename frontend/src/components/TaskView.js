import React, { useState } from 'react'
import PushPinIcon from '@mui/icons-material/PushPin';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';

import './TaskView.css'


function TaskView({taskId, taskTitle, taskDescription, taskCheck, taskPin, editTask}) {
  const [id, setId] = useState(taskId);
  const [title, setTitle] = useState(taskTitle);
  const [description, setDescription] = useState(taskDescription);
  const [check, setCheck] = useState(taskCheck);
  const [pin, setPin] = useState(taskPin);

  const showEditForm = () => {
    editTask(id, title, description);
  }

  const pinTask = () => {
    setPin(!pin);
  }

  return (
    <div className='view-task'>
      <div className="view-taskContent">
        <h2>{title || "Unknown"}</h2>
        <p>{description}</p>
      </div>
      {
        pin && <PushPinIcon onClick={pinTask} className='view-taskPin' /> || <PushPinOutlinedIcon onClick={pinTask} className='view-taskPin' />
      }
      <button className='view-taskCheck'>Done</button>
      <button className='view-taskEdit' onClick={showEditForm}>Edit</button>
      <button className='view-taskDelete'>Delete</button>
    </div>
  )
}

export default TaskView