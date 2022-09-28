const getAllTasks = async (db) => {
  const data = await db.query("SELECT * FROM tasks");
  return data.rows;
}

module.exports = getAllTasks;