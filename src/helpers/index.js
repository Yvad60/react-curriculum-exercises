import { nanoid } from "nanoid";

export const generateTodoData = (task) => ({
  id: nanoid(),
  task,
  isDone: false,
});
