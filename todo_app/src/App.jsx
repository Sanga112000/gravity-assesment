import React, { useState, useEffect } from 'react';
import TodoApp from './components/TodoApp';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">React To-Do List</h1>
      <TodoApp />
    </div>
  );
}

export default App;