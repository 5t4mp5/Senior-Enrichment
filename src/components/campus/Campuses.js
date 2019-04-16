import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Campus from "./Campus";
import LinkButton from "../../LinkButton";

const mapStateToProps = state => ({
  campuses: state.campuses
});

const Campuses = ({ campuses }) => {
  return campuses ? (
    <div className="container" style={{ color: "DimGray" }}>
      <h1>CAMPUSES</h1>
      <LinkButton to="/campuses/create" className="btn btn-primary" label="Create Campus" />
      <ul className="list-group" style={{ marginBottom: "10px" }}>
        {campuses.map(campus => (
          <Campus key={campus.id} campus={campus} />
        ))}
      </ul>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default connect(mapStateToProps)(Campuses);
