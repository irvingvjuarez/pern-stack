const setTask = async (db, data) => {
  const { name, description } = data;
  const response = await db.query(`INSERT INTO tasks(task_name, task_description) VALUES('${name}', '${description}')`);
  return response;
}

module.exports = setTask;