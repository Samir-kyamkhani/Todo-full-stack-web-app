import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "./redux/actions/todoActions";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [fatchTodo, setFatchTodo] = useState(false);

  useEffect(() => {
    dispatch(fetchTodos());
    setFatchTodo(true);
  }, [todos ,dispatch]);
  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8">
        <div
          className="w-full max-w-2xl mx-auto
       shadow-md rounded-lg px-4 py-3 text-black"
        >
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
            <TodoForm/>
          </h1>
          <div className="flex flex-col gap-4">
          {/*Loop and Add TodoItem here */}
          {todos.map((todo,index) => (
            <TodoList key={index} todo={todo} />
          ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
