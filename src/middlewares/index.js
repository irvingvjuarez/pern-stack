const express = require("express");
const cors = require("cors");

function defaultMiddlewares(app) {
  app.use(express.json());
  app.use(cors());
}

module.exports = defaultMiddlewares;