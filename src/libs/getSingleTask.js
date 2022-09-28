const handleError = require("./handleError");

const getSingleTask = async (db, id) => {
  return await handleError(async () => {
    const data = await db.query(`SELECT * FROM tasks WHERE task_id = ${id}`);
    const singleTask = data.rows[0] ?? null;
    return singleTask;
  });
}

module.exports = getSingleTask;