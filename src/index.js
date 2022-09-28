const express = require("express");
const { PORT } = require("./config");
const routerApi = require("./routers/index");
const defaultMiddlewares = require("./middlewares/index");

const app = express();
defaultMiddlewares(app);

app.use("/api/v1", routerApi);

app.listen(PORT, () => {
  console.log(`Listening at port: ${PORT}`);
});