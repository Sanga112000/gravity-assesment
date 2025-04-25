import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-4 py-2">Task</th>
          <th className="border px-4 py-2">Status</th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;