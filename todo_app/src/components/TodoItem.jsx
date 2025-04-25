// components/TodoItem.jsx
import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <tr className="hover:bg-gray-50">
      <td
        onClick={() => onToggle(todo.id)}
        className={`border px-4 py-2 cursor-pointer ${todo.completed ? 'line-through text-muted' : ''}`}
      >
        {todo.todo}
      </td>
      <td className="border px-4 py-2">
        <span className={`badge ${todo.completed ? 'bg-success' : 'bg-warning'}`}>
          {todo.completed ? 'Completed' : 'Pending'}
        </span>
      </td>
      <td className="border px-4 py-2">
        <button
          onClick={() => onDelete(todo.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
