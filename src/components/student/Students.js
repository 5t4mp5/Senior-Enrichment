import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Student from "./Student";

const mapStateToProps = state => ({
  students: state.students
});

const Students = ({ students }) => {
  return students ? (
    <div className="container">
      <span>
        <h1>STUDENTS</h1>
        <Link
          className="btn btn-primary"
          to="/students/create"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          Create Student
        </Link>
      </span>
      <ul className="list-group">
        {students.map(student => (
          <Student key={student.id} student={student} />
        ))}
      </ul>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default connect(mapStateToProps)(Students);
