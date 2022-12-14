const db = require("../db");
const deleteTask = require("../libs/deleteTask");
const getAllTasks = require("../libs/getAllTasks");
const getSingleTask = require("../libs/getSingleTask");
const setTask = require("../libs/setTask");
const updateTask = require("../libs/updateTask");

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
    const createdTask = await setTask(db, body);
    res.json(createdTask);
  }

  async updateTask(req, res) {
    const { params: {id}, body } = req;
    const result = await updateTask(db, id, body);
    res.json(result);
  }

  async deleteTask(req, res) {
    const { params: { id } } = req;
    const result = await deleteTask(db, id);
    res.json(result);
  }
}

module.exports = tasksController;