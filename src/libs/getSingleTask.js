const getSingleTask = async (db, id) => {
  const data = await db.query(`SELECT * FROM tasks WHERE task_id = ${id}`);
  const singleTask = data.rows[0] ?? null;
  return singleTask;
}

module.exports = getSingleTask;