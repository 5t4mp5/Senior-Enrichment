import React from "react";

export const FormField = ({ name, printName, value, handleChange }) => (
  <div>
    <label htmlFor={name}>{ printName }</label>
    <input
      className="form-control"
      type="text"
      value={value}
      name={name}
      onChange={handleChange}
    />
  </div>
);
