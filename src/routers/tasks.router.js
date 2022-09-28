const { Router } = require("express");
const tasksRouter = Router();

tasksRouter.get("/", (req, res) => {
  res.send("Returning a list of tasks");
})

tasksRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Sending task: ${id}`);
})

tasksRouter.post("/", (req, res) => {
  res.send("Creating a new task");
})

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