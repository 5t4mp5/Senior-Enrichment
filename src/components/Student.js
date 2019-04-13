import React from "react";
import { Link } from "react-router-dom";

const Student = ({ student }) => (
  <li className="list-group-item">
    <Link to={`/students/${student.id}`}>{student.firstName} {student.lastName}</Link>
  </li>
);

export default Student;
