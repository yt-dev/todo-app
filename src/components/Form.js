import React from 'react';

const Form = ({ input, setInput, todos, setTodos }) => {
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.random() * 1000,
        title: input,
        createdAt: new Date().toLocaleString(),
        done: false,
      },
    ]);
    setInput('');
  };

  return (
    <form>
      <input
        className='todo-input'
        type='text'
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={submit} className='todo-button' type='submit'>
        <i className='fas fa-plus-square'></i>
      </button>
      {/* <div className='select'>
        <select name='todos' className='filter-todo'>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div> */}
    </form>
  );
};

export default Form;
