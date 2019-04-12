const { dbSyncAndSeed } = require("./db");
const { Campus, Student } = require("./models");

module.exports = { dbSyncAndSeed, Campus, Student };
