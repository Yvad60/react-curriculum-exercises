import { nanoid } from "nanoid";

export const createTodo = (task) => ({ id: nanoid(), task, isDone: false });
