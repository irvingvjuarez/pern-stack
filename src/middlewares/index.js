const express = require("express");

function defaultMiddlewares(app) {
  app.use(express.json());
}

module.exports = defaultMiddlewares;