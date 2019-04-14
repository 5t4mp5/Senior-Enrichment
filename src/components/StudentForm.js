import React from "react";

const StudentForm = ({
  firstName,
  lastName,
  email,
  imgUrl,
  gpa,
  handleSubmit,
  handleChange
}) => {
  return (
    <form onSubmit={handleSubmit}>
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

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default StudentForm;
