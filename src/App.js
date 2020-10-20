import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }, []);

  // FILTER FUNCTION
  const handleFilter = useCallback(() => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((el) => el.done));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((el) => !el.done));
        break;
      default:
        setFilteredTodos(todos);
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [status, todos]);

  useEffect(() => {
    handleFilter();
  }, [handleFilter]);

  return (
    <div className='App'>
      <header>
        <h1>Todo App</h1>
      </header>
      <Form {...{ input, setInput, todos, setTodos, setStatus }} />
      <TodoList {...{ todos, setTodos, filteredTodos }} />
    </div>
  );
};

export default App;
