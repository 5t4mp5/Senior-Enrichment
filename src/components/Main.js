import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { refreshCampuses, refreshStudents } from "../store";
import { Campuses, CreateCampus, SingleCampus } from "./campus";
import { Students, SingleStudent, CreateStudent } from "./student";
import Nav from "./Nav";
import NoRoute from "./NoRoute";
import Errors from "./Errors";

const mapDispatchToProps = dispatch => ({
  refreshCampuses: () => dispatch(refreshCampuses()),
  refreshStudents: () => dispatch(refreshStudents())
});

class Main extends Component {
  constructor() {
    super();
    this.state = { errors: [] };
  }
  componentDidMount() {
    this.props
      .refreshCampuses()
      .catch(e => this.setState({ errors: e.response.data.errors }));
    this.props
      .refreshStudents()
      .catch(e => this.setState({ errors: e.response.data.errors }));
  }
  render() {
    return (
      <div style={{ minHeight: "100%" }}>
        <Route component={Nav} />
        <Switch>
          <Route path="/campuses/create" component={CreateCampus} />
          <Route path="/students/create" component={CreateStudent} />
          <Route path="/campuses/:id" component={SingleCampus} />
          <Route path="/campuses" component={Campuses} />
          <Route path="/students/:id" component={SingleStudent} />
          <Route path="/students" component={Students} />
          <Redirect exact from="/" to="/campuses" />
          <Route component={NoRoute} />
        </Switch>
        <Errors errors={this.state.errors} />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Main);
