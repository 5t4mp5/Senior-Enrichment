const app = require("./app");
const router = require("./router");

app.use("/api", router);

app.use((error, req, res, next) => {
    console.log(Object.keys(error));
    let errors = [error];
    if (error.errors) {
      error = error.errors.map(_error => {
        return _error.message;
      });
    } else if (error.original) {
      errors = [error.original.message];
    }
    res.status(error.status || 500).send({ errors });
  });

module.exports = { app };
