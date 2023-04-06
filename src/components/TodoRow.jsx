import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../features/todos/todoSlice";
import TodoEdit from "./TodoEdit";

export const TodoRow = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);

  const handleTodoDoneCheck = () => dispatch(toggleTodo(todo.id));
  const handleTodoDelete = () => dispatch(deleteTodo(todo.id));

  return (
    <div className="flex items-center w-full gap-5 py-5 border-b border-slate-300">
      <input
        type="checkbox"
        value={todo.isDone}
        className="w-6 h-6 rounded accent-gray-500"
        onChange={handleTodoDoneCheck}
      />
      {isEditable ? (
        <TodoEdit
          prevTodoText={todo.text}
          todoId={todo.id}
          setIsEditable={setIsEditable}
        />
      ) : (
        <>
          <p
            className={`w-[80%] break-words text-[17px] ${
              todo.isDone && "line-through"
            }`}
          >
            {todo.text}
          </p>
          <i
            className="mr-1 text-blue-900 bi bi-pencil-square text-[22px]"
            onClick={() => setIsEditable(true)}
          ></i>
        </>
      )}
      <button
        className="py-[9px] px-3 rounded-full bg-[#fffdfd] shadow"
        onClick={handleTodoDelete}
      >
        <i className="text-xl text-red-600 bi bi-trash3-fill"></i>
      </button>
    </div>
  );
};
