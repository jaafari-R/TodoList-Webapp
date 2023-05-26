import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import './App.css';

import "./components/TaskCreate"
import TaskCreate from './components/TaskCreate';
import TaskEdit from './components/TaskEdit';
import TaskView from './components/TaskView';

import { todoListAPI } from './api/TodoListAPI';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editId, setEditId] = useState(0);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");


  useEffect(() => {
    todoListAPI.getAllTasks()
      .then((response) => {
        setTasks(response.tasks);
      })
      .catch((err) => {
        notify(err)
      });

  }, []);

  // - Sync after successful requests - \\
  const syncAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }
  const syncEditTask = (taskId, taskTitle, taskDescription) => {
    setTasks((currentTasks) => currentTasks.map(task => task._id === taskId ? {...task, title:taskTitle, description: taskDescription} : task))
  }
  const syncPinTask = (taskId, taskPin) => {
    setTasks((currentTasks) => currentTasks.map(task => task._id === taskId ? {...task, pinned: taskPin} : task))
  }
  const syncDeleteTask = (taskId) => {
    setTasks((currentTasks) => currentTasks.filter(task => task._id !== taskId))
  }
  const syncMarkTask = (taskId, taskMark) => {
    setTasks((currentTasks) => currentTasks.map(task => task._id === taskId ? {...task, marked: taskMark} : task))
  }

  const editTask = (id, title, description) => {
    setEditId(id);
    setEditTitle(title);
    setEditDescription(description);
    setShowEditForm(true);
  }

  const cancleEdit = (e) => {
    if(e)
      e.preventDefault();
    setShowEditForm(false);
  }

  /**
   * Creates a Pop-up on the screen notifying the user of success/failure
   *  when they perform an action
   * 
   * @param {Object} response API Call response, Possible values:
   *      - undefined - no response from the server
   *      - {success: {Boolean}, msg{String | undefined}}
   */
  const notify = (response) => {
    if(!response)
      toast.error("Can't connect to the server.")
    else if(response.success)
    {
      if(response.msg)
        toast.success(response.msg)
    }
    else
      toast.error(response.msg)
  }

  return (
    <div className="App">
      <TaskCreate addTask={syncAddTask} notify={notify}/>
      <br />
      {tasks.map(task =>
        <TaskView
          key={task._id}
          taskId={task._id}
          taskTitle={task.title}
          taskDescription={task.description}
          taskPin={task.pinned}
          taskMark={task.marked}
          editTask={editTask}
          notify={notify}
          syncPinTask={syncPinTask}
          syncDeleteTask={syncDeleteTask}
        />)
      }
      <br />
      {
        showEditForm &&
        <TaskEdit
          taskId={editId} 
          taskTitle={editTitle} 
          taskDescription={editDescription} 
          notify={notify} 
          cancleEdit={cancleEdit}
          syncEditTask={syncEditTask}/>
      }
      <Toaster
            position='bottom-center'
            toastOptions={{
                success: {
                    duration: 5000
                },
                error: {
                    duration: 3000
                }
            }}
        />
    </div>
  );
}

export default App;
