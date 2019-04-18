import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ to, className, label }) => (
  <Link
    to={to}
    className={className}
    style={{
      marginBottom: "10px",
    }}
  >
    {label}
  </Link>
);

export default LinkButton;
