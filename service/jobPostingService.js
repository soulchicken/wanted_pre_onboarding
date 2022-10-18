const { JobPosting } = require("../models");

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
  return makeFindAllData(await JobPosting.findAll());
};

exports.findByIdJobPosting = async (id) => {
  return (
    (await JobPosting.findByPk(id)) || "해당 채용공고는 존재하지 않습니다."
  );
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
