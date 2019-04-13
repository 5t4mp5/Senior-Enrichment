import React from "react";
import { connect } from "react-redux";
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
    </div>
  );
};

export default connect(mapStateToProps)(Campuses);
