import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todoSlice";

const store = configureStore({ reducer: todosReducer });

export default store;
