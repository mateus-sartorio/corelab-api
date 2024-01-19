import express from "express";

const PORT = 3000;

const app = express();
app.listen(PORT, () => {
  console.log(`Connected to db. Listening on port ${PORT}`);
});
