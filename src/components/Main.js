import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { refreshCampuses, refreshStudents } from "../store";
import { Campuses, CreateCampus, SingleCampus } from "./campus";
import { Students, SingleStudent, CreateStudent } from "./student";
import Nav from "./Nav";
import NoRoute from "./NoRoute";

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
        {this.state.errors.length > 0 ? (
          <ul className="alert alert-danger">
            {this.state.errors.map((error, i) => {
              return error.errors ? (
                error.errors.map((_error, j) => {
                  return <li key={i + j + _error.message}>{_error.message}</li>;
                })
              ) : error.length > 0 ? (
                <li key={i + error.message}>{error}</li>
              ) : (
                ""
              );
            })}
          </ul>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Main);
