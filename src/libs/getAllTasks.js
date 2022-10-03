const handleError = require("./handleError");

const getAllTasks = async (db) => {
  return await handleError(async () => {
    const {rows} = await db.query("SELECT * FROM tasks");
    return rows;
  });
}

module.exports = getAllTasks;