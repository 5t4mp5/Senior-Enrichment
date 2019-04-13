import React from "react";
import { connect } from "react-redux";
import { getStudentCampus } from "../store";

const mapStateToProps = state => ({
  students: state.students,
  campuses: state.campuses
});

const SingleStudent = ({ match, students, campuses }) => {
  const student = students.find(_student => _student.id === match.params.id);
  const campus = getStudentCampus(student.campusId, campuses);
  return (
    <div className="card">
      <div className="card-body">
        <img src={student.imageUrl} className="card-img-top" />
        <h4 className="card-title">
          {student.firstName} {student.lastName}
        </h4>
        <p className="card-text">{student.email}</p>
        <p className="card-text">{student.gpa}</p>
        <p className="card-text">
          {campus ? campus.name : "No Campus"}
        </p>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(SingleStudent);
