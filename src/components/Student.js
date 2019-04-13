import React from "react";

const Student = ({ student }) => (
  <li className="list-group-item">
    {student.firstName} {student.lastName}
  </li>
);

export default Student;
