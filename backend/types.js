const zod = require("zod");

const createTodo = z.object({
  tittle: zod.string(),
  description: zod.string(),
});

const updateTodo = z.object({
  id: zod.string(),
});

module.exports = {
  createTodo: createTodo,
  updateTodo: updateTodo,
};
