import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import axios from "axios";

const REFRESH_CAMPUSES = "REFRESH CAMPUSES";

const refreshCampusesActionCreator = campuses => ({
  type: REFRESH_CAMPUSES,
  campuses
});

export const refreshCampuses = () => {
  return dispatch => {
    return axios
      .get("/api/campuses")
      .then(response => response.data)
      .then(campuses => dispatch(refreshCampusesActionCreator(campuses)));
  };
};

const campusReducer = (state = [], action) => {
  switch (action.type) {
    case REFRESH_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
};

const REFRESH_STUDENTS = "REFRESH STUDENTS";

const refreshStudentsActionCreator = students => ({
  type: REFRESH_STUDENTS,
  students
});

export const refreshStudents = () => {
  return dispatch => {
    return axios
      .get("/api/students")
      .then(response => response.data)
      .then(students => dispatch(refreshStudentsActionCreator(students)));
  };
};

const studentReducer = (state = [], action) => {
  switch (action.type) {
    case REFRESH_STUDENTS:
      return action.students;
    default:
      return state;
  }
};

const reducer = combineReducers({
  campuses: campusReducer,
  students: studentReducer
});

export const getStudentCampus = (campusId, campuses) => {
   return campuses.find(campus => campusId === campus.id);
};

export const getCampusStudents = (campusId, students) => {
  return students.filter(student => student.campusId === campusId);
};

export const addCampus = campus => {
  return dispatch => {
    return axios.post("/api/campuses", campus)
      .then(() => dispatch(refreshCampuses()));
  };
};

export const addStudent = student => {
  return dispatch => {
    return axios.post("/api/students", student)
      .then(() => dispatch(refreshStudents()));
  };
};

export default createStore(reducer, applyMiddleware(thunkMiddleware, createLogger({ collapsed: true })))
