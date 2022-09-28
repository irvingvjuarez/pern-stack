const getSingleTask = async (db, id) => {
  const data = await db.query(`SELECT * FROM tasks WHERE task_id = ${id}`);
  return data.rows;
}

module.exports = getSingleTask;