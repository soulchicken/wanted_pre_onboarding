const { User, Resume } = require("../models");

exports.register = (data) => {
  return User.create(data);
};

exports.resume = async (data) => {
  if (await Resume.findOne({ where: { user: data.user } })) {
    return "지원서는 두 번 올릴 수 없습니다.";
  }
  return Resume.create(data);
};
