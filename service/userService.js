const { User } = require("../models");

exports.register = (data) => {
  return User.create(data);
};
