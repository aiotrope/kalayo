const express = require("express");
const { Todo } = require("../mongo");
const redis = require("../redis/index");
const router = express.Router();

/* GET todos listing. */
router.get("/", async (_, res) => {
  try {
    const reply = await redis.getAsync("todos");
    if (reply) {
      console.log("Using cached data");
      res.send(JSON.parse(reply));
      return;
    }
    const todos = await Todo.find({});
    const savedTodos = await redis.setAsync(
      "todos",
      JSON.stringify(todos),
      "EX",
      5
    );
    console.log("cached hit", savedTodos);
    res.send(todos);
  } catch (error) {
    console.error(error);
  }
});

/* POST todo to listing. */
router.post("/", async (req, res) => {
  const count = await Todo.countDocuments({})
  const todo = await Todo.create({
    text: req.body.text,
    done: false,
  });
  await redis.setAsync('add', JSON.stringify(count + 1))
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;
  req.todo = await Todo.findById(id);
  if (!req.todo) return res.sendStatus(404);

  next();
};

/* DELETE todo. */
singleRouter.delete("/", async (req, res) => {
  try {
    await redis.client.del(`todos: ${req.todo.id}`);
    await Todo.findByIdAndDelete(req.todo.id);

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
  }
});

/* GET todo. */
singleRouter.get("/", async (req, res) => {
  try {
    const reply = await redis.getAsync(`todos: ${req.todo.id}`);
    if (reply) {
      console.log("Using cached data");
      res.send(JSON.parse(reply));
      return;
    }

    const response = await Todo.findById(req.todo.id);
    await redis.setAsync(
      `todos: ${response.id}`,
      JSON.stringify(response),
      "EX",
      5
    );
    if (!response) return res.sendStatus(405);

    return res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
  }
  // Implement this
});

/* PUT todo. */
singleRouter.put("/", async (req, res) => {
  const filter = { _id: req.todo.id };
  const update = {
    text: req.body.text,
    done: req.body.done,
  };
  try {
    const response = await Todo.findOneAndUpdate(filter, update, { new: true });
    if (!response) return res.sendStatus(405);
    return res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
  }
});

router.use("/:id", findByIdMiddleware, singleRouter);

module.exports = router;
