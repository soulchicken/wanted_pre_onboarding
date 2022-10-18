const { Company } = require("../models");

exports.register = (data) => {
  return Company.create(data);
};
