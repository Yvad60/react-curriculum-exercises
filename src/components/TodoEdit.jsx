import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../features/todos/todoSlice";

const TodoEdit = ({ prevTodoText, todoId, setIsEditable }) => {
  const dispatch = useDispatch();
  const [updatedTodoText, setUpdatedTodoTask] = useState(prevTodoText);
  const handleChange = (event) => setUpdatedTodoTask(event.target.value);

  const handleSave = () => {
    dispatch(editTodo({ id: todoId, text: updatedTodoText }));
    setIsEditable(false);
  };

  const handleSaveByEnter = (event) => event.key === "Enter" && handleSave();

  return (
    <>
      <textarea
        className="items-center block w-full px-2 bg-white border rounded-md outline-none resize-none max-h-fit h-11 pt-[10px]"
        type="text"
        value={updatedTodoText}
        onChange={handleChange}
        onKeyDown={handleSaveByEnter}
      />
      <i
        className="mr-1 text-xl text-blue-900 bi bi-save2 cursor-pointer"
        onClick={handleSave}
      ></i>
    </>
  );
};

export default TodoEdit;
