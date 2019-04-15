import React, { Component } from "react";
import { connect } from "react-redux";
import { addStudent } from "../../store";
import StudentForm from "./StudentForm";
import Errors from "../Errors";

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
      campusId: "",
      errors: []
    };
  }
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props
      .addStudent(this.state)
      .then(() => this.props.history.push("/students"))
      .catch(e => this.setState({ errors: e.response.data.errors }));
  };
  render() {
    const { firstName, lastName, email, imgUrl, campusId, gpa } = this.state;
    return (
      <div>
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
        <Errors errors={this.state.errors} />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateStudent);
