import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://dummyjson.com/todos');
        const data = await response.json();
        setTodos(data.todos);
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      }
    };
    fetchTodos();
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = async (text) => {
    try {
      const response = await fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ todo: text, completed: false, userId: 1 })
      });
      const newTodo = await response.json();
      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error('Failed to add todo:', error);
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div className="bg-white shadow-md rounded p-4">
      <AddTodo onAdd={addTodo} />
      <Filter currentFilter={filter} onChangeFilter={setFilter} />
      <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
};

export default TodoApp;