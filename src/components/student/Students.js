import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Student from "./Student";
import LinkButton from "../../LinkButton";
const mapStateToProps = state => ({
  students: state.students
});

const Students = ({ students }) => {
  return students ? (
    <div className="container" style={{ color: "DimGray" }}>
      <span>
        <h1>STUDENTS</h1>
        <LinkButton
          to="/students/create"
          className="btn btn-primary"
          label="Create Student"
        />
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
