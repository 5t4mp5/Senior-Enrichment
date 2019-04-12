import React, { Component } from "react";
import { connect } from "react-redux";
import { refreshCampuses, refreshStudents } from "../store";

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
    return <h1>HELLO THERE!!</h1>;
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Main);
