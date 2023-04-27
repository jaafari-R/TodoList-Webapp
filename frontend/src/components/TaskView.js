import React from 'react'

function TaskView() {
  return (
    <div>
        <h2>Title</h2>
        <details>
            <summary> </summary>
            <p>Description</p>
        </details>
        <button>Edit</button>
        <button>Pin</button>
        <button>Check</button>
        <button>Delete</button>
    </div>
  )
}

export default TaskView