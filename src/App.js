import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className='App'>
      <header>
        <h1>Todo App</h1>
      </header>
      <Form {...{ input, setInput, todos, setTodos }} />
      <TodoList {...{ todos, setTodos }} />
    </div>
  );
};

export default App;
