const { JobPosting } = require("../models");

exports.registerJobPosting = (data) => {
  return JobPosting.create(data);
};

exports.deleteJobPosting = (id) => {
  return JobPosting.destroy({
    where: { id },
  });
};

exports.findAllJobPosting = async () => {
  return makeFindAllData(await JobPosting.findAll());
};

exports.findByIdJobPosting = async (id) => {
  return await JobPosting.findByPk(id);
};

const makeFindAllData = (dataArr) => {
  return dataArr.map((data) => {
    return {
      id: data.id,
      position: data.position,
      signingBonus: data.signingBonus,
      stack: data.stack,
      company: data.company,
    };
  });
};
