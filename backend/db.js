const mongoose = require("mongoose");
//mongodb+srv://sept1st2c-2:qAucQyV5kSpOskC8@cluster0.ldbnjee.mongodb.net/todos

mongoose.connect(
  "mongodb+srv://sept1st2c-2:qAucQyV5kSpOskC8@cluster0.ldbnjee.mongodb.net/todos"
);

const todosSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todosSchema);
module.exports = {
  todo,
};
