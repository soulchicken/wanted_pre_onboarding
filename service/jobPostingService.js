const { JobPosting } = require("../models");

exports.register = (data) => {
  return JobPosting.create(data);
};
