const db = require("./db");
const { Campus, Student } = require("./models");
const seed = require("./seed");

const dbSyncAndSeed = () => {
  return db
    .authenticate()
    .then(() => db.sync({ force: true }))
    .then(() => seed())
    .then(() => console.log("DB SYNC AND SEED COMPLETE"));
};

module.exports = { dbSyncAndSeed, seed, Campus, Student };
