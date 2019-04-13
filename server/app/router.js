const express = require("express");
const router = express.Router();
const { Student, Campus } = require("../db");

router.get("/campuses", (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(e => console.log(e.message));
});

router.post("/campuses", (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.status(201).json(campus))
    .catch(e => console.log(e.message));
});

router.get("/students", (req, res, next) => {
  Student.findAll()
    .then(students => res.json(students))
    .catch(e => console.log(e.message));
});

router.post("/students", (req, res, next) => {
  Student.create(req.body)
    .then(students => res.status(201).json(students))
    .catch(e => console.log(e.message));
});

module.exports = router;
