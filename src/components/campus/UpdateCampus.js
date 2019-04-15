import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCampus } from "../../store";
import CampusForm from "./CampusForm";

const mapDispatchToProps = dispatch => ({
  updateCampus: campus => dispatch(updateCampus(campus))
});

class UpdateCampus extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      description: "",
      imgUrl: "",
      errors: []
    };
  }
  componentDidMount() {
    this.setState(this.props.campus);
  }
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.updateCampus(this.state)
      .catch(e => this.setState({ errors: e.response.data.errors }));
  };
  render() {
    const { name, address, description, imgUrl } = this.state;
    return (
      <div>
        <CampusForm
          name={name}
          description={description}
          address={address}
          imgUrl={imgUrl}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
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
)(UpdateCampus);
