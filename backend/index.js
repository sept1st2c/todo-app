const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hii");
});

app.get("/todo", (req, res) => {
  const createPayLoad = req.body;
  const parsedPayLoad = createTodo.safeParse(createPayLoad);
  if (!parsedPayLoad.success) {
    res.status(411).json({
      msg: "wrong input",
    });
    return;
  }
});

app.get("/todos", (req, res) => {});
app.get("/completed", (req, res) => {
  const updatePayLoad = req.body;
  const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
  if (!parsedPayLoad.success) {
    res.status(411).json({
      msg: "wrong inputss",
    });
    return;
  }
});
