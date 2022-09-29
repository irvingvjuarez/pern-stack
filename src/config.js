const { config } = require("dotenv");

config();

const PORT = process.env.PORT || 3000;
const DB_USER = process.env.DB_USER;
const PASSWORD = process.env.PASSWORD;
const HOST = process.env.HOST;
const DB_PORT = process.env.DB_PORT;
const DATABASE = process.env.DATABASE;

module.exports = {
  PORT,
  DB_USER,
  PASSWORD,
  HOST,
  DB_PORT,
  DATABASE
}