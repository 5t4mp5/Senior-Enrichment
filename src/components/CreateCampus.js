import React, { Component } from "react";
import { connect } from "react-redux";
import { addCampus } from "../store";
import CampusForm from "./CampusForm";

const mapDispatchToProps = dispatch => ({
  addCampus: campus => dispatch(addCampus(campus))
});

class CreateCampus extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      imgUrl: "",
      description: ""
    };
  }
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props
      .addCampus(this.state)
      .then(() => this.props.history.push("/campuses"));
  };
  render() {
    const { name, address, imgUrl, description } = this.state;
    return (
      <CampusForm
        name={name}
        address={address}
        imgUrl={imgUrl}
        description={description}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateCampus);
