import { useState } from 'react';
import './App.css';
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
        <TaskList tasks={tasks} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
