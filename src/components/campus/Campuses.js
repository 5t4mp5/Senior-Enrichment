import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Campus from "./Campus";

const mapStateToProps = state => ({
  campuses: state.campuses
});

const Campuses = ({ campuses }) => {
  return campuses ? (
    <div>
        <h1>CAMPUSES</h1>
      <ul className="list-group">
        {campuses.map(campus => (
          <Campus key={campus.id} campus={campus} />
        ))}
      </ul>
      <Link className="btn btn-primary" to="/campuses/create">Create Campus</Link>
    </div>
  ) : <h2>Loading...</h2>;
};

export default connect(mapStateToProps)(Campuses);
