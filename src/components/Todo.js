import React from 'react';

const Todo = ({ todo, todos, setTodos }) => {
  const delTodo = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completedTodo = () => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <div className='todo'>
      <li className={`todo-item ${todo.done && 'completed'}`}>{todo.title}</li>
      <button onClick={completedTodo} className='complete-btn'>
        <i className='fas fa-check'></i>
      </button>
      <button onClick={delTodo} className='trash-btn'>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};

export default Todo;
