import React, { Component } from "react";
import { connect } from "react-redux";
import { updateStudent } from "../../store";
import StudentForm from "./StudentForm";
import Errors from "../Errors";

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
    let { firstName, lastName, email, imgUrl, gpa, campusId } = this.state;
    return (
      <div>
        <StudentForm
          firstName={firstName}
          lastName={lastName}
          email={email}
          imgUrl={imgUrl ? imgUrl : ""}
          gpa={gpa}
          campusId={campusId ? campusId : ""}
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
)(UpdateStudent);
