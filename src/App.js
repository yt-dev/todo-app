import React from 'react';
import './App.css';

import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className='App'>
      <header>
        <h1>Todo App</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
};

export default App;
