const { Router } = require("express");
const { tasksEndpoint, tasksRouter } = require("./tasks.router");

const routerApi = Router();
routerApi.use(tasksEndpoint, tasksRouter);

module.exports = routerApi;