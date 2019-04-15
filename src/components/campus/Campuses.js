import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Campus from "./Campus";

const mapStateToProps = state => ({
  campuses: state.campuses
});

const Campuses = ({ campuses }) => {
  return (
    <div>
        <h1>CAMPUSES</h1>
      <ul className="list-group">
        {campuses.map(campus => (
          <Campus key={campus.id} campus={campus} />
        ))}
      </ul>
      <Link className="btn btn-primary" to="/create-campus">Create Campus</Link>
    </div>
  );
};

export default connect(mapStateToProps)(Campuses);
