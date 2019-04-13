import React from "react";
import { connect } from "react-redux";
import { getCampusStudents } from "../store";
import Student from "./Student";

const mapStateToProps = state => ({
  students: state.students,
  campuses: state.campuses
});

const SingleCampus = ({ match, students, campuses }) => {
  const campus = campuses.find(_campus => _campus.id === match.params.id);
  const campusStudents = campus
    ? getCampusStudents(campus.id, students)
    : null;

  return campus ? (
    <div className="card">
      <div className="card-body">
        <img src={campus.imgUrl} className="card-img-top" />
        <h4 className="card-title">Campus: {campus.name}</h4>
        <p className="card-text">Address: {campus.address}</p>
        <p className="card-text">Description: {campus.description}</p>
        <div className="card-text">
          Students:{" "}
          {campusStudents ? (
            <ul className="list-group">
              {campusStudents.map(_student => (
                  <Student student={_student} key={_student.id} />
              ))}
            </ul>
          ) : (
            "No Students"
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default connect(mapStateToProps)(SingleCampus);