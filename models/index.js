const Sequelize = require("sequelize");
const Company = require("./company");
const JobPosting = require("./jobPosting");
const Resume = require("./resume");

require("dotenv").config();
const env = process.env.NODE_ENV || "development";

const config = require(__dirname + "/../config/config.js")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;

db.Company = Company;
db.JobPosting = JobPosting;
db.Resume = Resume;

Company.init(sequelize);
JobPosting.init(sequelize);
Resume.init(sequelize);

module.exports = db;
