import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { getCampusStudents } from "../../store";
import { Student } from "../student";
import UpdateCampus from "./UpdateCampus";
import LinkButton from "../../LinkButton";

const mapStateToProps = state => ({
  students: state.students,
  campuses: state.campuses
});

const SingleCampus = ({ location, match, students, campuses }) => {
  const campus = campuses.find(_campus => _campus.id === match.params.id);
  const campusStudents = campus ? getCampusStudents(campus.id, students) : null;

  if (!campus && campuses.length)
    return (
      <div className="alert alert-danger">No Campus Found for This ID</div>
    );

  return campus ? (
    <div className="container">
      <div className="card">
        <div className="card-body" style={{ backgroundColor: "DarkSlateGray" }}>
          <img
            src={campus.imgUrl}
            className="card-img-top"
            style={{
              height: "480px",
              width: "480px",
              objectFit: "cover",
              borderRadius: "30%",
              marginBottom: "10px"
            }}
          />
          <h4 className="card-title">Campus: {campus.name}</h4>
          <p className="card-text">Address: {campus.address}</p>
          <p className="card-text">Description: {campus.description}</p>
          {location.pathname.endsWith("update") ? (
            ""
          ) : (
            <LinkButton
              to={`${location.pathname}update`}
              label="Update Campus"
              className="btn btn-primary"
            />
          )}
          {location.pathname.endsWith("update") ? (
            <UpdateCampus campus={campus} />
          ) : (
            <div className="card-text">
              Students:{" "}
              {campusStudents ? (
                <ul className="list-group">
                  {campusStudents.map(_student => (
                    <Student student={_student} key={_student.id} />
                  ))}
                </ul>
              ) : (
                "Loading..."
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default connect(mapStateToProps)(SingleCampus);
