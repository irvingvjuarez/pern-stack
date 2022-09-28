const db = require("../db");
const getAllTasks = require("../libs/getAllTasks");
const getSingleTask = require("../libs/getSingleTask");
const setTask = require("../libs/setTask");

class tasksController {
  constructor() {
    this.db = db;
  }

  async getTasks(req, res) {
    const tasks = await getAllTasks(db);

    if(!req && !res) return tasks;
    res.send(tasks);
  }

  async getOneTask(req, res) {
    const { id } = req.params;
    const task = await getSingleTask(db, id);

    if (task) {
      res.json(task);
    } else {
      res.sendStatus(404);
    }
  }

  async setTask({body}, res) {
    const response = await setTask(db, body);
    res.json(response);
  }
}

module.exports = tasksController;