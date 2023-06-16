import { nanoid } from "nanoid";

export const createTodo = (task: string): Todo => ({ id: nanoid(), task, isDone: false });
