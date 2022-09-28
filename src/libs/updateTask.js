const getSingleTask = require("./getSingleTask");

const updateTask = async (db, id, data) => {
  const { name, description } = data;
  const oldTask = await getSingleTask(db, id);
  
  const response = await db.query(`UPDATE tasks SET task_name = '${name || oldTask.task_name}', task_description = '${description || oldTask.task_description} WHERE task_id = ${id}'`)
  return response;
}

module.exports = updateTask;