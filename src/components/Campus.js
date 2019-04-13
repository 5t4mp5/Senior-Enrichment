import React from "react";

const Campus = ({ campus }) => (
  <li className="list-group-item">
    <span>
      {campus.name} <img src={campus.imgUrl} />
    </span>
  </li>
);

export default Campus;
