import './Task.css';

const Task = ({ task, removeTask, toggleTask }) => (
  <div className="task-container">
    <input
      type="checkbox"
      className="checkbox"
      onClick={() => toggleTask(task)}
      checked={task.isCompleted}
    />
    <p className="task-title"> {task.title} </p>
    <span onClick={() => removeTask(task)}> 🗑️ </span>
  </div>
);

export default Task;
