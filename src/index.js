const express = require("express");
const { PORT } = require("./config");
const routerApi = require("./routers/index");

const app = express();
app.use("/api/v1", routerApi);

app.listen(PORT, () => {
  console.log(`Listening at port: ${PORT}`);
});