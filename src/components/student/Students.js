import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Student from "./Student";

const mapStateToProps = state => ({
  students: state.students
});

const Students = ({ students }) =>{
  return students ? (
    <div>
      <h1>STUDENTS</h1>
      <ul className="list-group">
        {students.map(student => (
          <Student key={student.id} student={student} />
        ))}
      </ul>
      <Link className="btn btn-primary" to="/create-student">Create Student</Link>
    </div>
  ) : <h2>Loading...</h2>;
};

export default connect(mapStateToProps)(Students);
