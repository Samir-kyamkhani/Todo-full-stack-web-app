import React, {useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');
  
  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      dispatch(addTodo({ todo: todoText, isCompleted: false })); 
      setTodoText('');
    }
  };


  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        className="py-2 px-4 border border-gray-300 rounded-lg mr-2 focus:outline-none"
        placeholder="Enter a new todo"
      />
      <button
        className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;
