const Sequelize = require("sequelize");

module.exports = class Company extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(20),
          allowNull: false, // not null
          unique: true,
        },
        country: {
          type: Sequelize.STRING(20),
          allowNull: false, // not null
          unique: false,
        },
        region: {
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
        modelName: "Company",
        tableName: "company",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Company.hasMany(db.JobPosting, {
      foreignKey: "company_id",
      sourceKey: "id",
    });
  }
};
