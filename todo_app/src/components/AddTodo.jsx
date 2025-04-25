// components/AddTodo.jsx
import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 d-flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task"
        className="form-control"
      />
      <button type="submit" className="btn btn-success">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
