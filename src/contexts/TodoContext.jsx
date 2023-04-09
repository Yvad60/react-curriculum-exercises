import { createContext, useState } from "react";
import { generateTodoData } from "../helpers";

export const todoContext = createContext({});

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) =>
    setTodos((prevState) => [generateTodoData(todoText), ...prevState]);

  const editTodo = (todoId, field, newValue) =>
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === todoId ? { ...todo, [field]: newValue } : todo
      )
    );

  const deleteTodo = (todoId) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));

  return (
    <todoContext.Provider value={{ todos, addTodo, editTodo, deleteTodo }}>
      {children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
