const express = require("express");
const router = express.Router();
const { Student, Campus } = require("../db");

router.get("/campuses", (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(e => console.log(e.message));
});

router.post("/campuses", (req, res, next) => {
  console.log("POST CAMPUS");
  Campus.create(req.body)
    .then(campus => res.status(201).json(campus))
    .catch(e => console.log(e.message));
});

router.delete("/campuses/:id", (req, res, next) => {
  Campus.findByPk(req.params.id)
    .then(campus => campus.destroy())
    .then(response => res.status(204).json(response))
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

router.delete("/students/:id", (req, res, next) => {
  Student.findByPk(req.params.id)
    .then(student => student.destroy())
    .then(response => res.status(204).json(response))
    .catch(e => console.log(e.message));
});

module.exports = router;
