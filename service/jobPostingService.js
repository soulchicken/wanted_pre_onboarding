const { JobPosting } = require("../models");

exports.register = (data) => {
  return JobPosting.create(data);
};

exports.deleteJobPosting = (id) => {
  return JobPosting.destroy({
    where: { id },
  });
};
