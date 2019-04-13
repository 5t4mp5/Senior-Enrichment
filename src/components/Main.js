import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { refreshCampuses, refreshStudents } from "../store";
import Campuses from "./Campuses";
import Students from "./Students";

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
    return (
      <div className="container">
        <Switch>
          <Route path="/campuses" component={Campuses} />
          <Route path="/students" component={Students} />
        </Switch>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Main);
