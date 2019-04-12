const db = require("../db");
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

  module.exports = Campus;
