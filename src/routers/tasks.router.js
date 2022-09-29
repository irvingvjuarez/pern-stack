const { Router } = require("express");
const taskController = require("../controllers/tasks.controller");

const tasksRouter = Router();
const controller = new taskController();

tasksRouter.get("/", controller.getTasks);
tasksRouter.get("/:id", controller.getOneTask);

tasksRouter.post("/", controller.setTask);

tasksRouter.put("/:id", controller.updateTask);

tasksRouter.delete("/:id", controller.deleteTask);

module.exports = {
  tasksEndpoint: "/tasks",
  tasksRouter
};