import React, { useEffect, useState } from "react";
import {
  updatedTodo,
  deleteTodo,
  isTodoCompleted,
} from "../redux/actions/todoActions";
import { useDispatch } from "react-redux";

const TodoList = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [updateTodoMsg, setUpdateTodoMsg] = useState(todo.todo);

  
  const dispatch = useDispatch();

  const editTodo = () => {
    setIsTodoEditable((prev) => !prev);
    dispatch(updatedTodo(todo._id, { ...todo, todo: updateTodoMsg }));
  };

  const handleToggleTodo = () => {
    dispatch(isTodoCompleted(todo._id));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo._id));
  };

  // useEffect(() => {
  //   setUpdateTodoMsg(todo.todo);
  // }, [todo]);
  

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.isCompleted}
        onChange={handleToggleTodo}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.isCompleted ? "line-through" : ""}`}
        value={updateTodoMsg}
        onChange={(e) => setUpdateTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.isCompleted) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.isCompleted}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={handleDeleteTodo}
      >
        ❌
      </button>
    </div>
  );
};

export default TodoList;
