import React, { Component } from "react";
import { connect } from "react-redux";
import { updateStudent } from "../store";
import StudentForm from "./StudentForm";

const mapDispatchToProps = dispatch => ({
  updateStudent: student => dispatch(updateStudent(student))
});

class UpdateStudent extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      imgUrl: "",
      gpa: 0,
      campusId: ""
    };
  }
  componentDidMount() {
    this.setState(this.props.student);
  }
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props
      .updateStudent(this.state);
  };
  render() {
    const { firstName, lastName, email, imgUrl, gpa, campusId } = this.state;
    return (
      <StudentForm
        firstName={firstName}
        lastName={lastName}
        email={email}
        imgUrl={imgUrl}
        gpa={gpa}
        campusId={campusId}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(UpdateStudent);
