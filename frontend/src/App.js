import './App.css';

import "./components/TaskCreate"
import TaskCreate from './components/TaskCreate';
import TaskEdit from './components/TaskEdit';
import TaskView from './components/TaskView';

function App() {

  const getAllTasks = () => {
    
  }

  // TODO
  const editTask = () => {


    const taskEdit = document.getElementById("taskEdit");
    taskEdit.style.display = "block";
  }

  return (
    <div className="App">
      <TaskCreate />
      <br />
      <TaskView taskId="1" taskTitle="Task Title" taskDescription="Task Description" taskPin={false} editTask={editTask} />
      <br />
      <TaskEdit />
    </div>
  );
}

export default App;
