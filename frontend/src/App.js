import { useEffect, useState } from 'react';
import './App.css';

import "./components/TaskCreate"
import TaskCreate from './components/TaskCreate';
import TaskEdit from './components/TaskEdit';
import TaskView from './components/TaskView';

import { todoListAPI } from './TodoListAPI';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    todoListAPI.getAllTasks()
      .then((res_tasks) => {
        setTasks(res_tasks);
        })
      .catch((err) => {console.log(err)});
      
  }, []);

  // TODO
  const editTask = () => {


    const taskEdit = document.getElementById("taskEdit");
    taskEdit.style.display = "block";
  }

  return (
    <div className="App">
      <TaskCreate />
      <br />
      {tasks.map(task =>
        <TaskView
          key={task.id}
          taskId={task.id}
          taskTitle={task.title}
          taskDescription={task.description}
          taskPin={task.pin}
          taskCheck={task.check}
        />)
      }
      <br />
      <TaskEdit />
    </div>
  );
}

export default App;
