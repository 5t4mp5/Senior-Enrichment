const db = require("../db");
const Sequelize = db.Sequelize;

const Student = db.define("student", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "Student must have a first name."
      }
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "Student must have a last name."
      }
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "Student must have an email address."
      },
      isEmail: {
        args: true,
        msg: "Please enter a valid email address."
      }
    }
  },
  gpa: {
    type: Sequelize.DECIMAL(10, 1),
    validate: {
      min: 0.0,
      max: {
        args: 4.0,
        msg: "GPA cannot be greater than 4.0."
      }
    }
  }
});

module.exports = Student;
