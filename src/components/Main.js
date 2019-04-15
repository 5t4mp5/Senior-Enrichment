import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { refreshCampuses, refreshStudents } from "../store";
import Campuses from "./Campuses";
import Students from "./Students";
import SingleStudent from "./SingleStudent";
import SingleCampus from "./SingleCampus";
import CreateCampus from "./CreateCampus";
import CreateStudent from "./CreateStudent";
import Nav from "./Nav";
import NoRoute from "./NoRoute";

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
        <Route component={Nav} />
        <Switch>
          <Route path="/campuses/:id" component={SingleCampus} />
          <Route path="/campuses" component={Campuses} />
          <Route path="/students/:id" component={SingleStudent} />
          <Route path="/students" component={Students} />
          <Route path="/create-campus" component={CreateCampus} />
          <Route path="/create-student" component={CreateStudent} />
          <Redirect exact from="/" to="/campuses" />
          <Route component={NoRoute} />
        </Switch>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Main);
