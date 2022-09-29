const getSingleTask = require("./getSingleTask");
const handleError = require("./handleError");

const updateTask = async (db, id, { name, description }) => {
  return await handleError(async () => {
    const oldTask = await getSingleTask(db, id);
    const newName = name || oldTask.task_name;
    const newDescription = description || oldTask.task_description;
    const result = await db.query(
      `UPDATE tasks SET task_name = $1, task_description = $2 WHERE task_id = $3 RETURNING *`,
      [newName, newDescription, id]
    );
    return result.rows[0] ?? null;
  })
}

module.exports = updateTask;