import React, { Component } from "react";
import { connect } from "react-redux";
import { addCampus } from "../store";

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
    this.props.addCampus(this.state);
  };
  render() {
    const { name, address, imgUrl, description } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          type="text"
          value={name}
          name="name"
          onChange={this.handleChange}
        />

        <label htmlFor="address">Address</label>
        <input
          className="form-control"
          type="text"
          value={address}
          name="address"
          onChange={this.handleChange}
        />

        <label htmlFor="imgUrl">Image URL</label>
        <input
          className="form-control"
          type="text"
          value={imgUrl}
          name="imgUrl"
          onChange={this.handleChange}
        />

        <label htmlFor="description">Description</label>
        <input
          className="form-control"
          type="text"
          value={description}
          name="description"
          onChange={this.handleChange}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateCampus);
