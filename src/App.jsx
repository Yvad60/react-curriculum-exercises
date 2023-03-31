import { useState } from "react";
import { TodoRow } from "./components/TodoRow";
import { generateTodoData } from "./helpers";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isTodoInvalid, setIsTodoInvalid] = useState(false);

  const handleTaskInputChange = (event) => {
    setIsTodoInvalid(false);
    setNewTask(event.target.value);
  };

  const addTodo = () => {
    if (!newTask) return setIsTodoInvalid(true);
    setTodos((prevState) => [generateTodoData(newTask), ...prevState]);
    setNewTask("");
  };

  const handleSaveByEnter = (event) => {
    if (event.key === "Enter") addTodo();
  };

  const handleTodoDelete = (todoId) =>
    setTodos((prevState) => prevState.filter((todo) => todo.id !== todoId));

  const editTodo = (todoId, field, newValue) =>
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === todoId ? { ...todo, [field]: newValue } : todo
      )
    );

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
            value={newTask}
            onChange={handleTaskInputChange}
            onKeyDown={handleSaveByEnter}
          />

          <button
            className="bg-[#018d81] h-8 w-[34px] text-white text-3xl flex justify-center items-center rounded-full"
            onClick={addTodo}
          >
            +
          </button>
        </div>
        {isTodoInvalid && (
          <p className="text-red-500 text-sm mt-2 text-center">
            Todo can not be empty
          </p>
        )}

        <div className="mt-5">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <TodoRow
                deleteTodo={() => handleTodoDelete(todo.id)}
                todo={todo}
                editTodo={editTodo}
                key={todo.id}
              />
            ))
          ) : (
            <h2 className="text-xl mt-10 font-semibold text-center text-gray-700">
              What is your main focus today?
            </h2>
          )}
        </div>
      </div>
    </main>
  );
};

export default App;
