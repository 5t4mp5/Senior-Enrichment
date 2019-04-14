import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCampus } from "../store";
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
      imgUrl: ""
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
    this.props.updateCampus(this.state);
  };
  render() {
    const { name, address, description, imgUrl } = this.state;
    return (
      <CampusForm
        name={name}
        description={description}
        address={address}
        imgUrl={imgUrl}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(UpdateCampus);
