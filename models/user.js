const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(20),
          allowNull: false, // not null
          unique: false,
        },
        phoneNumber: {
          type: Sequelize.STRING(20),
          allowNull: false, // not null
          unique: false,
        },
        careerYear: {
          type: Sequelize.INTEGER,
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
        modelName: "User",
        tableName: "user",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.User.hasOne(db.Resume, {
      foreignKey: "user",
      sourceKey: "id",
    });
  }
};
