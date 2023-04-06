import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const generateTodoData = (text) => ({
  id: nanoid(),
  text,
  isDone: false,
});

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.unshift(action.payload);
      },
      prepare: (text) => ({ payload: generateTodoData(text) }),
    },

    deleteTodo: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),

    editTodo: (state, action) => {
      const todo = state.find((todo) => todo.id == action.payload.id);
      todo.text = action.payload.text;
    },

    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id == action.payload);
      todo.isDone = !todo.isDone;
    },
  },
});

const todosReducer = todosSlice.reducer;

export const { addTodo, deleteTodo, toggleTodo, editTodo } = todosSlice.actions;
export default todosReducer;
