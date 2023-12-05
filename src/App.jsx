import { useState } from 'react';

import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';

import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    setTasks((prevTasks) => [...prevTasks, { title, isCompleted: false }]);
  };

  const removeTask = (taskToRemove) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task !== taskToRemove);
    });
  };

  const toggleTask = (task) => {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask === task
          ? {
              ...prevTask,
              isCompleted: !prevTask.isCompleted,
            }
          : prevTask
      )
    );
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div>
      <h1>TO DO</h1>
      <div className='container'>
        <AddTaskForm addTask={addTask} />
        <button onClick={clearTasks}>Clear All Tasks</button>
      </div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
};

export default App;
