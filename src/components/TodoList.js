import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {todos.length > 0 &&
          todos.map((todo, index) => (
            <Todo key={todo.id} {...{ todo, todos, setTodos }} />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
