const { Router } = require("express");
const taskController = require("../controllers/tasks.controller");

const tasksRouter = Router();
const controller = new taskController();

tasksRouter.get("/", controller.getTasks);
tasksRouter.get("/:id", controller.getOneTask);

tasksRouter.post("/", controller.setTask);

tasksRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Updating task: ${id}`);
})

tasksRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Deleting task: ${id}`);
})

module.exports = {
  tasksEndpoint: "/tasks",
  tasksRouter
};