import { useState } from 'react';
import './App.css';

import check from './assets/icons/check.svg';
import AddForm from './components/AddForm/AddForm';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (taskData) => {
    setTasks((prevTasks) => {
      return [taskData, ...prevTasks];
    })
  }

  return (
    <div className="App">
      <Header />
        <div className="container">
          <AddForm onPassTask={addTaskHandler} />
          {tasks.length > 0 ? (
            <TaskList tasks={tasks} />
          ) : (
            <div className="no-tasks">
              <div className="no-tasks-icons">
                <img src={check} className="check-icon" alt="check icon" />
                <span>No Pending Tasks</span>
              </div>
            </div>
          )}
        </div>
      <Footer />
    </div>
  );
}

export default App;
