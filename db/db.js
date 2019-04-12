const Sequelize = require("sequelize");
const db = Sequelize(process.env.DATABASE_URL, { logging: false });

module.exports = () => {
    db.authenticate()
        .then(() => db.sync())
        .then(() => console.log("DB SYNC COMPLETE"));
}
