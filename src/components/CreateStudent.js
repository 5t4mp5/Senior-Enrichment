import React, { Component } from "react";
import { connect } from "react-redux";
import { addStudent } from "../store";

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
      gpa: 0
    };
  }
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addStudent(this.state)
      .then(() => this.props.history.push("/students"));
  };
  render() {
    const { firstName, lastName, email, imgUrl, gpa } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          className="form-control"
          type="text"
          value={firstName}
          name="firstName"
          onChange={this.handleChange}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          className="form-control"
          type="text"
          value={lastName}
          name="lastName"
          onChange={this.handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          type="text"
          value={email}
          name="email"
          onChange={this.handleChange}
        />

        <label htmlFor="imgUrl">Image URL</label>
        <input
          className="form-control"
          type="text"
          value={imgUrl}
          name="imgUrl"
          onChange={this.handleChange}
        />

        <label htmlFor="gpa">GPA</label>
        <input
          className="form-control"
          type="text"
          value={gpa}
          name="gpa"
          onChange={this.handleChange}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateStudent);