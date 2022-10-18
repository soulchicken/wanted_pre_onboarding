const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");

module.exports = class Resume extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {},
      {
        // If don't want createdAt
        createdAt: true,
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

  static associate(db) {
    db.Resume.belongsTo(db.User, {
      foreignKey: "user",
      targetKey: "id",
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    db.Resume.belongsTo(db.JobPosting, {
      foreignKey: "jobPosting",
      targetKey: "id",
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  }
};
