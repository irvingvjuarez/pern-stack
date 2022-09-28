const handleError = require("./handleError");

const getAllTasks = async (db) => {
  return await handleError(async () => {
    const data = await db.query("SELECT * FROM tasks");
    return data.rows;
  });
}

module.exports = getAllTasks;