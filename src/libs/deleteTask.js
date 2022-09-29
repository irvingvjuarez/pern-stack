const handleError = require("./handleError")

const deleteTask = async (db, id) => {
  return await handleError(async () => {
    const result = await db.query("DELETE FROM tasks WHERE task_id = $1 RETURNING *", [id]);
    return result.rows[0] ?? null;
  });
}

module.exports = deleteTask;