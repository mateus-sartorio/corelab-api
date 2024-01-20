import { Schema, model } from "mongoose";

interface Todo {
  title: string;
  body: string;
  isFavorited: boolean;
  color: string;
}

const todoSchema = new Schema<Todo>({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  isFavorited: {
    type: Boolean,
    required: true,
    default: false,
  },
  color: {
    type: String,
    required: true,
    default: "#bae2ff",
    match: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  },
});

export const TodoModel = model<Todo>("Todo", todoSchema);
