const db = require("../db");

class tasksController {
  constructor() {
    this.db = db;
  }

  async getTasks() {
    const res = await db.query("SELECT * FROM tasks");
    const tasks = res.rows;
    return tasks;
  }

  async setTask(query) {
    const res = await db.query(query);
    return res;
  }
}

module.exports = tasksController;