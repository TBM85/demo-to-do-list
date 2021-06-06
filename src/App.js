import { useState } from 'react';
import './App.css';

import check from './assets/icons/check.svg';
import AddForm from './components/AddForm/AddForm';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';

const dummy_tasks = [
  {id: 1, task: "Press the button in the upper right corner"},
  {id: 2, task: "Introduce a new task into the input"},
  {id: 3, task: "Press the 'add' button to add the task"},
  {id: 4, task: "Press the 'cross' button to delete the text entered in the input"},
  {id: 5, task: "Press the 'hide' button to hide the form"},
  {id: 6, task: "Press the 'check' button to cross out the tasks performed"}
];

function App() {
  const [tasks, setTasks] = useState(dummy_tasks);

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
