import express from "express";
import { connectDB } from "./utils/connect";
import todosRouter from "./routes/todosRouter";
import cors from "cors";

const app = express();
void connectDB(app);

app.use(express.json());
app.use(cors());

app.use("/api/v1/todos", todosRouter);
