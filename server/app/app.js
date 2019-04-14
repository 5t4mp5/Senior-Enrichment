const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());

app.get("/app.js", (req, res, next) =>
  res.sendFile(path.join(__dirname, "..", "..", "dist", "main.js"))
);

app.get("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "..", "..", "index.html"))
);

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

module.exports = app;
