const { JobPosting, Company } = require("../models");

exports.registerJobPosting = (data) => {
  return JobPosting.create(data);
};

exports.deleteJobPosting = async (id) => {
  const row = await JobPosting.destroy({
    where: { id },
  });
  if (row) {
    return "채용공고 삭제 완료";
  }
  return "해당 채용공고는 존재하지 않습니다.";
};

exports.findAllJobPosting = async () => {
  return makeFindAllData(
    await JobPosting.findAll({
      include: [
        {
          model: Company,
          attributes: ["name", "country", "region"],
        },
      ],
    })
  );
};

exports.findByIdJobPosting = async (id) => {
  const foundJobPosting = await JobPosting.findByPk(id, {
    include: [
      {
        model: Company,
        attributes: ["name", "country", "region"],
      },
    ],
  });
  if (foundJobPosting) return makeFindData(foundJobPosting);
  return "해당 채용공고는 존재하지 않습니다.";
};

exports.updateJobPosting = async (id, data) => {
  console.log(id, data);
  await JobPosting.update(data, { where: { id } });
  return this.findByIdJobPosting(id);
};

const makeFindAllData = (dataArr) => {
  return dataArr.map((data) => {
    return {
      id: data.id,
      position: data.position,
      signingBonus: data.signingBonus,
      stack: data.stack,
      company: data.Company.name,
      country: data.Company.country,
      region: data.Company.region,
    };
  });
};

const makeFindData = (data) => {
  return {
    id: data.id,
    position: data.position,
    signingBonus: data.signingBonus,
    stack: data.stack,
    description: data.description,
    company: data.Company.name,
    country: data.Company.country,
    region: data.Company.region,
  };
};
