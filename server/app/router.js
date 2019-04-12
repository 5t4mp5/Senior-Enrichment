const express = require("express");
const router = express.Router();
const { Student, Campus } = require("../db");

router.get("/campuses", (req, res, next) => {
    Campus.findAll()
      .then(campuses => res.json(campuses))
      .catch(e => console.log(e.message));
  });
  
  router.get("/students", (req, res, next) => {
    Student.findAll()
      .then(students => res.json(students))
      .catch(e => console.log(e.message));
  });

  module.exports = router;
