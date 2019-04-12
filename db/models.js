const { db } = require("./db");
const Sequelize = db.Sequelize;

const Campus = db.define("campus", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imgUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://img1.looper.com/img/gallery/the-most-terrible-things-george-costanza-ever-did/intro-1504276169.jpg"
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT
  }
});

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
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  gpa: {
    type: Sequelize.DECIMAL(10, 1),
    validate: {
      min: 0.0,
      max: 4.0
    }
  }
});

Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = { Campus, Student };
