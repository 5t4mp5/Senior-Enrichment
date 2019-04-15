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
      campusId: "",
      errors:[]
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
    this.props.updateStudent(this.state)
      .catch(e => this.setState({ errors: e.response.data.errors }));
  };
  render() {
    const { firstName, lastName, email, imgUrl, gpa, campusId } = this.state;
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
)(UpdateStudent);
