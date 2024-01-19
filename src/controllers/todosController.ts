import { Request, Response } from "express";
import { TodoModel } from "../models/todo";

export async function getAllTodos(request: Request, response: Response) {
  const data = await TodoModel.find();
  response.json(data);
}

export async function getTodo(request: Request, response: Response) {
  const id = request.params.id;
  const data = await TodoModel.find({ _id: id });
  response.json(data);
}

export async function createTodo(request: Request, response: Response) {
  try {
    const { title, body, isFavorited } = request.body;
    const newTodo = new TodoModel({ title, body, isFavorited });
    const data = await newTodo.save();
    response.json(data);
  } catch (e) {
    response.status(400).json(e);
  }
}

export async function updateTodo(request: Request, response: Response) {
  try {
    const id = request.params.id;
    const data = await TodoModel.findOneAndUpdate({ _id: id }, request.body, { new: true });
    response.json(data);
  } catch (e) {
    response.status(400).json(e);
  }
}
