import React, { Component } from "react";
import { connect } from "react-redux";
import Student from "./Student";
import LinkButton from "../LinkButton";
const mapStateToProps = state => ({
  students: state.students
});

class Students extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      campusId: "",
      noCampus: false
    };
  }
  componentDidMount() {
    this.setState({
      students: this.props.students,
      campusId: this.props.campusId
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.students.length !== this.props.students.length) {
      this.setState({
        students: this.props.students,
        campusId: this.props.campusId
      });
    }
  }

  render() {
    let { students, campusId, noCampus } = this.state;
    const { location } = this.props;
    if (noCampus) students = students.filter(student => !student.campusId);
    if (campusId)
      students = students.filter(student => student.campusId === campusId);
    return students ? (
      <div className="container" style={{ color: "DimGray" }}>
        <span>
          <h1>STUDENTS</h1>
          <LinkButton
            to="/students/create"
            className="btn btn-primary"
            label="Create Student"
          />
          {location && location.pathname.endsWith("students") ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.setState({ noCampus: !this.state.noCampus })}
              style={{ marginBottom: "10px", marginLeft: "10px" }}
            >
              {this.state.noCampus
                ? "Show All Students"
                : "Show Students with No Campus"}
            </button>
          ) : (
            ""
          )}
        </span>
        <ul className="list-group">
          {students.map(student => (
            <Student key={student.id} student={student} />
          ))}
        </ul>
      </div>
    ) : (
      <h2>Loading...</h2>
    );
  }
}

// const Students = ({ students, campusId }) => {
//   if(noCampus) students = students.filter(student => !student.campusId);
//   if(campusId) students = students.filter(student => student.campusId === campusId);
//   return students ? (
//     <div className="container" style={{ color: "DimGray" }}>
//       <span>
//         <h1>STUDENTS</h1>
//         <LinkButton
//           to="/students/create"
//           className="btn btn-primary"
//           label="Create Student"
//         />
//       </span>
//       <ul className="list-group">
//         {students.map(student => (
//           <Student key={student.id} student={student} />
//         ))}
//       </ul>
//     </div>
//   ) : (
//     <h2>Loading...</h2>
//   );
// };

export default connect(mapStateToProps)(Students);
