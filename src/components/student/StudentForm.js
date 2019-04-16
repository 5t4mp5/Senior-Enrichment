import React from "react";
import { connect } from "react-redux";

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
  if(campusId === null) campusId = "";
  return (
    <form onSubmit={handleSubmit} className="container" >
      <label htmlFor="firstName">First Name</label>
      <input
        className="form-control"
        type="text"
        value={firstName}
        name="firstName"
        onChange={handleChange}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        className="form-control"
        type="text"
        value={lastName}
        name="lastName"
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        className="form-control"
        type="text"
        value={email}
        name="email"
        onChange={handleChange}
      />

      <label htmlFor="imgUrl">Image URL</label>
      <input
        className="form-control"
        type="text"
        value={imgUrl}
        name="imgUrl"
        onChange={handleChange}
      />

      <label htmlFor="gpa">GPA</label>
      <input
        className="form-control"
        type="text"
        value={gpa}
        name="gpa"
        onChange={handleChange}
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

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default connect(mapStateToProps)(StudentForm);
