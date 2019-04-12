const app = require("./app");
const router = require("./router");

app.use("/api", router);

module.exports = { app };
