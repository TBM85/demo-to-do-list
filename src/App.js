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
  {id: 4, task: "Write a new task"},
  {id: 5, task: "Press the 'cross' button to delete the text entered in the input"},
  {id: 6, task: "Press the 'hide' button to hide the form"},
  {id: 7, task: "Press the 'checkmark' button to cross out the tasks performed"},
  {id: 8, task: "Press the 'checkmark' button again to undo the cross out task"},
  {id: 9, task: "Click on a task to open the editing options"},
  {id: 10, task: "Press the 'edit' button to change the text in the task"},
  {id: 11, task: "Change the text in the task"},
  {id: 12, task: "Press the 'save' button to save the changes made"},
  {id: 13, task: "Click the same task again"},
  {id: 14, task: "Press the 'edit' button and change the text in the task again"},
  {id: 15, task: "Press the 'cancel' button to not save the changes"},
  {id: 16, task: "Click on the same task one more time"},
  {id: 17, task: "Press the 'delete' button to delete a task"},
  {id: 18, task: "Check a task and click on that task"},
  {id: 19, task: "Click on a task again to close the editing options"}
];

function App() {
  const [tasks, setTasks] = useState(dummy_tasks);

  // Receive the new task and add it to the tasks array
  const addTaskHandler = (taskData) => {
    setTasks((prevTasks) => {
      return [taskData, ...prevTasks];
    })
  }

  // Receive the updated tasks
  const updateTasks = (updatedTasks) => {
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <Header />
        <div className="container">
          <AddForm onPassTask={addTaskHandler} />
          {tasks.length > 0 ? (
            <TaskList tasks={tasks} onUpdateTasks={updateTasks} />
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
