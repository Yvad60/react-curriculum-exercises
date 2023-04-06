import { useDispatch, useSelector } from "react-redux";
import { TodoRow } from "./TodoRow";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);
  const handleDeleteTodo = (todoId) => dispatch(deleteTodo(todoId));

  return (
    <div className="mt-5">
      {todos.length > 0 ? (
        todos.map((todo) => <TodoRow todo={todo} key={todo.id} />)
      ) : (
        <h2 className="text-xl mt-10 font-semibold text-center text-gray-700">
          What is your main focus today?
        </h2>
      )}
    </div>
  );
};

export default TodoList;
