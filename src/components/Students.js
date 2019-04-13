import React from "react";
import { connect } from "react-redux";
import Student from "./Student";

const mapStateToProps = state => ({
  students: state.students
});

const Students = ({ students }) => (
  <ul className="list-group">
    {students.map(student => (
      <Student key={student.id} student={student} />
    ))}
  </ul>
);

export default connect(mapStateToProps)(Students);
