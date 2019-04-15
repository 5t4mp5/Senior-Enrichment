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
        notEmpty: {
          args: true,
          msg: "Campus must have a name."
        }
      }
    },
    imgUrl: {
      type: Sequelize.STRING,
      defaultValue:
        "https://img1.looper.com/img/gallery/the-most-terrible-things-george-costanza-ever-did/intro-1504276169.jpg",
      validate: {
        urlOrBlank(url){
          if(!Sequelize.Validator.isURL(url) && url.length > 0) throw new Error("Please enter a valid Image URL or leave the field bank.");
        } 
      }
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Campus must have an address."
        }
      }
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Campus must have a description."
        }
      }
    },
  }, {
    hooks: {
      beforeUpdate: campus => {
        if(!campus.imgUrl.length) campus.imgUrl = "https://img1.looper.com/img/gallery/the-most-terrible-things-george-costanza-ever-did/intro-1504276169.jpg";
      }
    }
  });

  module.exports = Campus;
