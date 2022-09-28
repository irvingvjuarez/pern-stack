const { Router } = require("express");
const taskController = require("../controllers/tasks.controller");

const tasksRouter = Router();
const controller = new taskController();

tasksRouter.get("/", controller.getTasks);

tasksRouter.get("/:id", controller.getOneTask);

tasksRouter.post("/", async (req, res) => {
  const { body } = req;
  const { name, description } = body;

  const query = `INSERT INTO tasks(task_name, task_description)
    VALUES('${name}', '${description}')
  `
  const response = await controller.setTask(query);
  res.json(response);
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