const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {},
      {
        // If don't want createdAt
        createdAt: false,
        // If don't want updatedAt
        updatedAt: false,
        sequelize,
        underscored: true,
        paranoid: false,
        modelName: "User",
        tableName: "user",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};
