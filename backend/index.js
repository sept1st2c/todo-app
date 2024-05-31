const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hii");
});

app.get("/todo", (req, res) => {});

app.get("/todos", (req, res) => {});
app.get("/completed", (req, res) => {});
