const { Router } = require("express");
const tasksRouter = Router();

tasksRouter.get("/", (req, res) => {
  res.send("Hello World");
})

module.exports = {
  tasksEndpoint: "/tasks",
  tasksRouter
};