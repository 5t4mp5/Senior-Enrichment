import React from "react";
import { connect } from "react-redux";
import { getStudentCampus } from "../../store";
import { Campus } from "../campus";
import UpdateStudent from "./UpdateStudent";

const mapStateToProps = state => ({
  students: state.students,
  campuses: state.campuses
});

const SingleStudent = ({ match, students, campuses }) => {
  const student = students.find(_student => _student.id === match.params.id);
  const campus = student ? getStudentCampus(student.campusId, campuses) : {};
  return student ? (
    <div>
      <div className="card">
        <div className="card-body">
          <img src={student.imgUrl} className="card-img-top" />
          <h4 className="card-title">
            Name: {student.firstName} {student.lastName}
          </h4>
          <p className="card-text">Email: {student.email}</p>
          <p className="card-text">GPA: {student.gpa}</p>
          <p className="card-text">
            Campus: {campus ? <Campus campus={campus} /> : "No Campus"}
          </p>
        </div>
      </div>
      <UpdateStudent student={student} />
    </div>
  ) : null;
};

export default connect(mapStateToProps)(SingleStudent);
