import './App.css';

import "./components/TaskCreate"
import TaskCreate from './components/TaskCreate';
import TaskEdit from './components/TaskEdit';
import TaskView from './components/TaskView';

function App() {
  return (
    <div className="App">
      <TaskCreate />
      <br />
      <TaskView />
      <br />
      <TaskEdit />
    </div>
  );
}

export default App;
