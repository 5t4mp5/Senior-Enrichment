import React from "react";
import { FormField } from "../FormField";

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
      <FormField name="name" printName="Name" value={name} handleChange={handleChange} />
      <FormField name="address" printName="Address" value={address} handleChange={handleChange} />
      <FormField name="imgUrl" printName="Image URL" value={imgUrl} handleChange={handleChange} />
      <FormField name="description" printName="Description" value={description} handleChange={handleChange} />
      <button type="submit" className="btn btn-primary" style={{ marginTop: "10px", marginBottom: "10px" }} >
        Submit
      </button>
    </form>
  );
};

export default CampusForm;
