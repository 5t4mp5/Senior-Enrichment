import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeCampus } from "../store";

const mapDispatchToProps = dispatch => ({
  deleteCampus: campus => dispatch(removeCampus(campus))
});

const Campus = ({ campus, deleteCampus }) => (
  <li className="list-group-item">
    <span>
      <Link to={`/campuses/${campus.id}`}>{campus.name}</Link><img src={campus.imgUrl} />
    </span>
    <button className="btn btn-danger" type="button" onClick={() => deleteCampus(campus)}>X</button>
  </li>
);

export default connect(null, mapDispatchToProps)(Campus);
