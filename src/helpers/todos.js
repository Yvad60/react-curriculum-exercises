import { nanoid } from "nanoid";

export const generateTodoData = (text) => ({ id: nanoid(), text, isDone: false });
