import React from "react";
import { Link } from "react-router-dom";

const Campus = ({ campus }) => (
  <li className="list-group-item">
    <span>
      <Link to={`/campuses/${campus.id}`}>{campus.name}</Link><img src={campus.imgUrl} />
    </span>
  </li>
);

export default Campus;
