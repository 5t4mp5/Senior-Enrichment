import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeStudent } from "../../store";

const mapDispatchToProps = dispatch => ({
  deleteStudent: (student) => dispatch(removeStudent(student))
});

const Student = ({ student, deleteStudent }) => (
  <li className="list-group-item" style={{ display: "flex", justifyContent:"space-between", backgroundColor: "LightGray" }}>
    <Link to={`/students/${student.id}`} style={{ fontSize: "24px", color: "Snow" }}>{student.firstName} {student.lastName}</Link>
    <button type="button" onClick={() => deleteStudent(student)} className="btn btn-danger">X</button>
  </li>
);

export default connect(null, mapDispatchToProps)(Student);
