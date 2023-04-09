import { createContext, useState } from "react";

export const todoContext = createContext({});

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const editTodo = (todoId, field, newValue) =>
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === todoId ? { ...todo, [field]: newValue } : todo
      )
    );

  return (
    <todoContext.Provider value={{ todos, setTodos, editTodo }}>
      {children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
