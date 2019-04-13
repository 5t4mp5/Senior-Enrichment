import React from "react";
import { connect } from "react-redux";
import Student from "./Student";

const mapStateToProps = state => ({
  students: state.students
});

const Students = ({ students }) => (
  <div>
    <h1>STUDENTS</h1>
    <ul className="list-group">
      {students.map(student => (
        <Student key={student.id} student={student} />
      ))}
    </ul>
  </div>
);

export default connect(mapStateToProps)(Students);
