import React, { Component } from "react";
import { getSingleStudent } from "../store";

class SingleStudent extends Component {
  constructor() {
    super();
    this.state = {};
  }
  loadStudent = () => {
    getSingleStudent(this.props.location.pathname.slice(10)).then(student =>
      this.setState(student)
    );
  };
  componentDidMount() {
    this.loadStudent();
  }
  render() {
    const student = this.state;
    console.log(student.imgUrl);
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
            {student.campus ? student.campus.name : "No Campus"}
          </p>
        </div>
      </div>
    );
  }
}

export default SingleStudent;
