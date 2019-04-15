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
  imgUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://static.wixstatic.com/media/8e35a8_257d4ecb99b7413cb492305a7bb8a969~mv2.jpg/v1/fill/w_626,h_352/8e35a8_257d4ecb99b7413cb492305a7bb8a969~mv2.jpg",
    validate: {
      urlOrBlank(url){
        if(!Sequelize.Validator.isURL(url) && url.length > 0) throw new Error("Please enter a valid Image URL or leave the field bank.");
      } 
    } 
  },
  gpa: {
    type: Sequelize.DECIMAL(10, 2),
    validate: {
      isDecimal: {
        args: true,
        msg: "GPA must be a number"
      },
      min: {
        args: [0],
        msg: "GPA cannot be less than 0.0"
      },
      max: {
        args: 4.0,
        msg: "GPA cannot be greater than 4.0."
      }
    }
  }
}, {
  hooks: {
    beforeUpdate: student => {
      if(!student.imgUrl.length) student.imgUrl = "https://static.wixstatic.com/media/8e35a8_257d4ecb99b7413cb492305a7bb8a969~mv2.jpg/v1/fill/w_626,h_352/8e35a8_257d4ecb99b7413cb492305a7bb8a969~mv2.jpg";
    }
  }
});

module.exports = Student;
