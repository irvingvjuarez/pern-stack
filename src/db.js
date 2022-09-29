const { Pool } = require("pg");
const { DB_USER, PASSWORD, HOST, DB_PORT, DATABASE } = require("./config");

const db = new Pool({
  user: DB_USER,
  password: PASSWORD,
  host: HOST,
  port: DB_PORT,
  database: DATABASE
})

module.exports = db;