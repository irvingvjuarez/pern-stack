const handleError = require("./handleError");

const setTask = async (db, data) => {
  const { name, description } = data;

  return await handleError(async () => {
    const response = await db.query(`INSERT INTO tasks(task_name, task_description) VALUES('${name}', '${description}') RETURNING *`);
    return response.rows[0];
  })

}

module.exports = setTask;