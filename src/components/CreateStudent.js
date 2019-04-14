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
        {this.state.errors.length > 0 ? (
          <ul className="alert alert-danger">
            {this.state.errors.map((error, i) => {
              return error.errors ? (
                error.errors.map((_error, j) => {
                  return <li key={i + j + _error.message}>{_error.message}</li>;
                })
              ) : error.length > 0 ? (
                <li key={i + error.message}>{error}</li>
              ) : (
                ""
              );
            })}
          </ul>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateStudent);
