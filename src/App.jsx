import { useState } from "react";
import { useDispatch } from "react-redux";
import TodoList from "./components/TodoList";
import { addTodo } from "./features/todos/todoSlice";

const App = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");
  const [isTodoInvalid, setIsTodoInvalid] = useState(false);

  const handleTodoTextChange = (event) => {
    setIsTodoInvalid(false);
    setTodoText(event.target.value);
  };

  const handleAddTodo = () => {
    if (!todoText.trim()) return setIsTodoInvalid(true);
    dispatch(addTodo(todoText));
    setTodoText("");
  };

  const handleSaveByEnter = (event) => event.key === "Enter" && handleAddTodo();

  return (
    <main className="flex justify-center min-h-screen py-10 bg-slate-100">
      <div className="w-full max-w-[800px]">
        <h1 className="font-bold text-center text-gray-300 select-none text-[116px] font-Alkatra">
          Todos
        </h1>
        <div className="flex w-full px-5 py-3 text-lg bg-white border border-gray-300 shadow-md outline-none rounded-3xl">
          <input
            type="text"
            className="w-full outline-none"
            placeholder="Type task here..."
            value={todoText}
            onChange={handleTodoTextChange}
            onKeyDown={handleSaveByEnter}
          />

          <button
            className="bg-[#018d81] h-8 w-[34px] text-white text-3xl flex justify-center items-center rounded-full"
            onClick={handleAddTodo}
          >
            +
          </button>
        </div>
        {isTodoInvalid && (
          <p className="mt-2 text-sm text-center text-red-500">
            Todo can not be empty
          </p>
        )}
        <TodoList />
      </div>
    </main>
  );
};

export default App;
