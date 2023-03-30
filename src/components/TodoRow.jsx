import { useState } from "react";

export const TodoRow = ({ deleteTodo, editTodo, todo }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(todo.task);

  const handleChange = (event) => setUpdatedTask(event.target.value);

  const handleSave = () => {
    editTodo(todo.id, "task", updatedTask);
    setIsEditable(false);
  };

  const handleSaveByEnter = (event) => {
    if (event.key === "Enter") handleSave();
  };

  const handleTodoDoneCheck = () => editTodo(todo.id, "isDone", !todo.isDone);

  return (
    <div className="flex items-center w-full gap-5 py-5 border-b border-slate-300">
      <input
        type="checkbox"
        name=""
        value={todo.isDone}
        className="w-6 h-6 rounded accent-gray-500"
        onChange={handleTodoDoneCheck}
      />
      {isEditable ? (
        <>
          <textarea
            className="items-center block w-full px-2 bg-white border rounded-md outline-none resize-none max-h-fit h-11 pt-[10px]"
            type="text"
            value={updatedTask}
            onChange={handleChange}
            onKeyDown={handleSaveByEnter}
          />
          <i
            className="mr-1 text-xl text-blue-900 bi bi-save2"
            onClick={handleSave}
          ></i>
        </>
      ) : (
        <>
          <p className={`w-full text-[17px] ${todo.isDone && "line-through"}`}>
            {todo.task}
          </p>
          <i
            className="mr-1 text-blue-900 bi bi-pencil-square text-[22px]"
            onClick={() => setIsEditable(true)}
          ></i>
        </>
      )}
      <button
        className="py-[9px] px-3 rounded-full bg-[#fffdfd] shadow"
        onClick={deleteTodo}
      >
        <i className="text-xl text-red-600 bi bi-trash3-fill"></i>
      </button>
    </div>
  );
};
