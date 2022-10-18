const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");

module.exports = class JobPosting extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        position: {
          type: Sequelize.STRING(20),
          allowNull: false, // not null
          unique: false,
        },
        signingBonus: {
          type: Sequelize.INTEGER,
          allowNull: false, // not null
          unique: false,
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false, // not null
          unique: false,
        },
        stack: {
          type: Sequelize.STRING(20),
          allowNull: false, // not null
          unique: false,
        },
      },
      {
        // If don't want createdAt
        createdAt: false,
        // If don't want updatedAt
        updatedAt: false,
        sequelize,
        underscored: true,
        paranoid: false,
        modelName: "JobPosting",
        tableName: "job_posting",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.JobPosting.belongsTo(db.Company, {
      foreignKey: "company_id",
      targetKey: "id",
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  }
};
