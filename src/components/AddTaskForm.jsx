import { useState } from 'react';

import './AddTaskForm.css';

const AddTaskForm = ({ addTask }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    value && addTask(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        type="text"
        className="text-input"
        placeholder="What would you like to do?"
        onChange={handleChange}
      />
      <button type="submit">+</button>
    </form>
  );
};

export default AddTaskForm;
