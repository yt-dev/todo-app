import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {filteredTodos.length > 0 &&
          filteredTodos.map((todo, index) => (
            <Todo key={todo.id} {...{ todo, todos, setTodos }} />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
