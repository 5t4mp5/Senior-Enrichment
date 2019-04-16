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

  if (!student && students.length)
    return (
      <div className="alert alert-danger">No Student Found for this ID</div>
    );

  return student ? (
    <div className="container">
      <div className="card" style={{ backgroundColor: "Silver" }}>
        <div
          className="card-body"
          style={{ backgroundColor: "Silver", color: "Snow" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img
              src={student.imgUrl}
              className="card-img-top"
              style={{
                height: "360px",
                width: "360px",
                objectFit: "cover",
                borderRadius: "30%"
              }}
            />
            <div style={{ fontSize: "24px" }}>
              <h2 className="card-title">
                Name: {student.firstName} {student.lastName}
              </h2>
              <p className="card-text">Email: {student.email}</p>
              <p className="card-text">GPA: {student.gpa}</p>
            </div>
          </div>
          <p className="card-text">
            Campus: {campus ? <Campus campus={campus} /> : "No Campus"}
          </p>
        </div>
      </div>
      <UpdateStudent student={student} />
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default connect(mapStateToProps)(SingleStudent);
