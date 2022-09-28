const { Pool } = require("pg");

const db = new Pool({
  user: "postgres",
  password: "Losdulces11",
  host: "localhost",
  port: 5432,
  database: "pern_stack"
})

module.exports = db;