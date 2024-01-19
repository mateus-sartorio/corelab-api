import express from "express";
import { connectDB } from "./utils/connect";
import todosRouter from "./routes/todosRouter";
import bodyParser from "body-parser";

const app = express();
void connectDB(app);

app.use(express.json());

app.use("/api/v1/todos", todosRouter);
