const db = require("../db");

const getAllTasks = async () => {
  const data = await db.query("SELECT * FROM tasks");
  return data.rows;
}

module.exports = getAllTasks;