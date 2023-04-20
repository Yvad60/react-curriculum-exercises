import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoRow } from "./TodoRow";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className="mt-5">
      {todos.length > 0 ? (
        todos.map((todo) => <TodoRow todo={todo} key={todo.id} />)
      ) : (
        <h2 className="mt-10 text-xl font-semibold text-center text-gray-700">
          What is your main focus today?
        </h2>
      )}
    </div>
  );
};

export default TodoList;
