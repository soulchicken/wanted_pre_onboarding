const Sequelize = require("sequelize");
const Company = require("./company");
const JobPosting = require("./jobPosting");
const Resume = require("./resume");
const User = require("./user");

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
db.User = User;

Company.init(sequelize);
JobPosting.init(sequelize);
Resume.init(sequelize);
User.init(sequelize);

Company.associate(db);
JobPosting.associate(db);

module.exports = db;
