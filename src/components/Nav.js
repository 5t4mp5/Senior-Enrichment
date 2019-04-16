import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ location }) => {
  const tabs = ["Campuses", "Students"];

  return (
    <ul className="nav nav-pills">
      {tabs.map(tab => (
        <li key={tab} className="nav-item">
          <Link
            to={`/${tab.toLowerCase()}`}
            className={`nav-link ${
              location.pathname.includes(tab.toLowerCase()) ? "active" : ""
            }`} style={{ marginBottom: "10px", marginTop: "10px" }}
          >
            {tab}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
