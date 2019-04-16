import React from "react";
import { connect } from "react-redux";
import { FormField } from "../FormField";

const mapStateToProps = state => ({
  campuses: state.campuses
});

const StudentForm = ({
  firstName,
  lastName,
  email,
  imgUrl,
  gpa,
  campusId,
  campuses,
  handleSubmit,
  handleChange
}) => {
  if (campusId === null) campusId = "";
  return (
    <form
      onSubmit={handleSubmit}
      className="container"
    >
      <FormField
        name="firstName"
        printName="First Name"
        value={firstName}
        handleChange={handleChange}
      />
      <FormField
        name="lastName"
        printName="Last Name"
        value={lastName}
        handleChange={handleChange}
      />
      <FormField
        name="email"
        printName="Email"
        value={email}
        handleChange={handleChange}
      />
      <FormField
        name="imgUrl"
        printName="Image URL"
        value={imgUrl}
        handleChange={handleChange}
      />
      <FormField
        name="gpa"
        printName="GPA"
        value={gpa}
        handleChange={handleChange}
      />

      <label htmlFor="campus">Campus</label>
      <select
        className="form-control"
        name="campusId"
        value={campusId}
        onChange={handleChange}
      >
        <option value="">--none--</option>
        {campuses.map(_campus => (
          <option key={_campus.id} value={_campus.id}>
            {_campus.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ marginTop: "10px", marginBottom: "10px" }}
      >
        Submit
      </button>
    </form>
  );
};

export default connect(mapStateToProps)(StudentForm);
