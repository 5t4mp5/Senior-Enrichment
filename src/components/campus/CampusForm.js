import React from "react";

const CampusForm = ({
  name,
  address,
  imgUrl,
  description,
  handleChange,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit} className="container">
      <label htmlFor="name">Name</label>
      <input
        className="form-control"
        type="text"
        value={name}
        name="name"
        onChange={handleChange}
      />

      <label htmlFor="address">Address</label>
      <input
        className="form-control"
        type="text"
        value={address}
        name="address"
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

      <label htmlFor="description">Description</label>
      <input
        className="form-control"
        type="text"
        value={description}
        name="description"
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CampusForm;
