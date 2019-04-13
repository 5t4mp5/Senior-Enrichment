import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ location }) => {
  const tabs = ["Campuses", "Students"];

  return (
    <ul className="nav nav-tabs">
      {tabs.map(tab => (
        <li key={tab} className="nav-item">
          <Link
            to={`/${tab.toLowerCase()}`}
            className={`nav-link ${
              location.pathname.endsWith(tab.toLowerCase()) ? "active" : ""
            }`}
          >
            {tab}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
