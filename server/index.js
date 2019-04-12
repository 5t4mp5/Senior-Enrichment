const express = require("express");
const app = express();
const path = require("path");
const { dbSyncAndSeed, Student, Campus } = require("./db");

const port = process.env.PORT || 3000;

app.get("/app.js", (req, res, next) =>
  res.sendFile(path.join(__dirname, "..", "dist", "main.js"))
);

app.get("/api/campuses", (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(e => console.log(e.message));
});

app.get("/api/students", (req, res, next) => {
  Student.findAll()
    .then(students => res.json(students))
    .catch(e => console.log(e.message));
});

app.get("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "..", "index.html"))
);

dbSyncAndSeed().then(() =>
  app.listen(port, () => console.log(`listening on port ${port}`))
);
