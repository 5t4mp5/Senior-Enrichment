import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeCampus } from "../../store";

const mapDispatchToProps = dispatch => ({
  deleteCampus: campus => dispatch(removeCampus(campus))
});

const Campus = ({ campus, deleteCampus }) => (
  <li className="list-group-item" style={{ backgroundColor: "LightGray" }}>
    <span style={{ display: "flex", justifyContent: "space-between", backgroundColor: "LightGray" }}>
      <img
        src={campus.imgUrl}
        style={{
          width: "240px",
          height: "240px",
          objectFit: "cover",
          marginTop: "40px",
          borderRadius: "30%"
        }}
      />
      <Link
        to={`/campuses/${campus.id}`}
        style={{ fontSize: "48px" }}
      >
        {campus.name}
      </Link>
      <div>
      <button
        className="btn btn-danger"
        type="button"
        onClick={() => deleteCampus(campus)}
        style={{ float: "right" }}
      >
        X
      </button>
      </div>
    </span>
  </li>
);

export default connect(
  null,
  mapDispatchToProps
)(Campus);
