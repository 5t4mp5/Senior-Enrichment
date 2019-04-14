import React, { Component } from "react";
import { connect } from "react-redux";
import { addStudent } from "../store";
import StudentForm from "./StudentForm";

const mapDispatchToProps = dispatch => ({
  addStudent: student => dispatch(addStudent(student))
});

class CreateStudent extends Component {
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
  handleChange = evt => {
      this.setState({ [evt.target.name]: evt.target.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props
      .addStudent(this.state)
      .then(() => this.props.history.push("/students"));
  };
  render() {
    const { firstName, lastName, email, imgUrl, campusId, gpa } = this.state;
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

export default connect(
  null,
  mapDispatchToProps
)(CreateStudent);
