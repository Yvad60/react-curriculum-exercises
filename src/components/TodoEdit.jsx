import { useContext, useState } from "react";
import { todoContext } from "../contexts/TodoContext";

const TodoEdit = ({ prevTodoText, todoId, setIsEditable }) => {
  const { editTodo } = useContext(todoContext);
  const [updatedTodoText, setUpdatedTodoText] = useState(prevTodoText);

  const handleChange = (event) => setUpdatedTodoText(event.target.value);
  const handleSave = () => {
    if (updatedTodoText.trim()) {
      editTodo(todoId, "text", updatedTodoText.trim());
      setIsEditable(false);
    }
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
        className="mr-1 text-xl text-blue-900 cursor-pointer bi bi-save2"
        onClick={handleSave}
      ></i>
    </>
  );
};

export default TodoEdit;
