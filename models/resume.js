const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");

module.exports = class Resume extends Sequelize.Model {
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
        modelName: "Resume",
        tableName: "resume",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};
