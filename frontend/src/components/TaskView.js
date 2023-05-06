import React from 'react'
import PushPinIcon from '@mui/icons-material/PushPin';

import './TaskView.css'


function TaskView() {
  return (
    <div className='view-task'>
      <div className="view-taskContent">
        <h2>Title</h2>
        <p>Description</p>
      </div>
      <PushPinIcon className='view-taskPin' />
      <button className='view-taskCheck'>Done</button>
      <button className='view-taskEdit'>Edit</button>
      <button className='view-taskDelete'>Delete</button>
    </div>
  )
}

export default TaskView