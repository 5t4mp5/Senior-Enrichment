import React, { Component } from "react";
import { connect } from "react-redux";
import { addCampus } from "../../store";
import CampusForm from "./CampusForm";
import Errors from "../Errors";

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
      description: "",
      errors: []
    };
  }
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props
      .addCampus(this.state)
      .then(() => this.props.history.push("/campuses"))
      .catch(e => this.setState({ errors: e.response.data.errors }));
  };
  render() {
    const { name, address, imgUrl, description } = this.state;
    return (
      <div>
        <CampusForm
          name={name}
          address={address}
          imgUrl={imgUrl}
          description={description}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Errors errors={this.state.errors} />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateCampus);
