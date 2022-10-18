const Sequelize = require("sequelize");
const Company = require("./company");

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

Company.init(sequelize);

module.exports = db;
