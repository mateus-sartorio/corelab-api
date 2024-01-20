import { Schema, model } from 'mongoose'

interface Todo {
  title: string
  body: string
  isFavorited: boolean
}

const todoSchema = new Schema<Todo>({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  isFavorited: {
    type: Boolean,
    required: true,
    default: false
  }
})

export const TodoModel = model<Todo>('Todo', todoSchema)
