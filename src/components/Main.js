import React, { Component } from "react";
import { connect } from "react-redux";
import { refreshCampuses, refreshStudents } from "../store";
import Campuses from "./Campuses";

const mapDispatchToProps = dispatch => ({
  refreshCampuses: () => dispatch(refreshCampuses()),
  refreshStudents: () => dispatch(refreshStudents())
});

class Main extends Component {
  componentDidMount() {
    this.props.refreshCampuses().catch(e => console.log(e.message));
    this.props.refreshStudents().catch(e => console.log(e.message));
  }
  render() {
    return <Campuses />;
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Main);
