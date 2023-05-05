import React from 'react'
import PushPinIcon from '@mui/icons-material/PushPin';

import './TaskView.css'


function TaskView() {
  return (
    <div className='view-task'>
        <h2>Title</h2>
        <p>Description</p>
        <button>Edit</button>
        <PushPinIcon className='view-taskPin' />
        <button>Check</button>
        <button>Delete</button>
    </div>
  )
}

export default TaskView